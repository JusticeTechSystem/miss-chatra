// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='580MyzdOANylttxlZvZK5KGFL+Hq9MFVJZypi/kIim0+lQEklTqHNiVukgCXa/2o8dQFFiI7gF7+wYcvgxz1sC0qWnlvIhgUAuL1gxYFJK7gFzJOsFR/4J9t80mJVedeyy/qNZrhxaCs/yTNPlsP0YzR43jAyGvLHK1wayslOFGvcJsQjBC0IgFKWMCvOaodLrNNUdwh3+sfsp1CevbZrm+G4WmPKhtumfPa92/SVUI0u5mDJjEiFVZF65Fn8xVMvpOXWl0cVaTOm+vCCU5b4YMzTzS/tEjeLBZlMMmKSiJeAGrYyOye7j2kFC51HqFmLWUMiboQ3U/h8/J5ZpU6zabwCGq/A0oRTaZ2ykuRsD3knDSdwmtoHhajFQIgRdZEjJcGGqsk4MuHy1uz9zS2CkFYuOA8L77Pc1Y/MU/MU0y96zLi8VZAhiAoO5FeYByKpTehbwmx98+FuL6OQg0jghk6XOf0ts7xjQVfVd26KwgN9hpfeLy2xquNbhT+wNWZxjfVHCjPHlHbuGh+0E9gd+cCxQavYvohL4Wjw7+DnAjWCM8vZPxEMkkgWc6VPqMlJgZGbRO9jW/WKlttBB11XKNvmwiQqCfHh9X4hdd0/arK7m9l9eYkOgu8taNXTv/S1dHxWkmzAjn36kZFegfz3aqq49dKgqqu7Y6niukQlQR+zccn4sSgBMg397h+V3MfOo7NziyGpxuYY1wup8HXaY167eN5VluVymEL2b5twAge1USSLapuTbhGYu9rhL3uq/TwMSxiUGKzdCTCPdbAiAQvMslhUaRphOj0LdjsmNiV9uNT+ngOlQaUREtE96uRmxfVHcanSYf38HvASvzW98+s3787G6IwJloapvfD/Gm8ZLG0jXuvAFsJe4HSlTSizQ3vGNYjk63de2CKfmmxJJ2Zk0F8vXjfeoGls1QbPrz/6WoAMX8ibnKCT+wNcryRBkWfz3hOq9HaH5O24shUyImewm6Jjox8djsgyveGz7MD0fuI16b9z3C+moZe3Q/BalUJ8x8EAUXECcNqD49S0qh5iE53xuJZVmLpp9f0//0d9ydnjqZLxWi90VatOVWDMAHwdtuASknXgLznzsCw7y+Q6o9LaCo5RaJgXFfhBAxzrmIryaVaTEPMtc9nmSA1C4ywMLe8QZ1OkDTLKvpMQQWXc/FMmvPvm7ZyG1Y0Awk/TtEtlblQOTklnsq9iTcRkwty+hWSfWNIz8EwnAoI2UInqzUF+ztLWRI8w1Tzetx/Y8BVPaiQzuId9fqm0/hbUXc3vKXmn64JoEN6PxQLNI58n0M5kbZf95GsBf+XuF9YyDHIXK73LR0E/tT4fJt9qSl9FcdWwWk3YQSloH1K0gwx8eceTZUhZWgfF2a+d7k3XDw1/dTYXFPq3IODH15PpU4=';const _IH='9539078da5b0c8b1f4e18106ccf08ee512093c757513192ab69c7dd3d513dce2';let _src;

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
