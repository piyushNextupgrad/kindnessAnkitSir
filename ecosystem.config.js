module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
		key: "nextjskey.ppk",
		user : 'ubuntu',
		host : '18.221.127.89',
		ref  : 'origin/main',
		repo : 'git@github.com/piyushNextupgrad/kindnessAnkitSir.git',
		path : '/home/ubuntu',
		'pre-deploy-local': '',
		'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
		"pre-setup": "",
		'ssh_options': "ForwardAgent=yes",
    }
  }
};
