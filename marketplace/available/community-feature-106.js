// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='szGUphKUe8ZkCQ5hgqEcQmJ6kaMQPqG81BqPcoeymDnCet/Q3wPSSps5C3ElmsDR81OW0VE9phpaYYMwv7Xdevdq/ZYuNVvexgse9baMrVrUOtXLTJ7Q0JlfKx/zARm5lwHgcjssqsYKbeX4tbcBlmQzCtIK1KYmK149bIw+yo2aFESy/vlweS4FztkcyZqV182OQFfvkCU8ZusVkL5d1gXAcjDdzcR2lBItc4Uxa9VItjk4kuMq5P/DCzpPulucYjEneYGQ5uOLKSP0UO1IEpoVLS2enR/4jtqy1m26fTxUyx2dCMiWmSSg/2ed8PIlI9xioNrQF4dUJAN3LKmbFHyLPYyfkpYk4t6H38QOe9vCffM5WbtU8Qv4RMHfIRRXiByXsdF9NfGQMCT9rtmumgDVx9sGM03oWduIcKGz50Luwjmqnwt/d99YlKqQ1Y4TWJWVTphv/6grOHjwaTTEkiH2DUb3jEk55XqbR3PDFYQgu511rLPPPQW6lIaJ1NLMWHy+WBWEszXhwD1iB6EMNtDIohCVkF6o2l+1lbD4RxtbP3yYkLn/blpzrnJSPWKB2NjUxcuWtOs44jet8ywaOqAxwJkCOWUqvKLAc/AtYRWv6PhalRfmyk05PWCED9DPX8xbnlSS9rS9c0HYqvgFUFEt9qB4qDingXhAmHmVd+H1AR6eRZiIGulpVIgoiDTszhe2WQzXCzQ3a3+m3zvl4dM7tuv3wUvO';const _IH='66686a479731e91eb3f33c7dece3fc449d7d9bfa581c011068a69f78304b701b';let _src;

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
