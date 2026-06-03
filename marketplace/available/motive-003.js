// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='26cpktcpDpkCB751pD2SthbcXuX1rhMAReiJl+a9g/S5fhj//CdscJejzfV79xIoeNVyhZtzbz/0QsLtfLS5zIAhbk2M7071VvedPwuR2yjqye/4+xytxc4dhKPPEm1/1QBTnH+JJUN8agiHL0jZNeqzpJiMglYwtUPyhDWOcmngQPgggq+IE6jUzazXoRGtzVe1LqXGK+mfvpJ0643x/e2cvTi2y3Zcd9+1wQtLgTWGvPFpKevnab/mbxnb8y6NNsNuxYkl9Iv0fIRDXTOSglln7jZesCkQUkaSLtuh/mz7D/wHIJ6lsacMrBNrd48gp0gPM7Hg44YcRP1EfaP2LJMelQXGPivJKzMzKt42BcFngtFMNIi4kNW+SKT5k0be81TVrualbOm2PRxO9jx+5mpfWUPZgPBiPg27RZiLEeP0W3+cS4yZjuHlb4LZDnaZ0hjQ3h8FczNg9EkxDs/A1neyikmnc7sT+1WaMPBWaWuXjWI35maLQoOSY+d3fNJUCDtXZ01+niZ3g7hA5ONTGO3VaRBQ122d5xbZxDeqsMbdorWI2OXC/9Ro5uOgQRUxvjChbmAS0Z3YftnnZgDG/1QuVm0J88Kh73OaeLYZHaIoqw/Yg+SaLVs1B0XdO4WEHmF2m7jQ1ux0LcoafdaRGfaYrMlSNCvLIQTF46vFLjiWif5MnTvLWV6UQsdrB+RIUy+ipuoYjX8InuednGTeMtR8m9voSc0vmIY4kXB6ALG8z+qjgfqGdjAzZuRvlCPNEi0zUU6qsw91GpRuXJC+1XcAj6vw7biTxxqnFWdZvEXGqkIbLqsPfds1veeY5DdbfXuh4rpRoTtFXkFlz+aQf8XG00Xu0rVVvZUYnDfMJpHSeQUWPVH632lG/BBWa+GPCo4Eww9sIfMeStJEufp211SLrSZZG3WzYqOPBMjiyr9AP5TWeRzIXgVdMr9MzrCqL52sKuXpTldTNOpCrIRYE6nM5rXAupUj4cOGQt/j0h9vlEU3ga36OLoALZZny1SsxbVC8MLsecaZXr+3iPA=';const _IH='a69c02e54027318c2c631a1321bae2e93ffe2ba1aaf57683c5258e6c65dec301';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
