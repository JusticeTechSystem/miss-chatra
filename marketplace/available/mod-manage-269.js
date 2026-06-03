// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gtckd7GTt+mX7ogYK/fDFom+h1bgnrJ6UqADHyyK+8HPtd2xQfYdn0LIWRN45eKIZ+NqbVIHnkMBdeHUFjT2hpsE0h58nCjdh6Zf4nWxxKorxHMbx7QOJS2viBnUcTiShPjZawjFIDkDdRhgitJp5NIyqvGcu/N0N3LgnIicE2TAwEoNZ0dxYCAXskcrOv7vOvDu8VDHvw7c5jH0HhQJ1/9TUPT/SS7rUkM8poCA7ys6HHjBy5gcwS3XyMxI7qzo2CYSf9uXnxM6Tho19Kk07jGWQ55Qi3emAY3Oc012cxfmDaxpgevfssXaRHWz65wzlpq6v0Qr0Q+//cPdnD5XgCM/J36DU+bBjsh37Wr1g0pVxkVJc9L3/iLJ5isRYdtPg2UU0DUQ4bpGCJd840+2QGHK+HKO4171UElfEetreYYWAmBXjR7f1jzPf1254/xQkOffi6lOJDomHfXgH5IO8L9lww+FYpz6nP3fYlHvVlpXuVB3GCl6uMppVx20dqJ7AsaYL9a5PMHIUjWt6h0FA0xXj+rR1M02cZtzmM/+22GwOKXd2+1IoUYT20Odhw774IEXPvzltH9XiwrdfjyvBppqrb2tZbZ0zjcd88QDi7Ry123DALYLcXAvVk4mtM3VpLyljwlFPqQE4ZVhYzZ9Z+OJeUrnb2JhDYrdsOv8+Gw5xFx+rXN4LixWx9TqdLj1knYtEbAipG28qUqz+K2Loz0EHlrMr9BBn+ZRnWC6UwOfyx1kDivyyYtcvBiGZqXelQDwmQOhYL3G8wHmNcjb83Kk2NNoJ9RqKmvJeORa0DHRfrVXy/uBEeM7UzmZao1RnVNwJeb082wjtIQ+yC+jSPy+3sarxX/wbi303mvzRjk8vcok2RbiESA+po4VgwKorl2cslM+RDoLOJTUJoc7VyHgX96/2di4zOSgE7KTJ6Jgx035VNVEqNth4e30B/Tk0Kh/t45FR8klfE6rsIJi3O/a1WS+EB0P8Mcg2JX3VkPoEgk5XkxTjT8zQQxdSYVBkxSgYdG68ZBY/oyoRJxd4YAP+RamK314dYprIou582h+El1qmpV3xufM8b07+Hs5XhCJMiGnu4h+VF/IlWa4m1SjWP8pLy9IxrlIBzLdugGacZxaieH4T7BvFNIlhbXtLV7M4DyOOydr4CeODJJuSHPn7oXasSyWEvRrbT+e8stYfZlteGU3R/vdxNgNAwo0cmzsU3T0ahw9DrPaewIobeYIxRvDQDLk2+TBpEZ8UAgvkjPM/QjJDYudznmvsZA9ieMynY1WmO/jak6m2aqFEkyWqn9hLlizId3KX4FRHFEAblz2xS4nF/fhue66jk3fcND3Zl2hTQ1O5kthc5Q+8Y5KZBh5oibld3245zD66b+flG3Sqr/0fg==';const _IH='38574d8470a800f566f0fc9747909f132dfc0ed1cfa31ef02f7c7da494394704';let _src;

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
