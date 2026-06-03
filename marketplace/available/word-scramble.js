// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fYFieqVIrsV/pbTzHNWHRnXxKVktfA2rgZq+VBejK7xXIYjG3Dkk07np+UsTw5RrClzGdoPpuapj2e8wm9vO9+LVUb+jkvHGWgIMjNn+5N5+8hMLYN3ZPUdb2nTeFoM82wdCqi65T79wB7sM9lsZsOB6+CodFUbQh4UrnQ9DUI/SqaXuiEezrTIz9gOKga/AmMCs7Fu9XiM3pO8a28wZnEDESRbhx8qEH5xC9/sxKth5cooDwcDzz8aF/DUogeHrnHUVXzSeLVcWVa8blXJ6nu9gd8pG9S8CRTfZW4pjNW2xv0eSI3RP2/6x196Sejd2DnhYDFhS3CSAeALCI+9H2bJ/3b/6RcIKYm1E26rN7J4stc31OM7BwxejnvYLUIfvmGUfw0BKuj6PJBRTOjt5WOlxsFdLnc+moQQHCP2wY20LKw8mAcdoEyGypPoQI6oh9RkvO8GYz73LawU0LpKROIFWRNp1TN/xRdxfI76H7okzRXp9Y01dfH/710rdB+aMXQiN+30roaZ8vdMc/5kJIWlCglzBuTt9p9jZto7SSaCneY4Nl/gtHYT5xT4yDbgg7SEbp+sYxYxAlczo9Fe5lysa5MLDOxCMB/aRQm7nkgPS1nxqCCNtcIZGGeUvIZNBhS4Dp0YvqqRF2SrCMcCjZNh+G9Ke18Rz36w4/mpAquLzj6xvgsaVvM91imlmohAM8CLgR8dM3eDdDrwpe4/bSrD/e4kD0O4ptk1KDuzQdOgBbby5U5XyONhk8wwopndJzYo8x8vdcG2ur41isTGUGMy+1ydKMUN6Fu0BFAFTfwIyNjrjd7eHdHrOh9IdxuWGP51rjQvj6TPkt6tjzPtkB5JofowYKB9TIRBstukCP0q/cEBGjHQm0osGLR+51eyBgvGgv1u7Alpu9zW+udNa+DXJdj0X7YcIc1iNmP7AiMQDFcFSVbsQzgc2AHDaY+P9+0Z+60UZr0tH9uey0LvrFNpGl6uqN5UchRESTdYFTWzXX46N37ZSu7BSL9kX0R5cjrav3TSOIgE2DX824fbYpGeAH+7sCfpIeauOlbfy1tlq3rd3yayX7wN97tpkAHN52YqFg2MeJKBbmkT2C5fNccW91CZmBUW7cY3x7+mMH7Fi3PYQK5ySUy9jzrA8M11QE0BJKIbttje513gsnJhsGReGZF49ccctsXDMJBxj3vEEXlx28nQN5lskTkLb5NzgOgTuXYhZjeMjd8a6L34L9yy1Tp5hJMf7un0MaMnH3vCaJwacxKqG/99skWu6Doetj6zBXlLIX9tW/NijgsApsvBapoIwcP0d55BMinvLJQsp2CWrVdMTKAWQCTo9SD1hwFEGjTSNM+aQ';const _IH='09a202bad91e85a26512767682a1080038d97223553167c8f0837282932506a4';let _src;

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
