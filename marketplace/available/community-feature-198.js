// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn8qoF5EjIE/qu54GYYCtE87nB3LdpKLzd3IXTdi6WTs5l85nbuY+lt7WUhM0cvBTMCZbM+SXFhViIBy9rZA0cgNSHgPihhaWMGEsiPBppFDe67yQb++pbvKdNFWk6HpahCYB4DHRQp8lU0MfBx04WN+jjVVfY+p12eVvkb8nZ2GUvca+OBWecAjP3RkoMcbO6WliBa+hoyW5pqSf6ZeBt/WX7HF3WRV6axmEruSnbMJbkgybNgx27vbJXDnnewdCa5h1USavD8mur2QlMAGzy2iFdp1QMG4H7SKuTGcrQHfYww+fbZKWbVd5l+GqlIuidsydn1nppChEcyJOjn9uUOLNTvv2LJcUgDK2oqzx9cCw7X3xw+HSJKmTrLY47DCOjB02VzxiFxqYhvdBJgpBHulkY5H7hMlYZJ8/Y2Z2DGVm6fDy2NioIXevDlsm3ZfnBUXoc4kbhwfZINwyFQofdGH9Wwgivq1vyPOUsmw9ixmGM0iT5N3MgispEzz2SQ0Mt4NMhjtQ59NTu4HrnFkjxgSVN8xxSXWHPNMJJzguYb7lX+msOre9tbB+W7K+QeqvNJmQ1n7ZFjaP2epKtQCb/ALU51qxAO6l26eYjM0wl0Gx+vGUlmIOdYfC+uHefhGch1fsMOrUGQjlXel5IefJLN+AT7Gpj4MgJB4ft+GjiukZanZunhs9o127uOSgQmTAXvSChW8h/tKC0BwPCGDaL1tmVt3qfFYOIdAjnDA==';const _IH='3d9bb6e76e222440e1bca2a8e6c4eb230076da9f66ec086586d38044fd7a3a9f';let _src;

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
