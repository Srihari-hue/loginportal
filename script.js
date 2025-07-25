
        // Array to store submitted login details
        let submittedDetails = [];

        // Function to show the appropriate login form based on the role selected
        function showRoleForm() {
            // Hide all role-specific forms

            document.getElementById('adminForm').style.display="none";
            document.getElementById('studentForm').style.display="none";
            document.getElementById('teacherForm').style.display="none";
            document.getElementById('message').textContent = ''; // Clear any previous message

            const role = document.getElementById('roleSelect').value;

            // Show the corresponding form based on the selected role
            if (role === 'admin') {
                document.getElementById('adminForm').style.display = 'block';
            } else if (role === 'student') {
                document.getElementById('studentForm').style.display = 'block';
            } else if (role === 'teacher') {
                document.getElementById('teacherForm').style.display = 'block';
            }
        }

        // Function to handle the form submission
        function submitForm(role) {
            let username, password, additionalField;

            // Get the values based on the selected role
            if (role === 'admin') {
                username = document.getElementById('adminUsername').value;
                password = document.getElementById('adminPassword').value;
                additionalField = document.getElementById('adminCode').value;
            } else if (role === 'student') {
                username = document.getElementById('studentUsername').value;
                password = document.getElementById('studentPassword').value;
                additionalField = document.getElementById('studentID').value;
            } else if (role === 'teacher') {
                username = document.getElementById('teacherUsername').value;
                password = document.getElementById('teacherPassword').value;
                additionalField = document.getElementById('teacherSubject').value;
            }

            // Check if all fields are filled
            if (username && password && additionalField) {
                // Store the submitted details in an object
                let loginDetails = {
                    role: role.charAt(0).toUpperCase() + role.slice(1),
                    username: username,
                    password: password,
                    additionalField: additionalField
                };                
                // Add the details to the array
                submittedDetails.push(loginDetails);

                // Display the updated list of submitted details
                displaySubmittedDetails();

                // Clear the form and reset the dropdown
                resetForms();
            } else {
                document.getElementById('message').textContent = 'Please fill out all fields!';
                document.getElementById('message').style.color = 'red';
            }
        }

        // Function to display the submitted details in a list
        function displaySubmittedDetails() {
            const loginDetailsList = document.getElementById('loginDetailsList');
            loginDetailsList.innerHTML = '';  // Clear previous list items

            // Loop through the array and display each submitted detail
            submittedDetails.forEach((detail, index) => {
                let listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>${detail.role} Login:</strong><br>
                    Username: ${detail.username}<br>
                    Password: ${detail.password}<br>
                    ${detail.role === 'Admin' ? 'Admin Code: ' + detail.additionalField : 
                     detail.role === 'Student' ? 'Student ID: ' + detail.additionalField : 
                     'Subject: ' + detail.additionalField}
                `;
                loginDetailsList.appendChild(listItem);
            });
        }

        // Function to reset all input fields
        function resetForms() {
            document.getElementById('adminUsername').value = '';
            document.getElementById('adminPassword').value = '';
            document.getElementById('adminCode').value = '';
            document.getElementById('studentUsername').value = '';
            document.getElementById('studentPassword').value = '';
            document.getElementById('studentID').value = '';
            document.getElementById('teacherUsername').value = '';
            document.getElementById('teacherPassword').value = '';
            document.getElementById('teacherSubject').value = '';
            document.getElementById('roleSelect').value = '';
        }