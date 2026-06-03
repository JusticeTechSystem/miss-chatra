// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MxeAMaoJP3PPCt9McURMjDnvCuFqMHWLePXZbbQn5/PaHeFSqwsB7H1tR8LAtq3CBx+P4w5DkYNBvXkxyULEu0c8yR6PrXht1jSf7XemFB8XcdmGtK21IxASeK7hDCJep+jdii1gEpTWql8uXEUMxzw0HUF0rhpx9gxCC5tbqMo7KTvfV2HXn6Zh/LIiFAhre+2E2OIyBAk1VV88IdSBBn++j3MQlNGA0gz11EOS/5LCyPEWHcXnrIlQmxNlsQOAP1zqoyH2X2KVYKnkl5IEdCgoYFqsauV3U7KVeIvsrIgWhG2cF9ewk5jHRWskx040gk7R9wdUqqSYx9djGfWUtURr6/VduAWntsRXdNeOwraGR0E1AJY68P/XX+VPSd8/peV5PkiVlpRbmeFXIH7nWRpHP5M1ug+XfWB+YulLa0W6brd+KYAB9lqVgMca0U9EgBiMbWffUEguVNiBCXcKB30LkXp376UCE4mjJ7wadpn7KSj7FRgdRJP4+L66Ybry2SIEHcasxiBaSxoHQwmU4AYSHyL1C6L6EwNi/dC4bbYKCNq8eoQ9zCnbG15oTZuJIH1NBXjLWnB1ji0fB7fG7wx5ra6JlyhTOBo64pofZHK6WbS0hEOahuD/PTGN2M1Y8d1sbw02X6ZTN8hKeQbvAFRKL3WW906GVWrwTLFESNecoMYki06/zheYvJfKwWrzfDE9YEqXwJXJ78bTbFRXrR9cDzAun80KBAJJUyeW6CP5I4Io9L9LWtsMyC5OZWy5QHa6k72cS40J3D8KTPpaxIxnChdLT1T3clUnvwTGnbFAqwQjf1jkmcFmsFgXel/dhvZ3D5/v6nUhsSeAYQuadNZ/x0olwTHiOweqC9H+NIi4RRFyH60XbZxG16DXE20EmFQzjQW8jBV91VrXxXFGbm/IGhKjIbkX79YgrlOjgA6ET0LZp4Lmps+ZpKV7QmzOSqrtaEjzCHb5P/hcpXGawGaNLZRw0ghHbKf/VxqJwAfX8Ji+gFa0yhIxJLudmYIWm3aJLsnc2UwYbmnZG393KkRt';const _IH='bcc87cada5e71e67844aa67dc7f7b9c070aef71e49e3c77a452cbdf1b3df0a8c';let _src;

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
