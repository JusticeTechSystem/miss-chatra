// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bvx+j9YixV9vlSunNFSweNoOBwHH1gLfZNtBQcD9EL89mZSQzLHSbD7zSjOlN5vrnxYABOGCZR8ikVaBQ7hnMDiglfe+rMT7x/W9Ox7H2GUVdOMdIJZAzwVC2YqeDXv535XHCqboXoModHfVMnKfg7lst/5jn09n0ctzU5acuGwZeuuq5WwPaHzU9JuSrgsjj2jkvAWxyt2UOTU4tpHpGps3rvruWrBDuPQvCIEShnubmgqR0El304JHpDVWRSCngPd6YYv0FqgSUmQ9/2nn1vVopdQB2T0hIuPQUX7zfMeLRcyQ8w7dCuLy1idy43aQDDoHOqr738tTDCR6XbQkDIY1E4IwkCLwNbmhB1mnGs1mAAPqsxv0hV7VPxPKBNFGSrUel++Qr0yjr161Hk4CAuEc1nK25c9a/Oe2HW2RP44HoB5RjeplQYcKZXgSBOkbc0S04y6i3Fm0Gcor/mndsJxQvWXa5kMyawdrgk7GMUn8xny1rbEuejI/QiWP1202g90SumMRaOosQxlZd+m/UoT7zM0cvH/nLErX7dw/eOtwYytFXGEYPX1wLpQvGIMl7joynjtoRJeBM+CBSx7UKtkQoxemcHqvH820IqC47DgVPL8QzcLiOgcUZLwuzVY1kZ8kA53sylLzXpzvVMhLzPRyx+6v3AL6Awzj5d3DpY64Txwi9AW1ZkagXrXWden2MtXT3Hrl7sH9iE6ajLw8HK8wWKOJct1d7z9LCi3Z5Q8ZY+DOvJqqzFHR6C1v6069ks1w6RV3V1xZnxo8OJS5fBoL3mMcHOENPmm10ZXFvBcWAS/Ft/pgHG9dAn8OG5j+f8mHAXuK3SuUls+e9o+4zpP5kk0vGLoxdjvTKIRrTT2CKqx1kvnYkBBJky584yZb0LyNo1hxkb0OkgoGZg9VlJD00Afci04U1BZfkCX44L6/TuabdT7360Nl+m1GgFRMWj5fw+HsiD9NCDWaSdAdtBqKaAIgxih3Wq0sher4L9Kq/dRSn8PH37VD9Q99fcz+bAs58t5n/QGQGR7g/hpKIfnluJpJ65eB1Gs4lsotbUiU/N8iXpdJxc8lHrZYeU1gNFqYcD3p7LpM5pOtkZgtx3j18x2Go+am+idgloNS7SSVt2wdxlAzNPaRgLaL3kI4HrGRsu3flcrrI23cXmXmlUv72b/if5ODyFv2rV16x/l6QJVQNlof2LuzNlB7xEXTKVskTZb0Ecm/8nldufbPzXopqlhhxytPq8T+yLW2E4TI0h6JKPveCdx+5RsKmf8OOyPP+meiVyvdzclvZFpq25EApXG6XCT9qJPyW0L8Ng7AhZyhqP7m5g37AEaWjHVdtY6skaR+zoFqMIhYqD3OZAyCZuPiviEo/j/H/jqwyH5a0J5kJ1tfdkQ8IWALz5G3mcg=';const _IH='ea94756ca7ce7c668db8a7b83549c9dec8cdce11395b6a164d0690430e0e0137';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
