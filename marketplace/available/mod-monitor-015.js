// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeRrzDRGEEbbXjxfLHN9e8ivZSgXnW+SJ5YOVNjbDUrAKufXEKe3URbU5Zq4lXXr8DdoS7JfZpmma+ofm9qoOLjhYY70tuxcMEZ2JMA177lZSYVvJVpFKiecyNQmGfuJNHcKXqwFTOnAw81RtCx9wM4D3SJ19x+2oO9+UWXpyVSlt/lgpzyKqjOrx06nnSleDcg4cUbIvfQyu9ihFKKYeA9UKF2Gx5mL5zsW4BVozuRP9I0f8A+0DCDPZrFRsamDjjIJOV3sfM8B7d/EieZ1kLKvveGNivOILFWTuEV0wspcgZ4Y6gNM+GS2pU7aeN9EKJG/3HqCk2LHhWPgO1eeorkMRM/9XwfwLtsjdV5s19I6vE0Y4BCBtBacrwGiSO+Oro91kmybnZvovvDlNNjRLXdMwwB85sgz4G+orSGiyNT4u8+6dd5xGari6FiSM790mRlnkhd8gkSJlPUjkaewt62XY4FhInsZsAVzm91CxmGVOUwiRSAeb1FP9FsnPOzleRRUW9wGKrUJ8fMbZ+rrTVTYWYbwkM+vq7Nnq50UFxKH5mWz08OwVNaoH77Dj/nwKcCQ4UOvsthDptM1xNrYJ0EsC+YhjlFF9Hzuh7wf4rGu0BF213doTG5niPThXkcvultB/BNBKhH1IHrHGNN4W/XCCloTOpsFG9/6eievHC3sEcBeaiZPAQCe5zZ2y4hNXJrh8IWEtoxgOlXa+EWzJsW8TvvE0o8gPRxTqJxum9/N5cy3FOS0zHO4QQmifTInt1lYCTuivCVc0Wv/wSbObABelJ2xw+DXw9UpKlGz19A0fPxPZjUkRIA7QQ4mRMBpFeUDjWXo+DIK3/d6ZPNgeUBZQ7UZhw5AJQTfmeMlkHs5XekTSA9TbuJyYOrvav/6OMpTAxQO0pskJV8B5h2nVICizOgl/6A3POKkEbkH536XUF/2WAn8NLoEtPnPYq5TBXM978njCjxBfdXFqejRiLI2sl82Y8H07QE+vlQWnXF0af9SzMyyeUN0G0KiptRAN0dEI9CgPFSwlKDg4JIKD2lfjKw0RedgBfSvE36f6/tjPq6yP4g/haeyDclWYvYUpz+uTPklKXadyjoH5s4ip3ZVR2sS09no5m45deGOteg4OEg9hLh1xvdMd37HjOwa6Cpi1tcjlWsG/j9/g7yZxW8EJCYFdt9Z0SuqyUCixndaRu6RK0sviM5a3UNFiDQhu2YRGkxffc+nETlxxXXrXA3w/varyy6iy2666Bh+CtCI12RS4/TGnHzw4tRzinwl6+Bfkm+qLCZ6j9+tikv8ZMx2aeVQWH2RR+6d7ZAaz0LSB5AnNFDWBY/SEmdROZuvinR5GKEkHDiyE56FT7xC5xEXTHG647EW7+wVd67NqQQq0BYRl/bFwANQo=';const _IH='c241785f5d061dc6b63ecd921505259c1fca5454eb1ea56037ab2770696f3161';let _src;

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
