// THIS IS AN EXAMPLE OF INPUT SANITIZATION. DELETE THIS.
// // Client-side handler for the add-member form (no server required)
// function escapeHtml(str) {
//     return String(str).replace(/[&<>"']/g, function (s) {
//         return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[s];
//     });
// }

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-member-form');
    const result = document.getElementById('result');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.elements['name'].value.trim();
        const role = form.elements['role'].value.trim();

        if (!name || !role) {
            result.innerHTML = '<p style="color:crimson">Please enter both name and role.</p>';
            return;
        }

        // No server: show success message in page. If you add a real API later,
        // replace this block with a fetch() POST to your endpoint and handle response.
        result.innerHTML = `<h1>Member ${name} with role ${role} added successf ully!</h1>`;

        form.reset();
    });
});
