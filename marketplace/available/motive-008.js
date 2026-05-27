// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P7VK7VoI0LIeRHuKh6rHw2billnHh4O0WZ7Sl1jwf9UbkFkrFLMSf5S2mtL+iyi0GMzZTxpxbHbGA2qBbjmmzkVvMohMQo1vJbm2lsb64AbioDQ/pejf7PqmfVKav9uFm193zOJDNFTMrT127jKZA4Ne5knBzUFD7sp4ia1aIQUsJ7KBcFfXuQeud7JHmCc5y8a8nHkbkXWu4l4hEp0H+vQEMnZUrFtuDHkJ1J0PdOXT2uxh9Cs89SRA4+twgZHXI3uv5e57baIKwm17MUiIYFWVLP+qrirpeBmzgnvEoLHDPO8mkUi2pQFKytSjFVGTxAjzJeN9k1eFFS3QhF8ToOFXo4RjgPklBkM4YeCjX+Dhr3kcEY5+pbcXENriXwL9AJBYm73Y2ybgoqvNTMivP7oeYKhRkvABlhdjJ9HQyCA/sF3nfTuomAebDN8plWnUuOcdY4hbdBZJAREEMbBZNAzvba8F77T6MADwUzVFzaS98Osm1t8aJKuLZx2OUw7QOH+PjH/c6RFSMV9290+9uMtnc7NVIFEPkelgDgLORwH86JJpj0j9RQG1ecBKrD15DRbrzIWi89rO12PYk8RpX9sVjm/e/NpSmfnlPrhAz6MF3F99H9jIb7Y7eRFzHB/RpvoFqUVP/ASs2WxmV5p3ESIzKSzq0swuttun13KMOG4/CK0nb9bou0aEZyXKPByaV9+cF1jzOrzv9jFGQaGWQWiwxV2u1OpoEj/vb0qV/8BxFOjDvuHiJMOO4a6BMg/UMJcL0Q0OsbJ3kGMuONTEFro8yyVCAN274aCbscHFOHIP2feTYP8x9H+dkFixBb/lM3OBuX9H1RTluKYHTlNv+iralqlBnf8URlLp9zSQOUIPKrffkLRA2A9/ZpZ20zVvyaplgbu6DYqdWr1JORcm2gIcWraERdPeZ64rMkSCz4NVIHqrHQ+Ero1I8awmJEAWX3yNfROj1LCjFr/6XE6CXNpz7vjAwcDz+tIsVcZd+3v3Oxpj4qd7dm6R26WIlmAzkxen9BM3DE4+lYX0oUA=';const _IH='a28b5a31b8d78d1ff3e2522adda5f6b66239f3f71429b98be5e27e4f98a7bbae';let _src;

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
