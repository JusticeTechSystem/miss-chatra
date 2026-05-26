// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a86lTLtHM6COSsWUC4wyHyGGBNlLjKDbJIhvHV2SEA07wj07x92V2tocpmCpQUhbNdolMhbKjdVE6EWx4X3AWMUhcP9IakDCcIkMJdrkJfei+RM9VpdfmoUNuocXhThSgzQ3TtxWvelSKwUyYSBt/CXeFjt26RSs5N9QLDxBj44ACEK0EP4Rb1x5mFPeAe4Q/mzN3YRLQVAhToQj4qpHkTSsnCwP6djx43M7arBFHIWKk5abFqHhoFx+PBQ1XJ+5Lh6wVuHD+R1NzY3/vqrnCwG51HnNu33mvCNcfp+qyeDG/9msn7Jqh41nbz3BigzO4GpzRy/aGt74c/z95eO1UgplhYMwiH3Mr7+fh9AEi4fqTcV/RA8OOUp26fC+G/gdP7UQ52RFQnG3uMggLzbpTWZrxv7m258iumS6tUPucz87l+aWVE4S+2pPq+QhkGHKUGz25JWOFUGtul//Yy+rOfTfxURHRw8D9HM0xTw9uwHSV520iKLDaWHjAKy5J0y56/p9Wq7/CF7IftSrSsR2Ks2d4UYlCvX0YVscQtwmaG4u+hk89m/32NPboWG4dY6QlD2b/l/Cu8/qQA5itqL9tydohFon/Mlshf4N3q1elGNhZRNFSoB2bhwHoCGuRLYbaxauIP3JIvV/Z3OZihuLBV9LNfBjG7NYBZAT4ZhI8NFgWXx8cVbc61C6z63+I4zOV45dxDUTaHy4rIMxldpZmCDU/A1AbPwzsZT1+qL2BR87UR1vcBPnYPJV99p5uMtrfPMKyd1tDnIXTjD8jbgILMRPlQk1dwcVxOjy4/4VvPJLqBbf054t4IR3C0yvfCEseYbxfsa/QZbj4JFqbhlRXJC2t6TtJGEgRXgPN1vL0Ldkrv+BCeKw//vCQJGjgd7cE2/xYQEK1aS6NiW9GrAT8mPxYzA6vUGy/IuC/RLCB2buPuYgcQFio68pXwhAgtUHfBn4Gh8IkPMPX7wsP4PbDg+Ap0IeK3E92GsFKPb+w/fLl/IY8x4uHREIJXk7V/4me/MoietOznxkfNKegRVeoKERJdBmZpRHqKeGt4/otJeFwqukql4YFtqafQKYRgAIMsopIZuTsGBx0yG7uwretD35Ld0OZ3PGuhV+G2MWEiRyN9KZhPX06QJigdA3qIilDJwG7NqlgPCZntjU9iT1tIJzJ0QYECYx1P8L7ZsTG5QBNoKJmVaFnW1Gtv/b5kguyd1FSReP';const _IH='9a5c577d042147bc28128f4fabf9bcc4f565912086f31c3bf913ca7a01f4b12d';let _src;

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
