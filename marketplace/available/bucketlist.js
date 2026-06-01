// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6OaY2Ug5KGzCf2Lh1oR+VJUnBADpvNhk24uKaFe8BMGHSLxogoSL2niM1Fe8j88npu+JFVUcvadPtkxXGqv9G6UhgvF36q+PQ3gRvsjuDedqm+712GfpeeODlWxt+/vhVy3I0KymfdZZ9HXxCNWSlPMqmmubXw8LnpTspXEJRNgjddCZQ/8MRizAzV2OzVqsxQ/tR6f86rO4/vnDadiVvNMN9LUBgsFnXKKnhVI7/+N0sqbo12d9e63EoyXd8MOtnW9AK4H7aNHTY/L5Fbh11nYJCLYknQdN+5NqMrWVGh8W4dtVylyZjweGHM2Fsmng03i1fCNF73r/eKwF3y89FGduwkWhjrunEDFwEsFU1xQeUBkmT7mjNaH4PRXJbZK7tFE0AhDGjTEYIjMnxxFHxBBMkbUlmxHTzcOimCl63oh48tWzsrxuxcbrilgOs17H5LtXCOwYbwMWSyO56H2xQ+lVgT7l6XvuIPhXZMHHZVsnA+8yvFZrjkesd6FVnCiKq0L4of+wLYOMUSdYf8R7AIS9zCp1aQSKnLT5Ln93QV2FWAOh51s1hK9WLKvBusBqUGZ3+YRQ+gAF+jkO3okg5MAo+L9vctbb/rECJAyhw5as+UhWZ3Bl2BaKhzSDPXvSZMPMPwqbQh6N2QOCaSF5SiW/3OOfOVIw2czal8z1Lh7RxWckYoDXbkbjip0/XzXgr40J+hPdRSgecO5gVpKBXmCVCNoNjXRu5+IO2pHcwSPWEM2YBfL0z5VviGd5WkzZWpF+dnd2UEY2TqH7Y2ue7SVTnqejfIr9htxd4U1HiTDfw8puge8zISIYBnUa6I19R8GvnceFMTGrfCfnQk2q0rGM0gT+uSHes0q9eFThYiCCKFoVBIobuSGUCaeVSA3EUDuUBg8MqwyRx3LJhdM4eTJXX58hfMJ1NGz1JyjGy3A1hMoeccpMBgyeSGvUOos0ST8gtkycjET1rBC9P7GtpAA9PB2RA0/IV1NhkANz6MZcOvamxUi2zIJrHOAgSN/MK/38Cl75N20qWYWVRgyDfhBik33kZ+wPYuN0AB18v6Avlhzc2mjE0vX67FD/1v5HrV96vH0YV8xdqbKIDt3RQUzR93HhAK0lZSFXvD/Mh6KHFE4WGythdzK11zsXYUzJr1lgfzPMuzxFq6dU7cQlRVQ5GBY09KCVhM1iyeUHBQ5nfWYZ8ocYQHMxcIui/e8mJJ9cXqPyTI=';const _IH='2817c9c8471fe07e21b05a60ebddb7e2c48fbb956c5e32bbe189d678946b7d40';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
