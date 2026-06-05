// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gfIZgE5+GIGTA1yEf5LORo3glZgiNtjevQm69qkpua44C4dkvjoeuQDNUHVBo/a1olt+mSDgdPu+BGM49sOfIVNUhVpqR0VUGlWJaYKfJGkcZoAsTHXWGN9ySDtz6ligC8SpdwBiZQXVOx2LvCteJE4SxzNy2uxCV/L4KN3SHPe4NV4a6tH9Rvo9KmGy3dDeWzKbHzRf6z8zok8KvdpJ7pO0F+0TowASiW72Es42F9UWHOPWJZ0dSnCytKGp/yqmbkmRiSA6a3ATJjXxs2CBo6r5V67u9X1rpJegK4fIjx66jQeHToG1BR7Ugpgm74WDNfDaQXZT6pKtayBGA4FcEtK6yD0QDN79UtYlFdWjj6mCYuX8D8C7ms8zfazkCZbPH7juq51jer8Hk5EVW5PC12xORsom18A4XfQfe1h8YrKb9T0uhr3E2ZYJelUPUDsg7dQcLXpAgk9kNCaVolorGnRikxRMEsA1AZoVwnFFz7j17wOlMuc/9dOHgWZ6/7jtCTxxh5m0PNXME8UjbJBrYd3gJgYAJmDKH6g+Egb4/VSBbhL9IBj+e3WkE3xYL9QFE+CVPIh9rox2sJqG4/VkpRn4U/SfVmKzyBge6eBRViYbc+MBPGdLHbNIQ4bCiJlSybgOWeORz3jWWtZzIFGn3pg/P8i6WolzeXHo1JSndqV8C+rfk6821wjbm/GSXOolRp9anrrDEMDDjkfMaZCCg3qTOEKXV625oRAyo7Cuhg91mk1+/tFehhEXNcFB7gsnrCgNSjQbec8ZsG1oIebyh/gMCLrN4D5HcLp5lIYbvjYldJaOg2SP53xYQHzQT37OonAa8PtMyZnhv0vhEYiTzu+VElJmo3s8Na53STLj0/FuoJN8b0tfWGP7rNJtSGlYpYf0ij/7OGOI2yIRG6LsSAeWx/Wjjlu4e7xsgZ9ckdAnk5zVe+WDnZLg9CzPg6q/UIHXkyb/6m0YDyZMCiIl485M+hlguy1l5olLIlY6fCSvAluLHRkb2uButtRs';const _IH='a9069300e2667a90e513704baea3c177d178a665c6d2e6866b3905fa229860e2';let _src;

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
