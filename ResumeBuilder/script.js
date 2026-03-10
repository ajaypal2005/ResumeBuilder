  let projectCount = 0;
        let internshipCount = 0;
        let certCount = 0;
        
        function addProject() {
            const id = projectCount++;
            const container = document.getElementById('projectsContainer');
            const html = `
                <div class="entry-box" id="project-${id}">
                    <div class="row">
                        <div class="form-group">
                            <label>Project Name</label>
                            <input type="text" class="projName" onchange="updatePreview()" placeholder="E-commerce Website">
                        </div>
                        <div class="form-group">
                            <label>Date/Duration</label>
                            <input type="text" class="projDate" onchange="updatePreview()" placeholder="2024">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="projDesc" onchange="updatePreview()" placeholder="Brief description and achievements..."></textarea>
                    </div>
                    <div class="form-group">
                        <label>Technologies</label>
                        <input type="text" class="projTech" onchange="updatePreview()" placeholder="React, Node.js, MongoDB">
                    </div>
                    <button type="button" class="remove-btn" onclick="removeProject(${id})">Remove</button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
            updatePreview();
        }
        
        function removeProject(id) {
            const el = document.getElementById(`project-${id}`);
            if (el) el.remove();
            updatePreview();
        }
        
        function addInternship() {
            const id = internshipCount++;
            const container = document.getElementById('internshipsContainer');
            const html = `
                <div class="entry-box" id="internship-${id}">
                    <div class="row">
                        <div class="form-group">
                            <label>Job Title</label>
                            <input type="text" class="intTitle" onchange="updatePreview()" placeholder="Web Developer Intern">
                        </div>
                        <div class="form-group">
                            <label>Duration</label>
                            <input type="text" class="intDuration" onchange="updatePreview()" placeholder="June - August 2024">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Company</label>
                        <input type="text" class="intCompany" onchange="updatePreview()" placeholder="Company Name">
                    </div>
                    <div class="form-group">
                        <label>Responsibilities/Achievements (one per line)</label>
                        <textarea class="intDesc" onchange="updatePreview()" placeholder="Developed responsive web apps&#10;Collaborated with teams"></textarea>
                    </div>
                    <button type="button" class="remove-btn" onclick="removeInternship(${id})">Remove</button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
            updatePreview();
        }
        
        function removeInternship(id) {
            const el = document.getElementById(`internship-${id}`);
            if (el) el.remove();
            updatePreview();
        }
        
        function addCertification() {
            const id = certCount++;
            const container = document.getElementById('certificationsContainer');
            const html = `
                <div class="entry-box" id="cert-${id}">
                    <div class="row">
                        <div class="form-group">
                            <label>Certification Name</label>
                            <input type="text" class="certName" onchange="updatePreview()" placeholder="React Fundamentals">
                        </div>
                        <div class="form-group">
                            <label>Issued By</label>
                            <input type="text" class="certIssuer" onchange="updatePreview()" placeholder="Coursera, Udemy">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Date</label>
                        <input type="text" class="certDate" onchange="updatePreview()" placeholder="March 2024">
                    </div>
                    <button type="button" class="remove-btn" onclick="removeCert(${id})">Remove</button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
            updatePreview();
        }
        
        function removeCert(id) {
            const el = document.getElementById(`cert-${id}`);
            if (el) el.remove();
            updatePreview();
        }
        
        function updatePreview() {
            // Personal Info
            document.getElementById('previewName').textContent = document.getElementById('fullName').value || 'Your Name';
            
            const contacts = [];
            const phone = document.getElementById('phone').value;
            if (phone) contacts.push(phone);
            const email = document.getElementById('email').value;
            if (email) contacts.push(email);
            const location = document.getElementById('location').value;
            if (location) contacts.push(location);
            const linkedin = document.getElementById('linkedin').value;
            if (linkedin) contacts.push(linkedin);
            
            document.getElementById('previewPhone').textContent = contacts.join(' | ');
            
            // Summary
            const summary = document.getElementById('summary').value;
            if (summary) {
                document.getElementById('summarySection').style.display = 'block';
                document.getElementById('previewSummary').textContent = summary;
            } else {
                document.getElementById('summarySection').style.display = 'none';
            }
            
            // Education
            document.getElementById('previewDegree').textContent = document.getElementById('degree').value || 'B.Tech';
            document.getElementById('previewField').textContent = document.getElementById('field').value || 'Computer Science';
            document.getElementById('previewUniversity').textContent = document.getElementById('university').value || 'University';
            document.getElementById('previewGradYear').textContent = document.getElementById('gradYear').value || '2027';
            
            const gpa = document.getElementById('gpa').value;
            document.getElementById('previewGpaDisplay').textContent = gpa ? ` | GPA: ${gpa}` : '';
            
            // Skills
            const backend = document.getElementById('backend').value;
            if (backend) {
                document.getElementById('backendRow').style.display = 'block';
                document.getElementById('previewBackend').textContent = backend;
            } else {
                document.getElementById('backendRow').style.display = 'none';
            }
            
            const tools = document.getElementById('tools').value;
            if (tools) {
                document.getElementById('toolsRow').style.display = 'block';
                document.getElementById('previewTools').textContent = tools;
            } else {
                document.getElementById('toolsRow').style.display = 'none';
            }
            
            const concepts = document.getElementById('concepts').value;
            if (concepts) {
                document.getElementById('conceptsRow').style.display = 'block';
                document.getElementById('previewConcepts').textContent = concepts;
            } else {
                document.getElementById('conceptsRow').style.display = 'none';
            }
            
            document.getElementById('previewFrontend').textContent = document.getElementById('frontend').value || 'HTML, CSS, JavaScript, React';
            
            // Projects
            const projectBoxes = document.querySelectorAll('#projectsContainer .entry-box');
            if (projectBoxes.length > 0) {
                document.getElementById('projectsSection').style.display = 'block';
                let projectsHtml = '';
                projectBoxes.forEach(box => {
                    const name = box.querySelector('.projName').value;
                    const date = box.querySelector('.projDate').value;
                    const desc = box.querySelector('.projDesc').value;
                    const tech = box.querySelector('.projTech').value;
                    
                    if (name) {
                        projectsHtml += `
                            <div class="resume-entry">
                                <div class="resume-entry-header">
                                    <span>${name}</span>
                                    ${date ? `<span>${date}</span>` : ''}
                                </div>
                                ${desc ? `<div class="resume-entry-content">${desc}</div>` : ''}
                                ${tech ? `<div class="resume-entry-content" style="margin-top:2px;"><strong>Tech:</strong> ${tech}</div>` : ''}
                            </div>
                        `;
                    }
                });
                document.getElementById('previewProjects').innerHTML = projectsHtml;
            } else {
                document.getElementById('projectsSection').style.display = 'none';
            }
            
            // Internships
            const internshipBoxes = document.querySelectorAll('#internshipsContainer .entry-box');
            if (internshipBoxes.length > 0) {
                document.getElementById('internshipsSection').style.display = 'block';
                let internshipsHtml = '';
                internshipBoxes.forEach(box => {
                    const title = box.querySelector('.intTitle').value;
                    const duration = box.querySelector('.intDuration').value;
                    const company = box.querySelector('.intCompany').value;
                    const desc = box.querySelector('.intDesc').value;
                    
                    if (title) {
                        internshipsHtml += `
                            <div class="resume-entry">
                                <div class="resume-entry-header">
                                    <span>${title}</span>
                                    ${duration ? `<span>${duration}</span>` : ''}
                                </div>
                                ${company ? `<div class="resume-entry-subtitle">${company}</div>` : ''}
                                ${desc ? `<div class="resume-entry-content"><ul>${desc.split('\n').filter(l => l.trim()).map(l => `<li>${l.trim()}</li>`).join('')}</ul></div>` : ''}
                            </div>
                        `;
                    }
                });
                document.getElementById('previewInternships').innerHTML = internshipsHtml;
            } else {
                document.getElementById('internshipsSection').style.display = 'none';
            }
            
            // Certifications
            const certBoxes = document.querySelectorAll('#certificationsContainer .entry-box');
            if (certBoxes.length > 0) {
                document.getElementById('certificationsSection').style.display = 'block';
                let certsHtml = '';
                certBoxes.forEach(box => {
                    const name = box.querySelector('.certName').value;
                    const issuer = box.querySelector('.certIssuer').value;
                    const date = box.querySelector('.certDate').value;
                    
                    if (name) {
                        certsHtml += `
                            <div class="resume-entry">
                                <div class="resume-entry-header">
                                    <span>${name}</span>
                                    ${date ? `<span>${date}</span>` : ''}
                                </div>
                                ${issuer ? `<div class="resume-entry-subtitle">${issuer}</div>` : ''}
                            </div>
                        `;
                    }
                });
                document.getElementById('previewCertifications').innerHTML = certsHtml;
            } else {
                document.getElementById('certificationsSection').style.display = 'none';
            }
        }
        
        function downloadPDF() {
            window.print();
        }
        
        // Initial preview
        updatePreview();