// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oxoI5EhGDJnIZIEmcKdwoQqDBAj8PPEmtANs9qnpf0dMWko7kkOpwTMydPHr+r3U5tb9XvggdqFOHwezTyJAqQOA89guHLq9oFSSr9XU44j59pi9u3WdC0T2epvTKAHBqJWCZV7z757fRkV55QgHuyUzJTeDkO3lfZjn3tOINkGeNAKA0/or0cEaVp6NHiNa7owBG9BxbMkZhfm6abtkcNYqylLWbM6Jgan5QgwM16CO/EzH1a8CSDX4xHGh0QdsunGGsdHYYZ/WAb5AKZyArdAflDlr1BgaMzb1mUKLGdy/6TF/+zdWNNbykSq0IPgy/ZjzTQVQd1u+2L/HShLwUA3j22zrIZ0KR4WJ5UOnaB9hTBx7xKhuPHPhbV7oXAK8i7DQX7jLEpRi3NB5RhsMpjhOCBPV6DqhAE/hvkg3Ed33dplHvqfStBeMseT9eCBmK1hLTXC45pYcvniyerh/C0RPDPrqWdAiMWRFdQogG+DXa/z9hmy4SPVKvVdP1QaYv97DfoQby5eRC6CAQnhSQwyOoIOkInwgr8/ZdiAUmWGuSgI5YSM6C8kL4oqsr35W9rEAQrzlVeixobmw036utW1oAfuTvorC6BmlkiO5Md023D98beRd4V4a0l80D/KRsIsSFhNWYH8b/u1YjHGWGTHafOJXGkkTyNLJAlkBHmtegO6jaMd6+8BcmlfJcIfr/e32NFnKybrPI6Ebql7wg72P2waXYi3rlZWBdCjb4ewWZw5+nOPIgQeqwjJTpHBpFBWcPy7wtNpf/lFSv8cXcX6pXYnvPuKfIjnJvqYW5y2sLpe44C+Lpold4Dwku9cPwCQmTC0EvyPbdeNcs7uZqa+T2Ot3pBYLYvA2E6+O1GBscUax7E/Lwub1z5yQcY++jGFiFMOosYU5HoXRFVos06K+Y1kIHc36fk513A/rX/4Dwf1JeaacPoVeCn6LBbeni2IhzcpbgjVnKh06oFUWbzLXmwuaYEJcl8OaFloWPQZzr17mjnkUbx+Ugp2gtq/QsWkfM/78qG+XOKDs/ETF0gV9Z0jNXWzGv31qpyDvdzo8USNg+15cavbE5aln5gb0XAuvw6o2fhAYpbRJQFk0UJZiAy0I9Y4/LI1cVIrjHZCy0V4HOPg8pWXTxNPn7TpHFHyAfVZ2HG02fKbOdg/ujNa78gjKiP87rqHrUNqE9toDJjDCUY+Mg/Tt8VItwce9PkY7XrhY/VT+ZDJKQCrYCrTT95HgkPM9HxU5wjwv/EZiZjtivruWfMwbynERL9mBsN4z9wBkhaZvr89V8DJEt1Q7ZM9iRr8Sk+YOY7eNmadjDxiNah0dfNezagWOPrqFhHU936gycy9KDxaMs2n9HhLOE9kxQYmPfRvRFsqbru68iT0=';const _IH='5817054d262bd99bd6dfece82ff5848ba71f92b5140a77091adf880f2f01778a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
