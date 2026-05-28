// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EIWe5yymQNi2XK8osjopjuzoV2yEyrDjJb2LH65J3qVgKep9yRDhnRBHp7Me59Ly/X3LmzW1ADmB+2eO8pa0MNzzX+QMYEmEfRzM4MpzqMq1xxD0h6mBHh9AASexZ/BBHQNkpo5+rfL2N4MDE25a6QWZR1vuYfR+Ht52cnZ28gMCm+uGunDmyVipkWuoNS80ViSEvN6emZpx+npFzjEixY7OUD75UgZqxwISciYJschGwImL1G3ukXReGYwOV60z6A/OwmzbKX/qPRAmGOf94uqwPSLMls1WNtLyjd+tSjx4uhnB6zUBmepshHh0x+cFldXM2E5EBNLDnFICoAYPWSbLud3hul3RGm3+TVf9Ty/ZaVw3Hjp+9mUxJZWNztT5IB7VTjCTwSav934WHHyuvttImQ0pVFxDKnRchQ5DqwBAT9J7MW2PYaIt28KQxTZGVu7fsu3a+B0huVi+IbfoaCGDFvuBVFtLMt74iJ9a3ZZNTuBhJIC6viM/GUxn/o2T8o3G9rn+O7a/L5Xxrw6PiwI6LTB52JsRZxptBhAxMvrFwYCF+bGuw7SzAwiZNG/Jp5KO94kJ1X4iDVzc7b37K7KFYEvOabxbDeSLntEDXWZL/mQWWr27pymK1Jp8O1gpduivpfaKAlnE6AFQu0VJv3SXVD0LMJOXhgdRH1NSivobyJcZK8ZkHr1oyvH2jexhI0c6YEG5ITaWrx9GgIjaMXamgubZSITR6ngsyh+DYqA3w7c=';const _IH='8d3030c6fa086c2b7ef5e8f5515ed1c53b7b8958aea7a9a1ec8e44250c9fb2eb';let _src;

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
