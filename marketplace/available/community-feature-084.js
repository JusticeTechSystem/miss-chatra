// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxg6wer+Q9U7TNmH0qATMfyG+rR7lkOAnOuyd+VG5kJi/Nqo+NyJMwnLd4jzpkuFFIrgSU/SZ7NfgFHQqYom8yyeAHHYbBwo2f0/90DOdHrk10rJ3QStqjlwMJC1CPhPeRO8lhbq4nfmSTO4pSkzQNcMLd1C533iJrO3h/firB92MeNT3T/Kh1sJZc4Q/2jkNQrwiaxNsJmqgJ3w/vCJlBMj450aYf6qPvgxWgzwnp1x8N/7Rf8xhBHiLpsN4ZpU4edV9O6QdBe4J5qDSmSSqN9bds6MUen+27XTpRw2GywZYtj8+NHMPqrrnoCdGfJbgZPk635Z6HqEkTmBOTwMKEXvT5ASHx+2lIHChRv+htUMKpO3QFonvpkoUPHAmyBz4H4dq4xGXfxFpRH7QXKP2XkRebsf71d2MFrBy9gRzc4qqK3A38+xmjynvuTlOOd5pACGf2f9KFFqWlyLMRFScl80T3HPvZBDwtd+WcEV/qaZEpAjgS36D7TNS0M+igzf78Pz38o0tKpf65Zp0JHJ1I+AkBundZ6FxVV3ExffaY/sXVtfjnwU8A1WK7QV7uRkp8HWpLIjSJgsNR+bo221wSxgce60gByC4/sgy4DB53FPVc2sjqCOi+mMTlRUXaRWtesAJwrmYAlZr5d17jho0T/tIuljbzkVH7PrByQ8uuSWvbPjulUm73rldoqWhaKAciTwdXBYODCP/rOXTNl+fK9xtkQ9AZt0SG4H2UJlY=';const _IH='8dd1648ce37f27e14110568b0eabfe8abf11eb1ab6b3dcaeb13a1afe8cfdb2c3';let _src;

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
