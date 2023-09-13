
//service Number
let serviceNumber = '';
document.getElementById("serviceNumber").addEventListener("blur", function () {
    serviceNumber = document.getElementById("serviceNumber").value;
    return start();
});
//calc quota
document.getElementById("quotaCalc").addEventListener("blur", function () {
  let quotaCalc = document.getElementById("quotaCalc").value;
  const total=quotaCalc/1024/1024/1024 ;
  document.getElementById("gb").innerHTML=total;
  gb
});

//helper
function getsr(url) {
  var urlss=url;
  urlss=urlss.split("&subsNumber=");
  urlss=urlss[0];
  urlss=urlss+"&subsNumber=FBB"+serviceNumber+"&BMEWebToken=null"
  return urlss;
}

// OP//
document.getElementById("saveButtonOp").addEventListener("click", function () {
  const Ip = document.getElementById("Ip").value;
if (Ip != '' ) {

  console.log(Ip);


}else{
  console.log("error");
}
});

// store data//
document.getElementById("saveButton").addEventListener("click", function () {
  const desc = document.getElementById("desc").value;
  const url = document.getElementById("url").value;
  const title = document.getElementById("title").value;
  const caseName=localStorage.getItem("case");
if (desc != '' && url != ''  && title != '' ) {
fetch("https://vues-e705c-default-rtdb.firebaseio.com/"+caseName+".json", {
  method: 'POST', 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "url": url,
    "title": title,
    "desc": desc,
  })
}).then(response => {
  if (response.ok) {
    document.getElementById('successMessage').style.display = 'block';
    response.json()
  } 
  }).catch(error => {console.error('Error:', error);});
    // Close the modal
    const modal = document.getElementById("exampleModaldataDown");
    $(modal).modal("hide"); //
}else{
  console.log("error");
}
});

