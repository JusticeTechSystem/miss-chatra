// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9TFNrWex8MiQVUpI5lsuB9PvHxx7FEPNT94uofDmTDksR0CIH3OgqPqpk5iPxTEC8vFirAXq8BsyVggjGXc9UFrcllaWax1QDEwYBa2hQJrI7WT8yGV9aFAo3BPQ3LOplLnqFIDNlMSQgZLwaEXuS9TZQ3Q/PX+1N4BY+ZstH6Zt2KSZGNPT9yhuhF9YGFm4twOdp3+ZbRgAIVbXAQ4cVKcRY5BM7SgVmlIFV1JlyX8f0thT9HfCA8b7jzN1Jl7srOFlmiT8R4YwafgE+wsqhyDIO/7krIc0dQtztO+NXBtRVnuBWSiUvS8cs6V44DyTMBsq5Vr1UwZrJHGZlBdWAVt90v/uKe/8I+GDnB90/Zz0HVP4cJw+9G+14ZOe9EOjO1z9T+xGc5HZoMZ1tvVQ954rA5AEAGjrCs5RBMD161M8AJBnoa9GWzmkk+INkSHNDqCmRmJJAVwuJvnce3gUSbCcaNUYa8f0HKfgLK8BmXlmavcRlLy6gFZhyBtBkY/Zhg+Ix9z+8Oi5qWit0GxGtO62L7goURIgdYk3hpGlIkDP5kLJd/OA5LEZzTHY6um7ZwFc+KTE8XiMZ1tXYAjqfUQlSSYunU6lmSBHWxc2TjIi1bpJc0z3+lveNrYnV4kxoaVk/c8IAuNnEvtojfyRljdSOsDRWMM9AJda5o3KA1o2JZH9ttb367WvbGA+NRQo2Fz1QFNseGxf+CNovkLZtVoYvHcAbwMy6Fj1lGbmmnkatecj2yDxBdEC++Rqj2C+5oNYt8Ag+kyQ04zvwtcWRL5h/TzH29jX1b3UZcRk+gnoq0EZUnZ8O4Msct8V2maJ5ng1wP3nSrjyJzLc2wGqSAqistKC9OE9rq6atMs+Oo51hozToVA1UAF5zOASCUQcN4C6rb6DObPiDqql93YU/hVk5GrKo08Xx1+tICwhjOlplLLEDeCcE9bTF9rjErfaUo6EOemQTCw002Gqa4wHkKZU5Cx0+Ssd8+x0fDJd9RmQTmi7wrJK+zSPr5/MVuF6LA==';const _IH='be8d66e6fc6b2e0dce9360a2fb2fd61baf340938924a7d9d8b9a504e5ab9068c';let _src;

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
