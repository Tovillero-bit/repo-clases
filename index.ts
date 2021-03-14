// crear las clases Edificio, Piso y Departamento aquí
class Edificio {
    pisos: Piso[];
    constructor(pisos: Piso[]) {
        this.pisos = pisos;
    }

    addDepartamento(numeroDePiso: string, dpto: Departamento) {
        const pisoEncontrado = this.pisos.find(p => p.numberPiso == numeroDePiso);
        return pisoEncontrado.pushDepartamento(dpto);
    }

    getPisoByName(name: string){
        const pisoEncontrado = this.pisos.find(p => p.numberPiso == name);
        return pisoEncontrado;
    }

    addDepartamentoToPiso(nombreDePiso:string, depto:Departamento){
        const pisoEncontrado = this.pisos.find(p => p.numberPiso == nombreDePiso);
        return pisoEncontrado.pushDepartamento(depto);
    }

    getDepartamentosByPiso(numeroDePiso:string): Departamento[]{
        const pisoEncontrado = this.pisos.find(p => p.numberPiso == numeroDePiso);
        return pisoEncontrado.getDepartamentos();
    }
}

class Piso {
    numberPiso: string;
    dpto: Departamento[] = []; // De esta forma empiezo dpto como un array vacio.
    constructor(numberPiso: string) {
        this.numberPiso = numberPiso;
    }

    pushDepartamento(depto: Departamento) {
        this.dpto.push(depto);
    }

    getDepartamentos() {
        return this.dpto;
    }
}

class Departamento {
    dpto: string
    constructor(dpto: string) {
        this.dpto = dpto;
    }

    getName(){
        return this.dpto;
    }
}

// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

    if (
        Array.isArray(deptosEmpty) &&
        deptosEmpty.length == 0 &&
        deptos.length == 3 &&
        deptos[2].getName() == "depto tres"
    ) {
        console.log("testClaseBandaApartment passed");
    } else {
        throw "testClaseBandaApartment not passed";
    }
}

function main() {
    testClaseEdificio();
    const dpto1 = new Departamento("Dpto1");
    const dpto2 = new Departamento("Dpto2");
    const dpto3 = new Departamento("Dpto3");
    const dpto4 = new Departamento("Dpto4");
    const dpto5 = new Departamento("Dpto5");
    const dpto6 = new Departamento("Dpto6");
    const piso1 = new Piso("primer piso");
    const piso2 = new Piso("segundo piso");
    const piso3 = new Piso("tercer piso");
    const mafalda = new Edificio([piso1,piso2,piso3]);
    mafalda.addDepartamentoToPiso("primer piso", dpto1);
    mafalda.addDepartamentoToPiso("primer piso", dpto2);
    mafalda.addDepartamentoToPiso("segundo piso", dpto3);
    mafalda.addDepartamentoToPiso("segundo piso", dpto4);
    mafalda.addDepartamentoToPiso("tercer piso", dpto5);
    mafalda.addDepartamentoToPiso("tercer piso", dpto6);
    console.log(mafalda.getPisoByName("primer piso"));
    console.log(mafalda.getDepartamentosByPiso("segundo piso"));
    console.log("Trying pull");

}
main();
