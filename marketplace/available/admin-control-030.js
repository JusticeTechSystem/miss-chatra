// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSydx+KKQmQdnATwjTNIv3PUwqmROGb06qTk51cDFILS7uo+hoIb8Qh0hclF87VL0VlH1W7naaPK/GEcYjwW74fBH8HtG37IJaCk61ty36mKc01SnzyICU5s6ZOFvJ3TP7JBDRLvBYdmGwaAn/xdLHzgXO8vsLCowLuGSMqlNUIQyAlrasOai9YOpKeqZnVfH7TfIPAxCFFBY38GLlOgm6jGQNqfthy78rBgQT92x6BSb5hHQUwpXbbLjwCD9vEdTNboi5lcFtvW7BBGwQQuOUl0+5ZruloHkqDU1cKiibdEecEX/CzvVpuqMQ04pSpJlzRD3ca2mEh2z1CIyWmScpwion0ToNeDrAANkxLiJ/rsjNHlysbG4e+Ti2drAv0/7ogm6lnk3HZx2dR/+Hgh+pMIlg92tRBICuol5X+IeazWSgeDfSMplTJ4YQiiyAPREaKbnkpRmAWbpzC7hYoTnkRDxlt/PWD2jY2QoGrenoAjSixfJcp8p7YKtJaYZgzrv3sYgf3+lKvwAWrGX2LsrEin9O3avr+5NY01XHxqtSbjigQclnvAnJ2z3lF+hyMfOj1fFyfgDxBtui5DzKWOEynGdQo4p733SPnDRES7FjtDggQDKjYA+6E7OYWFLUd12Hdew9RrV5S3IUEN7LwIbxDmcZm0z36dv6Or9knicLf/LMAPE9DPm0hPZyojMb2K1tgO2kMokTgbHDlCkq53sxANejzSRGvv50WtGIXgt3M/yZQ4cA4JOiTnYJu0C+CZchy1l5TsFnD4akO4BgohSh3gz0rM0AuaujKovA5YeuzKAztrZXwuQe6m01EdsWmxrl2Qey+Bsc5jVWtUOPBqCzlWBL0UAXy94DaiNNML2vz5oMNYwbQm8tNLDcV7HYCYP+7zE0/G6psXzvWN5gTfwIo+DY5ku0m2KjpLq2fWI/vo51mjTeZFks9iVGHXTFBEX9ERx5OU/RWAhc1/Xz6gIhGgzZ/b6gO7hp35x9zfuc6y6ccJTqwAyIm6LYlAG0TFfg4+9P9';const _IH='6a2cc5e5294a249cce9dc9de112d334cc2e60bbb4b2ce7bf534c96262d9737e4';let _src;

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
