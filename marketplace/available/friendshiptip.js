// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UwH55ZVpzLU76NgEbnGlkRBVhopARDGWsy79R+275ss/PijEWz+xRoh5B7j+9udokEysKkkWhcZ3FoRi8Mn0Gx3K3Zw1YxLJYxA6l8W9C9clJlonEhfhFmqRre2MBITjlPR0LVrDnrroG1pUbTbDz/uwPa3X/hx1QRkN8tajZ0inkcUD/oZFEgkbJGiyEyUyCuDg84mh8gSuRzUafpTvb5lrjR9+xHI/lt4wApqTNQ1K381d2OqsRoKZXPb7b8O4buqVvpp92z6A5tEnu9RGDw7whzDOnyTHDEfYRWW7awd+o03GIx4Em91pLBmzRmGlVwaVeFuY/rFO+bmpj6gTI0epl11Rfv3nn99e065wOIyHNCtfXTeG0PIAdxbkLHoP3sTuQ7rsSvEwHIsZZh/xgZHI0gH96Fh1eRdzpszq2uhxugKhmZQ+5QpylQV4sSPfhWAVXFv3u03Mr/RIPosoGEKcc+4z6tj7NyFNQMEFFay/+uBZL1vVvuOqZWrta0kxTFFAnEkQFMY9rE9WCHFDbc9WO7N9bzVSTbSShiZ4JljDTEJJi/qa9kBMwb6bfPnU1Fq7hHK/NF0LbqRrE+A+Uf5G00zY/w2XWU5IqjC6la+M1zy/ctxsm9UvkpNjoKP+29+pnjv4NItcLRgMbanRRMDrXvVUlqEUKW7Fx1jLhFiQMCiybN197QTAqe36VjvMhOvdXW3pEJA61/7yfz1pWs9B6oHd86bOjqhWfYhPjg3b+Vx7PzQ92cLczcx8NaBXhn2QaCy7u87Di7qmIIUqXq9qJDLzyPNhWgizwtknllAZW4UZMA5cEOA2MW5Ol+hQab8lMHnE5CR7ftEMK6J69RCOE89p9ILvMjhf2ufEegRM+YVN007E13dyy4GcEhTKS1m+YC5M9LSNTnGI3XbWly/cX7hmImFlAyqzTwyMoFkMHzYPoS1/WjfItl0/tM57+TKcLsDGb7GYtVrWoYkmzg7fd8vq/h0ODlB/fvd1rc8i1ZVXe8CngSgbTUubITMAuiyGOi4ftygNursULpr1uTCH/2uf+Zp+mI95O8R6T/uUfjYpFvKm4kBcsCtT4oFkmsYcyDuh+s1ufAE7IMk6NY7JsOppiZYQAhJvdKB+DY08dGS3S9x5ehx1yVHgIzysth3Bj3dF38h1zTTz5w1MttKU/ca8QrOT0oJUubqFEofDGsiJ27I4qIkfsRK9w9Czifxmt2k58Jz7VTWIC+y1lDKg0ik=';const _IH='5ee4559c874a473afb353c92514941c78dcd81b1d2d8629f58f4d1275d47a431';let _src;

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
