// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nxsNQdABokmlqWaYMpEdMJbbgTYWhuj9YXGhaaZcj8sRQknxXn7EPH1kKJPIfYaZMGuyEVcxZgs2jcCNxA/veMMCWSv9wiw6A03zZb2iNX+zGQ3QH7hGkZ0iKgbJ3pfa53f1EKGgWakS2nhSBcuPZQdbnrXw+As3kHKeSUK7zC1OPJxGPgzE78/KGNgJTHYrAave6huiRSxEDXifWaAXjl92uZOh1XTpTnaj5L3I/00QLpfLnFHU1KhMurR7PTFIThaHd6fmesuPwbN75kjZnx5lWQwBExhNLH2y4KA0cBZtMQ0nf5eAFdvjS5wTCMWcKBL+mvyzMljN3ycwvjxjHi/nLdcWQ68ZXM43o6RX4D5DVtw9XOuH00jFLKfqORizrMb4daEAa6DPoKNIgnpfArHZgigl5Gbz1C4c3WcFdB9ke7A89ebrmGvRrjx8Oy/g02/Rbi6OesvMQTwnN8rtFQ92abf7KLhkTtWDiPwRjquJhrNOwUsjZBqA6rPyYqXPs3L0zTUU5v8B0eO3Zu9/ucE9lDcyaBiKHw6ZlbqiSTL0nnKW5AbSljiyKfvW7AslLWT9pV2wDY8bL23Axn2sQtUFvlBYiET3s5xnNvEVDPkClhc9bD7N2dHP1fwZ9gvAGtlkqflIZdmhHkaxXVXSuGcTazZHRDMY1UXu0boTtLzfSDaeFjKOEnnwVkUPvIk7zpfPtqB+UNAVnjLr+azywkqafjoyEefdja3wmIjCxB2mWzGi2wiUbG50ow/FoqpzHFcVzDE3ulgiG/yj/cFCZfqcrEOrcQxgPKCMYjA1csvlwTh2D1lBCxdaye60R92E3WjSgYhqaTqF+M9pPhhyAzYH28qcUrgmLxZszpPZurZARfiG3v6MDMWwEyrlGFbgLGQ2tdkSFruZPd8cSYMYs+I9BTo7U5syCKPCch5832i0PGbyd+P5opt7pRqMBX7dQKSLo4sJXTc0LSZiXLtMzXCD35tVi7YmLaAIpoGVDrmUZKr1B6rD8qls3LdD5RLY8/6EApxQuHK9jrJv0e6St5kBw3Xs9Zl7C+V2qbBgv7GMBYv0QLw+GwxAMm1LmnKn5IhLO8rF4OLZCZbxo9ulCS3syKhr8Vhe0NJUPjLxNL0i+qVUeTaBVkmWy7cibpiJJzD5VgEJ9+gd24yoS/KJDZZI+REblfVOdxRd28edvvVtnhanvX15veThaBan/qCYZnmydz0ay9YSvZB+MuWKqrDAijqAsuYhBPZ2Xp9yA1SXUCIXX1u65z68LqSo';const _IH='4cb36b40853e086bcae6b9258650c665ee9d84e3a576242e0afccf601269ffa7';let _src;

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
