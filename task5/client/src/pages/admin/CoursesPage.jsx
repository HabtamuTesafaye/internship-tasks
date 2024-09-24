import React, { useState, useEffect } from 'react';
import { getAllCourses, createCourse, updateCourse, deleteCourse } from '../../services/courseService';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [editCourse, setEditCourse] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);
  
  // New state for alert message
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const courses = await getAllCourses();
    setCourses(courses);
  };

  const handleCreateCourse = async () => {
    try {
      const createdCourse = await createCourse(newCourse);
      setCourses([...courses, createdCourse]);
      setNewCourse({ title: '', description: '' });
      setShowCreateModal(false);
      setAlert({ show: true, message: 'Course created successfully!', variant: 'success' }); // Success message
    } catch (error) {
      setAlert({ show: true, message: 'Failed to create course.', variant: 'danger' }); // Error message
    }
  };

  const handleUpdateCourse = async () => {
    if (!editCourse) return;
    try {
      const updatedCourse = await updateCourse(editCourse.id, editCourse);
      setCourses(courses.map(course => (course.id === updatedCourse.id ? updatedCourse : course)));
      setEditCourse(null);
      setShowEditModal(false);
      setAlert({ show: true, message: 'Course updated successfully!', variant: 'success' }); // Success message
    } catch (error) {
      setAlert({ show: true, message: 'Failed to update course.', variant: 'danger' }); // Error message
    }
  };

  const handleDeleteCourse = async () => {
    if (courseToDelete) {
      try {
        await deleteCourse(courseToDelete);
        setCourses(courses.filter(course => course.id !== courseToDelete));
        setCourseToDelete(null);
        setShowDeleteModal(false);
        setAlert({ show: true, message: 'Course deleted successfully!', variant: 'success' }); // Success message
      } catch (error) {
        setAlert({ show: true, message: 'Failed to delete course.', variant: 'danger' }); // Error message
      }
    }
  };

  const handleCloseAlert = () => setAlert({ show: false, message: '', variant: '' }); // Close alert

  return (
    <div>
      <h2>Manage Courses</h2>

          {/* Aligning Add User Button to the Right and changing its color to success */}
    <div className="d-flex justify-content-end mb-3 me-5">
    <Button variant="success" onClick={() => setShowCreateModal(true)}>
       <FaPlus /> Add Course
      </Button>
    </div>

      {/* Alert Message */}
      {alert.show && (
        <Alert variant={alert.variant} onClose={handleCloseAlert} dismissible className="mt-3">
          {alert.message}
        </Alert>
      )}

      {/* Courses List */}
      <div className="table-responsive mt-3 me-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>
                  <Button variant="warning" className="me-2" onClick={() => { setEditCourse(course); setShowEditModal(true); }}>
                    <FaEdit/> Edit
                  </Button>
                  <Button variant="danger" onClick={() => { setCourseToDelete(course.id); setShowDeleteModal(true); }}>
                    <FaTrash /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Course Modal */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCourseTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCourseDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter course description"
                value={newCourse.description}
                onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleCreateCourse}>
            Create Course
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Course Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEditCourseTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={editCourse?.title || ''}
                onChange={(e) => setEditCourse({ ...editCourse, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEditCourseDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editCourse?.description || ''}
                onChange={(e) => setEditCourse({ ...editCourse, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpdateCourse}>
            Update Course
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this course?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteCourse}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CoursesPage;
