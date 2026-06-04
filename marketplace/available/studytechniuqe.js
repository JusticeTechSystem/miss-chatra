// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k9p+m8IwE9+DKHhRhgWjdEryOx5LHy/Hdj6UDLn9S2aqvuRI8o6X65DBF4tDjIPcnsTPM5Lhm7QR3/wRyzm/41g+LR3o9b17AXrG3E/HPH2WHQEXN412xLmTqg6eESt+mYcY6XHJt5PHwvm02PVz/EOqvp3u7znT7jD5MUpwXMiaGApEWWOLmHLJjqPGz3J0M4pnPrkrG0AeNbexGUT4s5S3PQoh91KIOd1qwRN1YP8TLgsHbznYngz2jw05Ks5sb+27q2D6XijiBp3IZOk8G14lDZFM3ueIUARJNdGajNyyfpkZysWU6q6ubxNF3z4zepjSeoJZg1xw6z1oEgt+suLEZibWdWa9keD+drNP6yHDiAIvWgPOlU0BsCDm+mPjOzRLd2z5fG2cbrM6z3x8KkQVhLOvxhuf+ykpJ1OLmQiXfBerFE3e7OLTXBZyksP9yfGreJHkoJeGLZhhiabkzPiPtT4trv/Q0g1WgolQVdp4KF9RQ7R3tHV6/NgUdpDX1ev4g+UCmEu+RjNMowt/DTHx1mYQ9rdlQiQCJQOWTdTgkUfuQk77dRS6JHHyENVRKEBji7a6xIpI73vMOEhGuSpf7637ijpqUjMk24UXDc+m+O2Jl3kdvqSaFt7o2HIoqib6mpvKQFrNOStqapEBGt2bk7TQRzYMPu1vCD9JzQXdN1SpHT/8j5l0EjdNvu4NTcHZpj5MCLFq+6Iwnle1w9YZDIqoZ+hIs6SoB43EZR+rBJTFCURpG+UWjdTJRwxu7U1CqPtSs9n2t9Jrj2B5Jke5qpMN6JMNy48Oo0/MlMwvO9aN6T49QjS1EHQIkCtkjbEkp5nTCY3WTIlMBx2TRQ4Rhg639BzV4pLE9LYuTXjYbqGZCyP18g+aEySnQvogJdoZTL4MQPuMO0eTsnkXFpkTc83JubudGF+Qdev7lSdePr7qK3qv/ssjEiL+yEmzMan0emqBIUY74H71sYxOZIprwheYjHmnXkeBvHRl5zy5G1mrEacZK5i3lcThHjJWq9IHbbGiEqpmiRECSVtEXUeQ6uu0fiMdPf26xReh8cF5Oa6M08Z4TxHXItkIpYpwKMLKFOSMMYiYXjX/MYhxwg38QXQHNcCkkORcccdK/fX7G9FTA6MaRqAjae1mZe/tvUxCaLC93w02+zzYWRUMVP5+V1N9xG4PE9oROSE+0jDklZ84gN/utD4BPlOLdAtAahiJFQv2Cy3/a35a';const _IH='92b9f0fe9cd7b8718708e6bc03de4e9abc15ebea2c3c042528335a1ff6501785';let _src;

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
