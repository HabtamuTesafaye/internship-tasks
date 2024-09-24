import React, { useState, useEffect } from 'react';
import { getAllUsers, createUser, updateUser, deleteUser } from '../../services/userService';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { Alert } from '@mui/material'; // Import Alert component

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'learner' });
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  
  // State for Success Message
  const [successMessage, setSuccessMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // To manage alert severity
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const users = await getAllUsers();
      setUsers(users);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      setError('Name, email, and password are required');
      return;
    }
    setError('');
    try {
      const createdUser = await createUser(newUser);
      setUsers([...users, createdUser]);
      setSuccessMessage(`User ${createdUser.name} created successfully!`); // Set success message
      setAlertSeverity('success'); // Set alert severity to success
      setNewUser({ name: '', email: '', password: '', role: 'learner' }); // Reset fields
      setShowAddModal(false); // Close modal

      // Automatically hide the message after a few seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); 
    } catch (err) {
      setError('Failed to create user: ' + (err.response ? err.response.data.error : err.message));
      setAlertSeverity('error'); // Set alert severity to error
      setSuccessMessage(''); // Clear success message
    }
  };

  const handleUpdateUser = async () => {
    if (!editUser.name || !editUser.email) {
      setError('Name and email are required');
      return;
    }
    setError('');
    try {
      const updatedUser = await updateUser(editUser.id, editUser);
      setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
      setEditUser(null);
      setShowEditModal(false);
      setSuccessMessage(`User ${updatedUser.name} updated successfully!`);
      setAlertSeverity('success'); // Set alert severity to success
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (err) {
      setError('Failed to update user');
      setAlertSeverity('error'); // Set alert severity to error
      setSuccessMessage(''); // Clear success message
    }
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(userIdToDelete);
      setUsers(users.filter(user => user.id !== userIdToDelete));
      setUserIdToDelete(null);
      setShowDeleteModal(false);
      setSuccessMessage('User deleted successfully!');
      setAlertSeverity('success'); // Set alert severity to success
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (err) {
      setError('Failed to delete user');
      setAlertSeverity('error'); // Set alert severity to error
      setSuccessMessage(''); // Clear success message
    }
  };

  return (
    <div className="container mt-5">
      <h2>Manage Users</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      
      {successMessage && (
        <Alert variant="outlined" severity={alertSeverity} style={{ marginBottom: '20px' }}>
          {successMessage}
        </Alert>
      )}
    {/* Aligning Add User Button to the Right and changing its color to success */}
    <div className="d-flex justify-content-end mb-3 me-5">
      <Button variant="success" onClick={() => setShowAddModal(true)}>
        <FaPlus /> Add User
      </Button>
    </div>

      {/* Users List */}
      <div className="table-responsive mt-3 me-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Button variant="warning" className="m-2" onClick={() => { setEditUser(user); setShowEditModal(true); }}>
                    <FaEdit /> Edit
                  </Button>
                  <Button variant="danger" onClick={() => { setUserIdToDelete(user.id); setShowDeleteModal(true); }}>
                    <FaTrash /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUserName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formUserEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formUserPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formUserRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option value="learner">Learner</option>
                <option value="admin">Admin</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleCreateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit User Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUserName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editUser?.name}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formUserEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editUser?.email}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formUserPassword">
              <Form.Label>Password (Leave blank to keep unchanged)</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formUserRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                value={editUser?.role}
                onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
              >
                <option value="learner">Learner</option>
                <option value="admin">Admin</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpdateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this user?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UsersPage;
