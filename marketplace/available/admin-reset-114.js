// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bk2ln+tFEqu+zlUMBdXW9+rERjFafKVzxKSzZ7gHSGqFxN+whzWUL4abv6xfXgVQyDgRMBNbxquht7vmhB3fdBvVgFlGCA5cG4rxYFgQsts0Ni/2XgKnMfGw8luVmN5RcLIavF0gMdYw/G3RXgPTzvaqhXWk8yBVP/FsrJ0rFokSO1nvq4a1oFJ/6Hp4uNKxURjrZTlsUFPMXyVa8J/xnRqIm3ACo+CwgLqLw8o3Y/St4t04PJOyRnHS+xV4vZlgwPgu6o+frDTmOlqpyq5pK84zBEoJYm9uKatbzvh5zfc7tqnGh7a8m8OVHUpXrMy62lOV45TEmG31RulfWwd8ucfUvAJLKvtF0ASg7hMCCj9DjndZUeVHDIl/WqegnILrzC+VbPZmzz+lDGgKAWJLXjA0jeVzWjTw8O/0r0W1LxJgOUx0FdMBLPmTXegYCaDBJmtHo8nKP8A7dGQiZ5D/cqSQjRjcqgcYipCt3Y22sCcMK1P8x/eqYIBCLddEpZ14DNTN7L+FXXqNo7oxP21aKfLSKhWxhoiG6i2reZ5GS10bA4vqjWJAmzQexHeFcDq+RODmWy6z9HmD6Hc/MZKgel2dnbRkp0/DpO1Lrs167TQe3EQcW8dyaCChy5FxCIuWsS3/bOc/0oipyXBhun0k+VVEiG0uf/TNCpFlovce/S+3bPosrM6xK6SidXZpFbHMvzcap+4XMtoKJw87OXy9jQ+zcAZb6T5/1PWMR94PdwrwxLYemCvY4KWJ7X5kOgQZqJrEzpV5QZ23WjqCZ9bWsQdfCeojXxasTuxH8TDIiVGwftuDdVM/aNVZOD45tdf/lxSO5w+9uDSIr+bO2yGiqSxb7LaS2z+vCkIs3FQZzjJaPiAf2UJnYbvdHPIww29j7mvdyyWKbbtSRH49opJjv6CAOqC4C0xZEIHWqZmFgs6MF7NGFONxDCNosEP83KGb7TnRAENDSStLHFJH104dz1P6wl8++14tq5oQ0ioFFvv5dY3Z8xaTxQRm';const _IH='457f181be5369efb66941fbb2c9d7196746ae628b89247557430ac9acfa886d9';let _src;

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
