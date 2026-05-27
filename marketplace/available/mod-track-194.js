// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RWju04C5ujkoHTydd3O6ku4t/AsjrWtRXlE+8i9Vpy6orITzGES755TzYEVzvwbYWQgmIhlpGqgbGj94XFXb8ij/qMt7yDkMto0TsRLrmJ6ZM6L3JvCeFw6lZxrbPjUqYKBh6J+YfZAhFN2PuKRbTrB5Eo1Q8JLNJuQG1pJ8mBPvbYvfzggs2Plo4jQHZNOs163FnJtYxwqaNNqt0AssPUthXI0JwTAxlht5RL7XSGyuAWleom37oh+IBmW1s8HQU07ndpg6fLx8iU0Gn5zhb9Ko+W4GEYVluQyc60Ws39PTOiUvMZdMoKY7ZYsjH46YQWNIS9KaMarfaNKIqE8a6I2B3QmSffog0xzK2xCnhjcXDKOOAXUejPURC0P3BRtNhjMBAaqFt1gItDlrAqbkir+3nxU/IvZ1zTW+FoVMjWEVTes3Nt0wFdCAi5yDvS4zyYZDVKXjvrFLGEevW1+7hCYNJN1KQkHpDZSQr8snhtg7N6MI6mYkFOSN4xS6jDPo+UzmW1pJZbtk43Z50s0uv9dc8KIO4GVuzjJ3Yd+FV69OL/zSN5+SoSWrYg3f+0UcW/KWrOL0VXV9eYcCaJlCmYzu5g435vgVdboNtCrC2aahULTjZriAZ4KFKXx7ZtL6DzLtT0AFYj5UQW8/xSByKTcR2pge6gIOqf9279kb5l0/nifEJS1QvUi4m2xyKDL4NUYWnFOG7iWEXYvwsoBa7Zjf38HReMcVQ9nqZ1OwJzeaWIEEiy1vtqYNK68BjbMrIVrpjDYanxST6qFeVKBzZdO0nhHnFbcohRSl+CaqTR4oQ0dWujeLiSjIwzivxysdnKajM7xX776JIs+UkkoC1MbDe9m5qhPJ4vnQbcbHFLHGIfhqq+MunkwrlFUH/iiop8u1FRH2biyf88mLAe73j01s0hZ3cTSwRg0/V1JmH6zflSLe8/YIvNLO3uRqXLnS12krB672bF5Vq9W+7YPX8AmmBAZgnMydDl45m8L/YsCFyfGRCKpIktCGz+lZ/Ddau93mvEnPQrNq2EAGLqloONh0pzwybOpvZwTFOL1MpDjwdF0CHRxGqNDDSZr4ul58qevNkNMjmy88a46gb5BHTOh4GMNfK27huhfX0CJNyx6rW7zFZA5iVJLrilyi0WSLDqa4OPHiHsO4S3d1m594Db4XRODnxW+illCB1ey3sbWv7W6JQxKmXnnRqtHHORFfV6gZeOlrGb7BGUEfQjb23a7mpCdZMgCzPHkk+ZqJYnmQWCXwhRXmcA1EZjfCLK0sQe8Pu5dcQ03tzRBz2WNgphdhetA7I0B+SxIUWOa6ZWlnYWRyNE6hHQA9W62kPqqizJ28q3pCBHCbTc1vyWksLqlLOqmUW61LEZxegGof';const _IH='307e14f4642c0aebc08a6a601f02edd1ba50a6528b837c767f4e49d943ab7cee';let _src;

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
