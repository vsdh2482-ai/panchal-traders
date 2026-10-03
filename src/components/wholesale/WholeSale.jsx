import React from 'react'
import {Store, LayersArrowUp, Tag, Handshake } from 'lucide-react'
const WholeSale = ({t}) => {
  return (
    <section className='border-b border-b-gray-300 hidden md:inline-flex'>
        <div className='w-full max-w-360 mx-auto px-4'>
            <div className='grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4'>
                <div className="flex items-start gap-3">
                  <Store className="w-8 h-8 shrink-0 text-red-800" />
                    <div>
                        <h3 className="text-lg font-medium">
                          {t.wholesaleTitle1}
                        </h3>

                        <p className="mt-0.5 text-sm text-muted-foreground">
                        {t.wholesaleText1}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                  <LayersArrowUp className="w-8 h-8 shrink-0 text-red-800" />
                    <div>
                        <h3 className="text-lg font-medium">
                        {t.wholesaleTitle2}
                        </h3>

                        <p className="mt-0.5 text-sm text-muted-foreground">
                        {t.wholesaleText2}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                  <Tag className="w-8 h-8 shrink-0 text-red-800" />
                    <div>
                        <h3 className="text-lg font-medium">
                        {t.wholesaleTitle3}
                        </h3>

                        <p className="mt-0.5 text-sm text-muted-foreground">
                         {t.wholesaleText3}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="w-8 h-8 shrink-0 text-red-800" />
                    <div>
                        <h3 className="text-lg font-medium">
                        {t.wholesaleTitle4}
                        </h3>

                        <p className="mt-0.5 text-sm text-muted-foreground">
                         {t.wholesaleText4}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WholeSale