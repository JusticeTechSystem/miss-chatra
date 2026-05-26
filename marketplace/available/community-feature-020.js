// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='elGmiABUq/OmJNeMr66AysFYmr/ZUrjhZGUu772CpoHQd5wHzRf5KQ3EMdZ0NsOFt4UvyU4FJjSnsXA4jK7sRzlGOsL1Rbuub9FUdXneF6NlgICTqdAAhjFz2Vzj8hOlLrdRbxtetpb27zItCs6evLQFXZaevMSor1fjVsJjATU9h7oyg7RYBdW+MBNez/wpanae3Rag9RMKREJtoQyxlc9WjLfDGAX2kDBfnSXBTcNZBO1ut0aDCY24R6r23tTt40vqF+qt9+mpK3LRxeMWbWeeJ5kHvQ+pJpvhQbzA4gQDfVcc2PSw5sGv01ZJAszVVpzUnI7R/xcUFzL97OFtQdktQjv24iwBvX0kbCVEIKyBSV50Ijqq12L8K0lIpzWQJHA1z8qanniLvzL64zPDhK9BXkdqJMp5sfMgOzb3S+EETxoXWsdqkNRXqm2UFZYV1vgUTpc6T6opjoZcX175rZRk72WwP5fr6z3YBrYxU7ZBkfr/aWXBMez7zTpFNlaYwLk2VrpLs6iDrOKeEGx+D9aSrJmlCb9jReh9bnLZ2Lz/uLc0PHdLA4doKzvCX5cz8JcI+mmaC3+P9ufBWxuHzUsSoPHGwAI9YdgoDxB1jWvbsdDkODdkGqk09z93k7sgIP+bRF8x6PpNdpA/rEJ1zRhOoiW1OHnGJS3/QeQwWxPxwuvPpZ/ZdZrGRQWwIFvBoxWYRP+2ZCQGeCI7lE+hlQmsoM6gI5G4rq/bNV8Bq3RSY4Yh4/Y=';const _IH='b31770cf90faca4ad526560db96256b3dc0b3a1e0226bee06480a6395ef8d5fd';let _src;

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
