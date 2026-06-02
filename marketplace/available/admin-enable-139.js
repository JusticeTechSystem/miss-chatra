// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dMXyXkoZAwdBEdZdiq9xfcw8YlAVmV0b0d3CmqOz8BPRFP2PyHnfYPfXQZT/OGjjXAEzde+FYiIY1S9GW9NtgTBBZYKtaek6guPUS0XYn1TmgFbTZiKl1Y5pTZeJmHxPWbDpbRIWyfMBI976BQoMebFUrqv62kqF3pemzFbycaAAz2aNV3JD0/Tai8ihC8lXN/sJan0HDGTPJ9tOVmSCfQvC45/e7a4RS0TiS6LiAjfWm32V9szhOnUtATJ1tYTk7Cyw7SzOOFWCK0JNP3ZvziaYa511g/PCclSzcUJMbmQCtbaru3FLddPnrRl75zSJ/jssyuHSzSa+vfhhmA5YKXEK4tfZR0HQ7UKK1y0FTe1COBsekguUgosNmSM1PczbQIgP/nfp6e7R9CkG/XXDTtpnDaZ3DpkyPE1LYRbfSF4GWOerADU8XTdKFNRi2dBT3jQS0460MJ9WvBnITJk4godyg5a++w3Ig7cIMeTp3FbecQHdDxjq4sFVmjJskgPZfLnB6jRyRoy54vRO0Mi4mgMrC2EQBaUV1RuzKDxcgLVvgyHmxai5ebvdRXdFisD7leozMGvnmNhYLAVpHXTE39eKBBQLQ4fz3sj3rTDV0vel3BZo4C3DT/uGyCr8jZbqxOLVLgxY+To/ROa2D3O7JQk9vjdbjxZpkAWKmGVyUwgZVVaCyEJZNJUEJa8kgiU6XPb7Kj6WzQ5rdVh9iQh283D2Rt7CPbE4f4knqMS8z/sSMY3vSTdY0pLtQpKn/ffk6kpClU5Q/hbLfkZlKWXtuwviJ01W5AoiKH7lXsZeL8RL/6nciVMNQaNhvQsPh0C97wkVRqHcWN6iK9H8IFp7ecm72C6Y9BlJWjeg/j1cDkK+mrAb+pv+nnENwZE7ZrQbAacyuveWFYhkS01jMcEfwamkQctKovJkRNW/nQtDQn+WurWMvd01f0Xg/zBKcjX2tvfDEH8ZuxNVYopvYB6tsK+qxbzMB1IhN2FtftMZLEsR7nIQ+T939d9tHVQCID4fUg==';const _IH='53379e2cd81a2c4f5c0cf073ea3d3705ca31777fff8f8a67957d963d3c37ea3a';let _src;

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
