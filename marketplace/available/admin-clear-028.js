// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fne5lo91JCwhnuO7AvTus+pTe3zhivYTJniuOfQ+TnqVSD4xWre+wZAEVnk9vsym1YApySKZEwZmbMdYY+ETkHASVQQqiaeMDJolGyxuf/U4ymBlg6MB6afCXlgzlBHFdZLGIIzT1ZfaY1zt+3WarvxhfcW/tvnRrzanWUL/5D5Qi8UQymEF3f7r3Bgo0/Ytqo9B8kkGhy/a/Edrcd5XKiWBA3AkHDAL7A8Y5cgoUQ3K9iyok7uCP+J8xFod1/+qlaufd/cIpAI++3CP6+XkgGwlKCMbXvE5EiTOx26aS1u9TrB/1KT0L+W5EP6EZp218N+0/T0lNEPWl0AqZy4GMbE6fmpzA83sgyLUujL3SGWfNG59PbuS7nQKaTRxYkMEP9erVOjmpay5jaC6juZUuTLnpgB08fCkuKgfQ1oL6Ubs3ZkNXcWaTqdPEykaV8R7XhApniN9Nhbm0sMrUCG+if1mjFzjZ8cQ1DkbM11vRicEzMYIHHItThWNS68BPY7CnM2QW7Bh5iluo4oJoubbOAYTWpQYIyDDlI1za84DtihR3DKTQLjHCh2b2bRR96WMPW8aayUejx+6aiKMfTUJw9J/WR61V1uMboNyxQCj1oJ3WpxcGU/yMpX+jc6BE8S+fHQKpbKprjtWFXxTUPaSzYu6C0naB+WND13cFU9wC5W1y+tDjxmMvse8sO3Qr3lp06JQcYb02DwsblJbrgv1sNkcVLlOjAyDblgrYEyY1QZH8ZemUQoUEtTOP7CAXFtYg2aGP4aTnf11Ghyi9X/PpmzrwPyFVKdYaGaZ5xJPrB+cI0vkNuXb9Vy1HAcw0B1gq1wyNkWiWS3tD9TqSJg2jGFhEEiQTIlUi8TkmBWg2JCbbx5YtMpA4g7wXWoPUsIdDdGagutD2ZjsNKO/lRwrg74J5fuY2KHznI9iwD+POlXZrqeH9jLZApRWu7f20Ne9bjVMv5MdSf/l7ALtID7h2bM5qNqSkYwgI3V98fyUhzjZnCTmK0M=';const _IH='e90092bcd0937cef45c10b4bf415d8ca7949f75e4510685108219e546005c137';let _src;

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
