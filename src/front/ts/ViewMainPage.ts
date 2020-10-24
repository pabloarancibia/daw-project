class ViewMainPage {
    private myf: MyFramework;

    constructor(myf: MyFramework) {
        this.myf = myf;
    }

    showDevices(list: DeviceInt[]): void {
        let e: HTMLElement = this.myf.getElementById("devicesList");

        for (let dev of list) {
            let image = "lightbulb.png";
            if (dev.type == 1) {
                image = "window.png"
            }

            let checked = "";
            if (dev.state == 1) {
                checked = "checked"
            }

            e.innerHTML += `<li class="collection-item avatar">
                                <img src="static/images/${image}" alt="" class="circle">
                                <span class="title">${dev.name}</span>
                                <p>${dev.description}</p>
                                
                                <div class=" row secondary-content">

                                <div class="col s7">
                                <a href="#!" >
                                    <div class="switch">
                                        <label>
                                        Off
                                        <input id="dev_${dev.id}" type="checkbox" ${checked}>
                                        <span class="lever"></span>
                                        On
                                        </label>
                                    </div>
                                </a>
                                </div>

                                <div class="col s5">
                                <a id="eliminar_${dev.id}" 
                                class="waves-effect waves-light btn-small red">
                                Eliminar
                                </a>
                                </div>

                                </div>
 
                            </li>
                            
                            
                            `;
        }
    }

    getSwitchStateById(id: string): boolean {
        let e: HTMLElement = this.myf.getElementById(id);
        let i: HTMLInputElement = <HTMLInputElement>e;

        return i.checked;
    }
}