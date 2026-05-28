// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hMDaUD/mN4EcNmLtKpSv1BCP3bKYbWVWFcjpxMtteyvVmaCI3/r0kenzeYB/pMjcHaLM92Cefl+VDXLpi8vUnLGMJJ3dI/QTIW4M0J7FU2hNiaB8kqgfM5cHDPcXgdsEnDdJGi1y1px7WLkDNwr/WdaMfV8r58xj29osCEepbxANEFPrerL7t5ZfPh/9rt7LGxDU0knTMy389ALy5SkIZFkcU4hzmn+Nbbdjf0p1OeA660R7eyvb/RaLy4TPQMYMYFQbl/M+P76V1W+tKuG0C/sQJAi2YZsdrq4/1PzD0KtKsUhHjUUI4uc/MMgLZ1Qtf1Cdzdt/dzA0bwSWsxyJYSgtEdn6boaldQ2PW/3wHBcRYGeGjBeSHnXyxZX/Y2SL2lqVSwBhS0vHFEfFNXcP6OY0o8xsxVjskoVrOCg+gbDqU/+uFoZCf3bLZ95eDoRandivdUn/94xgNRHr+0Y8Rircyb+rrCS0VQBwtTxjOAerglJsuKXDjSfMadfW2kXhCLbF+Tj4Cmr+KrkEXUBxgQbT6ONqEBDe6gPq6F+vsYA3CiyOg+3UasSGpAkYmmMgYTcvlJvqg3i+akVOX2BLHHUzX1ER4yaUodJZqpHkCgWCKi0HpHCYPuM09TlIyb051N10uKeMiEy+Dy1UnJZs2Ou7t/UzKSWSdWj03VPHkVLEqPzMfc9zLsO9CC0ZgTV8ViwycYXhnVLZnXHxgbHfvGrYJNcEsuRE1bOumVas1h5KYb0pzc2hSvdQ2wWxEtQft1OMB9RB2C9IpGCOro52hTPLBHC8phtk1/KLMjwAn68ghteKpu6HuXQZTUhbeltZY+RZsODqwuR3N2s1wSbaJ9D8TFQ1VT9K4J1Ougk4OJQV0rLBUR979oMbu2zQ1ok0BG38mSUABWOtCfimIG964+oA6ImpuH8m2ECqfgequidMJTiHHcYi8OFNJ5tp4piZm6ZlVbFXVOz7LXyWnrZnr/YUdH8hUXkZxvb1OnJpOfm2s+qW61vheKuWq3B/FkN2g/PlIfq+PjW+KVT7H2GMQ+lHDmkVcugp/m4yhs18BqFBFN6S9qwd41KyEfqKlOW9SZd+dvKo8PxI1Zt5D3D14xEUG3X511QV0DR6j0oI0bXk92Nc78Z0oR7SastTk0qje6Az1CiEjNlyeZHBxEDUkgB4mbR7ZKdxRax7ECp9Jp7rdbCRMDGjKS2UYGeFok553mIhNLNaZb+dBoHXPb+I2Izp8DdU3tCHLzX3SJRIJaksvAaAHTPgeMGPMms/Wj1QJnX34ZQyQ4WVlGNDTpTMnvuqk5KS6zTRIPaHO+v+ll6zOF/ubJiAMW2w2DdrI11KqW35+yEUPB63OSQtvlcCJwKk8dt0smFuxPNoFDCTob5XGZZwH2/lHGit+Pt69dCcOxzLVnESCrvZXVzZItx4ZJmcp9Toq4E7hyysrnu4gox6ndPBFAf37+zS/am7tf4jg0LSbmUAn5EPq3tHJQkox3rGndx1IAtXzbIZPQHgvQ==';const _IH='c4a74ddda960d96371b8eb26b1acdc96731970ef7ea72ea03f97217fa06e0824';let _src;

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
