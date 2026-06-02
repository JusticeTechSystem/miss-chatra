// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DxLoC5M0PTHYco9bTTxrtmAFqcDrvVpo05hDXNZ0PbEBh3MhWy+wzTX3QlUgO2ogzQtU0642qd8SoP5bx9pWpblUbFM0yQL0AR1jMeXIHGgMkH15tKCc4oplIT1qeRgMW6+D5ocsyTiV2rrMe9AryiM8W5yJnmHVe3bQAS4nBaVqIPRTCOZgj9Wjct7sqcFeVH88J5DTOwEWRaSBxYeDqisJpfWZjbvdr2q9zivA7RYbUPJqAx3EgIxUHcaLX+wCHVCeFEAiP1WgyTUv1cXKzN10pib7xU4joPx7KZ2AXRaW/iwbFLJk93GYdrRLh8TLnNPNifmsRN8oP6P0Hg9jNXkWzL/tAhtSdWBQPROxBnaUCInqwG08I6u/RovqOX9mIjHaKc9NrVaY4VLbZ/RpTva7r7un5KN6REfe05KlGu4A8+ogNAZoosqJWsBvP6LUXu6bwVx56d6ZodW22bjeJ2aUDBqg5VLNz61hvL/5y1r/QqvEmroU/fGK3A2w19x+gVadG3UGP9jvXlSU/0ShtlzbnP6bcylEzndUKF28wrO8iRgr85kdEm0SCqT1mVmsYIbqgdhkWI70BpEhH5wYWzbA+DeNeOdxL/JkcFmIikyZG8piaQHnJkDIRK8pkHT6YwIkDRtTEJh6jpE8Vd/Cp0N/eRQMdujSthwzm7lggCzk/99FseKYmx05JRDjSiSP64xai2H9bZAM/3xsfwwoqZWepxaI5hM9Yhi8F11VbONm6T9nfSoLkC+fWUIqkBxrB6t5lY2nLSgWuQmuHQSHkc0k6y2GKbmEd0PUVtV+ZXSXE+d2HP28equ4Fn4GXL9r5YLPMvKPSuYIx663HA1NYV0lS2A6Jg+KtHsZ0U0TAey0AEYK0GXdQXXASuTwtslvI5dgLw7OriQUcTlk7NEbmdjl0+JWIHt/a94tvC4EGXWxibrInDqnkWxWLZIsrSSEd5PbUbj/Rtmtik+ozmlTdPiI0W7yjFSM1Q5TidqW5n/ucqc=';const _IH='b1092bb2ea8cfd0e0a71630413829cc6b2dbeeee705bd49118c18b8db6afdd7c';let _src;

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
