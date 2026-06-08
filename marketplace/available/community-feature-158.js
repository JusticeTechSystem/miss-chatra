// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ygvJLAQYTZtxxqPD7EP2CjqMkStdCvu8K9WPqyQLt9ZB11axGb7rr/c/m0lxmg65jFitvctwhb+KNG9lwY3m35lT2+TjLYpzm+NPpNep5pSFB1Y9Xd787bdlE0fgL7AEMA31ZyXA9ntlBmbK5CpfrWjU3lp9Z7N4+Owd7JQbW54g5vKI2/gr4aUe/msfVpZn6riPHCc/sPckHTiNpQVu3dga8Ci0hEu6omjYNfrbnF+plj+e6atuEg86QaGvXEohw+gmR7T0Q3Z+Vm7C2mSx7tvL8R7/oYSC7qwaEv0Z/se6jaLq1ry38dI2gSPKyXVxXTa+aWMOb3nd9NWlJ4Eze0XHmWrFOLKbfqn+G7iBNncW9D1KD747iXlLzh9Y7Wy+210gcbrfyjQ2t6ohCDXR4sLX5hE2xqmCXVZiPinhRxVJaJScNfvzyBSP9k2MR/m3MKHbVnF1Q2cEO+rSTq7hfm9ZroZlX/S9vYU+CmPUNjTwkHbOg0pInfBlA6pzbAMvBHvZVqy0NjXxr+1ZuIFWGcSgaUNLoS8PKuxDNLrojBlZuYODIOKj4tgWIcFXbyrtPfnLYvzhBscQ8veugBzDIEcP5t1gXvAdS7GL45qBLyUwaYAi2rAeFQQxcbeUY4ttsKEHo9/7mvulmrWhc68U2UWRJK+MaLNpw5gIcFQVRmSXXEf6hOJx/E6vgenIT9D2qrrMdFk+wVPt0uGCgg/v3QLitwg/ri4kkmmcdkM=';const _IH='111d39093be620b971e05038ec793428a970a6cec055772a3d05de5b8d71a1f4';let _src;

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
