// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tOVtnfVEsJHCix7bVeorpeFaI7T4o1aZI3pDZNvlhbxeCJ0KTaBO5SJGW5en4g+sm/jGWQ00VlqqDZNqO4heSbd4KBmzfgR3/YN7OAlzPqGcrVVwMmJS9gMAGswdT9JAkIu8MFnpPW2yv91TsXgTCdpkP9fGnYmA4uclmgSQ9nDBwAjANJWhcCPhkOSy/Kfm8ciOIEQB71pUq8RuOUuSdYqRiS1sIa60RimvbL/EPNCF/+Kc8Uq5THoEvswWPLP0o/l2HrH8c/A9G+DOcrEoTKckh7OVCdEFeujTtgGgyovI2GBJeb3Ed05jgiN7E5GjwXi97FTwDQVwkqzSQ+WZ9qfrt+Y0G0MOTfnrIgaxJDLFIO+8hl6n/F6CCkD4lCLknVbJZ8IvsbIUUuSg9ZrtPMRCYeFSJ6RdwiJaB+Rj2LdxGQlYzSet0IZDKOdasOqQXAWjsWf+7UW39OJSAQbaHPduGrZfKpDDmv0GYxa8fzBnqKqfa18kcdSE0ONFuW74QpEvdldBmcWd/6R3s7yiNqYEkXmSglSpnQmvKORzOl2OoyuNdfOfmt2qKT9sFLzASba+bnCnX19sBEr4pPeudLT89KJtBsuHfk5cG0VWWpXV9bD9BG2jspCy8CayDAIqUvja/ZeKZ6EydIA3cibKGAkoaE9P+DantCMUcAb0CHo7zOlQPejzzADh76g7V2KaTU2pXOAhE+HBb189p60FjUeDeTh6IrqpeYkZJjO+SOUG2za8nVwwlCfpmkfAd/FdKdqDKKP0Wz0gCQvAGaskrEMcAgAyjBpBd80sBxHI9Hx/b1K6QqjWBC5mcyTSHho/SEGbFlagHvWUdpvYuirG6MB3+rjr7OJqskOhuvVzYWNe+5PeuCZ1R2+5iT9Cdw53+woU8wuuW8aClvNx/IXeHJ+jqrpHpzOxrTm4ThFBJTXbkNt5RDYPkV6PleZGL9Xa9RTryg6TMXLLGy5ZCJK8bxadxeEPa1fwABxobASV';const _IH='7f9290750c2f3f26db8fa4e86b0d851a6061bf441b9095b5bb332ce1f5152d4b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
