// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQozXmOciwtAN9lb3vkO9hpKp11/oliz4FxrXuz4wnzIrZRb0kcE6jWaGaYtH0iCbMQSQFb5p6wlFdabsN6KFZSzntrBrr0CtAs5xvpWKkdGNGYwc85kz7X3I3X+3pOHV/dLeBQdQWz3z4TqXmeaQZDtFDfcqfKmPnqD0QHHDcBElLjt4841E57V0dz0Yy+lvvm84VER4tSneqAd1I82y/SRBbBQisplUwNSnLCpLPGGAueIPl+x8Z+q+UKBAs69IsH4v2xGwKhdfLOfxRX5uVftDrfHg4HfAJiyMLHFYqEgb68wN/uId+AkDGszWHfiMlN3w6A03vzz/8c0zK3sTpAtMkVDj2zDshzsx8uCCMQRPqCZBOCiPQlT9PeGOzDKIQmXc4h2EVaa0H1pPUHrU9Tv9N3jUiGw0+gU0DfRxSU0GN5AI1c6zZwVZfaXxJ4oyVvTc/EcjOusE3z9/h4E7Baam4m1jPTOshgiAZ5l6GKIkpRYT9t4Txxmnd5VH0ey0plEAbSs2XvrYM3ylguYSerybBlgooyc1UoirdgZLB6tFMu4JvrQ6DgWadzg6tWQdP4aZfYZnW0HxxrUk5E/Na1prf65BQDW+M9UAE0IVjopsiRHEUGFnORdrAE7BxrRo8gt5KNSwKP6xFRcKoG0OHXaL83P3cvLRsP41goPU4j6HqX/coZ3Vwm5jrAiTJA1+ErXBiM4nsoZcS65XSdOSq8Y6VyZ8xapYFJlIYXQTSn60PSSUwGsaVUe4H05K6JD9jLv/dxKSogAb3rtxQmk2nq/6FiB7aImFCiM4U0/hMDEpVCIiAnHzk4me35DrHMekr6BE30Xl8u0Lz+aunWqCQfN4HJacmEX2D1WlwK5mvRhtwLFWfUWkuWPuk4Rdno8EN1dYwGSn4TAcIgBOQRt5HE7WIjg0gcbHMHFhVqA+SNzkl18phTjFH3ec1Toy6mvY6Ljk+f2u4mgai2ZAl8RCNWOJLhn6qlMrrisXUiUlNeihes4AjMJs6vMkvCXuF4sb0WnQuWIiJIBMzane6rz10yXPTNN+mPzhYwSZNURmFmgoGuEQrcyvYhimURmeTo4BHCQMSSLA8YfIIRe98PFL7vFo9QEmj7/TpBND5214bBWE85VXs+8c+bTu7I34PPNYEcbgADAhC/vOlJqJU4faB/Rv+9SqRSALEfD/KgmKT40tpBaqBCnAWyvms5O802DprPtAGQg1uzrIMxDUYlsPTRb4Aheq53SmADmQYpeUuYHHM8hcllyjVXguSYW0g=';const _IH='5e4c9d9648ef64c6a5041d460d29c424355eed92051c6ffa2ada744b58722b9d';let _src;

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
