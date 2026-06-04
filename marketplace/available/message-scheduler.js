// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZKQZdkJlTYp6/w/gf/xlde28UukPpKlAtZeVk05h9WkeHVbTBgdGx6M4M5EXpBjWV+8u4Gzi6jKr8O+AhqfsVZNjQbLuYKJJ15Jql+Q7OLcssVAwyN0GQJZx5m3XkAw2v9d2Qx61q5UyixNOOFCDrh8NimQENBMoImiawc3apa6uzlRKoNorn+HxN1jRwhJOFRWeh9XKHu8bEAykiDtQNctD+olDVVwmZYywNkuxAnyz+ZOUVSoT5Tgbt2esQgxoD4RESm2EzpJtztt6KpIgh1crN3fI45T/jLGvbkSSJf2NBLNj9TrdjVEj960UgeNNtJPxNdm5DTxowZa388MXRTeo5RUkZt6R/7J2KOdROUFTs++wteQ9qFtL7nE3LOblAXtJfpb4iTOl6wQlPhrvFx8DhdgrlXA2acRt5GRGWJHX6UNE22WGJ1kILxpN9u0jS4GQln5SC6yGBtw6hON+FCcmx50ox0HoJXOMMY9m3QPQzGEVpE84/9lOfspJGpzqn6AplLoJ8hqL+ZvFvH1S9kO3oKmxELuhJb4kL6Fw+fqZA7PFxF4zR1rdJA63/8MnsNY4bW0LzN18fX6DFfxJAsKblbglTAOncjaM3L9l2g9BkHD0jsHntaqn0LPTN3WUdd+n6r/MqEAJJJjboWcCL1Q/gt+1OcwOTUPVpcOSrYQE1vmXxrwel0FDMiIDSF9kB7R9iyNRzNezKj/Sw6Wi9+u4wPbQi4mJQWpdUCEbqNd6M5giMO/tdbqtrJFEIwCdzEDpEGGTcN6XpR2lupz8tx3iHrG6yANvkVjRUOvbkIFrnB9wHMNFeU9GQOt9b5eabIXXHtmpcHtZFqPU7pwIDIz+VuHHpnZDRFAgxRxqEAmGRkLBZb3GFuTKeTCt66juzrBbQI4sN+rVeV/pJNR9HKxURMKjH5qqgzweShU688+iepqD+6AlfSz5RVaG0+FtdyCnJSJfqgK4f7yAJcPdUZeh/Mvu9kPtWq3LA2TnPocrWTftCxO1C3QyOzvcr2fZ5/0XzgY4v7CXmCHOKmNlkrZ06JEeJ+quvR9Rx7KeGB6peGdRdnbdJlQty0ivaHZ3A6HdDzJdbFVhw6bjyFYAbqM11CHduN/mxqa99poAlIPVvzwWM7TSmS06KI1OhJrYGJqaY6iYPU62v9iopipJ/poGD1mlsXTBvImiyDKXuNM8GjcGfCS6lXFAzLZjW5Kak1lfGBvlHflnXOcgm7tO0FycV8IY+aXOUyVXuEYuP2ohLuTpbmr3hAXIe60/1D0Gy3FTGZCzX2mwQmmbEHZ0tHtlF76Fh9m1qjTfx2TbVmHNXt+0MUjtagsaJSbAA8ZKF4lWqSEwKeHGjWxJt4cIcVUHVc06qmm/RFCLWo/OOk+418sbty5k';const _IH='b44d8e9f8eb4f6263d2e4d0a70fd99af163913f927a2887cec7d5631ae8ff308';let _src;

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
