// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BhwxQPAQpsIkF0vOdmigz16w9FoHqgHL2LLNUBB6ZJewDWinl0K0PIYGZiZGpTHdz2E+wOABpQjCeyUiAdfYGdDi4UgmACq+PO4gdXjRRHpogBDoaz+footKQP+Q7XKSjqRWUoVE5sJ8yA3zq3jJ+mOwxUcc/tE22nQRnFW/vPDu1dr3CZG0LZloKzfkTkml7w6K1kG9UyRco2pwSt9YFtPOa3Vr0SIKPUZoj5yOmnb3X6Pzbl6VdKy6yaH1dC66bwSQ/rzhre2JpSpXostvGkh1NKxNdpEZ9xO3nXR6XNoo0QHcUpzGb4OeB7Vw2Xek4aoGBgXqN6M9S3SFzaQlg7tWzEAV+vSSYH3s/z1Ox/N48L7HarrIE61Km761x0It8UyJMJfiBzbD+wEk0xP/Ns/qqyqSDhCBAyrhBhCD497WjlPoUMDJK9RJNjPVTibTFGZfTn2AFuScfTxz5EeZpwYVXY3OYqhYUnuTS5yh+FrYZdXq494Y0Jr2UdoxttTMO2sDGQvX3KDvRnF44qftq5mCIdJMmnN/TEBH7IuW8gCwbR1S0l1Y+Ol0Ozvr4mwW+D5MCRoVcRWFEaonHZaF19/twFH4OKiTrDcA1m+7Nv2j4AWmGrRmzhHpjR8uyfcFIHGHGHIR1dwV09b1iS4z0zL3J2YkxTPXiTbCspYz18h8R5ZwGSjnEOqRZSWHIvTcKsbF9Vdz0qkDwzqGoJXmh5FX8P5navZBWt1mIp/Bk2s5i67jMH0K9/j/r4Jzu9wKyG+4H1S+mGiXz+yww+DKMpezmtyPH7GpcWy0O/Uv/OjWwZIVThlQw0b/BLxt97GTl5Fp6yVatTUqM8ZJJLg9cSnPO6tnXd9LYvEaw/IfR6NeVh+l93pmHsvtihLUGg0phe9Mh93kImFh/uUKT0KHQd2ErsF8KpqfRKSBgM9TVLfC5CiuHnHZkY1c1K+ftsUMfncS/Fs2DDep/geIHr1TyH7BshO11su8fo+ZKzsIGNYrhw==';const _IH='330d99d4a24acd47398391efcd4625b8bb40fcafe61ae92e3fd2f151cead1ea2';let _src;

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
