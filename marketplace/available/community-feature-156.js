// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmH2rfnbUJqh4xOkGqOIRrUml+GMpfzBYUrBxsezukXe5cXxflq2iq3ymQUO1CZS8Y+b8yoamyWcfz/fvrxir+i/CkDGThgIMQ5b/rsKmSeLaAhNWx3K3PvQbthQTD0YeTk+CmJyJkU/6QUIDoN5HL5L+0XCLRtBCCTt5upl5DOkrkDLmGmEAyK4tU/YUejCFfchMzv5KcgZw+lyNHecKqQ54FjFvrkTJ7Ogc748ssMgCOUFbza23j2Q5ooDL0WkmEt8NxRFBMk8MugCP5qZYxBdfgz4jGgpTzurKQfdkDPr0Ba/kDAo5z1zBRL9SAZGw3NXCrK0uqJOgpJb9YidwgAAk3KdesfvhRcBYB01jE++Q6hpvL4KyHT2dvK2nJawLbRJ8W8f1tshhR6SXplRQmEnnbXPcpJyz0QCEMictUlT2dg3ALorlcsgCNIMZAe81vt2km74TUwK2NgSHj5e3xGRL6s8Lz+14BXCGKnDHJM+s/Hn0lZPQajqV3+uaThNzLPNmrzaBTzMU5JEnz5djTDeTkGqkGhWhGF7Z/ueHIsYgvWJ6n7QAG3aYiC2ZW2GUtWvd8ZPAoD+gxTLGaYj+RcnU8xhkigHNvw1YMfK2xgUQIvvzbs+F6rju0xWBJTOYT43rOGfgaqkqkpuDFYR7PxcNi9nNyUpyWyQKlBb8CTlVn/E0+92924sVUeyLEqs7TZtf4m/4qa2Va8GljyN2TBcjlu0zXTHI=';const _IH='105d4c3d4b40dd1297eb0bd25a187de8bbb149d737bf808e93c5183c57848a99';let _src;

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
