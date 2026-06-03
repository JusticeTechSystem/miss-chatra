// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4dMV2rX1Ar3Nz6cuyf7AQUlmgx96bl2LYrykdaYTlZZJN13IlZIj4tqLMH7bJNhHHt/2t9xOmHpenwGHyNV6XfxSZ7x3pGCMvOAZ8V68tzTdQGq/tbX31udlGgA+UORzUu0E2XOWnCOjxPtWLVlX2LbKVcL2fn2X5yaByHAUM5CA9VpbY7L20zcVnVQw6DqDzF0FT4s+Pd3L0B9oBVws15FbrfRZXByhuDJl8TrUmWdTHg8I0Qn4euB8XlGRSVAIJNpKEc0YYhGke6IrQBnCZe6lsZPivMflosOUqN3CXr1NXrFfpXO+SGwGEiZOioMHpGp8Wz9/MbJS7wVK2+bhRKBKVsCx2DkCBFDgFdaoYtUwWVOpteCj8+0XPKszt0bH/tv5eIZcPg2cnbe10/VtNaiEVQTGmbO/11XeYrby72HH1rJKl3yUdEwYNfyu73bSaB5Vzd9IQGAr0Wc/OqocqMjuVM1tOeZKSOlDg+svu7gkk0VdyjiVDOQtgQEhovtSRhj3VnO0KTymAczXr6qgtrOaJxhS2k0qHM8IVmztDVPZvi/N5s/uv/crXheLeXRlnfwI7EcOoe4pps52/hxCv+iUVvGiJ607VISWSUSbDSFixdxpyn+C7QGO6Ar5mCD3GMm3Aa+l0jT0X7j3vZcHYh6Jd9TTWH9v1tuNr4gjQXid7QjCwD86zFhtqzEDeXPQCGcwELLDJlh0lr11GQF1fG4cBuMDLUhB6T9qVx0vOZ4KmC0QO4CzespZJAJ8yt8JUEnwoGcBPuHx8jCXEigNkrC0bURJ6gkl/WSDe7YBX+rSIp2wqui7uDKZaEAZf61lxIUDblz5BMoImZUf+Appvs/FcALNqNCJmF2vXhQ68482NAFz+42PfxdurUuBMHzOgyhpLSMnbCkr/hYF8VPTU3NdROxE0OY4350ML1Vl/0GBXUzFQCsFnW49V1KWGFgxFeMgmv6541vINYQ6x4629Ye2Oz745CyHmchFVyFEOjtJRY1ulh651wTUeoskhbJ0UH82Oz6Iam+pdkr2HzdlYgD9vVfz4wbVOlBvZnp9We4lrXGK/1XjDMYdzCpQ2NjGsteI+G925F7Z/PnmbyiLBoT8HTj06ctPEcTEW80hST6MqmQPC27400666rO6NqFZMz1/BZhbP4FJm1pjQBNY6dt0sPiHR85ig8mSmYyqQWy1Wq3brao4m1kiVb2WfumbZutPJk0A2bM=';const _IH='8efee360e435b2c2acf59139d8e75105807b801c47e492c938eb7f9ea2036378';let _src;

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
