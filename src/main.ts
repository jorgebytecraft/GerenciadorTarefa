import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 

import { TaskController} from './controller/TaskController'

document.addEventListener('DOMContentLoaded', () => {
    const app = new TaskController();
    console.log(app)
})

