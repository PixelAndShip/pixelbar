function changeProfile() {
    fetch ('users.json')
        .then (Response => Response.json())
        .then(data => {
            const userId = data[1] /*change later to id */
            const profileHeading = document.getElementById('profileHeading')
            profileHeading.textContent = userId.username;
        })
        .catch (error => {
            console.error('Error fetching data', error);
        })
}

changeProfile();