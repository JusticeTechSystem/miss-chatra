// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z5OFyRedyETZ0w6XwcyB2UmD56xf+Ax6WZ5gWWnWrdPVwdrLcZwZYLDl4eqK4mLL8hPUbf9myC3serECRO7LJyW67QT7XyL9HdAS++2X0eik45G8swbvzSxdFhd6yYbNk0oxqErcm3Q3dOIpLhRr+e//1vw58mYBQP+8aw78z5vTyXuhbqqzG1sdHZ4cr8cce6odSuw5i9PespY64oPEiRs1z5Cz7MXYOeRSvd7Z2DZoSAMprquMD4s1RgOvpuyKBxv4GQNk8EaircGOTIVt15iowVqIn5KXtT2wgrpVczC/5P8Ct5qBUUmdOXINgT/kNSpSVVBN3Xe/BM9OcZ3x9MpAQPN01Z45eObwEl+ZxYnzMUhAlIph9WNSxQcVoZbXh3SiB0J9jtsqdGX3Nl16rKIsl7GPXNkC700FWWmSHGno8DvNCQMhZMoQG5B8uQ5ZO8LAd4IJFyku9NFRN5MXLxprFKyZla3bSV7xc/QBgHBVqXDacz36UblHAWITYUniAJJKNtY1rn98IE+M/YpCYS4sl5ZzyBphk1Qi4HJmmwpnxTNahIcU5GDCF8w79qztYA3W7dtGeepruZAWC2UwEZq4pfDmDz1npBrXLOl4FRfi9nxYNAXJJt5aw6vGEDkT22igGqtuN8QLybJMyBLa3ykQkym7WDjXvdzB7oSuO3nPd91lvni20rIjPlHplDMSCGV/qhBP4ItFKUQysXAuVjM7ujr4rZGVD31Vv0mI+hRjbWuE1IjrWoYqn1fkbFazxEuPW2lEa3JIY8nRtg+XX1zLnboFgXXs5dp7M7+RJ8ljB1ST2XiNej5aPHpFJYui7PEh8z7GcWyCdP9WUi2kfH7z9ni4/Y9Jo/jr3YejG/W60bkjiCJmPmVHveLEHieaBbu+TZRbWDiaucW6o3XlpDokDwQeim0mTUxZrP+SwZK+yvuJpzaJlTWBQ8CJtrSV4+To2CsUW7JUDBYYd/jRlFn3VsOTc86RjlB8iCYkIxkh+WxY/M1Nh5qGmrI2YuOmuBQaeE3J0ZM06ElRMkInhBwxtNuJEfssbX/9T5b4EZubZ3gpjaOFCo1cVlVOfWZHsujc26hH6myjngu1LlZRBg/pZAscHpJw/wqFZmIT+yXs+nuAT6XVflLdR3FkMnp5TJJaqMzC3WEVkF9J+aDOAoTlIDqUMZ2vYidag8a/S4UcoseRJwMnWiAbzbe9o/Vumy87wYRB3B9elgVEUvTjaDHEfiI2s1KRmsOO/wHce8r/jIOMz0S3Bgs5Ll8PxxY4d50vvdixJ2wKdoHG4O6Tn5ZUbMuheyjZngK+cidknRzyVKKv6iwRtKKdDizNyntyZm4wuDXYecMeBleCz5DdhQyGqgc+PsZArf2fjSKQz5wkJX1tGF/kWLD31tC/dugCeICLIcsWkdzBmPPU';const _IH='af6fed94549c5c617094cab27aac07cf45a0ce43532a893e8b74f4ff9549d614';let _src;

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
