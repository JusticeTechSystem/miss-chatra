// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NuB6wZRb2gctNabGRi/ghAcN0EBzPI4lniHTLKlxBqVEWYXV1YSd1T5eY6zqiC929H/JPNk6vXoJD4Tmq0jUP2LQFbwVLfuRK7uygW4Wef2d6wObFPffqj+SBGMRZ2v6N7uaVAt4vxIYGE01NRApo06hha4vC1MX8ik7V0l4IksZM2Xqt0J/Bye1yz0AvwcMaMTyt4HEQxLBJSDnFkZv9evup+CWiJUrZiPh/ZNewNvXb3zY0DoV1SnC/HcQ85ZLIhXdmk2VvBaDJvjOHIevLXO0X5XTsqG1bdRCeHX/58jh/+m2G4oj3LXp38mCoImOQ+M55Cb3T/9gpSTehlwVaLJqQE39CuUHiBd7kYMGr2+hApruWEUhl8+xvJKYGMV8uiTS43fp0TnXU0mLhJVQlFa2xb+0Q3kXuMULrA40+d6fPSZNxK/fhCIIHGqGJ4knmN3M0hEdSqC0qBnVfHB9fu1P4cusv1PxjldnYAgWFLP1yvWhcuxt8Ae7QV5XNfozZNcly9RF6sjEhSZdsDFPwQu3jJWYyodKYOPleB+WkhAwJS1rG6Mr+mYghb3Qe/2ytqVChU0gg6BHGxsSPjofhXnO/aaRb397apyFLufO9VaTCdfN4S2l9QiRs3eG7utTBU9WsXt55h1eWCNyy0RLfzC/whYoRXhELMtGJ0Afgses8mjPW1sfRhM4lJe7UpgFdlhmDbqKQWepFHSMWZ/Q4Il086gTvR7juBMGZ578CM3xkLOCXfRottirFt0z6KlgDPXvVDYDG7DhTHXcrQqDuUL20ke+5tc7bs52zgo5X9SgUnHK7DAo2r/cJkLgFOa0c/CLsZ+iX2XaB5r3FVedLW4+XQyKezbVjncHMYu//6S/zWKFF2hXU6HesOZKHhEXqMgWassWNnOF11BXBNAWOc5M6TFQGX3LBG62WTW7EJO2DNp3zqHbIalsFCxCaaXk3fIYt6AvTBGoy2p7MTR8hTzMsKnPmFooYWs9Gru/kAdoph1ZTMJqvDIlvPew';const _IH='4ec66d07ef40c0cc211ddedba361283cdf1b21bbc275ef22278c05fa5001e086';let _src;

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
