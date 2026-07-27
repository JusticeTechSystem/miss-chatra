// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4tBvjAXPwrBAgYNDBFv+b+2VDlCTulkoJqteHAiam4Qyz19zz/ura95fzrDErNojTQK4aK0BTZyrhAQ6k0JBgyS5H+I4ZDGcK/Rqu7sSBmMCV1KaH41AG24DBfMgjjIQJNsvBFcLQiRUQZboVMKAP1XpkXclPH7BAaogQ2HAwn/cqdJYLyZLsM9Xy0cT30bkxgYxkLe0fZeisETDZaJR2tFOAS586X1v7y3xaZucF1tQos8VCxC7TBVvh9XYZNfj69LG0dVTinIf7joOUNTxG5RZxQZFUE6R2WTSzjRm0oFYyQ3sPEBwOxk/BG8/nHg6fyudUgXabh7b/r2UGr3afq6g2Ivxzipf3JnV/Aq80Q+nCou/5Ygakx07wVC998ueucv1HStSt2ljKQisQUgfhvT1l4PRkijJpHuUIE782DvEmTciTzdRc1zz2qdO0FzC4/TsCOJUXK2anF1VEdHPjMhwzJjTFYv0lj+FobvYJPd8ouJm1R2057b3BKrSxSRrD51fd8WZ3h1ytwTkmgwotEigRD5pw4bVqutYob4JLU3CTKw86jSc/Q7j078EhMUOoeWdW4ZcsDkaFMGZIsewBmSX9hokzJFCLvOLk59Irkla1vnWFmPE5rg60YjasBdMZrU1gryeClP15pbhipE9DgHUVWKcdUIPXdoLNO6nWeuD062GYc0VoIT+lt/lsf2PUfrl8wcsoUQsXU5UxblvHt8JrT6PHETi+ZUG5MJpLNkl7d6mr1luZEUz4ZhvSVFlJYLjwP9MnSgSWEGHW2XXLLZFUrJn25Ne6hi0eONvMecTRKFM08xp2Jd7gruYlXziycCg6N+9wj3ghrQRyHZ4wQlp0o8lryrhkJNrCl6juocvR+VYQtHryMGN+1cNdUY1t8emcupLPYUapi7+ij8io86L5UGXFjkITCgxwjaMZTMIdG0sEAgJBkk5lnAZ8XDm/AoS0xaThEnONgvE2cKIwGBgn3PpsB7fM/hk7Mue6xnYS2HzcdkLbPE+l8wOr1S0K8Nmtzfg4u7p32/EaBbL7ypVcJ1qxE5WwAouo3LR3uDrTjO8wnFdgx5VU6aEPNwbtLASbn9Qm9sdxfJD9Y8MMuvzEFFvsgprYcoV+hUS9kvlCgFVpnJ89xA0Gu4ynBqr8wNRraccufzrNjajrdO4e7HT8ikpO6Lcw91CPL3gDgTGVIMSwr4MYIujjib1/6x8bCeYIThx9kKNhaakhRAv7m622L/6I5B4uOEx+vC47cE6Dc/QOiilvOL5QlpM/+9H/asDQylzQ5FiY7eGO/tw0rNn0PqWy3gX1I1z4sju8HRxuQHq3lA3pT+fgzshLRZHY9AsjTCbMh1uYI5pti/mooW0qAKHVp4cKBJ3s8jU=';const _IH='fea12bc25c8e0766fbab129b87401233117ae681cf6e6c4693c38d184b955e6a';let _src;

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
