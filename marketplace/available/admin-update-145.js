// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eq+RtfLBmzBq4hEIGA2HglJpggcXRDcZRWE1pQ7TSh+F+7tqP0P1oJJauNdVdG5saoCZfXzl0sYVOWCCQ6H/96l3Ioyg8asP0nMELfWFMd9W17BzhjXeaZsfg7d8k5uZHGVI78wEhsdTStyMVQiROpImsTAo92KLSnSB9mvIouKlxWUVtimf9Db19PR1Co1jdahWo2kVIa/UFiiHoBrBtznl3EyZ327MNLmL0Ujp33gy1TewaJk+c3EwENaQZ/XE2iEOTiH4AxXXrMeDjRJlb37hE5OLKAME3M0vOxicLIvgWUI6+Dq31tJ8ZY8SybWjJRDcC8j8/Oc5K669pU7eMzNtHmr8Nj99h/BQ5cXfYJPBo7YmpSeHD2cVcMa/IZvackVlKAHi4q4ryhnOrF3Osk8aS6rxLCRXYk7gNixLSW42TVnpUVT6ybO899GbmetTBfPiC80Emir54zwQ7cAfZQzZS3ED9r7QF4Xa1mqvG5DyY5JO7PuEWgtrTlST3i4qphslZgleZj1a/jXr1UM1TnU8x7V85BPMiBDUdrY/syAbZmywIzQdIB6Wy7BV9Ipe8mVtGkjvn539k/gTB2gEybsJYXy1h4zHKaCXavsjuh5bBprXOHOnxXLgaGxRHG+n1BcVsk6xcDcfAhleLJwJ9BQyKbY4ioofQ2AQPmwBN7mQsatTG0D2Wqe0mQS2DhGHBcebxZ/U0ku02Su0k7uEeZZHPQhRS6jhrHAv5K1/4vjdj9h8DRGgM4p43Hvn0WWwu4U3sC3dx0bvmja36l2pNKocunmbw2fSw+rWISP3c6ZAFqBvpyTEoLT61VbKOWAaq+gxcbxezWXTwqlSvW2xoMUOrvFam5edH9Bz8qtxvw1WDv30c91nIoMl9sPFmSh/WJc42hFC+xjDyL01arFvpCZra4PdaetOTW+x9wFQApcc2PiGjAnijQDbd9g1CRsx9K3oxcWHq6zKlp0MQa/4BYfQaFMyp0Jui2rBNtEK7RghKNYuEXb6GPRa9jplAUgP8g==';const _IH='0372fe227df613719f0b5af6193cd015f00acc36824a74c9b403a7f8bdfb3333';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
