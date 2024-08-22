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

// function showInputRto()
// {
//     var localStdRtoRadio = document.getElementById("rtolocalStd");
//     var localExpRtoRadio = document.getElementById("rtolocalExp");
//     var zonalStdRtoRadio = document.getElementById("rtozonalStd");
//     var zonalExpRtoRadio = document.getElementById("rtozonalExp");
//     var metroStdRtoRadio = document.getElementById("rtometroStd");
//     var metroExpRtoRadio = document.getElementById("rtometroExp");
//     var roiStdRtoRadio = document.getElementById("rtoroiStd");
//     var roiExpRtoRadio = document.getElementById("rtoroiExp");
//     var nejkStdRtoRadio = document.getElementById("rtonejkStd");
//     var nejkExpRtoRadio = document.getElementById("rtonejkExp");
    
//     if(localStdRtoRadio.isChecked()||localExpRtoRadio.isChecked())
//     {
//         clearContainer("rto-container");
//         clearContainer("rto-exp-container");
//     }

//     if(zonalStdRtoRadio.isChecked()||zonalExpRtoRadio.isChecked())
//     {
//         clearContainer("rto-zonal-container");
//         clearContainer("rto-zonal-exp-container");
//     }

//     if(metroStdRtoRadio.isChecked()||metroExpRtoRadio.isChecked())
//     {
//         clearContainer("rto-metro-container");
//         clearContainer("rto-metro-exp-container");
//     }

//     if(roiStdRtoRadio.isChecked()||roiExpRtoRadio.isChecked())
//     {
//         clearContainer("rto-roi-container");
//         clearContainer("rto-roi-exp-container");
//     }

//     if(nejkStdRtoRadio.isChecked()||nejkExpRtoRadio.isChecked())
//     {
//         clearContainer("rto-nejk-container");
//         clearContainer("rto-nejk-exp-container");
//     }

//     var localStdRadio = document.getElementById("rtolocalStd");
//     var localExpRadio = document.getElementById("rtolocalExp");
//     if (localStdRadio.checked) {
//         createInput("LocalStd", "container", "Enter Local Standard");
//     } else if (localExpRadio.checked) {
//         createInput("LocalExp", "exp-container", "Enter Local Express");
//     }
  
  
//     var zonalStdRadio = document.getElementById("zonalStd");
//     var zonalExpRadio = document.getElementById("zonalExp");
//     if (zonalStdRadio.checked) {
//         createInput("ZonalStd", "zonal-container", "Enter Zonal Standard");
//     } else if (zonalExpRadio.checked) {
//         createInput("ZonalExp", "zonal-exp-container", "Enter Zonal Express");
//     }
  
   
//     var metroStdRadio = document.getElementById("metroStd");
//     var metroExpRadio = document.getElementById("metroExp");
//     if (metroStdRadio.checked && !metroExpRadio.checked) {
//         createInput("MetroStd", "metro-container", "Enter Metro Standard");
//     } else if (metroStdRadio.checked && metroExpRadio.checked) {
//         createInput("MetroStd", "metro-container", "Enter Metro Standard");
//         createInput("MetroExp", "metro-exp-container", "Enter Metro Express");
//     } else if (metroExpRadio.checked && !metroStdRadio.checked) {
//         createInput("MetroExp", "metro-exp-container", "Enter Metro Express");
//     }
  
   
//     var roiStdRadio = document.getElementById("roiStd");
//     var roiExpRadio = document.getElementById("roiExp");
//     if (roiStdRadio.checked && !roiExpRadio.checked) {
//         createInput("ROIStd", "roi-container", "Enter ROI Standard");
//     } else if (roiStdRadio.checked && roiExpRadio.checked) {
//         createInput("ROIStd", "roi-container", "Enter ROI Standard");
//         createInput("ROIExp", "roi-exp-container", "Enter ROI Express");
//     } else if (roiExpRadio.checked && !roiStdRadio.checked) {
//         createInput("ROIExp", "roi-exp-container", "Enter ROI Express");
//     }
  
   
//     var nejkStdRadio = document.getElementById("nejkStd");
//     var nejkExpRadio = document.getElementById("nejkExp");
//     if (nejkStdRadio.checked && !nejkExpRadio.checked) {
//         createInput("NEJKStd", "nejk-container", "Enter NE J&K Standard");
//     } else if (nejkStdRadio.checked && nejkExpRadio.checked) {
//         createInput("NEJKStd", "nejk-container", "Enter NE J&K Standard");
//         createInput("NEJKExp", "nejk-exp-container", "Enter NE J&K Express");
//     } else if (nejkExpRadio.checked && !nejkStdRadio.checked) {
//         createInput("NEJKExp", "nejk-exp-container", "Enter NE J&K Express");
//     }


