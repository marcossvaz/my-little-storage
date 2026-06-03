export function generateSku(name: string, brand: string) {
    const  slug = (str: string) => str.slice(0,4).toLocaleUpperCase().trim();
    const timeStamp = Date.now().toString().slice(-4);
    return `${slug(name)}-${slug(brand)}-${slug(timeStamp)}`;
}