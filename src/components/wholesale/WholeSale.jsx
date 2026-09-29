import React from 'react'
import {Store, LayersArrowUp, Tag, Handshake } from 'lucide-react'
const WholeSale = () => {
  return (
    <section className='border-b border-b-gray-300'>
        <div className='w-full max-w-[1440px] mx-auto px-4'>
            <div className='grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4'>
                <div className="flex items-start gap-3">
                  <Store className="w-8 h-8 shrink-0 text-red-800" />
                    <div>
                        <h3 className="text-lg font-medium">
                        Wholesale & Retail
                        </h3>

                        <p className="mt-0.5 text-sm text-muted-foreground">
                        Supply for shopkeepers and contractors as well as walk-in customers.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                  <LayersArrowUp className="w-8 h-8 shrink-0 text-red-800" />
                    <div>
                        <h3 className="text-lg font-medium">
                        Wide Range
                        </h3>

                        <p className="mt-0.5 text-sm text-muted-foreground">
                        Construction and repair material across five categories.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                  <Tag className="w-8 h-8 shrink-0 text-red-800" />
                    <div>
                        <h3 className="text-lg font-medium">
                        Competitive Pricing
                        </h3>

                        <p className="mt-0.5 text-sm text-muted-foreground">
                          Fair rates — ask for the best price on WhatsApp.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="w-8 h-8 shrink-0 text-red-800" />
                    <div>
                        <h3 className="text-lg font-medium">
                        Reliable Service
                        </h3>

                        <p className="mt-0.5 text-sm text-muted-foreground">
                        Honest guidance and material made available on time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WholeSale