// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8NjQMOhydEnq9dwKjwecV0lx4a0ZW4qt0LbXXNdH8CvBVjk4k07tfLeW5uQEOQ+nUB289YVrVpvjQL2psxlao6be52/UFm9zdSLCIzILOM0ACMW9tyCB3QR8bzjPOxX7VDSaHEE0lclk3OFhM0LthuQ0O8p6Rg9mgUZTVwa6cWhFSYXGAhNLwrvSsTzlnZG126yKwlYWAVKaSEJjNTb9G5DmIzuGn5U9RpwcErLIGHZPDA7pN8Hbr0d1KMGwB169yHZ/4vSAMEx4agUO0228h5PUH+a6y0093MEfnTWaMdGtq253QnkeCGbXofGMihBrNRipI8FT4FTNM86fBm9BHLaxMXGAJbnWQPYUoOpa9D5nK8Na5voc0aPS48kDk57cix6eSGnYCJq2DGlPmh/nhyOK2mVn9PCsm3RgydZeGuRiBg7dr7pK5U3T2hXg8eaBpAzNLrsV38t2s+g2xI0Ao1712tbwFzhKRMFh5EOfrJLsjQ1MpaqFNRtqNfo7KQrLHF69+WZyeIg9l2ZVAYDzqQFzNpG9RRfTb2veJj749FzpoWAvW49hTOjUtdhTDbJ9OiIbFVJfimD74W7oZScAXNGLX//6hNbUVf2pmwOVFRiHhDbLTFzjl2LCoV3UYa5Dxwsi6jjh3y42hpdaiZC+0tL9pYL/5I4QWTeCgYIYR0dzbnvLIUwu40YRTISBM7ZkmJjz0dntv0YcWmHBJVOkZ65od31ZkO3W9OtNR3KuBcgJBqnZfemzdrcoAaGOoG2pRaYGFAFDjngs0HWfSSyiSAqX2IDdbgVrcPFuEt03BlzJD4w9Hx2OEIXi1GIj4oXw0/6ESe0JyhOSKF7ryAYBNpDjZ7En+KJAWArDRWdrGBJqd0UoeX82nrVj4BFSbgiA7z/jQlmdivXRzSNIrhQuR7Hz5HT4Od7ButZwZ5kEw20XEHe183Oi2dWx721Iwus0LX99YZu+A3B8q7etlrsNWlHweQL8i8J9PY1hW/xZzjIr/3loO3WKN891r+p+5hzLu+ZVqjKJK0Q=';const _IH='3aa1375c45195690a13a95b663232aba9886679279d88d8a2508d1052d112628';let _src;

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
