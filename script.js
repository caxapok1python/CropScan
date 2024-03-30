function loadHTML(pageName) {
    // Загрузка другого HTML файла
    fetch(pageName)
        .then(response => response.text())
        .then(html => {
            // Замена текущего содержимого страницы загруженным HTML
            document.open();
            document.write(html);
            document.close();
        })
        .catch(error => console.error('Ошибка загрузки HTML:', error));
}

function setClicked(button) {
        var buttons = document.querySelectorAll(".ratio_button");
        buttons.forEach(function(btn) {
          btn.classList.remove("clicked");
        });

        button.classList.add("clicked");
      }
