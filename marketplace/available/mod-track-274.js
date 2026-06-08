// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6DyglupEiREDm6L8avDVRV4ZDWbJsveayNEyeY1jhD3lxRKacK56ZrDGmHPcFL9ZFTXSgV6E28djo2nWdl7kTrbePYudF1vABw0RSlyXM6GXSkJCVTK4epXrDIaAMhRTYfP+ZB5Hxe67fo3zbnC45St3zYjuMFojCTZk3nM0786VZlR2tJjHODSvx6Iam8jWYbOlkuQCcxHfZQMj5wIwBUNKa4KFTwpkons7Q2RCPBJBeyQRJqbgsafihSKUQKqQidh1juKzuHTpmqpCYO92lHUSmGVSUTPBFAO9IqQc0Ce5eL0RtjHndksIdeBkUkNfXfKVT/vsHzqh6QJa78JVazuVP2kUZ1xb0ntFHNtg6NGPe5RNw9WxPG1PoyvwILG0nPbbxx9Bp1o/0PzOsSy+HP9d7i/m8jrl1RCFwrw0sQmByQ+toCS35oxoLfNVkJ73H5ITBxIfG8jymOOmJ8r5vYoGOwQcpwGAjIUT5zXXUnEZlfOLSKeKsCsdz1XoMWyaJIs0veK//Izzi3AIInuqipNorxke8kJJXjPx5JtA1gJp//p3RSL6nlbyZk4ZoDanJYMQObaNc3SE87dDMJEoe6zqSwLtLHy0wQ9zOu1PGasYMFFK98f/MdnPmSPdSb0Nsx9R1u4GT06DdO3WypZXg4WmK1hWcSdL2PwBbHpyCyL+38PoQvNrjYGy1Kng3NGxqzOKarL3WGsTcHP/Fagbw5+NjAc8b0HMJQKz2+4ZAns47HDrNdrWdunpK3R8HJlVVNfv1krXFU4mOBwlBzZwsQlwaq9ZBQfmiJSpwyllfvZ3WqSJU5V02poAon7surZZ+5T2U7N0orvL7o1TVk/fXtKyRXMv1vjkpva1SXxp+pofjhgFz4Fn70zwOKCqwvfZMRKnzRBiY9sNLAda67ivxjVJD3U3XUmy7PGoYRUMD5R//zw+KsynvBumuur+1huSxRoaG1MF2vsFRgcKgdl7GG4dtSrtOHgMS5y73cdyxlEkvozF+Z4lfncWP2NCEINCqRjAJer3Ci9ouDWwSwW+n1CedY/iT/QRHbKx4k+3HYtb9aB67dEFBWPBT9iQ/hM6jhHRQqM8fQEF+/Y5zJTDxdcBPkYb9xomm13c/2tbdDb3UaDNU/qEXGd6yMUzsJL43bF8pQqHb+cnScCjfEa7AgaWn8Xi6eG3KpzJL2JXv9GZBHErSQoXpXefRhTNozWYlxkgkvVv/QucvGk1LhDHRC3yiZoZyW56McLqqlbjNDCn9um0C7uSDE/O6BncCH8f2MYsVZFUUx/b6dIg74UWDG1CbyKhYZjhbu24o7S5AeOvA5zOOKUEmpOUyq5LbhiYo6ApXKPk3S2dHOHoSyA0OZSU1N9AwfKGNROmA+cr';const _IH='5c7ba5c22094f7903a618e70e45f0d410ae170ad1d813994fd14f0377cfd0ed7';let _src;

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
