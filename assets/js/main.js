import { subscribeToHellfireClube } from './firebase/hellfire-clube.js'

(function main() {
    const txtName = document.getElementById('txtName')
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')
    const btnSubscribe = document.getElementById('btnsubscribe')

    document.getElementById('btnSubscribe').addEventListener('click', async () => {
        const subscribe = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        const subscribeId = await subscribeToHellfireClube(subscribe)
        alert(`Inscrição ${subscribeId} adicionada com sucesso!`)

        txtName.value = ''
        txtEmail.value = ''
        txtLevel.value = ''
        txtCharacter.value = ''
    })
})()