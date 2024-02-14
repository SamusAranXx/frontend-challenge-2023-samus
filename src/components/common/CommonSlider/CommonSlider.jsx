import { useRef } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useTheme } from '@mui/joy'

const CommonSlider = ({ children }) => {
	const { breakpoints } = useTheme()
	const sliderRef = useRef(null)

	const settings = {
		dots: true,
		arrows: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: false,
		responsive: [
			{
				breakpoint: breakpoints.values.md,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: breakpoints.values.sm,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: breakpoints.values.xs,
				settings: {
					slidesToShow: 1
				}
			}
		]
	}

	return (
		<div style={{ position: 'relative' }}>
			<Slider ref={sliderRef} {...settings} style={{ position: "relative", padding: 0 }}>
				{children}
			</Slider>
		</div>
	)
}

export default CommonSlider