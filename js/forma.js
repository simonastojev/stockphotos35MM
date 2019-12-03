function slanje() {
    var x;
    var y;
    y = document.getElementById("prezime").value;
    x = document.getElementById("ime").value;
    var mail = document.getElementById('mail').value;
    var tel = document.getElementById('tel').value;
    var p11 = 0,p12 = 0,p13 = 0,p14 = 0, p1 = 0, p2 = 0;
    if (x == "") {
        alert("Morate uneti ime.");
        p11 = 0;
    } else {
        p11 = 1;
    }
    if (y == "") {
        alert("Morate uneti prezime.");
        p12 = 0;
    } else {
        p12 = 1;
    }
    if (tel == "") {
        alert("Morate uneti telefon.");
        p13 = 0;
    } else {
        p13 = 1;
    }
    if (mail == "") {
        alert("Morate uneti e-mail.");
        p14 = 0;

    } else {
        p14 = 1;
    }



    var reMail = /\@(yahoo|gmail|hotmail)\.com$/;

    if (!reMail.test(mail)) {
        document.getElementById('greskaMail').innerHTML = "<b style='color:red;'>Pogrešan format</b>";
        p1 = 0;
    } else {
        document.getElementById('greskaMail').innerHTML = "<b style='color:red;'></b>";
        p1 = 1;
    }



    var reTel = /^[0-9]{3,}\-[0-9]{7,}$/;

    if (!reTel.test(tel)) {
        document.getElementById('greskaTel').innerHTML = "<b style='color:red;'>Pogrešan format</b>";
        p2 = 0;
    } else {
        document.getElementById('greskaTel').innerHTML = "<b style='color:red;'></b>";
        p2 = 1;
    }



    if (p11 == 1 && p12 == 1 && p13 == 1 && p14 == 1 && p1 == 1 && p2 == 1) {
        alert("Uspešna prijava");
        document.getElementById('ime').value = "";
        document.getElementById('prezime').value = "";
        document.getElementById('mail').value = "";
        document.getElementById('tel').value = "";
        document.getElementById('poruka').value = "";
        
    }
    document.getElementById('dugme').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
           var x;
    var y;
    y = document.getElementById("prezime").value;
    x = document.getElementById("ime").value;
    var mail = document.getElementById('mail').value;
    var tel = document.getElementById('tel').value;
    var p11 = 0,p12 = 0,p13 = 0,p14 = 0, p1 = 0, p2 = 0;
    if (x == "") {
        alert("Morate uneti ime.");
        p11 = 0;
    } else {
        p11 = 1;
    }
    if (y == "") {
        alert("Morate uneti prezime.");
        p12 = 0;
    } else {
        p12 = 1;
    }
    if (tel == "") {
        alert("Morate uneti telefon.");
        p13 = 0;
    } else {
        p13 = 1;
    }
    if (mail == "") {
        alert("Morate uneti email.");
        p14 = 0;

    } else {
        p14 = 1;
    }



    var reMail = /\@(yahoo|gmail|hotmail)\.com$/;

    if (!reMail.test(mail)) {
        document.getElementById('greskaMail').innerHTML = "<b style='color:red;'>Pogrešan format</b>";
        p1 = 0;
    } else {
        document.getElementById('greskaMail').innerHTML = "<b style='color:red;'></b>";
        p1 = 1;
    }



    var reTel = /^[0-9]{3,}\-[0-9]{7,}$/;

    if (!reTel.test(tel)) {
        document.getElementById('greskaTel').innerHTML = "<b style='color:red;'>Pogrešan format</b>";
        p2 = 0;
    } else {
        document.getElementById('greskaTel').innerHTML = "<b style='color:red;'></b>";
        p2 = 1;
    }



    if (p11 == 1 && p12 == 1 && p13 == 1 && p14 == 1 && p1 == 1 && p2 == 1) {
        alert("Uspešna prijava!");
        document.getElementById('ime').value = "";
        document.getElementById('prezime').value = "";
        document.getElementById('mail').value = "";
        document.getElementById('tel').value = "";
        document.getElementById('poruka').value = "";
        
    }
        }
    });
}