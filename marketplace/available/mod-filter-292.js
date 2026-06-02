// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ysm2jmPuK05Tvn9U/oN48s3XIBe9AxnLJyJ8d2gT1ZnuyNWfvhgTs1JfjzcfI72nrdc16ndo9Sb/fkaCX+twqfMwxgkI0DQtlctFF7WUej5OZVQqKWWnaixxrgs5pTQZHSKF9bRTW17Xzstg4/Mrlq/h/O3a1lzCykRXRkJf6sUZp6fGMriDWxz4OCiyp6nVhLbEhBMKUEDd07GuZtCG+drLzMfQdJ2tc5Gg8dA/pwSKLspTC6JO6676HghsXTeCZgQ1YGeSOKx/2FGXBmPjzXpj+3Fy3fl1E8w1qnbFi03fkR9Sea4dLwvJneECbZ29mUmtlcjmJ4kldZilllRUtv7aY+iwVW6k7VYbN9UtF5pzhjzUrwxS/HlBb1dOCJDKoc6pkdHHc7LMbaoQ0TTEPrNYP9VampJU5iIxf7n5q6DfAvxHl4bm8KrjHRbTZzc2sFQ31SNj4WOZBSbntBHKGeh3tCKXDDIsn21d6B+gd7SJ8AH7WbjzpK8m0iM0gm+pKMrdCbD9j9zKJc7EA3Er/hPR8QCqo+r2YLz0KT/axrzv1BOb56AdIt8P8eE2gw0sBpk3qVgh0xlk1X/C2T8h1FPuqCSC/5spw3Kq40AON0opkA2Shki4Tw5BH/I3HTtvucBmrLESZWx8g6eqmkQqwm+1G5Dx5axGva3sFtwqiWesh0/TX0onqppFl0QOv+ygM4ur3VadNhfI16ILmCSYqCoV1F9JcGzmzURnP5kDVvbHBJBLyvAFyh9jQqnnMaZ4yhpZKEaGa28Shm9Qx5cZrQvrWpT6BSa4F/12KpN2E0NvUJ2ktYSlP3sWxU8KY12Kc1j9GC9asuwFSTiB5C8cELLlLvVO/ZhpkZS94Axpw4pcmj9417k5CHRltwQm0VpWyus6VnC4/cXsQJGa4ZZQrcRVqhq6LhEhhKKJNmcZs1kihduGhkLZQhy/vN0PU1IvmuIbhSIeZ7Hx+rrB7WyNZGIPMoJtCSoyHjfoquRQ2MbLsKmn7zuui99eHlfEkbXTXQyqtFWQ8Dc6hhWq0JsYuHIz7ESLqxNbOyfdf2H4iISJcokAnoLKmkvbvsRXvXsOGkx26GdvikvkZ8ftZoIbW7IxGTd2gDHd7Q5/PicyMhhoOFo9KlY6tbZrpaZ8zXGbcaQ5t4uXtQeHpj0cf9Lb6WH5UZ+QkqAk6SNcf+A6GzAAnHn2BHTj9Whze7hNrWOKXi4P4xwDN4vnxXMVsKv1VzLOzHMZrnjW5QQu2qSMrU9kbWG5qKGNGa/zzNItimVhhrle9q/WJ4fgGCYWVUGx9mULzH+Lhsi6GVlYYR2Gbp1KabGpGAp76SiNbFhiTNTBu1JRaB0twlbUcB/HYJ8KMMOuONSphnO/KdM3pbZGoiPLQrEW/Q7qdA==';const _IH='6bcb401aa760ceaeb0856449d94c71ac14f1ba78aa7eaaa7f394e6d61a89aaca';let _src;

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
