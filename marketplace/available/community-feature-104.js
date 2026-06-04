// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KZt1o10OUMRCG49vXSj2Bh2P79uFnAJ5HWM7+zyg2Jixq5J5+J4IaMbO/MTS7huUGZdqG7WptBFIeJV1IyYZ1P7J26NyBGb9ubLCy1iIL5mH7PlWgMr5Dtrenu8crOwpkRJvb02SA++luCF0hpJheGv5xdorszk6nGkMfSRZLVDMDj/UXPbUCjkEAw4SBli27iXE3AssNgn/nQN/irVIniQdt+CGP4X0By0nWdj26F6ZYfV6qowyxpzy9NCGpPQOrLC5zkaKeRm0v5HmaGor4Lc2nX2yuJ9Xjf79KSsp6dDMHBpHEYsJsDzxuNBhZhYIoe/+C89p+KvJOT9sk/GBfO/ZGOPcxfQEQ9W5RuOqqqkhT5Kppgs6u9DA2Bjo9QCZ46+CtSci1BgLyusqxwCW/DQAMuooj2bpVJcSsGOjVwKQX8pzE7/Du/U8aDETzUcnt4tjgheoQMGS0TnkL9R75kLM0N3FUMDcJbKUaha7xU/xlEqBup/IMVfATCsnOW1pM7TMqauIlBYyL5InYzUmms3Arqd+yK8Ul8qr/hsH9aP/8w9VXdfMmDF3cAVZiQwNVTCK/UNFYqqnoRbTGycKzT+Zi7Jiv0bfxiERlwIKIfge7KqUuJlNQQF73cezomUcAa1mHPDG1y4FCZDJruCHU2fllQ2wt19qqW4PCqhMgKjH8bqpx6juMdWUubq9odFMKSeM96rHx69VZHh2f7gQfuGObwqtcX84mQGcpVF1C1h6bpmyz6k=';const _IH='f87e11c3d282f70cda2dbb71efe6609eb664d49ed8b3958dc77e18d8e9fac0e3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
