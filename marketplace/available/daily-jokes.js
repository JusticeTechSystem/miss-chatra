// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gSYf8+RYoU1SmDCk/BihA79eruIxct4NBnq8i3Z7lHGM6pkj+ht6JYu7vHyqyuPyIL97H0xJ6S88HRSbb843Y+uA9BeaKaXYklp0TaWDWqqqSJsSjx+DzR6j9C5V88SaEuZqbTugBgGzebgC+SaMMX64lWC8neOSCCsnK+D7k0uISHVVboAg6aJXLdyRJBTBn9O4Q02HtTUCUaFLfqx5eDJsLIxcpg0IvOdAZrF5Mvpo+nPKB+xvKOhORIPqFs9mgVGMpHVaLYk1JWgy0Jkh3P2uOPMznJxWFye4uOBCf/8/BGzbNgRKKzV0wTgZ3krfNNWNXFTs+i+fxqyrVYhi/GKMvpLzVw/E9kyLJGxoVnvgZbc+CNNmDf4GSJ7OT5urfFAnb+KTq/+v/WPi1eL0dxdaOgH1y7GrooZF2NzWNi0YEEpFYjbjWpRByjy5QR+8UaRiDZRK6dLvddg6iXvQJKZxibwHi5VnFBHcImbzWyf/lEOGrBaTap5xZCpHUI56fTwod5ZnvgvBr8f9/zuW881AT8OZaoe7rxU4rUz03q7TKaKlNjZtFStzxz4XEYqjWkMBUXvY0H0ewBwrG8xZFrRvA041Jd1GMgb7po+YQvFgIC2lmqMurgfHeyYIujMAIQpRo+WbkspD3YWKizxKaH2vjWcAKoRiYbtHvTXl8nZJOoaWdosjnw9pMs2k34EvjouwiTOjAkmeiRI2R5qicgSUG8q6PNkWNfmlUWsmfVwn6H4EhmdFd3ct33cHm0XFjLx6riagketUgWyNBKDCMiXP9kgRAGRXcVPy/T7CmOpSH5hhx0ViiQafAcss3wNrm95m/WDZkUdiYHclV8hWkA9/fHFIiQ8dA/jdz7czn2EZx11evS8g9AY97bo1yg5APGhXBu/Sfm8YEaLSMddhuReypxL1FTaDTB5A/HGH549FecVGr4r2ND3Js+2DhOQUnQryuFXMr9GnOsW5rr9pRraryw1W9aMTLrpEyBjRM+sYfkles7q5rSC6bwCuVkj2OjGHAPUlzPpb5Xd30/4KQQMIRWaoqF+bY9P0HX9U1FgF3HT5fdPWIfWhluWl7yU4LOUE49WLevncgOd4+ftAbdFLlRs3s9uEqPEfQV1F6slHDlisxBMytpApSIHzjAis4DNxOk/XUQwC9IzcoNUy0XP7AQYf09sUrz05gcxYG36OuPFqxP3VuTMzts1UaOV6aQ93AtY85Gdx4eVtTroVQT1JfBMkVP0JWWqYwJVJzKR2kLiyyxR8r8EEQrNE4uXkuH8jSQROipFNgoAZaOdZHJAy36eYMgCFQnA53Kmj1CQXMoWbKCkJwnm3l6XkJqL99rOpffvu2jhv6Ty0kmP4sjIO3Wtfz3xnB6T3u64MKKV7qpLy+TD/xByELuxyPyoANiaTFdQYbCuPKe1A/EPK5mnuX/9JRHZA1VXSRG1mm5jfGDS9ku8PKfqeimDADFfuVfQMqDX1ZoeuyRVYPuLtV49+pJtDLhpsgP9SatzAbRLMsiaNQ/1n8hlhbPtCPFZuw3lBTEEHXgPh+rkk6+iVuIAT2ZmX8eMjL1S4HWSpQMkFZjmv1blj5cWbiK49LpcgdN5N+YNfaK94Td1ZsUGQme/XhgnCgAZ/xbOuEAnL6axg06iX4mtV0gkR2OG/vJPClTOIRFoHhP+SQSBHrMV1+RnHw1rl9Sme6me0YWTHqco8bKYIoPOCCz+Mw4crwHBB0rZZrgW0HnOrbCQ6lgV4U8Gng2RBg3dJ+gsXm/FAjp2kwF23JWu8WmVFmQGiEKCzw2D8PmMHoulG0A==';const _IH='23e9596ef54103210e4654b28caea3d00dbd10b75c54af32b0a77724db247660';let _src;

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
