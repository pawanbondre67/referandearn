
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

const ReferEarn : React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  
  const onSubmit = async (data) => {
const { referee_email , referrer_name , referee_name ,course} = data;
    console.log(data);
    const formData = {
    
        service_id: 'service_u8h63r3',
        template_id: 'template_870tnpe',
        user_id: 'FCi_VZjNCv1E3TVtY',
        template_params: {
            receiverName: referee_name,
            senderName: referrer_name,
            receiverEmail: referee_email,
            courseName: course,
        },
      };


    try {
      await axios.post("http://localhost:5000/api/referrals", data);
      alert("Referral submitted successfully!");
      
      reset();
      setIsOpen(false);
      try {
        const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", formData);
        console.log("Email sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending email:", error.response?.data || error.message);
      }

    } catch (error) {
      console.error(error);
      alert("Error submitting referral.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Button
        variant="contained"
        onClick={() => {
          setIsOpen(true);
          console.log("Refer Now button clicked");
        }}
      >
        Refer Now
      </Button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Refer a Course
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextField
              {...register("referrer_name", { required: true })}
              label="Your Name"
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.referrer_name}
              helperText={errors.referrer_name ? "Required" : ""}
            />
            <TextField
              {...register("referrer_email", { required: true })}
              label="Your Email"
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.referrer_email}
              helperText={errors.referrer_email ? "Required" : ""}
            />
            <TextField
              {...register("referee_name", { required: true })}
              label="Referee Name"
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.referee_name}
              helperText={errors.referee_name ? "Required" : ""}
            />
            <TextField
              {...register("referee_email", { required: true })}
              label="Referee Email"
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.referee_email}
              helperText={errors.referee_email ? "Required" : ""}
            />
            <TextField
              {...register("course", { required: true })}
              label="Course Name"
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.course}
              helperText={errors.course ? "Required" : ""}
            />
            <Button type="submit" variant="contained" fullWidth>
              Submit Referral
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ReferEarn;