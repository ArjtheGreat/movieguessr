function createRadios() {
    const form = document.getElementById("d1");
    const li1 = document.createElement('li');
    const input1 = document.createElement('input');

    input1.setAttribute("type", "radio");
    input1.setAttribute("value", "1");
    input1.setAttribute("name", "choice");
    li1.append(input1);
    li1.append("United States");

    const li2 = document.createElement('li');
    const input2 = document.createElement('input');

    input2.setAttribute("type", "radio");
    input2.setAttribute("value", "2");
    input2.setAttribute("name", "choice");
    li2.append(input2);
    li2.append("United States");

    const li3 = document.createElement('li');
    const input3 = document.createElement('input');

    input3.setAttribute("type", "radio");
    input3.setAttribute("value", "3");
    input3.setAttribute("name", "choice");
    li3.append(input3);
    li3.append("United States");


    form.append(li1);  
    form.append(li2);  
    form.append(li3);  
  }

  createRadios();