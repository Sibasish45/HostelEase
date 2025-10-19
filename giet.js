function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
function showCGPA() {
    const examType = document.getElementById('examType').value;
    const cgpaTable = document.getElementById('cgpaTable');

    if (examType) {
        cgpaTable.style.display = 'block';
    } else {
        cgpaTable.style.display = 'none';
    }
}function signOut() {
    console.log("Signing out..."); 
    window.history.replaceState(null, null, 'index.html'); 
  
    window.location.href = 'index.html'; 
  }
document.getElementById('documentUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const documentType = document.getElementById('documentType').value;
    const fileUpload = document.getElementById('fileUpload').files[0];
    
    if (documentType && fileUpload) {
        alert(`Document Type: ${documentType}\nFile Name: ${fileUpload.name}`);
        this.reset();
    } else {
        alert("Please select a document type and upload a file.");
    }
});