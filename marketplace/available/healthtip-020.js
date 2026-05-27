// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FLENb617NYcjYM86MunFxGaqVUY2/MuTjQRzfgPoR7xBrrEzFqX36DW6wbn4Lw9fYpFc/VlW6Hu5vHd3GvlUxo2r4I5I6/DqWrN8RhFQr0Gc78YCPjNGmxAWB301mRvDbDI2B40X+TWe85lip3MVeKEDA17Sc1dscnopd444mI4i4x3QJ8BtESJAgg+XxnKPLPuNSmZcMo+Hk16oJ/f4uqvRUXW0hT3GFs+bAgBsGVSL1ZA7Esid1+Gk+QLoycMj2jewmu3z45s+WJODTtt6GciumG82NbaTJ/6TGg2pzwHzlHExhokBPwrlQecmiTWuvnsnf0deIyvc8UACZFIOITiUTLBsG2XczW9ZaYdA4JoYq3Z6iDJk3dYpGUYW9ffLyNzNd5E2kwtsItOIvN/AOfMpk2U3kRyffeyu8KtxHunhBNK34xaT4eR8uWokspz13ZjudtWyi/dY2qiEjnsukbwbSg7QcgOv/M37H2rr0/6zj8iG1d40he19BZTwlumKAyGquwBa+tywGqoEKO22jLzsr/Ws8HpyCTu6ArhKm/x58ElzJTbIWXE/85XFKRiI0ZI40h9su5/NzLMc/zUEnMczq3qIAMPatXwi+aWDKfmEJvRU5mN9seWOaunjvaESXXDTz7JUAU+ZFZpy8qoQ1wBDC4iLPjrBb0lej8yO3lwozb/0/+Tfh9CvM44OY4yIlzEsj+fMXNJJsrTWDI6XNmNrQQMLN+8J8xuhXmrrzmKivOGOCAG9qdL5RR2L7s2/FL8t/DGTrFl80BmwgdPu5tLRoQEKvRSmZmdfYZMVu6zB8KNIfzX5n3ZZ4DYDGNfZhhlwKBk2QH894OAC2DIMWIJN8U1wEZJMr+JL9CD/MPjCUedYAixJQ6na9/EB69X5HYDx9nSBVUnV/9sPpnSx/CPNfZ+IoPPu2Dl5MT9AFj9PUHAPZFv/FT/vh4I=';const _IH='c18ee99eea4336a661056bf5045ab9e9c55068d98c0978f42008f4fcff3792a4';let _src;

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
