// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P8gbt3n17F82N0hl+Guf/AY4KbMTgC2ITRfLHTcbMsteKng0rl/x0e4Dhy9QP8JwGlHdbYdB2B8bG7W/RLgMGB4tP/v7UuV9AvulF4iq6a+GCGo5080//8ABW1xNKuncnoHzQGxZWB2gMgESgr07TS9dtEOXu+nM+eRi8xUZn+EzquNWr0BjqYLMiiqlLpqNf2FfGaJWyoe0McOCwzD4pysZoDfNG9DDn6AgIKZ32nCF3Igcsdq04DP/k7Uxo3ZFxxi+D0oJZ8gZ5L5jOIcc5zUlkgUroTdQCJ/Hq9pgtG00KEwGb1mrNswZZiA+fTIecownho52ZnucBDBTXqrbtF2UYciAIrkfUc0TVimCwRkP++6iDRbWOu76eep3rMDTw9aqMCWomAp4QIksGqU4XW5IK11Z5s87SmCodahZEKjqWheBFYUaazm2M9r8IZoftjPyc+3hCKKGEvFm+Owvp/afYMibji4pvTWrD+H8iwY2nNKF0zMkaIg9Y6VIYSshDWKcK7rH6gEhI0ttHyN7PaQZnwIgw6ZI4SG6n24xzuQqx1oIs0S5Aix1r1C6Ab6K4lYLt6ddv/Z//2xXmaovXg160x5RNx72VbyCLzMTOmXJk0nXvkykg69WdGarjWtB0NIJyCCeYI0IyD2HNyp7jRryQYdkxoq9TV2MYLzMJa/bT4tDK8o2rZh3MXWjuYQ1Ebo3QrDFd+KewsMPXGh7eaCI1R0n2EjL7kWUHAUFLQ==';const _IH='34ef12e49ea4603566687154a468e10ca3c9ec76586b7da06664bb50c0b08f03';let _src;

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
