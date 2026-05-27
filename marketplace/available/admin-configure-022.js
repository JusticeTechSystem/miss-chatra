// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RGr5lBGXId0kns1sn4XyoCSEUTncMVd3drxaKX5NBp5E1JFcSwz9blz+55xcqoBQfNjSmoldie623ymEauIkQbpYpgPaeB6VKSkMiOHVLyKo8w8QBY6cwoL05Rfv8XN1zZRQve0mw4NOt2FW3sVAI21KbLx5X3tHkr2y7HCr7aTX7bVmaNtmlX7+hJLGSpJigrWOl2T0WOtHGxxqLIYOBvHmMgjtd0s1MO1kKrntifNyBleTvX8IlMe2zNPiHujo7Y5XQ8zgY90CPCNNT6n6AAjYLEgbT/cTLw5sXNyLVDhV3U0cFk1hO9Qz8KjHhWG1BpuzGWF720aJAYUgfEkLKssCYthDEZvubny5oL/F3+M0mECCf7h/RF6+TJ0WPKkJ+/NFrF2JO+i7XQB4WaaPApvzjWa2gVI1xWBZIKYEK5L0+FWs+Y07iKjbD5Cp514f6R0Jtf3ASwQ2uZwc5oiGEOiXA0m1vvZrf2Bl3kwPsPf9MyXbRRu9R5EOb1LHuZgtsdPtOuIgPRJt2XvAmT7x09Ek9Ye7PAkI7vQv4qMYvyXzTFSupO2j0Ued0muxzneyI2y3TBP5QjigZ+tMT/sQrcl0owAbPkhKPtR5nNvA89xW1AdY0atOhR1PJarGpqAjMuBEniauALmNaftLQy2l1+sjS6BNAAu8zdMMXP0/FbQykTH2NLKcl264V9CiQaRFlKpDzgY7hzu3zSRaCJopYAwvMaItf+AYT5WyLEaZUdMzZJl6KYU0XeIb4Uk+7+icg3vDsndfYzK54IcjA/BZ8J/s4n8Nnpn/1gBgtAxJfVtbhI44kdJnCCJQIflUcTB6ipVJ2h08TqS0hlbIB/a2+GYO4TWmFymYCYAa8D3DamdAK8aW0+/GlsdRMfrW9CfeaQ8U64420C/huGCSi2hF9VhURJMSpuoCgcnW9j/8V7NgSChYhWHugEl06r2u9mUwvYFz38TiJ7nHMKlMxgPiZFqUXiBoLp0s9aXHK1twL38sum/jC7ddLz1XZjxYlbXDgC5g6sd7hQE+3d6jwHpDzUSz';const _IH='bdd05b92af2bf4fa44113d8651ec16d14a90b1e2c86a23c14aa1cffb4f3af335';let _src;

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
