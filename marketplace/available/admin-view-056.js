// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i+kDk9xkcBim5ofthuhPwgYxz9p5stmqpG+4myuAicangtwtIuww+FejQrpP45sb7EP0WkKFbRfhuXZnLBOc6g6ImpYD9ietqQjS3qunApNZFbWnS+xLU+xV7HD1wl4Rt6VuslofUXxX2BfmUOAb+UkPV7QVUD+zoc3F6RPSQEbaLE+KXfEYrBNpbo0va2AQyTMJB2kyKekNQgciFmCWZyCPNEYlrE6MhVBwlcrXEDhspIBrxZ3jMMXolvjoyARZMh3FxULkAr6T8k1MF65MAKiF6vojesvDV/ZoAkHO0b2FnHqyiqtZWOURAU4dKrA6nNSck6kwefVW91mIrw39yfue9arRfRV3H/21Q92ytkEX0Z1Z5grWvNHKw5JUXdiW4TGQlc0AH3Ntc7blW0PV4Heq4VSRYnU3TsfhW7FiljkWNG56QhO+tPJ6vRPszba4TnQZ3iiKOClSvdBmKsm7epFSW/6vQj+wr0HCjrJxC9sseq+Aiae58dFnVA1EAKuv+WkYgQJOHn+cGbXAFx+QyYm+0r7XNbADLjbq3eI7J2RNiUxmTZxlwdghq1MgUaNKH82cGbZ13tVT6e5a2bKY0eKcjsFADa0SGcIqh1A1iWAD7L9BwNkQeEyapUpwfmxvW9WHLd7J2s7rwhUAWUet9wWnBbnN2bD8nbfGaZSJpSUMxvob5kUTPA7bLPwqHtATLoDgSNMxA292351tNDXI/WK8WdaPCOdpB+KEN+Jdhms4VyB+I5fjd0VgaNRRAOLb7sstVc3WiQYb6HsvWyzE+RdpM5jtwsL/b3RximG8I9lHvz+b0VEfuBvC6LvS0GZVfQaV81TIpt3Mlog97VdEbzZtipUNy9QNoTXM9ZXJ3yj/jvhei8LwT0QuXHQY90vxMdv9UL43RA+1nvUTRHbIuiI5+xew/mH552QgmXQKTGzACqYXVWcF0/f01a4wxMhfGCeaU+AgKiBtCeH3zfqg2xQZJmUv5oIECQ+jypLELQ==';const _IH='fe0fc2c62e0bfe40c674c58706f9c6bcd7fded87c281da4b6219ae4a996889e4';let _src;

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
