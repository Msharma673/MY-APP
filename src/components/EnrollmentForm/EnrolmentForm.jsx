import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import Swal from "sweetalert2";
import "./Enrolment.css";
import { submitContact } from "../../utils/contactApi";
import { showSendingSwal } from "../../utils/swalSending";

const EnrolmentForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    occupation: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "First Name is required.";
    tempErrors.lastName = formData.lastName ? "" : "Last Name is required.";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid.";
    tempErrors.phoneNumber =
      formData.phoneNumber.length >= 10 ? "" : "Phone Number is not valid.";
    tempErrors.occupation = formData.occupation
      ? ""
      : "Occupation is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true); // Start loading spinner
      showSendingSwal();
      try {
        const name = `${formData.firstName} ${formData.lastName}`.trim();
        const message = `Demo enrollment — Occupation: ${formData.occupation}`;
        await submitContact({
          name,
          email: formData.email,
          phone: formData.phoneNumber,
          message,
        });

        Swal.fire({
          title: 'Success!',
          text: 'Thanks for filling up the form. We will contact you soon.',
          icon: 'success',
          confirmButtonText: 'OK',
          width: '80%', // Increase width for better visibility
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
          width: '80%', // Increase width for better visibility
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
    <Dialog open={open} onClose={onClose} className="enrolment-dialog">
      <form onSubmit={handleSubmit}>
        <div className="h2-text">
          <h2>Enroll for Demo</h2>
        </div>
        <DialogContent>
          <div className="text-1">
            <TextField
              label="First Name"
              name="firstName"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
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
              label="Your Occupation"
              name="occupation"
              fullWidth
              margin="normal"
              onChange={handleChange}
              error={!!errors.occupation}
              helperText={errors.occupation}
            />
          </div>
        </DialogContent>
  
        <div className="formbuttons">
          <Button variant="outlined" onClick={onClose} color="error">
            Cancel
          </Button>
          <Button className="enroll" type="submit" variant="contained" disabled={isSubmitting}>
           {isSubmitting ? "Submitting..." : "Enroll Now"}
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default EnrolmentForm;
