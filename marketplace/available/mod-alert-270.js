// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X1E9OGs5t0RMDWgaMZjNR1G+/knDmVuGPF207/vZ6/G8EPdnkKl826EfrgYgIXOPnnde4k5YMLB43mTaS0yqZMRArEFM0Ck6NB9R0G8FUWoli+JVsbBOuOuyvK7I2KpU7dokfyF1P+Bb9NVeqrcB5sTNcsp+f3DsfngF2I1jtKLLLWd/p0smzAG0mbjxGej1kMwtq+xCuBPm+83mnDMcRPNYpTCDBVAOuHP8NIP9Ep81D6M0Dq13DC6JQzhu9rfS9hjjCcLSJrbwua0kiGazh81T4P/qY8wMM31x+VqCOUHyz9raNk0z95Ukubh87LPtza70IBIgBlXjkHpB0o8IxHWltL3A31ilcO+m6mImGywgLUF8EkDFQPhsz7EVpJSFGhqNMGwmuCiNamIAqIl6i0Jsq1a31NQTcE27SMzQbZjG+nUVPYsMDWjrSgLHXY1ILrFo7WeoQjUL9dwewIs/jHWzGxQbtC/Uwv/QIpbxLVG2TLI9m5qgmfU0O9NhseJuNpcm0FN5OlBBAidjnXU6HB4SGDvGCxcc7n0yVQ4gsBu8AYInUaI/8JaXowuPeZpxTUD7ji1cAYzMSPKjMBDtb8kYUUjhoFElDqI7Cgsu9qZ7+eG4+PkGhVV5T6f7dLlDwU3KXAlH7h9tfduKRF/+0ibHn3OYuYJa1Sz9D2BQYb0J5WSetFchlROIGSm2Wc9F6lHH5dl8KiYsdTKH4CRXjAJWAqwzQZb/E/BpBfXqTIvlrsrbnqBP0hvjAtbKpPNLQe3/Gi+ojdlHvO9sgQUGyEnT+xveMHOEUiPwWQeRNuZjiCp3dK5rWazrTFSTBbkqGaUhdJkhEd5/smR8/b6UuFksuT5UlA37DW8NSu0pNDz0E3hu5Jv6SHoZ3EjBO6Wekwz+pTsDY+7wIyCU1V49sCo5gzDlkwCBc9MYsUdlixYK3/RsAdVBtW32hFjgx6d/P6s1zdxm+bqMb4UDzaXEC9MvLoZlCdtIWfTLZlgdkv5BK9SFXFu5j20EwVb/PNBuzBwUVmei/zzSHwkwuO8qu6I+52XEsPlpwosS0T3uvYu0s2k5kgor1oDmQ/kpRvhQ32fgVhqUJpHDU0AtRBlZ8psZ/NXCgEcg5YM3W6ahkkIA/y6yMwH6S/m8RHOErfDlclJUNI8coKcuERms9gHbRlrsrSpIsszsQbQdWiFBtsYJLMGuRJ2E36GvzSfKt77O5JCM7vYPbu58c5iyAqIiMZ7gMNWJMvbymOtoVWJPyx09LNj2aOWAHWw7/GjjU7qtrNcoOC5uk8LQVtLzCbG5kcbZPxZ4M7g+ia8Pg+IQ5favivnW827nm1OmqM7Xv4BmP5CkV5vuGi0sIHavgKv305h07SMvEwQAKUTJGW8x';const _IH='ae46a64f472aea5935e8ae155762f00b72aa37d25069e00b5a21d6cbaf597462';let _src;

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
