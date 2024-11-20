const searchedCertificate = document.querySelector("#search-certificate"); 
const searchResult = document.querySelector("#search-result"); 

// Array of certificates
const certificates = [
  {
    certificateNumber: "SGTechSt24639312",
    companyName: "SGTech Technology Pvt Ltd",
    studentName: "SHUBHAM GUPTA",
    collegeName: "Shambhunath Institute of Engg & Technology",
    issueDate: "2024-10-25",
    certificateStandard: "ISO : 9001:2015",
  },
  {
    certificateNumber: "SGTechSt24639321",
    companyName: "SGTech Technology Pvt Ltd",
    studentName: "Prashant Upadhyay",
    collegeName: "Shambhunath Institute of Engg & Technology",
    issueDate: "2024-10-25",
    certificateStandard: "ISO : 9001:2015",
  },
  {
    certificateNumber: "SGTechSt24639390",
    companyName: "SGTech Technology Pvt Ltd",
    studentName: "Priyanshu Mishra",
    collegeName: "Shambhunath Institute of Engg & Technology",
    issueDate: "2024-10-19",
    certificateStandard: "ISO : 9001:2015",
  },
  {
    certificateNumber: "SGTechSt247712",
    companyName: "SGTech Technology Pvt Ltd",
    studentName: "Sandeep Kumar Bharti",
    collegeName: "Shambhunath Institute of Engg & Technology",
    issueDate: "2024-10-14",
    certificateStandard: "ISO : 9001:2015",
  },
  {
    certificateNumber: "SGTechSt24639355",
    companyName: "SGTech Technology Pvt Ltd",
    studentName: "Shivam Yadav",
    collegeName: "Shambhunath Institute of Engg & Technology",
    issueDate: "2024-10-13",
    certificateStandard: "ISO : 9001:2015",
  },
  {
    certificateNumber: "SGTechSt24639314",
    companyName: "SGTech Technology Pvt Ltd",
    studentName: "Shubham Singh",
    collegeName: "Shambhunath Institute of Engg & Technology",
    issueDate: "2024-09-14",
    certificateStandard: "ISO : 9001:2015",
  },
  {
    certificateNumber: "SGTechSt247713",
    companyName: "SGTech Technology Pvt Ltd",
    studentName: "Amar Singh",
    collegeName: "Shambhunath Institute of Engg & Technology",
    issueDate: "2024-10-09",
    certificateStandard: "ISO : 9001:2015",
  },
  {
    certificateNumber: "SGTechSt24639385",
    companyName: "SGTech Technology Pvt Ltd",
    studentName: "Falak",
    collegeName: "Shambhunath Institute of Engg & Technology",
    issueDate: "2024-10-16",
    certificateStandard: "ISO : 9001:2015",
  },
  {
    certificateNumber: "SGTechSt24639342",
    companyName: "SGTech Technology Pvt Ltd",
    studentName: "AMARENDRA SINGH",
    collegeName: "Shambhunath institute of engineering & technology",
    issueDate: "2024-10-05",
    certificateStandard: "ISO : 9001:2015",
  },
];

// Function to show the modal
function showModal() {
    document.getElementById("popup-modal").classList.remove("hidden");
}

// Function to hide the modal
function hideModal() {
    document.getElementById("popup-modal").classList.add("hidden");
}

// Add event listener for "close" button
document.getElementById("close-modal").addEventListener("click", hideModal);
document.getElementById("close-ok").addEventListener("click", hideModal);


// Handle form submission
document.getElementById('certificate-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form reload

    const certificateNumber = document.getElementById('certificate-number').value.trim();
    const certificateDate = document.getElementById('certificate-date').value.trim();

    // Search for the certificate
    const certificate = certificates.find(cert => 
        cert.certificateNumber === certificateNumber && cert.issueDate === certificateDate
    );

    // Update the paragraph elements
    if (certificate) {
        searchedCertificate.classList.add("hidden");
        searchResult.classList.remove("hidden");
        document.getElementById('display-certificate-number').textContent = certificate.certificateNumber;
        document.getElementById('display-student-name').textContent = certificate.studentName;
        document.getElementById('display-company-name').textContent = certificate.companyName;
        document.getElementById('display-college-name').textContent = certificate.collegeName;
        document.getElementById('display-issue-date').textContent = certificate.issueDate;
        document.getElementById('display-certificate-standard').textContent = certificate.certificateStandard;
    } else {
        searchedCertificate.classList.remove("hidden");
         showModal(); 
    }
});

