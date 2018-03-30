//-----------------------------------------UNTUK BUAT TAB
//Buat tab informasi perusahaan, tanggung jawab, kebutuhan
function bukaTab(evt, NamaTab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(NamaTab).style.display = "block";
    evt.currentTarget.className += " active";
}

// buka default dari tab pertama kali
document.getElementById("defaultOpen").click();

//------------------------UNTUK LI TANGGUNG JAWAB
// buat tombol close untuk setiap elemen li nya
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// untuk close button langsung di hide jika di tekan
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// buat li baru saat tekan tombol tambah
function newElement() {
  var li = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;

  li.setAttribute("class","kelas");
  li.setAttribute("data-value",inputValue);

  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  if (inputValue === '') {
    alert("Sebelum ditambah, diisi dulu ya kolomnya");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//------------------------UNTUK LI KEBUTUHAN
// buat tombol close untuk setiap elemen li nya
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// untuk close button langsung di hide jika di tekan
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// buat li baru saat tekan tombol tambah
function newKebutuhan() {
  var li = document.createElement("li");

  var inputValue = document.getElementById("input_kebutuhan").value;

  li.setAttribute("class","kelas1");
  li.setAttribute("data-value2",inputValue);

  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  if (inputValue === '') {
    alert("Sebelum ditambah, diisi dulu ya kolomnya");
  } else {
    document.getElementById("myKebutuhan").appendChild(li);
  }
  document.getElementById("input_kebutuhan").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//-----------------UNTUK TAMPILKAN SHOW MODAL
// untuk mengambil modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");

// untuk menutup modal
var span = document.getElementsByClassName("closemodal")[0];

// untuk menampilkan modal
btn.onclick = function() {
    modal.style.display = "block";
}

// ketika modal di klik lalu dihide
span.onclick = function() {
    modal.style.display = "none";
}