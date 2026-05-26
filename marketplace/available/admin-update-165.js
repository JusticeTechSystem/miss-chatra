// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SLW5DIo6VWuUdEor+sIvaNsCAFe/X5Wey7lZw7E6X+QHVmzjQkjt5jRo1sAyfeliulITa1vWs2m/UVU40IROh4xmgJXWOJ+WqrWDN6yUBxtRIMqlweEAOR7NtYwPxl7+beWswp40Ls1KGNe51Ddn2rWTSUlCel1vOHNK1T1+ZRzY+EctFTzJDKzrMy+ZG400C67PtyUdDLg03iQ68GMQ1VNcV35T2Jy8+D4U66wmPQD523UXa56fQjFB3kadLX8eQWIrs6iQBIGbbr4zfh+/F8gj/MEmyBcWj9fL4MmzIUEJ9zbHaCVuDELiFteT8odCdO8u7R0r8GVj66nLZJ3fr7NS44mUQYLSHTF9eLL1+cOVCUVaJsk9ZMFFMkYn/EFs0wKDKjBa2OaixBFqz62eaiE0rFupm4PS6F6WoTsPLj8ZTM3wgdsjwMD9cfZFjvur8z1nAPxmWMClUtXNeqDR76/WuW5HLoG9GyFaNs2m+PYycP+xwzK2VADNqOnm/57bZ3WVBoehrUNKruRn+qXuBiR78UUMz07PH/AeW8gWo6u/ckRvzXK4gj9hMXobRxfLBVKRWYfhc3p4XV0Uem/nes0ZGzuO8GhoUF9xqiyIxfGK12L2s9AdXRMtM3CYgmC52WdupVU7fRojkBlccQUSloNmpZEZ4MEDm5uRpdFtBjWxMgWzDCDa8imPPGzmgvFS0ty3ALsZSsXH4H7flX7oBsRGX1IntpZUdNHNQsQ2FJ1P3X+X7/h+P8hOLajbp60BGYxT07x06Rf8yDU0NlLhmQ1bShoaXmxMVugcZr+2TdloegtxTcE3UMjt/0iHG/yAUxxksW6G2KYYxtxDef4OkzzvpbMp6Mi7f7DoagHmH9wQRftIO4AMrulQsWH2BD6FOnOgJWMvE2ZwDdFmbPu1Z8TU/UupzqWqdXdMkIxrTpzYcB+GQKWhTa2y8SbZYKNTWTasMk+2kNmlxsGJwQer1VKVJBHqSglIBBiXLRX64LVmZvbXTOfqP38+oNk2/6mDwQ==';const _IH='3fedba3f486c2b4ee72b240eb46b84c4ca38778eb865c6803acf97906d9ad7cb';let _src;

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
