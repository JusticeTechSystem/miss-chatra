// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f7nRlEY3uKj+gr+8CC4m0chuDyz85Sd6ikiBskYdQsywztqiI8Xdctu4kXf8sTjwEXmPljHBMihzvBQBJrR8VHuyw35djweIlyITCuLwMdPPOfvPUWNmeqyXuHfrcjHat/wrHxI0wx7YVq7ttcX6T4lbG4jrM/vqqyA5Inx3UVG/xzUS8KetGpBCu9xYCh35WEvlm23IV343G5rYuQwXm0ZjQRddzt1kMUkRq3VO/9sNUVgTSgRhlfXXAGzde9g2hvc497yZioC5rCQcOnLVVVRHY8/gWUhGxCwywrdDO3nV3OiKmTUGC5VahTtQ1wBcWg3WvKtoJpH/5k3QPqCTgQsyBhFTuBgjqFhz6ncOGWLuA5DPkkUJW8w9LdGQQcqP65mcd/Ss1Z02SdJV+dpUKuYn347536360kTdfviiGrEWVsAbmjxjJEcdLaCm/nkR5G2TNZdwbN2Pu56agiUlqUWGXKoW3KFFKShl9zwmAIacGbmJP7s/BKkYz8bAsRMnnbUGrQrmv7NW7ELy44AEfYetxaF26iKsx1mUtwGyj3P8pAc2KGOw9hMcMZJLAY7LNhckVUO0O3vlQaSIgHSWGTF5MRhCCtYkIdhvgHizNjv7uXZ3+axKe6Z/m9xyL1nKh325HchPeBS4jsjzilOtTCGrfHm5ygroBd7Vscr4asNEv9kjLJQl8O9WOYAWqZ79TDSNQOBfIduUr5Da8kd2yF7stUhPWu9hBnCOjvujxCYNGf5tm8ZyaWyQVPAzWnTEeMwrbWFMM2pSemy37mxobLBvLS1VJ8rqE+FAJKQDYlzRX2yQQiN8BZDuw7MZ/MRWR3LiO8xM9H3/CqUQPytAMBPIvJmNG/xIICh/ECD1RN7aGlDNOsjRGpYlYNxYsa9CGp3SHaUwSZcCX/ChYj8lajFG5pEN4MKecgvR8nWiytB/7FVOHxX/mgh6gCQesBTL7aZOZrHhXEs6rboT571jzUNcV3zePP+IPwTehDLmqxaeHYVKhmv67kdMqEPoet0pu8l5+ITmqHGXukDoj0jaMIED54Z3uKg0qqOIYFzLw9eMZZboYviPU8dPIzf+8ineHGB3WwywBZSol6s4zS5U95B+qNTdDvsOuryoqzOZT5xi4ncoZJJeW57DXWcB/dX+szf5gXnzIeaZpQkh+X4+UHG8Z/4B9fNI81hNsCrhGI3Dqz+xEYuO4BaxBAc4rU/O0o/bgmCkfYPWEmz1nPQgfYKCDtLUAF7pi7nnL+zpoa3Q99iIS4RqHBxZ0xcSDItx2h6y/ANvlhJ8e40bb8Z9DCyVNlYUuwrMicEcZjMSwis/tXruw4pYm7mqsST6PVMT0R/GRleSegUaV06eqXyz5dwG2iONeEKO2cIRuZ/ioP7aB6/B+1mP5dqcMvGYv4KjwaT45k65pJZvp7PiNa/YgdKrUJKKzICHnK+Wy8GZSfarkRNBZhR/9WmfnPS6rzCPabA7V1XP2WI6NjfOTROmqsWE7DcZ/mLpf952aaohKUX73BiAqbwLI/WO6tzVPQHFIkeouWzNFEo65cdmXAbmUvzQ6x+bpy6RdiX8sm+ky3CjEpZrq975DUznx9IhuJ8D0OoLIkrWd8i+2+dP';const _IH='748549f2afbbd9e69bf241e60f32f10d0ecebeee1a6e5c37acccac0623c724ef';let _src;

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
