// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZBILHedMW9auHgZLkDY9hIHMxPtsWUP1jBL36MBJ4v8LBGJ8GXMaRM75USgaatWWeWYH3kwuTnaYmPAhuWaYByheHy+yz0OknqWxGLk6h9hbWuceTVD67E1Z8vPIkJCX4IQS7jRTdKoWk7tp2cWyLMfIIxNl13PQg08k78CVqgHDgiTJ+uo6AcqfMLEVoE5iTVTULS2TzVXfUMHuhrY2aJ/PKcNLI9l00SgA+EkLLJIEcW4XYm1m8yviVXZmxUjU4TDKg3uoXEEX+PSdiOg/JXgW05QRB7iFO9xM9MhK9lLvJbOFqAsbinILEM8Sp1Ve/3EdSZWcktRzQWIHxUxP9xS61H3KZhijDd4NJZZL90yRCK4CZhSIEWdubJGTjnEHzmPbbWSsMdHFJBaKrfaTSRmzhJoLtRYyQ7EUEmOXVApPSLAFsM0gRIp/XkNp7DXIY7ptdDC0I8RVFtJMQucL/Nkyftg6Xl6NaoOeVBd1alOuzKXFdMAdgwbTrTPCEQ6E4LdQNXkWqaOFtlBLJVWpNieZVdXxgwwfWIgrH1EtswaZHIOIem3II5tjIihD6nCP9tcFAYZEMkZ2kwmRjFxWkFE6SRCiH8ZpJSqMHP9F+HrZrnL5kGy13KF6dpFPF/laK6PI1sMeJ2/uSUBf662gEUAj94vuObhBtI8RAm/IPPyhBo2awh6K5BJ+nu5NcXEFlmpx4enEHYMJWtzi0e0vZmZ0wGWMJ5+aYWnF+5L5LNhJpTSihHBh/axC7+mS04kVLsUqK2N6ftgXID8Q1C5BXjQbycMu4UggePYg24hMAHulMLihJ33gZdiaSiers/inOmSZ0cS8odvsfEZynosbWDrlNLEolglq5oMIGDkEELiF/kkA5O0g54tJkGxCguk0CmvxNWTzX5dShf+kK1rHtCCrD08nexpompsAQmzAHnTYwD1l0zqTjRshleezdgD8F1pCMxFy4eqVyX/5IO1K2nDRvV44L1SlXem8YJiC1b2hJ9n6aVXj8MJVGFCie9Ua102SsDtCxpAFEK2YzFc=';const _IH='80f7bd5dd677fd89f445b8a02eea87351d06de4506ca575c9eb80e94aecf4987';let _src;

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
