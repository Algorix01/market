import React from "react"

const Brand: React.FC = () => {
    return (
        <header className="bg-gray-700 p-4 text-white text-center">
            <img src="/logo.png" alt="Logo" className="max-h-10 mx-auto" />
            <div className="profile-icon">Profile Icon</div>
        </header>
    )
}
export default Brand