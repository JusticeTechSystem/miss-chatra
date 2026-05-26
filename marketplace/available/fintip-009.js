// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zy9BoWciegCuonkJpFRbBtqoMXdBLrgrPN+hLPd3zeAIbYslt4FnbVNzFT6oyKVlLhPPLmv038+mrc0O0ZiBVBtUPpA0pAD0xfAiDEy7ZN7pdOBuyjYzJweMguw+hCdqQkVFYH/63MhPdG1hD9mktHLF6JHZIDv2tU+hx/6zMG/yIfcVPsYVcABAtj59ROnzp/Bl7LkneNC99dr6wJwUYR/R4dnnpjRpoE+wBcf/BL+xJ/bofd5DSFLd/EcaZfd8z9mxmUHCAz8RFIqZwRPnjHbTngdlJGNa/vpFHZNsNCa+g/TlKGAK5RjaKP/yB0xSWjh2aVT71W/1/6YIZ1bDtOKAVRx/bFvHFlVx5/6mEiiifmcqb4HgFcwPWjIZFD0vXGlMwyINI+xTpV3RNQATqa8iiiFmlrG/IQqlt95ElR2p7ya2LpvUJOvSM25FehqrqI5zd7hw2/+JN9XVgCLBilPE88q25/4Sj1fBkSK76RzIaVHX0TJk5roY01W5dAQuWifWavZVu0hBaJKiWuJe1NViVwsxRJdrPMeB0hrPEzupwfWSi2fRsTZV8xKDeNXKu9HJO4rHz0E/h/vookZjqLMAeXG1Yn5wDPZiSRqI7ChayicAKJLCrmuzoxfVaFRDBG34rvL0csOjqVqO5tzegONkgs1JiBDHaj1RjlP5p32p1QGjRwccDmiDZrH9GP6C1NAfdS+xPODwtoIPiUG94d9/zu9ww1IEGTljclI/LuBlIhDg9kT8aQCwHVG8ulIf1j1qBc9S+yIZ7t0QfTUbtELfZo4T+gVt8kYwjg/KDYje8yBMg8oYt9u75lr5arkEekhIqSlakZqg75J8eFi5BoDaymN3JcLmsbf67FGb7tvH56NGSMmqtBQf0y8yevtURD0AApTR0SW2wvN2aQ0cTyw8CxFAOmevHGKAtd7GULf4aednG2/zDL6PshfAK+Sseu2CHAY63G3GttKy7JcipaXMKfHOoz2F83z1abSgICXGNXyBOubzhnX9WzjpKZK6N35kP3TuQGK3WPTFnygzLKhihQVGS4KrDHx/tcP5';const _IH='8f8b7bfbf36238be286e97ba2b1f7946c50303c6a9a95a1e1bcd859e7cc444b3';let _src;

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
