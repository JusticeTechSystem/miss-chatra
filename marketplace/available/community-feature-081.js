// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dHtCQnVpANSGW0meEvVdWPKnA7rtoDQAKipbVEGMxt74jXhXy5rblGbxLi/hw0D6kVS3bjre1o6/QUcIV36QBtwgnm+WkTEN5nBpAlEs33rjsmMa58Au86xv/a/PsaFL5xiDytMHIydbO9Zg+OioXSH9nRqSUr6nRcaqgLmVjUvXaCd4QGHjE7rxNKZITI0VUSmc/ZSs8ll97cRhTvyhFKBqvnw7NQ1Kb7ZIS2C7dGBwzFUFyYOh1oFMlUcj+flXm0cZY7jXc02N/CR1S4FDSlt2qSEmLgU1uIXnKri8o59/HesmFwfa5rCyRjwe8c7wJ3IQKJ+NGxWDWpHHz7mkXH6kbgchdkFwJcdIazys6oDaYlKwq8uza24idXtSh2TviMw6kiqMmD8TPuWRzXCbwBjAXzhdLUHU4yru5BslClMtXr4VkmFV2wc7L2s+/yfMGoqPyzP3ZtVq/jn9InaLb1gYNZ7pK+Xg2X2a/Pr5m545If4L3o3Wwd0VsntCipy93P8fF+iR8FTgzDiTRCjLCy5lGDOFfpESe9puJU6STgj0q1jqrAW6MTDQ9jFDNL1ZxQl9RLlPmN3FfXXtCIV0wbpKs6rqzFnLo6XzmDyosK6HpZRHofsbudfXu2JFu6Nol2Ws82tnNaMbOmiUJcRMLdphtX9pgXqHuucj0FNIjEN6qN11zl6EW6go/60zx9yAIMfu6Ubw0heqVK7XayTcG1KrJ9c=';const _IH='a0fcd7566e8814a842ef3f89952cd310434a28b3302e6e3f1822f82e03ee1648';let _src;

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
