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
        $success.text(data.message)
      })
      .fail((res, status) => {
        console.log(res)
        $error.text(status)
      })
    })
  }
})
