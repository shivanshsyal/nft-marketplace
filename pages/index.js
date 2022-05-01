import Typography from "@mui/material/Typography";
import BannerComponent from "../components/BannerComponent";
import CollectionsHomePage from "../components/CollectionsHomePage";
import HeroComponent from "../components/HeroComponent";
export default function Home() {
	return (
		<>
			<HeroComponent />
			<CollectionsHomePage />
			<BannerComponent />

			<Typography variant="h1">Home page</Typography>
			{[...new Array(42)]
				.map(
					() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
				)
				.join("\n")}
		</>
	);
}
