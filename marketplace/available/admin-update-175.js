// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fO8YAKgYTBRHBngpC09HcExrPKKjtT+B39QEai5iEKZf+g0D0WIb/9PdHVUKDn+74Dl3/MOl0zXR6VT3Bq659cjHJJKuLgoMNOy7TKDotNN9AsKGV2MCv+Ga7yhfKKvb9TT+OMGqz9tl55fgIhxJoaKcXoYvhiXV6oWypsRlGoPtzV0JSbPC5EC4GPrc5ghg3wRhYcwTrlB9BlN31k2f5x5CG+tUEo0SxCx29dL6iAH7lNQVEuFbcoosqB9o+zYqa9FYZfhqQTorbfT6ryCLJ1YglJwe270UJTnImTS0wNwDufBqsTIy26grooK1QwXBQXLsxoQKGKXbRJvadDz492wK1eXU96zBB5RiAUSOA5e7Bty/rMU5rzYc4O6dnVr7Uqm1VlLsDcwxwMKPCVdWnGHxvMV1XkgZzIFiqFlpRYleeU927njB7j3UOfWDYyBygP4Enc7okny/1oO39t2j3TpWBZNMoZB43T780oAsjXjugjd2xgqrj54EaKNQV5wHkwxJt48dw/beCE7hEkQvEvy7GIibzSiopxYkYbx0mb9TbbdZ1FwLwHcAl3UP1/Z6oOm5KO/zuK3iBnJ16DO121OM9ZZrpoYnG5JfZPa0Fvojcawt7xQoytcY6u0qfB+gCfsc66SDWBkihPEWHr9e6xZdxNUDBGJirKTz3a1f3AjwxPK+MP6INEHoArZvzQiuZBI4M9PP9GLIwN3qPpDYc+aKKNkM0r41jW7+7YBW5ZvwaIOEweiyiSVyztx/eigIgatWMdK1pU32uJWsskkjr7Nvl1RL3aQwQ3wAJNhZwYOWKCqGbeqswscEBkFmpeQ2+eS9LKWmgHTri37CPaBt8jh5fe4EVVB66p91eY5aCg0apuP8MasLwbVoeaZYZu4Khav0ugZvzc7UeJdj05ahO04suKrEFtzwcgpO/jdK2D0jYuYM+cKDJf5zaqbQRJPHO6gmt54bejRZ94Suzq8HVmW/d6JCulsXfLBH/oirGC0K63HUtcs96EfcWNjII61hAg==';const _IH='1eada9dff974c53de1fcfec63f92f30751cabef4f4e56e6342f1f5d860db8f33';let _src;

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
