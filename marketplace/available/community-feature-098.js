// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rga3AJ4Uk3fcXjrKyWSKflTYcZeDsyr2ZJ5+MRMapvGFgrqErMA6qbO2sOWTksAXlrjr7D7GttntA0Ccg4APvkZxTmcvUva71/hUhMwFdbtiCZUGHk/+fqsAIujQNRtyxTmG5tcyG8LcBfFzZ5hdUPGu2N90iyt0Q+hwkKMGKgtLh+Li1z55muej+EqdZdgYWz9BAvCx6fyWxuA+h//Mz7IqncKv8iNJlc7palMPoBllmAVrijDPVP/mKldn7p6yaGotQzf0GRsr2sAaNMbvW53URmywjxR2GUDjEOeUDwJN6HGz8Xm2cVUO4Jcp6kNB4fdT5IOULeaAur+2vqL6HYjfhj09cyALIDY2/7sL6ssetuR8uBZ9tV3gp4g7SQSy+1EDrwe1Kcim5WS9unCe8MiTIjkIfiEKeO986b4iqEHi93iDMYQppZxp58gHxHMjR4gw5alDh2C572/hK6LGWzK40fnmVIJt5CtsqoAVz7f/CrcNh4jPpRdTJxAQJUAOjIH60nkNxmVGFUsUeq0v3J9MUQnDZPcN/INFLg4wOinaobtTjqC4qBhAVDQYAOXy+TjOzIAUzanoICdqQRXAPiim8Sycr7sq0QAVTbRyTpfmrUUvJwJgwp6pAEjgBpd/G5Nnh4fbL3Sr4QHt/iux1OvvmAvIxSaRtrAtXPUCfTXHn5Jrmfb3V5GMoy3/kXTvYlZJVq1aC5dINTtyxG0huqXC0b42il3X2Q==';const _IH='c7b6d6c8bd77bdb0d620c8c98bb3815fd7baf0ea3bc0302487346773767ed9de';let _src;

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
