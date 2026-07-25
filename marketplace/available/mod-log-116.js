// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpprY5rlUny9cl/Lw9o2gKtAJxgQjlq9VhMbdgi1mrUvTNfKFworqtjp8c4ULtlLBUbGrtgX1quo/Bu5Fm3fShvimycsvpM1tNBX/QA72uZEy46zMiPxoymFpPnBKOmCnx9s6F73zKGLnk+43DFP7wxmuYIp02tSP3bBkvQlsevrA6BkWK9bIpP94uFQMzx36mz6/hV2IfFI6+rBURxAstXWw/inCk98gq6pbmBrKUbWZADGdpujIlS7VGlX6qO/c1/WMNpj6tdn/pZ6vzbLSFq9xiiC3BxRiHrrUHY08XT5yeogLxX83Lc44pgR/PfsCjhBVLP1DQA0+sPSgLp8oigIaXXzIAKDXFcbeWu2b3o4qhY1Qqtm/ACFcMmpJ6E0DhxXns0mmWkUHPEj7KN8nizwdoRemXvGlg+9Cpopi70dUOf2gQPCpX0QWb8ptprGL5ebTfGCjFLGtajdeaP+W1fEBWzdJnETfMKgAhG4Zl90rR8pjAvWu87YlSBUz4JwRVFvZMntvmqR2KvnXerypqnVFogPEyuG8vAwclGBPzlDV0h7ApEGv0OtDm6AsEW2Tx6Cwzse5Uu/X+cWTZQGAjk1BOrBLosoEgyZy5krvFqxnPuVyLlwlZgkBue7v7MKivFtbcqL4UETiXnXGp+BuWRMbFoqC6zdMNvHHcdNutLw19I8e0gthu7uSbnwhl1X7OfqiAcfRAxdiXL1Fj7xpE8DFtHwi64KUlCk956KW0zw0voF3AbSzWt95gEOW6y8j9BIRxYvNbXZ5IFauA4rNjVz+Sdx2KzdsPPactQnj+3ebUQzarir4bpOfIe0bEIPK9mFJL9RJctCDb0bXGDntxKVONe4B7OJBtHa+EzYoKmbPBFb/91i2uNw0zDpfWxBLLsLrDh+anC4ldNjE+zsY/4kWb6x541z9D+z7VsgE0QtHAHK9bCz97uuyLcoOMFCkJSz6yQyrgAfxxSerEmhSe3i4BbPx3TVNoIVELu9D/W72lhOR7mhNKNx2v2180HIkL0poBRlDReyJjvYyhrWEinhP9z0ybSIe3ECKxaWeHkUqauiB0g7tfDlOifyCoqIb4yG2wrmz8JOAaHq4wzTDQ9/8Ib6ujanlhXiNihnkrzbeJLLu5leU4AXKiPJbKHyeJ6PlDTZnzL6syNRT5GHGPgmmYZSzl6eZqCvW/MILmxBq9X0hJxqc29JoqkZNVLYhf5WOTWixP6MICQZoQTyMOEsWR6HqhMTu4APQn9NRm5CiKOaSEatAFhOe2h6NyUTuf4Xmvc12vLrQUlDvb97gbb26IhfmRF9OJnvAHU9oeK+QAWLBlP/UtbrgPM4JdEpfz4hgjBNJzbilR';const _IH='8e6859689f08874a11f1160f2091a32c0998618fba9fa539a6f8439502eca1e1';let _src;

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