//get data//
function start() {
    // data_down
      fetch("https://vues-e705c-default-rtdb.firebaseio.com/data_down.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var data_down=[];
        for(const id in data){
          data_down.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("data_down");
        data_down.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(data_down);
      })
      .catch(error => {
        console.error('Error:', error);
      });

// data_and_voice_down
      fetch("https://vues-e705c-default-rtdb.firebaseio.com/data_and_voice_down.json", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
        })
        .then(
          response => response.json()
          ).then(data => {
          var data_and_voice_down=[];
          for(const id in data){
            data_and_voice_down.push({
                  id: id,
                  title: data[id].title,
                  url: data[id].url,
                  desc:data[id].desc
              });
          const dropdownMenu = document.getElementById("data_and_voice_down");
          data_and_voice_down.forEach(item => {
            const dropdownItem = document.createElement("a");
            dropdownItem.classList.add("dropdown-item");
            dropdownItem.href = getsr(item.url);
            dropdownItem.target = "_blank";
            dropdownItem.textContent = item.title;
            dropdownItem.title = item.desc;
            dropdownMenu.appendChild(dropdownItem);
          });
      
      
          }
          console.log(data_and_voice_down);
        })
        .catch(error => {
          console.error('Error:', error);
        });




          // copy Here loop srs
          // physical_instability
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/physical_instability.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var physical_instability=[];
        for(const id in data){
          physical_instability.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("physical_instability");
        physical_instability.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(physical_instability);
      })
      .catch(error => {
        console.error('Error:', error);
      });





        // blq
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/blq.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var blq=[];
        for(const id in data){
          blq.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("blq");
        blq.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(blq);
      })
      .catch(error => {
        console.error('Error:', error);
      });




        // wrong_card_and_port
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/wrong_card_and_port.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var wrong_card_and_port=[];
        for(const id in data){
          wrong_card_and_port.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("wrong_card_and_port");
        wrong_card_and_port.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(wrong_card_and_port);
      })
      .catch(error => {
        console.error('Error:', error);
      });



        // logical_instability
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/logical_instability.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var logical_instability=[];
        for(const id in data){
          logical_instability.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("logical_instability");
        logical_instability.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(logical_instability);
      })
      .catch(error => {
        console.error('Error:', error);
      });



        // unable_to_obtain
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/unable_to_obtain.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var unable_to_obtain=[];
        for(const id in data){
          unable_to_obtain.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("unable_to_obtain");
        unable_to_obtain.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(unable_to_obtain);
      })
      .catch(error => {
        console.error('Error:', error);
      });



        // slowness
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/slowness.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var slowness=[];
        for(const id in data){
          slowness.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("slowness");
        slowness.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(slowness);
      })
      .catch(error => {
        console.error('Error:', error);
      });


        // outage
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/outage.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var outage=[];
        for(const id in data){
          outage.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("outage");
        outage.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(outage);
      })
      .catch(error => {
        console.error('Error:', error);
      });


        // wirless
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/wirless.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var wirless=[];
        for(const id in data){
          wirless.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("wirless");
        wirless.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(wirless);
      })
      .catch(error => {
        console.error('Error:', error);
      });



              // data_and_voice_down_ftth
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/data_and_voice_down_ftth.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var data_and_voice_down_ftth=[];
        for(const id in data){
          data_and_voice_down_ftth.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("data_and_voice_down_ftth");
        data_and_voice_down_ftth.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(data_and_voice_down_ftth);
      })
      .catch(error => {
        console.error('Error:', error);
      });




              // browsing_ftth
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/browsing_ftth.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var browsing_ftth=[];
        for(const id in data){
          browsing_ftth.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("browsing_ftth");
        browsing_ftth.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(browsing_ftth);
      })
      .catch(error => {
        console.error('Error:', error);
      });



              // wrong_card_and_port_ftth
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/wrong_card_and_port_ftth.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var wrong_card_and_port_ftth=[];
        for(const id in data){
          wrong_card_and_port_ftth.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("wrong_card_and_port_ftth");
        wrong_card_and_port_ftth.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(wrong_card_and_port_ftth);
      })
      .catch(error => {
        console.error('Error:', error);
      });



              // unable_to_obtain_ftth
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/unable_to_obtain_ftth.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var unable_to_obtain_ftth=[];
        for(const id in data){
          unable_to_obtain_ftth.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("unable_to_obtain_ftth");
        unable_to_obtain_ftth.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(unable_to_obtain_ftth);
      })
      .catch(error => {
        console.error('Error:', error);
      });



              // slowness_ftth
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/slowness_ftth.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var slowness_ftth=[];
        for(const id in data){
          slowness_ftth.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("slowness_ftth");
        slowness_ftth.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(slowness_ftth);
      })
      .catch(error => {
        console.error('Error:', error);
      });


                    // idel
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/idel.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var idel=[];
        for(const id in data){
          idel.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("idel");
        idel.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(idel);
      })
      .catch(error => {
        console.error('Error:', error);
      });


                    // concession
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/concession.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var concession=[];
        for(const id in data){
          concession.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("concession");
        concession.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(concession);
      })
      .catch(error => {
        console.error('Error:', error);
      });


                    // complain
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/complain.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var complain=[];
        for(const id in data){
          complain.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("complain");
        complain.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(complain);
      })
      .catch(error => {
        console.error('Error:', error);
      });


                    // Cancellation
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/Cancellation.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var Cancellation=[];
        for(const id in data){
          Cancellation.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("Cancellation");
        Cancellation.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(Cancellation);
      })
      .catch(error => {
        console.error('Error:', error);
      });


                    // quota
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/quota.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var quota=[];
        for(const id in data){
          quota.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("quota");
        quota.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(quota);
      })
      .catch(error => {
        console.error('Error:', error);
      });

                    // other
    fetch("https://vues-e705c-default-rtdb.firebaseio.com/other.json", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then(
        response => response.json()
        ).then(data => {
        var other=[];
        for(const id in data){
          other.push({
                id: id,
                title: data[id].title,
                url: data[id].url,
                desc:data[id].desc
            });
        const dropdownMenu = document.getElementById("other");
        other.forEach(item => {
          const dropdownItem = document.createElement("a");
          dropdownItem.classList.add("dropdown-item");
          dropdownItem.href = getsr(item.url);
          dropdownItem.target = "_blank";
          dropdownItem.textContent = item.title;
          dropdownItem.title = item.desc;
          dropdownMenu.appendChild(dropdownItem);
        });
    
    
        }
        console.log(other);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}








