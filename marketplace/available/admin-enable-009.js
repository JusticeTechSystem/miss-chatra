// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lRXP68Q+X7LkVqZ73kRytsCWKIrcj271r+x9zxHjIcI78K0xofdzhlYu/yyIHkiUmsnV/NmT7VHm27Idjyv7rN7o/PGcdEl0Cj9sUUBzkfU4MoS5MQabX3cGPY0qyIyQTfmC8EUXYfMot/Gi1ZgVkngwG+kmlOLwM+trfVEhNTJ/DOEtfoi1ZuzTfPIpXJjTO1OfaNJxriB9CvFKdzJM9eAsIh3ZbNz6gXMJ0Vsy+oSXl2g+kTzzp5GFmsrWPSvo3F7kUKh+GKudIUsYJEPLPrbNzjp/AZ+MMMUqAxIvTF/6/0kgh8WiDBIPAlLwy0stvgK9xvDuUS9sQmsd83M/yVXzyQSaEqfZGkiHHAsE2T5f1UYA4O+MCzNFsttbKeEhzkuQUmlNNmdmrkhG4NluCH7yR3PW5sRJun0jVZeYMrGoYT7GEZklZR/QOiEBtY6bit8Ef3HZ0duwPVIBqFdC8LUSi8e7IT+GguIi7cVbF8CTsOxVi+mL2GFzQuvfNh9kOlvdJvwxUs8mdekJfE58xJaUVstqg19pSTYMA13aM32NgCQQzlcz9AkEx6aF2e4KOiSv/yXa2WUhG1SFcfF2D7sX9mTxUbdyMAY4vanAuvfQ6CziCgrnbmap2vAX6ZldQa3Mdku01QpkWXXKzeos3FkAJRkvhn941eiHQZmNsW3h4OzeYsfpS66uBEsP7ix6LeSNKUEKAQZr6dENYMNUlcfjCglikLydDYzbfih3LC9KCygHJRXZexwEH3fDm+jHD8GpON3NtC79tJLQr+kSitWDUc34lvQ+zRVFM3ZMp2XVBGT+ezvD8ric7F+4PBE4bfBP+YgIgkJC3gYs7KVnE2Du5cpwuDSy7fWZJwyNuKK1LmVbIK7QVu1Wy5qL0Pi22vOQzWSsLzWSALN0CCGXmAK127ZnMi1OANG0hrxgF3gPAANkfI0QT/FNLhCxiOxLczB3eRSYTBiwngicivjvk9Os25Va+QxlXEKSz/BRMpjPIMSnYo0kTy0=';const _IH='b8a40d04ee08aad7320205626d1c160e439124dd4e44023b8cd1d2ce42cb11c0';let _src;

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
