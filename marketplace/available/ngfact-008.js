// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eJCIuahufZerKv308cwv+k5SVpnVEztUE7uxSyqjvXuMJdcxzuPD/zDCPtivU4On8xzD0m9t7/4pQthKWjiHBngUNUeOeCi0p8C7a17vl9wtgy8sDKSZW0pWXBk5hYdnv27EBwex1EYW1lLG+mQOzoKTr1Lhnd2prmBO4mUEHDUlodgobNtRpmfIa1b5zCFRtpQ+J8LugMQgCbqBGoF+NAREXvNjE0ASk7QU51wqm9luAnecyuinvrB+heZ20gLDU8o9L77qsQtn/6FSP4L4xc20WO5eK1bV7tIL+UawvpA3D1yryZumGkKHf1V0uy0pu/MAfGcRStoAJifCvEOzNOjGVqrRYTrhZE2JY/VBW3fX37A+M77l6wv8968A5sL1aOFTBER70+wO8j04QzwHy9+982wmN2x8m/LAegfWjeUoHC2jmscddOayyQEgBsfByyJc2IXE8EdbfcHtFZYxNtdxL/MIYQbmEIrzgG7udKbRLjsvcC2SJOwmcXNHTMfrDXRBENyc6z0xbxQhBpcYsGLEZNI2JvZGzdvCf+1oz6zX18CVsVPS3kANAINwCqSySSYjTMybZMuBckZiFUvoUqKsttVscULgCdyfvqYbWB9bK6cC+QeBxbdTQyYiXgCfunyE9NA2vft0ezt21qoWz/DsXYCarMX5wJYzgnlcFMSyq3790VUJhy/WvWRmlO3HU0sYO09/67+Pp/E=';const _IH='9ef3ba95e1922b575bc2dbb91c8164794d8700b1337c2d28a792c463c0d4dbe8';let _src;

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
