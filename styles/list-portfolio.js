
export default ( theme ) => {

	return {

		body : {
			flex : 1
		} ,

		cell : {
			flex 				: 1.9 ,
			paddingHorizontal 	: 2 ,
			paddingVertical 	: 10
		} ,

		'cell-text' : {
			color  		: theme.body ,
			fontSize 	: 14
		} ,

		head : {
			backgroundColor 	: theme.chrome 	,
			borderBottomColor 	: theme.border 	,
			borderBottomWidth 	: 1 		 	,
			flexDirection 		: 'row' 		,
			paddingHorizontal 	: 10
		} ,

		'head-text' : {
			color  		: theme.secondary 	,
			flex 		: 1 				,
			fontSize 	: 16
		} ,

		row : {
			alignItems 			: 'center' 	,
			flex 				: 1 		,
			flexDirection 		: 'row' 	,
			paddingHorizontal 	: 8
		}
	};
};
