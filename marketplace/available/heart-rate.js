// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SRK4ZfBdiKnM6LU+ytGHb3uYgSm+qejlLmN5mCFeaDBsD7lQs0yE2XkUJQ7XeF508BCj4QeabBbF5bQSpnRlpjLmxQBLiN2oDF3TJonJx2Umko7iwGY1rFxe2K1cfJxTKP1T3kTeLVAvAulDHjkRfJ272yMJk2BFBV9gFpwDe1K5ilqMuZK55bdBPHLnXA9vHDglz54SWU5zQal2IGbgfpyWzQ7DiL6svHmxEmmjUqTh6NsXxuROwXqgebXO/rfuZ20yel9OQGAEJt5RAAz+4jzCJHEi3oiNw7r9kBdUDWuVKlTx07DU6mQrphuZ4Wx9RJCYQu4XKXK6ExnpHyD6urNQLlnDiQJtw7aSn4VYqid+MkdfK9F0qHQxuxQxuwoADuzEBVn0sTZznD1A1kTN8RaEFBl6ZsjhxWbpeRiLXvaUayX8AAjzXghiQoVXiXiGHgZ8Q5JqEZI29Ne8bI+lAsKo+lVfSO1iHPzWVNlJqxjc16TWy8Cu/WiRfo1Bhtops34ANv0jPOQn4Zny+INPpPoAP5Fe0ElAaTELSFUMp+EfkW8J2MGUv3W0cwpWdp78fUZC7YlrjmXJGPw4H8aj+6AdAm7RyvM6K97RhFnDtdbDJMXoaOhTsmJeROGi7G+v+p0YCDB9GpnLs2DpPwaQb1GSabpwMzR3v6unWTUd57lXpsX2tY8l+KSv4PTm6VUSZQK4zbbmy2TeD5JxFJo3QHz13qkGjPZZUF20L62PwLOZMfaWyt/ull6OFiEGE57lccjOGFxk8V1PTaTseUgrSdCU9oR54rxQ5kvvMuA+lPoFr+Z5X+B2gePd6qV4qkYwmEXhTpgzx/jExvFFiLLk7eb9R7NdnQ3aK5s0VeQSl29N89n5zUqChNDEb+rVk3ky2cg7MgY2+TiTzYJfLFOgHrsh4VyL+oSrXXTO/Y7SYukj7bASXszMHatOSeQ+G7vPvg1SUJTpcLZnJCzMayZg3qUxqrRMNFDjCtbzRaHvH4459Uf6eo9e1Qxn+6frgqftKRJTw7uV0d8Qd2UZuW42B+5rKvVYHMBmmvLx7CEhQLbu51osDn8fGmF5PX9e1g1Egx4bFkBhiIbYlU2Eq3y3+dtGm48qsjriWMX9bf3R1tEBvQKidDwqS9M1saZ5HlW0rktkxJcnnSWobQz6Peys/YM80eW9pWbp0mleoyqFIagyI7wUPAWH+1eyIXhoFnR9HsAV3iXleB6/+V9lp2q+1I70YxxXiBPvJrZl/+9TNkEevm0F3NtLbWNQcfC5ne/tun5959hIgRvF7dhftiZMvpRaRpfk6rR38nIq5/CbLgPh9lIxtHUDwIX4/q8FJDCsVIyJ0gk+er4npsURjg0n0w==';const _IH='77608d74eb11260938437b8be2c4b3f286d3f0e345d22a0b09a690427840caf6';let _src;

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
