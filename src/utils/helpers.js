import axios from 'axios'
import { saveAs } from 'file-saver'

const SERVICE_URL = `${process.env.REACT_APP_SERVER_URL}/PuntoventaWCF.svc`

export async function downloadWindowsApp() {
  try {
    await downloadFile(SERVICE_URL + '/descargaractualizacion')
  } catch (e) {
    console.error(e)
    throw new Error('Ocurrió un error en la descarga, intente más tarde. Si el problema persiste contacte con soporte técnico.');
  }
}

function downloadFile (endpointURL) {
  return new Promise((resolve, reject) => {
    axios.get(endpointURL, {responseType: 'blob'})
      .then(async (response) => {
        const blob = new Blob([response.data], {type: 'application/octet-stream'})
        saveAs(blob, 'puntoventaJLC.msi')
        resolve(true)
      })
      .catch(error => {
        reject(error.message)
      })
  })
}
