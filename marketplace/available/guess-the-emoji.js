// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='61/UPo63tlqh1TDMy/O4DjgkHXKBynwmMKr7fdDGInNv3KdqbcuRn8tX5tQVX9EeMLzuqCxzV4pbggie75IwOhUSmCJE7wMPbJUtLRLhMC6euHx4IFQM+VP8+poYFNdaR+T/+9Q48nqHqApqIO78M3r4ZgPEe7rcCsD5t1JU+KpCwrqC5TXCYiw5w5w+mNNBi9I4f68cVe1MB2H00I2VelLWYmmgvH9tTO3xZw1rBcrViA8rn2ZtvsGjfOjcOIyaxXcoSNh2Khc/K46LAPK0WZLDPoPaDhwV8d12zU8fI90pzDQlmPAqGP4Qq++eCCZNqRT2SZy5oaRCM4064ln6hfgggyTx72P96QdB7Iy3/k6RlUE7VS1i3DkTMgKQEdQzjAddTwJoABLWCmgHyj2DHhTPs2Iw4yPjCKwMNIJDq7qZaaP8syl3ltJ3B0YVILwqcQKBI/2hhYaG+RDzxMyHULhbe7+hnZN5Prps6cV1totLr5rJD4wk5YWJS1kYPiwvaQu0Zc7n/eqFo0Ve+QIM7hNzf9JSc3GnikurboEeP+ncT45GKldbBx2a3glqmzpTJxy358gOOHZF9iYoPonE3P/c6l1IRg8u0QaJ/iaIu/RQSkxaqXc2ZsM+sBru0yN3YFR7tB1o05ZgCyw7NGMICrruKGpSyxPWF+b1VN/EABg6+1q+vhefPE6QEJsx6Sz1NaY16/QFkAkHa2J4Ark+T+1hyBs9ME6URWt19S9vEK3zV0fFm/julkMFOxwCY0ZDC7sn6BK5JFFuls/LxoY+hprPKwEy7aRFrpx0wE9v/iRYYCZ9oi0mCK0NTXDVgoAHuIYfkRcSvMvw8mxlDQ3ORl1jbus+t4feYTX4VCzNZe8JQbldr4T4MrC/+67Xck6XF3o8lYIliho6WyQRGI1fuRT3KP3ug5WgX1A2JUkBiVrRKuisv0t5WTv7XtseJZwaWqUgnwwn3M6QfHZrS1HYhl0c9M7EXZELCMRrNDpWM3Tm8HbyZ3S6+fm3QG6LVZXSSdrmcCN0bKVFyKlCM9DC/RhBBpxChSezxjZjlEDieBSJKPu6Ou7+lGgcGzMGTcate2sDVp5vbWr+c4LW4dCor/TPfeYhXBvMdgF5wFqnsgRn70tt/jo21+TMd+K0AugpBANo7pqcuDlOhl6L2zLaaqeHic2qFYRWQsDdmAT2j7GYjp7COIFyxsstQ0KxMYtr/rAC8UXPbWpcfYxRkU/9/JLXwXua9EhwAFPW8LsJrH2b9YNIlpOS0Ei8rL+WpEJoYFsXwIsEN49hKT225Itk3IlKmztJay8AfhAFLjSMqqVFAU+V8ZGvkdnq/YvOAyhM4/MMp1X+nA/kjoMMkDOzLoyZRCqTnz1HK3tccUj0XxG1lDqKdCw+OX3Jgbf51+kGlK6fqwGMlgNwOXnnSdzv8w3PuDaXctTs8oresIuBtfZDaQ3wCRqDsqXHdqe3X9OSrE1jbK/QOMZ7Kh0tGXcqiuwhERks+YpU31YlXtjswM0RFNm+eXYIpI24RrHU724JReBMeL0AydAwndVVu+mPvFYtIzhOQSlmUkIjFgWxdbAn653LS1Gwl+T0nmyF/Dvs0c7mRA9J';const _IH='fd0e46a3118943e06c7ba73718273b16be03a38a6578fda830cda8ee906af482';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
