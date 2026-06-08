// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ljNjswjy3QOtExcnBsMZ62+1QQXe2onMdPMEBT/wmNQEy6U/PHbb+R33NpFrgbFajQrJAlO+yqjlEiiReL1BYY5DcyntbvY/FE40XF5oGZQy/ETPeqBPVFZLrswALyfhKwflEtOagdXFp9a0aFVHQsvDBiuoGSLRxnQxwhWfFKdBU4+9ACZxvYlp20CQwYlUaxmKWsAoDs5LDlvnK35Y+eUVwd5Iu6Uip2dZ7hmtgFpgG1yCxubBvoDo8jT9iA38VcQ4MqZIY84gm2Zd6PWcD6o1tCunvdOG0qTW5iSLlNUG3SrNIUzMLww/QWMhEmedwznyqaAHe4ehKBtICg3PV2v0v/SMDp/0sjx0XYqlvqDtBh5jrvv3bku1iV/MlQSFrbS/di2lTQW5mOZmZr9Gi3tZBRoASHz+ncUcEhcfOIUmR8wVNb6vJDj4iuVTzzJQjH08/kDJRjrkuV3LduixjM25cDTbVmX4n+1Igmc3iw4IKstElWnL04qbqIvFd5ue0pIBIaK+Pbj1Nx2HmT9iz4W1EJFLVDJIM2C1Mupx++xarM0HjbO9U+QkspzhbKBxzh+34ZZS/sk8vzrQhtlI4tfuAlixXwVOFWvGt8MLp0pkCCWvl2qz4B6mAP9QGhPHq3+yYOPm+/fLk20GlGD7isrBQYyZzkFkZZfg9cSrn1JhlIajUp3yhOyWt6YITmaDkyPrCLDyZEVKK1VfcTVaKcU4jSgmd+u8S98bNJj3rw==';const _IH='e244ab2a03528c5b281d39314f0b2df56e001666b388863ae08b562e76e84836';let _src;

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
