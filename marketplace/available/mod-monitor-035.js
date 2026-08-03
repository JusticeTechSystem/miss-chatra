// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAqkWrKBL4vyFsy2vIyqn0+6w9af7O90sZwQNkSVCDIaBjNp5QdmZFEJ93xwzdr/sDs93gcNr/bEua1bz69WcAxhyLQ6nMo9sj1RHY7ooO2Cw9UnQ60q+3aMpyQFCOXKaw8ipeGEpxs3ZnacmzB+KEGU4WMsspmQO+mh8cYGAfuIDmK59hZ+KdOLCqexNyuaFmYjcKVlteXS1Z8fHKCm7KCnoovZKBildNiBrNzIF2jMcwQBM5tx+AjP3bWwE2rvW0bQBJunPxJjSRvqy8r3/wTVhDSNnvMSUSzd0ZGWmn5cbJpI4UBa54fKuHabNOhV2Y6H05PevJmHLjKllptTzsA1lg623lCTMBAUQRk2+gE56ikfO2ugNHl+Zz0satYJbI8TrmdnbZQMqDb/h0bFkhtr50M6inPoIrz1/QLhlPaCgb/KreyDK/p++CTZ5U/eLOnMeHWusAlZ539it0RZe32lijjF8kw2uR7Hi0F5p5etDrpGZLiXRlukcjZc5BJAU2uA0TOchn1zbRnZdDSRHWrTFD5U7IztcB1kDgCjIxMYoiUk/wRz1kp4I+dTf57LwKWXZlpMuBW+ERcfkprR/2Cjo/zN6Bj4CkgQ/7ssnnaqs1A77RUoJ+UTHRusM4KX4H0KKRdfcOYEnDNP/LSyrT4OKZ+Xpuy7BFJMoiSqsAhYa4qtf31v+X2/gehJ5D2pTWKvFnZ6SAKG03319BeyNW7wu+40k2LSARH9IEu8BsRqD8bHy+5FMKNWrbnqw3tLMZxVcdqgEUPWtPwLvmRZljdqFVsqwPv2IejS4yn0IH8wiG7AzzZ9IaX2CayyJD8AUSeZC1OooasnnvOovBkG9fC8ydEX5WgZcuHW01d6Y8whn69AnoeTozcFjnhsdeZG6bkNe1Ag5hsTzjhyB3XjdAMLH3jysRM6RU1Mb6iYA5TdNo+N2n5BII+CQ4kiYZ9CvZnj79VKZ5z34QT58gUJtsH6MUpmIUcMzGkFKYB0vA0CihzaYeM5hIW8dzsEjh2JN5ff215lmMyVEezm/GReAgtWfXQn5JS2ICguUtSXnC23qzygwTNj5M48rtjj8Y/h1mSmN3GbYvKhT8SYzXnpeMorrKAYlzqgThGGkLm/z5Qp9HPXO41CpwybQiodUUfTYk8JV+Y/zIjc6f+u3ReS/BtWse325DlNaoyQ9Q7BQoALZysMblXgu8EhWMg1Dul3hq9DT7F1r4EJ7hZJsAzfusqcv9xZ25IOjbW+i5i072urGFgJ5MAT2fKxXlCqVdrjRj/K+T0OTEZ9VZ7GXOM6wpNfeDgk/nKJE0M6QaM6bDQMrwPBSpehQ6JselReAVBcWvPwXnWMeuOmiJoVXXhbnoeGBXV4AbEHkPGB3Ucq9zdEaHrizE33JCteY=';const _IH='3633310097dfa68700eab2baf3bc50ac3cfbb4793c61d2c40aafe94b789331d1';let _src;

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
