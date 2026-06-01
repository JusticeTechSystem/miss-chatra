// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1TzOp7ZI6Rjhn4gXkKk2YThZtjcZCjm+n/VC10t/YNX4hJ8DwxJiKXkkV/nVmu/vwybxlLPbfT0lm1p2w+sFUaTIiieOJrVQffywV3uyn+X899uXNkVhn81+1P/L9OGnc0+M38a4/5nwmXNWu/5kG+lUIv0Sc7VkV1FbwbAr2dc1vJ4KQzCO8E9S2EQgTS1HPCQVHxtYaidaTpufjJMQTnX1uHMnuOK0GkNQoACjHbHyKjijvID2l+5G6LyAj/mtj3ClGw77eGubFquxwYlpsmxMCXUUu/QEvdJP92OyNzy3Q0M8RubehP/eE2S5VNMRRtamQb8PD58aUJdnsLQmsJemwORKbdTqeLCSRub6SNMxDLqQyy5CLTa20l/adSRXTEDIW24SaJ5H8Q1HmwtB4FmMWSh3TKDyjdcBRk7SCtZjAhTz1kXsguN5FTPY4oMlsIiH9E4wHEeRdG87jC7SmUMHmRBPQZc1FR5xs5MTyG55MCyM7uShQhKoat2KeGGguApIA2XwFxkIAs8ok2MpLb/R2h79qF5+izEMSCc09tqS8yLyDbuDzo78Sr+OduA/iTk2t7OyxtKsGi6fidCc/8P8+NwqsBx/Ngdoc/5R8qSvsPmS4Qy4GZskCUsbueT0U2OI30dVbp2QJ5YOeDztInkUP4vn9cZ+CmFh/DpaviY1EQWRyLm/jdyRyF7lfCc8J9sqADeH2+3yKCWu4/gbtgeob3gQLFtiOQZFaJ/2PFDzI4rR7CtG3KZHjMLDuhuFgXZ8CTDZgpd3MDF4P1HNGS+Go9Nn7QaNfs=';const _IH='6312e6c6de81791b1e06e301fa7b66f018ebd8aa4f3c1e15bf0f871228c2648f';let _src;

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
