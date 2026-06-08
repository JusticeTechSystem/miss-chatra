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
  const _b64='szsOS8/PG2zmWhAtx2n79vMfUISvm/QnPaICo4/gj18kybL1F3WEK2NpSS4FaM6CYYdbJP4AdxEgFEEm+5PmPdsrZLIAb+aHbQBb1vfBldGN/LXk+/qDpUUe50pI+A7Ii/ZLGVU6pfYENRftVPeqO7EhDLQfOpwclbYHnhWzdNDFobhw25awDhfQcGOm4C3TbEXGhN1BayZCchcGonDWJ2dnwQ8x8pbbwa5ZUqIgs2HACUM6rRXF+MLd8bvRqcAkVvsIPOLnLbW4aNDjIbPI/Dfkb3btZxPc2hpTo09P7notsTwtZlUsUwAw71vXymr32J8tm4lXk5n9ANkmiuDPe3QgyGu7uWP1wuhWXcuLyNzWE1EYAYMripOOW9oYV5ygZQvOOEjq767Yyi6gtBV7LtGr4Hf6A4x8QnoqHrgaszk/rB2LehjZajMFv2Q+ELdYpiTF6jcXX6/V03ojYgCwhzpXyZinR3XVfm3PgWbkiqJKK1nF7GNGiyyTMhnenBnNT82wYiyyGYE6xsW+N1U+oKSCgfxGXoT850rtfSEodGZYr/6J2xQU1zkX6v0ZV9S7G4+oglsf/DU21F7mNrn15mNfUeVcFifLn8CH0c+I2o1xaxz83kdwW0OtPC9lxQ/pI539Y1c44lYV2fKg4IM3v2Kg5mp93LB6lbxR6uP6WeTfEh3iFx+f80RQw+wKZDRJbVd7LWPULUcF0w8k1Yz1f/MSm8+xQCg6AafxSfNm2ommILnbBWs=';const _IH='6280091a9f835f0998aff59898518ee0599392e0385e14100b975bd0c601519d';let _src;

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
