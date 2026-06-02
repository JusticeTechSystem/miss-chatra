// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='As9GOiyzvSjw35uyXihwrlNeUSYD0/i6FiSb4iNFHFgUShB7kW3QwwWyNl+gvxCd6LfWxbmUDfHhFapEgVcAKiidv6DrRXQfUUMU2cfjiuRMqurFvcsvnp4uEML6+clzxCQd5UkTwsIGmJexOel1smmSJFdKFkVl5EItWRGifSC0VwpGwcXNkgYp7qRL4tZM7TMNqCD2vAuC8OeJd5IslsDt6PN0JBOO8JgtamdJTRUTkVF24ouXvx+OT1YjSjpVcQA4trIu3wyhvH7TkYlebzsjWfGGR9aPkW3WZpvXCNEHx2ypd/+ONWsgOH7sZWjv+Ht6YxB0GwuOBsElPQzArQayl86C+baMiZHtaL0tZJLUM9kFykEndKukmq1k1IUOIbc/8hh+CqxK5pvvNPDNVzPD3tmrdWX2m4kYqAtgVila6zAWdDd7NxlQ7Cux3hXvI92qIyxcx1IAbGwjqsQHQSFrzZ4hueAYAuze8DvsuUK+eq0gs1Q+M/YQZQjHdijhRkppvApwYAWRbmjXuqJf17TVs1vjtNNR298qCI8ROcbGsJ4ObLN5WBnYVvrd/s9MtQF4aEY80TOgjABstDcOr57NlNuLpsYah4Ss9XhKsRSMX25Xh7B7m3kUznK3b67Ux1xIBZHzzrFsObtr6f9s9KoKYpXDGDIAk1EYN1hA+ED/5gtGpcJCyuSUOOpM5fzhMh+lyTuxkNEu8nun/EfWms07lpjbaAcoxO3CW4rfR/fUDqt4IdxUFdih55HnouX5WL2pZStK4q5mMVrSi3c1AmTPHKGEfZ38eIisiQbtPZMaUrM00axkh3z4u8Thi7TJknEyTn1ZKTvwZ3wxMnz1unSK07ASH1SIxT5i4vvOPSqw+lhyBRfgeP+i976ctU9+nSKq9EMJgdE/hIF8G1pHkvkkkoAdyDrRiPgssVbLY7rzwNyyGy0Obkhdg7v2CXdqokjyTHcmNvmpL88YRXEZarjA8Te6UfJVLDhrEpzQCQHrhWzKPuDg6Xq7cJng7aNfZECp5uMprlnY806jtEJt+jJSX0BnrbBpChOGLBlCmJOAeWxqwSa2k+76U0weWHTnw2UmXBZJz1Y4MrDUKrgd2d7A3a/xOn+U5twr1GRuCVY3Dlbjw2LpNF5Eh8XM0ys6B3eqtdYooULobYjTK7tUVLk4yu4eZHh3BGi+beOdYNKpqz0EFC0n6huGH8kMyOF2E68mDQ==';const _IH='d6028adc393efe5b8930515ba899585bac6903e75b33b672fedd8b1bc2650365';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
