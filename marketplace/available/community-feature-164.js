// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c1Y0UOpSIgDEJSVmNC2VzqGXdVGsxDlWbVSilaIg2W2xgc7KWkXf5+6YqJy35r1NrJCdR8VMfnq4H9rdUM7rYSzrKEb+ukneX5OWEljAqHrqVJ1VvQcKMU4U/0sP6mafNX+jGeqB19HPBPvpMFuDOE008DH4VqEdjCn8/dc15XsHqM8Fw5SjQTT0WjK7wa4LefPPdHzhF/5QEzrkEQUHIIT/FWLv5rtlg9jqOXpUW0pi+yahvH7Rf5dSuT7j/z0DbQK945y9Xhy0s7J6WoFhW72N9nYJ9B1CEh/GZYJZLXaq7N2FIP68sqrXNJWfBrCosxgG2OgIy4w4+WDaFH/kLk6D5kBn7Jnr5LjAvEcBW3YyZDHw8IASJBsJPOIoF8FH634kanlMPhTUHcFtXJn12GcemsqzPx4JL+WWUgtxcVYg5OgYE8pxVOkXXAR6AK1WZ9gWJr7EDEoOIN6p6PX5vOUhMWsEYrH9mVSVr5OX5jUjZ9OCiWSLjBR9D7zmajqvBzX/WF5fzWwQC4TR1nw8KTPN5FwqZxzIFo/y0ARIL/NYg9U2vy5+vv8sWhTB5ssEkmllZFKuED28vCsKXzYYQDHEyLncQtobHn+AnT8joMvuM3aZbTU8uGzF9S2Y8u1IFuteTR6O0/k/WPaQmTLJsB29TjBJPol1ViyukTRmGoMcSv/Iw0noXdc+YDveqqRynNbnFZgj0AaIeqEvIAL3nwSziTqtVC3Y0vqPKhlPK0Ja5NTgqzk=';const _IH='1b4caf40d95c4b833b7512db11c6c8ea899611d301da7457bdaeb8f92ea160c0';let _src;

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
