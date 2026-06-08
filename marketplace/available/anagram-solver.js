// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NynHZ6rU295b7p5I2OKRN/KSXlZBbgXXR+AgnVeICDcjk5340Wztr+zqzzrbTRES9DXTBDAFk41rIX9oxyEmbGoQ63o5KhvQE+zGVXz4dRB26pE22CZIc7jvO8pRHt9fHqzUhlBirym2dXtiBkMipcz0IlAL96BQES1lDpSMYIlzRAlZhSaUy7sY4ZZsW6sIn4ZOH2b/1w8A3pECfi5ETbk1wNnARzLFkpPISTT38ouyP11bGkTbOgOO6lwuqZe7u7c3pSKIsRc/lRj9WvnUwdSfUuTraAmDu22ienscf28mLVwZSXJPhrewtKmzBvEW7qCju3zUDcrjQq9AiySmDwJnyB9Qc3jAc9OMTu90HnhpSIMOQkgurmDmY/5RPaXexrZAdh2T5NPprpuak3JFtLgT4OIORlZzL1rMs20hK2QWwvs0nJ6XhUp3pTFBI3via2ti1P/kDq3OWIaT26VKzeXcSUpG2LWeWRB0lW2g1h8NE3wVyg8Jdl0nlh2/fGVnNWOMM21lJfz7KHCSh8D3JUsODkgteooyim6Mw9c1sSdYnCzrMCZGaCP+kdin+yUqcsuDPzidu61Q+1WsUAbj/LMqztF6bS1eo4xdU+U8h/gbq/8cJYz/6TgciSXybgkly+/Fn7waCbGU0euDAqmVk1CdQQhaz4d7Sfd+XeM80BbOiUKqb8kC8jQ27q7p8NgEWZOJELgXEiWvwcfV/a5MFWCndtzF+ZMe7auUKns1sU9JX0d4KFntUEgVDXfq77H3gnEZjwOKmq+bP/jXRap/dUkVDCn1Yebvcs8nSPiAmqFV9Hxngmb0i3D1VTO4paxTzpmgB18UnI3o/qplGytPrXGpWlDyAWHem1kzE6Nue4sCWzsSJ2Onj6fCKFJ0NHJJPyGSphfWWumG36/wrvZ3pO3mX4BdwifDpr74C3sWrUZ0ldL/PQhBbOpqid4/6hXHI/QJVzjefkO7v+ryShZW66d3k2IgQkZ7i4Ajj1Qp';const _IH='cf68ff1c3a704a7ed11d85bb5c038e9129c062626b090388dbddbea3a9904d94';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
