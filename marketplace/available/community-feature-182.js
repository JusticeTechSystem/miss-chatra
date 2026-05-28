// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NygVvFmunhLFsQHhd1xqeON+b7sHSITr9zZ4d0GNDktjW85KBk+U/YBjq8lqsM9W2fCb8Vo8XLLtPs6zqCJv3SgNf93Arjp8UYt60yafDqU79o35bb3txhZlwIP/4iOYOaaN9NHscDRrspa9LHgrusB5loSCcCQqcOqeghDK+2PCk/yW0nPfvhhwAms1kwJTAQn5TVWeDRyIUDcR7EIZYgO8yWk4ioxwyqi3wqAIKBLKeMghBc4DdcyCXklxSfgonQr4m8fbjs/hHLpYM1gmwp8mFr+8cQhe9Pcc3PfjH3Brx981n7ZK7qvN4kjVZEy+yICpljygjnDUQa4PE0akJv+JnFBKmlDd19OOK93o1Cr+xi2p1UCMWzD6n1y+50Pem64/AG+Vs/M179V7VaOXggUknOuCLGnXKIxwxBlYQpgqVwW8MzYYDc4xYx5+8PPAw/VuOcU3lS4d9M0wm7/WM4fCzaZLdDHKnTuW1XE50m1mdPffSJ7D8GSSkDOqndh0z77lfFdA73MifzAf3o2U4Q2emuTphxjOPjtHcJg3tf6f+OyT/inLIVZ04Z+AgRS2ibJtqJQpYVzWlU6EXl3KnKO5Vx4Odcln1fq7hbaO/JcyP5oFGyrQXJDQmLo0L2DhtTA3PejkFuXqhyMiTAfu7NgGLRLh9FBhiXFyHVu3Q+S+OSdobQ4YmllpsUR2PYdXGlVNcqts5+JXX45RUxKBA1WLEf49i4qCuFqEc5XyM4ENuP4=';const _IH='e1b143b131922877801410c2ecb0af51523f2611fbfba7e984d502577f223789';let _src;

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
