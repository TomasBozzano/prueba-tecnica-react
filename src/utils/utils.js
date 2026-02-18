//Verificar si la url es valida y es de github
export const urlGitHubValidate = (url) => {
    if (!url) return false;
    const urlPattern = /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+\/?[A-Za-z0-9_-]*$/;
    return urlPattern.test(url);
}

export const emailValidate = (email) => {
    if (!email) return false;
    if(email.length > 254) return false;
    if(email.length < 5) return false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}