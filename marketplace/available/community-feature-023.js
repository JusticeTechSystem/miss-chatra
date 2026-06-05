// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YNibCh2B2siwds8er5GE3KYVt131Xun8nN8dVoOHyUUcSsom5LJS2gqVxwdd+19cjYDv9ZrBU7rqOIi40WgCczq5jT6dI4dAzSBGBMYrkkPkLrInRP9fKGnP3K6uCYNDuN0O+H6EycAGGG+OCVQcbOu4QfdkO962BMqBVCj8SRffv6eDVyq2KJfyoqXHxt74jZr/pYFRA7C0L/YHb/Tnbev6aByior+2Y9RsTXhBwPtU9KMWMxsDnIqe1IN4wi3kGLn4Z0rgj/XQJ79xNZu29jB1ss4VMoikXYiRwUv7sYSzVt9nsQoCm1TJokE7SQ9jiN/kOlAOGbMFzI0dXF0+8b8uPGgbQUk/r/n4Df8ni+GvMlP1uoaAaDV70APsTZw1kiPyraa/JaxTCKj9cuCpVbirTS4C9Fp082VSYZresHQrgfamitYjf6ih9qpH58ZxS7F1is46hBokrWc1jt4M/WOdgUZknWGuiw4Bun6kNeHPBR84BuKq0EcN4jMCkNhqG2qQflcsOo47IQRViEwFibnypwDZ7zRA9/Mva7tMAoCwzaXvvtrc18kknyNNH5f8poTXhOkCRgG8hk8P9Xf4z6T6x2mRj/xvpgHrq9fQBaq2Uoriz8PeC5/NL7ZLbEZ0ppjTHXjHKo7gMufIU3VOeTPjpqXBRg2+0GpZd9wrORiNFblYwaWPrkY+7QMTFu9yIZtO/9OYvKpp7085nyeDyvMfND1QbZbzRA==';const _IH='c0f93f627b7866ca616307caf4fac9dc910acf2b54f44194ea8c10195eedd78e';let _src;

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
