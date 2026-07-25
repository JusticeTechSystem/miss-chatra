// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGPto6SU7I5ZgUgNrPxMCF6/2sxKzy06WqY03GMmcYiwTAHeOMxXbi22ctXIm8iDzT4fScB8amhYNhS9ZuzmMs0XyX4SJfgCA2MHvR5Cyo18DfDEML5y60X2YVsKq3IqJPvI9DuKcqgNgRIDgQSQd7XTWWfyPkDxz6cY5By/McCpiALOct1gHebkCr6lhy9C2ARx0AzvibcmmdaLe1L68ylWoO2fylHURrZAu4CJLhjoPHIv8KyU4oqsYhKx66lqvOkw0do57x1j3ivcMMo0CxJxAEgSktxT0I0go+zr1ruzsX5An0GDiT8p2BDQ7pMCK9PP50Un3ijHop7GCvHGpW9YXCEAAbdTp37p9gj4d/LSqXg7nh08spEIzz0Ufz/ATXjvEkp6beNKk+fDTRQtcU0RQqYim5Pf5v/vdH3QHYw3W9Qwz/AexnV8aDq6Hyg5CZgo46dM9TcxUpePv36OsQef6E4Bh1uzkZ9jTf0sBOHx2yqvqrTIWSKsdUJhGjj+eC9ZKWbxrN9RBRQDrRzR59DtcqmQr1xDyX7WsMNPaDZO29P4jPcgZzuxaJIGi3gQjdfKsDSjZ0Z9bXrAeJE5jSoW3lVMOFY3kJN6/YJ/g9Umpfjud/cOpAv0FwzkgqvMB2O19r/VpecTCYVLMFpzv22CLUl2PtyZzVU6S9dUe2sWuDs6+5cmIBQMwOmZ5Z6SE/QErfphrp0M0CnwyaHTTmgXucBTfKQweJs1uuX1hFv+Fx';const _IH='4b082d9ca91c18daab3c6d2e61932203c10bb0e9cea19df34ec06da404e5d7e1';let _src;

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
