import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addItem, removeItem } = useOrder()

  return (
    <>
      <header className="py-5 border-b border-slate-100">
        <h1 className="text-center text-4xl font-black">Tipping and consumption calculator</h1>
      </header>
      <main className="max-w-7xl mx-auto pt-5 grid md:grid-cols-2">

        <section className="p-5">

          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-2 mt-7">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

        </section>

        <section className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <OrderContents
              order={order}
              removeItem={removeItem}
            />
        </section>

      </main>
    </>
  )
}

export default App