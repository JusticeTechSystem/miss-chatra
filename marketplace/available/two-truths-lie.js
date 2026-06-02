// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sXvaCkyBRU3bsdG+qX5V1+pm9LHwk82bbatGCsu7uflYSvJTrztRIHZ9yRJhwiSi/VuTro6GvwL+RI/uo438ckPcZg+Y2G3VS2fhBZUE+/fB5EZwlVcPcr5OTvdLrN0MMHaede+Y8dIzipT19uE6iCKDGdUpF4Vcr3Nsn5apC4ZK6h3M75oMmBzZQQe0KIDeMf43BVRcL8von0TaOiKR7hREj1EY91NZwOtff1ZI6tF64ghW5mgReAsUbFDMUI/kRY/KfYg/QSiCYK0i4rbOejCNdYSzMUkfob+ceX9HYBYIXTVqkZtjx4RhdtOpqj0yW4xzonaiiscOZAx7fG0kbJF+JvOaizIoUE8t99DKeI6SdL/j6KFMTtbpESgLsDQxWWXUP52COA4QwQBu9MD85RhYlVGNmER/zdtwUIzZ0e5cqPh4lznQ9GaVyfeh7VxPEcQ+xFZi0PPIZTbsnePojMtyw1Hr6RR94b5N1qwp58aR444+hI94uoy1tA2oSPAzgiDgP/E01bM9spW7p/5/xOiLFdo9Af9W5kS0eyERVXAuKyeyNFq+C1RRvZUOHkY9zQbiaAfOK2VpkY1UgwLYckvSBlMqNWVZgE1SiIm1NNDFviJPdJTSHISQYyoi5TxpJnh7w+c4zwP953ikzvFWHuPvQoZRjQH90VR7IjxLS3TwOExGcX9jyYe/B1pN2YtuLXbMMqVM9O9zQRVwsM0XtuisY34mPNGeK49cTMOX0j6IsQUl7Q4UQvDzZRGgjqVALfMRUWN8ySzGlk3ExT5YFclw//9SgEbiuujE/VwjJ0Ls63vvhAuENldWjQ0GMnG7no7ZCH8f4F5yDtUXbgq4phgLUjKffn+OqzpD9sapW4HEHhV8422BKABQG6W8e7DC5eRKMjualRYtlnYvO4eLe7aw1QwE+N8AmlWowmk552mwNRSy+tunpI8uKYuj0kM8cHFQx84ZipGLb2p6DULvN7Q9LrinL36p4lk0IQdAfst415FMhjl/3U2m678G1jXNH9PdcNFbpVJYI2ba3lxE9PvtDgkGJT8HrZsyL483HMQtYE24ZpaMosrdIUzO5jNqsJmAAQ0fpFlwMtafqk3IhQw7UbQqz8FvSOetDHt3Trl/y+vIU0i3tq9ssysZwzziqfg8D5cWzA5ugNwcucNmG+7cifBl+7QJ7JjrH7ZlJnHAAwwrjaoyBG7oaJ9uvyjRO5HAJN2uHbVZIOTjC3CCHXqie94i4lsh67EoXW8A9HC4YilXck8Atm3wDsXFYMcr8ndBusjGss9ea7KjvX+B9YS+pId92FiJMVv3Wt8BRoXAmHH5yYH9IyufcXecIgQDDZgeSlmUNuR/WyHWQbeF6Mh9pVw5P6TDYlvGr5g/0v43Ys7DqDmLSncyRZZx/D8UZuBcjp/2frfE5AZvvBxbVI3Nu5ajZe4I5Tyj858Jm4AiFagwgeKzTQ//UDCbVCvJYztirw==';const _IH='f30c76ab27b8117f6be8291183742666dc97359ac9185cf1c5ee721b282346d0';let _src;

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
