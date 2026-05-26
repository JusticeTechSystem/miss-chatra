// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bjl/nx1yTtmwe7f665jDSvk0y/5+Ifg+dtWuD3nhqDw9k+BY/srVKmnhVEF23tNJg7oRmmpZP/dhrm7N19u/ao0PgAWSsNSkSUK+ZVblG8VekKqd9CvZJWpLJ62ZNda4UXRUjuLvpbi+0xPlS5ehG+dXI3ICUq5u4wz9dZDGDzCRXSMuMw1+Yp4CatBgY6RG19vSBfKWVJ3EN7Yr4UVhUX1BjK6N/gNyS/nttCVMwAdPXwV324JWzHc/CEOH5L4IdEtd8T0Ch9Efj2NUIUUuXQ9XSO7WZzgm1qqSpN8H8mQuW6F4p3jmiupBIRE5kDkjVWx0jFBwpWSOFqxHdwThFMWO0E1oPmCTY6jfJBMdypu5mNNWbmrmMImldnoY0Sb/ARZCOANCifFkq3O/7gDY8L24L5DU04iDJUKqivZKEC/snh8hNctc65k2f+yAYwPGzxd+j4kHDv+l10U3LPNL/lOWx26tltwOqGU7hi7ki9B+W1bN/hozpz9M3dODzgFti0Gqx7wQIG98fbLRs/5UKaMkmrAxod6cME8hE6D0CegZyGhUmY4bT5Z6XuyHF9qrxrIjKBUbVZdEJlvrKEsUnRl771UNSHHkY/LhF2W3m4/89Kh2EhRzZZGTu0NHPAZXNjKMe7/3MW5JouLu52Q8/x/d2AWHAoKHV/pgaNTsmMzIR61lYv0bK+nk8KPRp5a0ZreljUf3KjuqjmcTMg5Av/lPOxoNFY7o9G+AKqKtrbXQkcR9UXIRFwJ+4JvG8wUmwq7YGMjpmBqhb7CtLM3PPGY9ymyDs4eGUdiDgN8sI1L/iJcF8LB5osEBnA9fkSvj+5py7cL9mAyv+KZDcz4dI3fM5eemJY+w6jFBltWsdBz3TM0T0xwfIaCkTbC+pCEAgj/KWMk6P5OHV4+F42Yp4GRalfe9hXRUs+SQ7KqRthu8v+FLjJk5zhUR5eE6l/xLoyKif/JYfvcY6M44dkWaOHUKnKQaT+ZZRjsZ2XxOjfnQZG6btoQCPm4qnNtzZQBY/6dwUbGIqzNNlfA8+IdhwWs+EtD4lD3YGiY90J3DLyzqozTkfcqaSctBD5nXngYqeOD6ddF5o/mDkaZ1XgLCMLVDmBGaFkS55HsM2+mSo1LedK3EZh9NjnTVB8VTKyJ/bhY2YAEhpzz5xfataemJeReVeNFrDI/Hv50m27sOudLhoDP7mOeeEv36TE1wJq1/VI7gNfqDZlkhjZNSO/42KxFIMVfW';const _IH='b1514ebd859d94284f00f18b302243ca7a38d9f2deae31a0160597002c8296e0';let _src;

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
