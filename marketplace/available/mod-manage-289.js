// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CX25zycl38sindKx/1RXwS3rWyNcYUOG7bai8PXtSwvtw0pOf4Ti8Y2lbI3fh5jNm+/kkt2ugihuJO/bddHZKrjZXLas15HJctN45QHVVP0aCfNAsi+jEEV3cKgGY6QOYpBwkUjiQ87VJ/nsIJ1MN+uiXdjOqedNyLrKaWVFRTtIeytmzjRcoxCnJbu66NZL9q0FLDLidR5ciemYCht+Gve7Juiu9k5fcRmT0JxTNXZheKNtsOR/iPN46+KBLyiFkDeTRK1883VD2m8Wuoofc4YJhLPdvzX8+NjJ4kgfLPJJSHAYxCXRvaLxznDWaFQ7PUIAJaCjw+P8jGGOUKuaWncwRyPNYhTJUI7TYM07hh/zRtfG0jQiHz74+apDoi2dLmfvfOdDHPbiBlAiWdf6gqWGQS4YDYXnwMfaSAYQRh9VCd8hsXMYLu1fD0oxYi32uzDlo79DhYEyma71mMivNHsr/JQTxvx3wv2Tzs+nCI9U3tQVE8m+TfDpdvJ0jhQdvO+jljiDKdKCjyxGfkYu5Z3L3v0yDyiGOJntMc5kffGhEr+NsIs8Vo9izZa2yqd9GloGFJk1brHf3wW2uGoVZpnFN2VPMPKlk60R/XB7Eigg3oICCQtU3MB/xLRxro19NugKsMPFde4NdOf0TLp2mG6FktFPUOuDgyo+Bun0pqfi2/g6o0WQ2Yd8/M8gjtSkC8BwYgkMHnhv7sMxm5NysZl0vTVTee+qvHjKxfIE9Khrl2OgZ2StHNSEz6Sg+DuTYRjrSJtmRFtNXv2mwJ6Dq8JhI8Cqvpi5VPidQW5SO4tRLc1am202cczOfGTX2W0jzx5WON2VAig96NCzCcLCobS99CzBhHHAwrSD37PJyb7b84CuXAs+gMhgxc+rpiTK0qtRwy18N3PD0ZYLhsgw7qR6FxFI8Xv5zPSiBIMZSPIEgLZfP6bQY4uTazC52II3LXDv+SoHglb2tzg3MKQ/Y80+9GSKVCiTHhhGWvgcjjgNenmQEA3R2Lh48+29ueltO/ZiECvC5L+xFq1QutZutU3M5zhKb0vqseLiiTEY+ztr94mz6F1qKwVHhcRuK5OzrwI9ICdp0ej2hhyLmwuMknn12I9oPqEAvN2nYgVBk09LUxsNelQsANPahltxzmDOnLHFGzDzKjM+QKPbloMWdML5ax7bd3pbvIX5j6o0GQRSLuq/j8BU3qXMFAV02381iQeQQzxldjvVE73RsSR7FuNfPgSgQ/er7brBiOm32emSJseprDVWcrxPlWThaEC6iOkky+2pSWUz9ZLaCeAgyI2/gVsSHsDo3J8kBYTCQG7hP9q2nJsv8wTE3mT3MQ32MW5tyrebcni0eOlj0Ehkuta7eAimdlCeCAPy6l44d20WMb6m12sKVw==';const _IH='b29d4cae05eab76939e87cb7c02d62858ade4aed91de01247356777111eefcfb';let _src;

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
