console.log("script connected");

var listItemEls = document.querySelectorAll("li");
for (var i=0; i < listItemEls.length; i++) {
    listItemEls[i].style.color = "blue";}
// Change the text of the `<h2>` element in the first widget from "Statistics" to "Reports."
var firstWidgetH2 = document.querySelector(".widget h2");
firstWidgetH2.textContent = "Reports";

// Change the text in the `<p>` tag in the third widget to "Optimise performance metrics here."
var thirdWidgetP = document.querySelectorAll(".widget p")[2];
thirdWidgetP.textContent = "Optimise performance metrics here.";