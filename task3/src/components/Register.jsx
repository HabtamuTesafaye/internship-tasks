import { useState } from 'react';
import { Link } from 'react-router-dom';


const RegistrationPage = () => {
  // State for form data and validation feedback
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    iAgree: false,
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');

  // Regex for password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'A valid email is required';
    }

    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = formData.password ? 'Passwords do not match' : 'Please fill in the password first';
    }

    if (!formData.iAgree) {
      newErrors.iAgree = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully', formData);
      // Optionally, make an API call here to submit the form data.
    }
  };

  // Handle input change and real-time validation
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Dynamic password strength check
    if (name === 'password') {
      evaluatePasswordStrength(value);
      if (formData.confirmPassword && value !== formData.confirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: 'Passwords do not match',
        }));
      } else if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: 'Please fill in the password first',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: '',
        }));
      }
    } else if (name === 'confirmPassword') {
      if (value && value !== formData.password) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: 'Passwords do not match',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: '',
        }));
      }
    }
  };

  // Function to evaluate password strength
  const evaluatePasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength('');
      return;
    }

    let strength = '';
    if (password.length < 8) {
      strength = 'Too short';
    } else if (passwordRegex.test(password)) {
      strength = 'Strong';
    } else {
      strength = 'Weak';
    }
    setPasswordStrength(strength);
  };

  return (
    <section className="p-3 p-md-2 p-xl-3">
      <div className="container-fluid">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-md-6 text-bg-primary">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="col-10 col-xl-8 py-3">
                  <hr className="border-primary-subtle mb-4" />
                  <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                  <p className="lead m-0">We write words, take photos, make videos, and interact with artificial intelligence.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <h2 className="h3">Registration</h2>
                      <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    {/* First Name Field */}
                    <div className="col-12">
                      <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>

                    {/* Last Name Field */}
                    <div className="col-12">
                      <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>

                    {/* Email Field */}
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    {/* Password Field */}
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      {/* Show password strength */}
                      <div className={`mt-2 ${passwordStrength === 'Strong' ? 'text-success' : 'text-warning'}`}>
                        {passwordStrength && `Password Strength: ${passwordStrength}`}
                      </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="col-12">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                      <input
                        type="password"
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
                      {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                    </div>

                    {/* Agree to Terms */}
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className={`form-check-input ${errors.iAgree ? 'is-invalid' : ''}`}
                          type="checkbox"
                          name="iAgree"
                          id="iAgree"
                          checked={formData.iAgree}
                          onChange={handleChange}
                        />
                        <label className="form-check-label text-secondary" htmlFor="iAgree">
                          I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                        </label>
                        {errors.iAgree && <div className="invalid-feedback d-block">{errors.iAgree}</div>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Sign-In Link */}
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-secondary text-center">Already have an account? <Link to="/login" className="link-primary text-decoration-none">Sign in</Link></p>
                  </div>
                </div>

                {/* Social Media Sign-In */}
                <div className="row">
                  <div className="col-12">
                    <p className="mt-5 mb-4">Or sign in with</p>
                    <div className="d-flex gap-3 flex-column flex-xl-row">
                      <a href="#!" className="btn bsb-btn-xl btn-outline-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        <span className="ms-2 fs-6">Google</span>
                      </a>
                      <a href="#!" className="btn bsb-btn-xl btn-outline-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        <span className="ms-2 fs-6">Facebook</span>
                      </a>
                      <a href="#!" className="btn bsb-btn-xl btn-outline-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        <span className="ms-2 fs-6">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
