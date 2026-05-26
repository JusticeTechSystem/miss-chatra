// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TIOpnLyhu0M8DL/LFbrluQRaKphfpncV4u23OA/ba5yPk7OGobGiaGsYkdvsNdBKfp9Ylc4MPa2X23+IAF+ttgfm6Z7DQBqcNod/H6kk8ZftNaUk5BpZ0EdWNACukUKYZ2MXuWfrXfbSM9DN0uJoryl0QQarIjVb0YWhXIxTWIFbpZRvNOt529+UQvforrrJR7+N2J/E/wR+f8dPgw27ZNMNdenFlsDAvxBCRWxUN9lVCWCTctItT1LhAPijkAbRWHAVOCEsGOF8bLXCc0K+c2XKWsRmpU4UhlXPIfUj0Zck7wPLynR8lwaYW3lSnGlC8XPI77puDOMnE5dcELUqWNfQm0tQhmRCn/1QkQOJ42ujyE4YDDfExHYlKTqOeQ9U4MIHofQ5WUX2RggU7Ni8yMJqo1KShkeeZcqH3NEcAUQ10IXHUSj7nzAPkn+uJbcyhb2HzLXnjAPJ7toTtfdN6TV3I9bskY2fjCeVr9LyCmjPNV1IwHeylGg83d+xOMLIRn9kZ5v5q+6kux1BBdK9X4A0aSAOdWedawrHSPTC5C0nLMwu7DOZ2Vk+YG2Zz3XSsl8485QoWIuQ4izf9w2Mu9YRnEuf/A0ZQwTV6LClTcuD9Abq+Fb++lvch3eIGxte9jFg3b4QAoxXiOlx/Kmr/zQam9vqdBM4+s5ZLNNQUNjxyPjy8zd6ZJ8cwKRrp5JSb8rGZqGtP0BYIIB45KS1uklkF/459Uqk4Yt0dXG/1w==';const _IH='660c2777516145ed114cc4dfe759ddf0bbf2d541afdb18a6aba2a0c2c70c1b78';let _src;

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
