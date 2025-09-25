import { useEffect, useState } from "react";
import { LoaderIcon, toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import RateLimitUI from "../components/RateLimitUI";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {

    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await api.get('/notes');
                setNotes(res.data.notes);
                setIsRateLimited(false);
            } catch (error) {
                if (error.response.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error('Error fetching notes. Please try again.');
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchNotes();
    }, []);


    return (
        <div className="min-h-screen">
            <Navbar />
            {isRateLimited && <RateLimitUI />}

            <div className="max-w-7xl mx-auto p-4 mt-6">
                {isLoading &&
                    <div className="min-h-screen flex items-center justify-center">
                        <LoaderIcon className="animate-spin size-10" />
                    </div>
                }

                {notes.length === 0 && !isLoading && !isRateLimited && <NotesNotFound />}

                {notes.length > 0 && !isRateLimited && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map(note => (
                            <NoteCard key={note._id} note={note} setNotes={setNotes} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage