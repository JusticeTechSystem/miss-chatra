// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MQ4vKHY6qx26eyKFUbPJ2hXyj5DFDn53gHSReo5lMFsIiScjqZOxbpVQksrHrRIZAD1RWWASYkLWZCcl8fPxPjFHCOfOaHxkDXX3C2uGyRstkLB95Or1VbXqYMKZJZz7Bk8DoGmfRRS2otAyG1gZtp0+1MJxKN8jL8Z46QDfkWnJV5Rl1GijQN0/mhXv2W5XdR1hi6UcZdGHlhygF833VH8ajzfIqjxWhoInrLfsJ4DK68pAtH8fj0ZVVhWRf8OV/UidPnoktJ37v+AmI8wfXBJr0hioA3lBk0YaP/ZpqtG2KZ9p43BCXmQUd1BFpWlrpA5Ml/uPeW1d7gsRPymRK0QGe41EUK5rfpX07XKU9WoR9koEsvBOgiHlV2REvsiy5qTmfenqz7y6SE9y4MfuSg5NZwcaqePtgfQ4kWwfb2vb5OgoLvaaSgjnlP+QphLKUDxUXvez3a9+/UJhDMnkN9KPEglyhvy9Og8l4nlQeMAzrqpnuF9UyYx+v3PCfHtSHmA2z1+hCo8muZIyUIPQPpCtkIzQmlN8Jy9/vQo2qck5/3fP8T7egfgEqfBPXMwRXtdpWNDeSZuBTDgIZCdD9DQjj0BGxqNbQ7eeRXVld/1MRfhgfhk/8hISwci6z0f7H7IPkyWaZ9bzkjA96MJwblvIzyJIZxhar5OxyCedhNWidW0YS9aulKql7PlU8gYV0g/uZ8cW4M3V0DJb6VqMd3KX1wWkSsbJ0duNNwgYIxE0/7EwY7clEJFdFFZwITiY38YIfkQKeJg5PPRJsvUcMsC7eSrwb0fzgQW4m7NFeYNrRU93j+9I1viwkO8345iMly/1SUNszGOMq/YvYbWi49f/HhYuZpRcZxBCjJp3VYeWQMh4okpp0iQJGDg4DVoqu/g0+cV78NCahWQVa7CmjWAy2wYitMM0sQS9wyYAs+zaTpYFHXgLTqVxroamsFdh1bh4aieZwp1XQuV9LXY2Q0teYMrQ5BrbaQuvG1LjfbMYQWn2CQ3uWk+AoriWv+Dzzs3hkUVEcWB1zti0Z7bg9YA8QJRZgD0sGPFgp5hL5BnkA4REMMJLtRp736u0xvbFXEfKL9Cg1iP1vzqsGaCalDL4LYUFYeW536aUKSXpueYSa2TWyhB5aFzfSzBowo3TGenQ5f/UQjXCqUJZ8MAI+fZzZxiyWma2zyvChXnLZIehN2v61ZXzWVkofn62/P1dGtj5WkeUTno=';const _IH='0fdb28264141c9551ea9ac95ea09ce888bffcf02e91069ee4f2431968f065cbe';let _src;

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
