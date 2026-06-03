// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+W0PoqbU1LgtxWmSUIC4qWwpldJvw97dZao/rf9EN8mbARfgrVODrkC0Q6ekXSNeEZ/GLVh9rJeLc4ZhHbdHz02en3k9R3kXkMJt88yMopFcCIkGL7RsyUGvdFAcp/ScuDbrX/xtBqogoocsZE+r/uIwSNLRObAoccqJ0qhg+fzO05uZBtNgRc3ky3RCGljFVb1ShZfPBJObtejZ2VWjW0Q5HOHmnLSsiSBC4941OGwXHWRV7Az/zRMxbJolJrj9ESnq7UEBw737zip4FibpU8dTtl0qajyDUGZ37WbD+zddEdq0XIywNJRrbNC4fgeqkP+QWef9TFjLNal4hNYi1zMgS/AXn3QaLiCciX5H1zCxdXVgKZYLmYqdLCdfbSmTSgNDtUQhQ+HWVXHH/1c5ABQPfDD/UpVNcRyxzI5lW3unwMjXO/STRejnr+w67mu8g2Z1M90UoMusN4GPCiwsHuZT5H8U+kmrMDkeBEXG5PZZzqa7LEtGPpLZy46jbc7BAuh3p9SkCDA1d8kRGDSbyv+enT8KHiXUqIBpUPxd87R17e4kdgeafU+bLBgfsDT1f25gKSJov/BWCkQ+3PQIgMZb7gihsmE8EG+W0ZyqvGumOjL/OSkh1ArXX1ex2zqBiyRJwfCVik0ax0oG198z0KCgDfrITB59SsB/Y75uRT4ALX+nhiFfjBv9xh6kcMeStFxd9ibkgYECHu9uSBZ3Hv1Okmfg715b/xnwI1H+EHWDuR76LctsxuAtvz4Oz3dfnZwRu8ViqjthTihitk6coyYhtU7+v4JOhfaZIICvt8m3Q72DKouefMvnL7wOsDKqH+RFolyZg/6akv8kmLzAKGtV+lb4hDCna88WT8VgZky62aLS5fovuUHgSdr3rdC+gB8XtlaX0dbOiQyZqRVMt5HSiCzIfMPlsXH8Zs8OuhJlm6A8PBdZTa9WbRWxCdkKLMMdwCBc0bgQoZlZfgig3hTqj91oy0skcxlCt/uG7WrW9V+MQEZ1EAoCNk4z2WnnCw==';const _IH='d9d57a26e3cf3eec29425199f26751b55ec2936408915dc4be5420f2b64435c2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
