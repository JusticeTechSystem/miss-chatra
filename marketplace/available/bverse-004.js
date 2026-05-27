// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fT413tuIzq/yuDsj34G3mUFpU/LF1IhlIe1yCu/ataXkbSqVxhZzyF5or7mt+m3uUGHcAABCCIwj9FvCj5nDi6O/aS5cJ4mZNzyztPL2nDaRm/vUjvWzg1Q50rMKxPT2ZCMYkpHow3oZzzQ4VViQiMemFwg1REfoaYLu43LCQ8lClWdKlZl9i8XO/PfTcq3UhwP2hULVi0jrslMt1fF3VmgI/vef9I/nI1HAXx36XMQX9vfPuYTY5MzQYhhvAyGXtM7QykUMgbKRVxtmCHxUdjEsajI0hb1FPTX+9Vgzb+Ax7pnXWBsU+lObPIAOGNvcXfDcjvcmxkLz3s9Ml2V9G8A1EtOATgFZrhVpwZgGxOte/juRD+Osox0Jrw+cuD6ar98gkd0wjSHtyGGE87O3vyJ+zawQz8EuQNmN3HuEXQRvX7VzxLd9xQza9vQcKpHzZ9iQKWhOqckaqOW3wUkqJXL8RQoMyd9gcCYDjKlu+YlzUnVLAQ8UWCUGkpRwdhp4XqPsNX1IDMzKFA4LR1aiOIfd2Qox5DSCh9Ox4gy+voRUYXtRmaHYQHufF9VNUVuylh9nGEqdy3/Pa1523RiU+QN/foix0OwSLS06Okc9ng4q0LZs3ppd901TZfnh/TUayS1Jazt+Kl7nEMYDmpniZIar024G6Y2JRtvnfO2FxObIf5IMxg==';const _IH='2e4e0e173eba47dcf4caf81f2653d6c04a37848df4e927425a7523fed93ed147';let _src;

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
