var wrapper = document.querySelector('.typeAhead'),
      input = wrapper.querySelector('input'),
      queryEl = wrapper.querySelector('.query'),
      hintEl = wrapper.querySelector('.hint'),
      list,
      predefinedValues;
  
      predefinedValues = [
        "Wojtek Połeć",
        "Albert Mazur",
        "Mateusz Kłoda",
        "Kamil Hockuba",
        "Marek Kwaśny",
        "Mateusz Szostek",
        "Łukasz Filip",
        "Adrian Jamróg",
        "Sebastian Szeremeta",
        "Sylwia Marek",
        "Kuba Leniar",
        "Mateusz Rachwalski",
        "Leszek Niedbała",
        "Janusz Pelczarski",
        "Konrad Cynar",
        "Szymon Rybka",
        "Szymon Trojanowski",
        "Adrian Pieprzak"
      ];
  
  var createList = function (values) {
    if (list) {
      wrapper.removeChild(list);
    }
    
    var ul = document.createElement('ul');
    
    values.forEach(function (value) {
      var li = document.createElement('li');
      li.textContent = value;
      ul.appendChild(li);
    });
    
    var initialValue = input.value;
    
    var onClick = function (ev) { 
      updateInput(ev.target);
      removeListeners();
      wrapper.removeChild(ul);
      list = null;
    };
    
    var onMouseOver = function (ev) {
      updateInput(ev.target);
    };
    
    var onMouseLeave = function (ev) {
      input.value = initialValue;
    };
    
    var removeListeners = function () {
      ul.removeEventListener('click', onClick);
      ul.removeEventListener('mouseover', onMouseOver);
      ul.removeEventListener('mouseleave', onMouseLeave);
    };
    
    var updateInput = function (target) {
      if (target.matches('li'))
        input.value = target.textContent;
    };
    
    ul.addEventListener('click', onClick);
    ul.addEventListener('mouseover', onMouseOver);
    ul.addEventListener('mouseleave', onMouseLeave);
    
    return ul;
  };
  
  var manageList = function (string) {
    var showedValues = predefinedValues.filter(function (value) {
      return value.indexOf(string) == 0;
    });
    
    if (showedValues.length) {
      list = createList(showedValues);
      wrapper.appendChild(list);
    } else if (list != null) {
      wrapper.removeChild(list);
      list = null;
    }
  };
  
  var onType = function () {
    manageList(this.value);
  };
  
  input.addEventListener('keyup', onType);
  function wypisywanie(){
    var dane=document.getElementById("poleTekstowe").value;
    var dl=dane.length;
      if(dl>0){
        document.getElementById("wypisz").innerHTML = document.getElementById("poleTekstowe").value;
      }else{
        document.getElementById("wypisz").innerHTML = "Podaj osobę!!!"
      }
  }