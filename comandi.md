1. ng new "app-host"
2. entra dentro la directory app-host
3. ng add @angular-architects/module-federation --project app-host --port 4200 --type host
4. ng new app-remote
5. entra dentro la directory app-remote
6. ng add @angular-architects/module-federation --project app-remote --port 4300 --type remote
7. creiamo un modulo "rubrica" in lazy dentro l'app remota e lo riempiamo un pò
8. modifica webpack in app-remote [open](./app-remote/webpack.config.js)
9. arricchiamo un pò l'app shell 
10. modifica webpack in app-host [open](./app-host/webpack.config.js) (anche se poi non lo useremo)
11. aggiungo il remoto routing tramite loadRemoteModule
12. creo una libreria shared con un POTENTISSIMO sistema di comunicazione
13. la installo localmente su i due progetti e gestisco manualmente la condivisione delle librerie tra mFE
14. tutto questo per far vedere un problema.
15. risolvo il problema delle librerie
16. Fine demo.