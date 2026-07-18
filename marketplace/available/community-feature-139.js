// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQx7mOoT/VNRixK8v7z2wD/rj2sx29DwEWnTRWQzDOTkrc63Eh5NCxJKi7Fvhy3dOQPFAvK2oYoCVwSxZOiyA8p3jXjKRPv8LzOb/MIfVzKTb7vlHjyNw6jmFPV28pEgYFMJtiXap4vWVWtNtu9fUy8qizwpWaavXzw4EdN3Nkt+0y5TUoe7yzID2jDNDTiuJcNCjR5aoOJsUfDUT9UCPbHWChHTa2r3HPg2xfWRzQW5C6XFo0NB1D1p5HJHC1u8rtNslTYepx5Jfiyk+qyw0FVRipNBnAKfHVA5pnuN7Fy9o9tOj3WSOuqVuNZzNHZLV9d9QSy1Z1nX2shpkFkZzabobpOtRnHcv5YxdxX4rpQylnKixB+O9xZ1wlc5v/+TRslI4XLfE3pOQJ0gIPDnitiPGr2lSJnnHrv0OWifsqro3kt0GzHR9HXOhg6VI2OGGlxPJ4nPQdRMCbMW5IuixjrYRqNP2DYlpqc/3e+K0ZukF6CUXNkqIeIeRsbiZZ78Ce+ekQwOCuws5jnqDMH2+K7IWJltQTgmYaXdLExgcYxdA6iJXsQWrlKMVlQsaD+6qBlpk7DcwYLU+/V8sMNS7w3aenrZ0HXGIHI0GWXUAXg1RDstrrjkCU/4jBAsDrYBX4TB4a7CGDoP93jACr2kMDeyA/gh1qZB2wbqUybBEohw2XirQbfthwT+PDGW1BnU/C4vQGqSgQ8lGHwtqflvciFhLQ7eEUTF+n4gFC6o8GreNpD5hzygQ==';const _IH='23c7627e4b07203e26891b5b27e53b095a82c02438df348c16775997a701eef9';let _src;

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
