// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OvLW7ecxUzj7dy+46jWFsLbyJu2l+R0swOoeIT03voTH7aVuqRBFMmod+Pk7wvHMkvMHD35wrpvH7potDl3Oj68Si816bneaScwKHkMtvg2lT8W8JnPqtioZ4+QuVgX3Q6Y9yJEbtNu6FBd8genQBTPTMOzzlb4BDQzgIrrhpQkgIh9SzgVAh4nlpsOQR9aLP2EeY/WW5+pcA1T43EtvnRTNafpzjzHGxXv4dajp0uzw5a7iKrwr/nXiZpye5OlS0aeqaUkYEYiGcJ0lfJ4tdNZYplO3EqL/f0rs7ha5Hp1FE11Hj4N+xyZhExmYE0sPRrcgiQBJkC8q+2cO8CSM5wDlY8ikLgK9eNJqri3/K2RJvVmdF9qzA7V4e3GfoHtNyup8fQzXzm4u7S4zPiIZLXvkF9cp/mvBJpS9jsFWN8nsGg2NR/T95OV2Y3LxZSQrfV5HnNQefdOz190CJ9H7U3mzaMbLDxdhWUZSKi3y6/GRMU6Kp3632+wqIZ69gH31SR5H8NhfqK+etjei/13yhyX14lLQiBNFrrt3ZDTX4TaxVvOu5sFEW9a0zNOXlJHnpfbuKt1xemJT4hn1UFRG+S4z2NW5ZD+X1PKw3KdSkfd6LUkUyEZAuJwQksmpjeH+Cimk6EoQojvx3SikOT1TCV+l+CgIdu54igdVU5OI8EoPaYqGEQqayYdygEMqm8QGI43tMrJ/axAo4DGJU/wapjeayXntVYz9YTKot2qLXufnX/QqEWx2U6Yo5Qkpf+Gy704E6Sk9lX2O4FqX99f387CGsSjIvdBM0MSwvvFMW5UbBqftzEY/yS1o3cLU5wzb+MAhVnXhCmapJ3qwa4VBSkIQnbUCUQN7mH6pEagSogu0CAshlYR9AZAw+6lnWHWnp/6pgPClseulf/d6rmxef1A5A06MULvAMqPXbIrQw4Svacfrf3TmrUTw2+iETLOZ7hhrNxwhohN9J471UVdiohCEv6PwcHznysKCW6NQXzZtV6Ib7Oq+HBOO';const _IH='8d122487868123ccc995ec87c0808ae3dec22695301b73a636d219204ea567cb';let _src;

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
