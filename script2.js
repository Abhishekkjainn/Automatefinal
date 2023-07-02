function page1topage2(){

    let pickuplocation = document.getElementById("pickuplistinp").value;
    localStorage.setItem("pickuplocation",pickuplocation);
    let droplocation = document.getElementById("droplistinp").value;
    localStorage.setItem("droplocation",droplocation);

    if(pickuplocation === "" || droplocation ===""){
        alert("Enter Pickup And Drop Location")
    }
    else{
        document.getElementById("page1").style.display="none";
        document.getElementById("pagination2").style.backgroundColor = "#DB4437";
        document.getElementById("page2").style.display = "block";
    }  
}
function page2topage3(){
    document.getElementById("page2").style.display="none";
    document.getElementById("pagination3").style.backgroundColor = "#F4B400";
    document.getElementById("page3").style.display = "block";
}
// function page3topage4(){
//     document.getElementById("page3").style.display="none";
//     document.getElementById("pagination4").style.backgroundColor = "#0F9D58";
//     document.getElementById("page4").style.display = "flex";
// }
function page4topage5(){
    document.getElementById("page4").style.display="none";
    document.getElementById("pagination5").style.backgroundColor = "#000000";
    document.getElementById("page5").style.display = "block";
}


function driver1details(){
    let drivername = document.getElementById("name1").innerText;
    localStorage.setItem("drivername",drivername);
    let phonenumber = document.getElementById("phonenumber1").innerText;
    localStorage.setItem("phonenumber",phonenumber);
    let autonumber = document.getElementById("autonumber1").innerText;
    localStorage.setItem("autonumber",autonumber);
    let idno = document.getElementById("id1").innerText;
    localStorage.setItem("idno",idno);
    let language = document.getElementById("language1").innerText;
    localStorage.setItem("language",language);
    let mainfare = document.getElementById("mainfare").innerText;
    localStorage.setItem("fare",mainfare); 
    console.log(drivername,phonenumber,autonumber,idno,language,mainfare); 
    let image = "url('AnandS.jpeg')";
    localStorage.setItem("image",image);
    
}
function driver2details(){
    let drivername = document.getElementById("name2").innerText;
    localStorage.setItem("drivername",drivername);
    let phonenumber = document.getElementById("phonenumber2").innerText;
    localStorage.setItem("phonenumber",phonenumber);
    let autonumber = document.getElementById("autonumber2").innerText;
    localStorage.setItem("autonumber",autonumber);
    let idno = document.getElementById("id2").innerText;
    localStorage.setItem("idno",idno);
    let language = document.getElementById("language2").innerText;
    localStorage.setItem("language",language);
    let mainfare = document.getElementById("mainfare").innerText;
    localStorage.setItem("fare",mainfare); 
    console.log(drivername,phonenumber,autonumber,idno,language,mainfare);
    let image = "Vvijay.jpeg"
    localStorage.setItem("image",image);
}
function driver3details(){
    let drivername = document.getElementById("name3").innerText;
    localStorage.setItem("drivername",drivername);
    let phonenumber = document.getElementById("phonenumber3").innerText;
    localStorage.setItem("phonenumber",phonenumber);
    let autonumber = document.getElementById("autonumber3").innerText;
    localStorage.setItem("autonumber",autonumber);
    let idno = document.getElementById("id3").innerText;
    localStorage.setItem("idno",idno);
    let language = document.getElementById("language3").innerText;
    localStorage.setItem("language",language);
    let mainfare = document.getElementById("mainfare").innerText;
    localStorage.setItem("fare",mainfare); 
    console.log(drivername,phonenumber,autonumber,idno,language,mainfare); 
    let image = "AnandD.jpeg"
    localStorage.setItem("image",image);
}
function driver4details(){
    let drivername = document.getElementById("name4").innerText;
    localStorage.setItem("drivername",drivername);
    let phonenumber = document.getElementById("phonenumber4").innerText;
    localStorage.setItem("phonenumber",phonenumber);
    let autonumber = document.getElementById("autonumber4").innerText;
    localStorage.setItem("autonumber",autonumber);
    let idno = document.getElementById("id4").innerText;
    localStorage.setItem("idno",idno);
    let language = document.getElementById("language4").innerText;
    localStorage.setItem("language",language);
    let mainfare = document.getElementById("mainfare").innerText;
    localStorage.setItem("fare",mainfare); 
    console.log(drivername,phonenumber,autonumber,idno,language,mainfare);
    let image = ""
    localStorage.setItem("image",image);
}
function driver5details(){
    let drivername = document.getElementById("name5").innerText;
    localStorage.setItem("drivername",drivername);
    let phonenumber = document.getElementById("phonenumber5").innerText;
    localStorage.setItem("phonenumber",phonenumber);
    let autonumber = document.getElementById("autonumber5").innerText;
    localStorage.setItem("autonumber",autonumber);
    let idno = document.getElementById("id5").innerText;
    localStorage.setItem("idno",idno);
    let language = document.getElementById("language5").innerText;
    localStorage.setItem("language",language);
    let mainfare = document.getElementById("mainfare").innerText;
    localStorage.setItem("fare",mainfare); 
    console.log(drivername,phonenumber,autonumber,idno,language,mainfare);
    let image = "VinothR.jpeg"
    localStorage.setItem("image",image);
}
function passengerdetails(){
    let passengername = document.getElementById("passengername").value;
    let passengerphone = document.getElementById("passengerphone").value;
    let passengeremail = document.getElementById("passengeremail").value;

    if(passengername===""){
        alert("Enter Passenger Name :");
    }else{
        localStorage.setItem("passengername",passengername);
    }
    if(passengerphone === ""){
        alert("Enter Passenger Phone Number :");
    }else{
        localStorage.setItem("passengerphone",passengerphone);
    }
    if(passengeremail === ""){
        alert("Enter Passenger EmailId");
    }
    else{
        localStorage.setItem("passengeremail",passengeremail);
    }
    console.log(passengername,passengeremail,passengerphone);
    if(passengername!="" && passengerphone != "" && passengeremail != ""){
        document.getElementById("page3").style.display="none";
        document.getElementById("pagination4").style.backgroundColor = "#0F9D58";
        document.getElementById("page4").style.display = "block";
    }
    else{
        return false;
    }
}
function pickupdropupdateinallpages(){
    let pickupaddress = document.getElementById("pickuplistinp");
    let dropaddress = document.getElementById("droplistinp");
    document.getElementById("pickconfirmlocation").innerText = pickupaddress.value;
    document.getElementById("dropconfirmlocation").innerText = dropaddress.value;
}

