// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnZdKlWDBJjFUqb2CgvRsREyY56f50v+RYg3mLrjVZjb5llXkk0nZmyPAsDuWhh/TVJYTOus2Cvzu7eLEAcr56cQ+OxpzDDtX6fTk+WccMXrUqFJhfbhpfMg2QZrRoDw1A3yTdZ7Rx14Qo7Z1e0OgBPVZ50Q2KOaST7+oDQ0hcqogOQTnLbYGmwU65tjkdmpa4vqnZz/IUbRMJbszD52JPE0LQFDHRC9pNhyr4gPgEGf+PssZ7M/X2VshEZX8YUB8QnDEXQ+Si0LHUe2aGCmlf7JG+HgMNur+XvC8DwI/QMVJ7mONFMT35EbgGW3tcqO1CGfQtoB0FX7jdt3CK+wGSiqBRJaqZmaTwb+TcFAzh3NxriBy8nkWpNAvY56He7x0I+2T2GISnVTPc8F1h4QrYcTJztlWDHHJQCbauOTscofMNLx+slmfBh9XeZdbOIXUmXtJMlJ2+xKH9ntDj9FV1ZyIkZUWGOCHpyVJdGz92GObvrJ0ixMYxBW5SLNWEIndA19nhJLf3wsnuosq+099u9Zuu4qmurgTmBAttqOk9/3Qv01XZIgR2DVfRb9cNuW9WIq9gf/4r2AVs+6ZPU/t6It9dBzQKLlTkptVujQ+UZdLge126breSE87itArbq7M1ns1O4MjIX/2M32U9OCA4v7FhnDBKxcSnyIqkAEIVLq7D4TsQ4IzPjsYhnea57SSHF212Q1NwApPA4nIcLaM10nTVjC3APVrSWP2bJ2kPuH7Rbg==';const _IH='82fead70ccd77f25c3f18987d4955e08ca70d361b0d706f6af8acfb046c76223';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
