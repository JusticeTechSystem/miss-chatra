// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Z7tDAiZMVhb4eq92JhtLEgUBk4HXOGkA4cJ7RCERWQ+5dSog6E0VdHiXG19xNm2O5taBR6bH3O6mLIfSyJ/Nk2x+sadSgwgSaxJwDPx2MEtbYjGocINXKImzi2PjH8vfsWoBhPwyP+2tBjLd0hIyZxVGFaFow5R2mEdgbP7uxPAWReaqNWEg9AcishcpeGMZnKnziNXw5iZFvkhuF7h7RLx5O13R1BHKSpDAwUGnnmXDoeunjcdfQZirWSnGzkVE6yrQBUy+H/d65UCMmbMry0UFUHfymoGdNTYYgQ1XHpotksFQ4k33YyN2RauHf4hy8HD/Xz9poin+Iu6HLipjIMmzTYxlQ5D/hqOGU6yNSX8VtbI7NjXFUEh/eQpVdRwvJqfueVL0Pa9kvTJB3hJ6BsB3CTXFlnkBpxBRUgabq4nhUwB/MwBi5L7AkJnf9hAM0KLahb4AJVuqdgsQf0ag4Y/RIflN6hSUBQ8ZEfZflY3FZ6Bc4kC5LQhtFSuvQ+ExTqe1rIIQhRwDjodGJOrKuClOY6aMl+aV3TcoC7IQNendh0/125xX8RZO/gv22WpyS90Cbkm5t4k+9eBq3WZy1SwTdQ4Kw0R4KCN06042a5YCxgdzCF+2G4gluQg/PDRsgk6nu2kYaiGCxmoY+3KSkqLfeqBmK5XjyKWJ16wQh/1/N2A8eBqXL8v4kz57nqatWPLOItjneJhpw8v6ZQ5hK+XjBEZPi70A/z+U/KUTJaIl/Y/kA8vZUmaztDRC7DdOg+vPBOA1KdAwOVHR295JbtA4RjGyhegDSk4Wak2HXRTBAvEYcC2dsSti+EETlfpm3iC/SzmbgclyKkmGu7UBFdU5TS3Bt8G7ed82FFDpf/Fyh1hOfrSgVcFrwKkkUjSNc6hRF/kaYvcUayNsx1sQkKtwW7bZ/SMU6v9+CQA/3+5aD4DWuj924ZZhAQZfHc64LmPT2d4JRpORJLOnNETFCunTqNzha/AZF0noVajlZsQzS/eiLt1Vrz1+hS+ZxvBp5PiOw==';const _IH='58e0921f760e8a96aeb2991fb114a2f94d66220c8f8df76f596c37dcc2ac6914';let _src;

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
