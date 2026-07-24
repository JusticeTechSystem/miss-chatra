// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+nhzlueWVPHpoJtTtqnYJ2sxSeEOf9nA01fid/TxLtO5athszM1CGvqjPO4GzkXyK66rYMm3YgHicVfEVt9Md0ABV9PeOs7z8X3U/ZleAZh2qTAmSAFKwJD8yDZEgaOn1g8rFv5flkUWN4anF4ygWVst4179z7J+T2ItpAdlXD7Sj+0K5GLCEdnrOBzzYpDQ5kpxBpEImf1gKGkGzLuWzDcQs/6DxNgHxxawX1MRw7MGMJOIARUjs7NALOpT3uWFVePAB4EqrKzxJNJaHEoeV9qszPqeH6kaubrHSMR8qFzryOzrh7JIo95TM67JZ/JoVYh4FjbOE4UTcCAnWdoGY3rjyoxKDuZ+GaIb0a9dn2BoEnrparrAfUzn4/EkWr8qDvkan6AiEvYtP0LxApi/R6laA4yN1RmDwRZHDXey4iSjydlyQHO4eayLnjYdes1zeUn9f6TZx2LTiQrWX6ZMm9c1bFMLBJc4oZWfU5ygBvdzSDbQwu0Bbh69r2V3W5EfMsJHhdWE5kZrslLbx9dhEnW5yVUy5Yg5j2BfCZbKSg9eU6veEdOKeEu+VTDT/nIuthnRVJuktu8b7nZyu6EBsu9lpBVfrdLy8uZOcPhGFWycthCCI8K9CMKnXt0/QaYZeGbIm0ss+JGHQaW41LnBVMNn6xRvMvZVfQL0tjKGlOtbv2S7tFg0b7BIJ4DwSOhss2qNlxr222/z0pkRLAseBWzvv3Iru380sLBUtdePg4EzSFrkP43sB+EyyXsz8AJ4I0M4aZ2WoJRKWjJdt/NvOALLlYKby0TdsUU7xFmJDNRxsApnjQbgHHLOlMc5TvigKJAtwEblIY82uDo6wTzP04sngEHXU65GU1rHQwu9DlYL5777cJApPRCsKMZCU8i2G7k/vOE7FDiV0VAg74Ae0EKWn367+bmeFsCKpUANZ3ii0HawAEdqMlHsz9aw1X/wagKE1bChBxZd3BdW58FXaS34US3fBY/0bZ7C7hDlt0mAGLmbmt67TjPfdAnI0rgDi52CYFAuWS6dvZDljT9xgKF6aBn0bjXIDFovLTBU=';const _IH='8b814817d445e762e464be590127ad91664ea1536ced1c7f78ea4f5f047bf738';let _src;

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
