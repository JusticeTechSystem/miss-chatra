// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SW0R8zeLmbaKeYDBIrEW+9t1j9M/roOXWsXqwWoNbcenOy45NuHwsHT4fQRVBVooGMaXMjSrkQHJ5ynQt1FjuJBH5IGKB2RQb5pxfHZqc60qAWBlBjwbJ6oTzJHRtrW83T2vlEkdPYXGjJNx3sqNhHVMIoWEEIovLQCbeW7uJodXmmSQvVha2vdBKMIOsQcGPoQ9g0YOeoH3KJS5anRPxqSak+Q05TJctJIhKyuyZVSNT5iIbvItnJWmHCYBVP5UvnMakMFFfq7xMFNgHdHPYkZhbgwca/TRpupKTXCZNnk5FQJ5gN1wwYVOysCzlcm8Uy19Z6thdRHIeF2f+/Rq9f2vi0FjbXJ3+zpsDOTGyItl1J0WTgTpkGYUGSkDw8wDPZ9zp0oldkBlxGm5uFdKpmGQVg3glsNvprhsRxtw8L/og11/sG2jVhwg4hbZCPmhNpykBQ+awwopmBKcYXa48jsc+yQONPH/gtlZ1SQc0BjHMM6V1xo+k6eJSViPXiN7NSDx2yRCidFl+vjY+gV5/8yTLkWVDx+TqOzk+d4B0RViaE5LkrySzfw+FT4QRuPeWuBEdffXMQyVZHDBjshxSC4VwFSJMEJym6UzVn0jS6sZDjMdXemrbgaqRQF+XZhSKOcf+F6ANLbp9865G9y6YYdaFy9J8qAWiwMDxuMy7bzs7XiNPNXxnBdr30Asx/xr0qESLQewXmxXx0iXdP3ciW88jZPoItXrxTJ5f1W3Lxm/EHgjqXqErScu2KOVVlzZ2mTPUI3Nc+ELeeT0XZpayXD2xoS3uE7bCcqihDEO9mKVhAXRBekOkrlTLY8dy6n05HBIUndrEhNtIEGQ5Lk+r4c0Vd4WuBoAY7VOpLL5/RXMjFIFXCuSYgrPM3zANdY1v7OcP0uqXkkYFQVYmPt7YnavUBvjw2Nj5gcFL9RaJ4nNdavpW8NHlW5E4Zio+G2OwwEJhjSeXaIzP+Nf2zIKDvNz1OmC5WH4aIs3Eak1fxLjc+SjG6kLDQH4omF9mfteksd8SzWqQegTtzZVyF6fzR78ZTrc11XIi0Od6Dur/YWfQFzQWjhepBMZEL3lqh3E9KBKRJr/q7OBVjMNyln/jkJklrb+F3EPY1I1dgrJPcDF8z8XnZ0lG6x2wT/KaEnBftUPT12VYLsxBdsq3rVWLDoFlHK+EXGV6bF/KucpyoGaTsgj/dNrJQuRI+NsrQuKxGNX6fw1mL0VnX2f7ipW4XSRG3Lft+6G6dUHaISa5Vq/GBG1RGWB2HhDaQEnClmirkHBS0XS3wwp+KzD9Xk9u5ZJCf1C6tH3HkZ1x3TX9SMvqDd/yZmWgwei03D7uDH4YMUtfz1xFzJIWHrUorwFah6UO2qjE6Wy19PVIeKe';const _IH='f566f5fdac83d96db5348d4a15244d30b3b50514ac882137d047b0ead52ca9d5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
