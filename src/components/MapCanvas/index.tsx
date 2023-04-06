import { forwardRef } from "react"
import styles from './styles.module.css'

export const MapCanvas = forwardRef<HTMLDivElement, Record<string, unknown>>(
		(_, ref) => <div ref={ref} className="flex mt-4 w-full h-full" />
	);

	

	