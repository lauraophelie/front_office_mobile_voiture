const baseUrl = "https://voiturebacknonrelationnel-production.up.railway.app/";
const baseUrlRelationnel = "https://voiturebackendrelationnel-production.up.railway.app/";
const admin = {
    email: "admin",
    password: "0"
}
const config = {
    header: {
        Authorization: `Beader ${sessionStorage.getItem('token')}`
    }
}

export default { baseUrl, baseUrlRelationnel, config, admin };