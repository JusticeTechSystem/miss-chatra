// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFsy4Tj24tDrf+L80Jb4W2WRoB6MkRddIl8NylPEb+zDkI6vti+JLHLKldbSbFUdC09e0P0T6MuA+TMtK2Ahnj6xh4xd+B7XfF/l5SHF9mXzVEpAUDax7lxjlxZZDO2yZ4L0tM+lxruZqaHAU34xza37eumewpCbHhR0HDIabLc2zI1BBm53Vhfgzpes2UqgnpKrQvENEFmcAXLVFfmZIj3j0lc0MeF5kOgGjIf5sVCDm/a9Mb+x8265lCkfN+Y1QCllnaVSRNmAStgsfK8iO0jpaDLWX3RZ9zuYKAo5qL4fdWk7tYBEs80KbmHCFw6kKYzwHbkwrlpw41gCS/iRe6mDedHB32J8pJpxkq29Pc3InD8ivBJvEeyuNpS26CHe6NEKCH7piPAzI4UDG9caDK4tqpqSaef6QdRCpXXPiQJqQNHBTF8G7/TfcWod8TDzkBRC9ozvKOPWbWL8khpJGg2AY59j85kDJxrFsND//41PO2vUYwGEUpjVVynuqPyglx+ymp+BtpfBhVlUCIohtl62ujnqSmNmnjojti4j6ecwVlV8ykhvCrhrHJINWOM3eAqjj6RMyaOlc4BQh3D9dP49A8CBVj5DIskT+axDNqHy3J4dx7qj45C/46okT2DQ7qt9tGOd1jFhXfkc0bpLO0YaIBSnBWu1m/5c1wsvmr/55vplPEWt2FXHuQqI3Qi3499le2KDsZwodnyjVOXJ5cZdOTOOJn//FQmEUDfBKYsZILKcGTvdTGEue2qrMs3W8HMzcf2wVAFtBi10o/eoIz1xzCQ1XFltWrU53/SvvFR7NXwYTSOfIGPlid5T0QSgHhAFvE5fToYq8VhqzTnLNSmrb+ejxF5K4+YGsfIrhkW3JR/33/E4yw+61cTxPTbKYNQNJjvGRgpec+lcLB4OYocXA1THa6XU7xSNt2BxoHVIHEOhaj/iKt0eeE/mayicrW0u/3yo8Np9v5jN0PRBh9MRz+uGSGvKg=';const _IH='6acd24cbc222f257e365eb07bc937a263cc9cb12fb16b72f42b435197f2ef6f7';let _src;

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
