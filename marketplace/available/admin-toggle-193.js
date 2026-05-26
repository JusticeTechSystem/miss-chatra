// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7y15POg60tmxfjq2Biv0xw78B46nK7Hxl4F1yOygsczw0JoGTJzOZc+Ivy5dl7mq1dZsl5fg4B5pGMrRHq7+i6/o/ifMxWZPHwjLnCQhjT0oTuESK6QZ8cvgN8pM/S1kFZto8B1/GUPT33Ta5R7MF2Gze8kTiRnPcjXMkWdAK5is+hBEw+7+hn5utPw5iiA7aCglhuzSdMKkKqPiybdL75uTnGKmyjg2OTgbcWBlP+HiAoFSXsuo4duBmTF6zBpIwSg6SM4x/ZWEHeg/BbwjFDJE7segKw7Mi+OfX5WWhVkUsNART8vNlFvmjI5M7ObXmoYXBjGHIvEBJwjm/S0UxUbC8lmHunfrkkaUV2sMNIzfiDQOhTywElw1ocajyjgIItT/M5j0Tx5iwMkIRqbavU0kTx2QcFCJAtSKfJbV4nWW5NMaUeyFjnhSy9I7gC3cKMpgbzF/7hMaSsTDkZ0gxthnOn07pJFCqeVK4EKtDVRqntMtGTdgpNG9dU9C+TqOJcF9EHsowlXV+cQx5LANzxxAQzb+X892jqGozfGxpEiy4NNUaDJNhYXP/e85y7sRqkGLFZ1MeNFph2qVYttxeG3vqJ93xLhYIpFpExxycLlalWlJE0nB36jbeaIgJ3wCF+RjaG48LdlJS6yGVZ4d/8anZOuNzaBuWdFMg/gmTS/2jSkvl4Jj603dgvnKULrkdKjQhVkPWsyKqfVURe5FJj8ynUbZWy0V3i9J/OaRagX0BtKgE+oX6K/aCj+zmRJgd1ko22zHJBe/YDs37Kn+n/BSngFxLsUTHOLomp8YT9KaX77QvSLUW/KX8NWg0JPC27QNYq46ZDET115EedSVl4BxHfruj3WzCQM/WHRQCGLrtHYSgqYGMQWkgXymqZsuthUJU3q0wFFWZkm+7ro0KjFht4/JbF9/X0FHYE1jJZ1QXGfoiGto299LYGYvZIJ1acIy+5I8utXkEH0suLT/4mDveFRzKRGYYUnbSzHs1FVjgKnatHWnU0FETRG3MYhFdw==';const _IH='bc8a40c02daaf47192b6be519bb1c3c4622b8be19bac19d78c21d78a4fa5b8bf';let _src;

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
