// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SHx7HZJXwnJCU3UVFYys6D4PdfkC7sx8SZCp1YiU/WVuJbcJQhlfWpPXuY5YaCoYad3Ags3mH5a29fyb0Q5kA8vfWqDyt2YFN/KPh6xlAJ7QEoBYxP3SZz1+Ebi0MbpVB+NJfG1qhMXfg+A7Ks/54JeguaXt/FnvzOH68P/QvMDQZ56H1IDaVnMF5XVMfSxVY3aOTVVMXz8+yvY7WI/qOQwjXsgHJQVuwfe/2YmUy+ZOYEZSSIxejrcOtReFPvmuEn52u8396kYyUWG1Gpre0gkwPE/VQvAsnlgpUxshsGk5VNTImdbmu7uSunsq4QVg2Ve72o4CKwmgq7LOoZMUkkMZSlUUlajr+emLVW7oKymE/UpTN4QcypLN5K6+8/g28MKb9N821iSNfyEzTB0qUinL1Fxl6Ix7LkgHONbrurOGqI+SNf+iD4Cc33bQynWIYPaUw/oTnbb6eRQBX5k9yURRvQuEW1J5crY6MvWrj4ekUsC19A0M20hfDuF2wK5idFoPc8/fZCmQYlfntRjkcZoko9leJ4i8tAip12BJVve0xnY5bu9d7frgDHvlwJm+gnUdmjk36o7b0KnqIBJ27sv4dXqqx5rQDY3QCbQtIL3BcY3MiU4lAmquvMXdd0hAZbHKsscuLtMBOMZzEF8lO6RGZwDWv7qyv/v1S3DbzKxmpr1LxQSRrNOkV4xzVCyjKruyrJ3ERNrmQRlA6HuJ4QVAW7s911EpgU1I/7idp7yLgY6Rw9zx020go5urPqLs75nCpdaGmkTtBDxEU60qA/kWsoIgUq4ZZpyy/N5V7ycqWo+TEy395Ki8ySW3FPuL+ya4Gf9/PFdmNxYxIXzVJ0cix2k2NPPigxu5O5WNHysxp3xuoPy34rxqPWWCeNf9H1F+6awgGG7LdUy2KCURWO4GG4lz5Zs9khrWH8zbGNa7zO/rXlQfEbKvOlN3WV72JPd2qd+e0QMQ8IkXGe3+BhQKksXSy81d4sTm6eK16CYU0INs4duK/UExduOw2+CN+1Vy3DpxH+gcxs7mcHQtRoiP8V4jTFBWC4+6Ei7ZAhVdN36R7pr3L0h3ZYftMe2RoCk54IbPO+OWYiqe/kWd4iN+3pdE6ScstERCLhOpKeLnf+W4to8rrQq+hpyNyzGZVZ6JeSLhS1JOwowySfK9chdVtWzHOdpCxxkeGZ3muog06BjaMYw4szXUimOgwlBMVE8y7URS6/N9At0b8dw95pjK2TVdzX+AvtXvd6tSivFuVzR3wm+yVHZOMUEKjfELv16Tt0+T+GEw4MRWu2yfBeAv8grRZcJxxN5O8BEm6eNOIiQXYsQAWrfrJjuRv5+jj0uG5n/bYGl9UQ==';const _IH='bac4f58863ef39f9b408e3501db13a49db94366b0b7fb401276495aae2404ee6';let _src;

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
