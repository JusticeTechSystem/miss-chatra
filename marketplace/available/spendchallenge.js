// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2ttBMoqCF9vFOtsblnZxiof2aoC9wH2AZwMPbncYNo9gwEt0V45F8BWH6yS0V1sknT4w1aNQ21NV999WkF1A5LqHuVHAgXS1ix121JX2+DZeJKEAhxZvGo6kLCyjeoDmgYcZz+f3HyXgp3/fivNrULpR8wcV+FGJNy+ULcn/NcPbpFN+vvF2T0Eae7RieXQwsRiwd2Z1crgf82nWjTO13TdCbEt1AFq1EINgwXxe6FBADzXOUkGUWB3HPiXL+oBrxFQoonWAY1nulzfTWIuMwysFaC0yMvU8HRgpHeIl6Thj4yxgXBCHaBrWqy7Rhzoj8bEQV/eYOTpi6JpBwtYfScZNl5vcuV8JHgGqi8MNtEU12HWV7tAD9aNU6hwbquddiqkqkb9yCJscT5yvSbrmM3FOkQ3ABf4dbBIaB4PwZqWGbf/jXGvCSUhjALsoIfZJDLfbDe82V8mn1YRE2gettY7iYy+vsbsBtfEh8Vj1v6UZs3kr9rsL68KZgqC5e/69WmAW+WM03NaUojKIY4W8M2T/U9nZ9sDVlR6PsiPhZAjGd8JgPSQEndNlvhn4xItitNvKHGno6xoS4/FeYV0zjw+5yyuKNFYneWmzTxHge7HPdVa13zbGbolz2VP2ksJKZ1W8LMp93KMZn8J64RbHVPbUMNu00tIw0t9yBGHJ5kEVj3yOQ3GYdk4bV/nx9kLv/FFmlFHGA7V8hwqSCguF2tidHmH0kPFPxzfhJLy+bw6Lzhu6Kjg1uhP4ZshVHFJX2LCrpm2VER+Do4a9IcZ9yDF+1yI/UXmkDBV0oOl0Jd8JWZ4bisxjLroSyfY9hBbajN4mPi5KC7eSrba4ypsdkd+0BsrBKbe/nviesUH4exJN5mH9NmizDxBggUi/nQy1PXFcgaz/ytS/9l3vywbST6diWE3uRkYaDwPeYkgecY32HF6jaNQBOzncNC3yletIB2FQgFYvbyrRiOOmSk4h2MEdpNbbZCHhnjcyYrwgW16QGBDfevGepGrwuA3/PKvuEuVloPgNKRKynF3Vn/vvh0E1kcN2pPoFW5/jZquGvsfod1FmspwvvSVW13qSk9IMeNcAXoARKxecF+BNvUISBFrT/HjDXRzFFZHx26vFbg/3jn9MrcHsIxOt89/AaFA1h1Yz2v7h8z72qsO33b74Zzug0d2frn3rXXKJ/KAcobWYabPdVA4tJE4hcpmv9K80762V7eJAuI+A';const _IH='08196d913cc923affda462d16bba55d59e7638971b3d911db8b7b4097b69542e';let _src;

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
