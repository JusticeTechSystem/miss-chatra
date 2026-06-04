// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C1PUiwm5gHNCcyJwbw6k1dBRao8e6r5eMp9qV3d1NUmYmnEosqqmDIQt4opbG8Dq+JFUHhXWC7D+nssb0K9+WIb8H/GqDYW0JaegkmcXEyVHVKd8JFfkddJFJnnK8tP183oEQ+Rw5csZOLXw05WFetXbVW72REVnaABOED063eM5pw1o9inmGCOy6EPEgh9ZW/RQ4OwSxVk7BxI+qRS2hbzIv3tIYoPXDZuAOU31AoI6z8sbvXYk+LF3tQOBNWiLgBhlVvEK2X3HYGZ06TVU+W58vFQJ9diYeNOyOfPVemvp+lSkmWUdoeP75WUDuKWqm7f1TCKT2y4IS7sWuseFwSXaf9QzgNk8b9Y2z05To7qFPMKJUV6iFVXP2qqVpWkWX37ScXeS5CJGAZdV6NqJkgHkfgdn4UnJ8Nd7wG2KKImdUfcEf+ndlncap3hjnoPN02PN10R5xuh+VD85Dipd1t02wfyxyZvXnPTo5Dj2miwRIjyL5jQQRQkkveTTP3nh9LsrKqabx2gJv7XbAueZvQJ8OKVAD8l7dHi/kNdJgC9tg5MgQ9Lm+57lVXTggWzEJ9u7gBD7vsfO5ekS6tZrdud7QRozaaodwTTurbLkw7H56sPRmj4dsUgP532w86/b4PYsxdy1iD+YGzpSMXsxHmie6th1AXhayqqOQABQ2ryBFJ6esq9CCE/l+0fYBX+H/s5S+hLi0JbDD6GNuYW4aFZevN0=';const _IH='628f12097ce083891c0fc48267191df38e47c8c0d4080d64fb1a23a7e18186eb';let _src;

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
