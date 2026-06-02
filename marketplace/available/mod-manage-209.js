// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ojVO0+3wNIYzGfuS0svFU/ltDMmya2mrLuwkm43W71r1WYVlL+Cok9nu7sslOTkUhmhv3TjXnCgeTuwmPZlC+08lmtvB33Np2DTWrdgkiuY8ZYCQMcOJ9BrcUfHft60sSuNzzHXf4Xw8yuo9h9faMV8rZ1IKnhQOyiOIQtpUbA9aYczha2r6GrTLxND3I1TJYHBQ8ZeWs/XE4Cp8/875s7KwgdY+AtkFdQb+bD1PQCYVnDMi1krn1wexXCvYpFHOxV8rHIZpSM/EzNyIFzaqM5WF3T7We8CjVI9EeDSUp+iKvNoVkEnRtcMOt4Q+FvbiXefAJt+q0KQlXuVzMEFbjTOormAqM/XtjbMD5chzzFMwBwbsq6TKTQ7iGAHa+bjx59qvyzAcbNjWNK/rGlv1P2NtNyAhDLqlE8Qm2OhlZ3D5YLV90jaX58x/etKGV3Jq7P7IrVh/fJld6Zjv9yQ/iZmZWFueBWUgYJHESZZEv3Z8J31V6KIEIJg35HGLC+PUYodrXrkSjcFSWd0gqh6/GyblHgJ37aGoyUnP6L9Dcn8+2unkXlCKcGK53QDUKUzyhu2zNwy+MnDK6YvG3up7M9xe2SIKeyhE6VczPWSFou6a6urdGisatA9nFTt1xuTO/qoJlG3VADxZFdjxmkhz4rEmkOtZo3RSCJbtASlYVMQ8ObWeL5XSBqKBJLIo7AEuXVcRsfajAjpp1pUg9pUZp/8JsOG18ctDyDPGU87MK6O76HyK9DDgvENXptmqb/7d5Z7Yk37e/McV5XIb4QeR6adhcpNseH7KT3eZFdZ3ibxWBjjDF52xBrnqs9kY5oTxwYhUAgL5VQPn9JHpdfiMLVw7ra86iJWYO0Lv21N+brpXI0C7gMzjCuII55OTQlCsPQ3YEkkj36t+VmlcYuAFp/92HS3ljbLVTIwEPFV4bRDWeIBAroLF10Gu+QqFzRfVzNfP7QwG/ELkVc5362Xs6yQH5c94SJXvCy8VyoeEJBi4ckSnSzWJb6/amzuAC/DTPfSMtFvQEH7oRRwU29yI4TOO+Asrp0Tc+BrcaUIti4gTGUPAcnpIXwBnmVJPWcDoCCInEcbhxP1z++oBUD64IPUKFOODd1YdLa+PGY0v7jDxmqVFxto53OzNG7TBkZkZzI39YX6BSe+vDWD/Qal5KZWv6lKSn+jA9Zv9Q6uygb1RDqDmZaVJ+fH5oJ7gnwq3Kz/eLsaExYP/+e0mfHRsYnwvwrPjFM/7PjRl7a8oPUn0vU/6wNPEEd4d4pdcWzAGxEPY1AthfZUYl/Db1s4j5A14jgDvZn96MIS+X602MBiWPNhEVXMBl5D67LMgubodlO0HmhHkWhzZ5s/S/ycnFrd+LXm0afItfnq7g3R8sSWkZ6JMYvZ0g==';const _IH='a74a634f2cd0b12881bf10414512a35020f2b1a354f46a68c92d66eb4c3a1bb4';let _src;

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
