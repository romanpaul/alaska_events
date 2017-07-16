const update = document.getElementById('update')

update.addEventListener('click', function () {
    fetch('events', {
        method: 'put',
        body: FormData
    })
})