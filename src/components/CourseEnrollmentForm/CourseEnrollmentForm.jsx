import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import Swal from "sweetalert2";
import "./CourseEnrollmentForm.css";
import { submitContact } from "../../utils/contactApi";
import { showSendingSwal } from "../../utils/swalSending";

const CourseEnrollmentForm = ({ open, onClose, courseTitle }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    profession: "",
    course: courseTitle || "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required.";
    tempErrors.phoneNumber =
      formData.phoneNumber.length >= 10 ? "" : "Phone Number is not valid.";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid.";
    tempErrors.dateOfBirth = formData.dateOfBirth ? "" : "Date of Birth is required.";
    tempErrors.profession = formData.profession
      ? ""
      : "Profession is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      showSendingSwal();
      try {
        const message = [
          `Course enrollment: ${formData.course}`,
          `Date of birth: ${formData.dateOfBirth}`,
          `Profession: ${formData.profession}`,
        ].join('\n');
        await submitContact({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          message,
        });

        Swal.fire({
          title: 'Success!',
          text: 'Thanks for enrolling in the course. We will contact you soon.',
          icon: 'success',
          confirmButtonText: 'OK',
          width: '80%', // Increase width
          customClass: {
            popup: 'responsive-swal-popup', // Custom class for responsiveness
          }
        });
        onClose();
      } catch (error) {
        const detail =
          error instanceof Error && error.message
            ? error.message
            : 'Error submitting the form. Please try again later.';
        Swal.fire({
          title: 'Error!',
          text: detail,
          icon: 'error',
          confirmButtonText: 'OK',
          width: '80%', // Increase width
          customClass: {
            popup: 'responsive-swal-popup', // Custom class for responsiveness
          }
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="course-enrolment-dialog">
      <form onSubmit={handleSubmit}>
        <div className="h2-text">
          <h2>Enroll for {formData.course}</h2>
        </div>
        <DialogContent>
          <div className="text-1">
            <TextField
              label="Full Name"
              name="fullName"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
          </div>
  
          <div className="text-1">
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Date of Birth"
              name="dateOfBirth"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </div>
  
          <div className="text-1">
            <TextField
              label="Profession"
              name="profession"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.profession}
              helperText={errors.profession}
            />
          </div>
        </DialogContent>
  
        <div className="formbuttons">
          <Button 
            variant="outlined" 
            onClick={onClose} 
            color="error"
            className="cancel"
          >
            Cancel
          </Button>
          <Button 
            className="enroll" 
            type="submit" 
            variant="contained" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Enroll Now"}
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default CourseEnrollmentForm;
