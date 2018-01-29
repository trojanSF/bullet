
import 		React 					from 'react';
import { 	Clipboard 			,
			Linking 			,
			ScrollView 			,
			TouchableOpacity 	,
			Text 				,
			View 				} 	from 'react-native';
import { 	connect 			} 	from 'react-redux';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		Button 					from '../components/utilities/button';
import 		Code 					from '../components/utilities/code';
import 		Heading 				from '../components/utilities/headings';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/help';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class About extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 	,
				theme 		= screenProps.theme 	;

		return {
			title 		: language.screens.about.title ,
			headerLeft 	: <Back
				press 	= {() => navigation.goBack 	()}
				theme 	= { theme 					}
				value 	= { language.actions.return }
			/>
		};
	};

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				scenery 	= scene ( theme ) 		,
				appearance 	= style ( theme ) 		;

		return (
			<ScrollView style 	= { scenery.body 					}>
				<Heading
					theme 		= { theme 							}
					title 		= { language.screens.about.title 	}
					type 		= { 1 								}
				/>
				<View 	style 	= { appearance.body 				}>
					<Text style = { appearance.text 				}>
						{ language.screens.about.body 				}
					</Text>
				</View>
			</ScrollView>
		);
	}
});
