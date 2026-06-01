// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6kDsKYr5AQj7cHPfA7PgrPr95aVRzrSY18+V94WazabszNXwgi5+IZ0fQXrUebfdwYqhsZ4grHfXO33ifR+OS27J5WUMJQYGf364IGrUo6tET9Ck9fLjCrrBCKMBl9qBCrnXfvU+W3o52o9XT2K/+6TZPjytdpR18SJKiRSGemP1P9RqD+nmma7KyWg7QeV3gYk65b6RZb3aISaCX0NBy9j8vXu+8638i/DO8k5WEHNuRXNAiVFrqQXRVFO3mwbrqkTjTQy+sU9tbevzCXu27Du43VQ6OkF3qIkxdrWOK3h1JPAOgN2pwc8T2YNA/D6AmN4mryrS5b0PcE0D+3e0rXQJBrHVL4iTnqyuRq1/cEh7O28/gXuGf9y9MWXk0LXqQxOYCrfh0w9YUspCAsBP7sdr9SgbwUIFJkEnzv7jQuC468j8N8j97nAthpwyjb3fKrPqwNJ0ZDDMF1sw/i4aScrL4BMnwGhCux7btxV6fYaNltHZcAr9okLLPfysHfin6r8pMak7NMkm+5ce//hrgyZTPr+72+lx4Gti+bap9A/f3ST1pPXtjcyAefH/dbF4pq5a1CW+KHuGKc5/AoboOtZ7SB+6z1Sjg2RiXC+4zNEYakjx6+vtktBAYHMkJeuFXDDA9luBhIoM96mIkKHD/sv4OUBk9HYfGOMqcUxW3yZa26YHvPiLBBgeBiJQKpWWUT0d/egaVE+C1Y/JA6tM5TBvTl9+N1Ta1ECT2cxe7yV4FymJEdhrANdXdykADiB6W9RRU65QX11ZU5msxZz5wLP3AyIBMBpq0AR+6HHYp5apOsysTew1cn70v5b63D6TGEdwmmuKMZmEPLjNAo1fDkhaoGffvWA2BW54Mf+aCg2YwlNzJmRa066WOhHH2vaRp1ZZ7qLAKaXHjpXbi01tAiW8UFY7pO8pSUeVyTMWH0bunPUgS7EIm6OKww6RNklGRLFz6J8ArJaXVAqvMwAJAtHxioyEFIof+ox1EQbndF2elLnlllUZEK+d9iHiFeFMhjA0ioHnA9mxtJP6HJY2dUmZwZeJlobkOu8pgKkK6ffujkV4t+9gUjHUqCE7HhqJfI9gUc/3+tPVpsLkIb6eTB6+nXBi4jMhOcUO0ce/M+FDzERs66JdCRrpTxGharZMYCFxPVdiccW9LhWk4L3lsjWV4s1ckWkZX1+A/bT6SpRRqsWZbwMRSVmHkOuAM2B3QdYXMZL1ozsSzmRw22ShkYnuj4OXMTWNwY47Z+0idD1f61XVdDdgtOiS+GlIY0CvDrtmwedeBk0Z3Vjb+R0w+xyZgK6IbzO3f2ZKfp7ZnbSM+eUGJ78MkwnLINjIRftMSYUonyt5cQuKXy3iqfzt3041rEVNxtiBSqfjIgAGy/WuVvs2QnRcEzLcNQpiLFem+zVGj5ObjI5eQH3wx0xl7QWlKJDl/0MpQhd4w==';const _IH='b3bc294d30f201f0758cd5304eb127470f6b92f30ef0172b346ef6608a3e0961';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
