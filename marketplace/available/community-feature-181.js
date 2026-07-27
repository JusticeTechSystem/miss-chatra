// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSsC2pFeCuLYIdLeAyjWD7OSZNUIZbKmQV/3ju3XnnjV7pRfhgSw0z0DgOlLLnboBgLpNncD8HpmwfOAHxuR7PiLbTc8Mtse+qoV56Fd5Qi733PBpIL9UCJc86hDrygqhpp3JzCX6BXiFv388axRlT2DwaHeJiLSvUwSHkc8Zyqya2V2QmIzCsC4f2SeSqlrO6eT+En4uZSwz+LTruHClcHTjCqhwFq75ZFo1dzzvx7HELxAfNhqk1U1JsKaR858uUafzeuk+c39uMfmrwoShbp8eYxlNRpbWeo8LtzvCIhNdRRrTgA0sS/iRsQORXXVs6ysicUJt55wuvoi6IVDZ/YIFekcnNSriO8JYiokp4JaLMTCRauAWWNbghvptaQ03qBojzV3R2kP51l5FicgAqgCrFfJbhjfCTF+X7br4kcHLLSmSuENpnqlBmRNRe+4HlXw7Dw4Jd4AYiM7vuam3V6URexricnN6mfMI+attWjNIrIHpzSZZixOqMCmhK24+O+sJEQ0EhQzlQPXcUtM6/lZj4dd5oyocAow/0RzFCTazifrVG7uJdS1h8KviX++9OQqrSrbPvRdijww4VOmG7bpjdHH6ewThKRi1vEKackyAW6Mcm93Cpd49qeej2N0NMrsxaa6zJN4BW1o7PQgg/k0rlXysACMx2d55LKRRt9Um3jPrTbr0h8QVvyq/kwLPdtFmRGPd2WGUONc1gD+BbKpRorjCI6Mbs=';const _IH='f9ce06a05b3946c9e1b71449b3158b9cd62e2cd74c69f07423377a9cfd65765f';let _src;

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
