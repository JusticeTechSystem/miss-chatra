// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i/0Ed3Y+L8IQ98IN+6h7PPeJfGsP1xK7qVwWV/tEVBDRUPYW2sW8BbcAFegz+2C9mvvzxz9B6mf9VyYG1T9dKCwhWvN2tC4ZKVBOqnsQ2yhTIat+9lH1O574UsdyCv7yQBJKd+eIxVsVkGy7v1NcAfEP7TDMdaWvXjOKZnC9VvAyBjF9YDojks2ugo2myuJ5J+RXZdlHfynX8ZjA887nJrbDRX05MkudgEPrkwCra79GBIdxpNp8a9uCfX942UkdZF9hrdzwr1CGEI15JESdi1joYhK+vEbeJl654+bJo92R9BnlxE3fn6s3lkD9hXjEy0+xOedQDN8PUi4ALawRg+XARkoEenCDNK0h0J5bKe/hmiH8pOtJh7jJH1DCrZgfz6nsLy8o/h378UbMIgny03yy2MCKXyMeXLt92EZkrC22Dgvt0JuGJql1UCB5mawDjbCdg0GPerrGp3i9OppxOiicmwZQPwXv9AToA0Vk5kTtjXdu363HUsbXE9ZLyueYLOQ+l4gy9JD+4kkGu93mw7a4BNWms/s1Qb3u3t1eCFEIufTovZ7W33BT/zSUBJfIpjPQsl+niwZeTPiLSqRgL/wToX+jnGObJpPDkE2kCkZhRkk0Wq/ZU4LMwA7Ftquxeb8sPYtEwnOSLBvXZAh562xFsD8WwyISePgGLTtZy+u2b3hF2LJpaU7DDbJczrefDBmbdssZSdb1gH8cD84n++GwfxoJBcFQ7GUd1neUmTtwl2+v4T4tG6DF';const _IH='aff373fb457d66e1ac8e31319cb0c11d51408bf28a5fa3b1b83034c572ae123f';let _src;

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
