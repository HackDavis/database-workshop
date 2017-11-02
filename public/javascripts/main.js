$(document).ready(() => {
  const $form = $('#query-form')

  const $error = $('#query-error')
  const $success = $('#query-success')

  if ($form) {
    $form.on('submit', (e) => {
      e.preventDefault()
      // Get the input from #query-input
      const $query = $('#query-input')
      console.log($query)
      const query = $query.val()

      console.log(query)

      const req = $.ajax({
        url: '/query',
        method: 'POST',
        data: {
          query: query,
        }
      })
      // Response came back
      .done((data, status) => {
        $error.text("");
        var table = JSON.parse(data.message);
        var columns = Object.keys(table[0]).length;
        var tableElement = document.createElement("table");
        var header = document.createElement("tr");
        for(let key in table[0]){
          let column = document.createElement("td");
          column.innerHTML = key;
          $(header).append(column);
        }
        $(tableElement).append(header);
        for(let row of table){
          let rowElement = document.createElement("tr");          
          for(let key in row){
            let column = document.createElement("td");
            column.innerHTML = row[key];
            $(rowElement).append(column);
          }
          $(tableElement).append(rowElement);
        }
        $success.append(tableElement);
      })
      .fail((res, status) => {
        console.log(res);
        $error.text(res.responseJSON.error)
        $success.html("");
      })
    })
  }
})
