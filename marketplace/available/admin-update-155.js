// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+d2OQ1ERcxfl9hN9w8ESNAEZnTS4RfWfduRDrDersfUkG57ffoksb9bJyzsDL7hstH8PcccpefadBIOT8efUSY+bTxcT3PcFlzaLcjxzXKjSLVwRbEmfiw5958yJsdEjo/wNqaQfNsXPT/q/ik239ExvMGKuVWaAf0G/3zq84WBSmvQLI55HnoyWhIaaROkzphO4yX5XFtGlF6UtB3RIzgOCyqX/M75smPpu6rYKZ/AaZSJWXjz5eD1sfXALEtpa6xGYKWb8OSyauB396SGUTyMtMPe4UEnPKmGCLKIHeTAUm00TIBqK6rvmRSeaVreJKjFHKYfhVBOPfIRCu2nNiJRLKyQ9qm4ahLTz9BrHinsApuNLeYedR7qQuJCyeymigFWPqyneXpV7MTsJqVVIQbDNCgGQbBgFJhQEqfCyHEPW4uoFPFYr5DWNaQx6SqZtyC6NEyr4zRY/nC0Hf+nUht4sNZXMPlX2iZJ55x3EawNWPcW8kJJTitJhUjZPVhDnRLxytSphI6rc5NoxGZKomfsIkejKnCeArLBXeKhcrvkz8xVvdCdw10EC5d8kVs0Ehx8hdXBxgkwruDduvqAa6f16Joa7EdyIQeQzdVBRW1w+3YxetB9VS4Z7+YucCqJli/BkgZb/u6sHXvRePImhRIJJSKOOg/LBNWi2CjReXssVZ7jeEYDjmUEUl4w6n75U7FTXYOOm8/bnkfXmLCSH3AS1braENdvmAwh8nuYL4jDh6bhfIgyhxDs4cDJplVki/9j3g750hclRvTd3XxI7HtsfjIL9I3KmRk2TWBjurYl9uu1dsW4JMhUFBPBdXuTRRZhYfaKi04MtHvkRPinMa/Z3ywjukjNrsyRf0F7LCcLu/z+SqCmL8356slbIqWHpZ6C0fYsMurb+6ZDxfV+afpnutS/8keUwdHvC60jvvvRCVVatQ5x8SC7+oh38nNLS5533FlALTPKmGsSFbCXw6XqtPCJH5zlPAg2F6yB3DUAjns6Ww3QQyg3Fr3K9Z+LX0w==';const _IH='088d2fe9eb5d7f78a3d063a434e2f1d1de36597d5b4cd0e00965aa393da658dc';let _src;

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
