// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D2jyZdqyQ7BRyvUY8PDC0YPJEWuztJzgJED5nTSkOxM/RaEvYJqqJeiqd3z3juNRcl/My7f/q2BKB00Zq1MBwP2B0SC+pTMGx2dIEFZkcHltaTDKxG7/4SJaqyHRzwvuOwRXaQrohuN2ipY3QDzIib4ud59+lMUo7+u4O/fJZB56zf2u7w0UJlD18nhP7rvAhXCv9sujLqvn9nvyKE7q7SLG4ohL9yw8RaHdaAcpuDl/hzLLajSxb/8gvB625zbORYG/FbN7Ws/FT6B003LHx2aoQjsuAY+oVVZl2H2MDmKLGR2tMJJR9hjYkZcbMAvlCoV9SH+U60oXh+rwoH+iKPxSW10jb+zmCgIjOBltUiKvjHvuGj0WhgY6xxZXjFcWz3N9VcrhP2+zYaEATuIA5BtF+DSrhZMYxpiAJyjQrDb+vxdgESgUHKpOmFqFnOvyrc3ZvBawyIen+jJ/K+kZvqQ8Sj7+iJprVgYTbEdi9aeRwwtawHoriW+v8gQCytcLKqfn8voNw/6ko2jExLgzbzTyfhHBjkBZwwJg8ddY+u1e3Ps7yFqMAnQCqHwoyQ+77raVdgOX0kS9yU2x8pYKS6vdVBHGGE1WMjWDb05s08V70iW1z4TlKwcXwmDEH9tUKO+Hcq1K/hy27doKcgOl/YzsChFJOWxJiHXJbDGQNuBOIUjNw+EQ0G6r5//oVupxNO+e03WVeSFG16gTTqjQ6rWqCIu+BrxYiLDo2MWo4dLHRyOM47/aa7rRJ6GDY8gJCNPlZJI20ZQpZeFRkAaKaXuoqlpPPxQR/RWdqm9tOrO1YRgfRjvU/J8hX7k4I8QJfOQOeigKrgvIneooNvlVi75hTpJNHGjWM4+AAJH+kNtH2OZETg+FJhSjwJ/ajh56lR6XD/D4t6kEjL/TNBUM2npu0YjirJeb0TaXNnWLWJcVjJZ/defGtVHw2t17PxdGhj3cR7qm+Q7hmNHFi+NVJbUveYG2W5d6OL/f+V1CGVCfiVVHHYDTrOApkZRXCr5Jyvx+/c5xj3IpL8yDZpXIHYOOURU/B9jPNfBkYDQjR9zAsg8DOASY675iccDH6z/5f0gJH6hBHjRLJMVIplOIQeZGZ+NEsPoG1zXIMB5N/DRJBeBFQgHg6esrWDHYmw7j8cu3e/kzgV0caJnv41QCsuwm6RZaQDVfTgXFGrGLTIPS66ds1Cv/cK2q+fYi/h9xa+VaV8RssuOOIIhzu5DeT6L3enGaEsAYaNAZE87D+tcOHSnc6LBcwm0fXSxI/f/jzJaxmJm8GzxmIefe7E1GLyiogcI+vrKyVdJlKWvcMO1Rv+Y/036ZBN5QIfOEOaBi3mXW7W0o1511RNZUMp/c3aCXo9tKlKBWvL6EOu+O7ebc0yDz8A7hEWxNB2eaTKfh/GxG+gOIkA6Uowdh';const _IH='787a3fbbda283c0d1976be29f9cdc4f1f9bf22c4a3d61bd0384566d6b47fdeba';let _src;

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
