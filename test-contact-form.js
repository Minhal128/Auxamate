// Test script for Web3Forms contact form submission
// Run with: node test-contact-form.js

const testContactForm = async () => {
  try {
    console.log('🚀 Testing Web3Forms contact form submission...');
    
    // Create form data
    const formData = new FormData();
    formData.append("access_key", "613e8bf2-e273-4b0e-a1ff-a997de627a09");
    formData.append("name", "minhal128");
    formData.append("email", "minhal128@test.com");
    formData.append("phone", "+92 332 2298529");
    formData.append("message", "test by minhal128");
    formData.append("subject", "Test Submission from minhal128");

    // Submit to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log('✅ Test message sent successfully!');
      console.log('📧 Check your email for the test submission');
      console.log('Response:', data);
    } else {
      console.log('❌ Test failed:', data.message);
      console.log('Full response:', data);
    }
  } catch (error) {
    console.error('❌ Error during test:', error.message);
  }
};

// Run the test
testContactForm();
