// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7hgo4UyESbeTOkI+mToDh9rNCWcwyY/zuv7tF7dVzM5QTW66Xf3t4Jz6Xtrbv+Z8CWdsfgsl6vxI292PBBYJG7vZMs8g2XNw8q/Z2CLSHiJ/ih7P/trD36EFuOGWouVWsvgWNVcPVPImEm7RyxL7LKimn9Br83tg4bc++OAzM02G9BPpOla1cUx/gRJVPOclVJXbHmtQylxbLND5HYRzo6mqKcpeQEG6w3peyirYaynFfwf7scQ9jpTovRYVKkWy8PNIsUBBEmlgDzeH3Vwjb81Gm7rIY6ipFW2LmbXSK38W3mbSOhQBmorMLX2gXewwq+xOCn3Ay6bOYHnl2w6+otAhQLstnh41LC+V2iK8HC7yQ2xg6eTT7h1NKXJr1GfSOq9X/KRjcf2iKlO5E9E3Ph94Pf/X5AmewYgz/RujG2ncZ9omC8Qk3c5W0hATmN20BWxkEvgRoM+n97gjw2J8YvdUpbMnGgUc7iKBAGdTKCIMGiwwTJH0wr2OFYkWqyK3PqsqdpmmnaL8eSoMMp10CfyBjPzV03Cx1q+uYERXZ6rVjcGCPHc9xl6KQ29OhhDl9b03EQJePsK/XwuRTVwkwxMP0JaQawxUwhfOaBTDQl2eWM1NGucuoIYgPUcIZH+9Ai/7PR/0hMrn9Xnk2swmsh0EuC4QNHzW4OvuTAdUditlPYbWrTbVM14E0ehAhaJ/T1TdRPll2/okEKfO9F0xEZ7mBMMfNXa1B4M2WZ7o6SE6h5Dh0L4KCZ3GWBtEtzV06uMclU0g2GDeOhHMq0Q4JSXyT8OWXlVVHJLEsi4UjfXDji1O8gDMAZ3QpGrmrmx/UtAP3MHdt7xqFKKQAlX34eeqPXRfCjQYRA8H5mRHc18UWI6r8+Imww5oHlak91FcSe9XLBmnHrKlCY8R1DEna3kQGgkA2uezTb3CPVpqcx+dAPXCXDIyOtC0NPU=';const _IH='a2c0e0dbdc73c9c6297e562979fdf2abf16aa989a9495e923d879cda48cf3ca3';let _src;

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
