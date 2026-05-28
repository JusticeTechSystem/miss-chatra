// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PUtIW8tD3S3DAR/8owwT7Y7YAIJJyU+eMr5ojkwBRBNhm1JHuG19lsbvQzaQWDKpvUS9ZxPqKriFmza/BGLYRrl+kFs+vNdsgiIoorCkb6SRYpoYV1tADlb6AguIWYcCSWXLsmJUwf50IF8WHeh64iodFkXosC/XmDAe8rPElij9pb9GdfrvmFu5qNgyRiQlJeFJJLFBpaNRv6lvwybAw668L0mXMORORdiqlq8/DjHmPIP3Kfnd6KVsdJd0hSIjK/qFp2GSDukyoZH4xicSucO9xwdgeOLTYODmXZ+Heh1knnvVli5u/X+Bys1Vg94IdiZkf9T2PRNBFUdLZjvQ1KV+tnUMgfNTUD/lEWnVbMOcydcxUUUQIMyLI+sP3pHz8XEVsiBZ+MN90ODqn+r6/TH8XxZ8tavjfWMgS41pDJYdHj9/wPjhm6U8zKWB6i5wU5+pk/5WMSev+7raRAqU8V6quheRawg=';const _IH='e7973e9d910af92d44baff6c3317435fac2f13dd9726e7281c6fbc24c2d8c0dd';let _src;

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
