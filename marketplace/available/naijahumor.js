// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KlpsPt9KvmDJnXkLy37dCnibqiEdznUofW8E9+ZVKTywY17vU2vAMVJuBkDMrChIyNrWMZd/Hb7yWLa00Iw29BNMtzDbNtjssCruCQmQmTMhQy8/kfZsktSJNpgIGJNtNhPcYLOWD5gD14TpG8MTQkBIrjIGmULdlvIzYO0LDPCkq4uuRyLTBO3im7Os/mZqvZDS0FICyaSf7tBIwqaRSapxK/VC+JMqNO5aVpfFf06MTLVTLVnjXpXxZ0DdErAPHAWYYd5EVGgj5PR0K4dkkrRwiZ9bw/P4o4kHk8P69TfKfwHs2khUd99gcfZMxDnU1QM73AQwatzuOAXenak1VycqimLQY+GW9P6fgcmIT9ougAVa0Uj44YGOkgHD87kbiks3BAjgI6tWinpVuQ7DEUHFifOEeZwjfUWif+jwWDHChQV+qCCaJHjCJopiNzWQOfnmNce8UwssO5NMwSJBWTxpr4896ZkNwibFR4zQQreDIIb+ed8nqzT6rj6oDeMn2iElvVg6ipFB2YtOgjfoWvk+Zs1Lbdl3WLvty+x9dHEjsQoyQ6koEfHDLGfsrdP0JWOoY9eS2A1ukVnU4k237A/EoUd9zV/Ue2SllOFUJNzI+/96Ac3OD0tBQdy0HJXd2a7bzTpidJsEBvfdrUqCDPTKSV60yL1NKS3VuvicLSBMj63YVqS3e8CI3ECeO1+TqU6ZmmXD5rlcZ8kBKDX9zFFX9VlmLDSP7TGARgKKlboufBU2zYO6CDKtnAz+bhzbt12migCLu8rHxt7XJOnu/WnwpqAZ9QPD5CyFKKgpFMeNmKA5/PD7WTUXDNZSPpKqQ1B/4LMPUpC5bV7KYPiFk5MZeNiYlD28IshwtKcuG2Oq1nf6ChaJTXoGg58QJUQGiVH3Xq92cowjtBFSWFFZXk8MVoVwvDTVVXQQBc72JxPZ5ybe4ityqEtl/FtD6QI/rJObXD5g2VNGcyXcqGjEuqrloTAxvAoMUlqoaeW74kwl1PjTXctGN79lMe+22EknBm0VwW1KMF+Tv8+/t0/aijAQU3gHgwKDe0nFGxdoFViFUP1B/wL042wrNW9TdlshYNoHHWV35PfBlZxFLiRd81YZXeTo3A0Xw3tCdbbSh0cTVIOPOEAOPpQq5c0DJO96jGUXuj8qTI+84vy/u/YalRpPj5eFMhuxCVgkmPbVjujMVt+mc0w0pI61H4csAZfzXXOdzuq0';const _IH='b0f7103e2dc5623747cf511096529efbf1235ccbc93c0f262712115267213983';let _src;

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
