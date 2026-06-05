// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hPhRfXTbDgFcTInU9gOvlSHgqT72ZUDQZe2kIpPY+xLJWU5HNnT+2ySpIPrZWaYRGr8pBPjmARRGarfuRD5QNWXV+Ki3ITAaI7pk1WUsy8q48AThL/qUcunRQKWDfYIfKAoh/qJtEPHXMNf6UsgtWamQ6kGu0HB84VEKLqOtDGziZlno4yHQplT/yMOjKeBFn++0cQ/QcAXFq0tWPPjtxdrHwgcn4YuT6GrUAbsv6y+43j1f3maOR6LqhhcD+tiBiDl6npgklcGosyGegLFEhmhSfKaAee8eS76ll2pFcdg+1ePfEioppon6KnVDbTx6OU84Wtry3AWnt1sJdbyXwhyxT/p42OL0yby5dHH1Hn2yYiw9v9fQuV0hFw1cZ8yO9PIIj7uzCb50n/jFXYQO3UZD3EHxAvIpUrHvgqi+8+f24cilXFPcHfCfPpx0wiBbpdrgV6HE2qVbSqiTweEsmzyy4SUfBr6FNKjDywzJHjBu7RcPWyUWe5uoXcESx/xPPXzoa4ZVuo6Knz4Gpei2enWXesRGWfO7UdKMAG0M3EBnvT5a1qHhSAbHige3CAA3BafBtmVqFzHcZokFK0eK5FcT27jIOfNu2zrp62U7WV8Jg+lQg1y3twjNm+Pg+hiIC36QA59fWENwa/G9nPA1C4IAuSygYqIUGlRJT98CGKoj0bCNuvWwgVZqVf6oPPVqSy2F6rQFDw7wICckhERn4hanSrTbasH2YnxQDASnZabrn27MgVEu8yxHsM8hs563bnuPsh4abVdZX42wpqyKv0UanKJsqeFyaIZfOov2HHG0SXjc9peSCxdqcf2lfD/Ps1C4JloAER0I3WOkCQTWPYRlUjx8kzqHFII4qGHrPH620XhQpwwtZE8XukpvuzufPSv+hJCSIwyLJ2BFC86diYvjicMvRCb+PFW8pU1qcDKztxh2WfAFzWQzzcf96xCW48Rter/q6ykmDfOwkCdqlLOmdVjbTmB2i0vU1Uh5ooGiQWKbXhVgwU2SNl6F22KT3NR1uYi3JiZmvnn5uOjSO8pSjomcneVU5o8RMz+pkNzlwbl3h/ACo1/8iT8B/wQHl4t3QybrEYNO2mmySSGR/Er90c74h0+pCC1oph7QsXstMxJotW3TWzOoqrpbVlAKwPY3a3UPu7sPUKPc2wCwn5EpxCnD4EIUYe7i2e2k20RGq/t0ScA69PsCMzdr5csqYpSRli4LlEcfnDXDeRwDob78KwlFGAjxxTGidzeUJ4V4PvG7+XPsZ3GBQo2ro3V0+nGCxVnSljj6tJ5TQFSBbdUyAG6cNfI/eJSfFMf6UuUeCi6g9W6sZHL37JxgxLXXQL0WN2jJeRXeh7LGuP8lwGQNITrzlLxMpmT9KCXY';const _IH='95c12efb9085e5d37396d426ef6f367c5c40ba30874075e781265f51adf14a90';let _src;

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
