// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfdfrSHZQW/Ky6bQuF9mOtVQD/CeIZ4RBd5Nsdmi/2Ur4N3UMYzNPyN114TFk4Sc7SkFdeAhw5NB3JixD1EF6txzFd+tkYkcOF1ucDgCebXGoEJrTaMXYmFaeXRirIa2lQawK3urxUFZ2vnT/MA+NczZFRUAle15bg7m9u3XmF7CW98pHwTJZ8Fmy1hgTn7ZBgim537ESliDwdyyX0GVandbL5M/ua0oTIbzaid1s+RHUuYDSVEnwGoyRZrAs7dz0inSzTo9NgEU646h1Wds9AtK8MFoOle8ppqs7yehqhcGeX0IvB2R5fg2GHRUlq/ox58+svGxccFCJd3zNvN0ftUIIr0lyw1dL8u5XhmzjN5rL+vcrt7MOH7uTTJCMyiHzwf9BBzN36XPuvtbLbQF6w9L+nHWoId8X50iJoGZbLuECCiry1hTEsRWRrkUENIQmG/+sUXRGO4zp6l4sQ/scAsW4p/YHdxey4JQQfD9iE2/wplpSd30pn6IqzP2wlRXLrcdKeVPV8pyptysw5WCMqXtIlaxXZSJ2mEcupH6uH6DsHyln0bAGDVUhDl9B2MRzwLlBOkotgf+2V6v22Q7FAL3Jn6OGRQYl6JtCSOw7PeCZhRXZP/ZXAEBctZfnB0eo4gRHmqEZqPUMeKddIaK9xKnkRQ1kzh4D9d3Pd15zZLODV24UUzbGocr+kSvodeWRI9sEBWhGwSz77Y8x7Np8=';const _IH='a17aa83e2729dd683cd4e3927bae83c8fcee2bc130bab3e36019c6e1bf17b583';let _src;

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
