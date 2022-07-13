class Usuario {
    contructor(nombre, apellido, libros=[], mascotas=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return `${this.mascotas.length}`;
    }

    addBook(libro) {
        this.libros.push(libro);
    }

    getBookNames() {
        return this.libros.map(libro => `${libro.nombre}`);
    }
}

const usuario = new Usuario("Nombre", "Apellido");

usuario.addBook([{libro: "Libro", autor: "Autor"}]);

console.log(usuario.getBookNames());