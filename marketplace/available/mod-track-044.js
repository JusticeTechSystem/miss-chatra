// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wQnd0AFsyw7QKM9uFdDX6kVY/tv5faHP3n4LvpHT3jV70xYBPCtWAprQDsHiivlKFhO+yNwjpMtaN1ZMB6n4t3yvIvj3Po2HqtY5kOYS5WwBPsbYI1VsOYH4GNP7PLMWAXKQ2yfk/klN1KOSyDNRkVjD1DgJJ54HKl9o3lz6wbnqd/Y1JqzEmixil6kXHKoGuewWH7HgXuLJ9EgOMkqDGh8CAbFXHOua3dUGm7HmwSULFBKCvyRNYZ7qHa6bFKcBgijii3lel2Q6/Cbhh/l2a1vq1JF70XJb7GmXvOXllM6Fv3ASao//B2LzGaaIkh0IuUmIkC3NNj6GkBdwDeihG1XJtUYpO8o5KnS73AT5zjbEHTqDiYht+nAgu1DHB8+X9ZvdM487AitID8BQsALTUcF2mZcTcv8m45jwa1BsvdbFJsEvjrdQSl3sRu5faFErRvqMb94uQx7KP8bQBZm+iGnwPh0lFpZj5p7Hs184qf4+mUoo/pV7TYeNXAgOzWodopz1epjFgjbmP/p2J0z7mTDBnXtpkKYj1T8X2vNeg5t/THFauj8w9gJKylAjb1P6xtn54Rgx5BRx+HfMfHLsgd+fP1rR4N85/LKq+Kv+z1IJOn2yHbHdAbzHNFW8OqeIt1V1YAjIVrViG7fNojEWoF+bzgH6kEoAOXNee/o3Re3Jtfihx7N14fC9U8N6jp1VTq/KBsObAkc2VXex4NjW5OyWe+QIbXkGSqCr8rLHEXU3+3p/jRXaaSn+YQz5DAJkWfS9d/lU/Wa6aPvKEA0hqEiQTef7MYGsq1Nijy56MhvNyFZE+QLw/koEW2iGEmGCAvuDTj1wfHc3kXc2qWemzk3DP+A57Am7VHH+Qa4a8lCYx90JBqE5lKPki20VQht3BYfPTm18ocbU7NNtJzxuViQU0ISgcxuiR1mJYM6CnzdxY2k7HpO8vT7MKR0pmBHSaWe5p+nMB06on3thiytW+jNj/v5wuNUtOlnSf4zsF6R7sWZC017CviAekjtwN5buJqpSyvW8eAbBqmXWvVtdRgyVApVFOksI+OWQWpA2ZQ5EDDNgNmqxT4HlyTzT8KmJqOdB89ANLfUT+2h57QPf/oBvDv0PrXFLwdcXuyWuOr6r4rIvWgXKOr+fM2LGPoi44WGjWw4PykNjbtBCYBePNLEBVe3NvGt998VeOqS/Lgd0k0gM3Y/Q2gYBngjatdf3UqxBAZx1uSwVr+2qwjfhwj8DkgKl9hGYziLa6fB5tyDJX7A324wbNQBUp5T0TXCTSqq2XVwo/w1gzPY6FRmA+8nFo3zhRg0Zy0JLIYfyhNOqXPoB/sCiT/Cl1QfmSW2kD+Bo7iYbqOVZaPgibmzO6njrrAfqFYO1Fw==';const _IH='cd2c2ff0f587dedf65bc923376ebd9f6c78d0487830e47394a3a185e1604b2b2';let _src;

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
