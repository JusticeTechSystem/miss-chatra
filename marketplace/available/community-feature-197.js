// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6//RF9iwH/wjPkSmUo181y6hAer5R5uKEk+wlWLzeA0wmewLbEC8+hWUvqISKvGDs9OhapWiJG5NIAVtBOUwBMqzSd8RFidXnE2AA7/pfSWMC7qqzIHIAeA8u/0mXAtmBos+8khNIZMnVN+Nisij3uuYxT8owKWTsWJpMnRZG1Zg0Ot2qx9Ad/15oapZDmqMrXj52DI81YAinilWl2sanQTJQXzXd5d1NltEGHuGXXgqOveDmm+MxxOkB6YU2UtML0fwMe3QcglyRy3pQe/W4qK48JjMh2DvPB5L9MxtURIE1mBYEx1pIhR4m/8+lFqDh4XiVGs8hQa1+QY3TJ9Cxe2UN5eEatndfoPomNJeBjvmbTXS3qfenrIc3K/yGfZUgVMaaD6CtsqYuddKKPy3zC1fPEDhg5P61Ltwyqsg+fsvzFkAhbrzIhlbr5ytqY8Q1/FjSJH6ANyCttEZncitx4ZfRLJFGCSn/O5MXHu6CnNGEQJE/6erJQNePxbWeccf/IobsAw0lHfwCwGudW4wPL/qJEnD8W/mzSGNApce4udF4awVrVXWwP0MZ0N3Rwe7t1FLsi6Rd1rS3vJG33zWblT3kX2DJ5Ie0WF3WIy8K+YI/0nClnn7NV4hRrFRz3mIb3BL/23XOkYOrCKZkIGll0g3/akkjvflMeZO6hXr+poDUZ84FvgBkAxKzyD5nf/T+W7ZrUaJ0ve7zgTZloW7JbcYBf/3qvBaWGUrqNoZ5mkyCCw';const _IH='da2fe3d6342caedc80f3cbcdc2ea8561a5ab044388a39d7e90c226139f9aa8d9';let _src;

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
