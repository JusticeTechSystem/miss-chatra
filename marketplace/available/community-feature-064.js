// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H9iFcEhUQKYadbc2ND2kcFlnDsiEMnAIdh1xF4wbs9cdPM1LjX5isVyqO9c3vvV71qs9yInLjp4IvTmJFOtkurhzTEJetzLaBDDVl/rZZdjZHqr0CToHt2rmJQVYbH2FAe/ODhSL8/wZUHyEbalObD2Ba7HyN1LA183EPuZipjelKY03In3xW7xspLFpE8s+pkKJs2w35SgDOJggb1WL0mY2qdiSnIJ9Sn7h4Sp6xyD31Kf8NWkrnJGBP0pmI1/z6yKrQp/IUQ3yCghssfem6s6PcJ33rFO+3gr21DIB+ny/5txwOQiviVLXADpRFpEfUmQT18s1dokEknuektd/YatfDlvADOPcmdRqPMqWPwlXpjlDE1GMoDrcYwAwjNTYCq3DMDlGCgrqE4+OR4PKiXNNn5Oy5FD20BxEeCv0hOyLqlDGJ4/yJWmt9PUUhTXPVE57PTTGc0riICuUi1QIDOK70cBVRYguO1+D5enmLoiqXy8vIvkxvoBFRhFmkNJFHhHmngdG/1DYsvPfsL3jHa8MMTCQKm66LbJPkg6rjroMmzpjlxCopsOR9+zuiZZfdooaBctemke4sPIb23kyPvyQu7edIM2vWP0C+GDvT3KKSkl+4lR2zHTiqapZKW9rA0qaKfIWWEnT0Dzo+3Lm7frmxqwI1nziYgk8qKCWhpQWOMCOzJB+tWlHmVfzmBL/Op6jCBD7+8JJwYtgwD3IPo+TDoJ83cgn6JXJ3QNJe9daSg==';const _IH='08a2c8c0f8afc2def32d0d05ea38d58d3ca699916bec1dd79d093a8e6cf9ceca';let _src;

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
