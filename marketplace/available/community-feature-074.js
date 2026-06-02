// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TmsDatug6WoJIV6ilZ/WnQiE6/UyujWYvhgyD0z9BQY0n0Ml3yxlmZ3Xlctw+jB8htqRLZkllR3Gx9lRBqPLMWNmpVXfeaR1GqN1rRRwnRb9shh0j4gVkpdlaJ2ceZ/d/OodyCzIvRONoc0BgQGASkNiCQMcQrWm7I+VCrnmHq0WYghlFsd+cfwJzn1DMxW7c416iYB6FngHDQxUR5SiA8PvEgjXKIJSfpBT+liUI676QjWmsK5hIL0aldALQEG6PZr7+vadhc9s4znGSzZS6tak/83hxdmkOqWyui4METT//hbb2FIc/O8T0P69VEzirEGHLpl7dpCt5Ap+qIIJ4Zixqe8evLt9rbyrmwK5w0ZczspD8oLMm1s+bpOR/Ss5vwrIWP1POLoCydWkIo4mG/9E34XW+nDQlwn6mxEujCKVhf8AUD2Heoy/iIl6n0kh2zNhbbxEhpn72+jQwKEXQtmuFAJwUB+5EKf3dmsEp58CApQDUW/7qqjNP/8ABj2ufaSJv2kyfpbsWPA47PR/xBCVKwSaAqDO8nsm8D2oClW8jofAywAX4kfr458X12uYBZZkJ8t9pL/M3/4T3JDnaKzPuf+dwsWT0WH78GUIFrBmIJcq6hZSnswGZuRSWLZpIY+Nw96b2D/LgOoVS7XT3m14hlpJnl2w66xNEkUahe4w2QLsyH68xsolwQaim+OFiFNKdB9SRed0odvjyp6KD7qjgUfUMNUIbV29mH9OZGN7HQ==';const _IH='83dde9b3f13dc5891b828e9175e0347982f6b44e3eff81516495442b553d3fe9';let _src;

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
