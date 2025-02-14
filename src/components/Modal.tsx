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