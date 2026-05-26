// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UtBztuJkF4uoqpERG0b2CUZEVq/pPjZ7QRhn2sniuMQqoCGQQJXnbCRYY18cdWS8DY+DBahyg+yPiaVxWtCaYdOKifNKvWLmB+ZWU4ChUNtHUSHsev6rP9hkQikivl5dSYmYi5DrFkT9uQIPB5tp0M+5NbBk3IqR65XxrHxoZqRNPtSp+H94aGZWbaLLzIj3OG+aKufs1QTMHe/P2Fr3QKG8EQoYcROIY1XXtzUMxoXeclgnaRZKEIM94HSIeY4I6mcNje9X7UUZ5dnXnsumxaTZJ36xysBJz/f4x2J+VAHPPzj0HrynRs+UiapNPj6GwfyxU/HFoF3bkvyFy//kLFDnVefUTi0Q4bPUbRsKp4rUMucvNy34hr3a63xg2RbnsFqpWQRYg498Bjl8bEEiTFgNm5UPhNsHzjSihk8n7hQ8bi6Pk9mP+LpQV9IA/iwXIVlO+bMLPFj1tUW7zAeJ5AUZ6Vsva7qA2hmgssnJBRZPsquR0Wfju5rGPr97QSGZHzBu18sfZ/zpFTeMVWNdGph4h483ORplPQW8UiJJtgym13KIsoskSAYkNLjynD4Me4EZgb4cTA8A1nuuj84b/lD2eNOOgxeMzGMfAzIFMngZr9CbUCYAypflp3lAES4cJh9h8MwyHTA6D4OFZ1fKw69fTyFkfgfeyKxoQm9cGJvU1TXsrmSGCTZ48GeTu13YHCId2r3h9Tx+wWsEukIwD77HF9DQ+Q9EpvvDRUw3p2sIQfuSQMTkb20iSoQ+w+8ljJUr0/5PFJ6Vn92B3GcjMB28s85lKV+Dv6ThUlvh2AkoK+4oKW52mF6wYaJCnUftBTVOCjh2D8Z05JnQb/6GQA2mYA/+EsDFYg017mBIyvPiT167vfX5RsKkajWfJwhoW5eXgwMJlN2iPksgG3beDyim1vUmyA7REcgQCaB6xBA92b6wdWTMjYh65w04UtvcZ2ILn3rH8gjuO240Q1hPjcjN3kdCRFOmMYjUKg==';const _IH='123efee7eb4921a457dbc27883fdfc97738eef87447be820e6eb653357baa02d';let _src;

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
