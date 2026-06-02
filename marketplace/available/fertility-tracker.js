// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7ZkQZA0F+CBY2z9LHUdQft0tUmLvnh6SrzlyY4j4NzC9EwWmgjwZ1jhOULTd9rFtYiFHLWGZpUClXo6Bx5v8jXcdP4KqqZp2/HsoaVweGsK2X+HvSrj1C5U9kvfeTKEz5WMS+z8I54q6gAVsZ3PwtDT6ZZfO3SMLA7LIaCseKN4OFOjQaseqCwoJavs3ElxC71VALUsHDEDMPBevWh3jcSbKp/DUbKBIruT7CZl1vVbOVsosnsw0gurJgn+A0JxytYlXT00QOY2lnffFlD4YlEWBAqavi5Ai3xktZoWyljNHZ8PWvx7dXJsI33GymYM+ZUFgH4F7y4Ylc59jpdKLdk5vHsNflOdlG8Ve+Z/Robd+r5d7EjTxsXIZl9AQycd2IObr5xQMWaIa3pxzRhyRiGYdQYlJX1xKFKIoweev01P10kWP892TGr/mUAPvTL+7dPX9v3HhpFm5Pb+/knGrrUCqHfMw8wOu6KXh14xU6nF8e5+rKbKvJp4dpsbPINI/FQQvzOYZjDq5gZd9lrz2LbiW3k2+Z8cNx7Mg5VUGMtAUqDZsPDeYTuFlvjx/Qt8mrjlSObplQ2A627N5WJ+e36/ugeIODjhuaw/YU5Tb5VyeRO5qn6KtqCgp91le3QK6DgxBEPPw469CMKrjPmcznkIB7D6zhobnPJ0ZEpEtCsbiwC+JytAIf0Q5OlXNnbynlhhvU+ZXVuGZn9gOjW1P0RAbkbBSSGDOrhjaCNCib5gJE5wSWPIYOkf3X/rxkNjDHmUu5FeelbjicgwfL2GWlrwEVAclJZPhVC25CqawS4Y5SpDygjgPqFBKf28hJ6dIKJyhahtaxU/g2Onu0BxUrVHCd1M/mWsDmtkb1FO2KvI11XNG37R7QqQ36kfzP85vLYkNxjQADe/Q3uSJBe0JMCVT3wHW/QcpRXO4SOG10zRKHNTLUs5+LtkJS3xmnOgbpBdVGPUAfefWfh/5ozWs566fhKEpxtMkixAwGbkit+oI71dHLt4XmYf/RE2nOOzaBjrs37QMoaZdeua54J0mp7RCl6rXBaMGdM3+4xA5zNOyrvgugeUDzn4Dx2WxDHS5PDBFS3i5RVOb4di9E54TeK0v5XCUWsby8p+kkBrSLxSZM5YL8ye/nkAmqyLmlMwvYruDrj0QdlQVQfw1XJtuDE6O5K+W/5rAU7CV0DRHaGsqoHDPgtTOsKj4NdLT96+77FewZlm1wxoldr8aZg8MLNl5YAs57llHxvuHM6aWyK/fMv96O7OnkvTwC2mLGfb3+jYsrEAhtPYZAX0FydctxA0qGDHud+13ExrQ+rNBLWC02FOjoxNdQT9L+7dTGkd50Plkc0tm3cau4ZpZhacAusMjxzrDlZyS5Cludag1wHp9dJHIPLrm01LjTeE7nuE+nWnzsD3KsRxIQxUQDC7m1dwUWS/UXk/+k5MqL4EYG8KeYOtacpNf+U1RWLJ1RzTnJaSiBqaXV0Ol2rBAh7Zq+4FO59pqSaPvITz658oSwWXyeTJprGZ7ZmisgxuKgpe3k7rPqOvBRedaARKWSNYn4YW6Tz4jqRC1ozbkEZ2gbHrNL9Tzl2PJ16XIUKdKPKJX99aB1lfdWG8pSURu4+Nv2rsXamdgkebTsIOLbrGzTy/y0OGlAek2b6caZ5YdSuJYvezzwMcwe6SyRenNulHtL5bVuGaSLObKtR75el97dvX9vKYZKlJ4tQaMSpWg8fJIdMgBSl49H8GzTeNcuvhYS8eYuk0gi88Yd/kfOWrlToJTe5a1rIk++fqPE3hIR6jIHUz/3uMJ249jBZax61y+vCP9bIWyOfrvu08D8qVIoAR9V2HP9WWj';const _IH='125f0206f690b2bb24e55e15c314dedd3281e3143b80c23f4b95587a41f9a79e';let _src;

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
