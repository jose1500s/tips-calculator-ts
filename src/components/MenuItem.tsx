import type { MenuItem } from "../types"

interface MenuItemProps {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button
            className="border-2 border-teal-400 hover:bg-teal-800 w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p>${item.price}</p>
        </button>
    )
}
