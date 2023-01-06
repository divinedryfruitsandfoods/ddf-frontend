import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }, [navigate]);

    return (
        <div>Page Not Found</div>
    );
}
