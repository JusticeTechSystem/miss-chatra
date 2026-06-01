// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0hf/h0Z0YP3CJKcUB6JVjDW4G6VKGnDyRKgU6fmgkiqqNmSC0/YiKcSlZnKKfXQoQjHpGPo4hfTEAGWuq/tBtx+kNWfEcg7BZejKYTw8j2YW4GoTZHqGH3uFtRfUqIGCDRYN/g4F77GNdTnodqoPLTLIDN36ndioyJN7PvOuO3P6lIciS7zw2CjJCtg1o+/LYJjcgsIUzbsWfLESZut/PcSdy0k5Fx+eIcj1jrC/5jsmJ0tmAMB69lm1FilRJlQKo14gQ+km7Ijcbj7YwKKjM4wxVtd40HXbDBDh7d2i5HmV/Z7bU+d+crLsqyTMa59JM/RmZdjmNiODjKTZVY9ers38LRSGtamCxTrmFzEicaGI771LXjJrzu4pmchO7WqbGxelNygbyJjMaDLJG3Eu9Damn4Vbf3UdS6KPVxBm0ETedjK0ARQ9FyQFYMhEM0PT+D1s0PZU3eX90HXigqkLOy5qcySYfbw8cOlUR16tBQuQG/QRvcsVmBcKWRNo+iXGc2dLCMYReXYpf0UXv+OyjHpv8eFOtKGjAJ2ip4RDYgKFyFJaTpiUv/9AArvrhg5exrrxii2UO+Vdly1ePnYMa21qglYYyc54wkLYxSSXruQ01pGaN9DBoGHjWDnL9SF/NWvCegb7T4OcK3o67ivbOfVFGOdh8yGDuxanNZLSAca/Q==';const _IH='0a1d3721c642c665d045e2f7f4865385e44ff3477df940d0cdb151a677aa9cc4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
