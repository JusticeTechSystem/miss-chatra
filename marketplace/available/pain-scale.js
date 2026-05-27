// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gnnY4Uk97qEg24OeF66LaZpYRZKWAP0aFd2+VQCHxcvXlMqL/pzmNGg98wqNAfMyv4Ocgs3soyo3V2htLVegnfqHN2KjW1pc+LgX6zjOaoE1zquIjTBbCU+4RrF91shhky7V49fJFiKndITNn0KxeDoM1m/Lfv8FoRjkq+Mk3HPXJKOhoQ2unRnfvruADn7PhUAL1P0Nb/MgMG2bqWZNw7T6JQrhmnkbkBsFFTYAuHeq6gQDkj17Ni33Jj64lehJT7gzfPDpzP6WcyPOahIkwcDcVFsQzHxqUEO4uv0+LzXeiw+N2s5FJz0lLuRQxsThe1N3XHgaNTHxiMXcFEwbftAUSC5u2VIwS4a5qrPZtAOuFvIohUl/UYg8HsdsCoj2rhDDxm2nauE0orxgucI10MnwkD3abyJXOpjM6XLZrcMABvrX4VpVdZHkZQwCMhfW+FY4RGP7I/OB5yf8/n/bjj96Q+xu5KAsPMaMcxARLsDXlk0p62Jl2Rx77lCkMk5MLct4TnIvkQUoaDVIZFhybJWKTVquoN1nnMzaXQZ6XeEX1Q5t0ucLi/nHxV532aL/EayFRoqjzBd2nAs3pmGKphDV7PF00OUXRgNCIVMkwJJZV1NhkAuLCmbDG3N/8vHRxmDfG7Kz8P5/ZzrBr5KsMdFY5e9IKecETe9052KZjBYXea6yqIRrpHT8LyK1FNou5J3RsVd1eDcSMvqFGJoUz2ODfYLBJ6GFZaKzMD4ZJt40TMBlvBZ7plG0cIJS8fTK9KbajPWf6Z2Iz8cAO2msyA1CUTNDLf77Fp7ycqhT9v5vQKDn3aRG6wzNi/N0xL1qewY9aL6ggZpvv0XtnnoMgZYvD8qXAohHt8d0nz6X5eNAcUHhPyvBbnzaDo65+qz9TmvxwvbRkwGjqAKFytfFWHH1gHU534lA4z3Rb0hpxC/FHduMqcpUTSPx5DfoAC10Pjla/KUR1wxZX3Ea+iklZn5TiUaqqtv7EslHWSveCmJDYy8EdoFO3gO7mGKk5SAcECtWrQCnysZ1IreXh3TpGsy0XCd3wdatB+pRYq7Rs5ZhX8024ktumRL+B9kp6+HR5+opblowSYmEG2jTjXFbWbqeEZq80bxTiMUwp71twXoHApGGz3/NYIWZMdQerNAp7hqBkoJrmwNFXxGP5wRpJIzzkf0y99J3vEnCTeatKqdPWuF5rqnHpHTd8ESSVxltc4cuK71r9dR8jyvm0gpCART3qpAeB68sNvK4bpJ+72tppd5UHwE9X613D/OU+4ESzuEo/7ctEUAkpmzlwBkDtsX4KX5tZX+f2ViB+oJGZHuSLIKGDSUFOjsiYB2B9veeTl7fNNxIlMhYcg0hWeK9w1Tjf59vNPCX8DgXiBoMuY+oARl/TdCvMUYZVaHhc3mHcyYaEUxReRzTktPNtLtyNS9yomIiw1pT1jDSa+XzoToYxnCG+zQy3XTaSLH2xItUZmpOM0ecPKHfLP6GkuinlY7qe94/MX3bUeEiK65Le0UmbebEvqefbm+K1TGsNPjPq/EN44f5bsfP11ILjCS7HKIp2HgcLar+ElYMItePtINQ2ySbXKxz6n/lcRDTpHhKrdAPwda0ZGobif8CcHO4O5TlOCimaT9A1CPhYZia2NferyilkxOweJo5Go4CNBSxGkao+14ehT6O9HwZMNNngVfeJTcBy4nHD353i3R0PLidqLU=';const _IH='afb96cef0a94680ff857058b6d749ba0144b6fee5417f0769a0ae5611671d3d0';let _src;

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
