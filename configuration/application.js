
import device from '../properties/device';

const store = device.os.ios ? 'app' : 'play';

export default {

	email 		: 'code@nohalftime.com' ,
	name 		: 'Blackapp' 			,
	version 	: 'v1.0.0' 						,

	sentry 		: 'https://4a8cbb720c60475f866be888fcfa27cd@sentry.io/278941' ,

	cryptocoinminer () {

		const 	stores 	= {
				app 	: '' ,
				play 	: ''
			};

		return stores [ store ];
	} ,

	store () {

		const 	stores 	= {
				app 	: '' ,
				play 	: ''
			};

		return stores [ store ];
	}

};
