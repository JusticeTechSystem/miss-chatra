// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YtQMGZOIBe07dAKJ6/SdaZXi5YU+HrC+fzIVz7AEhCBqvLR/Jw0wsQKGp4fe4w8NG2XJy45krcZXqrlAvbZAGizB8cBxwu2tVObsGkje4CGMHh/XsWZVB55P1OLTblmB/CVmBvBpwaU+o1s0tRVWk/C7SrOB/ArpRKceh1EIrh59TAamSo+75IYWHCPKEO7SBkYRmZFiIX6fyEoCHRgZ6ZCpcwFPZYgN6ClvHBwvXORz6cz0lv89tIJlhGrvCtgGmQhuhJMvtR4sqh6ZWnv5xtxEbO5zL1WzEvgWaypZww/RgRQ4ZNBiZLObE0VfHWN6QmbUOznCxgb6ePLUu7VgoPi0NNdKEw1EBBaGzKZ9T7YTTejfgXy5iWn0r8kTEo1+pamlEz5fh9H1aGGW4bIQBSegl8KvVLYdqYZBAkWtzP1JvaYOLju+NIXVWtQhf1+CVjm8LpnSFefw2iAJAOEb25rRT4Jw2wk5ynB90/JsLPlLcibf1dPjcT/pASvPB17TNHxEQ+SsObBJytHyP++3AJ11r9NKNSeKfw5AYpxu3B76Rx8ZhrRTf8BNgLgzyqVO1kIoPJiN5/L6z0Rf4/U0x+JvZFq2asuvJ3FDESxhiJ/vYZaU4VEhh8JeYJg3MVcOaskULNXXKKHcCEVPDgz1h0Ja0o08PwwlDQ/HDmPhxLxvhPa75iuye7CXPeVeVpeGtin0I6EIdZQQVfmYgOW1JSkAECjsxgqdXyr3riSgSqNmfaRqlP29ANcIAL+gCZA6x2TQgnmawy1KWj+fNZyOYt5qXt/oUxH5PVcxp3dGgx5F/i5ArupFRXsBrnhhAKINXhgLtuq6Rxnww5C8NXvm4PzwxZTa+ddIfVUak2JYYAfD+OWenMoTvxQFZdC5aCrG54pqqK/haolm1idjKPUdf2ixM59hYqUts9xK0UDCSTo2EDhk1fCZdWzDfJFAeXGhkhbAdqgcYgzxl80lQtIWlgfoEodqnaLS9ZvmjI87ikOXyUIIYPzTTDyuL6wUvpIxA9I8o3sDzmJHvdq1eew4SYh+3JbztfNuDQPg3CGBtJwmOyZa832unGlQR211OuhI6kABRh2Ev3b8BxobYTK8Br8uxS3nlv5hO63YTPtkwhoWehvFi301pjXzs1ejCI/5wxU66OuvI6E6fvHGsShPHjbnx3BAlOQ5tjnzpAL12FOGIdTSCxgHmIOGCF0FIXD1EEu7N1dF';const _IH='a38f18f2555a499b4fbf581135459ccb5ed30e05f26e2e7019e0b561dbfe08c3';let _src;

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
