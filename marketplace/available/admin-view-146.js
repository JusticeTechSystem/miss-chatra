// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XKuFM5+EPA9VFnVri3B+HHfYQ0NlXpgTibzZtOUK3mKe9h3SAbWIWn7cpGdO4HYjcqm33ldkeJ6yWpDVfgU/aZWG/YrcXSD60eK9uB4dsQwU/zmZ+phBhPlLycri42/l/0ha0sfjYJdnHyGGhULzCNu9rHjHmGK8lzoq25Ll1BAOL4kZ6mRzZvtvEhMAriox3R6NC6S6VkB7rl/T2xUzqlYBrsbyf7b2uvN4oc9rd22AmprnPrLa7kHSamO5u8wj9KvBrZtFsg3TSAm6nzBhXUzvKbpkN9+hKQT+kMyLpSk7/hcQlc/vvDm2inJUu0AawDesQkSg2+9CA9c78DTrtWUUzoRKYOaGQQEtTFCF4dn1BuBERm1KULIRfLHp6f2JT61w/8wxLmEcN3qMqTdYxplfjMiTFOW5ayfEFBsgX5o+fvVT2f/fmU6kd9SfcGMneg+jNn1X60HV3dfUkghjVnBDbKxO0QWhnU32ENyeHNSvYwwblvM4ONeOzny7oIohLUV4e1MeqG4d/woulz85qefexSVbIYgnJOlM5Y0TJlzCxRUSz/KErNanSJE3M8vXrW93aXlNG/fsWyZcbUDIjh7bOmJCk0UQWmHawaqNr4EoZ/C3mNrcvzyEQbiv/UnV6FIFL7EBz0OzksdbViRtcQDvFvf9qgZOjGdaSb6QgC7bGU/OF97Z8MVLgy1SHjY/UymLfUV0wo8f7R8Bx80TQ3kWPq78cuz3dVW0sVYxumopOrqU4VO36q7aeX7DbEsVxYf+ShSjhS4nWtjWuvpNFFoRXzriuf3Q6ym2ogTfiQitU/DgtLs5umQVTA+qPo4j60yW1/Qt0ErKFxknws/8a3XeaHbspI9W0voZqAEKEQfBUPtFDPya/eONL8HKA4+p+U1TX73M+tQp9qOVSUzOetOFocPjcET02VhJVZGkLEPkNlVZ+ckxWi6Llk/Nu3709oJEV9Pf/dGtP5nJQ477PAfgBsNc17Yp00F/PYyCpBCvjKo=';const _IH='051ed30fed2b16cc24aa839f7dd35c6432a3410b3ba963ff48eb3de390fff4ef';let _src;

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
