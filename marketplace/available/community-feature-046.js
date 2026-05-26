// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qa3mAgZuAdeks2Err3rv/eb6PCusDU/mDC3cfgSh5iuQnLKsBLeZUwHO6QUHQZofQWDB+TX01bRGl2SwTY/2khhHJEKXQpd53NtLrBbqqH9p5wYIiMffpRVygQ5IQfEEHq49M37rHUPwj8/j6n7KxbqBSrBrgkrGvRJuSuI+yFTNaFic+7rVQfpNIzf13YPvReKAGTc9t9lE2eYk97iTeWafC3BonJfNqJV8Em5WnyCOJ7Htqn9O58GfeLQLv6k+fiRWwXxvgCgfwJmkaqRxzxBeOzc363W/dF6D1ZuevP/q9Rfr5uo7Os+hlKnOeRQ2bf75q+NWWDFVH7yedZd3FjWv0wtZCtcINF9qa6Xmo/mg4Dd1lNZGhOj9V6dNmfoSq8FW1uU71mgo/HPtk6widDdh0RkwOUO6NCy9vxg8JbHYUfpT4GJyVoDrObuyHG5tzsf7nyZNzetgWeS8RX2w37eZ+CXXE5ancf/BgpMy1Gl56/nMeMbE4199xVfqb/JPp6oLi1s1ILDX8SZv9ncwcOM9bZ4+GjZ3AOGWXuVltWMNhq2n2YLLX/D+rqCHy66JpsFGNpeOGxZ3V9WknbM4w/KtPkrExSNTQl1NzcJJsMVqF9A23ivIg+QckB0zNDvp5y/gqiU7Y9UZcFINk9r+AjYAVxgA4PkCr+B5YS2ySTI1xzS3T6TGJXYyk6jxXWF3r61uZMqxbY+8KcyZAmAe1XlBNYc=';const _IH='4f5d2e93709e4834b00ec304ef242177b89b270a255a08662343db8898a8c9cb';let _src;

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
