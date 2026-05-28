// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wJ7DAoMnDgf1zt7QMiM4TcdLxLIA3nwjKaeEHWqRof0IjF/+Nlh1wL+SawdghsV2cGleQkNc0uf2EIMI/TwZ5ZxVvbdjwmDc0pzjkFdwb5o/bphwN8utKMWbXXl8/GJm8wzMlIVD9mNX4zj3yTWg9vhN2kjfcQ6Tf03hWu425P48fobE9G5nyWKHAp8oRedZvFV3NRYP3C/lN59sqB37FE365vzBeEYc4AiP/L6VBCB3UUjmns77nPrQeDPi65xe8gHZK1X8ctb06b5vsYa3nBJJHJO6NHoXpp3y9e5blkfuw14EsRcVwNpDbzzEFYkyErv22IKajL1vNh04hTP9deymPrXicspmo9NyYZtqn5lynsp2pFXQN4SVIYaioG7GK981FUgBHbmpBbpBDGLvJye34BSTHocRYCyIKPpvS9kINmxd+PTztZz8z0fcUSGilhLqcVZ+jMK37BDtFjkSosUJRIxwe3fI4d/ioDPgSBFWqYtBTLQHZ90GDGiVbi6Be8cNTE3GqStTwNeoZnMl1yQib/fJ5eqgZxuoke5ah0VolGmzD9vTHGavJUElJHWZzCyTj/IXSD3CvW0meypHAdj+xd62HqXRt/uVpHTJu7Y/64uzyylOjD3Pzv0CYIvunxcIz/Pp1/zT6zMf2GdMrBZuylTnNrlT0egB8MhxF4NZUR2xLtvF2cSkrZfnXXheRYghVx1UlLtw5Giu4uB2bc0u7B4tcJzRsJ1bc9I9atwZhJ317gi6l5L+pDE40Fe/kr9xDELQMw4nahXbGfJGk1GFaGKGx35nRQwVfVHoprWZYZGSesLluD84rVmlaCgn68iA42ytIorUX5yC9b+b9ePmuNppAwlwXGUlwGKmBB/yvmLtua4mhBtkKtS9DLz7HAJY49SF+Oj3+VynHO+SxIfDtWSOTnEk6lmgEHCxyTRm0j+fYJgGmiOLUFdr1/Vgjj1UxrzJ4Xu5B+Df/tCZFaQD8P3Pa9gNSj30L9lElpOroIHOOnSvuik0iNuUxiV+z6/u9aG4hfSzhDAIAU1IISk4++h8jzGSFEfsnaKDoGqw/7f/w5F92xq5QG+pHyPGOCB5MTKBUSdUzTjImcF4NPWEHwJe3IyVxNVhQADs6hqvKpDzoXDysIxCNSDhcsbUeY6xWvDfxosoaxZNXjUYfu9PpAC2fGmsIvMotxnKI+glACi/pTRorTxukroqz9ed0ow26ZcEIJmBvUhRisYGsl6k3cDOJaFIfBl4VLwTJUZpCBXvB5F10GvXAj1CNvgv2X+mVLeD4h6C2sugqiSjoSfZ7P83pCl0EnPEnTf6rwixvRlkTRvEvhUaJ1KcyVXpvNoJXQ0ACrfTdymdQuxQ/gaIdFXHM8zpd7+RQiO8dUKUu/1peHpquldj/+l4lJ/4qKTgrin2/xD6qQqUpUOXZyB81B5c+zWHVUtqY2Q46qOUo6rTCnWCsXb/xSQBrdUYED7N3VbWT4TJZushHvkdz00VuXYD3ViaUlAcjJhBI0h/IQAwnyKKDG6UFThOAgocXOjjaJSZwuqZflH5mlOAUBcooPevl7Y0iikvKnZLyqH126B1sXWQK2JBSuozz6jrF3RwFpMKcRlUNWH19NiXHKqzhlD97kLt5+LrFGf5qEWtDWOHXLJUvCwkkJ+kMMJi1OvTr++g';const _IH='9c3f3cf2ff3d6b7dd68b41500e9b5225e25bbbe2c208d95ede8270fac25e9228';let _src;

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
