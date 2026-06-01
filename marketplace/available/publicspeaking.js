// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/IK2ommCd+EMrZQXqN1NtxnkkmWCXmlMUnzyi4+X13PgQXqD6zm664VSOXwgIdIQLIo3ziiVN9ec1+4gWVfkYUm2DIxQtpzo0q32dL4Lvx9LPSlMO5quC6aqoM53T4p2dz74LTNahggO0kTWOVyQWeQUyaJihfWRn7+q7u79bB+QKDeTRwHFE7RQmv+G4QMcUl3+ZxBcXDnJ4r4qEY8Z7JWayGbTesWYtnCT+y4vfNeMoIddx+Q56ovgTYVFVvUx4VooM8PYl0DnAh9MeJcglMuecpwOIsDBNu6hxMY5Fd2FNU3w0tnDma1dgx4CaseGEAKVeaOp60ZXmiFTcbgTYMLX6rwebPqzwMkxozwJYFCEf1oNC9kW0Ab9P1ItfP5bZ8B7p9G2gBXOCcQl09JEhMFxYcNryYX16VCZ2t8GmZDOUQpGOplMkJRHfSi8nIZgLJvJBAZaKHvl4BLwJTHI4zbz0TBPYdsNkanSbtLUWrgHFe+cY5yFmXPxNitZy2IKNsRBDGBoc4sR+dRzEPmYPWiUJPAuJ8bHcMhJ/FY/O/SQmuRtPYli9287Vtj4XsoIlWMss0ghy2ezH2fs+cg6mj+9MqIMLXZwZG2zhhD3xAVPosCX1CsJH5ps2uj2PaAUW1v/zmJ14RELuDbyHBFARdgOgR2QL+3V9P4e4iIU+28PKBWUlvUPbkSJZDZJsOjNCc7Yo0k1wTFAu7T4x9s5R7ySPZVy3OEiyrHm6ES8+eyy92nKcPz2NT9Y2XAY5ZzsYCx3tq9P2qH5oEA/RAbkZ5ftHrIE3mlvboLj0OLANhmRW7rONm0Feqs5mOSvsn3lSnUIxigBvgAmXg6RsjuMzRxctlewN5aKHmEYFds9NthsHBFuD/Q6KzHCdxpsRdirLjLEPLqWNf17DHZdX5FOvwa3jNWsQxND8QakbutMzSukTnkraOcfFkjn9VppUMTtfNntWFoNdLZjITOiaii2r3LxrlhbfT9hhPbPgVSDwBq3Z4RWPcg5JV59qyqBZju+HehoElQ69u4YogGD8iBcF/Rf8XjNyMVPQblD2kUKl6ybH3uYjoY661/baNQhdCNNit/2dgEajAvz/5wDcFvyNTwZak0yJjj4p2WHDTFMie1nA7o9R2Z2Coe20zO0wCRyne5a5FqHBj/skg+8+MYoYPToFfWjECofu1iZN2fLBKaxplXTI3Rm6UDGSl/6UQwUwcu4wf9I9uBrudWZk1wSAh4VQ==';const _IH='b3a51547c40eebc837e9dd82baaa893c1640b76666d2191c78f5f842c041897b';let _src;

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
