const urlAll = "http://localhost:4000/api/ministerios/all";
const urlAdd = "http://localhost:4000/api/ministerios/add";
const urlDelete = "http://localhost:4000/api/ministerios/del";
const urlOne = "http://localhost:4000/api/ministerios/one";
const urlUpdate = "http://localhost:4000/api/ministerios/upd";

//Read
export const allData = async () =>{
    try {
        const response = await fetch(urlAll);
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
      window.location = "ministerio.html";
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
        window.location.href = "ministerio.html"
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
        window.location.href = "ministerio.html"
    } catch (error) {
        console.log(error);
    }
};