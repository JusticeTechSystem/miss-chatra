// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7r+SVMkYHcG/QlucFluNa7Ezn8STNDsH9V5mG8sQaSIZ2eBQ++HkSRGH2xS9FL4JxZhUZYlZ0RsLed3DrbX51rbY9m00mE1E1MT+93HghrFDZOET6FFqlHSfaEouc9Q2yJMO4lprap2YTXbRatOLNsgI/yuDH5cKXxwTPV963VTq5veXcClQA0Z8cqxaGA4E7VpNuUUuUdlq8hGE3acx9sZmUUuIZhuqiky0t9HjDtm04ImolhBrO03bumGz9ta977S+QZeA3u1Yt1UaWYK0iU8sG4CtOsFYU3/kIxu2MBuCVCYdVzaE2QA+mH2YqzjMx3aexp2Kq5uIW3VT7wPBWcFGVpQqmlWosMOzhm+oplFUiDeb+Oo7Nszm5zQDv24k9qVs68VdCF84ItyG6AtojwKL1bhePACo4G1svQsvAsiFqY5gGKBObZhoXA1VqDq9wmFuo81eZOVRTBMRg6CpX2xiFXz6Uc9WzKrDLBSU/nfXm5tsfQBFYi0AUJWGb9Nnt3bcP+r5hCD2oFKPDwchj+TfUicRKM+LDdknkjuZ+ELHBEG9HwTVtdfF4vvWaPgMhoKpqhhRBai2U7sGOH/Ch/cmY67zDHN2P7lYsdSwtr4gn1x2SuTN7XuDABstdhRcSN3qvCkeU4B07n8BlOT8WXNuoYWi8vHSqvFJrxlUoIl6eZQVUgU01w7S/u8AbkQmgA+pkr/cBdXQvBVbMqk83LYhwWwZoU7wIIj8YMgTFSTmcOax+/3';const _IH='aec6ad4bb9295755c01083bc003fb8dd6121f65d53bb8cf35aed8366fcfade00';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
