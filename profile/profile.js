function downloadResume() {
    const resumeFilePath = 'https://www.msnlabs.com/img/resume-sample.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;
    downloadLink.download = 'JohnDoe_Resume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}