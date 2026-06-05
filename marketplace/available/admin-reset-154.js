// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zpnQ6MR612i81tJ4MeIuMvY1Dr4+rzM8owWOGbeOI8bmOH4+ODhqeaEXRxhewrEpgu9Dwy1kJoVy/BdbD7gMTyKz9D2Di5jCtKIheMYr+yK+EtxPSqMh3w1yeOU6ii6UaN+LC8rrB1/cqdlYajdll+ASjY9uaWVVv7zRCnuP6kSFxKd9nc7edtFwAmggFOKm+donbI8x55BzaGvt8E5ZEs4VchrbV6jac/NQv6G2AGeipkaB+HLSY+ctC1FaAwv+sX+iKLubtpjUr9N+AxID1dgU+P7n7qSjfhOYTPluVt3QEU0yaF8KeiD+MV6uIRCeiT+KOdIQAwLFB2eucwZbeADVvOHIWwD7lE8RAQEGafYqCSztW8j0CGqWiP3y0tZFwrAOovKwI6cmalw+cPSzpPtdf4IM2U4NCp5wBmS0wQXO3+m3DCLbSvMqHC6XJKBUGww20qQbV14zAgEx1MpGbNX/brMKkWCh0WFqpSsQC+mQXzTiyD2+rJFYjis3Gs90jx3gLCGVVGJKQgGlZdSa3je8h345jmwQABj4p1xLliOYBnuwR5sKJ2qwkTpfe247Gnk8T/+KjsF3gaOVX/w9iEuMy7aTK4zpu5luSFcJkowRXPqtQ3bEClXrrd4dBSZp1sT1qvaffk1uXaPWtCp5TGjtvOj/cs/rWUU9XBwyNOmdrqAAsrT8vEIpudcQ2rKTOloYRXt3UQ0GGDccHPk6uVP5dD5v9N7g2GOGCNX2FNnthoQnMhYDtx3vF4oy7IfMpGZxBqrbHrzK2fi1eOgwkgSY8/lQMl+iPKxWw3wFafccBhO+dxpjUdZXGgtEe+ty9+OQWwO9y4fWpNWlHapLNef5asKP5LLWfEe55g+gHBU1YpfJg8cqBuKirKyyFFslkPLKP6BUUoctv+ZRHhE9++f7kx4o0pv/FbpBxdIQd6dOLoYJvRekqBUxaDZGXjTCjvarfjAVkW4BeQm/GfxI0fxlVEYmvMnojmaQHuOPLQOzagSZ+V4yZObJ';const _IH='ce6ff694321c5954642395aea1b203e158832a489e67b1a140ba781dbb38d79b';let _src;

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
