function showInput() {
  
  var localStdRadio = document.getElementById("localStd");
  var localExpRadio = document.getElementById("localExp");
  var zonalStdRadio = document.getElementById("zonalStd");
  var zonalExpRadio = document.getElementById("zonalExp");
  var metroStdRadio = document.getElementById("metroStd");
  var metroExpRadio = document.getElementById("metroExp");
  var roiStdRadio = document.getElementById("roiStd");
  var roiExpRadio = document.getElementById("roiExp");
  var nejkStdRadio = document.getElementById("nejkStd");
  var nejkExpRadio = document.getElementById("nejkExp");

  if (localStdRadio.checked || localExpRadio.checked) {
    clearContainer("container");
    clearContainer("exp-container");
}

if (zonalStdRadio.checked || zonalExpRadio.checked) {
    clearContainer("zonal-container");
    clearContainer("zonal-exp-container");
}

if (metroStdRadio.checked || metroExpRadio.checked) {
    clearContainer("metro-container");
    clearContainer("metro-exp-container");
}

if (roiStdRadio.checked || roiExpRadio.checked) {
    clearContainer("roi-container");
    clearContainer("roi-exp-container");
}

if (nejkStdRadio.checked || nejkExpRadio.checked) {
    clearContainer("nejk-container");
    clearContainer("nejk-exp-container");
}


 
  var localStdRadio = document.getElementById("localStd");
  var localExpRadio = document.getElementById("localExp");
  if (localStdRadio.checked) {
      createInput("LocalStd", "container", "Enter Local Standard");
  } else if (localExpRadio.checked) {
      createInput("LocalExp", "exp-container", "Enter Local Express");
  }


  var zonalStdRadio = document.getElementById("zonalStd");
  var zonalExpRadio = document.getElementById("zonalExp");
  if (zonalStdRadio.checked) {
      createInput("ZonalStd", "zonal-container", "Enter Zonal Standard");
  } else if (zonalExpRadio.checked) {
      createInput("ZonalExp", "zonal-exp-container", "Enter Zonal Express");
  }

 
  var metroStdRadio = document.getElementById("metroStd");
  var metroExpRadio = document.getElementById("metroExp");
  if (metroStdRadio.checked && !metroExpRadio.checked) {
      createInput("MetroStd", "metro-container", "Enter Metro Standard");
  } else if (metroStdRadio.checked && metroExpRadio.checked) {
      createInput("MetroStd", "metro-container", "Enter Metro Standard");
      createInput("MetroExp", "metro-exp-container", "Enter Metro Express");
  } else if (metroExpRadio.checked && !metroStdRadio.checked) {
      createInput("MetroExp", "metro-exp-container", "Enter Metro Express");
  }

 
  var roiStdRadio = document.getElementById("roiStd");
  var roiExpRadio = document.getElementById("roiExp");
  if (roiStdRadio.checked && !roiExpRadio.checked) {
      createInput("ROIStd", "roi-container", "Enter ROI Standard");
  } else if (roiStdRadio.checked && roiExpRadio.checked) {
      createInput("ROIStd", "roi-container", "Enter ROI Standard");
      createInput("ROIExp", "roi-exp-container", "Enter ROI Express");
  } else if (roiExpRadio.checked && !roiStdRadio.checked) {
      createInput("ROIExp", "roi-exp-container", "Enter ROI Express");
  }

 
  var nejkStdRadio = document.getElementById("nejkStd");
  var nejkExpRadio = document.getElementById("nejkExp");
  if (nejkStdRadio.checked && !nejkExpRadio.checked) {
      createInput("NEJKStd", "nejk-container", "Enter NE J&K Standard");
  } else if (nejkStdRadio.checked && nejkExpRadio.checked) {
      createInput("NEJKStd", "nejk-container", "Enter NE J&K Standard");
      createInput("NEJKExp", "nejk-exp-container", "Enter NE J&K Express");
  } else if (nejkExpRadio.checked && !nejkStdRadio.checked) {
      createInput("NEJKExp", "nejk-exp-container", "Enter NE J&K Express");
  }
}



function createInput(name, containerId,placeholderText) {
  var inputField = document.createElement("input");
  inputField.type = "text";
  inputField.name = name;
  inputField.placeholder = placeholderText;
  document.getElementById(containerId).appendChild(inputField);
}


function clearContainer(containerId) {
  document.getElementById(containerId).innerHTML = "";
}