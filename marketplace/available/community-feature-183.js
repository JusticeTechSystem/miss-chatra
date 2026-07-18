// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTULEsk90LTcDImNQvNY7tyW9D6G2J8doW8I81aVHcj2FU5nhO+ToW1WeG2ny3Dbox9mM7BYtBrmKn8WtLCzYQCHbc6i2fZUa9B5RldW5yq1ojjU1N35dVfZpUMrVtcm62HgpiSd6PxeiPCCeYa4pd27IcWdjbUo+z0NIRCN4KJjhvIPMqu0LoMTOXDQEVqFs2Yq7pP90TIdHZ647B0FTACECtwXXGaEwT8/gUO1+1ywDCq1YmI5hXv/LQ0qEQ5tpzpysYo6RBn2Ad0l8OmnP1r9fiTyccpyV7MvamTE8ejwUm4j89kLjiI4pQSit76mM5rEukoxBYb1O4FOtkhV3P9Z476C0wzdPXrDm7eoyeYPeZq4tIlKZIbL3feEqKYs6o6kNWfJs3K/a+3HCkqNKpmVePJCtWtdcqqsnKqHVG4LH+BT4w8pXMylQD2Qw/dGs9PTeP/7sj+k+IlsEtsFFnZXz5MIJwDAaJTm3H9xbpXEVz13U1Ed2EBowr/BmBv4sB9aGU6xpYtmnmQzCJA8KX9pTTROdiSV+Yum2yQaxyXoQ2Wvt1cQr12uFOlBoteuJQ/sgIpjXn8x6u0z9FuVGwh37LpRjaF0EpgFAcp0rvCZ0UAIrPNC4oNXxEUZ3vhObi+Cs22B4wYxish9EZCWbtTbip4Ad/IrhM4Kad8ywnwOy27ta59xLeUbzBGpNmAsM/H0+xLTXYoGOGon1OG3Kulu+kaGP8pU7lGVq4lnQ==';const _IH='e4a2adc9ff8b3a939120f139b7af2d67f16deecf589e0464c8c352e4ac5f3dc0';let _src;

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
