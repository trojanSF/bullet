
import 		React 			from 'react';
import { 	Platform 	,
			StatusBar 	,
			View 		} 	from 'react-native';
import { 	connect 	} 	from 'react-redux';
import 		Navigation 		from '../navigations/router';
import 		styles 			from '../styles/main';
import 		analytics 		from '../utilities/analytics';
import 		routes 			from '../utilities/routes';
import 		actions 		from '../actions/navigation';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Main extends React.Component {

	constructor ( props ) {
		super 	( props );

		// Only fire the application load data once
		analytics.event 	( 'blackapp' , 'loaded' );
		this.dimensions 	();

		this.navigate = this.navigate.bind ( this );
	}

	dimensions () {

		// Everytime a theme or language is changed update the GA dimension
		analytics.dimension ( 'language' 	, this.props.language.names.en 	);
		analytics.dimension ( 'theme' 		, this.props.theme.names.en 	);
	}

	// When react-navigation is moved into redux we can remove this approach for screen tracking feature
	// And just use the middleware
	navigate ( last , next ) {

		const 	current 	= routes.name ( next ) ,
				previous 	= routes.name ( last ) ;

		this.props.dispatch ( actions.navigate ( previous , current ));
	}

	render () {

		const 	theme 		= this.props.theme 		,
				language 	= this.props.language 	,
				appearance 	= styles ( theme ) 		;

		this.dimensions 	();
		return 				(
			<View style = { appearance.main }>
				{ Platform.OS === 'ios' 	&& <StatusBar 	barStyle 	= 'default' 				/> }
				{ Platform.OS === 'android' && <View 		style 		= { appearance.statusbar } 	/> }
				<Navigation
					onNavigationStateChange = { this.navigate }
					screenProps 			= {{
						language 	: language ,
						theme 		: theme
					}}
				/>
			</View>
		);
	}
});
