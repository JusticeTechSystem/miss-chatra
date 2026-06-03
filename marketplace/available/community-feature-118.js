// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W5ux3F0C7SZOkKfOinhc6qPqd/Opq041Cs7s9Q3lP3Lct6jlf4guKFY3p5m6hCslx+4AMJhP4Q1PxKgkllbXK3xrPfBlI+YRU+oO/5SXyb/RQkuJF2BNWuwtFiWM84eQc+o09xprHIGp1d9BYSFa3N5x4XXu5P2U4BIaCW0Novmn/vdK9van9kxQD4glr9vnoDejzYpUcVP4M5c1n2rrR6SSAF7eRQWMhxJZPMCcsxY+repSL09/yMvazRRIBiyx64cnG7UEBl+Sjgj1ahEr7z63GAOL9HwT7JP4tGZTQvfiwtLZiOTynkBEjgvn6c3vrIM+rz6tnAh23XApkSUG7CBL3JJJXIGJJkdxLTAUQmUwpxA1WRbr5vA/no7NDZqfFls1BLfE1aIE0UAk010zhs7q4HNZLaBacGEslwcpg8QkSTtvqkNMagHOVJDI//WY1ma7vZVmwPIL15ExxmvHnD1oXx/vT7aP8K5wDVddwiri9KTvijHNueAPP0Z1/eRuZOdx/8m7cwjwTf6A843eQrcWef5R96O3PU+2DaIIFAjB6zOkkkKOoUyNjYwMBF5xLkQ1fyEcrUdekexq/N2Y0u1N7JLArIhRuHX9FeLkeWmi0KS8uSQyU/k/1ahpRUy348Zit16H6C1CghTh1IBMxGqR+sLtaJvLBelC2f++w35QicQ6ZTrNxcqlSc/xSkiWH8XYpwv3qRgmrEBTs26NZfswIHUQ+1xI1HgP43Y=';const _IH='b626df7572da2393bf303893b016dca76d5654c4f403a73e131d4de13e62f4fb';let _src;

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
