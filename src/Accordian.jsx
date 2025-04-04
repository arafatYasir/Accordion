    import { useEffect, useRef, useState } from "react";

    const Accordian = ({ comment }) => {
        const [showBody, setShowBody] = useState(false);
        const { email, body } = comment;
        const accordianRef = useRef();

        const handleClose = (e) => {
            if(accordianRef.current && !accordianRef.current.contains(e.target)) {
                setShowBody(false);
            }
        }

        useEffect(() => {
            document.addEventListener("click", handleClose);

            return () => document.removeEventListener("click", handleClose);
        }, [])

        return (
            <div ref={accordianRef} className="accordian">
                <div className="accordian-heading">
                    <h2>{email}</h2>
                    <button onClick={() => setShowBody(prev => !prev)}>&#43;</button>
                </div>

                <div className={`accordian-body ${showBody ? "open" : ""}`}>
                    {body}
                </div>
            </div>
        );
    };

    export default Accordian;