function updateinconfirmpage(){
    let imagec =   localStorage.getItem("image");
    document.getElementById("driverconfirmname").innerHTML = localStorage.getItem("drivername");
    document.getElementById("driverconfirmname2").innerHTML = localStorage.getItem("drivername");
    document.getElementById("fareconfirm").innerHTML = localStorage.getItem("fare");
    document.getElementById("farecall").innerHTML = localStorage.getItem("fare");
    document.getElementById("idconfirmdriver").innerHTML = "Id- "+ localStorage.getItem("idno");
    document.getElementById("idconfirmdriver2").innerHTML = "Id- "+ localStorage.getItem("idno");

    // document.getElementById("driverconfirmimage").style.backgroundImage =  localStorage.getItem("image");
}
function gettime(){
    var d = new Date();
    var time = d.getHours();
    localStorage.setItem("time",time);
}
function getnoofpeople(){
    let people = document.getElementById("noofpeopleselect");
    localStorage.setItem("people",people.value);
}

function driver1infoupdate(){
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds();
    let time =  d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let phn1d1 = document.getElementById("phonenumber1").innerText;
    let autonumber1d1 = document.getElementById("autonumber1").innerText;
    document.getElementById("Autonumbercallpage").innerText = "Auto Number  "  + autonumber1d1;
    let language1d1 = document.getElementById("language1").innerText;
    document.getElementById("languagecallpage").innerText = language1d1;
    document.getElementById("realtimecallpage").innerText = time;
    document.getElementById("realdatecallpage").innerText = today;


}
function driver2infoupdate(){
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds();
    let time =  d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let phn1d2 = document.getElementById("phonenumber2").innerText;
    document.getElementById("maincallbutton").href = "tel:+919087408449";
    console.log(phn1d2);
    let autonumber1d2 = document.getElementById("autonumber2").innerText;
    document.getElementById("Autonumbercallpage").innerText = "Auto Number  "  + autonumber1d2;
    let language1d2 = document.getElementById("language2").innerText;
    document.getElementById("languagecallpage").innerText = language1d2;
    document.getElementById("realtimecallpage").innerText = time;
    document.getElementById("realdatecallpage").innerText = today;


}
function driver3infoupdate(){
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds();
    let time =  d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let phn1d3 = document.getElementById("phonenumber3").innerText;
    let autonumber1d3 = document.getElementById("autonumber3").innerText;
    document.getElementById("maincallbutton").href = "tel:+917338133731";
    document.getElementById("Autonumbercallpage").innerText = "Auto Number  "  + autonumber1d3;
    let language1d3 = document.getElementById("language3").innerText;
    document.getElementById("languagecallpage").innerText = language1d3;
    document.getElementById("realtimecallpage").innerText = time;
    document.getElementById("realdatecallpage").innerText = today;


}
function driver4infoupdate(){
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds();
    let time =  d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let phn1d4 = document.getElementById("phonenumber4").innerText;
    let autonumber1d4 = document.getElementById("autonumber4").innerText;
    document.getElementById("maincallbutton").href = "tel:+917338133731";
    document.getElementById("Autonumbercallpage").innerText = "Auto Number  "  + autonumber1d4;
    let language1d4 = document.getElementById("language4").innerText;
    document.getElementById("languagecallpage").innerText = language1d4;
    document.getElementById("realtimecallpage").innerText = time;
    document.getElementById("realdatecallpage").innerText = today;


}
function driver5infoupdate(){
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds();
    let time =  d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let phn1d5 = document.getElementById("phonenumber5").innerText;
    let autonumber1d5 = document.getElementById("autonumber5").innerText;
    document.getElementById("maincallbutton").href = "tel:+917338133731";
    document.getElementById("Autonumbercallpage").innerText = "Auto Number  "  + autonumber1d5;
    let language1d5 = document.getElementById("language5").innerText;
    document.getElementById("languagecallpage").innerText = language1d5;
    document.getElementById("realtimecallpage").innerText = time;
    document.getElementById("realdatecallpage").innerText = today;


}



