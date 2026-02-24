//Verificar si la url es valida y es de github
export const urlGithubValidateWithUsername = (url) => {
    if (!url) return false;
    const urlPattern = /^https:\/\/github\.com\/(?!-)[A-Za-z0-9-]{1,39}(?<!-)\/[A-Za-z0-9._-]+\/?$/;
    return urlPattern.test(url);
}

export const emailValidate = (email) => {
    if (!email) return false;
    if(email.length > 254) return false;
    if(email.length < 5) return false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}