import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    program: '',
    trainingTime: '',
    bio: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian name is required';
    }
    
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }
    
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const age = new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();
      if (age < 5 || age > 18) {
        newErrors.dateOfBirth = 'Student must be between 5 and 18 years old';
      }
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.program) {
      newErrors.program = 'Please select a program';
    }
    
    if (!formData.trainingTime) {
      newErrors.trainingTime = 'Please select a training time';
    }
    
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setShowSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white pt-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">Registration Successful!</h2>
          <p className="text-gray-600">Thank you for registering. We'll be in touch soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Registration Form</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Parent/Guardian Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Parent/Guardian Full Name *
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.parentName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.parentName && (
                <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
              )}
            </div>

            {/* Student Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student Full Name *
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.studentName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.studentName && (
                <p className="text-red-500 text-sm mt-1">{errors.studentName}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+1 (123) 456-7890"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Program */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Program *
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.program ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a program</option>
                <option value="football">Football Training</option>
                <option value="gym">Gym Program</option>
                <option value="both">Combined Program</option>
              </select>
              {errors.program && (
                <p className="text-red-500 text-sm mt-1">{errors.program}</p>
              )}
            </div>

            {/* Training Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Training Time *
              </label>
              <select
                name="trainingTime"
                value={formData.trainingTime}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.trainingTime ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (8:00 AM - 10:00 AM)</option>
                <option value="afternoon">Afternoon (2:00 PM - 4:00 PM)</option>
                <option value="evening">Evening (4:00 PM - 6:00 PM)</option>
              </select>
              {errors.trainingTime && (
                <p className="text-red-500 text-sm mt-1">{errors.trainingTime}</p>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Bio or Motivation (Optional)
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Tell us about your football experience and goals..."
              />
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#FF6F00] border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label className="text-sm text-gray-700">
                  I agree to the terms and conditions *
                </label>
                {errors.termsAccepted && (
                  <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm 