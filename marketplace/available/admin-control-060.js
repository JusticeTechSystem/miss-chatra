// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQb0iMgEZTWYMwuqfFqY9h5WAJXf5u6aMkjwu1EPNbKa9h+A5fFexP5epClXnFNsw9SeQPZpQkiG2qLn4AKx8QAqvscPcvDvYvGV0lmmVtau/kLf3Vwalp9fQeT1eP+o9MtcT/uAH7TWtaNy/kEq4j5wuHCdcmV63UUr0pWJjxcYAu//KSXcD/iX3W9z/P9d7MZDR5HK8toPB04o5BbfWfVzLFqUtGxge2y1uuDZx4rPPYqTZl+SQb3TmHrTlZa5lOPOT17kmduWX3MahZp53QNZMZfLAs79LgB5lUFKuFWeQdbKwD3clqPGd4zBv5r4GoupkBMczHwvFrX2WCD9Oem8F1KMC9wcPcGDRHLxckau9LGhxGD0iVBVLHjZZhOTk1tO+ndPynyPizEtF88oyfDXJRr4vvComGRHOZtjGX+0tRiSWsz+3fq7sQjqIwpY7gr+Uxd0jtUuODkDgDibAi90HzwERvgLSUtEldYzFVLnARs02wN36FEBRUd5xwN9+1N7trnC4P3PCXhsE5lf2DMjveybmkI/7/mjBc7tL3P4OiNyPC9Z6ncL/1DMkBOkeaGG4zPYG232oxBHl9BdRUs0Ev/f7LOzEUDhBT+Slv3CWm8B+sFX/niVE8RiS5rNMsLHA6SHpiFIw9g08xMNV9hRkxdI9kVoE8OevABvu4rGz+TlQaqnTkZSqc4A/LAbtOaHZcLAjkR/zaLy318HOu5459uFkQdCtZj46az6HuMSByae0rRX6jGklQvyhJhIw/md1pjrqXeId5BvvLk6ItRQEfcjeHm7/8a1jXjhmFWoaiXOQyDTJRIqKGRXChZmjZ4dO+6D5q2ixoBedDXqne1Ux5INW0aGtICx+Q5DSc0wq/CCG5NDokjV6EOfc843IXxmSYiG3Rkzy8PrZxYJvu0OIkGQx4gIeLgsTOtSh8UbPYtza7Vndc+s7/nwv6uwwmO98rzMWXxhGQebhD+FLI8yQIweZxzGhM7cTU8Nw2Wuc+IFn81dFrsyW+rOoWRo8Hz8+pQ';const _IH='2ef7a60421ca544b43650f317e85cf08771f5856935cb79da63146145c2db501';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
