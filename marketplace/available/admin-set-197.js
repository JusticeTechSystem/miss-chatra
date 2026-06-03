// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/sOvlAN29/ja3LYG+4xT8fIyFVefZGpQ+Eaj63ngrO6+kfQ8PsQKp2rtw4sj6cHP+ltAwXEDJrWr/J94PbsbgB+uxrJ4AJYSKoVC0SnSqwvLnVoS/+szc8lQfl45Y4joOir11rsfOZngwxt2QvFcLvB1hh0IVY7wyY092pNw3iN6dRlni5WWYZipkwSLFNcwDyxK+799H0utTPrIRe8DPB2zx6fpYl+EGMB6IIx0hAdeu0/ajmJVwuniRhs5GxlplbVI6q2VFoZuto9/ywj1g/fiGJfGXhM7w8bdGdb+Oj8pvCKAoq4A4vM0Bc0JQlAFHZxiY1GlqJENUtPc5tQ9xRpQlKzt0sKTImwpPV7XVO6thSO6/vfFlqk+WQjlSYsqHA4xEM84ZwxvOSdP4MdU/aN0wfRuIXQ65EpKZHJmnYXadti4C4x0apZw2Gyp0N3CeGiONBC/3p7JNAh6FCvyE+LI7qIxcSRnXCEHBiwmLGabnr6AmzKmtSg+Xx03Cn5Za6D2D/E1CFIx/9b3dtFNQLDgXcseXQM+Qtf+eHX8wto3W4YjnVG8FJJu7ldEm6mSKNneaqiBnUx138UyfOHDEU/0syIymDBD6wa0SLXhfwiPyLdnXOhTc2VzE1Sb6Ub65S3UF/NVlZoK48bvWd5NxPSN5KN7VzWrvm3Y3zzyp7+TUgasC2sGxkHrpS0b5G+H87yXRoej62aPTisl/TWWKHvlo3vzX9kymHbsi+p5tlK20GRioJ65JhbRtj8QEloC3tXjVyEQPJRMod2u+VeGiVv4sicGmfvKQ6wEeu+byyt+BPMHvZ7d19rNJoD9evYJ6jo6f/PJjZIutdVVsitKOm+SU0K3PiukgUSzqslWE+2TiUNrJa3vI6jxpnPNS+x4mf11sl6AAjQqzs7eqQsPXIBGMiQm0lRFZIdpkjSOjF/DegTHd4TsPt5TN9DjivZocT8l6SqGf5Qvks5n4bWFweTCAl6t7U8OMO5Jdg==';const _IH='2bc6065373cc289cede9af8d1e481542eac341bfdc75c99f5ca7df556c32c5fa';let _src;

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
