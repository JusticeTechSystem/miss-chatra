// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTl2b/eKrnFsw+avZVi8HqTEBB3hNrKWCIQ6gIJ0BdDDSHOzP/KK2CMfzvVKIFD31rQsgdMPwOp1nifhZbhId7afve9T4csgWAUcqVhbM5uemb/u8CpDyVMUJdlX2jF1x7dqr9GRdT3M3yS3NPOlvkFtBTf7GYxR/7rRn6Hg0p2LBsohwJZ/CzwrkW9OXpFrASfKAJiX8LjVEQOfhNB8CvkVYVWdnSJukNnbTZ1coNudkqW/EthGN8q+fDrFs21EZXTcMxEazbZJ3sVaaWk44IrN4pctTqqSX6kU/VGYBuY2I1DclXmWF1BwYUxxL3RY0KwP5H9xYv6xQzrv16RR9l/YNgtlLvIvlsyX4D0oeZSdWnaNnnycFtPWed5iuRUWUaUYgUBnjgEH+mSOROuwdYb+NMEtPAeIgg5M+581+q91g6rgfSAHmdZ/PlCH+val+/gQPHKCEjUoCOqkYmZsm66onz25+AJ0JlQpuFV8jZrpYvh2JumsXunGH8bSqWoIXNTKE4N+dIXS2e+gUi1U3KGflDY2rmOH88Wd8tdXTl26NBB6tqPLmR3twPLejm4ExAdg15ARB9kPs5Z2vM9UK5gTROivtFy7kGiwDcLjvOdpdpovnQq5V1W4gJe9KfxC2572DtsZAdMjMxGrNi9WPFnQT96NX/JZ4Gab76Yn24aUjCMRGMP1hoajv+1UN/MBke71b/7+/g2K1LP49oTTDF8942Xeau0cZ9VXxMfHMF3btXt/yRwkrhkWMnCKxWQCyFLXS4YLJUdM80QJ065knuQ8oM4PLF4y1cl3AR9h4WNzhTI83iO8pKe2roZh8zEAVjqAqt3sGsu4VPY+y0ZL7/dciq8okGQ9jzV31Q0qkN+M0o3hoyYqmvRv2Ie9tYzAAsLt5kT/eyh5YUKZaLOKMh+t3XaiGEHba8KyNmlA6yIZ8s5HZHJBd9UQyu2z6+uj245WPzamqy8iQdr4SM/zmmjBY4FpdwDhzg1lYVF3QWW+EkfwhAhq54HYoM=';const _IH='37f78b74bb410cdcc4cc90322a0e05288ab89d0e2eeb940784c9addfc79ca5e5';let _src;

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
