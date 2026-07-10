export const createInitialFormState = () => ({
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
  dob: '',
  gender: '',
  address: '',
  city: '',
  image: null,
  imagePreview: null,
});

export const buildAvatarUrl = (name, size = 120) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1d4ed8&color=ffffff&rounded=true&size=${size}`;

export const validateRegistrationForm = (formData) => {
  if (formData.password !== formData.confirmPassword) {
    return '? Passwords do not match!';
  }

  if (!formData.imagePreview) {
    return '? Please upload an image!';
  }

  if (!formData.gender) {
    return '? Please select a gender!';
  }

  return null;
};

export const getProfileMeta = (id) => ({
  role: id % 3 === 0 ? 'Manager' : 'Team Member',
  level: `Level ${((id - 1) % 3) + 1}`,
});
