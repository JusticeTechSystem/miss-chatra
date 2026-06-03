// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e0zSr7u1RKlNp3gkr8yMI59xqPZ5DfbNlRxxKHW2PDJOmcXHVBqQYjv5fFo0lQrgUNP3AUaDMZUllviJu8qXEi3ISKGkIGGQeJzkiYR9xo1T4I4n7gcufQ3lG1pSRdrNaD5zH7D6hHY47TGNb1RaO6BiSERQ/45x0SpBqLiBP6rPbsTqxJvwTnL38GdbDmpczOO/LseXJi6ruHYFj1KX9GvMkCqj9bhzWRqZ0YBBaJ6AJhkOjbbsf5rQQ9MzhNUNZRTB27L3XlFEitvVwzbkLH8IG0g2wJZaR6rQag8R94gcxni2OoFDJSZtkCfxtpJEqZrJzajMO4xCjSN+JIrvh+0WpI9Ayu5gHM4NWbqTJDL62QklHVudFm0dY48T6e35FeYErUZ0o7uyYLcjrqBgbjCawJpk56IXUbK7WuRNGX9AuN5S5qkNoxOjRk/hFavSWe8nTyZXsMdWj+Sqnu5YNRZUENhdPtAuHdXHOdgkIO1WK+92I3YirSWXcm3loqYK+l4S3i7fLtssI9DDHtMd1Gfbe6b7tftevVSQfbbCZmUmJ1VKZwx8Fl3tsGGEUNWSt/0dX2LFsrIp8L14PmHRngogBdIlJoVQplSfMezQItmcs1d+Un6h90/DUkfYLBuU1HJkJKC1V+gT3GQ19UwMaV25rZPPC1Ahcb9YSYvjaUkcVOvWjkN5SyEjt2cE2XByawRNhVuEtPwONbqYADRfyaKVPQge6ZiMf+GxEjifni7Ziw19ulRe77HA4VD3/WL8T41UpCqU1MDIXrkO7Y8ITzI44KC5aT7LQYsVqScZFnbwaw9+Y+cXLI9/5RR8JlT1RK/5zfet3zwkp+7pc9L+POCYBPwc6JJMONDhCBpFHH3KLwjpMafTrVblfNopPUx+Ei+n1VxZG8PnjVlmp750UlfY8AfaF7EcloV+ruvb0K6D3LlaI+bAQVxdcr4wPK47V89Z5yZwiQfHaXqCtMMgJLjkmPpB14wHDfBJWkchIWuqP0BQ+uQ4iwcR';const _IH='88e913c6f575a922c83ac606f7e1dfabc3cf1d9a4f41b3ef3f6b3d831560d665';let _src;

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
