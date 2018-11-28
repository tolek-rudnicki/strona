var przycisk = document.getElementById("przycisk");

przycisk.onclick = function () {
    var imie = document.getElementById("imie");
    alert("hej " + imie.value);
    alert(imie.value +" jest głupi");

    var skasuj = confirm("Czy chcesz skasować osobę o imieniu " + imie.value + "?");

    if (skasuj == true) {
        // jak klikniesz ok
    } else {
        // jak klikniesz cancel
        //jakim sposobem chcesz ją kilić?
    }
}