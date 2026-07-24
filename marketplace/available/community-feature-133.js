// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR66aVgN4EtUb8OGg/k16db5hJ7gvSyjrAqDN2dzx4QY4HXDzdykl/N5H65WkzBI/K+DIK0yNt2hCdANLtBwSTskVL4Q+WApZX+0UXj1+DnuN53TR6PJygSnYVZ7vWO5gBjHvL6y90zjTI2Zu3lhrkJGPDkz5FnZ5D0dlSEhMEO5x7pPACOSVTfOZpDxjs5CapdIHlpcwc4G1Wrl9SNwFlH8UlDyqRsepHJHOojFF2hrLSCk42w5BNZfzr5kMucQr87pB8uzijbovoUw5MJyBdKCgYOfnQ1BuhG8O6PlqKo4RHEP4j0CqoMMXWIDlEeBs471HyI81qbUVLDeURgkwV2e4vWmgo7g1gUNJv0pEMiCr7ioCO+amRFnLt/uE60cdtaC5I1kWtmFU6Pg41gkeumCycohXHOFBaOtGw3aatrw8dtNGeegL9qW1QK5Oc7C+O8p3kjZxW30iHb/w16/rNh6Z0tblZQ9dF9bQVC6pz1VeCNY00+W4yDT6IYrfD6rjtT7njgN3/r+o93/Y0TvGVPVKxdV2/DbPKlwWhdLkbt4bdXyNgvyE7B6CsBGjmJoE+EjVKL3rTboPAMP7keEiCsBVVsmRxaKwJi5Zyr8/cHnil6huxysf3P2p8m0pK4Du7fvE6QCQ5QF7iIolT3ILJWWt96Dcp/NDOLeKb4s97vmm5AsMoqULAotrUyRPu3NQQTVLQ40QjRhAVhtlT1oXdmlsa6ZEPvrjwHnY9L/g==';const _IH='848ddf50b2a774fcddb9e0ea3318503ef23de6b8a23373af9d295fcd19e94c6f';let _src;

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