function Farecalculator(){
    let pickupaddress = document.getElementById("pickuplistinp");
    let peoplekat = localStorage.getItem("people");
    let dropaddress = document.getElementById("droplistinp");
    let time = localStorage.getItem("time");
    let checkhostel = document.getElementById("toggler-1");
    
    if(time ==23 ||time == 24 || time == 0 || time == 1 || time == 2 || time == 3 || time == 4 || time ==5){
        if(checkhostel.checked == true){
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Katpadi railway station")||(pickupaddress.value == "Katpadi railway station" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 175 + 50;
                    document.getElementById("mainfare").innerHTML=people2;
                }else{
                    document.getElementById("mainfare").innerHTML=225;
                }
            }

            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "New Bus Stand")||(pickupaddress.value == "New Bus Stand" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 300 +50;
                    document.getElementById("mainfare").innerHTML=people2;
                }else{
                    document.getElementById("mainfare").innerHTML=350;
                }
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Circle")||(pickupaddress.value == "Green Circle" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vishnu Theatre")||(pickupaddress.value == "Vishnu Theatre" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Galaxy Cinemas")||(pickupaddress.value == "Galaxy Cinemas" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Kitchen")||(pickupaddress.value == "Vellore Kitchen" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Karigiri Hills")||(pickupaddress.value == "Karigiri Hills" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Temple")||(pickupaddress.value == "Golden Temple" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=800;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chittoor Bus stand")||(pickupaddress.value == "Chittoor Bus stand" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Fort")||(pickupaddress.value == "Vellore Fort" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Balamathi Hills")||(pickupaddress.value == "Balamathi Hills" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=800;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Tender Parks")||(pickupaddress.value == "Green Tender Parks" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=1100;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mahadev Hills")||(pickupaddress.value == "Mahadev Hills" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=900;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Nagar")||(pickupaddress.value == "Gandhi Nagar" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Rangalaya")||(pickupaddress.value == "Rangalaya" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "KFC")||(pickupaddress.value == "KFC" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hundred's Heritage")||(pickupaddress.value == "Hundred's Heritage" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Fortune Park")||(pickupaddress.value == "Fortune Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "PVR Mall")||(pickupaddress.value == "PVR Mall" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Oscar Theatre")||(pickupaddress.value == "Oscar Theatre" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Road")||(pickupaddress.value == "Gandhi Road" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Jyothi Hotel")||(pickupaddress.value == "Jyothi Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Barbeque Nation")||(pickupaddress.value == "Barbeque Nation" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Benz Park")||(pickupaddress.value == "Benz Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Khanna Fiesta")||(pickupaddress.value == "Khanna Fiesta" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=500;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Darling Residency")||(pickupaddress.value == "Darling Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=600;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "GRT Residency")||(pickupaddress.value == "GRT Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Annamalai Hotel")||(pickupaddress.value == "Annamalai Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Srinivasa Hotel")||(pickupaddress.value == "Srinivasa Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pulusu")||(pickupaddress.value == "Pulusu" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Aarya's Restaurant")||(pickupaddress.value == "Aarya's Restaurant" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Namma Veedu Restaurant")||(pickupaddress.value == "Namma Veedu Restaurant" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pandyan Hotel")||(pickupaddress.value == "Pandyan Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Royal Grand")||(pickupaddress.value == "Royal Grand" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "CMC Hospital")||(pickupaddress.value == "CMC Hospital" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Naruvi Hospital")||(pickupaddress.value == "Naruvi Hospital" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Ranipet CMC")||(pickupaddress.value == "Ranipet CMC" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=750;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Bagayam Hospital")||(pickupaddress.value == "Bagayam Hospital" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=600;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vallimalai Temple")||(pickupaddress.value == "Vallimalai Temple" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=900;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Cup and Saucer Waterfalls")||(pickupaddress.value == "Cup and Saucer Waterfalls" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Collector's Office")||(pickupaddress.value == "Collector's Office" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SMS Grand Inn")||(pickupaddress.value == "SMS Grand Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Alka")||(pickupaddress.value == "Hotel Alka" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mount Paradise")||(pickupaddress.value == "Mount Paradise" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Krishna Hotel")||(pickupaddress.value == "Grand Krishna Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=500;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "DMart")||(pickupaddress.value == "DMart" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=600;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Zoo")||(pickupaddress.value == "Vellore Zoo" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=1600;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Essence")||(pickupaddress.value == "Hotel Essence" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "M Square")||(pickupaddress.value == "M Square" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Ganpat")||(pickupaddress.value == "Grand Ganpat" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Arihant Inn")||(pickupaddress.value == "Arihant Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Millenium Residency")||(pickupaddress.value == "Millenium Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SGRT Residency")||(pickupaddress.value == "SGRT Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kingsbury Fiesta")||(pickupaddress.value == "Kingsbury Fiesta" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Prince Park")||(pickupaddress.value == "Prince Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vijayshree Inn")||(pickupaddress.value == "Vijayshree Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "FAB Hotel Pranav Park")||(pickupaddress.value == "FAB Hotel Pranav Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Surabhi International")||(pickupaddress.value == "Surabhi International" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "JRS Residency")||(pickupaddress.value == "JRS Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pawan Park")||(pickupaddress.value == "Pawan Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "River View Hotel")||(pickupaddress.value == "River View Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Palm Tree Hotel")||(pickupaddress.value == "Palm Tree Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Gateway")||(pickupaddress.value == "Golden Gateway" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=800;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Balaji International")||(pickupaddress.value == "Sri Balaji International" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Yaa Residency")||(pickupaddress.value == "Yaa Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Senthur Inn")||(pickupaddress.value == "Senthur Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Fort")||(pickupaddress.value == "Golden Fort" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "BKS Residency")||(pickupaddress.value == "BKS Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Murugan")||(pickupaddress.value == "Sri Murugan" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Chariot Hotel")||(pickupaddress.value == "Grand Chariot Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=500;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Park")||(pickupaddress.value == "Green Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vaibhav Residency")||(pickupaddress.value == "Vaibhav Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Baby Residency")||(pickupaddress.value == "Baby Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Babu Naidu Residency")||(pickupaddress.value == "Babu Naidu Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Banu Residency")||(pickupaddress.value == "Banu Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chella Krishna Residency")||(pickupaddress.value == "Chella Krishna Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=800;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SR Residency")||(pickupaddress.value == "SR Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Vanadurga Peedam")||(pickupaddress.value == "Sri Vanadurga Peedam" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=600;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kannamangalam Reserve Forest")||(pickupaddress.value == "Kannamangalam Reserve Forest" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=1300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Selva Vinayagar Kovil")||(pickupaddress.value == "Sri Selva Vinayagar Kovil" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=600;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "St John's Church")||(pickupaddress.value == "St John's Church" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Assumption Cathedral Church")||(pickupaddress.value == "Assumption Cathedral Church" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Earth Plate")||(pickupaddress.value == "Earth Plate" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
        
            //FOR NO FARE
            if(pickupaddress.value == "#" || dropaddress.value == "#"){
                document.getElementById("mainfare").innerHTML="None";
                alert("Enter Valid Details : ")
            }
            if(pickupaddress.value == dropaddress.value){
                document.getElementById("mainfare").innerHTML="None";
                alert("Choose Different Locations : ")
            }
        
        


        }
        else{
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Katpadi railway station")||(pickupaddress.value == "Katpadi railway station" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 125 + 50;
                    document.getElementById("mainfare").innerHTML=people2;
                }else{
                    document.getElementById("mainfare").innerHTML=175;
                }
            }

            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "New Bus Stand")||(pickupaddress.value == "New Bus Stand" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 300 +50;
                    document.getElementById("mainfare").innerHTML=people2;
                }else{
                    document.getElementById("mainfare").innerHTML=300;
                }
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Circle")||(pickupaddress.value == "Green Circle" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vishnu Theatre")||(pickupaddress.value == "Vishnu Theatre" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Galaxy Cinemas")||(pickupaddress.value == "Galaxy Cinemas" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=150;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Kitchen")||(pickupaddress.value == "Vellore Kitchen" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Karigiri Hills")||(pickupaddress.value == "Karigiri Hills" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Temple")||(pickupaddress.value == "Golden Temple" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=750;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chittoor Bus stand")||(pickupaddress.value == "Chittoor Bus stand" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=150;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Fort")||(pickupaddress.value == "Vellore Fort" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Balamathi Hills")||(pickupaddress.value == "Balamathi Hills" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=750;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Tender Parks")||(pickupaddress.value == "Green Tender Parks" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=1050;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mahadev Hills")||(pickupaddress.value == "Mahadev Hills" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=850;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Nagar")||(pickupaddress.value == "Gandhi Nagar" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Rangalaya")||(pickupaddress.value == "Rangalaya" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "KFC")||(pickupaddress.value == "KFC" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hundred's Heritage")||(pickupaddress.value == "Hundred's Heritage" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Fortune Park")||(pickupaddress.value == "Fortune Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "PVR Mall")||(pickupaddress.value == "PVR Mall" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Oscar Theatre")||(pickupaddress.value == "Oscar Theatre" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Road")||(pickupaddress.value == "Gandhi Road" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Jyothi Hotel")||(pickupaddress.value == "Jyothi Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Barbeque Nation")||(pickupaddress.value == "Barbeque Nation" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Benz Park")||(pickupaddress.value == "Benz Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Khanna Fiesta")||(pickupaddress.value == "Khanna Fiesta" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Darling Residency")||(pickupaddress.value == "Darling Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "GRT Residency")||(pickupaddress.value == "GRT Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Annamalai Hotel")||(pickupaddress.value == "Annamalai Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Srinivasa Hotel")||(pickupaddress.value == "Srinivasa Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pulusu")||(pickupaddress.value == "Pulusu" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Aarya's Restaurant")||(pickupaddress.value == "Aarya's Restaurant" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Namma Veedu Restaurant")||(pickupaddress.value == "Namma Veedu Restaurant" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pandyan Hotel")||(pickupaddress.value == "Pandyan Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Royal Grand")||(pickupaddress.value == "Royal Grand" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "CMC Hospital")||(pickupaddress.value == "CMC Hospital" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Naruvi Hospital")||(pickupaddress.value == "Naruvi Hospital" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Ranipet CMC")||(pickupaddress.value == "Ranipet CMC" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=700;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Bagayam Hospital")||(pickupaddress.value == "Bagayam Hospital" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=550;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vallimalai Temple")||(pickupaddress.value == "Vallimalai Temple" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=850;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Cup and Saucer Waterfalls")||(pickupaddress.value == "Cup and Saucer Waterfalls" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Collector's Office")||(pickupaddress.value == "Collector's Office" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SMS Grand Inn")||(pickupaddress.value == "SMS Grand Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Alka")||(pickupaddress.value == "Hotel Alka" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mount Paradise")||(pickupaddress.value == "Mount Paradise" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Krishna Hotel")||(pickupaddress.value == "Grand Krishna Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "DMart")||(pickupaddress.value == "DMart" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=550;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Zoo")||(pickupaddress.value == "Vellore Zoo" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=1550;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Essence")||(pickupaddress.value == "Hotel Essence" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "M Square")||(pickupaddress.value == "M Square" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Ganpat")||(pickupaddress.value == "Grand Ganpat" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Arihant Inn")||(pickupaddress.value == "Arihant Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Millenium Residency")||(pickupaddress.value == "Millenium Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SGRT Residency")||(pickupaddress.value == "SGRT Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kingsbury Fiesta")||(pickupaddress.value == "Kingsbury Fiesta" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=150;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Prince Park")||(pickupaddress.value == "Prince Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vijayshree Inn")||(pickupaddress.value == "Vijayshree Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "FAB Hotel Pranav Park")||(pickupaddress.value == "FAB Hotel Pranav Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Surabhi International")||(pickupaddress.value == "Surabhi International" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "JRS Residency")||(pickupaddress.value == "JRS Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pawan Park")||(pickupaddress.value == "Pawan Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "River View Hotel")||(pickupaddress.value == "River View Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Palm Tree Hotel")||(pickupaddress.value == "Palm Tree Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Gateway")||(pickupaddress.value == "Golden Gateway" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=750;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Balaji International")||(pickupaddress.value == "Sri Balaji International" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Yaa Residency")||(pickupaddress.value == "Yaa Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=150;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Senthur Inn")||(pickupaddress.value == "Senthur Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Fort")||(pickupaddress.value == "Golden Fort" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "BKS Residency")||(pickupaddress.value == "BKS Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Murugan")||(pickupaddress.value == "Sri Murugan" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Chariot Hotel")||(pickupaddress.value == "Grand Chariot Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=450;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Park")||(pickupaddress.value == "Green Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vaibhav Residency")||(pickupaddress.value == "Vaibhav Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Baby Residency")||(pickupaddress.value == "Baby Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Babu Naidu Residency")||(pickupaddress.value == "Babu Naidu Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Banu Residency")||(pickupaddress.value == "Banu Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chella Krishna Residency")||(pickupaddress.value == "Chella Krishna Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=750;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SR Residency")||(pickupaddress.value == "SR Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Vanadurga Peedam")||(pickupaddress.value == "Sri Vanadurga Peedam" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=550;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kannamangalam Reserve Forest")||(pickupaddress.value == "Kannamangalam Reserve Forest" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=1250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Selva Vinayagar Kovil")||(pickupaddress.value == "Sri Selva Vinayagar Kovil" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=550;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "St John's Church")||(pickupaddress.value == "St John's Church" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Assumption Cathedral Church")||(pickupaddress.value == "Assumption Cathedral Church" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Earth Plate")||(pickupaddress.value == "Earth Plate" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
        
            //FOR NO FARE
            if(pickupaddress.value == "#" || dropaddress.value == "#"){
                document.getElementById("mainfare").innerHTML="None";
                alert("Enter Valid Details : ")
            }
            if(pickupaddress.value == dropaddress.value){
                document.getElementById("mainfare").innerHTML="None";
                alert("Choose Different Locations : ")
            }
        
        
        }
    }
    else{
        if(checkhostel.checked == true){
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Katpadi railway station")||(pickupaddress.value == "Katpadi railway station" && dropaddress.value == "VIT Main Gate")){
                    if(peoplekat > 2){
                        let people2 = ((peoplekat-2)*50) + 125 + 50;
                        document.getElementById("mainfare").innerHTML=people2;
                    }else{
                        document.getElementById("mainfare").innerHTML=175;
                    }
                }
    
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "New Bus Stand")||(pickupaddress.value == "New Bus Stand" && dropaddress.value == "VIT Main Gate")){
                    if(peoplekat > 2){
                        let people2 = ((peoplekat-2)*50) + 300 +50;
                        document.getElementById("mainfare").innerHTML=people2;
                    }else{
                        document.getElementById("mainfare").innerHTML=300;
                    }
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Circle")||(pickupaddress.value == "Green Circle" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vishnu Theatre")||(pickupaddress.value == "Vishnu Theatre" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Galaxy Cinemas")||(pickupaddress.value == "Galaxy Cinemas" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=150;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Kitchen")||(pickupaddress.value == "Vellore Kitchen" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Karigiri Hills")||(pickupaddress.value == "Karigiri Hills" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Temple")||(pickupaddress.value == "Golden Temple" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=750;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chittoor Bus stand")||(pickupaddress.value == "Chittoor Bus stand" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=150;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Fort")||(pickupaddress.value == "Vellore Fort" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Balamathi Hills")||(pickupaddress.value == "Balamathi Hills" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=750;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Tender Parks")||(pickupaddress.value == "Green Tender Parks" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=1050;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mahadev Hills")||(pickupaddress.value == "Mahadev Hills" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=850;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Nagar")||(pickupaddress.value == "Gandhi Nagar" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Rangalaya")||(pickupaddress.value == "Rangalaya" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "KFC")||(pickupaddress.value == "KFC" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hundred's Heritage")||(pickupaddress.value == "Hundred's Heritage" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Fortune Park")||(pickupaddress.value == "Fortune Park" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "PVR Mall")||(pickupaddress.value == "PVR Mall" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Oscar Theatre")||(pickupaddress.value == "Oscar Theatre" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Road")||(pickupaddress.value == "Gandhi Road" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Jyothi Hotel")||(pickupaddress.value == "Jyothi Hotel" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Barbeque Nation")||(pickupaddress.value == "Barbeque Nation" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Benz Park")||(pickupaddress.value == "Benz Park" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Khanna Fiesta")||(pickupaddress.value == "Khanna Fiesta" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=450;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Darling Residency")||(pickupaddress.value == "Darling Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=450;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "GRT Residency")||(pickupaddress.value == "GRT Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Annamalai Hotel")||(pickupaddress.value == "Annamalai Hotel" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Srinivasa Hotel")||(pickupaddress.value == "Srinivasa Hotel" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pulusu")||(pickupaddress.value == "Pulusu" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Aarya's Restaurant")||(pickupaddress.value == "Aarya's Restaurant" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Namma Veedu Restaurant")||(pickupaddress.value == "Namma Veedu Restaurant" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pandyan Hotel")||(pickupaddress.value == "Pandyan Hotel" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Royal Grand")||(pickupaddress.value == "Royal Grand" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "CMC Hospital")||(pickupaddress.value == "CMC Hospital" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Naruvi Hospital")||(pickupaddress.value == "Naruvi Hospital" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Ranipet CMC")||(pickupaddress.value == "Ranipet CMC" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=700;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Bagayam Hospital")||(pickupaddress.value == "Bagayam Hospital" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=550;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vallimalai Temple")||(pickupaddress.value == "Vallimalai Temple" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=850;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Cup and Saucer Waterfalls")||(pickupaddress.value == "Cup and Saucer Waterfalls" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Collector's Office")||(pickupaddress.value == "Collector's Office" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SMS Grand Inn")||(pickupaddress.value == "SMS Grand Inn" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Alka")||(pickupaddress.value == "Hotel Alka" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mount Paradise")||(pickupaddress.value == "Mount Paradise" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Krishna Hotel")||(pickupaddress.value == "Grand Krishna Hotel" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=450;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "DMart")||(pickupaddress.value == "DMart" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=550;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Zoo")||(pickupaddress.value == "Vellore Zoo" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=1550;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Essence")||(pickupaddress.value == "Hotel Essence" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "M Square")||(pickupaddress.value == "M Square" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Ganpat")||(pickupaddress.value == "Grand Ganpat" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Arihant Inn")||(pickupaddress.value == "Arihant Inn" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Millenium Residency")||(pickupaddress.value == "Millenium Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SGRT Residency")||(pickupaddress.value == "SGRT Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kingsbury Fiesta")||(pickupaddress.value == "Kingsbury Fiesta" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=150;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Prince Park")||(pickupaddress.value == "Prince Park" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vijayshree Inn")||(pickupaddress.value == "Vijayshree Inn" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "FAB Hotel Pranav Park")||(pickupaddress.value == "FAB Hotel Pranav Park" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Surabhi International")||(pickupaddress.value == "Surabhi International" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "JRS Residency")||(pickupaddress.value == "JRS Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pawan Park")||(pickupaddress.value == "Pawan Park" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "River View Hotel")||(pickupaddress.value == "River View Hotel" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=200;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Palm Tree Hotel")||(pickupaddress.value == "Palm Tree Hotel" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Gateway")||(pickupaddress.value == "Golden Gateway" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=750;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Balaji International")||(pickupaddress.value == "Sri Balaji International" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=200;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Yaa Residency")||(pickupaddress.value == "Yaa Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=150;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Senthur Inn")||(pickupaddress.value == "Senthur Inn" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Fort")||(pickupaddress.value == "Golden Fort" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "BKS Residency")||(pickupaddress.value == "BKS Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Murugan")||(pickupaddress.value == "Sri Murugan" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=300;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Chariot Hotel")||(pickupaddress.value == "Grand Chariot Hotel" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=450;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Park")||(pickupaddress.value == "Green Park" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vaibhav Residency")||(pickupaddress.value == "Vaibhav Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Baby Residency")||(pickupaddress.value == "Baby Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Babu Naidu Residency")||(pickupaddress.value == "Babu Naidu Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Banu Residency")||(pickupaddress.value == "Banu Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chella Krishna Residency")||(pickupaddress.value == "Chella Krishna Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=750;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SR Residency")||(pickupaddress.value == "SR Residency" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=350;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Vanadurga Peedam")||(pickupaddress.value == "Sri Vanadurga Peedam" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=550;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kannamangalam Reserve Forest")||(pickupaddress.value == "Kannamangalam Reserve Forest" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=1250;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Selva Vinayagar Kovil")||(pickupaddress.value == "Sri Selva Vinayagar Kovil" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=550;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "St John's Church")||(pickupaddress.value == "St John's Church" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Assumption Cathedral Church")||(pickupaddress.value == "Assumption Cathedral Church" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
                if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Earth Plate")||(pickupaddress.value == "Earth Plate" && dropaddress.value == "VIT Main Gate")){
                    document.getElementById("mainfare").innerHTML=400;
                }
            
                //FOR NO FARE
                if(pickupaddress.value == "#" || dropaddress.value == "#"){
                    document.getElementById("mainfare").innerHTML="None";
                    alert("Enter Valid Details : ")
                }
                if(pickupaddress.value == dropaddress.value){
                    document.getElementById("mainfare").innerHTML="None";
                    alert("Choose Different Locations : ")
                }
            
            
             
        }
        else{
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Katpadi railway station")||(pickupaddress.value == "Katpadi railway station" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 125 ;
                    document.getElementById("mainfare").innerHTML=people2;
                }else{
                    document.getElementById("mainfare").innerHTML=125;
                }
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "New Bus Stand")||(pickupaddress.value == "New Bus Stand" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 250 +50;
                    document.getElementById("mainfare").innerHTML=people2;
                }else{
                    document.getElementById("mainfare").innerHTML=250;
                }
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "New Bus Stand")||(pickupaddress.value == "New Bus Stand" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Circle")||(pickupaddress.value == "Green Circle" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vishnu Theatre")||(pickupaddress.value == "Vishnu Theatre" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Galaxy Cinemas")||(pickupaddress.value == "Galaxy Cinemas" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=100;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Kitchen")||(pickupaddress.value == "Vellore Kitchen" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Karigiri Hills")||(pickupaddress.value == "Karigiri Hills" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Temple")||(pickupaddress.value == "Golden Temple" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=700;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chittoor Bus stand")||(pickupaddress.value == "Chittoor Bus stand" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=100;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Fort")||(pickupaddress.value == "Vellore Fort" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Balamathi Hills")||(pickupaddress.value == "Balamathi Hills" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=700;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Tender Parks")||(pickupaddress.value == "Green Tender Parks" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=1000;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mahadev Hills")||(pickupaddress.value == "Mahadev Hills" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=800;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Nagar")||(pickupaddress.value == "Gandhi Nagar" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Rangalaya")||(pickupaddress.value == "Rangalaya" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "KFC")||(pickupaddress.value == "KFC" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hundred's Heritage")||(pickupaddress.value == "Hundred's Heritage" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Fortune Park")||(pickupaddress.value == "Fortune Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "PVR Mall")||(pickupaddress.value == "PVR Mall" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Oscar Theatre")||(pickupaddress.value == "Oscar Theatre" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Road")||(pickupaddress.value == "Gandhi Road" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Jyothi Hotel")||(pickupaddress.value == "Jyothi Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Barbeque Nation")||(pickupaddress.value == "Barbeque Nation" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Benz Park")||(pickupaddress.value == "Benz Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Khanna Fiesta")||(pickupaddress.value == "Khanna Fiesta" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Darling Residency")||(pickupaddress.value == "Darling Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "GRT Residency")||(pickupaddress.value == "GRT Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Annamalai Hotel")||(pickupaddress.value == "Annamalai Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Srinivasa Hotel")||(pickupaddress.value == "Srinivasa Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pulusu")||(pickupaddress.value == "Pulusu" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Aarya's Restaurant")||(pickupaddress.value == "Aarya's Restaurant" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Namma Veedu Restaurant")||(pickupaddress.value == "Namma Veedu Restaurant" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pandyan Hotel")||(pickupaddress.value == "Pandyan Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Royal Grand")||(pickupaddress.value == "Royal Grand" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "CMC Hospital")||(pickupaddress.value == "CMC Hospital" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Naruvi Hospital")||(pickupaddress.value == "Naruvi Hospital" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Ranipet CMC")||(pickupaddress.value == "Ranipet CMC" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=650;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Bagayam Hospital")||(pickupaddress.value == "Bagayam Hospital" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=500;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vallimalai Temple")||(pickupaddress.value == "Vallimalai Temple" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=800;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Cup and Saucer Waterfalls")||(pickupaddress.value == "Cup and Saucer Waterfalls" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Collector's Office")||(pickupaddress.value == "Collector's Office" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SMS Grand Inn")||(pickupaddress.value == "SMS Grand Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Alka")||(pickupaddress.value == "Hotel Alka" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mount Paradise")||(pickupaddress.value == "Mount Paradise" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Krishna Hotel")||(pickupaddress.value == "Grand Krishna Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "DMart")||(pickupaddress.value == "DMart" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=500;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Zoo")||(pickupaddress.value == "Vellore Zoo" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=1500;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Essence")||(pickupaddress.value == "Hotel Essence" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "M Square")||(pickupaddress.value == "M Square" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Ganpat")||(pickupaddress.value == "Grand Ganpat" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Arihant Inn")||(pickupaddress.value == "Arihant Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Millenium Residency")||(pickupaddress.value == "Millenium Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SGRT Residency")||(pickupaddress.value == "SGRT Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kingsbury Fiesta")||(pickupaddress.value == "Kingsbury Fiesta" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=100;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Prince Park")||(pickupaddress.value == "Prince Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vijayshree Inn")||(pickupaddress.value == "Vijayshree Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "FAB Hotel Pranav Park")||(pickupaddress.value == "FAB Hotel Pranav Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Surabhi International")||(pickupaddress.value == "Surabhi International" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "JRS Residency")||(pickupaddress.value == "JRS Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pawan Park")||(pickupaddress.value == "Pawan Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "River View Hotel")||(pickupaddress.value == "River View Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=150;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Palm Tree Hotel")||(pickupaddress.value == "Palm Tree Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Gateway")||(pickupaddress.value == "Golden Gateway" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=700;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Balaji International")||(pickupaddress.value == "Sri Balaji International" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=150;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Yaa Residency")||(pickupaddress.value == "Yaa Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=100;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Senthur Inn")||(pickupaddress.value == "Senthur Inn" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Fort")||(pickupaddress.value == "Golden Fort" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "BKS Residency")||(pickupaddress.value == "BKS Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Murugan")||(pickupaddress.value == "Sri Murugan" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=250;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Chariot Hotel")||(pickupaddress.value == "Grand Chariot Hotel" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=400;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Park")||(pickupaddress.value == "Green Park" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vaibhav Residency")||(pickupaddress.value == "Vaibhav Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Baby Residency")||(pickupaddress.value == "Baby Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Babu Naidu Residency")||(pickupaddress.value == "Babu Naidu Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Banu Residency")||(pickupaddress.value == "Banu Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chella Krishna Residency")||(pickupaddress.value == "Chella Krishna Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=700;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SR Residency")||(pickupaddress.value == "SR Residency" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=300;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Vanadurga Peedam")||(pickupaddress.value == "Sri Vanadurga Peedam" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=500;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kannamangalam Reserve Forest")||(pickupaddress.value == "Kannamangalam Reserve Forest" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=1200;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Selva Vinayagar Kovil")||(pickupaddress.value == "Sri Selva Vinayagar Kovil" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=500;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "St John's Church")||(pickupaddress.value == "St John's Church" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Assumption Cathedral Church")||(pickupaddress.value == "Assumption Cathedral Church" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Earth Plate")||(pickupaddress.value == "Earth Plate" && dropaddress.value == "VIT Main Gate")){
                document.getElementById("mainfare").innerHTML=350;
            }
        
            //FOR NO FARE
            if(pickupaddress.value == "#" || dropaddress.value == "#"){
                document.getElementById("mainfare").innerHTML="None";
                alert("Enter Valid Details : ")
            }
            if(pickupaddress.value == dropaddress.value){
                document.getElementById("mainfare").innerHTML="None";
                alert("Choose Different Locations : ")
            }
        
        
        }
    }

}
   


