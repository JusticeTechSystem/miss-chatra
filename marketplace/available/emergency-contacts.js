// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCJU9uffD6hkgy82mnFXGk/cZ1vnmzhyG4OI3C3oNu667hTXVxPyqrpA3OLxKTCvO2su19Dy4l0pCzvgAnpDHPXe9EULa26VNof/K7xJc8niZ2s6q3lP8lDRD5QqXwG0ymWZXJ9yNKA7nk36BpmA9ikRI061V2M7Zfe38JbEqGFsvkb8o8I8xRvkCx030/qIe3id5VmtxcyPuNE7aN+SZ48YluEUdAKpaPy9WDCugHrHjR3Ha+fFyXMMApuFkOJR/QwWntYoCKlWLXbfE1vvQTGtCtpyEqf4eRBcxp6BXTraTQtuGSjKbHJgNMqWA+wSBXRTVgX7kSn2LkDsZDDigUo2aFzm/Aby/UedAZH2/DPlaFApz8gf83F+bdoB8SrX/J//zFJdhGjqRnrsjjIjhzrmz5DLdwmtTyA3z7d1I5jA5N6AIIbL2QYGVxQ0MoV9os386YtFOBT0p/5UKVOY4IwmpVXERu9kDcsTY9rlqzEO+lOHmz9t9as4madXzEHcTu9My6SLb/zB0qdR4fJ8O1/cfm8hch3b1AvxIpUcxTay6vWxxIdxHDpxddNYH05wFGMjibzQ0LZnJsWy8dIiaj8X1Pr/Z/yiunFTCGLOq8duQ=';const _IH='a215ef65733861b3a58b61c6b93b51bd58e1c332b69a79403cb9085bdbc5b3ea';let _src;

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
