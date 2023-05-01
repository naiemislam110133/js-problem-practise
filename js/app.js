document.getElementById("detail-submit-btn").addEventListener('click', function(){
    const userDetailsInputValue = document.getElementById('buyer-details-input').value;
    document.getElementById("buyer-info").innerText = userDetailsInputValue;

});