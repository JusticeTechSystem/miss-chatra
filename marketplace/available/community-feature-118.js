// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='agydeR4r+Ph2LVnHsaggEb7yYsLCJbvg/FCjVbCDnqo+eNeH9gxmltVXPvsvBDBdiVXEG1/VQoji1F4Brq6+V3aKJCzHW0ax+YvueCNmfw/O420SJc+IWUMF1lDNTkE9FNyXgiH0+GNFsy/9OrPNedGXa+m6SYGTCuGsTtZ8krPztkFfxEy4DAkLoN/BFDBFGrKjfbzwWpMQGdw7Sm7/gl2p+YNJ2ALkni4+biBeWssb9XTeelHXc/bV2OTbpPTSxH85LlSRq/6Kai1bJrxi9yS26QXhtXmhcgfwDIkQNBmlKxRHP1ngTmLNP8/SMCXBWYCGpbE62aloG6Y7na4JGxO6hXBCqTotIf+DCoT/TCtievOWKdcgR4rvfbZT3SkS7TsB0Sd3oXJ7iJS77z21JT8HhQDfcqD/Awg1DxOs79IeC8L1Oknwopk76KS6EIB8nq39eCKzDLI33Ty/cBvYGq/gVB8/RQAHpLFwC8Qpdi5kYCY9e0jX9jV3A8mVxOEmTZU/LVjYHWU/BpUDkiJkuezQgjV2fSPE66qxeZmPfIEdaPud25gFm8Lp0fSbe24jTG3/Fyf1300+CBs75a15BbSfAY4TLpYj4jddxJU6qkYd8FL8QGfq4DoUf3pu8bD071gshCGXFS2EnOH5NmEpwGasmEW+GtKNhNT2ov/mSfvefB416zsPHh47PDaaa+y1OXDn2SiO/M539QKROAfFCvzab7sXW9JPnwzULUE=';const _IH='5e9e12683d259f6faf091067c11709a3effc7a442e880e8523893d40786c97db';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
