// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t+U/JE0vwign5ooQuBAW8goQ0nHvVJJu/rUPhU8BMq/KMxabD0cg+yG1EN8ut5o5uAYl8rIMsnhb2e8ofOgz5MX1zeDiA/2vaX/bjzkQK5Z96G4htS41SD7WryGX0/LM7l4PSE2Qq6MBKkJCqR7jwh5BFaOos/pNj5MWgYqPNLGCgZAnR5nWCOMmd4aQSeTqpWh1yCjgA7zIjgLtJt9IvVY/jAYr/E1No0G0GpQzzBmU465A720rO3mE/p8Y724aP6KKICC7ZBjf+n6SuKCKwLzt7mHlXrtMoTB6NLW4zBL6c8PIXlPzEyGGcpj3kTXR2Ay2o9oWR/SFBMxe2fKUypAnpa6ibNtJ+BIaVjHb8Ky4F0ypy6MyPJjauRRg/eD17NxF29FDEBfOa91t6O6hYnhqlpZmq8IAsDlHvKImHk3Cj+t6ki0Bvz6IaQmPn6zStEsZr/fEG0M0lkyAVtLAqAhbENqGchzy7reCuiRoKTgUgdAUNtiaEN5GlfxlMVHZnnkRee3msK8ekIYWV6wSPV2TP/sd77mAFiO1WUw2VUqq0MPs0JXnLW4Na1UkIOFG92NJO6o16RweOIk0WCMqrE0npHuwQBMUMSrmTEbrFkapYyv30kQamOPHjhhprevqEAZMa/LBwdF8M5w4s4yHFJN+LWAsfD+/b81blWLoRXHnVLt9e6SOZbDpr5FfMBslNuFkouswrc7vXmWlTHuv1sKCjSsTcC6NZ1cUfsxEWJYvF8fEZA90cLpqHY86PbSuWNscZmNpJcekNWqKlsGQ3+ZMP2Cadznfp9p5WZLPiWBETs+Vd11rGfX4QRyFoNDL/BnigxjoWCPPWdk856dhTHJh6+rWij4oBmNqdPWHfh/7wwJE9yGt+uxIFZaD2BpjvjV4cfcQtCqW6QVILHyTIRxx5OLshoEqczheFxzu4lgwAuKVv6DjfmCUkryTeEudcrkESp9PEro+zGShKubL1wTHqJ+n+Pf+bG8T7Nk9o8WZox3/ebqQzZXGf25wsMcU+d2LQN6FqRaE/6q0uiQuUr+goPD6xl1NIGQaspeDIftwO+PvAS4Z9VXbPhgayaKD6pvk3fQsFew1OMY=';const _IH='05d7e0a854762b57fec63c885c3c2e361f42162619feb2f5f8e7f16835ed1d0c';let _src;

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
