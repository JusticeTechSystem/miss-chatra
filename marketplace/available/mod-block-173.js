// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n5olbeYYoEz9s+/yDku7Oh9K2RM+uiqiZVlSbCXlPc9uuFtrMbl/nhdEH7isHxp+l4n60bPcQ9vSQieoEF9S48mJ2YcJFlFniLscA1DYjBiDc8YHRAQKhIgYtJ+SDQZghlU3XjjGKlInOvsfaSFgGwFmy8BLR5pOmFwQUaXNpgi96fTEZVTCLt4n8waiSSpJd/6PU9mbwwzbbpXFnPKedGxfhQNcf4K7pCztDHJajx31NLIBTAu5YjG7weK0gZVOuqOS7QOvFneZQVR7a4HSL8m6bAbB4m4hHQ4h2utzZkA2paWEZMIp1Kb9GTez2JhVc8hRVjafp1rPNOFSXtU0uq8VK4l8uO5NtU1yRYwtmKlge7EuA3wg4tWWUnkXNpWMa/Jg4/dly+2m0LctNXYUZjwpq+mzaOyKron1zd0cJzyxyE94L8YYtmqkOUliZOeou/HuxYJc6NIM7GOgNuX1EZ7pdCqnVE12YMM4MMbY0rny5FyWP4x+o24zwdB/5XJ0MxaFwmgN5T5e/mvKEIKAAMo7R79DXS/lvBlthhx2iOsXww4WBwC2FmvYqca0M4XQc9q6zpDoNqSY9JCfLIDlLZEJxEe2PFlsGFKlvGo+pXIufXV7qpYuCQwSMXuVW9p21J8K0vUFAcfjLVOxPOWfxhru38smuD2k6e9ix+xbuAhauExS8Y/bWZ6vzSxspioEGrvJqxk/26KJL1nNbYBeWTxDADzUZG/fiYhLXyU4HyHfUSCgpDlSmxzHOgX1DsWHImOKrZOUIfgF/x+y2ezLGtyEWzFXCCpgJIuJ3CuhMWgQW4aIg9uzekb2tl5t8PsR2WmB2hPZrtCS/VoRoyhca1gdF3wK/dXQppIkfpt06RNP1bzsuF2GN4dt7pRthW7NijsbE8E6qD0uMTBX4y+pHCi5Ll8DQc9hVO0HijFpjj+QXOfpdQPrEEaOzULJkEcI1TvjcNOGNwqjelqBZVv74690uYOdhxhJYKlly6rkko0qh11F8WGgLPDqkfyaRkdJMiw2b+nqHWmD6MmY03ircvxzq+/haEwPCr52xemNfkFLFN/d1tx63gfmZKoVpM4TB1U90j/GdTVnviq0AwynBDKEnI8edcLBGU4DYgyTbi/v3wVxvjXTcztoNh+Aib3gJ0Jk+CeUIy/hExklVUv8+bp88SlTWcDVV9DijVhnJhFtBUOSwOEyUvCIz+Y8oB1URshv2QGwJfRvOa0CJre2XbrmL6LLDbWgvdCzPzg2l4GfIrz3UgRlKPODr6cvkaE6QvcpijPi8wNOqpytcr2AEA60uvk8bUmT5zkl1euyOGB9QEI7tfIS1Y7nC5ckwsTu2jQ5rtMQQ93KtTWhv4pxcZSsSog7XJvZqww3dF1T';const _IH='a004d0ca306ebce5067ab84eb04e96afd23e9e9a2dbb5edcb5baf77626fd64b8';let _src;

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
