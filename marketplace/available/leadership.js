// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NTMf9z21rgOPIeQIK2UzosXwCCz1IKKTaVG8qBefD0k8A+VrC1aVe2A5EZDJ2zcwiiNuPQBrcCquxURvn+VWxhhNOzOu8Ll6VJFSfHu/VHYAOatmuDuzzrQazLJfEALlOYj9rAsbcenorwO1S8bdQF8rMlHghCnflvF84+YlT39KpEKBNyNWr2iAN3Z47gXka1aLx1AcBAZeYzX1dtZC1RBHVJAkNt4l1S5pGvBRcvfWyzOhtV/DSKgXbCnyTaihIWEbrRTObh2sBCIaa8cSiiZGF8fkRfHrngNtdFx2QsXW+X1q7hWiiA2CYSRMNukWFepgKSMpgC8me5Uj0FzKtsjN4PI7TemmFUkUtKRD+qrb+POLiqR/pw05aA41C1wrwsWUH4ZHn1WUe7mdSubEzl3xZ2bqmMDJQo4uMeA3HAuZ+qHZcQMt8dcNBq6Xu+IeEqtNFhG5miJMCQ2ndZFKRomiRklQ69XJnxEDyi5jm6O1PXt8Vbue274EmE6YFhd/o62BmCP2LAx88+SwcDlglHngI341ofgWfetoEhnzji569UlcWMa3r9Bt6rs99VFdXzCe3uozmnfs6SD1LgTScKF4kmXTnLcF8J5wxfmZO9wD/t/YlFy+5Xami5qKJs4O1kiufz+ZevxVjTOv4RTPZtTvoiLPtFbkL/vd5rB9otoiUVENHoYUnUkIylLnyVJZFadRz4BOazRjJeXfhMWBePDI1Ka0Dk0Nf4Vt4HZc9fnSuj5QvcIv3FlqSZj5Dn23r0QmZ+M4Rnni8+sNJLQYofJlo5P8AGk4u9w6lZ2G9GlIVa7NPFO3Zp6pcnjMpcF9Oy3KppX1p/tSWpQ38+mT3K6gjPMrd0FgBFT+GziI+Yj1j+1PVor/mSDLYQAg8kjbEVjIQ9wqhnxohnEAQV0hEAHieRImulm/Kf2ikKKpBgJWbuSbFauP1SUCGvNWbt0YUoTTLw4KP7o6SsufrvuY7wdo7TFNvLx0ToyMtNjghOEFJ3FJT6ptEGMdJ4DbE4WJizBM3eJfKMlQPknn+8J5nh+OCASfo3qYr0EaVBspvYWHzrQqWJXkjRjAQANwOjBnO0oPrBkOFbm9HfS9ETid8VGPXeGmftx9IePuG8ve8tEe7GFzhWtQpTVCZUUYYa4J6flDTFFtcBshxkax4tVCnjBM3THJGRlC2fJDU91BKEoGxp7P/NGiv3cveWO39KoUePtB1LWITDpT';const _IH='3e726e29b5ad59c5e4cd805fe822b9508ca764fff97727ba4f1a7fca7c83d601';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
