document.getElementById('btn').addEventListener('click',()=>[
    fetch('http://localhost:3000/testLoad')
    .then(res => res.json())
    .then(data => {
        console.log(data.datas)
    })
])