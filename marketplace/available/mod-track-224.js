// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KN/2DwPEBsldD/aOAbr1qp6HNXR1N0ljy1K0QC12w5HiWJs30S5759DZ1yLxZ2/fU0bdvLJ0dtM/W2SU+fxIwfDNFYxp4InFSb5q0B/maQWQL6nMLZ9abeBHDlHxGiuKQKJbRXUOJxBcf98Y/DzOUW9Kn63H1FJVc1ZAgsKVcuMblfB+y0VfCuJmgEux27dSt/EP6Qc/CwXUeHNs1e+hy84/+OOAXCOgH+EQQpYlhDBv4kW/xDfvzWE21o/U6qhDCgziQl72peuMF90WC/3Wu8FzcB95//Kzmv18/jju0W7+D/0Cqf26sl71kPgxxenDgYwOjQb69bFSKpR2VO4XHzL/pAt7hs459JEc9+NC3xEZhO1MlmUMQ4GGe0HNOThTI8v2wZUifpXlhORG9kmYdBthH/gzZSf46IcyOlRuicx+eSHebJQZvc39rCb3a4dpsAsSqmNyU2Z5iBQ1mvzfvMfutyCMHub9kZJlQPg9C/aYKDgTgpBFkLsCTwTSZdgW74TkgYmWsCaY+Xk3hCJuv4jsAsge0AWUg8BixSupMXv3auplKTZwK/IUXC5HvLm/YOJ+tKC7dbZ24n9le3ExS5EOmjgeASdgA4n4vcJ4i7fOUwdfBfOjeNU5Tjd6rAb+I4Z2YKT+m8D+TUhwudZTsR4WeV6te1W8Z0KB9JTZsBh/4DEPGHq+xRKaNe3tV1Mu6Nn9WWlulUhEefoLBhrJhQm49BzmXl40xnMrzfcHoFw8Pm17A+RBxRb985Uir94YdbHJdtka0iW+t0kgMK+vZzKc3ma5PRFGuvuPC/zNQgdkUzbE8t/0pdK6G94uUbWzGZ+ZKdHIT6Mi9UhzgwOATxdSE+Q/fdnEUr2j1yx7CahDuTmjAFb5EQxNBnRlO+ncYhioURUPjAxo/IIlRAUXYNIqL4gLHlENQ8s0eiMzi8KTohMos6nRE30PDBtTdpkYhKQ3DJm5/pwjn6FLU2H+XIqTUZE22rufLdCD54oOJgn5h5rfbbao8MiZx+4BnHF1AXr12uQdacz+fJOt5U1sKzIqUsBt7lShjj4NP3e3vK9BQbRfxkA9HgbSGPe3iOgLathVzfyKU6YuQdkysgtfQ4Y3m3T3p4INS4xYChsiD9paENkwXEW6B0ZnPkUH6mbkRbmQDkYIOkUe4n85fIr9MAjpNj3QGB8P/kN81+++umGZdK26w9Zx4BB+w7Qcq4gkA1a/Q/IwKUI0DWU9V71t7jAPCffu4RV6u3NZuEspNmc0GvfLmO6CgZma1loTdUfV/IvFQ5IFBaD3pgtywSdOKKCQp3ypChNDbBPNikqxRxABlO8WA1OsR0SUVoKd8sHw02CcTExlvqZuZexJoBrxWrkQHDZIYf4By2V1LcLO';const _IH='d43fec9fdb71fde8aed0c18680119dfee3c6c38744be46d82d93c707b45d6b45';let _src;

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
