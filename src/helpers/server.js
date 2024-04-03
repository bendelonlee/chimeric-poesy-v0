export function backend_url(){
    if(process.env.NODE_ENV === "development"){
        return "http://localhost:3000"
    } else {
        return "https://tri-queue.uk"
    }
}