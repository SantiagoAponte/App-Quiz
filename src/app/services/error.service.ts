import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class ErrorService {
    constructor() {

    }
    error(code: string): string {
        switch (code) {

            case 'auth/user-not-found':
                return 'No existe un usuario con este email';

            case 'auth/wrong-password':
                return 'Contraseña incorrecta';

            case 'auth/weak-password':
                return 'Al menos debe tener 6 caracteres la contraseña';

            case 'auth/email-already-in-use':
                return 'El correo ya esta registrado';

            case 'auth/invalid-email':
                return 'El Correo es invalido';

            default:
                return 'Error desconocido';
        }
    }
}
