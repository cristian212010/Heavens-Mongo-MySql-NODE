const urlAll = "http://localhost:4100/api/creyentes/";
const urlAdd = "http://localhost:4100/api/creyentes/add";
const urlDelete = "http://localhost:4100/api/creyentes/del";
const urlOne = "http://localhost:4100/api/creyentes/one";
const urlUpdate = "http://localhost:4100/api/creyentes/upd";

//Read
export const allData = async () =>{
    try {
        const response = await fetch(`${urlAll}/all`);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addData = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deleteData = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};

//Read One
export async function selectOne(id) {
    try {
        const response = await fetch(`${urlOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Update
export async function updateData(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};

//Bucaramanga
export const allBucaramanga = async () =>{
    try {
        const response = await fetch(`${urlAll}/bucaramanga`);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Floridablanca
export const allFloridablanca = async () =>{
    try {
        const response = await fetch(`${urlAll}/floridablanca`);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Comuna 5
export const allComuna5 = async () =>{
    try {
        const response = await fetch(`${urlAll}/comuna5`);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//San Pio
export const allSanPio = async () =>{
    try {
        const response = await fetch(`${urlAll}/sanpio`);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Santander
export const allSantander = async () =>{
    try {
        const response = await fetch(`${urlAll}/santander`);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};