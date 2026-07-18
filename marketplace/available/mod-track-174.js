// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReDqrYfRajc/x+qLU9rzRXlDoZ7y1G9Af9do4UMeUjqMQYvqMh/LdaJlXE6fA1gdevhLBMMH5VzXTkpzeIANrTjDRuSWFeUKsc+ZxqgLjpB1hcrey13LIq2hmJOBNwYRPY6F/FH47wvlvtFnRM2YwUOu3NkM0g3rWXokTBf89Hpg+ZPi+dmjakCE33mJ5P/w2WL5ogZqoh/zcO21Az3aBPEdcMKVwyQ4Fa7Cw5w0FTDmh8b4TSxYgfT4bnywNYfljNha0VAI0BF5nNeBxUDoSIyjdKVkeUSu1eyABT/Tfogtm9mUWN2ttdnZoOHSphRNhA56F/tkdBA0Pia1D/7MXy8BCGspfwaDbAh4KEBA2piDeo3K+dQVTCAykRrJijXxbcKdh6eIAmXv83iJVovmeNeSlxzZVlh7IhIlD+jyI0I5LMXnsRFBJm/hNU/rR/g/W98GimZ8CXkl6gb9UfjF/8zXn6kf1YhrkmmDylw9RRA2j1hqZCLT3C67MK0b+qifPhUkiA71o3DGt7AiTtvVkXomV9jaVpDhANtIgMrsP2doXJ439F0KKlvUYwN8decZOFnek48bhUqlcWQuEsLd8xFrdPZa5+BVaA0tevKPKq0fEkg1GZ5MRade4XFmmPf+LehCmUyqweLK/G7ep6r6qn8/2Im3TOYEVWcg2KCj3yExBoA9tjmo9jKwSzX9BrSVGE/vVZ4MGD6PDTYRgpL/R1f8Qn+6sqXKDdAd9ljIJjhA1Sba3m04R2mBZXg8Js0KdsIEpV8ECDMDQn+TtDCNlAhphQwN93ikFOUjDneG7fcCfSDTYNszLpacPb8M2ioFpSkh2+zcdb7XbmO6rjs/6lEozcu2zu06u4yVdrO6X4Cdq5wwEczo3ithyZbNTdKVI9HsyzbKKkfazFHG1VvtzWICUB5TKdCrMOrStK1TwF1Lj2HpgCo1zpFGipMvGd99eAaQ1VZcSbCghKfhtLHCgQFUrdBVaVBB7hhQYWK8qk9SF8SfWVZAA3WNlaGj+8ZL9j5KkhElryxtGJ5lHwRBxz6pbSugdNiRxgOvifPiA+F9zgWwN1Wq+aG4LAv/opnnejfn7rg8kq2YpxDyyFQzuprlQ8mRxmjGmNVNnajD+ztRc4AJ5V9uyVZdrWCEOlIi5I6j+s++vNHTbbWVEAHcqtOXpxWunCmVxYYOLgl4r41eEJU2XC+Q4krQBn+6UJfoZeAGDA8JYNb1zdRT228boTZhTDvOe6BpwzvwxnYaRMdS+7Aalh3JQ9ldbwcS2pitA8zG1ycDpZy4ISHV8uSdQEnfkGWCzjZHi0awiOAVQQis4Crd9jfX50LeBeCOXEozLW6pBRLkXYKUc4PXzCRsVa1q06SjRabNP0QduRxf4=';const _IH='d3227c1e79354f7c4b9389487d3deeb654e3b8dad03679b6501e135d5eaeb00a';let _src;

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
