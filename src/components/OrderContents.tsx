import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

interface OrderContentProps {
    order: OrderItem[],
    removeItem: (id: number) => void
}
export default function OrderContents({ order, removeItem }: OrderContentProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-2 mt-7">
                {order.map((item) => (
                    <div key={item.id} className="flex justify-between">
                        <div>
                            <p>{item.name} x{item.quantity}</p>
                            <p>{formatCurrency(item.price * item.quantity)}</p>
                        </div>
                        <div>
                            <button
                                onClick={() => removeItem(item.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
