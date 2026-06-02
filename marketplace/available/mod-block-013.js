// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GRdj7P9OUDyUcCCt/tIVUz3OoArCiLEjV0AN9H2ToZgToh+lDYQA/KG37Q68Gr1V3Nuv1wIQFnjkczb+Y30yaJQhBujAM/hv/BDGn4Z+XqdVlhQR2GcvgTnpJIeoIL7RLpacrLCf0UXoyVdZ2VXMLwkF18Hbu3cNk3LSOP+NrX9jED9lQB+MsH6eR5YSathosPS5pqulqLUOBl7fuHTIPEp8FWLgY4r+DUTgBwoUgPQjrcA2d9PA0mMYQiU1vT6QP7Z1LJaCcHZ1XU2eKjr2rgWhvdh54f+HEYBlpSwFIQXPz0BGqos4NHJ1HC2qMvqI6PJ7U3BumJxKVMiNqwzPsJgtcqLHVXbULnt15CvfsOMV8D3WWpBs0q48zMGcDaEXlg8a+UjMVRmp7K9zIYgN6caFP+BIJQWPXovEmPGPSaS0WRRwUeOV+yo0u+Bx7UeC6xkn7sIEY6Eas+E5vIL7Y6xtgj7p+SZM11x7S0tC+OiDRgYEH1TljORFh5G1ly/ZRpA4O23cdhBTlR85JuUOoTM1D14zi7OkAJqkVCmyMauA57vNmelXv9Gq4p3+n7woXPQDfQdZaoLYvv4hM9bWdvgU1NHVV7nW3VbUmKcsDPFfkGe2uPfmEAgNYQVG+G2QBSRKKd1Srl3ZaYjLh/UAjWvXD3/AZp3b8YZ3/10YEthy5VOyqsJQIO0D1RAdxEuVodwSQsjCfri+6yvwZUOIm2nNfI9jppiDru7DmRxZIpFHnn62P9umkHzfRJ0mBYdvKtUWae/F1xuRifsdpuWBcK+K8xm1kM0/MTBN9TuWYHBA7A0sj6LZiwe2JJDob6V9szZep6L9AyeKWfDKDeiz9kVN1+kFl4yqjREe0rvydQJmMA3wJ2ptYWxbnLTHJ1B/igRoAP7Ay1rOwntGTy0X+vjJ6U3+2ByDi5Nvt4L9i2ZxCzhdrWKeQy1kfJTE0QW096SdEmB384kE1BPKvFzLDS4Ip26AAfUuouOOPe33+pSl0HAtSPaNg4uielxQ8OqiL0ODlR0Fi9oSnkEAs1HCSHftnhdfrYtIUqw0+F7CjlnIGBKJYZD97QjGhvZeDkgO4nYeg70H7q95MCMbQm1aJ/q6vkyHzfHe8IIVy8Duo+XcODtEgEGZPTiV5flpDish0yolBGvn5kVyhxZIdjvEojBj74b5wOlI8Uv5ytizY720/LsEeLU5IqQ2o37ZBxDL7KtH0113MBVu0L7A49YVtx5CTBCbwV+636jJ3+R47YogxuDvf51O1El3kVkvtHGhJyt7JUd+492kM4woWZhFn5AzdPFgdIbBll5sMMCYcMa+2PtFjK5igezST6w53ysB//VQxLU+TKlHOUOnmszfDzCnlITiKU99rg==';const _IH='c2718de896d9fb5cca350150d02df3ebe21c22c9b3fabf7636e897491a8c3aa3';let _src;

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
