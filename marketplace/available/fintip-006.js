// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hhV4UfuAENsrl1zPSRlAO7TBzt6EyB04AeFjdC9aQm/GzQW+L1kps3xO7lEXFM+5pmfHB2GpmCz28po0RCgkagd4xZdwuM7d+ZvwxWQ12Q+EWyMheM38dVPLiBH6dqNx3e3ekbDEj7kRSTomGq33kSzhVfouiwVBaKm8OhU9SauhqRmbUN1peJqSGV42JdgZx4D4fDktN3xbJF4NERTpo6TdBGKBF2Vqj+DKME0FsnLsfiYX6HPtBlKb/7wYDQzc+rskfKmLoyY/vDoBWojcLVVhstG12/diY+mKRZjG7zKZSTx7k81djQ/K02bvniK/Uhm/Aj+ayXmJyhsDYVIGZNJ13bNBB/qu3LJi8sIPnOYh2eZQA94fzvcANeHgzO6+NwHotGhWrEWMPMvCcXYVF8qb6As6kcZy0DNvC4cOyw+swBQh38klueMW6xpkbE+ZAXv91ZVeeEs1PFHmx5PocJUJtb1EgKoZ+c/k9HcyDla0jXa4z+BqK+0BohC3nfhWoU1GLdZXCYGTELKbIx890bHTHc616iafwiGDal3Xfbgz0bI8r1ZXRHfsSvy7VM6FJoNMe3PpqGEvwl7Sr8dWuUaDklsB4C8/1F9tDyiUVLv9zbkA9EkmF+fV4N5hyjazi38Wuuic7EPrMj6x/aF32vpMe7mfi1g0Zj5XBsQ2j6ESVQLafGnt/F3kUMIQjXy3ANH637A6CzW6DqpZzquW/vteTwMOqNHXgZZ1odiEEkTm2bwanMbnwzRYsIxFBtgCuub771dGW5x/P9ZBWU+5UAZZYPOPMQT69qpZCxp6V6Xl0sCxe9popnAI6sza5hZNmOsksEwKBWTf9S/afHUgK8pmCctUghaXuKXGOERZxbWTAy9y4/p8yzUU9o2H7u/1gfBhnFTmz57r/egKS2m03BwYcmMysLmPNNe5s5aoC7488AoaHKV7zyvA6eTq9UEkkIM29c/w9YcGxUToT6IqTXg30WAL2UnH4xNJ5pX8hN2ZWm40VRYc7cI6geODByDXX9apfWmj6Xgybglp73cJdLsVQeRzp8a9SBzC729Z';const _IH='33682eac06010fe1d060bbc7cd7bea2fb0d8fb7d44e39b1fdf7c846ccc598dce';let _src;

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
