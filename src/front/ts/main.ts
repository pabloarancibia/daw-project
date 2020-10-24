interface DeviceInt {
    id: number;
    name: string;
    description: string;
    state: number;
    type: number;
}


class Main implements EventListenerObject, GETResponseListener, POSTResponseListener {
    myf: MyFramework;
    view: ViewMainPage;
    counter: number = 0;

    main(): void {

        this.myf = new MyFramework();
        this.view = new ViewMainPage(this.myf);
        this.myf.configEventLister("click", "agregar", this);
        this.myf.requestGET("http://localhost:8000/dispositivos", this);

    }

    // Escucho eventos
    handleEvent(evt: Event): void {

        // tomo el elemento que produjo el evento
        let b: HTMLElement = this.myf.getElementByEvent(evt);

        // si id comienza con eliminar, ejecuto el post
        if (b.id.slice(0, 8) == 'eliminar') {

            let id: string = b.id.slice(9);
            let data = { "id": id };
            console.log(data);
            this.myf.requestPOST('http://localhost:8000/dispositivos/eliminar/', data, this);
            location.reload();
        }
        // si id es agregar envio post
        if (b.id == 'agregar') {

            let nombre = (<HTMLInputElement>this.myf.getElementById('nombre')).value;
            let descripcion = (<HTMLInputElement>this.myf.getElementById('descripcion')).value;
            let lampara = (<HTMLInputElement>this.myf.getElementById('lampara'));
            let tipo = 0;
            if (lampara.checked) {
                tipo = 0;
            } else {
                tipo = 1;
            }
            let data = { "nombre": nombre, "descripcion": descripcion, 'tipo': tipo };
            this.myf.requestPOST("http://localhost:8000/dispositivos/agregar/", data, this);
            location.reload();

        }

        // si id comienza con dev es cambio estado
        if (b.id.slice(0, 3) == 'dev') {
            let state: boolean = this.view.getSwitchStateById(b.id);
            let id: string = b.id.slice(4);
            let data = { "id": id, "state": state };
            this.myf.requestPOST("http://localhost:8000/dispositivos/", data, this);
        }


    }

    // interface escucha GET
    handleGETResponse(status: number, response: string): void {
        console.log("Respuesta del servidor: " + response);

        // carga en data la lista de dispositivos
        let data: Array<DeviceInt> = JSON.parse(response);

        console.log(data);

        // llama a la funcion showDevices con la lista como parámetro
        this.view.showDevices(data);

        // 'escucha' a todos los dispositivos para cuando se produzca un evento click 
        for (let d of data) {
            let b: HTMLElement = this.myf.getElementById(`dev_${d.id}`);
            b.addEventListener("click", this);

            let e: HTMLElement = this.myf.getElementById(`eliminar_${d.id}`);
            e.addEventListener("click", this);
        }
    }

    // interface escucha POST
    handlePOSTResponse(status: number, response: string): void {
        console.log(status);
        console.log(response);
    }
}

window.onload = () => {
    let m: Main = new Main();
    m.main();
}


//=======[ Settings, Imports & Data ]==========================================

let user = "TypesScript Users!";

//=======[ Main module code ]==================================================


//=======[ End of file ]=======================================================