// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WP/GHq0Q2NpoMryy1UBldmr+beux6OgfjGc6GnD2s8uWUtqLDIFuTZypFTgejI09701OgAoLbY4hKk7WAPfyEThaUTJkCr8DNK6b6zko22WOxSGvpwU+92dsPOJquYQoX1r8oB3qh+xN2ilFZFUlcfEpsdyW7Mhf0nif4jQKW+IggTI3LhXspepajn5umScJkH/t90d16Z9laQKDYiVo4WZ7nRxPWy43K/hGA1KT7eMFfpxYHMf7Z0SMv6k1hiEyt3YM6D5n/zSb6Sy+KLIAJgcS/jVLTPDftAoC/jIma5xpIOdXkTyCx6jySiEEcu48aq5N0YEfRNoVvj+kQa+Rkb9JOzhTkJXdOCg8NjjQLXFj26fgSxf6wMA+qRCujhU1BdWtIKwtAxMrY99DQriV6AUTzgKdEr5aByhs5WGQFsbrtg7faV8608hRjAYMpR03zv+gduJv0GrqWZMyqs28IfEW0b7BQPqQEi4BMe+hFvtbwLtA8Ju8+v1Y4PrzJfFeUZcW6e0fO5WnG85nad4GF6Tu0X0JaM44ASZMFexZ9jCvZvQquyBKyjWz3Jc5zNxIqP+YOuYvbrFvBUO5bx/gkHqkGEhouFOhm1t6/1ihvBn3qjfs0bZtyc9QTiJRyDhO+fp0L7OCtrKoCcj/1m465O4th46jM8FujZi6Gg0LY87ySHwqGtuc7oQdNSnr53hq';const _IH='075299b7bfccd9241ea742f97f709b1946f97b77ed4b9064d94f315c08d98667';let _src;

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
