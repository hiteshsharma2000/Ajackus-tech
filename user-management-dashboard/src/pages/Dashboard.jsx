import React, { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../services/api";
import UserTable from "../components/User";
import UserForm from "../components/UserForm";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import FilterPopup from "../components/FilterPopup";
import Navbar from "../components/Navbar";

import Loader from "../components/Loading";
import UserGrid from "../components/User";

function Dashboard() {
  const [users, setUsers] = useState([]);
    const [toast, setToast] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [formUser, setFormUser] = useState(null);
  const [query, setQuery] = useState("");
    const [showFilter, setShowFilter] = useState(false);
     const [loading, setLoading] = useState(false);
     const [currentPage, setCurrentPage] = useState(1);
     const [limit, setLimit] = useState(10);



  const handleFilter = (filters) => {
    setFiltered(
      users.filter((u) => {
        const [firstName, lastName] = u.name.split(" ");
        return (
          (!filters.firstName || firstName?.toLowerCase().includes(filters.firstName.toLowerCase())) &&
          (!filters.lastName || lastName?.toLowerCase().includes(filters.lastName.toLowerCase())) &&
          (!filters.email || u.email.toLowerCase().includes(filters.email.toLowerCase())) &&
          (!filters.department ||
            u.company?.name.toLowerCase().includes(filters.department.toLowerCase()))
        );
      })
    );
    setCurrentPage(1);
  };

  // Pagination state

  useEffect(() => {
    getUsers()
      .then((res) => {
        setLoading(true)

        setUsers(res.data);
        setFiltered(res.data);
      })
      .catch(() =>{
        setLoading(true)
        alert("Failed to fetch users")})
      .finally(()=>{setLoading(false)})
  }, []);

  // Search filter
  useEffect(() => {
    setFiltered(
      users.filter(
        (u) =>
          u.name.toLowerCase().includes(query.toLowerCase()) ||
          u.email.toLowerCase().includes(query.toLowerCase())
      )
    );
    setCurrentPage(1);
  }, [query, users]);


  const reassignIds = (list) => {
  return list.map((u, index) => ({ ...u, id: index + 1 }));
};



  // Pagination logic
  const start = (currentPage - 1) * limit;
  const paginated = filtered.slice(start, start + limit);
  const totalPages = Math.ceil(filtered.length / limit);

 const handleSave = (user) => {
    setLoading(true)
  if (user.id) {
    // Edit
    updateUser(user.id, user).then(() => {
      const updated = users.map((u) => (u.id === user.id ? user : u));
      setUsers(reassignIds(updated));  
      setFormUser(null);
      setLoading(false)
      setToast({ message: "User updated successfully!", type: "success" });
      
    });
  } else {
    // Add

    addUser(user).then(() => {
        setLoading(true)
      const newUser = { ...user }; 
      const updated = [newUser, ...users];
      setUsers(reassignIds(updated)); 
      setFormUser(null);
      setLoading(false)
      setToast({ message: "User added successfully!", type: "success" });
    });
  }
};

const handleDelete = (id) => {
    
    setLoading(true)
  deleteUser(id).then(() => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(reassignIds(updated));  
  
    setToast({ message: "User deleted successfully!", type: "success" });
  }).catch(()=>{
    setLoading(true)
    setToast({ message: "something went wrong", type: "success" });
  }).finally(()=>{
    setLoading(false)
  })
};


 return (
    <>
      <Navbar 
   toast={toast} 
   setToast={setToast}  
  query={query}
  setQuery={setQuery}
  onFilterClick={() => setShowFilter(true)}
  onAddUser={() => setFormUser({ name: "", email: "", company: { name: "" } })}

/>

{loading ? <Loader loading={loading}/>: <div className="p-6 w-full mx-auto">
 <br />
 <br />
      <UserGrid toast={toast} setToast={setToast}  users={paginated} onEdit={setFormUser} onDelete={handleDelete} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        limit={limit}
        onLimitChange={setLimit}
        />

      {formUser && (
          <UserForm  user={formUser} onSubmit={handleSave} onCancel={() => setFormUser(null)} />
        )}

      {showFilter && (
          <FilterPopup onApply={handleFilter} onClose={() => setShowFilter(false)} />
        )}
      
    </div>}
   
        </>
  );
}

export default Dashboard;
