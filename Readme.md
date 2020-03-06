Deploy using Heroku Git
Use git in the command line or a GUI tool to deploy this app.
Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Create a new Git repository
Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a ssnfichaje
Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master
Existing Git repository
For existing repositories, simply add the heroku remote

$ heroku git:remote -a ssnfichaje


Para ejecutar heroku hay que copiar las dependenciasdev  de babel 
a dependencias de ejecucion (mirar package.json")
Crear el comando start en el package.json que lo necesita heroku