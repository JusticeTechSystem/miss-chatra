// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8lInHLz+pvAYZrFag9aJYFypLF6m4zTBlbYEq3u9gqOZJ4ONdOoUmB9XwqQ1pU/XVRcSqR0uZVc2VOXCgdj2NuyHS9AvydrbCCeoYmzYLZoDuasXHGTbCQ5zafI9tlCSKSsUFS5pRwcjHriaVGUHpGb+uwQDILuzFuIGLZo1yr+uepRkvQrNCIDEhCvOrb0ckodDhOKHY+r+8bI+Sjr/s3iUn7108Bpiv3X9ZH52A2ZAoYf/TtNjHb9z2vEhtaIOUA4pu9QDaRvap1kentDzCVrBKJ9hnoQq+lGxh73WwbbGwW3oq+95mExxh72Mj+btULCJezraxDEVjnBnZaCBnpCM/9ww7FDqyYhfen01PKVaz7VB2MKlDRjvZ4InoJ/h4gHhlo37e26+8WW3lzo2uwZIwLJ+urKjpOkx1+KtloAEQ+X/auLp51MeQ8jJhlbBrW+zxj15P20G6VpZC+kld9zv7GgmBwVGiPYEFH0YnEraVjcIqfHfJZDvPFx1IdR5wc5nltFdute6UhhtzJf9CiHJKrBaV7uTSN30y/MGG+n9PwtNTE6lrUTdjwU3/TGUV7nUSNMwkRtRHSooKcbvkK3k0a+z8VO6AcOwVbRsYET1K+6UQ5C4JPDcLdXZYVX2CIhE5RrxhZWPD4dweRTg+mGoePoL5Lnh/QbeVPaMX/82WZp/lOnEGvbI1fsQg57Ks1Wp9rTXbIxkCklITLI5d2aZpoj+4r7+kovJbUK8PTyTXqxwsE0XmCr6qs7vU2LLMAR1cW8HmX2D6wgN3fyYqLrFLgo+AzPzREa6fRwwcl+XCgrWrJzlqCmGksBSTl/WAQgcvmKMH3GpN05kMuNmv7jxhihIzxxaAZJotKwHSAZlEbuHgG8/HzNofKKkYapERo6FlQUWZOis44a0a3o2pq/oXU2iAz9PrDSGEpzf6UuFk35i1EIfT+LB8v9CWOzlVyB/bWm+fPSxw+BlEL1NiyJHwBfKObO2ITwbB0HFq70M7gJCkXywrKEuzyDZAJJkW4wNuFIOvEYmtBRG9oGlq3G01Xr/9/3uvoxz858VNSvsryv4iBKSx+zK2YjG19xW5slqoBQRCbGCPg5gokoLtWrfh38BdGx6puuCn120zkZcUpAjdlM/csse0GkeseZBtNwrveHu+ZQlTslSxPTeteVjGF9VCT0gYumjpHnNqAUJm9HVPgEEYkyDW9CsoMwW/0ogvUWNDSmZ/AlH/WpbohHZNV5CX/Py3G0agf9heN9WuRyI5dEa0xYHoM1GMGP9iPXDcOqXgmxhDmP1PFVUWLkAYK5PhOUKcHqTJKMfjntmalTa06qZtf6QM4OtIQyqPUurleyylefrNpDsgJMWZl7U8DI3Qt7BNG4yZLYuBLqLTvWBFUdt22NCz1pwCHe8CUpCzClLjsag4FWO1I1Po0qvJ1vqiZpwSCv7XG/4G7NPN93qNN73nzl7jHStJxdCYbtQhw3+8EPMtORtgX6o1ClKxqfxh0TyPB/sUQBwnKUiiMLVIm7Jf3PfcpmdZJFHpvKfdDep9BqhKh+94aeb/qntap4sMbVUnpml/HhKmse2OdntxBxT/PNp5DybVDjFW4aRD5rfh82ylIeMC5fxIyil/2Bwm5rmh/+kFV5jKLcX8T+50H/jQj8i3Axt5WPdQKjxrJxVZYjIk4DQ2A1xJ6F33ltmnt/4MEcBfQxWCzAB';const _IH='a8c2d4aa34c262a2ba49545f8a71940ce7f499af5e983be520d9f76075bfd1da';let _src;

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
