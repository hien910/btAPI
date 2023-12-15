async function getUser(){
    try {
        let res = await fetch("https://api.github.com/users")
        let data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    } 
}


async function generateUser(){
    let container = document.getElementById('tbody');
    let users = await getUser(); 
    
    for(let i =0; i< users.length; i++){
        
        let tr = document.createElement("tr")
        let user = users[i];
        tr.innerHTML = ` <td>${i+1}</td>
        <td>
            <img src="${user.avatar_url}" alt="${user.login
            }">
        </td>
        <td>${user.login
        }"</td>
        <td>${user.html_url}"</td>
        <td>${user.repos_url}</td>
        `
        container.appendChild(tr);
        
        
    }
};
generateUser();
