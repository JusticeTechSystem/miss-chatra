// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSrQCseRz7WAyEYz73F1dL8V1qtrBSK7WYTooJTZP4oqVAsBxezucjAHTgiKM2tS70156aeiAFtQIhtq6s1OQXfMWTVZK0HgcaNy1TDwCAAh88LKkh3UeFeJF8SZ8BFRlZgWfOmhA3iopAxs6CpM2cQV+5K3fL+N1dKTBebkvSeRjMpzGP17QynCO5d6HDrhAIQVEiErJAGLpowf8F4pCqLY+3knXbCbTxeHaR9sqitFubvws1EDy63F7xkJcg4udrhjrVd8qqUBVjC9JYUrslGF6bnmeZogp8rg61PGw5g0CjTT1+Qd/kU9xfzKcC2TYCo0FmCj3fJ10r1j8FyY+ulOc2NLktC/l6K9IiaqkDAHYRVpLIsCvjQ5ALr1Z52SynfDicPOsQaOgypmnB5kcJ6fa7a8iak1ShlbxUapXWhICxBNXess71Q/BbA7+r5faTMfk1oAiuwcLUiFDjSuh9z8Z24p5vXXkvCv3eLqX73emJHdJMPzBXbC392pv3a+7sx6EViJiBF0jWgJBo++QKKvuytxsoY9CRRzb/JEJSjaw+tPUeYYh7MZqTPaWSBZUswdvYQJGVFiNsW2nPfnwhomrxGfARoXJj6fN0igCMhvA9ln/TTfLSYwSCJETDKf2aMxGPPDDFRdogHqyQff0CqX4iaUH8oI6ESMv8yrdwb8ePxgOxcEcqxEEOYFXEprXCxJJgrpPrd9kYvUbtOjI/B/vUEg3IhQtG';const _IH='fbe207e68c9b679671066c3a243ac92b8d4c55c70657a29168c8aba3cb17a40e';let _src;

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
