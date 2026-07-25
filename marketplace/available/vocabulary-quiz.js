// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZDJSADXf7GhKIhA6Mc5RzyUBLHwL38zx38HEJEAXnPlaHDLHm4eWHHM0oT3Mxp7di/5gK+vMnTEsYS2fljP2nBmMW3eXZtD+qUhy/PLz/Zx8PYlyYrf3+iL3slCl0UQKZQudfqcmwFdbe0tsUxWLZedWwgGfF/D4XTXj3HQ3cLbmANP3OEW6ZrLBQAzcWMvE5lsg+CyZrCt042gNVUCCTHXx5T4A1Nwwc4pknO9ErcGWMMqB7eZiyDUs80S3zQvVUmvlVcQ9Cvl3doVGKqhq0pjf7tFqe3xtkIogCApQd0Pe5xMtoSpwPCro9KsRGuNjOKsMspKTw/b8cqxYhMuUysdTS6JLCF3ayQR5Whg0J9s2+sSL+uWRz3N09j+KfaK2VREK+5bD63JeXIxtAFIZz2FCMlraf/34m9WKjsFLN/pElUwngEYfGys8jPbGGOVNi3O63bn7hv4i/c1Wi3bBG91b7uUIn5gGnKdKFHbfno6kNOg==';const _IH='4df3fe777a931be6617bf9db2cb985e5f56c2b31dda9626505069e27df13e197';let _src;

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
