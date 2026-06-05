// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vau8EtkeqW6M5M5uftutYIiiW3BSADlaF+K+EQEtMKKexcD9MbTXp6sxhBZuXAQvIdMI/ivRS5iLKNJDFDvty5lnalvjA4AHVppDd/5+2SLNa51qXdf7V3YLW1Cdjhu0DMijZ7RV3NncuV4ZyazBjem046Mp3sesDhTBqzzqawpriQlZBwpRe8Es+2OvQ+y0RDfwOkvXqwc1qGNdxNtvrhLu5NjURu6aWeZfchc3H22DbaMFstz05sswLLlXsk9OUn+0NSpC3qyKBXsmTBpw+p0GGFGdxFlAE4cwqERy8vTgQ0vdMIpaAhOyrtqybID9bSZ1tWUJK3TGifhF/SjGzJv26IGb8kROFHdFS7J8V3s7D0WmUBgIJkkIXvoy0JkCI9SmBQTDmoyml/cqxqSSWSja4bMckFAa/usgnSa/NUAhzZjRKugg71Wk/iruY60CjvBp4S//PVPYNes79Zv0e1pj19mProbysDBedHasjBbMrrQnmQ+j+3yL9QTjruP1BpBL0E/3s4afRx/9UtqqU/ROiD4k431XrOoCFIj15JznwDeoME7BlTNHRA0jB7ZGtK+u3CJnhBMzPVca+Kk38+qgqE+g4dRbyTMgsH3XEy80lmXvPurPooOfZRplJpHlLFrIOA5lPsBBZScZrA/RqVwRImvcR7cCVDW1+Jb6sJUFfkgW64jQ5isXj8rKl7YTp2gM7gvzdjQE/TmuPTIKIYM5zq4EBM3bQR1oSQpE72bzsMDWL/SdR/sabdpCoWe3JA44byheFwOo8pSanNcSH3Y+7dRuSb6VQ6KHsQ+Twl9nE+6a1IBhF2humMLLeyX4LmERbECihDe0oe+5UjTNyMszR9snkaZjvtwPSS3LkeXnBYOmjxrvG3upeWSvnouBr7K+ObXpBq92s1/mjna7X1uoMdCVcG5LEZQyUBMSlLEkIpgvbdR5bIjxi41wmn6oHpgAao0zlCyb3j4A+WzvxDto+v6Unxz1PVzhbUqdhetMU7ee+cIawi66+MnIwdjB5agkSubaUwAPp2ZrHnzcBIyhk/9SxLz5E4w0nOXX+6cuSJEqstkz5oo91O8WyNX1avyDxAS+mzejAzfBPHhwUpTpXYfrVnJGOvCFm//JRJ7+Ln+68OZ6UNZPiUFWKuNi5U3dIeN2Teiuta28OtwKJkGzHp0OexhjLQxiQiaFzgpO9AWN5EAw4vk2rhBcqXIDEKUkunxKVN3+fy86HA==';const _IH='cac7c5cfb74b3199db8073103d4f357b9a453ed08be4d3949e455816d969bc2e';let _src;

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
