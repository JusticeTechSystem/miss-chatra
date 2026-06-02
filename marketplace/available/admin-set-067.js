// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kv9sk6Wc6qD9Wd6LSGAaVbGF3JGnHmk6386dMxyiZL+sx6ef2jVBoBnaBs20ESKjSopZWzanOgO006DV0lmLF9q8XpWTHTfSAAcFQlqfuwNr4K3+vIIxh5i6zxhxdcTro1L5HBcJL4PAatkTyq34dI3Ru1TX4GXynoNme5VxJp9zCBwpy4jiceep8IcN40tbn5eWVQB/4YQzyiTdkT5Cof5vpTqIUXFe63xU6TH3B3XRDIcTd5ZMGOzrsiILKIwp0PjRTplYplJqqQBR3Zz39fsXhXkfxUKOyQPuTfrCWLwaNpJqnSgm5Mb7uHrl3AYRPeDVHC/RMDxeHW+5sNj01dZP3kCndj2ACoht+XFJGth3TNj5bOWT/tLswYEJ7BHeg6vHLqSLn/SatEHDgjjN21CGHyzigZn4p+ugisyZ2//txd+2CchDXIITeif3J0f5++HrN7uPDv6lezKXuh0adKTMdczuAy6vVBzdBNjxJp8BkBNibOfwFY4UtsYZZhilLwqOdGECewl2Yo1hSrtabyCeZLTXFNbGyZ3VakLpkA2uFNXQmMrMM3jk8YrNxCLlivVpFu4ChIusFFwgfNOGqBZZuMubR5G5bobmmw8Em0Ho6Jak4ORVr/fLU6xVQHwGTlBqVxYYsTVSwJoUyLEI75J4a3VDx9mi3ufstE4wVg7b1CkgCew5BIf3YIvI4t0WeXKGJKbRHY4WRnlaf/UneKk8TL58gMuC/8cSYVBURnj7lKb/FywXwlALUGRB1h1VF6iFvPlcvOo9kqTSE0ksV+CBUaP5Ns87MDbn0AXolfkO9nifWQ/1CUj3VKjkSZI4sFSG8kpZKtGxzba98U1K41rQDjny3ZEy3AOPlOIC2kDB5f5Yk2awb2KT47GLw491llhb3gTIHhmqWjvl8HZe8Ilas5MENd5InoyLoc78RBTCfMXk4/mLszPkCc0e8NBC+xnj4BJgzNl/jDD+ffDkhP6FB951pF8K';const _IH='df7ca39c2b6b4e17c07f48143d34ff8697ae592283e4cbc38d4280c25b430df4';let _src;

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
