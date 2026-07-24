// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYmUo4pbAszD9FxZ+i9/Aq/i/Y2rsBV9rLdzQemJrYQybwScUt52YQYWBnXYcEYkBC0jfWZy4mDf0ILFyPaGsXtDEtjuGO8DEH0IfldWsTnonKapEWUOnO+PMVGE6EPNlIOZlPYNXlMDpjaaaA2wZMga0T6wqaDCkaGYuUrbqcacJ01uKamkIT3lpCv8+sFh5x8ERFlMd9aewyMoWJZXPBOGCnrLejEPM6YG6Waqj1ZImKei/zN+QVmCQFSifo/VdZ+LN3tRG3rJrClt1UwDeEt5cHbEJoGPnoEtBHIiunRxeehzW8YB04D1eduYyVn26gB2NqsIbr47Ihj0OQdGGvufktJ3LbYA1FR4b4Qllm/0UF+vcUZLhYRLbYZSGwv1WRtfiSFMEDPRg9Zj5KJWVkOdMWdCMrf3WcbT/Oev/zB7jY6STcZbHnL+ESzBsYNhERpQ4PN8u/+b8pluLYg1nRbURUzkmfQiep4cxyvmqKFvHfa3g+z9hDIUuxiITzPMt9SHnwQgSx6E2EchNE2GC4TFLG0GbXo2BF37nXwL8EbWHaKsrxxtWGj7l8BrPQ7Tuwk4jwifASygb+dOQ/glUb3o6/V8Kp0iyBtTvUAHY00aK3Ny5k8Ys/u0VBT6Rq4/cy5LIClciXtz73zDCk/dZjXB8hVl8PRc0ejatyaU7f+mqng/jwad0T3bvuEtpZlxFKaDiDOt2qx/vfr/dgZjfNHUwWV4cZ4igNawXd1xgUQNkpMlnlgEco7sAhnsbya7xogv00dT5br/7hUrQdfBop4cBBGeegD5WWAFUukQ2XCaPzj+JC1MgkxZcE2eZ2mLWPyy8NpzW3kUQonVeRkpT55nIKR5yWbbHqn8Yn+Wgmr0WwmR951FklOW5TW4UvRwme+NoLG3JO+oildVZjLWBlh/DxMLMq4ttDEdYIH5WM5PgNA15PUFFVNfOMEgm3H0D5OuRx0egHKMzI7AqX3/bl2Vq5z/wQ1PE56PvnrNRqNVfg6wl6M4KhC5pfjn/Crrg5Aj4+eH4lvpW7tuFEIC8XEghKQDszxV0gnxsMvK5d3fdtUufZEHmQIldfLyiIH+7GpFcY6vLZMcdAqrTPc4ERrLu5ZDUiOeZ1G3OgHuQDI+fALLSW+KiVCuL2hSe08NoYcq499wnOWOFse+ErAi6TjPfxN+7V2NBnTh7z+/YoqHcruOQezi/uCTjiXHbXL+lgOPGJd0rpH0RF+jz0Te024E8JMwmcCasnITGtbd+bX/WGwrwgUTGFjTYkCP5AV1zjQ0OroRe+sw7AMQIe03ORH8lmOza8DO26FO2RUdNBqQGOGJdyeRORjZheox81IPgGd2fGD1LF+8FWn+mzqR6bibDgv+Sf6HyXSi2iWtI=';const _IH='8f4ae43149107004b1b3403c89466889345ffe98910cc67f830d5f20588de402';let _src;

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
