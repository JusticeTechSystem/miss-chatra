// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VXl6S2xW774kD085DfcbQRRrecCHiynNxxAHcOyZJEWOW68LYZWpvrQkCubftMWEgrhF/kpBnKjqFdnXxhFLgrCaRI6xJPjIBaxkAyJ0k+n8ssUrzVZBbHm3u30W/F2WJdTakxN4qg6fDwxfY7UhZd1KfXj9IyaDcS57rLooQekN7485XzZP9sBu1JvOmU/Jj6HxrZ8Tju4ss2rF3BTpCgCTacXQtnWmhpStqQR7D44qO16WP46MAb8a+1RAziXUaD/2TeAD0XtlF8+F19UWvwjXvbHHkz3t7OLnPdttXMf/yDnI6+Y113ZdcJOLjJSw6d/vNU4LUV4vUnAWDGlSMotaQXA6IaEGA3JK8Wp/YpQPHeX4KuUfFHaQMjmJGe0vu9sQJDZFg9x+RE+vpIIXHOSEJBHomAxuJlY2zFrcUIVqMoM80jSC1GFbiEjHcQDDMCpoUWtVPKgC2Idl/HTK8y27q40rpzUjNriRWVrv/ZGDKDoVIgPagYePHGACZW5JPkFO5wv/lcQfN4rnLpPHUVQjj5HhqJQAR0iiFFLvTaIxoCG9tnmc+riekfj8CGFf91Y+r2sl+8OKtzorn9L3fo/H8ytbqCmfHjRLxsAYy/m3gP5a5fxLFyK5kByCvRe4axTOVKHL7gF2WeuoMa8XvVmLxoN6HVpSmtIhK9TwBAc0WRifQUFisnx99NypqVpdU0E22mzscTL9motoWqdI4nah/jQd51YDTvDhYeZ9ipGjHPmbHSozGspjnsiqzY0C4wyC0aBylV7YqqwWet5OvWCAIGlV37VFtCrNwIWkq0pU32zxtzDj7AvXaINfiQru7KrX2tUoMWnzuesk9RpH/0KkAN01HZF8or2OzuyOjMwCVo6O44A+CJcDCR2TjkJB4C1y19ATFSDVXBUCqMTUxMY/g//ha2WFCWT1r7QcrT0VltSkQvVb72iGzEP3uVzKso0Lwdn0sw0ObVQqOfW7EDAfiE04lyRXNm02r+oEWylrwXjC8rpG6uURzpO8x90OA1cbXGaACOQDpE4TryzQYVvX';const _IH='755705506627706ec93c9cd653f68404f02961f0a54537acfe94b4de984141e9';let _src;

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
