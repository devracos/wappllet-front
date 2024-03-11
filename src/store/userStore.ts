import secureLocalStorage from 'react-secure-storage'
import { StateCreator, create } from 'zustand'
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware'

// const myMiddlewares = (f) => persist(f, { name: 'wapplletStore' })

interface IIncome {
	id:number
	date:string
	check:boolean
	description:string
	frecuency:string
	category:string
	price:number
}

interface IIncomeState {
  incomes: IIncome[]
}

const wapplletSlice: StateCreator<IIncomeState, [["zustand/persist", unknown]]> = (
  set
) => ({
  incomes: [{
		id:1,
		date:'03/12/2023',
		check:false,
		description:'Cine Bob Marley',
		frecuency:'Mensual',
		category:'cine',
		price:15000
	},{
		id:2,
		date:'03/12/2023',
		check:true,
		description:'Tenis adidas',
		frecuency:'Mensual',
		category:'cine',
		price:28000
	},{
		id:3,
		date:'03/12/2023',
		check:false,
		description:'Tenis Nike',
		frecuency:'Mensual',
		category:'cine',
		price:28000
	}]
});

export const useWapplletStore = create<IIncomeState>()(
  persist(wapplletSlice, {
    name: "wappllet-storage",
    storage: createJSONStorage(() => secureLocalStorage as StateStorage),
  })
)