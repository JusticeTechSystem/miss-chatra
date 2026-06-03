// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8jhFSHmB/PaZZpg8y75O4vUTV4pudDUx9XbbTkuYEZ1nmAOzTeWL8G7ArQ7S9hvm6czs5dLQ9hDEoCrgfJzLrsI/wFX3JCUHyqkPghhEnhJgwnvWXPYE1V7tQ3Z0XrFcWNsRQ4crA+25QIbln6EJQ+YSHVA2D+EcQFi081TzkUP65ShbdzwNU0OWZd//lJW5WPHGZQBLgl5SCS5KJ1Om/xsO/RAeTk/fGuAOT9Xny1ah8wKLarWmrRBESS+wy26Qp8buXLYdhJynMUgAxS/KUVr+Blja48dZMbUSt1l7Nv/7TUILwI76GafcwgS27ex37n2l6jTc0vm6heMZgCKdATpLC+hs4qokPxl9NrFBgpHIigQZ3jZJiaR43lTXrTA952UZvXwS4VyKHb2iWkDEOJaLXtzmg+yAjgCoOhIAGVMSiDTUs65G8U0xeJPuYOgmWjQGEZRLGmP0EDf3tzU7MkW54nzPjDiltvSNlRHH9bvuSkll2EbIEWZtSb3CKZvDu00PeQD/lOC5+nuIk24Uy1Aiv1my1toDxCBpIoM8pcH/YKHOFqyAKPRQBXsCJ0buwH8Y50jp9vGqktLhqjtGIweM2xOXRoP1dpNPXWsjxgemSDk3HmDESJSMcXXNwzVi6kjzhp5DoC8T5Y1y0sh8AOnWPrSHHHTJbuAQmkqkCCWBS2LQ6Bupn+r6v9pH+a90qRSKL6mSPHEq3Mf1lNiGgSMphgS50/AmzvM4AGFWjCcIc2wTPWLEOYrPFWAY9FkhnyYNPQqk2tkZ5WpSn7VuqBoJF1XdaDcn5Tk1+J6qHdk6vlOfRgS5MdIIiKiSfsQZei+scW7Sef4AsA5gFzReHCQXBEDgDHvHLcVWkWLroUC0V8S5KgLbJPEkJBqqqALOoaJNW3wN2C1R6PyDFPN246HInpwt95iPjZjliJLa4mIUgwhJrRArgCfrnPCtNdcLG5nIn4cg/1rd/+/Tymbl3b+h9U+ZyfFbtI+f6djmOrAJ3QMXJS4uECJcrLrlUund2US8m1BbZMd9Er+xdaHS/+ePZPTQVTA/JTHvmCUjP+u8fDyCx+uYOZ+dnPRwfow0aehwWuHfUVw1eR40MVuNq+hC0quXwKbhLcR/xPR/xVN4g3fYCySQOj5JSOTOqEk/NODbxl2JfTSHP12sF58Oc4EgfqUhNEJ10hI6SgiUqNZLLmlEU3wf65pbkpHL2oXQpzLjfx8OSrHzVynFpEf9Lkn8RpHut9YrRxojHRSpHKJng9oZIFF41DDaACaWHBwbKfMVW8oBPdCXfIh8e6ZQyCfRsFCN5pgmLxB+xj/VrBnXY2UjHMi2/hcMhfFVI3dKT+N1cN2okE5rkajeVHczw7kKO/Q0VO/tHAKo21LZV3N1vAX8pWQLQ+Gk8NIJNCNEfOybDOFpFQF8erlaJTqFp22h9vSFjb8ZYFEf0dqdQxsqVVZ+8KjGYAG0xfRbVHAK6lEsBBzIgwMfhLb8z1B895AJ0MysLAZr';const _IH='8e8bbe4150b76a344085b53d95dca5cf20d2435a8e24ce8158074a7c610dbcdf';let _src;

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
