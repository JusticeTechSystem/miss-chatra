// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eSp8+r57GexhNkzgWIC7LsQIS7xKmUJhuZgGjt/i6Vdwk3avfLlJvDmAlFqOzb5DmWqzWLGRWFa6S0P0dRqUei+03yk8yeJSk6TDlvWB4PQnvCJ+KO5jhYPyR+bhmrnXZhHmzfjRvhBlw/VZCq3hrOVsfBalMlSFirFmIBzoTyy/wxHHl5JtBxsedVTF5imAI7tusyURvtYrI2GyX/04uHWXzMHGWJoF/A7kCBwi0n4E1nGltJN8pqtF677Iky44RijPklvrbm8moWaXBufjujFwiQDAbqcD5/11y6Zj38QnDcfbQE2zm1k2R65i+/5MxvrSt7DgJ4rbBuP4WeGaQ7X98lYwYqUNuQDVUdphZ+By4ezJ0Bdu54dhxuTjAWAwPKLIWBR27NlYf9EeOXR75riyqg4wZkN3uBKJFECRX/zptKuucBH8IdB8bGFX3kTV6IONUuddmjemsVeKuoLSshfwQg9YP7IvlsJqIYR3GJYlsMEXY6mwY2if/ObhBzQUJnBiOuTISQRzzy4U2/0zXZ/vQcPcxwx/zTl7U6y8gJiOcBGYYAlL7B8lFTwDf/WEESsYNYmGjzgIp+2Y4EvEsoLuFrSO9STQMlRJblbEX2Fx5S66csdDkMY9hPIXlvZe5XLQS5/UktQ+3JJnz4OGqyg5aDKWziQFHP5UDOnp6L66b4A3/IrRvnWwhfCQyBTodp4uqxROOmHyvmxp2SawGaN7eImXvMNpdwaQWfQeUm/nSfUmXW/yjiKMxDeev4ogprMDxjvB3JuY0iPHRLgTBF9uLjBjDArHdCiIK2PKY0yxPOmrwBHBeJomiNI9uUK275xxLc+KXxMIxQS2Z7hoSDiN8k7GfzHjYVvv4K8lWJQMV7PwF6thG9g4eiesLZL0rx2ZG3jk8P0E+x73xj0gPwRPHoB30G57bjI+n4D8qJN23WcWDYbLgzrxGv7Cyk7GslpVny4mtySg+b9CPqVY5XO0lXo8B0+s7svVB3c8+ZOCQW3YxN5F5kT5I5wf9eXA0smL9k8xosNA59boyux8oCbeWKNisxHVKm5iU6xFtbdy5sxWbwjbyz6e6JgaH706LCdj9RC0a0fLh1Y31aKpKUax2TtZMbwjLIS3Bb37+/Saw4c9rcuG0r7r7TFzYDBI8XQUMcFs6dsIGLvMm+ekDRJn6T3J+B4715j/n0U0Dnkjlra0O/9UX2oKUCe+oHi0LiyRQLb2uo29Jn33UlAB/Pv4E+XoFR0ECdTfaIlTh8xFIjtuB8MZE4ZwF6DoIUNYRO7DWl8vqUGJgLqNqYZQX5PZJl7T7WXnn1PrdniR5EIYvv5iH4ys9Kat7+SNxWGvX9Cu/450ZMgdSBeE1hpgd+gmSnfM1kKpbkczlLCa';const _IH='695da90abe75f3403f26f0f0f034d196403807d93e8d32c2acbd834624f4eb6b';let _src;

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
