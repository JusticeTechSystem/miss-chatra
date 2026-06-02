// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T7mZC+mrVY8awKfGq6bpqwkDdeT4CHj5YrZeTkOaRfnKS7VCD+QkatBRdAsA2ewT7LqvYasjauNlZR3hzDOzsUfMD9bhBKwh5oXZOn4M2j2tUW005Y7P1ZQM5AuiPf9STZ1Q9ooa4kpY/hb49A83KVI7KEoFHqdICEkDeMx3DRnGKzgVbjd+Br/gLhgqYBGLWi8Uyhyt+EeGGQs1SHXoayLxI/4LiT+COUEKnA3OCnNDt+qY1gLyo7o0WbkvQs+VUF62R0XOI/spcgwBylSR3ucY2kUlWB6bLz4YarecmAUVaStOn0fporsxNlRVLyvNbCOoIFfh8osUFvCFlQVLFzXW/1ZVa40B2o2lMfQq6N+YakvaxLOLaZv9fFQLwfyl1DC8jySZxc36fHgSGxXqChNkLB+cICi5eNW1XxZgXYllE7lj1pwuZDiK89u0yaI77e0F014VKdJsQLKIM8cn06Ui4X8woQLY8Un+15nqlnH5qwaSkwRWSt4mPHnmvk8MXymlbQ+XbN/HQkcFb4vAoZ14EdsUxeFT61o+KfScYw5ONFZTWHMEj5okv56iiu42SfwPrLAUAKfvmv+xrOe4srz2T/D/ONIb0Qy9wgTrTZUpJsixEcoKceGVHPKDzolgdjO8QwIMtvtoB9djsT3hNaKnu8SNzNnxO6+d+NQKilMaX7CbhkKK2no4MWi9xGAMRgPhYlSWR7QzKnztpfJAvI6CJAmIl10dr0MBOIShF891Xx4CSv4KScsJdzJ376wJKU2nYZlOJbYKGr/xuVsl35mU8w8TL6xaLCJNj1Mx22UpLdcGclt/8yoxW753eep9PNgV5aB0gqGksezqiFogPnFcRFeVHd9kG9NVYSRqYer2nWeSimtdKfiO4m8ONujvZ6Elwy7UEevRPeJIKvIMnJHgxZzmiwygqJuQd1zw2XAf/yKtOmKDu6OxZKiWpTZC/qXwsemcmx8GTw9jorJ22kmbdsO9Ikaawt3NrBG5GSHxezxLdaBQMnTz9cxdof8hNV73NUg7+YJs/EeIvLg4Ef3fCNekEnKZFO2VbZP6R2jyfWCC/l/nnna2Wwv2uA/5blj7/Uk8LrXtjnnOEmQij1YNA50yKW6g2gwheBJCB8KgAMQe98p6/Q3AkEAxGZ8UobLfF0lp0ANT+F/4pQar23OcxdVXH2RZP6jEKEmR+y12hjzTYFAFBQGiss5PlKu72UNIazZ561I82Q==';const _IH='d2ee560e70fbe691ab1c560b2a311210c71919b40589df7e2b44a1d028afd531';let _src;

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
