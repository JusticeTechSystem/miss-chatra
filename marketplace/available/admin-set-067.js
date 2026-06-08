// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UhdHyxt8cZBaC+r3Coc43PnnVIF4rbFv0o9PfL7LA7/QsYgUUBvXhY5v7o8HUVmb5eC+tX26teU0aT98b9EGDqMmTUaEIL4rsJYWKmNTKULi2KoBYPcYLvrHjkoEjOQLpqQZyF5mWzTu5VK7GWUd7McO0ik/GBTHzfRWUq4q2Of5Vfrns62Wo21OgcNggeHxp3ClQLAjHob0+YSCpHexb7xUOUr6QWfXgQAgh+3sDAcI2e3ANl9XjEhrE/+J9jIT3Ix9EK8ztZPJskdbTCvlcvFNldZe55IjElGCECsX1kKvmGXWhgauo9wwb0Ge7F4YZUxCw0cg9pHues8dnjMHaWDpHNVCBwecPHgJN+mFSLumeeu4+ugd+y+/lltkSExzCry2MPdpq1k4e5IBAjE1KqLFqPmwhe+sB9S5Fs4JFpyt/U9J+fXtctrEQL8d/WpRRjMIYu3lzVAfDf9gZTawl5ZRkAkPIq47bmhVLQBoDZh7TBF9Rw8Vhdsm3tUM3zpt9VK/oXGwNMjwEce/2uZ839SRMVE+DC55jj5GSOY5LPxMSj8xrtX3S8Zrj5Lya6hrMAyvPb5U4Xxb7mbyr1LdCudZdRc6E7VHetZYCTvN07csiqP0nSfrWQXcEmLVA3nXht4EzlUqU3dqxZ9Ufh3QhAECl/WaEFJdDBMF+yFZfEUvQaGL8x+Kt5SA6+D/ZxCHTiuGxBpRrM/pLR0ELoSSjgUqUqfTj8KBLNCoB4/a44sEbnLIjZNAIhK5jEqu8HpsylLUWWSciXxsWi5fEyp77pa3dAkQxeHpdpPXxLZQHYcUVXgm4bWIAImhaBLSwv19G3dKUbFtwNeectpiPMxlVg7ore7nCo+t10y18V2E40N04mNJK09q4fK93RY2i9HZNMXsE7jihcQge5CTuqUewLXdRrmntZ4/c244JrUIriesUrjDBq/0QUeYC2UTzL5owu2ypzsr8t24Uxmu2/eCxFyY1qjJEcIz';const _IH='6c7d616eb42097579ab5474139db370e2d559ef93db524ffc97a1c80fff18938';let _src;

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
