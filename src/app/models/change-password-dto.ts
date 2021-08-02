export class ChangePasswordDTO {

    password: string;
    confirmPassword: string;
    tokenPassword: string;

    constructor(password: string, confirmPassword: string, tokenPassword: string) {
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.tokenPassword = tokenPassword;
    }
}
