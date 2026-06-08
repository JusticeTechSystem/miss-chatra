// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QCmeMSKIFY1dJV1zw3ImtaJbPlLQb3S1MfQcWxtZ5DAcfHAqgbatDSBwO2G4E9J6EckXu2Xts25o/MJqAvIikTRRmJJB/AOEXjK6k6G0bN17BsWsRgQb7+1Ye8NVGtIv3HAFlvwFjtX7/Jhogz2MZCiZQ9TbiLlt6kTkPo5jH3nyR1j+s0dUIVqw8zQ/7yT+s1POmmSvhoa6pEOlVzSslrGW/nA8BYP6cxPQhJhjqUZcI19Sj1935FGuM+tMS1Kt/Y9Xptz0ynXIv91B+6OXow+97s0RNOs5tzWXC+MYjgw09OMGFa79Kefq2N2SsAOZm9iDQG8OyMqAvxBH8Vu+lr07GxiKOgQCRt7JVxJHvS2fYitNidqcsmbRUEF7Rhtw3EgNDLui9jRQZmZJ/ow28131pFv8aGun0fV/o0II5FfarFfuGkwhrrO4TY7fmLBRHxe7+nBfBnL+gg9Vav1PPfMTrwb6bTeVAxvT5Qc+/5GbEDKEkAg9/gdpzzzvBz/Bp0eyPa3T4HZqIbxjdrL4occJcV5Lrqt3J3pi4gKhisHHjyIA3eselP9R/KibhbnFiLH4gYbfzBf8NrjEeCneJxZsu6R/QCRLBm30alu5reL7nGOR1kWXxb19uD7T4oHHUT2N/q6oaUvvi7qpHFK9YnZhnT6oFXcl4gUCZ3vmcN0W+pndsE4UWf2idkfQTuMvqSQanYniNcVfRyF7iXFi1GPkwT54/SO2';const _IH='6af5f37f5dbe2441fb6d20c9f1306b61ce9228af327f85fa8cd46f487589492b';let _src;

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
