// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkn2v7HZHNlhS7uQsqNne3rK+KTiYNjQZCplfvGJi5uqdPFPL0w4cyCvrhzo6FGtmQsXh9r2IW0J//8okP21vuHJ9Gj5sQ/ysZcekyIOw7xiRXJVjb61/fakHbk0w4EsFcab2moPUubKoSHWtatwCkwd2x8LJF06EAc4wcZHUNsV7tDGaLUA2vbEhDSrpn+pjsWDs3rjBzthicYDga5WAIc94fc1rQsJRNS90uYoH5QgoCrUbuNvAP/5/OotCa3qxiui9alsZycEKHDiqPt4ZMkBRwi/J36fy3HASB0Ay9rTK8ChOUwGKO6TtDYUIPmxnZH3OMbrjN4tsdiSUfGEP2R3tdsSf+FJxwpJ5BSbGRF5jNDIeqSQ3F7KfBgpWZnLvNI/K5Przt4zvS7n8yp13SJwjIo0YNWUpq0SAXgRzxPHpjl/+GviTPKm8FPkS74zlD52CD8+iS1SYKSWN+rfg67c1gPLg5OC07Phb3jR81TdAFEjNHnmnT0EW0XIP7rYqoYjrjOnukeV8cmta1Oy/XddUfPZMk9yK8oopASvTO7WQuiLbVgjvSejrnrN83xP6D6IvO6XocUDRV014GAgBhW1zLR/boA/hnNaj9rPd7Ce0fFNFUYXyVNpnXJSIbMsFhV3JQNdRNnIFav8N7UIjlrkfcMlgCn94+Vs4QYmsLiuffNjek51q2KF4bFShsSd0yYdJ4U/byk4Gknd0GErkr7CWhD7BuFU0QAMSM4seEV06irit+QG1mmyzMJZKirHWLDR+E4khV8O/RfDsws5ZWKm3aGx69Bjw6u1M7kcIOSvWpNkVWkS9pNI5r6XkRjgnaYApn67eU/BpgkzPnN1nFstEA1iOo5MvBsAuTNjDPk8X2p+lRkRY7ZoIMLVYVSISieik+2nmqYI8o5UGA6SqiegUfW777S4dEuEzMKKkP0xs+VRjWA13e/Oz0W+2ELiTu6PHqyw7Gsl+qhzbEmfz7FsaKsELVySALxxTEw5x2mOTlMzB7SUP5G2t94BFuGZZnLQZH4A3B0qzY+lEBGs3HRc4qKvPP+JDppCTzAS8v3mV3KHfyCLch03dZEMsQBZEK+99/rQr+ObkqDD57d45cPWvHq/KGLl8+5eDQqIlWNkI4rgjLtKzzLAbUoWEBjiYRH0YDz8Z7DIhlloMhkXbMH12XYyWX6OA0WGq/1t+ntVwmLlhdu0qP5GyNt0AJu5fz3AEMsjV4JjkwS0gef96TA7tdsWVgCSa+sEDeNqyc9NAIiroDioqezaCZI73myvruAKCIP/S5YXIb2n5wrvt9ANlPD6/P0G+Zdc7TMQ3iCnaTRrXxpq/Bk1VUhbPPIIjCw5cPqzXfz09CCQWeNkpiIJhSkQ==';const _IH='7bd19ae42e6edb05a0177f78f5b40df787f3bd3bcbc614ccfe61cdfa9c8db17e';let _src;

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
