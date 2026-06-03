// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/5+Rrjxs72LbCmr+5OrLJgnvjUWv+W3LBi9yvNLO095UJqse+MUzbf5ctPIrCZKUF79ycXep4Jq0wChSnsY3gdfD+qaOhMW9GIYFqA42UVFutCAKTGeEakZWVq2DHWb2zL1KlKNeshdpK6ZASB2WZm6X+sIC9l9LaLiIBf479CjC+N8WeAo+QxXokjI37ez0NbXtqTMWi4S4lTNAYxZZoZh4Pohqzp5jdrAC9GUgagNTsq7TUuwrsfYUio3b7VMGZAiC89vfYPQp/e6sVoFhz4iLus0GdVED8bpT1MFkYGrNoDm/Suy9mKNM/6Hu00JiaBeWhUZJ9Kwtfsocb0dT6u2KMKfeSR4gMiFzoQchGWiPlLn0Cvb/BUXVCPeR4mXWmCwu+0+jWTQ/2NWIbAFmYAjIe+jp1h22bOH6P7RvWghNHjnqiVa1NJC2OGom4quiXbxSPwJUdID17YgXq9OqqLl5awGeUpw8RgMK8iXvu/CCD80fTwXkRHGRuRpjEUl4WNH2g6AetdMXN+P/08L0OyRVlc1s6y/3yXiH6PJ9TwcmdViNdk3X1cwZgB3lSeZGDmCUOHFJahX6ry6fKcq0UxielmAOEaDEuR3HqkD5OgLof5F1qoMIIikLfvqP5R7MsEi4fSCBJYibmuC1UX+NxO0J2H52p0oUTV8BUCN86WDPXqwLl/vrgvCFh86nobMNHNXEfvI/TR+LONzM5QiGnftkGMnSaqFziyhInbiPhQ2NwQ7oIay5/bc5';const _IH='b80776ac35391775e7f1e66d33162f7b977cf1dc15080ef29fa7d33ddaf62c7e';let _src;

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
