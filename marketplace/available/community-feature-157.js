// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p9qqvVj7NbJLNoqvIU4zJxzsXosj8uRIC9FHt+hn2Q4Evrh997gs5gTtSoOi30xSzmyFm9Prh2flXtV8NpO1EamRsfxi4nSPQceYlk8Zkep7iG62rEfs0hVzpubKGRAevXDiU/QdlP1yiHILHlj2ndl9K4eJFRWcjBHfetA75ZTvrU7nyYHyqG0A6H6ZTh1O1iPAJUiEJcMp9YfvU0OUMVWRsFZRIHX8Eki5nvrtzttCv3JAEAnmvLKqBaVQNovpoUbtiKlGOHrgRsd9sh72xsuBIqQ3zXREcPog5r4Z4lkhd89+cZ2s4rXulrg0a60QreIH1zkHN9yYWjIzLNhzGPLY0pUloLrtIVxihR5/xGz0ZkO7SDfo7T2dgWgdzDvDW4ZfRilHdpUg6yDF90YchHuiWniZYqc6CC69qVB0PRM1xLs1VMOD5mWMidRiD6JMC5c/f2CGg3mjggagRHcMhLgKny0nnH/72OC9h0eqPpyGcqPcgSkuCZ44CeEvJDTzIWm7ZzTV04feHxF+moFb+X8UCFdWAyjML7soZyVbzGmGVCl9wZV110e5SJhKBiM0ySLbW2PHlELkSJ6Fat0WuxtPZ2BiVComEJ7MgP+6pmuVPwTpAQ9V2wsL1R9TkscXsoYgG6O4abiYCfKSd5epfd53qfrmSY9zKT8j2r+V0lxJ4jEnsxDtgUjq1o/nkUrFHyQ3bwKV5YOuGPBE51mhd5WowlxbxS6YSGDf1ekj0LN5+tc=';const _IH='bb6b165164a52903aab28f2952d72a01c42c652c403684549a4a464c93975130';let _src;

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
