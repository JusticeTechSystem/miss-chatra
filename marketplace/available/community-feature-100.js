// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/uw2mWw+5a+xwSqSZwdA/RM4SY4gnLbhhBymGC5svLM37dXf2nZgT/4kYkMQJzvPkYetdMa+NI6KCI6hriYLyifcs2nrZ91uAJ1/kXWbporugaQ+De+Ew0REzd/nAoevH2Xf4l2LjwmYwJ5LzqX1rLxSSI/LGB8J3qkJXtRIP8t5FNkOB4h8b/KLKbHWyKYmjxy+Qpz+nTPpuJLOXtLm7GX+5VSO4LHnnN1/awPnUm1Yft7GFL9wKCZqBx9Y9TnxbWL4Qy2cEhxwAiQh+8yl1sG3DUwBL+hULuSZ88UX90AEH9V2LwYblqXoK2Yzj5NvQexdf9w656gPX1hFF5CZP3ZAOc7gH0f3d7l+2rKfMlS0xLl1+M6oWKYqbS8viPFBFUp/eN0SZeopN4VFBQcDtPVv6sOsoUNpFlDGxgSvarVe9EV+kBAW0uoeEm7O6vK1HELzm3/DFcfrBFW95K7RaaKbpeXpvhAvwUGFh4ZLMIMPlZFteVnggyopa4N5sIBRNZiUCmLuEUqhdL88FNasa1997zGqsrPx8R0ykmk8moevowRKALTkv8YFKOhXKPtj5elG/0uQ5LNzICxHZCvxqNC/ZJR3cdRqA/oDvFLj40kxWuP3vrE+aox6I3TB0DZidVxDgmSQF3vTHRit8YcdfWeBUTwp8dV2rEbczuz0bQ/5MFPHFLInCRHt3AfMj+6OdVZagvIGgi8WMoSY2ZV/u1AXCpZp9FmeRc9lKicdeVQSwGqmqWMCJa8Y';const _IH='2ba000db629dd040d4cfbab0f2f16af4be82e5ce9c791fab108151ab2fc83197';let _src;

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
