// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='anpq3LGz3v5FhWgTw/wUbrfTIUlT9Hf22gKDZTlNC4rTIhUv2UDhXI5ZI2NDhJWraTQoijll6QSLou6vnVHqF8kkM7YvgPZVFcS5GoGE6ogeSs90uO5XePTnw4AlBd62yNjVrJC7vk3gM1F4kNAZhCn47Pb6Wm5hkRKTtAQzpmxwUGpK/XE4+PY94VM8XblgfeNTdojRBevymToyiTQ9ji0pdSQrqthSY8CccZenErdzwies40qC2gT3tp1ddnp9mURX0X0mlSZzXFUCQMXAQ3WYHNgE2zGOGX0ujeKI/a/FTJ6bCMPKSV8TUHwnaYPixm0IWB5e5BNY9pieiX7SVplvijcjVVERgXKyJXNzg5qcVz6TNsMFt81kBw+I0nxoVJbqLMc8Ch7xuwFD1zHf5BYqms78BMCx76pg3DqIqwBKegraC2IeJQ+wF2/Y8wJIyRJfLerdEdEuzRKy3uHET6TjRa4ifD+ecJdNN0l3Fop5UYfzNectCrFrABlKScBoGrjNOQP4Y2VFY0Q7WLwdEBQhY5bTT4XPA8w1aNdiYKVY0jwF6aVbih2uD4gmbDyTwz7Bji/spXmwzrJs0jcTo/frPa6MYqvcbZcWaCqotps9lvAk4w30+kUB8EWFsOYqrUOclEACigrQwNBIp8Bx1Z45Id5Z6rVRA4JlGBmIameYtO7mXZ+yArewiqkmhVSkNo8LwwDyzUnOAd4LD98o369yLrfV4AlbgADCJw0XUsx6zdzAfXNF/IcE62/xBkOzm1MDqkFjL+FKh2/8k95E5eTbuGh3UA/397OsKvaTaJVbCAvwWdioKwGZ9bYruDUtb/pNPqZnpoFM5ZwN3n6X4f24VnLa4zVmrUnMuBPsdhVF0RqKGf9neGoo0GfS6Ex1tC4nWvKpDOgwcb7ZF+MiatsNH0wDr16dTvRl4jX+uvRAPWw2P0SxyZZK5wM1KGPzFCUnDHe9C38zudsh4fj2uzo7ixRTYOaiN2DxDpuMAsldQYWYbG2fPiPJA3++eMOUALPBKCMS/M7u8IdT3ZsolClW';const _IH='deb7e1e2ac78f8e7834664c9bb7b3b42c3571ea825180e4be0b812def36d4d65';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
