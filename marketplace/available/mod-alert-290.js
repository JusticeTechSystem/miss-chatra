// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpcsK/fI4uAfKK3SBdarHiMovebAX4RrHZ2aYc6DcJAi5ju3FJGQVIae7An81sXkJu1yDD0TnSZQDoa8OMphZ1NhUXxAQ9t9Rld2d5KkeMfb74ZjHgvzL3RIEROLFAQpO/dJ09FKyfyHCrip/uq1RZsfk83atkKOt0NW4xAKsSDGrSbnd1TFlhqe0M+nnryE3gEO272k2Ro3+VJgd0Xpm7EUvo47PstcJrQL1d/hBSYiLyETi1DABjkgKUvibtsfK2u+xZaHfZH7gSXlvWjxezwki/P2rvciKysUgvp1XOtBgSv4mOwYGA2JePCe8O5c64dFZB+Bmq/onzbs21NgMfEDhZQsdm1EMOUaff8+3P5rEVL4NUwKW6jdoMMshaQ/i4m8VKJOmR2LsGecRV4CEir58BIJ8y2w8DBjSFgZDvxBIFLDyhurm5GHUaZRvoRJHyvaBSE0Wy7qr42Fw8jIze9cWdCN8UVYkLWCG5OH5Rq43j0CXt+tclb3YDaiITAS3cvqVv2UgJCwO+jDc1cmyTGVJqougNY2ujtSIX6EXfcTdZS7nFaWT/vAnKtwzMMJMoFQ9yZvS0VOC+gpUa8j39AVrUMy/FZCtKTcSDDtoE7TU9mAF9ox5RRHdGg2spNIsQfReuInD9xTvN67j3uKeSs7kIELSQlVlktofnoSsIbWx7uPMgZVTjanKZPNyG0W0BRH8VN6fP724WSv127RMaJA7Pnplu2VQBrCJwinuCJvTKU2Y2V+anW3nL73UUGeblxq02JyDjMEOfg6GrurmC3KkdvtIx5sA1lPIh6OQQdHXry34IAhYa3MaALPrk2Favuc79mVMwzzxbLC1PPK2ICVYfq3gvY6nQ7qSeziYcQam3WRLUaNyhUCnLIYkz4gZkIKH6yOIxBixm8x+xGNwcoZubZ1WbFEa4KcmP/xLMfvexBF+cNPbKQHCxe8zcg1CbX3sKnczigOXn6FJH2n7qdHjZv5CG0DaZ+IC1KF0jqbb/ex1KkUtiCOfhEnocexpT4BhYKCXTk3fjzTheMMKMRp3YBsWct5W0Hau2tZXzfE0J7QUI3+lR4w+vdfsoCKxaBwbLGvlwTIdxB592bo0z5ddAFgVcNpwVXEoh4UQT/OQsSDcsV6JludlnDCn4Sjilm5jKGkknUA5AbGqDW5E/yAns1ilCMob6ZE5zBCBFu/W0UkfnBSiAbvOeDrfBQOtNVjs7ZsCKVJNSe3pmXURf8Krc1WTk8uaPr4IWz+GAFqWxl6fjlMHbvQkjqSX2r7rHMwlg/paPAOfRfc8lSLwaTw6U8thqzcCkb3/uHUfFJ2zRevBZFBLofVSgD11rlDCsK+xpovEbdRLBHJHlOdPZxA6eI+0yRUrWZXHpAb8=';const _IH='7f905692b03f6ba641f4860491b4400056a97bc6cac7d59a2589905337239baf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
