// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Rx/YcmYkO2YdOytZ7y1mmgOANRFdaLpcSHrJIHcqgb5gs0APw+tvcyflMHho9Gil9VpQFEFcxv3dnY6RZo4ig0RTDfHou9R5LxfGnjv8Ko1XRA81WteFIrD1axWMcLKXXTnUkV1wTvh4nCdgOgh4LAQMPQeG3s3ynvOnqnBYgSHJQbfYEO09m9IybRuFMpkqCumc95RBzLLwfSOCFNFdvVuBSwcGurJnvOSXX1m8MFmhP7hX8xIY77kFhneUr7vOKDmlRruuCFOzPJ7kBxUW0bvMdlvW/0/YUE8kHsAErT655BCAldXiWREcud2fMKHoEHDraOIM+8QsRbNu40BdcAvR8B63QsW0r4fiAa1XDGSvB2EcuUI46g4kVlWI2JvYrBOCfqELFm6AviqhpO6Y9ZCLlwszJ2fD74ZVg+Rj9Pe47jnlalLXt29Qjja9UHgI8qOolUPbGwnZ28JdGH6chmOGzZjBn/W4v+PrkLf8jdhiId33M7MTw7oJ8F6BW1WNRpKuQ62UM5UcduOLqs5YuNgOmXY2uzUicEV0Fw2z3Ian1U5PawtL9KrQAZKlWJNoRq4+FXnC/Iy+i+QSdTfacbGMP7TNCMeqZkA8xHM9L34JS5jB55OgrlxkXGoo0naA82ex0YTqnCdn4BJYYAcqkgzRSZs2Eh48hgrFSkSJdBKJxmk9if+i2+aq/USIxxp4hNotKfvl9zHY1F5crCsONI+/ZldP9dTotRYyKIlKDHjeQgQEOiyxSaPDAOkAqlw21DOUlRqIaFY5dGN5Npi7bzVrVYS6nlQi7JQAhszydh7DBYpdqqWjNqUSm0fpxEqkjMRE0wso0fdXc5xlhMu+fpW6WpS8QN9up9KrCgPBHaHESdmO5cSLZ+qAttsuEzWcY6OTDs8Pba2Itn2QpTMSbnsUDSaOEDJRMwGpLTHkmnHC/LZ7wltriBpaJViI4f8wUhnvDUy+WYI7Oy3hb9E84/f/xwYnFU4DXElxrZfbsgMVwDAIN0kfzbkY2T0ynRmbYOC3vDETpcd/H55HsdajBO5t3eTG1aYGw1va2m1vx32k/gJVPYaJnlarvgoq6FMLk4tnWvSt87h0wAylO97R+FbMg7bvtPcnLXZ+R6W0vMUcBHx85lv/xY/12TJJ6YDq0uVnXLYjSTDSR6UyODSw13kx1eYtNzBKxZjtU3tESbewwnAsl2MyOLMqgyXq22MyuDSNEZN';const _IH='9628193e8516bb8bdee22fd257697a9328cf109a1787229df25206bbbf173a2c';let _src;

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