var telegram_bot_id = "6352070321:AAGewrFM6oIcMIWRsh8rNFicP3xCM84CeWs";
        //chat id
        var chat_id = 1212458291;
        var pickupaddresstele , dropaddresstele ,drivernametele,faretele,hosteltele,peopletele,passengernametele , passengerphonetele ,passengeremailtele ,today,time,message;
        var ready = function () {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            // time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            pickupaddresstele = document.getElementById("pickuplistinp").value;
            dropaddresstele =document.getElementById("droplistinp").value;
            let checkhosteltele = document.getElementById("toggler-1");
            if(checkhosteltele.checked == true){
                hosteltele = "Picked up from Hostel";
            }
            else{
                hosteltele = "Not Picked up from Hostel"
            }
            drivernametele = localStorage.getItem("drivername");
            faretele = document.getElementById("mainfare").innerHTML;
            peopletele = document.getElementById("noofpeopleselect").value;
            passengernametele = document.getElementById("passengername").value;
            passengerphonetele = document.getElementById("passengerphone").value;
            passengeremailtele = document.getElementById("passengeremail").value;





            
            message = "PickupLocation : " + pickupaddresstele + "\nDropLocation : " + dropaddresstele + "\nDriverName : "+drivernametele + "\nFare : " + faretele + "\nPassengerName : "+passengernametele + "\nPassengerPhone : "+passengerphonetele + "\nPassengerEmail"+passengeremailtele + "\nDate : "+today + "\nTime : " + time;
        };
        var sender = function () {
            ready();
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
                },
                "data": JSON.stringify({
                    "chat_id": chat_id,
                    "text": message
                })
            };
            $.ajax(settings).done(function (response) {
                console.log(response);
            });
            // document.getElementById("name").value = "";
            // document.getElementById("email").value = "";
            // document.getElementById("message").value = "";
            return false;
        };