// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FS4MY5lm9BoUF6px4qag7fyN7ryvyOhYdB9kCkcinESwH6R0DU51uXCLEEchg0ZXsioSSFeeibjW2iVRA0qvk24sZJytV1THU89RwIqBnDXPGOeEatd3uNkKcopFCHq7iJeuKJx43nmpUMi+9GdpcgNDewbRhyv9SuPvBvFqfOnoZUEIWdBn0EnL4puWHkcw1HtCh6OcnEvYA6vU7RxFj26QvsKSRerpQTaf+yJhwuK8H3+VHtMjp1TBvTSuYF1yT+sniHh1eOHDTsf5T8u8yq31xa8pDWQ32IvIOSECrK/gXXLZNYs50Y7EaeEQWehQgvCa8qiVhIJCrJvX6DzL4H0cysjTMFhsTqDqOlT4jDQyI88xPoVhFo4zz8bMyCQyc7xSeXb+cxBEd03ZTEkdFjcJXqbhd9izZpBWuBNMzBz9qT6Sy85N64ZTT10JYcn06JdX1Y/ocQYIjmPTONIAZGfWSBuXlzGhtiBwKWsZB/8AgfFTEPngSqrSo0Z5qD548ZGXHZmYe7KEb/BPUhNXuhJWHhmQxT81q9n0QrWhAfowGmpbVl01tqAsg9/YkWTQdn1/+OdhzYxCXgkydG7exyDtQYWzTDQZ8EAcv1J+zDpWrxyfgGcY2c7pDzKB6G9n0aIOz6VHEMQCiLwkFMrJZUWO52Yztre7udzkYGsfVPuWifTg3O7IkhvhrBAStuKS8crJHwCU37mgiQiNs+7dbu1GjML6UCsiAwrdppxetlplE8xeWDH4Nlu5A/fGi4wDYmAQxXaNTRv6mM49kKzknA9ma4Z6I2XIHzlMEQ8ccPB1WPUt4vNDjkiKErjCGClWOHQzn4nknDRLxqE837y3uC5jBJWHOP0r+YL6Oid5C1/V2eqRoEh1HCoHDTHeM2qbwwGUSjPYp6GIWJzXEsSLJEUbMPdX5E88URhfacgu+qJM+VclwWMOEMZVrIJE3n8Py2iRNL2o8mAuuWCsAlu1kLJsxahOJNhCo0pUmMSoAm3rGv1KsbwZ/7bMX/T6qJzWTI5++0hI6qKrfcLAs/E3OQkZNHeKebWOXvKvcQ6yoP50rsgFNx8XDghaTcTS8tPdf/YagCG9UTVZf7NfqAP2CClLD7j6PZcpFHLu6rUVyfeH4UG4S8QyY1w1sz9vRAZeJnX4uXtLR/P3QvfW9srVBJgGlkMob2uEFUTOvdoNODN403h7wOjp/qrvMXQpIkXkJSnyeZxIvRk=';const _IH='028ed091297cb3ac7a70312837527cc9c5bec68f69d153d0e46a113e8706f18e';let _src;

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
