document.addEventListener("mousemove", parallax);

const rxAmt = 1000;
const ryAmt = rxAmt/1.5;

function parallax(event) {
    this.querySelectorAll(".container span").forEach((shift) => {
        const rotation = shift.getAttribute("rot");
        const translation = shift.getAttribute("trans");
        const perspective = shift.getAttribute("pers");
        
        const RotX = -(window.innerWidth - window.innerWidth/2 - event.pageX * rotation)/rxAmt;
        const RotY = (window.innerHeight - window.innerHeight/2 -  event.pageY * rotation)/ryAmt;

        const TransX = (window.innerWidth - window.innerWidth/2 - event.pageX)*translation;
        const TransY = (window.innerHeight - window.innerHeight/2 -  event.pageY)*translation*2;

        shift.style.transform = `perspective(${perspective}cm) rotateX(${RotY}deg) rotateY(${RotX}deg) translate(${TransX}px, ${TransY}px)`;
    });
    this.querySelectorAll(".box span").forEach((shift) => {
        const translation = shift.getAttribute("trans");

        const TransX = (window.innerWidth - window.innerWidth/2 - event.pageX)*translation;
        const TransY = (window.innerHeight - window.innerHeight/2 -  event.pageY)*translation*2;

        shift.style.transform = `perspective(15cm) translate(${TransX}px, ${TransY}px)`;
    });
}