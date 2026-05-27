// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BVqGUZPsgXB8i47M2F6Wq73FWxZGn6VfLssHb81FQMB0U/BGud/oU48SP0SJNo9UpIDYgEdLPDwUCXsTvYph/yUEgm2uSENgGyLu4uFpGWG6w61BcUFFwRZzNj4JILkarjngBp51ab9r8XpKk6fs8tHBxidBHSTaOROLUIkvSujSkUNOAiFVd4PSRwoKsb5cqU7WPzF86UjFmxHVu2sYnQtgJrdmFDIcli8ZVxmXCzLmpbyh/03SVzZPQ0JuY6ueah5u9QhCFWM6U4E9fvLk7kMgiLhSNgQtVX14cnF72X2XY78KPcrANHVyWmkuLCRjov8AXJ83rdrmujL9x98ZrdO+bPbUuMAkp9fNeJK3+ynwNq3bS4yQLITi6PSpbgUb8E0tgZiVsDbHxvDOswOTI3ucYvWvz+44ThOiGLD8nydcK+UzzZfwpEy8YnBOf4ozzAIHSRHMtJwLp9p7Pp6+I7e2DLadWU08TNhICDXzURrC0G/Fp3u0dUluzBcASCvir/zYOgMiTocSB3+6biLlYbqvQuwcf/0Kv1SQOFZPzF/h+MkZspyWfgMAzgm3IQwKUnmjtegtYsJXhiK8JH6jiPvbRWlblHd3ZLYppzzvgdVtRpyoLVAo6pAFeKrAV7z65UOd2jLz7ziYbq7h+JtzXLw2FzeYEjiO1KfbAjSxIJDjfdFKm4jlfY3aKmZEC1T0UyDECYjO6eInZIKL+W+cTk7cqvLs7njapmNU70Zh591jyvgLcJae7+v8z9pF0ZkuXJU34/BRMm42Fs0NSIzs4/oLE3yfRqUlvzxc5GkCx/jE9bDVesNzbzJdBakbT9d/RbF91gfGGzKglrJ5bgq0fh5MQtlhITdF3zJLsfqv/KG2wSypVmiooOJytwCNhQ9KUXsYoTLuonnSEh/T6Mxpnt+2v6goy6M6Q4bLIxhlLVO/Ojw+2LNOgxykUyOrlnrkz5eh1iJovIONVWZqpWJNdBPee66DZz1NeqHjhxa0Zb7PdRj2SNH4DhzWzslc+9KacTXadZk8ft7huDxZ995Rb8bwB99pkalBKpvtUkKCLTfHHYephqLthRi9V2LM1yuXgQtRAF6mCTCm+h1oyF+XgaInJqkST6GL9ocGRdjpQCuNbS2kKoFyWhXggFUJFimiyRzKaeLXPIp4ywijFq2KdwALUQVUvBynclrLDZ6F3cpcXt3FoKX3qR75HjveJahbJNhJP3rnk5Tn796aIJtJLsGMnXvgx84ota8mE06O7YPK2LNNCBwwFtp92heoczi+lQxFiay2wQC89DgYj5KniLx6UhLhydNEeVwJEZyTZvdpNbZk/qZWCQc0MZfagE4z1cfY/n2vXx0UKvha3dHH7YyXqG6o32+gYDFwfWxjJ5wHQ7FovoMo1Q==';const _IH='177ea3ef070b2cc0ba0865cd15d7a481de45783ab8f9f938e9b0acfe17d6b17c';let _src;

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
