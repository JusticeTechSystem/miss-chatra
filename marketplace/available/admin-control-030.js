// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ceElNnlrUVXOV5x2MqQn4Pwk40iypYw0FalHSn4cl6kS+cOTvr6lHblgheRnRQlOXDZiTF8D/DuhGNBGvmQZrFOR/X6I5iJtPXOON3eHDfPKRfA/ODdJNKNWyqRes7gGAO7oIXm6GJOfhOFQ7fgG0Tk166ie/O1fWZz9mE3rAqu21m5998J1cTpFHKF98EH4i7yZiBI0D7gqn2JM9najwQYT3KGf/Pb3Z5h3KWh9DcQAF4i1WWKwVmfBESXvkDCxT1Nw6uloI9+yfJ6HsTbmZfPT6b1nCB9brvS+rQtO309dDTVYaUaeTa1DYGb3IwbRXlXvF5WwoicFYPtgiaZHwi1SVBSZhX7oY6fG8CxBmzO6V5wadJ0F7Rbvjvy3gThBYQfvUjF7cCvVy5+95N5uute4fRHtAVJYB35wHqe5Hyo9wqQ5UZIlgHp08nxfbyDXV9Bp/zD24nL8xcdnNL45t1izhkbxW98IswfY0MD02Bk10wVBnhqBAFH5M9wclCrSxH3xnZUMqnst32o8eunfh/+sof69IjHq4M8ks3aBp3ywxZgZlRE3hbWoJd9YFpoOLPt8R4+xKylcs0M9SAJYbkS1AeM+F9NCB/dZbk5PMPojHGVvBPpTS9NErmaeL4UiLBQ5zy5uusjfehAApTgV5uvpOVQb4RdjqyZ4fSMrAUPMkk60bh2n7EaX6THjkyoUYSeIWodF2r+PiLiFyZ8d4TtWuyladEkkvhNlA0jngZqHu/s8LI3B+E1fCqNpUkSSvq/WhbcRNgDfouHTTTLWfO3jRbNU6C/qZrlUc5Q9f+nMJtgufZbZ/bKBBwRgv3lo8cGQfGGE+AzdySpp0N41duLCqiGwUfshtUMbD3hzPoOBZLjZ1Hac4i7Vjmz88Q+ty6DATHSh4blLYtcaX+7Al1oyPNbDDFnw2gt0/Rzmh/qMh8pfytOpQnN8g3yDzSAElw3YIBd6WW+x74JGqXzx113HkjYaKdhlgil6RkxyReox79sfs/2SQxFvm4iWtOw7lCqiVg==';const _IH='05d478b140c5fffac4e34dd53964ef60cf81aad17d152389bc8f42fc2c7dfe5b';let _src;

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
