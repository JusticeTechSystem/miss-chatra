// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ix24XbHEm7hCv6mMkiNl73N0Le9rTmc2yKXCXQts7HG+GvHI+zGRyygEBts0/pHyHlzgbILZI3eBTcObxKQVp1XbYu4wnH1FO1/Hzw/KdSrJvc3y2oL2+YhEmnHr8ILVKQSabqFIgXoFzSIxy6iBQDSWYfsuETlV5/wLbslpIb5HUwh+UyFkhRHVoVirf7xDORFWpnB4K+DrGvve8y5Sjw/0gW+PBAA1W/Zlf1GnQ1rcCnsOqSiVhG+kKO7enNZikKdnhmyMpUvRbDBhHwtdTgvR3Jpiy77f7cN7pm44UjNQgGmVaJZVa2SAzkNVvUSOmkXUiZHZL7pawQMoan1lstYrlO2PIqPfMmVRo6hyZKvMqjJ68ZzX7wzYHPRXs0QBM2f3gK1uffswD2B+lLip8o/s7m6vPi+VFC8CEBUG5zlrWvvzhCT2ZahkewklygFZipdBGev1FDP9V2d/aBIvP61D9/oVyTW+2kxAcBqWRnrqXz5AK4Ykz4JJYB+eFQEKo78v+DPuv2zCuNU0zp3aKThIgvEuyFTYkeecnLRc9z5wKAq0F5XfScZ/YP39FhObrzbQqZ1oU1KBonlJhGmgZ3j5QjPoFUnABefcnac6+GBwKAjXlBN4wPweGcxK2YiPA9kQWrvGwAxygV82rKXg4BfL+M62tO3Ju01ZwCrM/Yj//cHomBFM7ctYvKYtI+WvCBJ3PlENe38Uvx4zsDY+VSreAXA3qkoWG2GfuL7xm27Hcc1drU+YwlnBXSECOA16x6XXTgrOcYWMJoZR8pAy63tJNGXiTwCGJa1uzV0gnCql+ldCYFu7YnxHnzDHP6oAOj0NsRKrkxywcjyG+bdUhGAkoOU4XdBmDPAeilWmYEikq38/GfBQQvj1yYVeUxpfqjgn0fVlF11RciviqtclHLQXPF93Cmw6gPlEThPEdBtaEy4pLBoTTEiHuKxljKo8QgRULa6amTi+y2CBDfUvheSxIRGuHs1auK4QBUJCVUnQg8CPaz0=';const _IH='cff6caadc88ce33835911a85f0b83a5386cd1bb2c5bef0354cfefcefcdf36722';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
