// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNOv9hI5WG+srf+pUmrDry5lGnf3PmDTyXtqwRIvLJ850kRmdPxxryyi7JZgYlqD06TBGlUAxFnn4oQOreB2RlIMc9DkI4ytIhEE923fADEW41hNJ8hM9ozCsyltEmGooW7vfK25Rwh48GzoGI5kTeC6yk2Y3tHxz9/0HQcOPNJJhKqYqrOKgW3M84o3M0tq8sKrfE+a7uIojhjXQneyEsZdQbTXdINt1GiJmwd/P3HVfo3mDmQHRhB9A0zf4Hm0OS6lW3ialXdCeHP6VvicsMw0Di8GYpo9HPnOhfGvJvXDOxpc/k1KcpEnw9oZczci8YL9KeBFpBqVRRKKaD79ni9mAVe2ttNB/IOxMEjFRDUBgXy8QrySZCrdPqdItMwbAKsU4/QMQAHTjQFo6Z65fslfgT+Eil7rdBwGhV/DjkYVYNdSvqWqd/aoeZ3J/aXCvoX/r03PwbX7JmpiFxhNebb5+q0LKN6xUl+blRDO4vv9PfffUz97vecnWeLbB9CCUMS0IrbW6k6Ubr4Udj5jE1Ql+RurioTENeibGQNezrE9KW2KhXg7FeA2yoAkpidd+CggN9Ig4VnfqXFYGg+dEZ014FCYeOL3Sd3dE8Xp4OkD/Ac76LRIYjrJNh9BVo62dlNKHRpUHHGzRODz6VgmigGnHxoNcUUKA73wpYGtcd0xhbuYQOVQu04/VOI6J5CpPLLvkEw9nw/YEPJG26VT3YCBmIOsqTmx5jI6g/AE3MTzYExMmR/RXaOmMdAADw+d5ZDvFV0V2S8QQy5Q8pch4yGZlI5xtrjdoBLzUp9GZGPs7+NIrBwJSp9aXCqgXj/NwTv6wBhQ5xYLuDJ2Gs4Zru5MPMkPY7fTqir3+gtdcuCA4BSDs7rsVjWglrk/JW/dlZqhlUPwuVVD2VR2iV+7Q8cXUKUWWlnx0DwvrOtB03EFBXRp1KDGnKZH02EELYOqBTExyx3xxQOHmDbxN3dGUuN725cpIDpbeOwgFdLuTVb7oq6V6y3y/Ph3Pm';const _IH='c22dc3d4b7ed7de0af091630cfb3148f8377cb9f891e5513cb91ab408df13cfe';let _src;

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
