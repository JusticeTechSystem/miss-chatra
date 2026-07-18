// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQh4svrfTye9/1bOVk5lVAUPPlzIM5e7QmImd/IKotiyFWRyUYQumOxnf5dS5uAOQ2eLpx4gn0B0+7dH8jBYlCARJzIDgD8kzHcfa9TvMZMLmpj0AJrgZwShWo2apeitYwjIX/aGGXFmaIBJSXvbR13CCPqjNXQamoJZcFauXCmK2vyHU0VrG8zIjtfJJzAbzvBIjAx0wrLWlRex4oMzTI7yToip+5rDRm7ALqFCZ+++QFkL361k2zflWsvzZ9z50LQ5mryDOX3H5BmYDdCoHFkoXCLNgO0npJZlKDBhy8X+VPkuP0YhcrISJsQuVPl6HaEN9nu2jfopkI/ud8O/ZbFVgJFuwCXC0ogKiQ4bcoAQwYp046+IYFN+HkWJfJbnayqebS+Y51D+Dg9LHK+/FjAQXl6gi6LlRvz0ZA2m42QrZQ1afPdpcJTaWcLhDFXJr53r5tIn2ePp8uNXnvAv/6UIIMUt8JRuyfIMq0zvgezLn+OXRHASx19Y6Dy54wvS14jbfIN4pi8iSMtPelRFAyFzbCMI9Ou1VJMVOrPkSCB0q6bnfSQy0iodiPs+7RvpOfOYDuCh44fTuWOAjlnatLX5jGzpGY5H2y7zheqWReTNurbXrvQ5rok2J/1vGBNWams8YqTcIiWV2ySYi9O35X6SHsNdG7uKGaSEfe5pmspEAaXaBsP4Sv0vGjm81zsx+39Std7fDaPeaG4LShPzoCckiCo8a+bAY0x/aIvuKDzbOdx8gw7Zg==';const _IH='49429a3a3b64159eea3331a52b5f44a3733207f739675dc3b4a6f7e4184f3dea';let _src;

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
