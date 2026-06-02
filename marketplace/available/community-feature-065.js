// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9zqMBFscd9MUPhz/eTr/57A1umBV75cJu5gVz/8fSGQ4HPw3/SqwM78BxxDFUgrmm0CcnQsjjKb7IZUFItzR9LlRv3pp9ISxVTRfcY63E0WT11pL280y6GrQS7mtvOxZiSJyiBkyZ0irVN4K2plhdvotuW2zS7K2ssAWwSbck35WA+JkIUynL/4ned0DiZI07GRacD7FSzRPqdxTtfGERfbXhqENVP2fNLywpiDkRWyMNCk2NZdYCzHy8zZggq186G9I173HeREi0Cp0KjDKg/iT1SYpZb80G7REq9fKtNaJzIG/tiHPyCM+Ydm9mdmNPWhUNoyryFiY2Fd4kpcB/IPyBgfT+0DZa+afWcO3RQEMNlkYDJYUAw8U22LOuKq47hfoxz6SxL6H8iKP3KE+04yIGea0FNR8+1F/1WqmMVk2FIM4VS7I3oYsJ89UYFrGTvJdN1wtNxF5UjCJXp/UpR6sUNGFqD4VAGpdyvK0beiASZf1TGEF+IMz2VhPlSX4r5r1wi2AJxhwmBPr/ZrnZ2PyffT1w9nsSvVgMnMjb23Qty0pHEBjyCDvl5hZ4Bd2l/p90N04uR0/aYqqDGUx0Pmlr6NPLOhLGJjNIJz+T2kNR+J3+qkjwClia4N1x1keGqNq75ldeBAJvEvjZkuuCNVxoQxdiYBLRebyTVEnGC3XPEfoPw95cTQWaFO72OLLXmDOXp/dWEOGnmoGHWn64Hl4eD1zBEaSWGTu964lizrMIbAoANc=';const _IH='ea73d52a4ec55196dbbc736d21de992a5479660fa8b64c1a37895da47ec6069b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
