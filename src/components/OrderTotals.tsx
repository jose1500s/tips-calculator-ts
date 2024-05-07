import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

interface OrderTotalsProps {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => (total + item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => tip * subtotalAmount, [tip, order])
    const totalAmount = useMemo(() => tipAmount + subtotalAmount, [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina:</h2>
                <p>Subtotal a pagar:
                    <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>

                </p>
                <p>Propina:
                    <span className="font-bold"> {formatCurrency(tipAmount)}</span>

                </p>
                <p>Total a pagar:
                    <span className="font-bold"> {formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button className="w-full bg-white uppercase font-bold p-3 text-black mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Guardar orden
            </button>
        </>
    )
}
