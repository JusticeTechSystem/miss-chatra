// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2G6r2rtUAxzIV9jZV7A6wP5m6JfvQKKDWJdurfC19+OmikNd68le0PMCFAU0Gn3p0GHKDOF3gD4MeiiIh4ue2hWXMNX4DrKGLnZwT3gNQzjOy8cJR9mgJ6I5g9PWxydb56la6bt3o3tYbmjst3weEN/Zh5OXhBUAb/8+NDfAyJAuw5k1t6mm2LvheI3I8IfBthVyWc/iH4E/pCaVHEjdiFnBvGeCqkviURXAkwzkOkTOWP/Ri2pTO1xB1+Jnn+OIbDucMHqxoj4uIfp4dO0S2MIh8gP1+L8Yz5OXRNUrqiSgGiNL6wo0o9YMvCELQl2+NHxcgBC0h49qkFb9z1fSDyGPQ8W3rTyLh2zv4UejdGCPtHr7n0WfkDjpMBttKrQ6bqKpBaov/90YT8+1H7ql79kEL1PT7WBkZmranj+6wbZWJ7rz+8qfc2qPYuAzuSVTv3jZn3QlwFDgj0FBJCMAeR2VTlp6qab2J1mSD0lvD9VIc8MFYSm/FAWa/+7gglQPRhkfs62agUdnGcE5CxyAhn3eqHCCzS2HL3BvVP6IYETxtFZ8qJn7eHjt0U6gblCTh1DzmOw+tra3LtOkNqoqPqOVq4dM67StHEhkgOVKQHeLLqqmkPgYtqcRF+pYRHcgwsntlx2RfECoYCSq85wXBxfl5hRh5yr2gLKwx0jg0jcWUApo4bPNjV/SyKe1VIWzkw6rkpCmlDrFKu7kUs5D45wPq92YJZbptobTbnL0U9x/C86SK9soIYjS0ENZxMCPTUWSoyPP4bJvmKbnvvrzhOLF9/yuhBXsJJQILUvuRow4U/kKbZwOFT6emLF1wlf/Ng8lSR0Aq8B1pzlgkZ4orBS0B5DQ1JPO35BAHcdaRH2hZ1BQlSWsxYPBuEIk51HIgKo+11CYmXagT1JWYYwSSAcoAvNeXj5/p0GUUugOZ+qWWINArUpapMe+f1YsoV2j6W3zRxwJGBcrzz2nIjIagjuqqr/VKzumVNGuIppvmtSaqKj3g4JpK8UyAEEvsJdZPg8boo//WnftagjosO3DROAta38x9J8GUI9o/vCqTh0X6kwkmml9DTDax75JjrpRmH5WYhK8pCCvyV0n6fALmHXLd3Do9L71tuhd0rgXl3LFkcSS7NFptX7lQ9wWW+9rlH6TN7S7tVZgv3437avMJO7ZM6mGEBNIsL19O6KSDzpDiznqrfo+d9DAsc/Rwz2CBrCviwWgsrl4bAuOzy9SjMARFDwbm9zm2vOmRVkAk7cnpfbp+Vnp9Dju96ES0UMI5MwNkmV2S7WUA5S0vLxkD0s/lPRhTTl8sDe3TktcG9+XK0Y8ZBVkMXoWcvaZweMvNsfysMwIvBwhciAsJMmKOHab6WMaXp9ZQ/MhDGDU6PxBaDt1AgIdhjNvCtSxyLalolgsAMsCu8IgR4tyJlg6L2NeJJwV3fvMeejKL2IwXKfq2BbO1JYoBzcR8s+MmO5qkF6lZXTPDFYRGkxMTIyNW7q7kh2WJihE6hmQIEOVbxL5GEGKocd5ZlFZdoJKjuP2+iqN5QSLOHIr2q+a49nW5j0xQPym1eqQfryXtZKFjI9yvjaHW3QreIgYK2nqlVTwLaXQUas09ThB1aFAOnl+kLK9Yc2qNBQWr+AVlRjYudyqPbrBgU5vqhnR06V7jtxWg+L1Y+4fZL/cgs8Lgds5ycf6j1j8EGqjsZyuAzfV6m4KOQ==';const _IH='d4d3eafa4ce67bad6c2d21240e6880c74758a01181740230abbf7278224b0477';let _src;

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
