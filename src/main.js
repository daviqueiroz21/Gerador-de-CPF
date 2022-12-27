import './assets/css/style.css';

import GeraCPF from "../src/modules/GeraCPF";

(()=>{
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPF(); 
})();