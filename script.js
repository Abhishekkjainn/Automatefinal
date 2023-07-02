//loader
//loader animator
let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
//time extractor and saving it to localstorage
function accordingtimefareupdate(){
    var today = new Date();
    var time = today.getHours()
    localStorage.setItem("timefare",time);
}
//to redirect to booking page from homepage book now button
function booknowtobookpage(){
    location.assign("bookingpage.html")
}
//to display the fare button on clicking the find rides button
function hidefaredivbookingpage(){
    let faredivbookingpage = document.getElementById("faredivbookingpage");
    if(faredivbookingpage.style.display === "none"){
        faredivbookingpage.style.display = "flex";
    }
    else{
        faredivbookingpage.style.display = "flex";
    }
}
//social media links
function automateinsta(){
    window.location.assign("https://www.instagram.com/automate_vellore/")
}
function automatelinkedin(){
    window.location.assign("https://www.instagram.com/automate_vellore/")
}
//to display the drivers div when clicked on find rides button
function hidedriversdivbookingpage(){
    let driversdivbookingpage = document.getElementById("availabledriversbookingpage");
    if(driversdivbookingpage.style.display === "none"){
        driversdivbookingpage.style.display = "block";
    }
    else{
        driversdivbookingpage.style.display = "block";
    }
}
// redirect to mountains page when clicked on the mountain category and all the categories
function mountaincattomountainpage(){
    location.assign("Mountainscategory.html")
}
//temple redirect
function templecattotemplepage(){
    location.assign("templescategory.html")
}
//restaurants redirect
function restaurantcattorestaurantpagepage(){
    location.assign("restaurants.html")
}
//hotel redirect
function hotelcattohotelpage(){
    location.assign("Hotels.html")
}
//hospital redirect
function hospitalcattohospitalpage(){
    location.assign("hospital.html")
}
//theatre redict
function theatrecattotheatrepage(){
    location.assign("theatre.html")
}
//offer 1 redirect to offer page on clicking the offers button
function offer1buttontooffer1page(){
    location.assign("offer1page.html")
}
//offer2redirect to offer pafe on clicking offers button
function offer2buttontooffer2page(){
    location.assign("offer2page.html")
}
//offer3redirect to offer pafe on clicking offers button
function offer3buttontooffer3page(){
    location.assign("offer3page.html")
}
//offer4redirect to offer pafe on clicking offers button
function offer4buttontooffer4page(){
    location.assign("offer4page.html")
}
//redirect to confirm booking page
function cnfbuttontocnfpage(){
    location.assign("confirmbookingpage.html")
}
//redirec to ride completed page
function ridecompletedbuttontopage(){
    location.assign("ridecompletedpage.html")
}
//knowfare redirect on clicking knowfare button in index.html
function knowfareredirect(){
    location.assign("Knowfare.html")
}
//extracting the pickup address and saving it to the local storage
function extractpickupaddress(){
    let pickupaddress = document.getElementById("pickuplocation");
    localStorage.setItem("pickupaddress",pickupaddress.value);
    console.log(pickupaddress.value+"- Pickup Address");
}
function extractdropaddress(){
    let dropaddress = document.getElementById("droplocationbookingpage");
    console.log(dropaddress.value+"- Drop Address");
    localStorage.setItem("dropaddress",dropaddress.value);
}
function getnoofpeople(){
    let people = document.getElementById("people");
    console.log(people.value+"- no of passengers");
    localStorage.setItem("people",people.value);
}
//get time
function gettime(){
    var d = new Date();
    var time = d.getHours();
    localStorage.setItem("time",time);
}

