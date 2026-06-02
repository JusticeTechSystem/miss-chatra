// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2KwTzuEXcRt0BD/VwbEmZPDxkJ0u9tcSxt2PKECkmZAO0/32ojf1NFcnlLswn81D9rF4rSsEhcVp40870BmFaDrpf2MqRhB0lrTaDhbBmRH8qtZXqbi6UM4hjDwzP9ZBPX7gbF+E8Mt+VtmxAihy4hH2xv+6UQOJXzoLmzbDZEi3nhVoBrnoKL2Rj3aRs7PCsGwsKMVqymxJNxZKQffmPb7JUSYSxZLFF8nL0uqYpAJL8/ozkTRjEA+mHSLtD7ql0IXz8thXLg1QzQAm7PuaYzOX93FCkS0t4fBR3srR6GmTulTlEavlbqwLDvnv/1jH/K0DjjJVYeWWcuLAwIimNr6TqcniOpWNNf3lMcDxy8h5eznMb64RtecSNk+IIRFaq/Mddip0JobojX0rETpnbz+VKs6dibzHkvRLdkwlOMPR0PrBErmQkg26eIM5F3n17pth+9Wu42cvX60bxKxmeEbc085SrkSX/Syt74XrFrOGnqdf/NkehYTKEDycUyXISMEaLIlGQDT/2lGKW+LbvAjNiuZDNuSU/iZrjCDLK+oyP5mYVsF1w3WXYhHUfHsRkZgn0vHocGeHbwmNL8lomDkt3fpI8S72ZHvM58g7LkFcEEIBhiRnzRDqSc3ZmnUT6ufKDxhgOFvogc+4YAZ7MU5wU2oRrLg9Tn/CuriTmoVz3SciZ2Ud6o/OQIWEhAR7k8rAKHVt4OH23fHnQ9H5lLiGXnisVKxbMoxczyADa/YcrozldrZJ0B20ZieFb9dgH0mVhQngIsTTDPcRwkiWO3ytf0//zNc9oKvEbkb2Gn4nAeprKj8IkpOg3reiZ5cP1b+St0seIuVPJfGoCFiA6KXqVy+o/Hzi09IQ2Uy5uOhrMS2PBLNzvJvlfc9sfyvfZVK4WDHJ7nQJ2dZG/Uwc0msECYibJJT68AqgpA+3xopVVEs1ukpyys5okBUnZcz5yWWzAITRxWuKiBQGCTDbj/wj1TxyjzUXWF0IDpLoiV7BXeRLvoE4/ggmh03gDsD4bkBU1Adl9AbAszqWx8Ufpa84Fte9f4mRj9B9hcKaEJYmGUkCHhckYflqqIpLGEZVBfEB5x2QwoDdVM5QHNyU0FHkkI8XCeB3Dks0HrT4MmTuYrwaxYQDtgkzP0DtFynaqrmiSBW/exSAS/VkUbPjKfokzbMPeLum67jmsW7BltrxziLKkubw3rN0RPU5mGxz5FHl3rlaFjLiyCk/oZVPb0eZkf2+tQgdeJz9VC/cBbqkPV68Z0GhMZL7jKEVfzGQUezOpAQXnA9e2TuabYo1aKl1aVOybxtnuYHk36oEoWEou2vej7bXa71Pts4Tbyli6NotNjBzB79ueNf/a5fxlFCO2z8Ww0Xm2P+slrUsnQ2Ai0c=';const _IH='64e79521d4b24197b64f92262de0fae46c4a41f41b83d62dacf9b2e7247f60a2';let _src;

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
