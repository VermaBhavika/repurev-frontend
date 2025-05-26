export function isValidEmail(email: string) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
export function isValidMobile(number: string){
    return /^\d{7,15}$/.test(number);
}