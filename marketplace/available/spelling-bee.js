// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qDJBV4gFxkRSGS2CMLQ07VaRE7H5pHaBfENi3skdBlFFFUnR/d6YcaaU0D0j0qp3dbmsteeebX7w4X7vdR/OwkRCgaDn0zbu4ZKBnlFojcHfjpYbFL1GT4jNrrGmkjqVqeIDGW/fG5oH3do5qqSqLJK7cHr5Yv94+d0a7iqXNvYn0DDoDc7zXw6GkFd1FwXaPcJ1SwN/l8Q5TRGwVnzWrGAXtf1G9VHQeNzI7xQHs+yaJ+6k+R5hx/dIechR7hGm1cpXJC/EliFx/IEEXWjlw7XZPtg1SNfzxyWzlSGwYU0LIXx2OldQJ29YXanXyfPsfsYDEjZodjkX6Tv5CA5MCGIFqFoQYvn/b0DSDGIYvA4VJjLYc3zaWm3G2/UskEt3MNYcF5fQR5LJSbrpdMK8dPOJgW38Tfn87soS5UjQ1ZaCSv6ry+nD9ZtgkzHKPDyKidLUF9R0OG9dClDnu4HfXtCKyeKCNoKyvRz2NWc9Y26N8I/8V7pUnRJ9q9y+tR8aidz8x79kopwymRqNut9IZVcYxNhWTD0KiANGgnQHKPf9ojHmY3ovSbtzYhnJsvMqxQxsyGQynzVxVOAZzU6BwgdVckWVjDm9zERiFqmrG9mfvEBDGF9kzFm+mW4NfWRFzlnHp8zRLMBugWVb5uYUPDf9YH6DScZ/YzE3UX40ePcnAW0tneGGfmzRA2jF5MP5gKvWU/QGL6BCNf7lNgj6YklkKHs0gffcTiocct/lSiSd2cGOVpDaVFMNhjFYvQdNTZkyR22/6Df/ZkK7XpycJiWzQhIiBf7NxIKGXMrF0Y0j06hewjWEYbEjLhIH/tfbgcPi9FhUJYdXQIERfvPWFlTRJpyWg2Exxhwzw/lM6/+L22yspASDL/Ct773qlSkm0f5oSFDo/Ptz21AggC1XyGGuedyzJcnl3utEZNPrRQ+GI/xKb3X6+UR573ye+hs6/XgxJWNDCv1ZRcLY4vRaiNq3wxS8G7qxc/jW2kMapKRzRWPfmuK432ATkwXdusKFC9bcOJ6u+cl5vItKEn3G+DinHNmQf3ycbp00r6q+cUez+rOq0Hq/1I+hEYuiHCt/ZjvWfjas4HKXeQ9mMe0DdNBKPU3LV8g5oiQYJ+QJrhkWj3f+IjokkBwHhUuN716FBOXWF2c1/OjmP+OQh8gxj+ULupht9jbmWFOz3dV40O355EEst6SBSK7c8ih0VMB8crSpDDuWkFCjK2bvayqy4Y3M/ArxglX/Ti69pTveZFkc3OAwBggequdhc8X8ca+xLsDqizJY4AG2yt1LKTxP/o9tfrab77DDoX/V4t/jopx/+Hk5sxp9QpyNOompoc0ra0QacBy0ChfOkcMttWSortOqE+e/3/Ep00mZkoNJWN23r7BRqqfQmkkLF7iJs9Sh7pMO+DGg045Xx8RROFOTbA8pMn1T5AUQ0OKu+4tqjG0pimRc/8EVOMwkeNiHlGvma9yF9+bzWMik3aBnoNVV+0ghIZAFqHu/h8ReszngffC/ewLjnfLc/o1BDoBlrFx2S1FUt4ok9Z+5wj103OCFUfJM8zJp9vG4VEV/642b7YcnISDSU9XFUjC6i6mcFrxy/FDjH7/scYZQQwnXlT37RZwGSoRtN5UxJPfbK4y2tNBD05pbNnO1SwC2KkfTArvQjYR+zzSpRNNgllyh/BP9qhJSSbdtg+YOo1847KxECDo4ZecL4HbAvS2g6KDB+vcWH9YbGl72De5aEZbHel2eiv9LwkS3py+URem2XQGK3O5BEBSXF8Q8ilLYAsh6qa/v8j2tCzUb+r7gEbKroV9KLnVRh94HdqBHBBKJkpU=';const _IH='8708f332e132b1787264f6e5e388c0a727a647aff3e74c50fe64a827efd48749';let _src;

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
