// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5+moOQxEiMH5JMyET+f5f2gihdobqhzgRS+hIkR8ZBR6GroNBtuqwsllsUb0WxWTi0Xmx/987ftcU2WWXi644vCE4AS5o4l2zkGpKn5LV04aLkC0kVNFRqwH9Y0TvAVhBKR4Zjyh3EpkfjALXAqc+hx/4NqO/obeFMnJBF0PWIgIPbByTsvuyK2uX1eNsFvB1CGUob8dqd4yq+fjxWef1OtonpdwjJOQzowtCrcpruhqoIb/BOs+M2GSJ/7Z+9RXuelHGxNl6Q3QYv1X9KPTI+GNuoOpb7Wtni7zXWDnZVSpQOPxsg18147ufS2RgbqrJnXIwR8Aa0kiGsEl6n07Q7N8e2k7PC/8p8U2P9Pkh9lB5aC67BiIwdsbekYoPq2ZPzXCEAQp8OqURt1hxUKqvz1V/ntKotMaRAv6wOooJmw7Km7SX+LCs8H4gva2RL+YPGdocLb6d13+hxlM+3+UKo9DL3I1xX/bCzHRM4rLEOtE0j5Eyq1c6P7TX3IjjNhErLG8wrPdXmHWvdFoKkKf37yxa93shjRXVO2PpufPWOtFsPiDwVjw6OlNFW5CgphKp85NlSMFjMfj5VNgUgDC+bj0aOSdgEq3VlfND5+CmBnQkh/9eHZFS+jwu4skJdHGz6ILd4OqZ9E7ril6kHlwZQPDY5k4ONtZk3gH0oMT2IbvcwcXFAX9jnphgL3A+aQgEjgrfDxOA//sY04P5J1JbfIfpRFvivbXz0QQu0M=';const _IH='24d723e820d5234c95798d9a966664086d9fd6360bff194eef4369c500ed4cd6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
