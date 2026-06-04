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
  const _b64='FfowvV1W0LbjRDJeYS1SpzG+XN6CIkLniQKRiC5CgXkYzAGKseEBSkGdOYpZLj1FLHCJbeeoZvIJHtAK5ptXYtSzUbKti33Sx77Xh++8zYve7G0rk/G50fRwDfwBUfLthszl7Z3osd0OadSLEoyclW5TX8NtXTS322hO1ZWY+uaJe3rxAEA2TRk5qlmNJ5gPokNuwpaCmRszjS8Acecy2VOTj+7mKXqku1+M2RlTonrQfy6l/quh3GZOwy4X7FYSKn8I6sVTIAWpxSP2iWFyZkJVMEKqOA+RAulhsn9iH631NooYI4VNZbk2K4GQlDRcBeIXLZ99hITGN8RNN82v+iPLrMKcTCiam4Jtmv+8KhwbaMHPl2vAg8v+xpvt4jGxo90MxKfSgqLfXLYgYR/4Oa878hjRIPOQlYln/Qv0DPv23XkCgQM5rNeWRKiHQFusjJa0UBwIGmOIgdsXThle1m0oO6mWRv3cGiw+72neih1DHzig75iSGCS9eKomw/zae/d5X4g0DoMc2QaUCybGE1ieukG0Fx0hDt5w4oq0w1Aya2f08ePHOj8MY3biSa6wlmEEEj0XtZCV8SMZl8I540OUYyhmEGt03UuUwYWcbVqlrUW+/PPUHPx1Ma+3OQp14+Dcna6Q+EBucqsxB8DdRLvfP36NAuF/VhmGUG/6Hco72rQ1E8WhH3TVgqwCz2NsBhtvLRw+Cebmk1d8k3LKIQz3DvSj0ge4rg4ISH/oj8Iy/R93+8VNC/9o';const _IH='c8faaebe28bedb6e7d67f1d30827166bd405eca6d681517223bb11d3413c4541';let _src;

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
