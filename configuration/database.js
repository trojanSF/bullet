
import Expo from 'expo';

const configuration = {
		name 	: 'blackapp' ,
		version : 1
	} ,

	connection 	= Expo.SQLite.openDatabase ( configuration ) ,

	error 		= ( data ) => {
		console.log ( 'DATABASE ERROR - ' , data );
	};

// Return a connection to our database
export default {

	connection 	:  connection ,

	portfolio 	: {

		/**
		 * Setup function to create the table to keep our saved settings in
		 */
		setup 	: () => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql (
					'CREATE TABLE IF NOT EXISTS portfolio ( ' 	+
						'id TEXT NOT NULL PRIMARY KEY , 	' 	+
						'amount TEXT NOT NULL ,' 				+
						'name TEXT NOT NULL ' 					+
					');'
				);
			});
		} ,

		set 	: ( id , amount , name , callback ) => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql (
					'INSERT OR REPLACE INTO portfolio ( id , amount , name ) ' 	+
					'VALUES ( ? , ? , ? );' 									,
					[
						id 														,
						amount 													,
						name
					] 															,
					callback 													,
					error
				);
			})
		} ,

		get 	: ( callback ) => {

			return connection.transaction (( transaction ) => {

				//transaction.executeSql ( "DROP TABLE IF EXISTS portfolio"  );

				transaction.executeSql (
					'SELECT * FROM portfolio' 	,
					null 						,
					callback 					,
					error

				);
			});
		} ,

		delete 	: ( id , callback ) => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql (
					'DELETE FROM portfolio WHERE id = ?' 	,
					[
						id
					] 										,
					callback 								,
					error

				);
			});
		}
	} ,

	settings 	: {

		/**
		 * Setup function to create the table to keep our saved settings in
		 */
		setup 	: () => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql (
					'CREATE TABLE IF NOT EXISTS settings ( 	' 	+
						'id TEXT NOT NULL PRIMARY KEY , 	' 	+
						'value TEXT NOT NULL ' 					+
					');'
				);
			});
		} ,

		set 	: ( id , value , callback ) => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql (
					'INSERT OR REPLACE INTO settings ( id , value ) ' 	+
					'VALUES ( ? , ? );' 								,
					[
						id 												,
						value
					] 													,
					callback 											,
					error
				);
			})
		} ,

		get 	: ( id , callback ) => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql (
					'SELECT * FROM settings WHERE id = ?' 	,
					[
						id
					] 										,
					callback 								,
					error

				);
			});
		}
	}
};
