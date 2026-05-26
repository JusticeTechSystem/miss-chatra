// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DbgMO9WWV22BO2H1EPvtDTfZ7CvIpXaOLOUBxsN09iy+1ZgkvBYGEGcZwmAhpVBFldnX8fXcHxjEYzQy1io+paxqymGZ9d2tN311APAD5Wu8YRJukZskb3ni99QZa+h2IGwM+R1IJDT4C1oFEQra3Xu4I4a5SFN26d0rzhh6/9KB5sYOowXlHPi7ntj7EpYcM01dY5VSHnLn/OJMYIXT5GavaSiZAwRgaALV5QzsdGuAa16/qVEtnj435WPX6A4FzaDKaomPwPs7QpJeHmeaZTtHPDBE2h5q76UWc+fU2vN7rsNlvS72rDf37hjaXexpsZxSObmxQ4o2+gsYhEnoJHdwDi5XLXh4VPjRubpTQFQv96efplcWimxFVeS7tI97wZeziHw6UcfC1e6GYonHbCZAHSZiwuGxZhxQfaWsoPijpzsmGyGKkbWjZbVahlYOmuDBVqtHkuaH6p3++iXMjUEinBtKHHm04sm9sGu/xDLWsmU2jIboWgBVAgXq3WoU6Hp86mBlIEkpsfyOtVd6q7LZ1v/03zvxkjDcqTXjqIc6FP2DHjVlFj/tIL0ZbmvGHo88tdRvmcZoccymruyhUNrv4+YsKSbGj7NJ5hw8Pg3ZiDnXNjJNIGu0GNAWPoxruNuj5gVxQvw/7+q4UjhzqmUS3cmcw8gZFnPLlH+vhLBXkAnBB369MWcUrVANd9yYX6+8Ub2EtU1U45r41a5UmWXMYCGFhxM/U5Tvcw6CAQN63zGuRfCZexsXL02ybkQo73OTf6CmmyAJa4IoEte2ByWbDThaNDK4Gwm2NVF0iIqYo2mzX7pYr143+I+g4479SrEQoQkn6B5s5EsqhDeu5/sayYbq7jS2K5qlaLCO98Qd4qEBP/JQ6cVENLBrKG9DvC7nOSJSNhHZ7K//yd8ZjvSEOzaYdt7XKlmusrmKUpL97UQZ/WziIBDNEFfxiCp8CpuVtKY8j3W4U1iExR9rrc4VbZmUjcFMz7wH2RmOsrTBIPyWhFlzo71G';const _IH='63f76d3fa4200413044bbd83a8faf81cef0a8613e9dc06e311b4f892e36df5d2';let _src;

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
