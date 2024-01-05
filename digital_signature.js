function createDigiSign() {
    const signatureData = {
      name: 'Likhith Seera',
      position: 'MSCS at ASU',
      mobile: '+1 3477917392',
      email: 'likhithsyadav18@gmail.com',
      portfolioLink: 'https://likhithsyadav18.github.io/Portfolio-SSLY/',
      location: 'Tempe, AZ',
      linkedIn: 'https://www.linkedin.com/in/sai-likhith-yadav-seera-214859168',
      github: 'https://github.com/likhithsyadav18'
    };

    const createRow = (content) => {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.style.cssText = 'padding: 10px;';
      cell.innerHTML = content;
      row.appendChild(cell);
      return row;
    };

    const table = document.createElement('table');
    table.style.cssText = 'border-collapse: collapse; width: 500px; color: #222222; font-size: 100%; font-family: Comic Sans MS, cursive; border: 5px solid #fff; padding: 10px; border-radius: 10px;';

    const tbody = document.createElement('tbody');
    tbody.appendChild(createRow(`<span style="font-weight: bold; font-size: 175%; color: #c2185b;">${signatureData.name}</span>`));
    tbody.appendChild(createRow(`<span style="font-size: 125%; color: #c2185b;">${signatureData.position}</span>`));
    tbody.appendChild(createRow('<hr style="border-bottom: 6px solid #c2185b; margin: 0; padding: 0;">'));
    tbody.appendChild(createRow(`
      <img src="https://prod.flowcvassets.com/email-signatures/5pnl6usfeolsorpsm7nc/3/mobile.png" alt="mobile" style="width: 15px;">
      <a href="tel:+13477917392" target="_blank" style="color: #c2185b;">${signatureData.mobile}</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src="https://prod.flowcvassets.com/email-signatures/5pnl6usfeolsorpsm7nc/3/email.png" alt="email" style="width: 15px;">
      <a href="mailto:${signatureData.email}" target="_blank" style="color: #c2185b;">${signatureData.email}</a>
      <br>
      <img src="https://prod.flowcvassets.com/email-signatures/5pnl6usfeolsorpsm7nc/3/address.png" alt="address" style="width: 15px;">
      <a href="https://www.google.com/maps/place/Tempe,+AZ/@33.3919224,-111.9281011,12z" target="_blank" style="color: #c2185b;">${signatureData.location}</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src="https://prod.flowcvassets.com/email-signatures/5pnl6usfeolsorpsm7nc/3/website.png" alt="website" style="width: 15px;">
      <a href="${signatureData.portfolioLink}" target="_blank" style="color: #c2185b;">Link to My Portfolio</a>
    `));
    tbody.appendChild(createRow(`
      <a href="${signatureData.linkedIn}" target="_blank">
        <img src="https://prod.flowcvassets.com/email-signatures/5pnl6usfeolsorpsm7nc/3/linkedIn.png" alt="LinkedIn" style="width: 26px;">
      </a>
      &nbsp;&nbsp;
      <a href="${signatureData.github}" target="_blank">
        <img src="https://prod.flowcvassets.com/email-signatures/5pnl6usfeolsorpsm7nc/3/github.png" alt="GitHub" style="width: 26px;">
      </a>
    `));

    table.appendChild(tbody);
    document.getElementById('email-signature').appendChild(table);
  }


function clearEmailSignature() {
    const emailSignature = document.getElementById('email-signature');
    while (emailSignature.firstChild) {
        emailSignature.removeChild(emailSignature.firstChild);
    }
}


let clickCounter = 0;
document.getElementById("getDigiSign").addEventListener('click', function(e){
    clickCounter++;
    e.preventDefault();

    if (clickCounter === 1) {
        createDigiSign();
        document.getElementById('email-signature').style.display = "block";

        setTimeout(() => {
            document.getElementById('email-signature').style.display = "none";
        }, 300000);

    }
    else if (clickCounter === 2) {
        clearEmailSignature();
        document.getElementById('email-signature').style.display = "none";
        clickCounter = 0;        
    }
    else{
        clickCounter = 0;
    }
})
