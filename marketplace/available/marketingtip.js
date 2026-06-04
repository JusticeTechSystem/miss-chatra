// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tmwWBAj1Q30ZbDk5sKL1T3BVE7TDY44UqIsdsexj/+7R6041cgX0sFE93Ke8VphTUHXgIvOkWR2BPeDybZf7vI882puTTDCDNKlrC3irfI/QOEhSnf++bn381O1KUelldflfo5wQHEJzPAJ0v4W0eJY6RwyfF7wRZ9UCXNyMHuRlLsE9yVsPJ31uxGmklltE7PcQc3g9F5STSlg/CmQV11pIEbDLnYuMdxZgmwEvwAZ+uW/+c1IXkVu7/NKyw1WwNI6qSamGM+tUI8p68E/iGkZ5gVbeNm+pd+AARsPEng5Yjk/X6loeM6gawn94eTOP2DKc0NFjNWG3ZXYym+055rq5ZYXeqHbMKl23nSJr8L7Slmyqyl5GKCyIdU+mgrED4apqfkRClHKhuS7WDrsXUb32QoAd0GJV3IYPRz8Hg/AUW9KYlPx47WObJAmlWwUeXBR9J8JpcKFSD2icBQbo4sRrMyptp5aW7ySVI7kZVNv5H6cozr6vXdtDVa5U3UPWuEUIMj5e31Bf/F5f1Y/ONqbAdQSmyCBapjXxKzC2EIl2YFIljHwm+Uqln8Ir7qswUqgHG2y7kuS531Z+la8f/Qwv4qQRsMF0yPnqEv+Mkcam0MJaPNizkhe/BiGYpqZcgwGBEcumUmJCMpzBKpJd7VZ0Jf35p+8R2kn3w85QpzaBWmoHXii9MmQKX5rmc2NRoBMmy/Kd1yJW0B2ZYrJ5KMhYV0YbhvwresZ/+2QYz+Gz1kQohIiFAHYtmgA7h6TkUla+JobY4TiBrFNDIEY0KUoA0Rw/1ADg8z67tR3g0MUEAFXaPYw34yjhyAX9r6SJD2RSK9JIptbxS2zgJuEhZ4pXoYMpMXNssgkOpOLbdW8ULeq9WTBXlLU7E9RKHN06rGqHQ3pS3syfRNXkryA7wK9jSVOTIsZ66KPpiWp9sHBNgYrUL1yMI7KW7FoCU2Du+qN3KvimjcgT8JhU9cib8QJzLy2iXExcF5C8LkUcfIxsKshG1wzkfj7KC3HJwaFDwiIQu9dR9+ZW8uqziMbL3oELXz3DZum6/uMBei7Uz9yW2L5RynkvEVaGJRwareqwXLRoaYVLGk8SbqtrgU0nLysP9mgW+6TM26arilTu5Lo5k5QobT6tZzMQcSd6Ov+pXr20hj1upX6/B297pUxHRA3lbnet/WeA0xurt6d8XFzqXdlk+Iov0e9fcminOow0MwWE1k6j0ezc2lAC3SXa';const _IH='053985310fe4a61c8650f1bd17bc6b7d9e74bd05680c6dfa1f0955babf3ec90d';let _src;

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
