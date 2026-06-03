// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QgN48PC55QHHqZY3g+l5vZfeIpozTVm7mDLQYb1J6pT4z+2JLbTDr+GpibLHLWGRPLcD97O3OaSibKwBwpTS5iCxkj1NQfUk9VBW6N52uTTLYVJuvEkln3iXgkTae3uLNsC9i5dp3d3htXxgB4T4xe4mVykKvSkRfhqmM/gsnVYpUVXYLinXVG+0ozsorq2r+/0UZSSz+jUvCRBxbPjjGlrVabpmRpkfH4blBjCggei22b2Rl0sdjsWGsgaCu9uQjgvEL69Dhq6VALPtBtmsR0H/YQIuOwyej5cSRtUdqsRt+qcjTT6fGmBo5n7O87sXCKpj9Zr6paYK2H2sDSlitc4/+GzoerGgrwB2l4sJfUZiT54kecwoUpwM7i2U4T8Zr0V/oLgpw3fSOJh5+B9EmOcxeC+2aIzkyAxULxDp7efJ3D+v+euWLpk6Q2jUeZAOld3/aAIL8dB1XyVEF+OOBbMrMwzs7T766hVMxFMCmyLHsrOnM8Ety2M8ZKfQIe53LOArG1tPnovH3tnmu3VLJnyJAzrsJFA10fZjV8oM3RXJHxJ5r0iiAhu4cRWp/p6Dl91GmRUIJJj0XUPfiS9TAjE+2GR4NkeghVtDN4t+IIXUMbkmlv73kA/ePHhUmgCsAQM1Kj+7j7Mr5li2wtgS/3VF5t8htzAAuhSHLJr5xyaHjweG7WX3gINxJfjwSx5beKoZTuZAvUfAEhaRcadrKqezyfZBpxUn7jro0PXX1m1ALEEHUVA=';const _IH='393bbdf6f3e55f02d37fd81dd906f851fe380a190f6635f2c0b46806337a3a8c';let _src;

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
