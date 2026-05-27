// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='paWNvq01A8aorXjMmVnEXlRupE9Up36hPlC4crNaUmbicgdniupy5rqWVlFf650dt/tHXHThU96D4YshUVdBl5EHJaamM+EW51KRnBkH2I+pSZBBA0Z2Nw4XaKnGVwZ3f6nkk54VOTb51OQKHmcsNf4JiYx/9g0Nd4fhZHAM6vPmyDR99Sep3lX2H1um4YxD1daJ9fFYqeQkW9CCusMyoYwbVnfU98MmvRqJCEwV1Bk7y7k/vRB0EnapSos5GBZTaoKRurFJNRPskx6/zpIwGVvYh3Khq/GIfd9mUpmW1sXJ2aCqMfa3T1aDZ0wD8Wzm6Nm44i1SSRLtXg2n+TEHnZaRgJvw3rcMHdpb47SUi8b4ZiA85EzQfYRreB/KDfY1r3rpnVZrgrGxu6H+e6NPxLG6os9s+I6G7ycaha4rS+vU22X2T747Gsa8xKIW23hkFhLnpXvrgVraRFmMgfhObYeVFHtFQ/Cc4D9BFH6A5ZuH0nSXRoJVITozOxWINJlyZ1ZhJrCFSKCwP4NrNDjUuHhCCPRc77wcKFaENWvMG5ASQmayxDThWCv/5380T9vuECXIT2nTp+jsM6Ozd8r7Xp0BxhTJu12q/b3dZXbOBS2zsljxTs8PVDY+lC75CzYadeKWwdtjWFd9GfoeqpWBuFy0D8DfMdS8kfJ21WIIkg7mUWUYp4dmgwDq+h6X9M0Rx2I4rMrZLo48/bMpZNzURNDtUa0CDuY641VYZZEBV8IwK+lrJfUVhrgkPO4JJ4MNqAnOMjKxw5L8ppIC/mORYXAt59SKuFHRWZrD7ORyM2bKe3bYO7vvZlOwzOYF48qHYPBopc+Kt7x1hao8Mbjaya1Im0eofuoh58jhOD0EmDh2Gdzr+3kjdKRVSN4s1C7GaqO13ZJNs/pXZ6s52Ap6YodVOJmlcijruVtkYyFm6PryikSd+mX76oiJavpaWnPE75YHjM7t7ex3aXPUD+vbblviXApV/3wZSrcRrj9sgQ7l2bWFk/UI6P/boeNbz/FBLRBmtJh1QOYXtYmI7fTAK/g7I5dK8a0qk91K/KCcPGo6BY3E/yYtwSGDn0oqkSAnzKhkjHG4nvCCStjb99OAbHZsQ7r/EZpk34pu4kvdVzzhxtuS1n0UuI8ghhoVmqMjqO99/0MUbaMehQuvfloxpITq6cURFzzYMhYkTAXqDrN1PER8wQ7I/EJZRQcooslgvmbSEdxBke7KQS3YH2c37njeHR1p7yUFq3uIQ5+hGI5YXJR+6b4CKVe4n2JmECBhylVsn7utrymTtzJI4CFNgopBK9WENgyv3sqMotSzncjBs9rlvILA5ZVlUmzyJA36tvLpOfYm7OTfUKFR+HrG9TH2h14C/6GJPmxrXNRxC/4daOk=';const _IH='49ec040a0d26273131eef17d7dfedf9c96613fec3770bacf6cb143cc9dc2b03d';let _src;

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
