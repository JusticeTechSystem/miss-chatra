// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ocyep6SZ72mW9Ov0YSif32lw9sUGm4SiEvW350XUrZo1lodJevgLQ1bEo+vJTMNqX/uHPcw/dOL3t5iNC82RvoP4Mm5x99jNH2EDKB8/V8djJhQNaPQyprJ86YIpZ1BdoSoI+0ti5CyaYjPX2+BGoj1MCIv6PaKJZXTO1Lb6/eWWzryHo+rjvpUNRslqcevFK56XivWiEbHHw08gtjoUO8nkxWAxay+zH4vE/0DvUfmGyLasNqh5NDrN93fPAMx1UrXsFybRWYBbLjuqm1l+1EQRC9k3E7HmSEQYXwMyAgTHyvjkPyP+dxWjKysYBxAaH7J5ujyz6h8dg7irc/fO5461C2v3J8ShWSivhUG7271hYZjmdcwMLtDudqp9M5v+Gi2ydunR6ytv/mat5kgql07breyTuSk+Q7PLFFN5dpZPPrIYOMzQUvMbnJ5ES+CMRlfWDm52/UksOjWS8aVzvvJ7qT7ujflpuQqs5Pq3LAxbE0tmlB3XbvHEZQRvMZoHWTGCM3cxdiDuEbVt2hv72zY72y9UuNW10QnbGvG6dOXf4PfnOtbwGC6natQ4cUk0h27SzEBrnpWErv6gBFFoKvw5Cn3EDt73EwUku2C6YWg8UEHHWzqFFz10ig0UGjUwrWaycvYk4xbjv0cpiBQIna/TE4M03m+vFga04dK1Q/oDin6PWB5gPaDrTjGsN2yGtHDHFma8scL/rHx6yPpNuHz1zk1PM1jzHnfqy3iTsx0gkEB31lc=';const _IH='8191e1db25fba900b20e1c245bac69ce2737f0f2293ff96ebf421c0aa648c94b';let _src;

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
