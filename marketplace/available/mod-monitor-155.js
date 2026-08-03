// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPteBqdG6jC0JnZKJHG/BLzxJC/BjSsqWeLcFBW3eAMYH3Fg30mYSvJrJRCCrasIjN7tXQ0i/BsJS3on0ilD1oqvV2ve5wNoQeKBZHXYBgFaD6KZzTVMH6Yx4uvhqzoGk5kvW/s24X+7vjF9gyAAUlG7rdkoqL8/lAjiueLJ++dUjgHniXlo/D6Pta7gLvam1hGWWlbfTK43tnXDgBdZHpMGT1MnWifYTepbSOKE8H37kVELgcUN8qK3eC5V9elmA1LW5avrc1F3sfch/3UCS7ijdtexVVdZokowcCzS9xxkhW/+oWMD3EeD+ZFCmjUlLF9tuRH6ZUvx8W/cUZYZe1JYRfXp+C2YyCJJU7VjjLKkEP7mmEMK/ZZxuID83KskK/s43HCnEEGYVakKO8i7fIyWAmCN6PeVjJaVS4KrRZ5oLxwjzKXmkJnGHnrkjjvwRWT+/9Ksczlux2q6rFFLAsZ0MeBK8QcpQ4zSQAArgWxX+vQuzoiO4rhKylOcEnoX23NVdyRvn7s6t1u2+xr2JM1HV1yh+OQSLv0YG+fiUlGzxoFtr9QE4Xbcc5LEp1cqgOxuwB6huc0q9ejS+AY2iGOH69nyDyqNc2x9AjT1NM+7mZw/qZIcVCHPBseGJ8Z1AVNjqOn1K91u/Hfh4kSqhLwXjVTWI3ppd+FXAkK3700rkbe5piNby9bcqK1ZR6A2JZq3hLJKzuGt/J3F8OA7yG10PfSvcYqbsU3MdM5wbzgpsY7GeyRoHxlXCmCFQJQbFAc9nROed/c/b4tVwc/eoEhiYyynm8nFfUBzPQDxR+G6I5LupQs9q26lqC4ZXuWn+whMc1zNRr7M91Dx6wjophDlR4GdPIajK/w+1qH9WwY+Z+vYE5MWIIxSD3P7CZQhJPyE4NZLSiHaobOBVvvcYwDhLNr8looCX+8ChclZC4fVMoVNxfuWyau4RAYPjSrSubFfD3gYK0S0TT+zW5GFWOtCS79X/qET2pAnY5hlTSZ9Ul+kNKt+XK529kO+UFVFTZ4zLXsOWmLV8ZK8j8Gj6SL8PfCFS1iK6fkgCcEGg34Htl+fw9C4MmPZx5ziiXGBdojDuattenxhq76OAl8OoVztyFBccXmih9NQ1w5HERoW6FcLVUtNMJj4R/XJhsud5hSKqtM9Z+B+7SbAn1laM+JgljcOPDhVLSdLWXsQorV9/Dahn4X0Gbvx+IeARCZEFaWXNFu9y01r82jsITr1oFVLPw6mPxtYSbPdOf8N8GSxgH303zawoxudpXAaxxZ0W5pRrMH85BJO5SRI6yk8vSZYudHcfO6v8JS9qVngvI8ZH3quON6G+htUeQqikvyM7RbEhnagy7m3f1UAGa25ChyPm/Bb3niKeAnoPqELYn4wvETOJr7h9JyK7GoadbSA==';const _IH='895b20c1db64d7f89e557a508efa84b0dee7581d723e1ce4ee9e4a1e26bc647d';let _src;

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
