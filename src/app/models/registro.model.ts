
export class Registro {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;


    constructor(format: string, text:string) {
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.typeCode();
    }

    private typeCode() {
        const inicioText = this.text.substr(0,4);
        console.log('Tipo', inicioText);
        switch(inicioText) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
            break;   

            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
            break;

            default:
                this.type = 'No configurado';
                this.icon = 'create';
        }
    }

}