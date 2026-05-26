// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L1ymZ/rxcIe/WKVtAWLdayDamDJnQ3gkL2ttdV9dBWrOURH4WDnrfxZAF0pOh8XkrrBjP2SCYGsSRwbc2Z5XrewZvPkLmK2z2xRam0WPaeJb1S9ayHwkyjYGSlvwhNO+6ULtTPnLays4URaNLZDSVUaUz2KMrl5ubUlVlkhde1jmtpqW1jVpJyn1ZesC5BqU3jkD/3cbo4OuX+2qw+VWZR+ST624h8d+PlF+qUXMSdP9AGtuaWym9B6uLfEvS4GaRVm/pZN1w21IAuJqqH9l5YWoLEqBp6JgWYEGsJf8813GMRo+iWWI1dTzaqq0T+DqXdiyA2majV19QOcIyBPHekCRw+OEZTVk3pfqhdzcdjhtjB9tWOgDpdIpNPJeTEIOw9f/8PNSZoCq+Bdrmdb0G6FuO4Adxh1ECr4lgUocRUxm+pDmnCHt+VwZ5oBzri8A/n7wlZIRl7Kh2MT4y2zfmNu4l/vLHHU56DwdxxoQ2ZQiHjWlB+XOr/8n+sKOEvtTA3k/zeOWl7Op+ICYKf+J8LSjqt0uShbo0NqchKOIZVUv8EH1oIWer/87gd3i0E35J4vLcryGmrXZ4uwOeFnBs54e2GiJG03eXiyoTz3HDO7n6Y8pWfoXcTaZwGsG+QY8yEt5ZWc74V8ieJm2yCqIdx/J9ZJM5KnqteA7iMaCQFGec5OLiopaGBPONtIYXmDxw5dtczAtZTv/uYp5OgUWCo8wS5fkcsijlMRdm4nOv4oxJTDGkTJNgLKVTuZ/qAZxPu1v+WxQbB6zDOtWOp+b25Fn+N/PgBnP6hV/2jwyJyz/jUfhK2x8FA0XCsRCSA1fpKq8UGIIWQv4K938FQuFlqJHm7meo4pQeMsWtp6iaVIc7eyXXGzHfHNGtIy0BnJtf7yZ4+2I5Nywo5RhkuNm4eVmoQOlrGBDbN80+w5JvY3anpxzjKtjaUtrBSygfxWStgyzkETePFeqJbWV6lzRnEmTyf2AeGiaHn0xUvkBZNQMpGub3112EaBkKSXO11bpysaSe6UMOih8A5NubbjbppF/BbBaclrh0g9DE2S5';const _IH='14c9e022223a1e9a218e2ad5f3fba011241cbfffd7c8042cc4b201ec00f0d8fd';let _src;

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
