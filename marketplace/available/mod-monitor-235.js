// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nQk7s2Kxb5JyhNBFT2A5kN17/0lRKhSh821e74kaZR3hjGoEumOr8zdS+Zg/ofinIH3VqkZa1KKDB+JnmPV9X8mBodBZtmPi9xdeBmIiXJUDc4vH5zrfZSDiWJwIyuXj8uCAfN2lDUSGLbrQstubC5XuXSYPAArnzI8U14bOV5o8VXW0ZKmzWdm3vUapCkt3QH8BSmi42snEg4lBuzwmX+5LHX94m7gxS77SfRNVCJPLO8C/agx0EjOSxCRJzAunYCVrJOdu2LB4QamnMDFV0BY+8mq6FHoQdmy8PmJbbZrUA5Vb2/G1OaGMELG/1hQUl8xYP9+jWQq0Nqf0Qs87z7JmO5AsmwHKEdZ9XUvzp4wAeH5XDGX5oSRyweCVPaQdyHsuP5O3Y8Ji42OYh0H4UP1FMm9NwdUTcEBuO29PfTBEyHd4eJ5BKyorJO/A5h5gmp4xCtYo3N8H3N3M82Lqg7uznCAoLShD7fx3dWZGF9+E5XBEF4fPvYu+ShKr0sWzOZZMBpAeuuw6SHp2qWuTEh0HUwO9ZlDsghEyxsUe6dyDti7u0TnaiCXJtbbdtu4pReMM5qTkjyCw2nNXI56J3m4zSeFMXqbQcB2RIhjc8Ix+pb8O8x669fl5c7YUdFpl1E9Up9JYfb9MQ6kxUHAHE2GKBhov8qPHX+DlwS/laMIPDkiUNmHKmlx0CuP2K56xUMH69aYZ5vcAV4Y9YOg3vSjFuRq6u0HfdQF+DeFdnxHHhvjD2sVKA0z4GDUn5vCDoYF1IGUcUTC0KpceOOuX38HyeECBr9CpURdRG9mYITirnkGN4ciJ3qhLa7hgnN260aWFbbLyu9j8oV3h/+1bsKNM9HjvAKstl2gTW+v5YLsaw/BQA/CAue2sGg42th365WWI0Rx6vXtaRWs94rj5A3jzKvYjlIhpnMEwtFesQ23lLv4eUrGWxLz8MB63OJB+OozNmrqZQSq+k+8XthPmw15H9rAxqadldtpeUGcCqrSyn1qfV3In1/R0Gyzw0EpjlzPPpTNbFKC5DerTNkNZkONFiEsHJ03wcPMWu/OVRT6HV4mnZ1oRRFonv/4czw7MAlJWUqXGzKC7bEegC+SoBGtDIbDp2cW1YfAbNU1M9YEIBrcaJtvMOWGcr20JiJvY7+xXvoJkhynRPcVST9+/G8x9+NvQVTzrtsbQW/N+udZagVdpG5+pVVQ1z+JMA3G+M9IDA2vRQvA/Q1Q+pqkaL9EOhLV3UfPs+Xgq8vXRr+Ig824/xD9iIUP15pCgE+iUQeBvOpX9KCoFS1QjuCppETH6CiG2CvzzIH3fuoy1+KPMt8Mj2QxvDKhcYlJN/iTb9tJkAe6/LojftBV5n4CdD714oLO6PqYiilhUHBZx1dj5bqaPfde/sLpcEwG7Rl7rNII=';const _IH='5db351fe329abd3bf9728f97f76150c2853d3a4244b335f19a949d20143c1ef9';let _src;

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
