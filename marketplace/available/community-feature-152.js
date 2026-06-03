// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gYUzEBiUZZNsblMB9qVZsCS3LkXCmOHDyWKB6uEQvPEcdE1DsK7w27v3CFXX74j2lgWJxSxZeTFYap/5j43sYxF2O9Aca7aqjocT8jWGBIUHHpxyXn3OfFmH6RO27M4wmgp5Yvtp5qz45O7lkSc71xf52JUzVlKdT1Isks3DeDvTleZyBVJqd/D71FxVYOuzi0X1VCBzZYwqfob4/GK9nyLCypzeTMHAfvDNNuRNjYi/zR5+Q7AXSFWkwuhFCP+KVBznsfTEdN9cv537dtym9jls0vg4sqVTpEAV2RGAJc8X1DB3rjV12MeZNBw7cpFuaF+P7iq+vKdxr1sp3DjXy2roy871iXWAoOY7leCYz+dx6oq6YOro2lJFxgGyBrRQwSzP/a0A9hKPVM5Ue/hDgxWZTWT+JG4qJJcfuu4yx9PBOLPketMtLXljkVvnTiCVrYlaQy1YnYw4HX3r45SdO0U1x3JsoXHPTTN02RYp7HIXHy8FQkQsCdZtJYmIm6EF1+j7za8krY0rivWXOndN8QpdzlLeANSi3l0ogV0iLrZMYoLCZRg+tDwhH+ige+o9dWvj3ZVJ15USbYIZ50XfoMPusHlcZYcIOVKRiWphQIJUQXdIN9Ya5ta/VqCAUYKMdfjPm9rlwEUZbhaSR7VeE/nwSyjxcY5q73DoVOgdzzO1P5xQWaqQdWmZtz7KhcW6A5zcuCtY03Mz610Apr1sCSdkHMMD0otvVawojFm1+uU72SM=';const _IH='46ad1aeb292fecb201d62ccb7d748e87e312bc1b399552a180aa0b0e94490798';let _src;

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
