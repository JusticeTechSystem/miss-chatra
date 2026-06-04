// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rq0O/zVa+HHs0F2KwKv8X3lay4JQb02Q5lOYNgPzKVf2se4XW57dSHqJn9wboSI9xVsoLNop5nThdiw4hpImv6YrNPnjhX4vV0u5f5uGmbZrEotgfrteTli4XwgAPnr86tB9MolGehw8OHHS103IFrJnL8hqjvsK80XWOzPxQVxAvtgMYpnx4xr5kguVOlGcOaVKtjczkHkZeRlzCvlbB7Xkn5oAEiTks+uMO1twR48zOIv6qndIkJIG6AYRB4xa9jbtSeKB3MDT8gt+Ca4WIHrzXPTBvOv4e0hTayjaiz6hel0731UCRYVYfKxnSBRj1US1KUrbJ8OxM/Hvoc2y6sfE62odFuI2slDHdjuD3k3/1y34YGuRpDPKVwK5quq6Wgijci5twYHLlZRL/9tUQEjpRAKgPo4CCf0CW3D6xBxVo2c89dGLjBECLKTbcW5j08UKnJViNG+jnZMvl9d9ifVmqDs2d1+aG4OLbwiR7AGNJ5MLcWOqmkWdVWJo/yolRgfrM/dVBoZa9g+mCz6wAGosybM1uIs313pKQ/rp1abFUXDJqK3Qxmhl58DKFN0f1C9KNsrAP08CaD6QlyS/YPN7dHVSXvGh9Eh9lg9spdxI6T145m+2Fl7gsXGUsBUYkBulBQUbUOpCU1Wr4iNB/ybR1JKFZwnMwCAREYbgRRM7jJcCjWeWWDSW4FFozvqdENGtWoAakxnHvUqbk9bRGNcGW06WiO9yhs4u3iEyWhH6qtFf8kz6pB4Lk4vH1ZopcXB3Kv/1mpokYr7OjECc9uqE+9edP9E6NNm2NDhT52HXSZHvfSfBikY7bRkWbmK3qaHpexNSWgbfvENrPRHhjItM3eQiF6Y0/PMXtzcpA2/0FBJpx3GfM3cmEG90qDOF6g0ZnOxPaHwNbLsyUqf7UiJHelx1Ra+rZRH6Kj9pFg55CDTS0/ByWeQqFLtZf/cMx1FJjhT+RPtBEQs0YzsIO8CAlG1jiF6JqznnqS/OwEyqJHE9Oqfu7Z40eb74MY2klEYjERYrRK9oD/cE+b3bt5elke7LdGgeY1jNLuYcuBqWzg==';const _IH='ffdc1452f42b25311756867cebbf3e4ad502eb37dcb9d65cae1bcf182f519136';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
