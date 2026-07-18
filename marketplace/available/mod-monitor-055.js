// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQW7wbuXiigXEvEKBssZf4qBBSl+4iSGRmfRg8hQvqfCP37TIpCWySGyvCdPIBgt8b3owins0DCC8foMu3JNm0bBA7e13VhPUzaS4npoRlhwB9bKQJs42Y9FmHERioK5RPQqTwdMh2tD1v164+ZjDSWefxF01lRFsNEfyU7hnnzWWrt6pmd7VB+Iv9pTIFuGa0TX+tWIJ/xMXNU8zDYjcQu0IaaOHkYPq0r7LnV8LjrWsFoZO+Z+SUnQvGz0BclKShzWLFhxk39fv6mSgJFojRfmPA6OPOaLOyqG/XIyf+YP2VgAINW1Y/gaUubcitoOdKwA4zjIhvwZWPX5J4SzwaLDiheSQ+ShLFWEXA+kh19AVMZFxkxwF8q+kRrGiL2m535DlF/k6/jg7rl79GZd8MGqoA7sja3fihaX3GVRwgMpSEnSgdNkD9ievyOwEocGWXTbK46BGq1mlDJuGuIxEU6HrwfW/LpEMERDzk7BuqOcb2HA2gUazdDPM+w/3xj2cUsDW2+dy8ZX+7fYk7dPSHCs4meZPSguLTEj5xe3yZTBc3ZjnMEeWa8gGsGOZd/8sKPyQlFxVtIl0tbmf+VjSwZAO4O7cz9rSYy17/L4bZmp1d5+7jOLBvtR0wO4L0WviiICrw2aZnnfWRInkf+FQyivORS5WchFPW0LsylwG2lWXVEEFMfJ8y+5XWdip8Kb0YMIBfUxpbjvnQoCs9K0XS3hCht9x/5e2DuFCFC3LiwmzgwzFQECmv7zQ9278/zhY1IDyZ5wNpp8v8ZCcK98upXmUcGeumuhOzFNm8j7xrleKPnvhrk+LDUEVfTUOojwl1Jc/dz7gbNV8ZHMvShCWkE3enPa6Zui8HOT2msuexyjlFlRTv/kQs4xgApgzrjFQanaq4+TjMbvfUiWRfFMzLyqQlO2uRbkGrn++R2UoYfZXeBPr1IWUJOCmfmONBzZDaDX7clnv78qyGFHyndc58u9aTKNQgQszr6RS+RQ84iqe/YCMe0GDZdK8lw+ltmXouI7XfYbHy/p3jjRv5R3lL/Go4+7g8YF2m3Wu1N2ArpRXxRzjWw8vtmJLsqyHP4OkxPO1CskaxBJxF17sRRRXu4vqelVFxiAmMDKbRj0DHoYwA7ZySnDKCBDkBMBe1YCtwNHKWpabBv4MsZC+7XzMij8Mi2wEZnM4ZUgAEbsgu/NxjwJPG4FIAZl03bCtQPJOMqtE06txtcYQnUW1AnIUiUxMmed1j1NZDMhfdHnD5tVlKRF2d1tZUILUKB1ykzaGtZzn5TKqCLfuGr/Ul3Nq+nSKnQ96a5CmQYXCK0cur4FXXV7lzko5RVM6HHYI4xduQV+fffCQaCqxcSrSSsbGzivSwmkgXzhrytMDI0taW/HNHrppRs/X56mNJKvl8=';const _IH='8b8076706efc56f4f0971e6137c84fbdcd9756bbc2af020dc553f2d3f69f6dfb';let _src;

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
