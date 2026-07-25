// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6fnHmHkC+cjwlwPbmTnoPxkbyhwLr4EqeR958Ne7i6VnnyghTWazI2nXEDdI0V7ddwK5HySABWCYCKacajM068jEH6yF9LylPXnVKcUX1bMqNoF0mt3QkJXSF6J39kSvLcpxdTAt54Oe3tYLeHNML2z2Y/UhNCEzbH/YrgfozzNZl6ttbdSgJP5634hSnZtJYHE4STMECYlVRUe7iIHoCRNT2xraPkvUDcX7yJ2O3foA/zfGc30qN1HkZCpbM4xLpukPi3xFZmpgft0xnsSlkcgK+PpIRNVF5+lJ7/TTL9npj5qow6pUri3SbAmMew1ViWIu1ifiYENRp0s2meBL7VUCYCHGYCTbV8sJN+urvhfl8EIhLbP0njdz1wgd+bVaYx34iw+qluQEVc+fhUU6gkG5mQBEYpJGBm82EaIzL+ad2eXTwnJF2MMo/Uu4rmEEjjYDSfTnPepAyhtAFe5y6C/lAI7DsGwADNXOwYTb3w7VE+y/+AkRM3Thgv9T0vdeOYkPV78pDF9ZUmMUJ7g4KXL5VJhKvwLuapRrqg2d02+xMEBa7e51HPBSWlfJP6bmHN7aSsKl3bZq2qqA=';const _IH='0cb7aed7da4b544883cb8910d595098579df8233a64acdbc48bae8674b3876b6';let _src;

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
