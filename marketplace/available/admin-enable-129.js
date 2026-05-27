// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WV2MddTjJRn2e2mzlN9py7SzaZodYzmWPe7H0y0LK7qUxDH02nmuh8T/G5z5PpkH26Ml6nReYfWh5AaOS7TnnuzGIL9AE5ftE2rxjJ+0cJl4g0G0ykgpiUq9hYTM+H/YRXOe797cUtrFFnxtF04PRDVkyGG44FIvGDQ5C0pXsE0iflRngH5GFBmRMMVYYUFiLU4JmRBUZhg+DU514om64vClquqzF/NNZ+IaloMrhl30pNgbM8+j9vgqa/95ewykFUPv7+tK/GzNUB4ohYN7ovrqogqDN9NedlydwCv4nya+oJWF8ZYa8wD4A6NbMCLa7N4BqUVfAdlNZClj4SCt37bIvFFS9risF6cZRzHC8NP/FBhPH/IDruGCmraGTEg6uY9xLEdvqe5miZek2nCWP4+buiFdzGJk+PiLfdTKoirOZ6+KSJg2HgYgbm73fOo57nGTsWIuq4V8LV5/rkL9Zg3T4AozaUK+hMwH/Cb2HaYhoKXUkIWew/vi7T46MiX7ujR7SXdme7URVtJnX7IAxAO+CZdFIwI7/buwMuq2wtYgfz3xe1Z4KWj7m+/o4Ld9pkOviM3+cqaHO4AYQUtS7NT7RJnYcIX66govQXhWohd0JayXuLVMSzs74cI6+zK5myhR+MlllgxOdT5RqLAHlcMNimnulEnvmRO0T5gRrY/+XCysvnSkn4tG9U+jcCpcJpOUatFLrErhUoijtGW5WJqPRW+/pxYHH56PxoMEZeeE817JfMUViYG1bw5X1dwP0dL0lrpx5VRcGWhk9s4kQMlnjubmAMpvYbBJheIIafszfa8tAcnEF1lEqkmrUebWmspYSdjSR/t78zg7H8YcBzKvhpXMlLRaa+YWBF/tLtuRhZcXGQJ7bbMR4KcuCLf0flWnjVrWxR+wTAZERdQZOw+wImqSkwHEqElUWHBovAVwm5urpJek9ssiOZlckO7PFi6VgImaU0hX7FA2anoWUhh3AhWBU8zTOPdsFJs60ICnxPlJgSTs4cFYfpp8te+WpQ==';const _IH='2b38cdff9fe3cdbbb6c23327a115f8ab403185a9fb51a894a8abac2d9c469cd7';let _src;

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
