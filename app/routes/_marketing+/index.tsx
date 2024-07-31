import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Spotr' }]

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
			<div className="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
				<h1
					data-heading
					className="mt-8 animate-slide-top text-4xl font-medium text-foreground [animation-delay:0.3s] [animation-fill-mode:backwards] md:text-5xl xl:mt-4 xl:animate-slide-left xl:text-6xl xl:[animation-delay:0.8s] xl:[animation-fill-mode:backwards]"
				>
					<p>Welcome to Spotr</p>
				</h1>
				<p
					data-paragraph
					className="mt-6 animate-slide-top text-xl/7 text-muted-foreground [animation-delay:0.8s] [animation-fill-mode:backwards] xl:mt-8 xl:animate-slide-left xl:text-xl/6 xl:leading-10 xl:[animation-delay:1s] xl:[animation-fill-mode:backwards]"
				>
					coming soon...
				</p>
			</div>
		</main>
	)
}
