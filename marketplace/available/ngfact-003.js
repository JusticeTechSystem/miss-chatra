// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9mFbrfWGHiIX1xBaEJviF2KxwqrjTGmVlThL9/Owf2Lvp5BsjkW+AvnkJj+zkN/N8GfskHUSDnchVMN74ZvOHbWDIBiz+CuQuzLikbivTIIK6t1AsM/+mBW08EamS5FS9GDhcFVCvFsJOWF6RUtgfSE4BiOoNPzW8P05wpOrfKyKEqDYkk5gxP74CEi1CVIXlYuBlkPkaS7ZGj+LMc9q8hTUOwgC4UChwIqkHhjnJzjcTHWig+bj+0og/HiUJk+UpRNXaKTaOD4oQOxKpFqpKfC7zEmyBNvkTBeeMBXEanEIHWQb5h+MauiudPRfTX98x9REdcqTNS2sTZLBwaXV/dCiNVxZYgoFhRBeWdCai+1DV4v/aObELQx14oKVGP8H6QX3ZnW5NDpdbA5g7zH6cVINoFAgKECh/vUr6QOvjSjb4unbHr/AP1/RZaVghP9o8yvX3bIkhr+3SBNbzdFg9rP7fAxWdHAE+sWzCSo1vF7mhqjHedZjSy0m1QQ/3ebTzeTMGT86dk9CgUOApuieNy/ii4g0PQewDpydLXNdP+N4q6uSYNez/0cogf2ZqgRpkHPDGuZ4MRTV7S8RWGejqCmQF76NuRw9lKxRw1JnBiOfIEIhS0qbCCecz6roctyvdNMxfNVqEzkhn0aMJTasLGvVBO3rVQ+6pkxs5lAf3H04FC1m38xCLvmyvVLQArl7vz7yxqq0sVLTG7pDrLR92Xqy1MwgeP10RRMlpvHopzw==';const _IH='9d5cf078180388fcd396b945a80670f725cd67b6a7999b23bb839f187800d303';let _src;

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
