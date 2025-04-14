// document.querySelectorAll('#toggle, #x-toggle').forEach(item => item.addEventListener("click", () => document.querySelector('#nav').style.display = item.id === 'toggle' ? 'flex' : 'none'));
document.querySelector('#toggle').addEventListener('click', function () {
    document.querySelector('#toggle').style.display = 'none';
    document.querySelector('#nav').style.display = 'flex';
})

document.querySelector('#x-toggle').addEventListener('click', function () {
    document.querySelector('#toggle').style.display = 'flex';
    document.querySelector('#nav').style.display = 'none';
})

document.querySelectorAll('.home, .contact, .menu, .about').forEach(item => {
    item.addEventListener("click", () => document.querySelector('#nav').style.display = 'flex');
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;
            document.querySelectorAll(".form-control, .form-check-input").forEach(input => {
                let errorDiv = input.nextElementSibling;
                if ((input.type === "checkbox" && !input.checked) || input.value.trim() === "") {
                    errorDiv.classList.remove("d-none");
                    document.querySelector('.d-none').style.fontSize = '13px';
                    document.querySelector('.d-none').style.textAlign = 'left';
                    document.querySelector('.d-none').style.color = 'red';
                    isValid = false;
                } else 
                    errorDiv.classList.add("d-none");
                
                
            });
            if (isValid) 
                document.getElementById("successAlert").classList.remove("d-none");
            
});


