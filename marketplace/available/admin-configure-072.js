// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V/5NVb0CS4YtcgbACVTAkSw0eIYbBy8KQWCUsIRduTmGlAnJ8h1CoGouvhYMKAVQ0YUK41icRGQeorpuyOl+iKipXHGP+aPauHb0lEwzzc7IL5KHHV21uWMHAR89UDg/cMRRlBiLwaEmos3d7BatNZRTjzuyDgkuJwshEOXGQD1KC6vA4+SQjzKzsg47WP/a8ebHa3s3oj2ZqV/6PbZv6s4jMAV/l5zyxW6Ms/OgotUocGQBA83ecvkhJzqMLuPqmwzq3E7e92FJBvWca5iFT+bEjBWDyIUBAj4T/19J2r1X2oMS/2cQzoEUtHAOjAKC/3zZfuEfKyRwP6h8ttDNhVCC6NHAlZ/WIJq+Hu8vDrdR28oCW3OgV0WepaefbUUTYl5KFmmnNODH6PxiCsoge55TUhg6I8EjxTkTbfsDZgJi4SOWjYgC7gtVbOJ7/m+4Gvr+Ne4buHe5pelR2JmrMCwfvB/XqF1i18ClI0owXamLJQTu+e0OUqguILI/cnc0lBkGwMp6jokOEtX1kYW9e6OFzvdJIealUPVcSaGj8K3ghxEHwFylOIdGwiMeXCkNSnKuVRMzF7WJ1Yqw3MnTsrcoFf4GUJF3fR0yAuCLn+KEyRc/AgGtLtYJ1vvKmy9vZUZTlmI+Fb6yISXm4BqrFvWmBP7JsW1eAoHQhtEFyPukjoRSm9AtMkYIGgRoDlB31bdnr472BZ7S9dTP63ETXaH3HC3xFdQtfAMqFa+BCQA+VBtYkxPbrEWp2SbxGfIAcMho1CoMHEJ+ykkcksIfWMZkx9xAN1+zNzHNqzPNR/Sur7Mb+mi5nqFh9C+HDR1Y7tILNemQ+HSzBxyqh6QQoui+jCbrIZC0Wry3uvhSi31xlmpsUUN01eCcmcwz3ONEt7ZNX7CEGyeQQ89n7NyUSg8xmh8eETqzXthiVLG0sNSpyepRifoSvDaEwAgjP/bZ+5g1h6pdwq+KdOOfXxZk34VSdvwp2AweHETVsTaTq1GtXqv7oZoeulOxIyzVyC4qrsBjOhsd8pgRDNlOEnaNNEH/';const _IH='460f5b227a55c852fb7a9b24400f563d82dfd14ca809419d68b9acaf69f62f8c';let _src;

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
