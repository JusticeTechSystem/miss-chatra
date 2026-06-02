// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1jjiQ9PESO63qpSX0CFC3q74fo77ekvRn00+nKqNF3YPGfcLuu9dt+tiiGmM4ZzGc6/qeLTLrgjAqJm8sALV1dTkYEDVC04RT+2fz8lmvJcsf3BxIZQ9mj30OQsDIrFrfafSjyq6iQ36/jeYhwMSUn+OYRqPtrMidXumrqv+nvwEXwNLOpXmR9ifyuvJyZ/C/vsOCL2sdsVzixpaCk0Q5EITVWQDaH8WnSQ3MM34jemDJgTDeqbrpL4ghSjp/5eY7HaGQ4esTXzUisYhe4XG9TD4oTXsrpxTPN27YGV3iGXq1+z128H/hA5dinZNTfzVmBcdwh+dYqwwN74zVzTG9Nqlf4w9yquzPBw0WrXOGiHnZ0wUAh0643KYkBZN8Ge8dlMArdjJH5bSus1tLoKuzrOZpNh9RsaanLJtto7omuKVbSd+OCnyjMKSrgRO9V8Xk2KEtoQwpaFXDuMoNS5W13WTvbXBzKVKK9+dnZE2NRtVS4a+OZr8XtNdhzl/y2HQKxJbzUZDTqi6X26uhPd91w1tZHtNd9w6miEOEZFF+uHtk09DyCMIeDXE+joRKFBO+wRKt+O9lR0SGpJJp5sMNwZrQ+QRMcLzXzoEI9fFG3MkDgaIRs7w3qd9v06DhE+X6QwgVA2bLg4C0KpMEx9bAZ0lHp4vM3yIjLa5q5crxOFcqZAHmVLd3mbznQr+nIxrDDibt8eGQRWNbUKfYl8g5RJjdFpPgVjR/ped2+uFBVrUkH1tpnsyqyoR';const _IH='e1007a88aeb12b4925f9ef337dd6983635bfdc4fdf0811f46ef9174f58f8ba18';let _src;

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
