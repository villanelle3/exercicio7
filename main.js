document.addEventListener('DOMContentLoaded', function (){
    document.getElementById("form1").addEventListener("submit", function(event){
        event.preventDefault()
        var A = parseInt(document.getElementById("numberA").value)
        var B = parseInt(document.getElementById("numberB").value)
        const messagefield = document.getElementById("message")
        messagefield.className = '';
        let message
        if (B > A){
            message = `Os números estão corretos, ${B} > ${A}`
            messagefield.classList.add("success")
        }else{
            if (B === A){
                message = `Os números não estão corretos pois ${B} = ${A}`
            }else{
                message = `Os números não estão corretos pois ${B} < ${A}`
            }
            messagefield.classList.add("danger")
        }
        messagefield.innerHTML = message
    });
});

