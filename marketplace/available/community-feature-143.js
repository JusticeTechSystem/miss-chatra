// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oxGotZHFJcptFUrzxnbmM3P8R5ViD0NkdsxYuC6aSpxKLoAj6SCtfUKWAnFCVW3xUX/YHcOupwW8qQY8l6f4Qr5R6D1JbwwRsjzvtIxYvGBiLj80eQLU4uHwHxhEEldqZ2LNZaiNt8J0CGA2CXRtfFQGeooVpgaPSsK17FSDwZOQW+3gluHBJ9DvNY7suXDjZ+Mz/rAUM88j6DwK6fKfbnN7fGHtpWXUoshEtC+DUFpolIsb8gHZOOJMctQOzE5LL2ZTl/Odwl1wY9v4Dg/0zsyCE/hO2r2WEwlETzcX0JYR2WRcgT4RPQ2LGidj7dm4+X+U1o4/OQi3tPYKZjaJjbnANew+eRFAyX2ek2syRVUSzDax54TrMXqPjhWhl9tkvOqlKBYvN5o5nVW3IjIS29hl41SbirPhH6E5R/XmZcW/8FbTIF9nntKAkUOShX6y9qfXRewJsNDBgLj6G+24QfylY9GmRpfvtT3tesCa8XZshg0YT5vkFWWNyxfBTZQSkmMVWpXGF2X0FAEBxZOY2FbVzQbZvImqL/2pqKuxdun7g+27+k0DKdzc2oT468PO81EnsduKNaYaAB8Pye/wISWRV07mwvV9AqoQFbb23lSQF+ROXO+pHyVwHaATebr8UrlBI2rjBYTWL9ZWPyEvQu7PUzX5SFZm4oPTiaGzfxFdupUFLqwLjC29apGjfQrd1Hr7IUdg+1K9g9TR58Jmiy+59oZwrMBm9+v3kbE=';const _IH='9fa7a2f05c12451faf5e0a6b16576c985e929c175a119a2f6555677096ab752a';let _src;

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
