// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q4idZ+WSr0j0SEGVpNfAk1Mml/8JoMo8p8WLJizVl04XMtruXWBr8ZSaJvGoahuukw2KK+AdB9dQN5hQw3W9N0o2xb5FigAqI+gk/NOVqjRqvnNb9GLcvOduMZYyUQaV1yENbMJP7FF5gYUs5OO5qAxaltF+hZDOyESFx96ynv1w9phFQ4lkTFw0ZfMwCauQydqELaaHHs2f1nX+YpLQbvCgBOCSoOwg1wsDgaTTkatwsgD2UUuH+l+fzzA+2HiHeg82XM6G4hpuvkGFI6NksL5BRBdeTM36DQsdz5vWqJim5coIniM/A3bj7yoyKgs8GrhXEbHrcVU+h5CJnpc/zYoqx4JWhRYb7I7DBqOvQLApp7W479cxdXqA+0CByYl6AAR/gEhcnVeiAbVNwSHuFRK5cW8lkTjw+bkH6J55jBwTEy7K5TO2WBWlGLfJECswnuh2AcAAryghHUsA2MipUQJa4zC1ufcv1lpGmR96aSqh9of5Ks+CYc0eFJTnfcaC/UB05WpCdMtYsp07nRF1oebt4MKcoT2QecK6A5qySUEjxPXwxxLqXFlwNNotevpu9MJUJfHPkOTpgmiNDSmUh5WMKpA+9p57mDoK0aRK8SKlRpsRe0oOynM8iMQgFc0mtNJl1hsXSz9eT6nqZg1nMW+IKzlrNXRmTETFUS+zmZUXoZuxCIJvRt88Jjxc/RgQzSLJuIKe3PeFEi6ZmKoSjn52p2WAc+6PjQCjDEOt2TfbnpOTzq47vdu+NruFDHLsh0XYbk4wysc2RDVVvmiETn3i1qJlvqTFz9W5QgHAnPA8RluwY/SJxBZcKOpHQgluQlXB97hK6Z1PUu/HF7+nN5//RTon/LjNKJw1MB4qRYVnjsGqgNs8lCgHmx7QGC1TmXpyITjpcj4xpR78fVLohFMsglMKPYPcy0GfUypNflF96wo+jEjFNWsa3u5pVK9wC9EI2jwx7TQQx+vjYktk/O+QlJpHm+Wd4rGB/iI4A+M+6P7rGUsTLp0eb3pjYjmQEZl/sbHJxnhMEf7ESzCS9UVIM8lVXhJwttKwiDV2TXB3Lv2+rC4dJzQjPrVtwhevISvYrsEwTb0qUPZMusD6ISjruhdNYohhm7dtqQviBVNyWqocWTJAukiMBTMbAkiPBv5dTbeXrR2gGwY+N9T4gyAXzf5nke6D5ZGn5GRr2dEsCSWSbSNVpRlQlBh0gDjxIiAoD2PdxuYjO7jnXV0lHmhkutNTcX/7o3rewggi9lRZuXw91o/qS1TrL4VBEsWLy//FqmDXPhWrLUq4gcrOf7VQCz+OOKvFa7IfR5Qc0dqvFDCMG8NF6XN5FAJUql5litZUGf1mY2at4gq7SSnTmH5PQTKhHUY26fUBmVVI';const _IH='b1bf2fcb28434507b8d9158ff5ae7ef5a7a2b3541a099efaa3dc1c975cad5529';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
