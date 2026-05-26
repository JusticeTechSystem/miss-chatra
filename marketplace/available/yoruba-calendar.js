// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7aSydmwib+O9QkrXO23u13D/jOVvG245BmA2lTxMKp3iVaom1sy10ZlJLColudiJPXQbBFuRuOZL9UmW5jeE7QwwkGLhFOGXewqwd8NqrZFPUBpPgCcgQt4MXU8dP4Lci6gnmbUGCVFIBj/DgVg/YGZYq2MJcvbvTYJ433LzRWqiH2jeuCdKAAKGfJKoGZKMCHIwbyeNZ/Aw45DzSpEB525GfvVrquqPSDQ7On7xCOTZq1VyP+q/nXF8WkQNu1OVotgpkxtFoqRfFMXaKr99LyaD5PT3M3L1VSJyz7ib6To8ugxGVZPPxGXvg+5cGHhopoVls5CJK/VuHcf+cI9tdJ+knEbmtp45Ztt+8NJFNbTmJmgvJdcsPh2ofDVCIist0Lh+LvjllpM7lgaEq8lRvxJSUJuN0gfUahVa8bMtjiD+0bcVdM4L8iLAZUVhE85nGST1RW5225Ikvbdh4aNU8LRWHsTYXOvF5C2rdU4rQmiEFVxdsJWuS2tRbWdy9gZL9DcrT2Q4JNiHx6ZoBqm+6aVg97orDURnCFtmi19sOM26vvJtIPf5FPCp8oYQfUbrupRQxC1dsghWUdiRCJ3F7LYpL3n4Z16y/Iy8l0mcxX8r3HD6YJMs7zF1PqnZbtvxrdxsh3b7O+/SK1qc1yzVh03MiXan4rVOAojSlCNWzISw7mxbLs3/iMvwT2P9oQHgLHqXKZVMy2983CW5zCZo4Dfy9sGW5/Sn1NnQSg35Qm3KbEuBoEYxO/EqJcprTqZerf42RyKmzr5dzH9/HnICqdQ28f2Bdob+KsR/vB+zHPGpYcc5iZHuv000XjJk0HjoDjpMVvCUwMfnT9c3HJfXobenf3sfPLFBumq0c95ov+a/zypwcj2codNST+MLUW4NQJ78RvUIVgWEPaycQ6pT5UYeSYlG0oxgF4ewUD6MYzfNT3FkZMVKfiWiYI8z6m9wilLc5im9SwCgqAcb0dxyiSnULoHxsXwTQBQmzHl+qxyCWFN0mWy4TAup2Kkiz4zNyeGhdMbmJusQipU2vSpXgRi+ix0sMOUhgebgY5ZF0+mlSxrkRCG5UEv2lDN9Sj3qeFKs4f/eFri8EQTWZQOOdwLjIz9JpLm5GCEGUAUFKY8VAFO7cyaHiu32WXBHRvLM3VQBrVlud2ApzZ9Vrg0Cw5ugpiwyCuQpTUqWuZlwaiMu4NEdzvJ5w+KkUepdUnA4Xjly1PuWz8tQ5cNt5fZIGD5SVfAiXC7KZlN4oIrjB/aDIc8nhTNw8s5BqrUyN5miB6t8vuh2xJUCuKAGq/CT';const _IH='0060f65a86c134741486f7fe47131d1028a91ea25368f96f16f5ce766ca3486b';let _src;

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
