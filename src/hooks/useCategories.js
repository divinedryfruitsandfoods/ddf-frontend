import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CategoryService from "../services/CategoryService";

function useCategories() {
    const [categoryData, setCategoryData] = useState();
    const [categoryDataError, setCategoryDataError] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getCategoriesData = async () => {
            try {
                const response = await CategoryService.getEmployees();
                setCategoryData(response.data);
            }
            catch (e) {
                setCategoryDataError(e);
            }
        };
        getCategoriesData();
    }, []);

    function createNote(title, description) {
        const newNote = {
            id: uuidv4(),
            title,
            description,
            createDate: new Date().toISOString(),
        };
        setNotesData((oldNotes) => {
            return [...oldNotes, newNote]; // Order does not matter as sort happens later
        });
    }

    function updateNote(id, title, description) {
        setNotesData(function (oriState) {
            return oriState.map(function (rec) {
                return rec.id != id
                    ? rec
                    : {
                        ...rec,
                        title: title ? title : rec.title,
                        description: description ? description : rec.description,
                    };
            });
        });
    }

    function deleteNote(id) {
        setNotesData(function (oriState) {
            return oriState.filter(function (rec) {
                return rec.id != id;
            });
        });
    }

    return { notesData, notesDataError, createNote, updateNote, deleteNote };
}

export default useNotes;