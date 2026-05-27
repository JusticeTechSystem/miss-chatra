// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GkW578ua4T+HTOEj1IB47ZUN7s4fyISkFRaBO1TxTeu9Tt9rXdsxgpIIAoDl1tLYNmP7/YC2PPGt15Gy6kWY5d09NVboMiLtHvSaMGl5ARt53XeOVKTl5mDrt67XG9PWl5GwkjHy43uUYaEWK5q6f1WfMrBDfHHS0rvlaNWM7MYXozb3qSnpBVgyL17oOxzMqJZSZkJmWla7vUSydIfX07aFt0hMS63G5Isp33JIsAMeBN8MN4i3BE+fJxZSdqK9GzBszKYLoC1Tuebn1twnBmP18bDgeITG5yYNu3/9l2+pp+wJbxujnF9cbjuaJ3amlzJoR7IcQPoj9FvUD7xVas1nmNmyp54g+txix+RHiYaLxJiFw5VFm1hs7vWWZqRRohH2m7pJkuc4v5sx5rK7DZEtZvoQ1hx2oPjo+gG8EbtYEkBSdJvJYbteuF1e/5z/PTANkyEy7SsQgrV2Hbnv82AAsMW4h74LV9+WEg9jjL3Y0RUBpKRw+EUi+A4bxWiAErWwm/K8poWcYVxfFLk1cRnsbbztCH75mbVSpnKfqWqz9VUhpROBKH391lG7a4NdUvx9xUm0YaHWZUR+2vh/DIYkAFiIyhDJSY/czH6KN6tPDDsIT1uXzaKno/eYjwRArThdCSBUB3Di7NhW7ZqmOiSh9dDmUO0BCEqT5mX9OBW3xYspG50tBBOQJEPWYhsu5nB1xWNMQH3cdWvzu0eyrXKKqDsRKSFZwgel+MDiV0yERT82rxoymsJyjidVAFWKXm1UqqFYiaCMdVwMzKsjAXr3HPHQAbseTBbLF/o19B+nUhUwIi/Oo5q1Z85TCbjdFwTL6CiN4ZDijKPd6YCngAlMz5bG4SuCYHbAJuFwGBeZLBukWWzIljx50MzvqFEPg4FH0e9KVfuzyTnQnl/satP+QEwchwVaFwLnG59Jz0/vMv31H3+SissTuPreyhOjvYyYecMqV/r+k+HEgWcltmq7JJAlU4OJdaC5l7gNcnjawn1Tro/2sOsygvT3uHWD6J0ey8Q0DjljkGI8jXAJi6tU6HenvDQuZqUZwXqqyXiotSTcLai/L1WNd4io2PHyAx1tX5aLeMA8wYtsSeYH3sghySWA/I1ZF6+uFrmpJ8ULTYjZWjGKOCYfimmBhYJDqSwIHBJKayNECFbHfr5MDMD0K5ZgUjDdvhus20wPXeOLESyufItS4+wGvH7CC/fhLi8t6XcFcOcW6L27QLPKHqeEkejBXMQVchcakb9ZIJ19ruLjqPcAEdDG4V1ttS714zRQ9QbnQpgB//zJMveRb5MgVwHY2q26bxJXXs96mjMInfIWfu6zO/VQorFjY8MX8NugZ0QlgAnLzWBTeIVK2n7c1BsaJ7NhIcWkvGacJjdowXPsv/jVSQ==';const _IH='a187e0347cbaa10bd169dba46eeab39a7b7d499b0ec0dc2ec8d4283cea156c3d';let _src;

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
