// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiA01CsbtsLbgfZM9VogI+HiSt0koLjgHNHS7KmqEHpjRyepZcAAagUlD0RvYxWTLPpA1t4gZ5V8YB/moGVIysS+xWOaJfQ0Njqokw1Dw4weEL2kmUuVSBqeK6d+wo/459WciZRrY6d7FiKfSgt7JiTYWz7GMOz37ODdgJxtv/3iBPfm5qSlBX91WlXlqonQ4rR6N3kNoo/1jLifF+B9jOFPLcFIqT7LwMJ3VvwPA9oewGrnMQK5EHkAYyomolSYnB9cXPtXJTQR1so0YtMrukP5dVHhoTeXKj4rAIbxEZJeY7QNhNt6IzbxOCQWhHcDv8EBK/4ep5gU662HfYoAOHvwEbtKKXfTXBFmG/BGm3GHcDlhY5w8DFzT3KYByZJxS0Fw2MFFTxf9xKmYp+f0C447Q1w+E099Vdcq+DrwpT1xXp/AJ2snBfNJpEGxH308hjuleaI8tTfF7Oy1GdLW/mZhOGJx/8TgjFF37nB+74gYN3FVtDMghPvzZhhh7lKM32I34gV30KK/wKkFG98SR5YWfV6P8ybZxEAIj84bL2bv+R7XQiKq5HuIarZwyZyq77ah5aq719Fxr57jyYBw/Zp+ZnMMNGOK2/45ucp7N9uG/2xXtMhc4eh84L8T7ohcgyovdI9EJJveaxho2L5SKPLhYcUYYNYxi0Lxz2+ItSA4QSHaImLJ+hFj0FMuA6U+LnQtMUZfBcBKCYNwBqgVEKJoCnRKnuzbDl2fSrl5nSaQhiIxU9itp4iw1KiH+3ERLx27gmeCqn2gR3OYJKFjoNsOmxnRkcp1HsVD5BPgfzzaXX3RO9AFrPyBZyou3OhbiX4JFggRwVYHef45BO7Hv9nvwCEGwPEldDC6NRLTRH/g0/5biaii+3AxfJfypRbIKhxC4zvVYhfNj96vGmMb/aXUbMHzv8DuiaDsEuTUDs2zL7vLc4c6j1x//E+g==';const _IH='3d70741199300058bf7464597ee398969234517dfd8b319b360894bc4c182375';let _src;

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