// }


function showInputRto() {
    var localStdRadio = document.getElementById("rtolocalStd");
    var localExpRadio = document.getElementById("rtolocalExp");
    var zonalStdRadio = document.getElementById("rtozonalStd");
    var zonalExpRadio = document.getElementById("rtozonalExp");
    var metroStdRadio = document.getElementById("rtometroStd");
    var metroExpRadio = document.getElementById("rtometroExp");
    var roiStdRadio = document.getElementById("rtoroiStd");
    var roiExpRadio = document.getElementById("rtoroiExp");
    var nejkStdRadio = document.getElementById("rtonejkStd");
    var nejkExpRadio = document.getElementById("rtonejkExp");
    
    // Clear containers based on radio button selections
    function clearContainers() {
        clearContainer("rto-container");
        clearContainer("rto-exp-container");
        clearContainer("rto-zonal-container");
        clearContainer("rto-zonal-exp-container");
        clearContainer("rto-metro-container");
        clearContainer("rto-metro-exp-container");
        clearContainer("rto-roi-container");
        clearContainer("rto-roi-exp-container");
        clearContainer("rto-nejk-container");
        clearContainer("rto-nejk-exp-container");
    }
    
    // Clear containers based on radio button selections
    function createInputs() {
        if (localStdRadio.checked) {
            createInput("LocalStdRto", "rto-container", "Enter Local Standard");
        } else if (localExpRadio.checked) {
            createInput("LocalExpRto", "rto-exp-container", "Enter Local Express");
        }

        if (zonalStdRadio.checked) {
            createInput("ZonalStdRto", "rto-zonal-container", "Enter Zonal Standard");
        } else if (zonalExpRadio.checked) {
            createInput("ZonalExpRto", "rto-zonal-exp-container", "Enter Zonal Express");
        }

        if (metroStdRadio.checked && !metroExpRadio.checked) {
            createInput("MetroStdRto", "rto-metro-container", "Enter Metro Standard");
        } else if (metroStdRadio.checked && metroExpRadio.checked) {
            createInput("MetroStdRto", "rto-metro-container", "Enter Metro Standard");
            createInput("MetroExpRto", "rto-metro-exp-container", "Enter Metro Express");
        } else if (metroExpRadio.checked && !metroStdRadio.checked) {
            createInput("MetroExpRto", "rto-metro-exp-container", "Enter Metro Express");
        }

        if (roiStdRadio.checked && !roiExpRadio.checked) {
            createInput("ROIStdRto", "rto-roi-container", "Enter ROI Standard");
        } else if (roiStdRadio.checked && roiExpRadio.checked) {
            createInput("ROIStdRto", "rto-roi-container", "Enter ROI Standard");
            createInput("ROIExpRto", "rto-roi-exp-container", "Enter ROI Express");
        } else if (roiExpRadio.checked && !roiStdRadio.checked) {
            createInput("ROIExpRto", "rto-roi-exp-container", "Enter ROI Express");
        }

        if (nejkStdRadio.checked && !nejkExpRadio.checked) {
            createInput("NEJKStdRto", "rto-nejk-container", "Enter NE J&K Standard");
        } else if (nejkStdRadio.checked && nejkExpRadio.checked) {
            createInput("NEJKStdRto", "rto-nejk-container", "Enter NE J&K Standard");
            createInput("NEJKExpRto", "rto-nejk-exp-container", "Enter NE J&K Express");
        } else if (nejkExpRadio.checked && !nejkStdRadio.checked) {
            createInput("NEJKExpRto", "rto-nejk-exp-container", "Enter NE J&K Express");
        }
    }

    // Clear containers first
    clearContainers();
    
    // Create inputs based on radio button selections
    createInputs();
}

function fetchData() {
    var form = document.getElementById('fetchDataForm');
    var url = form.getAttribute('action') + '?' + serializeForm(form);

    console.log("Fetching data from:", url);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            var data = JSON.parse(xhr.responseText);
            displayData(data);
        } else {
            console.error('Error fetching data:', xhr);
            displayError('Error fetching data. Please try again later.');
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
        displayError('Request failed. Please check your network connection.');
    };

    xhr.send();
}

function serializeForm(form) {
    var formData = new FormData(form);
    var serialized = [];
    for (var [key, value] of formData.entries()) {
        serialized.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
    return serialized.join('&');
}

function displayData(data) {
    var displayDiv = document.getElementById('displayData');
    if (data && data.result) {
        displayDiv.textContent = JSON.stringify(data.result, null, 2);
    } else {
        displayDiv.textContent = 'No data available.';
    }
}

function displayError(message) {
    var displayDiv = document.getElementById('displayData');
    displayDiv.textContent = message;
}