//fare updation in the booking page
function fareupdate(){
    let time = localStorage.getItem("time");

    let peoplekat = localStorage.getItem("people");
    let pickupaddress = document.getElementById("pickuplocation");
    let dropaddress = document.getElementById("droplocationbookingpage");
    let checkhostel = document.getElementById("checkhostel");
    //if time is after 11 to morning 6

    if(checkhostel.checked == true){
        if(time == 24 || time == 0 || time == 1 || time == 2 || time == 3 || time == 4 || time ==5){


            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Katpadi railway station")||(pickupaddress.value == "Katpadi railway station" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 175 +50+ "Rs/-";
                    let fare = people2; 
                    localStorage.setItem("fare" , fare);
                    document.getElementById("fare").innerHTML = fare;
                }
                else{
                    let fare = 175+50 +"Rs/-"; 
                    localStorage.setItem("fare" , fare);
                    document.getElementById("fare").innerHTML = fare + " Rs/-";
                }
            }
        
        
            // bus stand
        
        
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "New Bus Stand")||(pickupaddress.value == "New Bus Stand" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 300 +50 +"Rs/-";
                    let fare = people2; 
                    localStorage.setItem("fare" , fare);
                    document.getElementById("fare").innerHTML = fare;
                }
                else{
                    let fare = 300 +50+"Rs/-"; 
                    localStorage.setItem("fare" , fare);
                    document.getElementById("fare").innerHTML = fare + " Rs/-";
                }
            }
            
            //GREEN CIRCLE
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Circle")||(pickupaddress.value == "Green Circle" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //VISHNU THEATRE
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vishnu Theatre")||(pickupaddress.value == "Vishnu Theatre" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Galaxy Cinemas
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Galaxy Cinemas")||(pickupaddress.value == "Galaxy Cinemas" && dropaddress.value == "VIT Main Gate")){
                let fare = "200 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //VELLORE KITCHEN
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Kitchen")||(pickupaddress.value == "Vellore Kitchen" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //karigiri hills
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Karigiri Hills")||(pickupaddress.value == "Karigiri Hills" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //GOLDEN TEMPLE
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Temple")||(pickupaddress.value == "Golden Temple" && dropaddress.value == "VIT Main Gate")){
                let fare = "750 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Chittoor Bus stand
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chittoor Bus stand")||(pickupaddress.value == "Chittoor Bus stand" && dropaddress.value == "VIT Main Gate")){
                let fare = "150 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Vellore fort
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Fort")||(pickupaddress.value == "Vellore Fort" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //balamathi hills
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Balamathi Hills")||(pickupaddress.value == "Balamathi Hills" && dropaddress.value == "VIT Main Gate")){
                let fare = "750 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Green Tender PARKS
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Tender Parks")||(pickupaddress.value == "Green Tender Parks" && dropaddress.value == "VIT Main Gate")){
                let fare = "1050 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Mahadev hills
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mahadev Hills")||(pickupaddress.value == "Mahadev Hills" && dropaddress.value == "VIT Main Gate")){
                let fare = "850 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //gandhi nagar
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Nagar")||(pickupaddress.value == "Gandhi Nagar" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //rangalaya
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Rangalaya")||(pickupaddress.value == "Rangalaya" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //KFC
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "KFC")||(pickupaddress.value == "KFC" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Hundred's Heritage
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hundred's Heritage")||(pickupaddress.value == "Hundred's Heritage" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //fortune park
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Fortune Park")||(pickupaddress.value == "Fortune Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //pvr mall
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "PVR Mall")||(pickupaddress.value == "PVR Mall" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Oscar theatre
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Oscar Theatre")||(pickupaddress.value == "Oscar Theatre" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Gandhi road
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Road")||(pickupaddress.value == "Gandhi Road" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //jyothi road
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Jyothi Hotel")||(pickupaddress.value == "Jyothi Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //bbq nation
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Barbeque Nation")||(pickupaddress.value == "Barbeque Nation" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //benz park
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Benz Park")||(pickupaddress.value == "Benz Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //khanna fiesta
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Khanna Fiesta")||(pickupaddress.value == "Khanna Fiesta" && dropaddress.value == "VIT Main Gate")){
                let fare = "450 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //darling
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Darling Residency")||(pickupaddress.value == "Darling Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "450 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //GRT Residency
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "GRT Residency")||(pickupaddress.value == "GRT Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //annamalai hotel
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Annamalai Hotel")||(pickupaddress.value == "Annamalai Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //srinivasa hotel
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Srinivasa Hotel")||(pickupaddress.value == "Srinivasa Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //pulusu
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pulusu")||(pickupaddress.value == "Pulusu" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //aaryas restaurant
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Aarya's Restaurant")||(pickupaddress.value == "Aarya's Restaurant" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //namma veedu
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Namma Veedu Restaurant")||(pickupaddress.value == "Namma Veedu Restaurant" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //pnadyan hotel
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pandyan Hotel")||(pickupaddress.value == "Pandyan Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //royal grand
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Royal Grand")||(pickupaddress.value == "Royal Grand" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //CMC HOSPITA
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "CMC Hospital")||(pickupaddress.value == "CMC Hospital" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Naruvi hospital
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Naruvi Hospital")||(pickupaddress.value == "Naruvi Hospital" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Ranipet Hospital
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Ranipet CMC")||(pickupaddress.value == "Ranipet CMC" && dropaddress.value == "VIT Main Gate")){
                let fare = "700 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //bagayam hospital
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Bagayam Hospital")||(pickupaddress.value == "Bagayam Hospital" && dropaddress.value == "VIT Main Gate")){
                let fare = "550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Vallimalai temple
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vallimalai Temple")||(pickupaddress.value == "Vallimalai Temple" && dropaddress.value == "VIT Main Gate")){
                let fare = "850 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //cup and saucer fall
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Cup and Saucer Waterfalls")||(pickupaddress.value == "Cup and Saucer Waterfalls" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //collector office
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Collector's Office")||(pickupaddress.value == "Collector's Office" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //SMS Grand Inn
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SMS Grand Inn")||(pickupaddress.value == "SMS Grand Inn" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //hotel alka
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Alka")||(pickupaddress.value == "Hotel Alka" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //mount paradise
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mount Paradise")||(pickupaddress.value == "Mount Paradise" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //grand krishna hotel
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Krishna Hotel")||(pickupaddress.value == "Grand Krishna Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "450 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //dmart
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "DMart")||(pickupaddress.value == "DMart" && dropaddress.value == "VIT Main Gate")){
                let fare = "550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //vellore zoo
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Zoo")||(pickupaddress.value == "Vellore Zoo" && dropaddress.value == "VIT Main Gate")){
                let fare = "1550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Hotel Essence
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Essence")||(pickupaddress.value == "Hotel Essence" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //M Square
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "M Square")||(pickupaddress.value == "M Square" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Grand Ganpat
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Ganpat")||(pickupaddress.value == "Grand Ganpat" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Arihant Inn
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Arihant Inn")||(pickupaddress.value == "Arihant Inn" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Millenium Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Millenium Residency")||(pickupaddress.value == "Millenium Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //SGRT Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SGRT Residency")||(pickupaddress.value == "SGRT Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Kingsbury Fiesta
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kingsbury Fiesta")||(pickupaddress.value == "Kingsbury Fiesta" && dropaddress.value == "VIT Main Gate")){
                let fare = "150 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Prince Park
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Prince Park")||(pickupaddress.value == "Prince Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Vijayshree Inn
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vijayshree Inn")||(pickupaddress.value == "Vijayshree Inn" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //FAB Hotel Pranav Park
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "FAB Hotel Pranav Park")||(pickupaddress.value == "FAB Hotel Pranav Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Surabhi International
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Surabhi International")||(pickupaddress.value == "Surabhi International" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //JRS Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "JRS Residency")||(pickupaddress.value == "JRS Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Pawan Park
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pawan Park")||(pickupaddress.value == "Pawan Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //River View Hotel
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "River View Hotel")||(pickupaddress.value == "River View Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "200 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Palm Tree Hotel
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Palm Tree Hotel")||(pickupaddress.value == "Palm Tree Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Surabhi International
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Gateway")||(pickupaddress.value == "Golden Gateway" && dropaddress.value == "VIT Main Gate")){
                let fare = "750 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Sri Balaji International
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Balaji International")||(pickupaddress.value == "Sri Balaji International" && dropaddress.value == "VIT Main Gate")){
                let fare = "200 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Yaa Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Yaa Residency")||(pickupaddress.value == "Yaa Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "150 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Senthur Inn
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Senthur Inn")||(pickupaddress.value == "Senthur Inn" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Golden Fort
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Fort")||(pickupaddress.value == "Golden Fort" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //BKS Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "BKS Residency")||(pickupaddress.value == "BKS Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Sri Murugan
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Murugan")||(pickupaddress.value == "Sri Murugan" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Grand Chariot Hotel
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Chariot Hotel")||(pickupaddress.value == "Grand Chariot Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "450 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Green Park
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Park")||(pickupaddress.value == "Green Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Vaibhav Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vaibhav Residency")||(pickupaddress.value == "Vaibhav Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Baby Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Baby Residency")||(pickupaddress.value == "Baby Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Babu Naidu Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Babu Naidu Residency")||(pickupaddress.value == "Babu Naidu Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Banu Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Banu Residency")||(pickupaddress.value == "Banu Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Chella Krishna Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chella Krishna Residency")||(pickupaddress.value == "Chella Krishna Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "750 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //SR Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SR Residency")||(pickupaddress.value == "SR Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Sri Vanadurga Peedam
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Vanadurga Peedam")||(pickupaddress.value == "Sri Vanadurga Peedam" && dropaddress.value == "VIT Main Gate")){
                let fare = "550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Kannamangalam Reserve Forest
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kannamangalam Reserve Forest")||(pickupaddress.value == "Kannamangalam Reserve Forest" && dropaddress.value == "VIT Main Gate")){
                let fare = "1250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Sri Selva Vinayagar Kovil
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Selva Vinayagar Kovil")||(pickupaddress.value == "Sri Selva Vinayagar Kovil" && dropaddress.value == "VIT Main Gate")){
                let fare = "550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //St John's Church
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "St John's Church")||(pickupaddress.value == "St John's Church" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Assumption Cathedral Church
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Assumption Cathedral Church")||(pickupaddress.value == "Assumption Cathedral Church" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Earth Plate
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Earth Plate")||(pickupaddress.value == "Earth Plate" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            
        
        
        
        
        
        
        
        
        
        
        
        
            //FOR NO FARE
            if(pickupaddress.value == "#" || dropaddress.value == "#"){
                let fare = "No Fare" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
                document.getElementById("availabledriversbookingpage").style.display="none";
            }
        
        
        
        
        
        
        
        
        
        
        
        
        
            if(pickupaddress.value == dropaddress.value){
                let fare = "No Fare"; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
                document.getElementById("availabledriversbookingpage").style.display="none";
            }
            
        }
        //between 6 to night 11
        else{
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Katpadi railway station")||(pickupaddress.value == "Katpadi railway station" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 125 +50;
                    let fare = people2; 
                    localStorage.setItem("fare" , fare);
                    document.getElementById("fare").innerHTML = fare+" Rs/-";
                }
                else{
                    let fare = 125+50; 
                    localStorage.setItem("fare" , fare);
                    document.getElementById("fare").innerHTML = fare+" Rs/-";
                }
            }
        
        
            // bus stand
        
        
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "New Bus Stand")||(pickupaddress.value == "New Bus Stand" && dropaddress.value == "VIT Main Gate")){
                if(peoplekat > 2){
                    let people2 = ((peoplekat-2)*50) + 250 +50+ "Rs/-";
                    let fare = people2; 
                    localStorage.setItem("fare" , fare);
                    document.getElementById("fare").innerHTML = fare;
                }
                else{
                    let fare = 250+50 +"Rs/-"; 
                    localStorage.setItem("fare" , fare);
                    document.getElementById("fare").innerHTML = fare;
                }
            }
            
            //GREEN CIRCLE
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Circle")||(pickupaddress.value == "Green Circle" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //VISHNU THEATRE
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vishnu Theatre")||(pickupaddress.value == "Vishnu Theatre" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Galaxy Cinemas
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Galaxy Cinemas")||(pickupaddress.value == "Galaxy Cinemas" && dropaddress.value == "VIT Main Gate")){
                let fare = "150 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //VELLORE KITCHEN
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Kitchen")||(pickupaddress.value == "Vellore Kitchen" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //karigiri hills
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Karigiri Hills")||(pickupaddress.value == "Karigiri Hills" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //GOLDEN TEMPLE
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Temple")||(pickupaddress.value == "Golden Temple" && dropaddress.value == "VIT Main Gate")){
                let fare = "750 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Chittoor Bus stand
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chittoor Bus stand")||(pickupaddress.value == "Chittoor Bus stand" && dropaddress.value == "VIT Main Gate")){
                let fare = "150 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Vellore fort
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Fort")||(pickupaddress.value == "Vellore Fort" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //balamathi hills
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Balamathi Hills")||(pickupaddress.value == "Balamathi Hills" && dropaddress.value == "VIT Main Gate")){
                let fare = "750 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Green Tender PARKS
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Tender Parks")||(pickupaddress.value == "Green Tender Parks" && dropaddress.value == "VIT Main Gate")){
                let fare = "1050 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Mahadev hills
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mahadev Hills")||(pickupaddress.value == "Mahadev Hills" && dropaddress.value == "VIT Main Gate")){
                let fare = "850 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //gandhi nagar
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Nagar")||(pickupaddress.value == "Gandhi Nagar" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //rangalaya
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Rangalaya")||(pickupaddress.value == "Rangalaya" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //KFC
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "KFC")||(pickupaddress.value == "KFC" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Hundred's Heritage
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hundred's Heritage")||(pickupaddress.value == "Hundred's Heritage" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //fortune park
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Fortune Park")||(pickupaddress.value == "Fortune Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //pvr mall
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "PVR Mall")||(pickupaddress.value == "PVR Mall" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Oscar theatre
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Oscar Theatre")||(pickupaddress.value == "Oscar Theatre" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Gandhi road
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Road")||(pickupaddress.value == "Gandhi Road" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //jyothi road
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Jyothi Hotel")||(pickupaddress.value == "Jyothi Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //bbq nation
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Barbeque Nation")||(pickupaddress.value == "Barbeque Nation" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //benz park
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Benz Park")||(pickupaddress.value == "Benz Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //khanna fiesta
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Khanna Fiesta")||(pickupaddress.value == "Khanna Fiesta" && dropaddress.value == "VIT Main Gate")){
                let fare = "450 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //darling
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Darling Residency")||(pickupaddress.value == "Darling Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "450 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //GRT Residency
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "GRT Residency")||(pickupaddress.value == "GRT Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //annamalai hotel
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Annamalai Hotel")||(pickupaddress.value == "Annamalai Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //srinivasa hotel
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Srinivasa Hotel")||(pickupaddress.value == "Srinivasa Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //pulusu
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pulusu")||(pickupaddress.value == "Pulusu" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //aaryas restaurant
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Aarya's Restaurant")||(pickupaddress.value == "Aarya's Restaurant" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //namma veedu
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Namma Veedu Restaurant")||(pickupaddress.value == "Namma Veedu Restaurant" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //pnadyan hotel
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pandyan Hotel")||(pickupaddress.value == "Pandyan Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //royal grand
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Royal Grand")||(pickupaddress.value == "Royal Grand" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //CMC HOSPITA
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "CMC Hospital")||(pickupaddress.value == "CMC Hospital" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Naruvi hospital
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Naruvi Hospital")||(pickupaddress.value == "Naruvi Hospital" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Ranipet Hospital
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Ranipet CMC")||(pickupaddress.value == "Ranipet CMC" && dropaddress.value == "VIT Main Gate")){
                let fare = "700 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //bagayam hospital
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Bagayam Hospital")||(pickupaddress.value == "Bagayam Hospital" && dropaddress.value == "VIT Main Gate")){
                let fare = "550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Vallimalai temple
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vallimalai Temple")||(pickupaddress.value == "Vallimalai Temple" && dropaddress.value == "VIT Main Gate")){
                let fare = "850 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //cup and saucer fall
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Cup and Saucer Waterfalls")||(pickupaddress.value == "Cup and Saucer Waterfalls" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //collector office
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Collector's Office")||(pickupaddress.value == "Collector's Office" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //SMS Grand Inn
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SMS Grand Inn")||(pickupaddress.value == "SMS Grand Inn" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //hotel alka
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Alka")||(pickupaddress.value == "Hotel Alka" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //mount paradise
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mount Paradise")||(pickupaddress.value == "Mount Paradise" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //grand krishna hotel
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Krishna Hotel")||(pickupaddress.value == "Grand Krishna Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "450 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //dmart
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "DMart")||(pickupaddress.value == "DMart" && dropaddress.value == "VIT Main Gate")){
                let fare = "550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //vellore zoo
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Zoo")||(pickupaddress.value == "Vellore Zoo" && dropaddress.value == "VIT Main Gate")){
                let fare = "1550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Hotel Essence
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Essence")||(pickupaddress.value == "Hotel Essence" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //M Square
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "M Square")||(pickupaddress.value == "M Square" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Grand Ganpat
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Ganpat")||(pickupaddress.value == "Grand Ganpat" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Arihant Inn
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Arihant Inn")||(pickupaddress.value == "Arihant Inn" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Millenium Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Millenium Residency")||(pickupaddress.value == "Millenium Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //SGRT Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SGRT Residency")||(pickupaddress.value == "SGRT Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Kingsbury Fiesta
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kingsbury Fiesta")||(pickupaddress.value == "Kingsbury Fiesta" && dropaddress.value == "VIT Main Gate")){
                let fare = "150 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Prince Park
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Prince Park")||(pickupaddress.value == "Prince Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Vijayshree Inn
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vijayshree Inn")||(pickupaddress.value == "Vijayshree Inn" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //FAB Hotel Pranav Park
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "FAB Hotel Pranav Park")||(pickupaddress.value == "FAB Hotel Pranav Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Surabhi International
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Surabhi International")||(pickupaddress.value == "Surabhi International" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //JRS Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "JRS Residency")||(pickupaddress.value == "JRS Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Pawan Park
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pawan Park")||(pickupaddress.value == "Pawan Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //River View Hotel
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "River View Hotel")||(pickupaddress.value == "River View Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "200 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Palm Tree Hotel
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Palm Tree Hotel")||(pickupaddress.value == "Palm Tree Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Surabhi International
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Gateway")||(pickupaddress.value == "Golden Gateway" && dropaddress.value == "VIT Main Gate")){
                let fare = "750 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Sri Balaji International
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Balaji International")||(pickupaddress.value == "Sri Balaji International" && dropaddress.value == "VIT Main Gate")){
                let fare = "200 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Yaa Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Yaa Residency")||(pickupaddress.value == "Yaa Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "150 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Senthur Inn
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Senthur Inn")||(pickupaddress.value == "Senthur Inn" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Golden Fort
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Fort")||(pickupaddress.value == "Golden Fort" && dropaddress.value == "VIT Main Gate")){
                let fare = "250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //BKS Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "BKS Residency")||(pickupaddress.value == "BKS Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Sri Murugan
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Murugan")||(pickupaddress.value == "Sri Murugan" && dropaddress.value == "VIT Main Gate")){
                let fare = "300 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Grand Chariot Hotel
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Chariot Hotel")||(pickupaddress.value == "Grand Chariot Hotel" && dropaddress.value == "VIT Main Gate")){
                let fare = "450 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Green Park
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Park")||(pickupaddress.value == "Green Park" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Vaibhav Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vaibhav Residency")||(pickupaddress.value == "Vaibhav Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Baby Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Baby Residency")||(pickupaddress.value == "Baby Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Babu Naidu Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Babu Naidu Residency")||(pickupaddress.value == "Babu Naidu Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Banu Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Banu Residency")||(pickupaddress.value == "Banu Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Chella Krishna Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chella Krishna Residency")||(pickupaddress.value == "Chella Krishna Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "750 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //SR Residency
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SR Residency")||(pickupaddress.value == "SR Residency" && dropaddress.value == "VIT Main Gate")){
                let fare = "350 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Sri Vanadurga Peedam
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Vanadurga Peedam")||(pickupaddress.value == "Sri Vanadurga Peedam" && dropaddress.value == "VIT Main Gate")){
                let fare = "550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Kannamangalam Reserve Forest
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kannamangalam Reserve Forest")||(pickupaddress.value == "Kannamangalam Reserve Forest" && dropaddress.value == "VIT Main Gate")){
                let fare = "1250 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //Sri Selva Vinayagar Kovil
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Selva Vinayagar Kovil")||(pickupaddress.value == "Sri Selva Vinayagar Kovil" && dropaddress.value == "VIT Main Gate")){
                let fare = "550 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
             //St John's Church
             if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "St John's Church")||(pickupaddress.value == "St John's Church" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Assumption Cathedral Church
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Assumption Cathedral Church")||(pickupaddress.value == "Assumption Cathedral Church" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            //Earth Plate
            if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Earth Plate")||(pickupaddress.value == "Earth Plate" && dropaddress.value == "VIT Main Gate")){
                let fare = "400 Rs/-" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            
        
        
        
        
        
        
        
        
        
        
        
        
            //FOR NO FARE
            if(pickupaddress.value == "#" || dropaddress.value == "#"){
                let fare = "No Fare" 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
                document.getElementById("availabledriversbookingpage").style.display="none";
            }
        
        
        
        
        
        
        
        
        
        
        
        
        
            if(pickupaddress.value == dropaddress.value){
                let fare = "No Fare"; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
                document.getElementById("availabledriversbookingpage").style.display="none";
            }
            
        } 
    }
    else{
        if(time == 24 || time == 0 || time == 1 || time == 2 || time == 3 || time == 4 || time ==5){


        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Katpadi railway station")||(pickupaddress.value == "Katpadi railway station" && dropaddress.value == "VIT Main Gate")){
            if(peoplekat > 2){
                let people2 = ((peoplekat-2)*50) + 175 + "Rs/-";
                let fare = people2; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            else{
                let fare = 175 +"Rs/-"; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare + " Rs/-";
            }
        }
    
    
        // bus stand
    
    
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "New Bus Stand")||(pickupaddress.value == "New Bus Stand" && dropaddress.value == "VIT Main Gate")){
            if(peoplekat > 2){
                let people2 = ((peoplekat-2)*50) + 300 + "Rs/-";
                let fare = people2; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            else{
                let fare = 300 +"Rs/-"; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare + " Rs/-";
            }
        }
        
        //GREEN CIRCLE
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Circle")||(pickupaddress.value == "Green Circle" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //VISHNU THEATRE
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vishnu Theatre")||(pickupaddress.value == "Vishnu Theatre" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Galaxy Cinemas
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Galaxy Cinemas")||(pickupaddress.value == "Galaxy Cinemas" && dropaddress.value == "VIT Main Gate")){
            let fare = "150 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //VELLORE KITCHEN
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Kitchen")||(pickupaddress.value == "Vellore Kitchen" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //karigiri hills
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Karigiri Hills")||(pickupaddress.value == "Karigiri Hills" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //GOLDEN TEMPLE
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Temple")||(pickupaddress.value == "Golden Temple" && dropaddress.value == "VIT Main Gate")){
            let fare = "750 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Chittoor Bus stand
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chittoor Bus stand")||(pickupaddress.value == "Chittoor Bus stand" && dropaddress.value == "VIT Main Gate")){
            let fare = "150 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Vellore fort
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Fort")||(pickupaddress.value == "Vellore Fort" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //balamathi hills
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Balamathi Hills")||(pickupaddress.value == "Balamathi Hills" && dropaddress.value == "VIT Main Gate")){
            let fare = "750 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Green Tender PARKS
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Tender Parks")||(pickupaddress.value == "Green Tender Parks" && dropaddress.value == "VIT Main Gate")){
            let fare = "1050 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Mahadev hills
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mahadev Hills")||(pickupaddress.value == "Mahadev Hills" && dropaddress.value == "VIT Main Gate")){
            let fare = "850 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //gandhi nagar
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Nagar")||(pickupaddress.value == "Gandhi Nagar" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //rangalaya
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Rangalaya")||(pickupaddress.value == "Rangalaya" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //KFC
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "KFC")||(pickupaddress.value == "KFC" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Hundred's Heritage
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hundred's Heritage")||(pickupaddress.value == "Hundred's Heritage" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //fortune park
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Fortune Park")||(pickupaddress.value == "Fortune Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //pvr mall
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "PVR Mall")||(pickupaddress.value == "PVR Mall" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Oscar theatre
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Oscar Theatre")||(pickupaddress.value == "Oscar Theatre" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Gandhi road
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Road")||(pickupaddress.value == "Gandhi Road" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //jyothi road
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Jyothi Hotel")||(pickupaddress.value == "Jyothi Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //bbq nation
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Barbeque Nation")||(pickupaddress.value == "Barbeque Nation" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //benz park
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Benz Park")||(pickupaddress.value == "Benz Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //khanna fiesta
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Khanna Fiesta")||(pickupaddress.value == "Khanna Fiesta" && dropaddress.value == "VIT Main Gate")){
            let fare = "450 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //darling
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Darling Residency")||(pickupaddress.value == "Darling Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "450 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //GRT Residency
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "GRT Residency")||(pickupaddress.value == "GRT Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //annamalai hotel
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Annamalai Hotel")||(pickupaddress.value == "Annamalai Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //srinivasa hotel
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Srinivasa Hotel")||(pickupaddress.value == "Srinivasa Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //pulusu
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pulusu")||(pickupaddress.value == "Pulusu" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //aaryas restaurant
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Aarya's Restaurant")||(pickupaddress.value == "Aarya's Restaurant" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //namma veedu
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Namma Veedu Restaurant")||(pickupaddress.value == "Namma Veedu Restaurant" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //pnadyan hotel
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pandyan Hotel")||(pickupaddress.value == "Pandyan Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //royal grand
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Royal Grand")||(pickupaddress.value == "Royal Grand" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //CMC HOSPITA
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "CMC Hospital")||(pickupaddress.value == "CMC Hospital" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Naruvi hospital
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Naruvi Hospital")||(pickupaddress.value == "Naruvi Hospital" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Ranipet Hospital
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Ranipet CMC")||(pickupaddress.value == "Ranipet CMC" && dropaddress.value == "VIT Main Gate")){
            let fare = "700 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //bagayam hospital
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Bagayam Hospital")||(pickupaddress.value == "Bagayam Hospital" && dropaddress.value == "VIT Main Gate")){
            let fare = "550 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Vallimalai temple
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vallimalai Temple")||(pickupaddress.value == "Vallimalai Temple" && dropaddress.value == "VIT Main Gate")){
            let fare = "850 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //cup and saucer fall
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Cup and Saucer Waterfalls")||(pickupaddress.value == "Cup and Saucer Waterfalls" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //collector office
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Collector's Office")||(pickupaddress.value == "Collector's Office" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //SMS Grand Inn
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SMS Grand Inn")||(pickupaddress.value == "SMS Grand Inn" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //hotel alka
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Alka")||(pickupaddress.value == "Hotel Alka" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //mount paradise
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mount Paradise")||(pickupaddress.value == "Mount Paradise" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //grand krishna hotel
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Krishna Hotel")||(pickupaddress.value == "Grand Krishna Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "450 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //dmart
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "DMart")||(pickupaddress.value == "DMart" && dropaddress.value == "VIT Main Gate")){
            let fare = "550 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //vellore zoo
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Zoo")||(pickupaddress.value == "Vellore Zoo" && dropaddress.value == "VIT Main Gate")){
            let fare = "1550 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Hotel Essence
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Essence")||(pickupaddress.value == "Hotel Essence" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //M Square
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "M Square")||(pickupaddress.value == "M Square" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Grand Ganpat
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Ganpat")||(pickupaddress.value == "Grand Ganpat" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Arihant Inn
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Arihant Inn")||(pickupaddress.value == "Arihant Inn" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Millenium Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Millenium Residency")||(pickupaddress.value == "Millenium Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //SGRT Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SGRT Residency")||(pickupaddress.value == "SGRT Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Kingsbury Fiesta
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kingsbury Fiesta")||(pickupaddress.value == "Kingsbury Fiesta" && dropaddress.value == "VIT Main Gate")){
            let fare = "150 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Prince Park
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Prince Park")||(pickupaddress.value == "Prince Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Vijayshree Inn
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vijayshree Inn")||(pickupaddress.value == "Vijayshree Inn" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //FAB Hotel Pranav Park
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "FAB Hotel Pranav Park")||(pickupaddress.value == "FAB Hotel Pranav Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Surabhi International
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Surabhi International")||(pickupaddress.value == "Surabhi International" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //JRS Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "JRS Residency")||(pickupaddress.value == "JRS Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Pawan Park
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pawan Park")||(pickupaddress.value == "Pawan Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //River View Hotel
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "River View Hotel")||(pickupaddress.value == "River View Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Palm Tree Hotel
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Palm Tree Hotel")||(pickupaddress.value == "Palm Tree Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Surabhi International
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Gateway")||(pickupaddress.value == "Golden Gateway" && dropaddress.value == "VIT Main Gate")){
            let fare = "750 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Sri Balaji International
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Balaji International")||(pickupaddress.value == "Sri Balaji International" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Yaa Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Yaa Residency")||(pickupaddress.value == "Yaa Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "150 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Senthur Inn
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Senthur Inn")||(pickupaddress.value == "Senthur Inn" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Golden Fort
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Fort")||(pickupaddress.value == "Golden Fort" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //BKS Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "BKS Residency")||(pickupaddress.value == "BKS Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Sri Murugan
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Murugan")||(pickupaddress.value == "Sri Murugan" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Grand Chariot Hotel
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Chariot Hotel")||(pickupaddress.value == "Grand Chariot Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "450 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Green Park
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Park")||(pickupaddress.value == "Green Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Vaibhav Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vaibhav Residency")||(pickupaddress.value == "Vaibhav Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Baby Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Baby Residency")||(pickupaddress.value == "Baby Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Babu Naidu Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Babu Naidu Residency")||(pickupaddress.value == "Babu Naidu Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Banu Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Banu Residency")||(pickupaddress.value == "Banu Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Chella Krishna Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chella Krishna Residency")||(pickupaddress.value == "Chella Krishna Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "750 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //SR Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SR Residency")||(pickupaddress.value == "SR Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Sri Vanadurga Peedam
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Vanadurga Peedam")||(pickupaddress.value == "Sri Vanadurga Peedam" && dropaddress.value == "VIT Main Gate")){
            let fare = "550 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Kannamangalam Reserve Forest
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kannamangalam Reserve Forest")||(pickupaddress.value == "Kannamangalam Reserve Forest" && dropaddress.value == "VIT Main Gate")){
            let fare = "1250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Sri Selva Vinayagar Kovil
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Selva Vinayagar Kovil")||(pickupaddress.value == "Sri Selva Vinayagar Kovil" && dropaddress.value == "VIT Main Gate")){
            let fare = "550 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //St John's Church
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "St John's Church")||(pickupaddress.value == "St John's Church" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Assumption Cathedral Church
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Assumption Cathedral Church")||(pickupaddress.value == "Assumption Cathedral Church" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Earth Plate
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Earth Plate")||(pickupaddress.value == "Earth Plate" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        
    
    
    
    
    
    
    
    
    
    
    
    
        //FOR NO FARE
        if(pickupaddress.value == "#" || dropaddress.value == "#"){
            let fare = "No Fare" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
            document.getElementById("availabledriversbookingpage").style.display="none";
        }
        if(pickupaddress.value == dropaddress.value){
            let fare = "No Fare"; 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
            document.getElementById("availabledriversbookingpage").style.display="none";
        }
        
        }
        //between 6 to night 11
        else{
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Katpadi railway station")||(pickupaddress.value == "Katpadi railway station" && dropaddress.value == "VIT Main Gate")){
            if(peoplekat > 2){
                let people2 = ((peoplekat-2)*50) + 125 + "Rs/-";
                let fare = people2; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            else{
                let fare = 125+"Rs/-"; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare + " Rs/-";
            }
        }
    
    
        // bus stand
    
    
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "New Bus Stand")||(pickupaddress.value == "New Bus Stand" && dropaddress.value == "VIT Main Gate")){
            if(peoplekat > 2){
                let people2 = ((peoplekat-2)*50) + 250 + "Rs/-";
                let fare = people2; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare;
            }
            else{
                let fare = 250 +"Rs/-"; 
                localStorage.setItem("fare" , fare);
                document.getElementById("fare").innerHTML = fare + " Rs/-";
            }
        }
        
        //GREEN CIRCLE
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Circle")||(pickupaddress.value == "Green Circle" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //VISHNU THEATRE
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vishnu Theatre")||(pickupaddress.value == "Vishnu Theatre" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Galaxy Cinemas
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Galaxy Cinemas")||(pickupaddress.value == "Galaxy Cinemas" && dropaddress.value == "VIT Main Gate")){
            let fare = "100 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //VELLORE KITCHEN
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Kitchen")||(pickupaddress.value == "Vellore Kitchen" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //karigiri hills
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Karigiri Hills")||(pickupaddress.value == "Karigiri Hills" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //GOLDEN TEMPLE
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Temple")||(pickupaddress.value == "Golden Temple" && dropaddress.value == "VIT Main Gate")){
            let fare = "700 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Chittoor Bus stand
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chittoor Bus stand")||(pickupaddress.value == "Chittoor Bus stand" && dropaddress.value == "VIT Main Gate")){
            let fare = "100 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Vellore fort
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Fort")||(pickupaddress.value == "Vellore Fort" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //balamathi hills
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Balamathi Hills")||(pickupaddress.value == "Balamathi Hills" && dropaddress.value == "VIT Main Gate")){
            let fare = "700 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Green Tender PARKS
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Tender Parks")||(pickupaddress.value == "Green Tender Parks" && dropaddress.value == "VIT Main Gate")){
            let fare = "1000 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Mahadev hills
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mahadev Hills")||(pickupaddress.value == "Mahadev Hills" && dropaddress.value == "VIT Main Gate")){
            let fare = "800 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //gandhi nagar
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Nagar")||(pickupaddress.value == "Gandhi Nagar" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //rangalaya
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Rangalaya")||(pickupaddress.value == "Rangalaya" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //KFC
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "KFC")||(pickupaddress.value == "KFC" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Hundred's Heritage
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hundred's Heritage")||(pickupaddress.value == "Hundred's Heritage" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //fortune park
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Fortune Park")||(pickupaddress.value == "Fortune Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //pvr mall
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "PVR Mall")||(pickupaddress.value == "PVR Mall" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Oscar theatre
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Oscar Theatre")||(pickupaddress.value == "Oscar Theatre" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Gandhi road
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Gandhi Road")||(pickupaddress.value == "Gandhi Road" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //jyothi road
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Jyothi Hotel")||(pickupaddress.value == "Jyothi Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //bbq nation
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Barbeque Nation")||(pickupaddress.value == "Barbeque Nation" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //benz park
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Benz Park")||(pickupaddress.value == "Benz Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //khanna fiesta
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Khanna Fiesta")||(pickupaddress.value == "Khanna Fiesta" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //darling
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Darling Residency")||(pickupaddress.value == "Darling Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //GRT Residency
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "GRT Residency")||(pickupaddress.value == "GRT Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //annamalai hotel
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Annamalai Hotel")||(pickupaddress.value == "Annamalai Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //srinivasa hotel
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Srinivasa Hotel")||(pickupaddress.value == "Srinivasa Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //pulusu
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pulusu")||(pickupaddress.value == "Pulusu" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //aaryas restaurant
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Aarya's Restaurant")||(pickupaddress.value == "Aarya's Restaurant" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //namma veedu
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Namma Veedu Restaurant")||(pickupaddress.value == "Namma Veedu Restaurant" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //pnadyan hotel
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pandyan Hotel")||(pickupaddress.value == "Pandyan Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //royal grand
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Royal Grand")||(pickupaddress.value == "Royal Grand" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //CMC HOSPITA
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "CMC Hospital")||(pickupaddress.value == "CMC Hospital" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Naruvi hospital
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Naruvi Hospital")||(pickupaddress.value == "Naruvi Hospital" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Ranipet Hospital
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Ranipet CMC")||(pickupaddress.value == "Ranipet CMC" && dropaddress.value == "VIT Main Gate")){
            let fare = "650 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //bagayam hospital
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Bagayam Hospital")||(pickupaddress.value == "Bagayam Hospital" && dropaddress.value == "VIT Main Gate")){
            let fare = "500 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Vallimalai temple
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vallimalai Temple")||(pickupaddress.value == "Vallimalai Temple" && dropaddress.value == "VIT Main Gate")){
            let fare = "800 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //cup and saucer fall
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Cup and Saucer Waterfalls")||(pickupaddress.value == "Cup and Saucer Waterfalls" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //collector office
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Collector's Office")||(pickupaddress.value == "Collector's Office" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //SMS Grand Inn
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SMS Grand Inn")||(pickupaddress.value == "SMS Grand Inn" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //hotel alka
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Alka")||(pickupaddress.value == "Hotel Alka" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //mount paradise
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Mount Paradise")||(pickupaddress.value == "Mount Paradise" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //grand krishna hotel
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Krishna Hotel")||(pickupaddress.value == "Grand Krishna Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //dmart
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "DMart")||(pickupaddress.value == "DMart" && dropaddress.value == "VIT Main Gate")){
            let fare = "500 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //vellore zoo
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vellore Zoo")||(pickupaddress.value == "Vellore Zoo" && dropaddress.value == "VIT Main Gate")){
            let fare = "1500 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Hotel Essence
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Hotel Essence")||(pickupaddress.value == "Hotel Essence" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //M Square
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "M Square")||(pickupaddress.value == "M Square" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Grand Ganpat
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Ganpat")||(pickupaddress.value == "Grand Ganpat" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Arihant Inn
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Arihant Inn")||(pickupaddress.value == "Arihant Inn" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Millenium Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Millenium Residency")||(pickupaddress.value == "Millenium Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //SGRT Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SGRT Residency")||(pickupaddress.value == "SGRT Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Kingsbury Fiesta
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kingsbury Fiesta")||(pickupaddress.value == "Kingsbury Fiesta" && dropaddress.value == "VIT Main Gate")){
            let fare = "100 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Prince Park
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Prince Park")||(pickupaddress.value == "Prince Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Vijayshree Inn
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vijayshree Inn")||(pickupaddress.value == "Vijayshree Inn" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //FAB Hotel Pranav Park
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "FAB Hotel Pranav Park")||(pickupaddress.value == "FAB Hotel Pranav Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Surabhi International
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Surabhi International")||(pickupaddress.value == "Surabhi International" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //JRS Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "JRS Residency")||(pickupaddress.value == "JRS Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Pawan Park
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Pawan Park")||(pickupaddress.value == "Pawan Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //River View Hotel
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "River View Hotel")||(pickupaddress.value == "River View Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "150 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Palm Tree Hotel
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Palm Tree Hotel")||(pickupaddress.value == "Palm Tree Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Surabhi International
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Gateway")||(pickupaddress.value == "Golden Gateway" && dropaddress.value == "VIT Main Gate")){
            let fare = "700 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Sri Balaji International
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Balaji International")||(pickupaddress.value == "Sri Balaji International" && dropaddress.value == "VIT Main Gate")){
            let fare = "150 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Yaa Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Yaa Residency")||(pickupaddress.value == "Yaa Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "100 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Senthur Inn
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Senthur Inn")||(pickupaddress.value == "Senthur Inn" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Golden Fort
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Golden Fort")||(pickupaddress.value == "Golden Fort" && dropaddress.value == "VIT Main Gate")){
            let fare = "200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //BKS Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "BKS Residency")||(pickupaddress.value == "BKS Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Sri Murugan
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Murugan")||(pickupaddress.value == "Sri Murugan" && dropaddress.value == "VIT Main Gate")){
            let fare = "250 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Grand Chariot Hotel
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Grand Chariot Hotel")||(pickupaddress.value == "Grand Chariot Hotel" && dropaddress.value == "VIT Main Gate")){
            let fare = "400 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Green Park
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Green Park")||(pickupaddress.value == "Green Park" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Vaibhav Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Vaibhav Residency")||(pickupaddress.value == "Vaibhav Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Baby Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Baby Residency")||(pickupaddress.value == "Baby Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Babu Naidu Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Babu Naidu Residency")||(pickupaddress.value == "Babu Naidu Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Banu Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Banu Residency")||(pickupaddress.value == "Banu Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Chella Krishna Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Chella Krishna Residency")||(pickupaddress.value == "Chella Krishna Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "700 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //SR Residency
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "SR Residency")||(pickupaddress.value == "SR Residency" && dropaddress.value == "VIT Main Gate")){
            let fare = "300 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Sri Vanadurga Peedam
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Vanadurga Peedam")||(pickupaddress.value == "Sri Vanadurga Peedam" && dropaddress.value == "VIT Main Gate")){
            let fare = "500 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Kannamangalam Reserve Forest
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Kannamangalam Reserve Forest")||(pickupaddress.value == "Kannamangalam Reserve Forest" && dropaddress.value == "VIT Main Gate")){
            let fare = "1200 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //Sri Selva Vinayagar Kovil
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Sri Selva Vinayagar Kovil")||(pickupaddress.value == "Sri Selva Vinayagar Kovil" && dropaddress.value == "VIT Main Gate")){
            let fare = "500 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
         //St John's Church
         if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "St John's Church")||(pickupaddress.value == "St John's Church" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Assumption Cathedral Church
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Assumption Cathedral Church")||(pickupaddress.value == "Assumption Cathedral Church" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        //Earth Plate
        if((pickupaddress.value == "VIT Main Gate" && dropaddress.value == "Earth Plate")||(pickupaddress.value == "Earth Plate" && dropaddress.value == "VIT Main Gate")){
            let fare = "350 Rs/-" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
        }
        
    
    
    
    
    
    
    
    
    
    
    
    
        //FOR NO FARE
        if(pickupaddress.value == "#" || dropaddress.value == "#"){
            let fare = "No Fare" 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
            document.getElementById("availabledriversbookingpage").style.display="none";
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
        if(pickupaddress.value == dropaddress.value){
            let fare = "No Fare"; 
            localStorage.setItem("fare" , fare);
            document.getElementById("fare").innerHTML = fare;
            document.getElementById("availabledriversbookingpage").style.display="none";
        }
        
        }
    }
}
// name and ID updation in the confirm ride page from booking page
function getdriversname1(){
    let name1=document.getElementById("name1").textContent;
    localStorage.setItem("name1",name1);
    let id = document.getElementById("id1").textContent;
    localStorage.setItem("id",id);
    document.getElementById("drivernamecnfpage").innerHTML = localStorage.getItem("name1");
    let phnno = document.getElementById("drv1phnno").innerText;
    localStorage.setItem("phnno",phnno);
}
function getdriversname2(){
    let name1=document.getElementById("name2").textContent;
    localStorage.setItem("name1",name1);
    let id = document.getElementById("id2").textContent;
    localStorage.setItem("id",id);
    document.getElementById("drivernamecnfpage").innerHTML = localStorage.getItem("name1");
    let phnno = document.getElementById("drv1phnno").innerText;
    localStorage.setItem("phnno",phnno);
}
function getdriversname3(){
    let name1=document.getElementById("name3").textContent;
    localStorage.setItem("name1",name1);
    let id = document.getElementById("id3").textContent;
    localStorage.setItem("id",id);
    document.getElementById("drivernamecnfpage").innerHTML = localStorage.getItem("name1");
    let phnno = document.getElementById("drv1phnno").innerText;
    localStorage.setItem("phnno",phnno);
}
function getdriversname4(){
    let name1=document.getElementById("name4").textContent;
    localStorage.setItem("name1",name1);
    let id = document.getElementById("id4").textContent;
    localStorage.setItem("id",id);
    document.getElementById("drivernamecnfpage").innerHTML = localStorage.getItem("name1");
    let phnno = document.getElementById("drv1phnno").innerText;
    localStorage.setItem("phnno",phnno);
}
function getdriversname5(){
    let name1=document.getElementById("name5").textContent;
    localStorage.setItem("name1",name1);
    let id = document.getElementById("id5").textContent;
    localStorage.setItem("id",id);
    document.getElementById("drivernamecnfpage").innerHTML = localStorage.getItem("name1");
    let phnno = document.getElementById("drv1phnno").innerText;
    localStorage.setItem("phnno",phnno);
}
//pickupdrop updation in cnfpage
function updatingpickupincnfpage(){
    let pickuplocationupdate = document.getElementById("pickuplocation");
    console.log(pickuplocationupdate.value);
    let droplocationupdate = document.getElementById("droplocation");
    console.log(droplocationupdate.value);
    localStorage.setItem("droplocationupdate",droplocationupdate);
    localStorage.setItem("pickuplocationupdate",pickuplocationupdate);
}
//mountain booking page
function redirecttomountainbooking(){
    location.assign("mountainbookingpage.html");
}
function redirecttotemplebookingpag(){
    location.assign("templebookingpage.html");
}
function redirecttorestaurantsbookingpag(){
    location.assign("restaurantbookingpage.html");
}
function redirecttohotelbookingpag(){
    location.assign("hotelbookingpage.html");
}
function redirecttohospitalbookingpag(){
    location.assign("hospitalbookingpage.html");
}
function redirecttotheatrebookingpag(){
    location.assign("theatrebookingpage.html");
}
// pop up
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
//complaint google form redirect
function gotocomplaintgoogleform(){
    location.assign("https://forms.gle/61ee7QEATkm8NjDH8")
}

