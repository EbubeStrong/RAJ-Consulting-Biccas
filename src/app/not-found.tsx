"use client"
import Link from 'next/link'

export default function NotFound() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
			<div className="max-w-3xl w-full text-center py-20">
				<div className="inline-flex items-center justify-center w-40 h-40 bg-blue-50 rounded-full mx-auto mb-8">
					<svg width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
						<path d="M11.9998 2C6.4778 2 2 6.477 2 12s4.4778 10 9.9998 10 10-4.477 10-10S17.5218 2 11.9998 2z" stroke="#0EA5A4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M12 7v5l3 3" stroke="#0EA5A4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>

				<h1 className="text-6xl font-extrabold tracking-tight text-slate-900">404</h1>
				<p className="mt-4 text-xl text-slate-600">We can&apos;t find the page you&apos;re looking for.</p>

				<div className="mt-8 flex items-center justify-center gap-4">
					<Link href="/" className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
						Take me home
					</Link>
				</div>

				<p className="mt-6 text-sm text-slate-500">Or check the URL for mistakes and try again.</p>
			</div>
		</main>
	)
}

