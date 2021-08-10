import React from 'react'

export const RenderList = (list = [], Component) => (
	list?.map((item) =>
		<Component key={item?.nombre} {...item} />
	)
);