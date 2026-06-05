// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n5eIJvqaKE/qcv4UH503pvM7ILiqJFrbh0z7F7vFteIllt103bjqavw94JHSRrHbOQdE+DUF2TOw2O6QGzkd47BUjRrSOGAWUw0EXlWYAI+bc9TB8K3ZxSOgNwIibTQZgj5ZyNQEPQN0bAQqYEt8QJe6vdpVbeLOcWiQiQ0Mi4yJi8m86jUu6gUez04VGl7r1rBQi+NzLwJopcFz2EFQJWp+3Clo5YRjY7AoShzwNWyznKXEtpaVbrTHNWW9NWZMEBQZL5s/jNDgrfsvDFz9jWG8nw5FfQ6k9kx0ac3N6P51rBkBur9NrI1IvcS6ir5Z8UxuJPQ986Y+5dBXv4gMnk+jqc7BQ0I8cyp1cZRDxwKiazGFOqW4BL9uxgbRsu6tiuNtHFcqyn0CJcZNR/w2I7W0Pc14gQz4Jp65aZ4TzDxNZib9SZRYVhEiaABThIbRdmlHoSBpRR/3OrSC6wt+dP00z4WI2FdYRb9z2HvKH0zZWn3cBqqNL2/wJ3BOaIJLYf/alWOM6yXLfhjMaH/YI/IXE9VNpF/BP86ew81Y3qYvZwvdW58bi2drQ7sLhp9v2mNii30+ysb63dwCWTD9yc3GwEWztvF9HcxpYffBTFU2XjTyEPeoUjAJKHkXDIEMN3hF/VXgHUMsb1fvcuhfzAA6VhV0MvYYrtiYrqV9U/VapKeazXitBx35+K2f2MXowddB1JOoD5Gca8dBwtHfSSVkXY8=';const _IH='2d93cb16289ff3a9b539e681b57d23e2bf2fea2f938bf854fe2faef386a47556';let _src;

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
