// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='86lU/Vi/BA3Gkj0/5jHeP2yTk8/hKISl+mi15CMQZVvYp+nV1t9W6zpEdaLJEPgP5Jk3uxudr+6CZnTORnoSCvv8o9S5/Z33Sov2dMI9GedgPevKPPENX1XlLz9lALqu/TeRqGc1S42sAetRp27ubVSYaMlKyq8W1Q9u+m0K1/1bJ0qynxFBWYUSXxERgsRH3X7WHxRYQso7P2oO3LoJr/LMsKvUDTldc5FReB6LRhPamfJJGzUbSF+XkgMTV5tjEJdSzloH+OVmmAOqOB4h0EvZd8mub0b9p2RUViLNur5s5lvypEXZ7tQ3fGwp2o8+IpVaREuAy5l91NMlDmKzErK0dLrlDpRLz96ZzYZm5bkdAvfkcodc21iugWrU2SZXbaNIG3Hu5NSh+vX1eu0Exx6NX6quJQbRKQpLPP6dhewcwfbijnnQh4D+6q4oAnFtVtzJGGbgD5Ax3wjXHRghXJaedKI1i2AgpH7rKkQszFPg7B/oVToYGJRGoAVhyx6kJ3/ORYN4Dwo6k4tYfLkNBqEL4L9K/irjpnopCkc9yOpPq1pdZX0fUB79AXqwZZfRWyLbbVCttkHuEBZeSezClmeTxQIz3pU3QdRBLsgMNbbRXoJPQgcnVaT4BbqDi2bcYsq2+hKq7UNbYFGplssjERuCZ4R+o1QTAK2yjcgF+mTMZWYxvCrzS2sr1bL571OqAKv9jcsImRZay6+2fZocTdtqZhDhm4nhZEuC/zdT7AYe3lh37Vp398qTOBbhadcmbDreDCHbrmUUMD527R4aIPEz2WKkjznxdDem9jCKRJJwNGxs22UODs6BSWoWOZUbJav39zwPUqibSgEFbg2gFfpZOrnr9sSVm0NXR0wHuH/fofHBCaxmY6PptChPe5UNUe6I7uliomKWnj+7hKLpzQ+3CZEjexNjsiBix10JGyRPDxGvRSZtuePCRbKQ9tTW98Jvlo5XfA6AffZaBnFSqXW0kvFFZp/cMs/pJ2+CvA==';const _IH='1f65cecc44d0359a0ee5e63df3e6dd9fe4a02faebb3a1a8df4a0244545860c14';let _src;

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
