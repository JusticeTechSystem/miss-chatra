// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7iBcYjrYxA2USikCtEjKtghfexv12hhsxF7TwGCKHz43Il/ItXR54bfkhrDl3EwrxU9SZDJvC4MlFiz5lCIXfJeO06zqt1gMSHZRnToBq9pxf4L8dEu1h7Ns+xWTBT3SQA7mfAb++v88HC4Kpsz8xsPW06ktv2kO9jlpF466Y+V6D0D5h8kVEjI6RP3tDGrAF8FrKfRCW6MywQ4oqclMothuIbu47rgKnwCSaEcTncQQwA3TQPeP2+hsYZscEeIeQZm1XD87rT22Iakm6EvyMkmstzRsnJD1bYQuevU4ECtC6OGedCRSNVSaYrj1xPFh1weNUx1IBl/OATTEOW8WIAB3sZG0rJnkQa+SYJY1gBJVCm43FsCjapaTq9hax921oEcYZjokV9SPFHaVluBykL3QMh/GZwx1O2DtWR7kvIrVndGwGQS6j0ERJfxUEstCp1JjYn0cEupBLuk77vfBBiEu+vtsYv2EsAub7PMVKUmztZzvAu8BzjB104t/mZe27MhcK8PxbA/iAgLpRPjUMdh5gue+K6+8LL2okW3YphoFEV/3CSMnxyRuzi8w3V7zVbB2EwF/mM8JQtIfm5q9+peHIK3Y3UTcSpLQiDXTIBDK';const _IH='4bfb7e041d101811d3d68ea23d20916b82e447c64b05b32dcd7dae81ecc55550';let _src;

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
