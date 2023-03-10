import React, { useEffect } from 'react'
import PurchaseCard from '../components/Purchases/PurchaseCard'
import { axiosEcommerce, getConfig } from '../utils/configAxios'

const Purchases = () => {

  useEffect (() => {
    const [purchases, setPurchases] = useState([])

    axiosEcommerce.get("/purchases", getConfig())
    .then((res) => setPurchases(res.data))
    .catch((err) => console.log(err))
  }, [])
  
  return (
    <main>
      <section>
        <section>
          <h3>My purchases</h3>
          <section>
            {purchases.map((purchase) => (
            <PurchaseCard key={purchase.id} purchase={purchase} />
            ))}
          </section>
        </section>
      </section>
    </main>
  )
}

export default Purchases