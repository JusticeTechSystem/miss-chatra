// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='22HskbZa1a+EICMz+hhVvDhJ5p8wkyac26wfh9TzD86wk8hbnybcRU/m5eWZPVvQvzPaT4/4IMrERJ06N7PK0qwp9zWUL7qFd2Uz2LdmLCYMPxkGCcrNdtEDMPbaaX8CgNltaf0zJlkjPBkoBLpcdJYzCu6r9hzcclHjVT2NRlJcAPUcDz26V/YG+ujMF6715H3G/2WgzI22GMU/SpaggZmWYnw5tXsjJdU/Jz/tOJYTRjrC5AhyzOvSPUz8FFiAPv2x5jDMEYc0gETWaf/G5E2RQMsEadaR4c8+3oSRMk0SlH54ICo06yniOTZhGNLfoi+LIw4oEkTuW/RRQ9Mc/yaeVK74yBGnAEagMTOc+EiAAIcM9Kr+l9yr+pUPezI3LxSyB7mN8TnvAxuPU3irKqnZsLNmqIghvn3+Es3fpdlnJrmo49cWHYBfl5xe8OZ40w/Mbui6gSJmogH9w6ntoBk9OVS2ntAvF3WoCvuB1iapa0ggeF3VwTJYZZTz8BCuOCcQRYXa/+TVcRJcNU/PgMRUPN94XXXmMDDrSdWGd8luDl5SFF0sMWA7+Xgsi+44ucM7VGJ6n8mDBmgPnomOVwW85EOXkod47VLvhfeiD/c0dFaHNs8fH7IR/1cNleyyqmL3HCpGfLN04yExHY7zLy4jWRiL+OJCfcmA8SBI0f00F7EdBI5ELDVuTQC6f/78KeIPpUvz9cFhpZdQdVAht6oV/iDppqsHf+6t4fp5vziGpmrjw+US4a9YlAWsuF19ziz41ozXE7OqokF66v0cVVn2GxnjR97iIDDjaoyjXkFaDBs7sXEoTVpy5mMc9Rhmdb9twWI43tFD0dxb9X6i+eh+NEKf0qZEhuCdqfBNclC+5xKUdAtP9FU6JJ3tbVz7aftzMR7L6LGGeUY3awIZ874mLSjXqScD65dHse3zzrpvH1F0E6ilNhgJ3ELUJPmKcBrBZBqz5VuGX/8GLF0wiObrteOLdcqav0pbzcqKANeZdAtyIATFNWZmIVphbhtAsY6hPnAsKH57BKhLXn/y7fXs7qzxfIDPgMh61DA5P0WVjRnTlO+K4VvJSbKlzrgN0q58PtmNN18n9KdqOkIsDwJMvpnYMI7sdR/B5H4VLQmzl7Drn7qnTScLyxcln51rPVjy2Ga2eiaH9O0QDlQFifm5x67JBFFwU7TpO4QLC+hxwe0iWd+/Fmy3ZnB8p6GrXunLBZJrGKjTN705RXek9D5pK2gX+YGK6O5hPTsay4GTURqxjp3haxS6wDm0cyp0KXdXOoWW0+kdnnaqdrpyers1K2s/DfLrVmMtDrBtslOCSGwVrnlPHjKDBs8LYFvqrE7O1mddUsr/ocpePKwWCA/O4uECSjo9/ER4oceiieR4Lf4lwDdSzg==';const _IH='3c34d8a3f0b7567fca5801b48f670b4bed1251ea916c967a55419ef99208692c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
