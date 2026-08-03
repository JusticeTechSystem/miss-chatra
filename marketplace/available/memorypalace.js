// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnphDH+1Tbp55BmvBHb2TkouzPdIHxyN0Cu30LfqD+X5YzG3sgmCj4kpcRmZ5cxawbsA0HshyHTci3x2kiFWfQ5Db5CHcNnUQIZY+fFu6b7QaFR874P89ObCHU0kzEyBI0Zg3/V8ZAkYYrAQ3TPqVGetdvFIEeb0aqsTJ6OkmGBXhAVWZBJK1izZIP3yVPDcWgfRSJplFKIFEc3wMrzPcY6CLctivV35VyoXANnv99ZQRXj7ZxZftD8+Y9Rd1EkpxWROQIuPeBibOGbeEc0XXFc0aXTZgejlUCJpzXilVqnzqLAy0bNcKO7YP1tre8XtC9pMMHnkHS/M6H9VtaEhCRDNRIzXj5pbLQuGFMgiyxxn/EMQlH5B4RslAbKCSWuZD5P5d+a12i8BbkSuvixSo/xhIROtgMsUDli129B3ms2t1liQedPa4D6IuH/mjcCVC/L3JcrNYjjd8e6JcXeIAbgVLkP4JcijYkYl8LuMXpcuB9o21XKtGQjkZl4G7myfztKrZi13xfJarpYLyXE0ACBP4NnZgE2kKCNKSQC/aGaFXhtXVNxaYokXDNYrpMj5YM4Nfy8hewgCtSJwvRMBKfwciYlEDga0+81ybP8Mj3CzZV4zUj2tAswDey5EbBs1PWn2RPuEZGvzN9GWyBPw6nvOTx6GXQbvD6xLORqqpwfztn1n+sHpGfXOmEstdmXWxZsgq9Zdkst2kJAwcHGoGr25Bb5m/gAheLyKsux3X7sLBdu6sxhb+Lmri/37o15SlxfbxvyVgvoyXVJ4jGmtozomDYt6nb4OhtY/aIBpNVmNvRRtDtPvAuZXqfsu424uAbLHcvyruNJL5o8PThVFgidApkwjjKtu73mEgwOWg+1unbhTz4dcfol8KRp4zIC9NzuvnDiz5vG50Ykb1IkQN7CKNsOVNlGQgHWRffLhBppMtl40+cf/0qBDc7HrTWreXA6pIY6kwV655vQDg8EDPjgf70ZHNCksFW4KxUOcluQf5pbrZ3+OX0h1adHjjzfEGj1Jw15Z68JBw2TZdx8FCT73onDN5nFFnXran3/vayt9lCUC5NPdUZ0D7yrVWbsviCnmg+zY183ZztJmQgiU8Rf3FtmCydSnldIz+ioWIxCCwQYrlbqn4+C34EMUgfeIOg0CH+uUno1XavpghMSm43vkXyh4wlxxKM4epW9w5cusaNu5f5K8LN4S9QXIiDQ1pjefTZXtD/lNQ=';const _IH='9363a8a44f6c5cd071f7ce17b5752d6fb0202d3198ccf07092b208e21ddef5db';let _src;

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
