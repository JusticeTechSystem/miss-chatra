// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mGVW8p1Y8So/InA4mQrxXvQvmWjgnERAfDlpGrL8AggAhoaT2RNDWryeeuMLxeZlOs+ANrtbnvSsJfLCGzeCNzwjpm7TQvNF1QjWOCq5EOsHnBpCqHYj8NgnJEJYKdii9adBj26owS2HLjNf0Ms4ykwXtCWqFIyEu+pfb7bm7Fl3R2WLbrQURDNlqIw271YHc35HDPzdsz1OqeArBRB7IdksldUMUS8peBJuEjzJ5YlbxAXfoZC4FCjRnQhsivZqxdAgOqNOt5Sdzz2lwsTVMaxPeVHyUK1BsyivoN8gi4A4cRPdFSbM3XdkI3yvoNIvNhPcSCOqCz9O2UETTXX/pcCIs9orp3QaPdsv4EA2iWS4iV5tv8yTAgPLZoZgua081+b8flkikEcv+AqtIet55GefIOpaguzmzjJ6KMdu2DPddHSSSkYVR3ONCS/jQ2UkcAAfZBN5yCo1rD8XgnTq9OJ827fjllxIDAfu7pZ/vo2YblDwEoKj1H1EqJluYGNFjluNum8aiSYUGbCj3vrZ2P++vNWVEmRcCaIhOuXQ7YmgF6yjArOrUsT58eOicYihchoWVwe4frV6bBY1Yo5x6xFKLrX5ScFxxmdnE+Bk46Jbvmg/3p1yxobLUP6o4SmymOaKCmGPEojcfqHA76iwCkVfRiRDIDUbux/8h7X36UyHmtSdxvg/WyXryRvey7gVFTuf9F5Zc1K0QKJ0uNjVdjyquzU6mwJvTyzPph0u9M+BUXGUYT/4VpWo7uK4Aj66cEpwyI2huGfxLoadIiQiuZzJdq67SV0HkCvEczAJBv4s/6ClwF2tVdcHGclOwF6uidorIXr1aAcJpHAxXeLQ1LR3DQy3XrmYGEb5AyqfIxTNn97P8OaYNB+ICj1KqGSYXyzcv+U3zFZ3N2e0bmTv4y3oHgPABgu7LcEH7pQrsJMmjlA+N18ZW8COs3NGJjEc4sAM8fOOnEzlgcAjcTZ1vDveaJATtwmctDdOQuW6ARncNyREcubkoD09tji7krTO/CEWlzpobFyloHa5H75A/aMV+je/4KyZS0UtcSIDhCpFZwk9sxWxPx6hTgQb/SXLwxk8bLRnjwvD3YlBX/l7ljPFa2iwVQCZJaE2C8Vn4oN/wXI9tv98hApgXGlX/SMQvnxIiLeEWfA3ueypVhAhlzQISzppR1XyguULONvW9RGTQIMuRoxsl9L4+wOvLzmgoXglX5uJNPdXwPKoR2wbwOs6n4U6hiAoPf6QGFgDu8ir3TY/7a06amYfinR/7wYSl2anvor5zkhh+KzrcQMQgXT3iOYDo8jn6RZgUHsr3fe/KarhDTy+3LT0u6No3q230C8xeTkxxHXlZA==';const _IH='25b44dd5c7e538e3df4e6492d0e8450f081e5910cdc0f72ca5e2e4cdf05de2fa';let _src;

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
