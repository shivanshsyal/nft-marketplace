import { Box, Button } from "@mui/material";
import Link from "next/link";
import CollectionsGrid from "./CollectionsGrid";
import SingleNftComponent from "./SingleNftComponent";

const SingleCategoryHomePage = ({ data, value, index, category }) => {
	return (
		<>
			<CollectionsGrid>
				{data.map((item) => (
					<SingleNftComponent key={item.id} {...item} />
				))}
			</CollectionsGrid>
			<Link href="/explore">
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						my: 8
					}}
				>
					<Button
						variant="contained"
						color="secondary"
						sx={{
							px: 10,
							py: 2,
							borderRadius: 6,
							fontWeight: "bold"
						}}
					>
						More NFTs
					</Button>
				</Box>
			</Link>
		</>
	);
};

export default SingleCategoryHomePage;
