// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vJAV0z7KZE6wAdi6sOoDZO8U9kYVtKzq/Pjm6tHxoYupZ5lQMLI1T4e9+Ptos9UJ6isGPCV+25Z8mI/LwoaK+fZgUn7loRuvLpTm3uzONB+BhA7Ei8Ojtc5E1RgpIZsgXqsewcAVjC8v0DK5e6QaQjaVECtD/UVu23osmbgPnZ86gKt1i9bEzdTSI+/tq7sF+yTmK6jQ5WWB+YphyzkIkXkS+6UlyaetRwHmOqcD2++rrC51JyB5nOGrJm736gl0F78yYKLjhnKXzu3P09BYbCtE3BNkLHh8S+MOa6K0QPov5ObpUU4OYe2X7xnHRxi3uglUHfV+5mLaiItnKdAhSME5Ir+gPkH0YyfDjW5MkYg+tOOzHFd+MiuSjAEvCaNxf7ZcAkA05D7eAQ+GBE33KVasTH/aoqVCPLzkhkCMG30QsHxr6sR8I6Kf6uj6IlwsGWi650UsgiEHpLLKGeuiKVYEMDkGP7lzuMvAdJlTUQEegBYoyHTUOslgQ0PIKtbGe9dApcSv44QHaQ9YynK5CRxX4JKXYVGfkV3d2muPXrJHfX4z4h6XuiHI+uOCus97Ww0P0v6ILxv19s1kujomFlBjeObLxz6L58UVo2XSbqWL3wisMLBkEuNA2wnay9Fv8+dJH+QeqwPQ7v4BbfKgAaTgdvPbd/kZmNl3p8EUF4D1iaPUh//+YqyxyeNurWtAnjxDLKw6Dm4vPWuUWTj9hE9lZDNW73XIukYz/cws3qQ+E14TGJXpUt4yy0Ntsag1QOeOqhKZWBkQUjBLuCOB/OiaZVRf3N9vaVd4/j8if6BnvAjT5t2RbsbgjReVAaUo7MHzeZ7MMvqWxFyyIYbbsFk3rPeKCP1ugUHjI6U2fU+E1bE/IbYuRKrFqQZ0XHPSU+9xg/eNV6JgBGbJYPZ6v7d2olDclGsyrSg6WdiuZV+aTFoUE9Fl0mAE9cpsHVQ5s6U9zzN08TLl/El/9OeyYOIG6ft/wJu0iyqRmIL80k8fW6n77BPqbf8io4DSC0LfMEB4j1K6pExwn7GWFusnMLg7vmde43WW8pv8aEt7C7xMyR8kegvIfdVYYQe38ny9o6aO2w6HG/ndsqLmkuZVTUrFtdeo1NYAppXdtLeipQl1UHaUjTHDNvjn/IAdBJVVjuueN5f2Xcesfs4mhsRs21kau07igExXTkBxBTuI2R+YaOJsQWqiso6dHlFCfJ4EnwRrdgCJKXorr+IoW7+Xh100T1rKm7zAuEqHLHjgwIPcp8Dn55M7BqoG2QhaJ58ND+TEK2PAeg9gUyVJZfJLCXsdkxyhvnW7YjktIbfm6eVBEjiHjBtk6iCXiWrDxbVQgcnh9dyQ+VVBP0XQbWiMqXgc6Y6xAPqM0w==';const _IH='9cddeefb606e77c8fd900d503a48554e70fa2e8e6dd2d3915d88e07d6e135c61';let _src;

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
