import React from 'react'

function NavCard({ title, description, link }) {
    return (
        <a
            href={link}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
            <h3 className="text-2xl font-bold">{title}  &rarr;</h3>
            <p className="mt-4 text-xl">
                {description}
            </p>
        </a>
    )
}

export default NavCard