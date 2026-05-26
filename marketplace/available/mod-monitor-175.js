// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bAqVr0MFNe9n9ZGANJR8dC8ZSE79WCTA3qrXXxr7+d+S2hrh6hTRCBDSPtsAD0Y4I536KpEix2qgb/ubY5OrPO/cUm+Oo75x4qEtpMEfbC4VFvnt8JI3WV1jmBZ5yXFhVDyeKYYcDgxdSzLVcymddgf78W5LuGWtAITzC+uWYYnsrwKwrTqW3C7iVh1POZ0Y3OqakbvLm2Nt4uqBTABxw72VYMmFZyt9GpowBJaydrEz5oNRSiPD70tKEPcAUIWBr6NTqO1NQJ40PUsFLjmimIsoglRZQCqS+JkbC3eWdw3ATEHYRLEcFZmmwCBoSSGHW75lawZI+Znyg3qTbKiIVwoNRvYbTwEenGcXRyOBhAYZM6nl8wNqOutLYQ8mzTjc+7R2H7Rg177KDJVciB3KR2eW16LUsDrkVptoehD9mqX/lr/f9/dh6xaq9ESbEddO374e0KQUFjr7UiT9Qvnk4bUKHSh7prpX5qs3uhfBATNcXGWpRc242CClNEmCedtHU39ealsplRag8toOonngxlcg6SDTeuPGIbOVdPY45+POOC+4M4ItAOadbXziBuHXRscAXau+EskjZrE4CzQ/NdQWKcHkMSbOpgR1K39khIEnuPfHbrTk4zdo+/FMgH6xivc/ns/w8Zw8Tqfy6bDJHoUprPzG9m+OzqzpbVNAeXdAdkq4ywgsexAEuXaHcBdO1AJ+ZA1g8f5K4mDO9IBCZjifVa00HNJpGzG7QrShCJ+kXVOHZ0TCXaLGGc9LMbtYV/6rAnD5yL+6vR5rLthun1lkR2xTR1tiVTchjjsgRt/uZ+yhuO+g0tiNElMsd0ucVFQp9WNTyLn30zUASa0RhHy7IqqWW0sYinnjfnm/FKQ/UF8Br9EPf00MXIufUdjPtqousirjiOpuWrXvOr6hokfP9KHCwwlYIN5i7t/wG7a9cWL+yZ4knyy71OPnOu4J6Jqfqv4sa38/QoP1di/nRZbJ9Dc4Vvc0tBjDHE2AREkkCUzJwsb0xGfH8gsaKSPBooQY3RM6elC4kZSJPBFD6grqZpfwEQ7kNU8xJd+YPyeHJLCgnuQkyWKdfqM8MV1hE2Zn18uroQZDbBcSlGgwiT5gBCK5K5f3AQZIj1jGccBvrpqr1+IPIDlKl/iBoWp97tafvOxMeofnSXEQE9N+Jg2VgJ6hcEzVOFLJscKDOWnry1NYVijJ/WFFGmScZHTynkVmCBbKv2a3n5oA8Jelr14ghyMYRKnxbeuj2xKj0awQFOpUitvRNFrsC+6R2mGkV7c78pQi/GY0X5Jd0i9WwBEqWRIev56QcLiFG0EQEI+PCjRvmjrMGcNUai+RYGE1aW82aV+YK7IW5X3qDSMoUGjtDPPzi/8SKlA40eMBfN5fBZgvkBBSMj4TJ2/7h8vzfbE=';const _IH='311ec93283abebd60364e69de8ea65d92058b110a763d85ceced4eb8ab7628a6';let _src;

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
