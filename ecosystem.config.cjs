module.exports = {
	apps: [
		{
			name:"server1",
			script: "pm2/app.js",
			env: {
				PORT:8080
			}
		},
		{
			name:"server2",
			script: "pm2/app.js",
			env: {
				PORT:8081
			}
		},
		{
			name:"server3",
			script: "pm2/app.js",
			env: {
				PORT:8082
			},
			exec_mode:'cluster',
			node_args: "--harmony", //si da error: agregar esto que armoniza common js con funciones de ES6
			instances: 8
		}
	]
}