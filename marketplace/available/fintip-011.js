// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q2xCo4hKp7KciwbIo6mqeNY1IE8pe8Ci68XujfORWSv+6/DIwpkxchOsM4qe+gGJmqEjAmEY6BBCf75emk05v55gPEEMoGmnQsx03OQYWrgFzYYoEi98+JWiRRhBUSgBhExzsKSfZjqCWR1TNfIs4WvxoCFhwn0A36vmmvV6tJZ4qdbyHgBtwi6I6K6T7puT8Pti2glmimtuTkv5ghqhCndk6fHpE+56tLY9Sg0H7xh9+RTAt+Bn/j5VTsF2G6Kd7FU+uIUBKBTM4aD8IGHPWPtKwfzJmeqFMOCR0dslE+u9gziIaPs3/3dPHFtYyY2pfGStq/9WnNjHBW7QipTbuc2HY0PHyFqK/d0MyVjLA01jZW/BsxgFntVcjneEnHAXfMsHtK3llPXPzJkLZCmS4hsBjm5pgBaW+cjCrptLlLqI9YZCpErE+e5iDhQ5uMKN4Fx5OfVe1/4K2Ak3IStBalQq6brie1oLKgXbQ7XgYfTu5cYk70k8cdjHlj9WZfPtDDANNkknDF1cxvy85u1z5LA+FjD3fAR8hpF2B1twzJeNIJsByBTvyODr46qabmv7v5j3E9cMu4AxDTWGqBrND9KNEaxgAppP7s144LCOFqbmO3Mr4CTptYXuIJ5XSgqNba1UU9hNi4Xjk5nPl/F2Ab/7103cveJg+s4dKyFDgNtcMCLmxG2bqSrRCCMF1iA/uOMyE7tSYX4LTtJa0K797ZonazE6Cmr6y55+9sgcXzDodC3frzP8DZLi1NXs4FUW8oyQfvBWLW3hLu/C5n9cDqaCCgJFxVaBQHA7tqva2oi9Gkj2XbQpqmGK+di9Gzw7FGpWgfewfJxrTV0KZfNwYsd7uQ70sLylW4Z59JfDyl7SAFzhRjiOxgLxpg2MvBw9StUf7jtNL5V30ZXw1qdakNThgwn8qymLN4SuHpDhDK5WmviGQUcy+ip7YjsrBCxXuwoSftF9NFh1JpjH4dXVu1pkvFOrwqZLr31DbIjll+m5mewphUJyiEJ7BKhE4M5bT+EL3kX+KXesfSuldKMaFIXW/5fVo9vLWDQqOzP1dtcXjQ==';const _IH='c461c1974a05a6771b4ccd0747e116d0b60399c37337b6d549bd4537a3134c2d';let _src;

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
