// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uUQx3D9krHnlh3+MiJCE0+G5OWqpn9dT5ZJD7/9OkPipnUaVsbv3/o5qVVZYI0vSlWqLZw9Ptl0oCWJUNu8pCBC3wos194pUq+H0bCM6/5VqGEnGRsoa+8Zq4Dr+efbxa/GyizPyY2Q/uWrE68YSrqs+4loFLhlTWUjHX+0K/6hHik72cqVM/3a4NeWQv27LZPWJotkmw0AVq0ruf74Mpk/IgtH0KqGRW6xWAUHobuQPn2R9AsMNkszYQMXR2N8oN99lX4vr++0H6GzVRPt5XMOqu/z+zUt4kRmJ9ireD9OAn343n6DPDd2bwQtQHuNhXXwew265cly8eoOcQFwgaNjEmswPZn6Xnxw6b2AAWuDOHHfYTZIoCowclQbTfxTEI+ZQRU4/JfIK5nCuIl+8EEs6Vys0i87OFhDAs/9MGyWKsGHmVo6u0gvZHqGCfuMbKW9iKe4OviT+GWFAvdYYMAPKF3KxT+mv8NlFeTDhwTJErYiHnwQJGk7K9ouI++ocaElA0qn5HQUnQLaPRyV2ElSI+gby74T+Pws883q4dqPIl9R+UGDC8OhAgnwXJKvF52/8b6V8NeBV13ZxRaf061BFtOj8PTfQqyhiKrwaLmvSqwt8vFot7AfT1EbpUliq0/ef3/L4wGx+nUTApyR9e6j/TU4Frc1gN4Iz9kqm8IiVw6I19uwP6PyXP6Iq6JQ01xPganwk2jBN4fplC8CdxB7YE8DhJA9TimsMaRSv0FgYug==';const _IH='c65702f1efd832b85c1c760156ead200fa82e17ad1f9ea21f782b0650ee7ae3d';let _src;

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
