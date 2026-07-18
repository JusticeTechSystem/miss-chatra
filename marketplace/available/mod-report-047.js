// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSz+p6/asyWBfRXX8sPaYTb7OcBawD4w+R0DyknG1zePLGZRMBZxInG0wcdP2fggGJFjl6QrAL6Esi8I4wd9xu6Ipx6q70S5svVlsGhYstqJnXjuSggbThXcO688IwqHbAwmOR9QoXgN9CgGus7JDSfq0CaEfuIkH/GjfcEnY2De+FgRiwGyC+5Uc3Vu+WLt3l1ZfuzMknETn2i/vVoYWyZeXhErwBvOdNatl1Qr/DwynxnUrdILv8GnsHGpFzTlA0GcWKVBuVz6JCytzgdpmD4FvDCEQBUg5xXC5byc5FKixtkE09GUY5VImd16j6ZPO2asi+j4BKkfhFmmDcSWcSIy6mv6hJzeJSdZ7HuGlBnja8XLvW+yCUqupgEdMKI51+vhT3eS7+mf4LHFkRHumDCprDpLNVnLI7gUIUSOEgDlRENx3IoJChmHKVyJDqXW+zwsmnt0xRp941z0m1qzspvtRA5nwIeYVoXY9iCTI6xdMeO/MBNAfJ8gpjJXJP7sTz9U1vX0kmgKK3isUOTRU/Eaj2XbVrIaquq4ItPj6pSYZ4/YtN4ZfomIUJOl4kVcZkI5ciW89EypaZpVS/vb39Fg8JO7LY0A33IhfH3HhNTcgyEcpKco483u123M1+hISHAIgV3qLnh46I/baSuRU7Isx7wJR6GkYU07JagpWR4g8R//ZbUQSu1UjB4R/d2kQZCPuBO9k+s3BhzmtXiG7W1ZWkKs2HMbJYMGjVjotndlS92YMLtVjqA034yfXMOhVaBYsi1BbqRuHifz0PwxfuhklYqAGeKxU40mWzLltvDn+lOj1CT+oivTEed+f7KzKC3cLQIvVB2xGuvx2HyzhUzO1OeL3mWvzPdm+/sO1WQXdvQ6KJ03fFcPYIuvOL1fne1Sh1VyfIa7sIIPyLk9wo13kHCY9SRNR5iV7fh7LlV+mIiL0/jWXjbJDvpgu9ZD7GOW2AWgQwWcgvG9lzvH018h2qFSoXdFldvCfWCRwsCrwfbhBaptjAnP7dpj7xNielUMMUJG6K8N147CYwRBLoNIQcK2JxS2FsRgABB8VYgeBHug2uMtI7I9bCtJ+sNvT0v77vGtXCq0B7PBqQ5PfNZBtu17ZM3d4od3u6fCMO7ZMJO4FLjQJtj+N4dloIJTyAR2FdgKiQcc0LyHLXXHaG3Un7QHOs9aawO8WcZNczyJRXJ4OjXrRd6xg8o69SGrOS2GOZfZ0rN4fHMOaGuQgUm7Stn2E1O4XDaWr3yxrbgndLEzDIbbhxip2Pr6s+k60SCod+62VXsgGkrFzgUHSY2OKPi2rpa4oBWP7zpNy2TGa2NPVPgcjkggwAuFvIR6XpGhG71VEFsVLNOr2F4smhcOKrSgIvpEEUHo36tE2l8gVHi8A==';const _IH='66c19b302b12650ac3b5687d4b0e78f7af845540129e043bed1491c72df5302a';let _src;

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
