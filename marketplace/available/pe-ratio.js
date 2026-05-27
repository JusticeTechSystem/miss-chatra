// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ktusHSUxzvq2TSUw+wQ3MXI+UPHmf2CQ8JVoUQKTMLwV0A5oueOVmi9lRShfwryXsliUm0hKEScr7EVg6D+scQvsdJtxU2o4qIpZbvaZbjAY8Q1G5xPu+2gcWse8iTucG122lnUAVNT5J3r3+S+wORT0IEIGPdpEpncI6TOyfP0rgTrw7iFXAjRuUgXmoYRVSRhgdkU4jy/f8EBv6QvmGyMVktzH2CdKnAbbj2mC9WZCtRsITYJQlyaFvJlC8dOB5MpJoiM4B6RxlLtV7czf/icGm4YyCRFSGYFZ1pyu+1QIsd97RZp1usYS1Otb0pO9bH4YARQwYXvGRB27P7TIeoeC7mfdsGBoTKweKiWyi4VqQArWkqhlkhRP2r/bvtxm4dClyvP9UynDG+GdPfBAvZ1K9ns/bA6p2HD2HHrLitONZflxLyIXkN992CRs92rDDnxsFqeRzpmDCGfOWCkNy1PrcfNhr/EVGuUGvbbBfCMhxxb5HIHNWHh+beopn6HJGE/qRGmjwWxVOIVyIanrimjsb4n3Fpy6JVVgqrVvw7I6GSVWHjwsrCH3WeBMuWUUVmP1Kbvj3STqbIWVQbBtaVX1Pt47vBzSbQVyRG08FJ0L/NQxtN+7FJT4LQpICB1yxuq8fr3jNF+XRPvsKjvjnwsLCtWzrXokGtEH7814+QAsbBHG/X0ZFEY+u3Z9WdU41S1/+OQESVWADSwRDVaHvrUOwtEM9hslcWJVZiopJ0lh4D5rXQWI9G+9OnHedmsi+tP2EXEsNmZDO7nmmzJ37CisFM3qOHb46JiiCkPWKWS1I6eaToxrXY7u9Ylhbqkjc2uVElTPe9GkrRSZ1HznzZrc1xSbSbCPu5vVN8wkBUuQfdCSnLPrKIcpOYQcf0hzZfcC9xgYdP6mJ+8oOKLM3jcui9BNxS2iwlgWymrRkB188WKDoUK62RVesLCh1V4VRJnuolN8+Z9n/SBbzlCBQsZcXJnKYRSfz+Yio3LJ7arnoVrq5lfhZyeiBknvPd8uHA4mJt24DGjIQFzIHTenhULS3rbFp1mQFRM5/wAa1s8eHuOD5v1E+om1Bls0ou6zysn9PTJjW4ymyHJGGCvrobzCavP5KzJiWuQb1sMk9OTrKy2yORBI3S5m7Q==';const _IH='6fb27926633b7be42613b1fb1e2f398c1c9f3386d5bebc73a5ddb47e509aab8f';let _src;

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
