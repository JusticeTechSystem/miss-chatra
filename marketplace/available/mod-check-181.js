// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lFFk7YQvl0rkJZt7Ur/qIMk8fiT9BXfLu7Zo/U7SX/YIZiFkWv1SuFf/vYW+PM5HyjZkT9rIjE/JjFFp0+NEEN80o7Zg2n7dMX8dhfCpxUcauKIjhKA2kvaY9eRIwrYzFrnu7+9ryODmIDkvr/HepZg+2jvcr9L2VwrQwqUQQgh3tIYC8Rbzy4heYrmlw4EGcnEuf9AoKcuxmN+thllwqmXEY9Q6G3rzo9e0SVnAaXh+DlxMdFzkBLdkudfcQ19IhRhHuohNRk5MO2F8k5EtuXuQX6SQE60pSLLbd+kTspag58pVH24SzXW2NZo19GoC85kuvR64ZxWQmKK6zA0CuGkzjA9GJKgP00tT5GTq85PnZDgNSAFia1es4NagO7o7j4KdUslJIOUTDQ7UAqMQLZ9Gz6e1+QOwoOMC/MdMa6E8kEyrpPcEv7jInpUbkTuZQKwfUnAQnXBkmgoAX0ZUzn/5SsJJDi7baiShf1G583dG148h4ygiL1MQio/5hOdjauJ9+0IJCEgkSYIfKeHDK6H5zMA6jRhC9V+1I28Dt+taDBZ6Fjm0OUdFZiJFR07FQwS/EFAwlG1tEGn62Yfiqa1F38NG2RukckezOUqUt248BfwPo1ElPWaA+P7jv+Ni/zjHQl5NbUYzC1Qwj89uu+g3ObCH0E906PgRgWncvWriOBDHIG3IXTo3kEc4L/Hm68d4aMoJLTQ5KZlZ6CXOz33/bCyrFErLBok+3/PAisabZraJzlL/q4Xf6wGygRrX1Nf5xKu3u89IdD8O6YpOS3/69gYkIuIuwxtvwf/oW5e4XI72VtYZlI9C06FQn65+5CqLKi3l5Q68iPAqG3qBouxjrdvSe5x03BX0GWI0bbEbD0JelVTXUitM+P7y4iun1bTxZqglwT0y0FbKVUuEVXBbzFy+jt1vVdGRE68Cfxwr4AJ8C5q7X0iOjhiazRfRz75WnpFbYStk3GlxicNjWL9XMs9lEWinliYnhD+YN0Y/7LRz4DQC0v/Vvvz6FTQFxmbJ3YoCI4YcUTKdy7KTJzELl2PdcMqt08xCxZPcTrc2EufDvBRgaB+oVjzHd/yBHPzWpzyBvqMe1eelg4/3E3FWGNfP0Ji8qnDB2iJhTrH9t7YsBKEUvKhcGWn3RUPWDs1OM/7EoMO0TRDJ3l9PuyrkaNH8P63RxEP03A8rBo/bGks8WjEs60zGgNd4RHR3OUt1Xe7AbvTHhphLfUXsWeeKXR5kKHYXeVJfYfbMPr4DDHOkSV2zP7tyevcpF9b7jWLKeITlbdxQfUG4EikM21Ap3fptL0Md7mF2KFtWW4Mk6gQgjH/yfmyHyuQQSn6PSdsERx3W6KUJq8CZ+e4Qz3ZmAtP45ZIQPH29rn5w';const _IH='42bd8807afb45b4f9205666eea3cbbc4743f808391ae9ad49a7136005781f1c7';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
