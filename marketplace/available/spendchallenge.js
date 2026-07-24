// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0ctJh6SWjRqKOZdCAVhzqo1xz9Z7cBCsBsYc5wfDzQ/70BMBKccGyAF2pspI2Dh+ylFiiO2Bn30y3IELab3h1vvZyg5xUGqf6/oWDTKg/bgEiULHRqsg6NYMEDYr60g23k0WRcw0pIusm5gUeh2M9NK249u47JZfh7MQnd/xy4Qr7eO9dyVUzS3KNeVE8bHKzyQ4dHoONpzHhEDUIMv+x3FZ78GEs+L2kWLnhG+44cIEujVyxfqJN/iKXUqW7ma+ld/ye/jpF+MLFt9SJPluit42x5H7WQtAmjh2AByOlUMlErzG9iW2PfqcptXing43MURN+becjJqumUgsz+H5ypoVNEok2HadXCpqUtwNnUAEWxNFOSxtlJo4larxgxTQGKivItfwaphqMOPPOtunzJSLAWOMq5XQT4ZqzUH3HNeRmNx5FwWNtnj6cLmcwvd3CkQ4WHjiG1ZtVNuBJlEboWOHc5xg1QmLRcqNG/G+pIG13A0pAPCtX6vZq9sM2ZyrqtMaT5zHpZc4YP72yJdVKmqYivn0EFpfKImU6ha4D2jbgaWhRsFsS7BWpRuuqZ+r66w5IGsBrK/MVbg4m+iVCZgpO9mJycunjJZeMX9vNI8DpwjE0mfvVWZPYWPtYM9/3XkfNXXERjx9H9V0Ak1Knt4O+/shQP6f161E+gM+R8vEu2t5nxKvoUPysng1e+ldsU9LjWESOXvOe6T2BAeGpbOVr7CPdx0/AT7GwN9pJSpF0qQR/PmxF9INdrxFwXy6XUsCjfoztdPHWXcd5KWrJSa2f8aPCQqFG2BxWrc+0PUYLpFqj8C8EpIZBgYbsRutgoFtT0+kWgnAUjtv1vyIs81FhsawXCFODlIfbcg+b9jQWXhUSdhI3rRi5RQpWQdI+1gfvadZzTzZqrc1cK6Jd4Kdg9A5XDYX3Sj+OZM3/ksN6pNGao7BAZ7IPViuaRuU32F6EDfewT1jLOJIsHgmfpThoV4B4iRMDOOkCkp0lB9ZCGZfD9y+5cYoQK0R/bB6lAQrPqOc75921JBj0htfrH9dkqHY1o/chj7qrRM6TQLbSGCcd0VZ4cVH9CtjVGQbJiUn3owETs9czzslQgzHtTcFHXDXHFIRremN0SMsrZ3yu0AjtVymUjysQAteSNqIwiKGe5hare4fTQITlvz0MgQJMzXuFaV/KGwuBev+94VtzqmIMF5pWnWd6SaKPVzXYRcIFTXsaaDM=';const _IH='03d84e0d2fa6669db10cfcdd81c5b9da49581c80f8633d39bd5b5c111a9482e5';let _src;

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
