// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o6OiUAO/gVOZPh/p8u7syk3/U5RdWhoCfJb2Iwv/omItm/sX1qrGb/RKtAXiiae2CDqpW8Ppk+/BdjppHLORubFvFmO6Rr7TlE45FqWUB2IQ8g8kXVM5W/llS5oLCLa6fchG2uFET695THZY1uNIzRm9wsQoxxy6p61A0ml73ALANZnJkqclQQxJQMuJe+B20gu/xAe6+ylTBwOYAinkiOEgg9BvOhRpJPQE5ApVgpETpFAgU2oKfFmsghmZwiz6g+D/8amv7mL/DuDY5seOyStyKmffzvu6Vwdz+S+L1xlkd8hxtw/UUNE7cj9j18IZ4Afe3Yipd00In/Dj3diHkvzKbXdjqSFqblk0u1TxSrPE1W8PKeIfrqaxVkWFrZ1v/R5KHN5XLhvruqzt2WezAYIdzz2lLgGwoOTRu0rkAzDb9aRygzCmz8LQzh6FoJl2qalU39khwIPUU3ZfeIlQmRkmIA6QM9O/IYyJbcCHGwolcnUDoK61+uYg6nJ9BBDv094XB/vcESY9xNBa/QpoIdl+XVU/rA1wRG8/F5V0UCLLd6DMkfbfJP0TopIS3yvCrP7WE2rSNxkJRT1plhAsbSgRXY5sOIRrOmLwFSpQ2cKPwzeyRfc8V51VOoUr29ZQlQGG8oQox1FBbLn50AoK7fe9mJSuWUpkxlzi7g76VQQHRS+l0jaiBOBKa0/qB5hf+gx7b/U3dfKTmAU/M0MhdmP63yuDf29/';const _IH='50338e99ccd75eba95e7dea2b64d4c74c086dbecc8718016f6f6fb8eb696cd29';let _src;

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
