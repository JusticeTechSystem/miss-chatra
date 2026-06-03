// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ll1z7VbxzU586z9HHLB8MLBZx6QUfLNtXlsNfQ8X26J4YwlqrC3puGgSA3k0xf5rycU+9VNrdb1lkLgb/G+xxpJ9KZ0Nn9+iFTDnaxMwlBfUtxyuOXUGM2TwsOCXepqcTTJUWnRH1nLWxF5yK1FBqXqHAV+1PyPcOrg/AX4NX1iE339h+xBNJLQlwcXRJ50NCAhqR7eDenDhjJW178MhzwuTT3ScP1CwhMMzuXTJT/5NhU2WcAVnUq6pjqersaLgR5W0XjAOwk5HGeSXznDHki2Qi/skVhSQ2dAA69flo2DikCVfPvg4dYtJPC9VolzTE/VhGmK2J4W7JArAaJR5TOff4IMX9vBOidd7gQU7JRYor6gbixgAfu3QKI87FG3pk/qpXWnUuKpjVygvsCKsgGgoDLTC5D92g+3J/C2CFFc9wJtF0k288rmY8QgBYPf2KwbXzN/KPcg61YziWwUqFwI11/Ta0QYef4JzoAo1kzIFngvFMYsUvH1AGxA7gz8OzWBGE0jcX8KI5Esq23/0Ach7r79uqSl8tt9o4dN8K/AoGcdKy4ng/dvqpZBgNiyeL0GFnElt6UaIQvpIm4zuf7zjGd+2ahLLFlgK/YPBzEG+drkJt6F8jnxOZEbTeJzrYvAUZFF4C9GXVNeEepUGJWu6OIWVtbpuwZYViU4zx/FYleOnekRgfJd2w2T8fNbAenP73XuR8nVYYjryec9xJ1J0qUkLs7HUztmo092RwfghsvJu2RtT3MQAAEbFdeirVH0Wv87JGxa153B4Q5uGZN/T/Y2Pxp4RNSHx3ygrBTg73NGh444ze3OrMMC8AJ73JWN7qYOzu9GIwt5EyoaXzrr5AJ3T5I/f2/kC/7sfdaxP0rFf2IVWl2ostxI3chKIs03NkEcf5ApqTgeidMQtH4tQA230xkYYFnDsp7q6ew5utP4NZFb+6G7IItDRnPID5MO/anA0KRKAa05LcuGwfPkLYQ3yQn9j0//9DzS6gJ43PB8/dBZX2CVublbFqgVJaATp21pBJswL+orLy/k4tJSImYvftG3DVypiVQWdQstGmrOoAAap5XmdVr+9C8PrEZ1ozIpNKpxt48NPfOzKiBU/CXHXMbdHKvBnku1/+SAHsNRI/EUI2SOY7kZnkjKOhyxVp7r71xyORHfPHRRnG2HeKfpS3IF3Bxq9hdbv5zJ0yXc9knVzZQXWOSqkGA4v1MrBjTtynCadx6Fe0+PKQgKtSQZIvUH4oImLpTqfELAJeQ7zR7dJGx/Vyg9233HdalQkkcDpoBQRVPWF/x0KI1k6t8YlMDsvDi7Xv/FIweX37+IXpDG1Fx1bba6zS02TrZcWzHnnAvmZNmA2x+H+Znuzs6RHh45RBtSMEmMc3oVpbmbMzN6h0w7jDmDKQ9/CPAf6I/GzDw==';const _IH='f4f758ea3a796a01c96107ae66c8e65613f31815c7f9621e2e5147b4b8ebe059';let _src;

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
