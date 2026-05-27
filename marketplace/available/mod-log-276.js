// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UyeevyjinwfuYy0xW0cpaqWdMrvLdxdZc1fhRD3w7W+f1/z5/eTMEavj9KA5j+Am7PF2azsy5emUZrRKYLiXftCw1Bva3gBG6rffS4YB8aylYKLCLlFSiDhYbVHNl2fhG/h5jqpWMKVJ15oux3zBdRw+2ctK5tYFgXcP8IEKIX/dxzuZzUCiQzpbHbTwxlKDpqZiOe/T+e76FnPNqclu2xA4T+sGHyLYK8i20yUKzuxWFQxqqa3MCzhrDvAcAhiVNPEBEmT/gKoN74wU1/ZA/m9szLyAtceK9gvVW7pvKbdnbeDwIxYp+z8rgFOd1g1iKf+sBtApVISqWhl5XXWbSg5E9FGJJIjDTPobcTu6H8/i0DhKb7+GmXdQLx0Tsbzc1sq9Yz3ynZWqcgm8XkJ9KHQhRXZ7nZujb8fPjkMsRaSYdf4ha+3jnoXEMiTeG3SINw9KCnLho0OFcJxElcGLLozHtbvvQVIs2/ArhRo6eTQ/hciLrioEzNfndamrhCc1ugTHAcJO2Jq/heBjxkJA38lqFGjmzB07anAl9+oV38A7ccBVXLh1Dx2+j3M/XPwKMmVFxIh4bZRHcnvkK3KZZMzIf49Vd7ddSMTYja/LVUp/sVwszF+vucqNG1ug01PMB+Q0VaH2kH+U4RAnqFAEzzqD/Kx48Sm31SAq9dMfFBwjJccz7zAPbeM9B+ttfWx2Sno/6eDUgh+lkdfFuJo9ixazFAuwS5LRa3m73m+zFk5WdsSL6iwKwTJtdDQfM9CbQInnpmH46SJcEF5mjAvC1VPWpcT23hlpfYpxW69kHM6RppeyS3/cPpXcPQQZa33X0acEjlfhL/RPfZ5TJD94SOyUNKYCqtS30WGtFBwTgoaQX74c5XI00xijMoulMhxY3wlp1S4Y/ZeQa1s+HkDP+GZAQHMcs971Z2xn2pwNua8N2jRrQMwwjrAxAOYH0GJJhOaxjA6dO64jVBgUbcjLviBEhBZrYdnT/PsBVwj6Mn1y23prC6HA9aSzovRaj36omPs8IZOcrVv92om1LRKRkD4gDM2W3fIU+zIMveMZMgQcDgD7W2Tl7FgoWab0Eg+rRmeAOFi9e5/XqQ2nDdS6DEc3FS4cuH3QubJTRhUdNY1qfe33TEFJvXrmVgn2EZ09P1MK2nc86nEGbujziw5SaDObxcCTJHfFNwG79aSgunwvqI9p4THIXCcCwLQQ/QMUp865ksBJkYGkKfwEK7k2K8tdKfdZIYlGMpOMhI18NQ39GCTngjBP52jcNIWzmVisXao4CnzP5KW5NFfTdNK5xCEPTu5dqSuyiyOA+7cUnJK73q/1+RFhntZ+NBSTbzjeeVNG5b7qTFANQA==';const _IH='067b38ef17f4021eb816b05cbca0a1c1dcd2bde59da3d3dfbf7ec1cb39a437d5';let _src;

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
