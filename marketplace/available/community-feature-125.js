// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VQGoigzHk4F9bKvi5TsxQGs3pb39oBHen+g8TlJ4jQG8NQv7bLYaUFb4oI8ydHj+nU+jXOtjYMLp6XAiF6rwJfjfknqu7ZibnyqeR5Y5iAmPatorvQImhyeT4ZjRWvnZkRquTX9PEHPYLpKJxSqS20LlzeGHvckeQtiTHhK1knHeHcdfPI1htoZu7G4F2p2Slzw6Wp7ITCdc9POtZPASMraRPpuysbheNLvIOMPizqhqPv9joJy+xXAS7tRAU2wMHNBukMHNUQQmmhHRd+eESajQWix/vJnC/63wAKqKv7GKHWTJR750viRCYPHRbKND5u7TOBbIUNhAUpM95zUUGSOwL3ZTPWZ02QTXWSd+Cf9ZUYFTvdxBF6q/1+/KsKmNXf0gmxCfXbuxYrC1YqxPtJpzrgzHPy5L+ybCK9SIwsSkIppYl22er+GvU8Fc5WJXVI8acapCR7DJtMW7b7mQTkbXIbslK3syTXAS5lBJHE+YFnJvVZYkdy39WXxMqmDTVMUx99UpEbQHk5wbWCIJuPnFjQLIfi1LU4vkmGoeLAhzJnIuWNKNwwiSnqoKg+15f2Tli0LQZitmPDXNsBPW3no1beaoUiez9SlG8GfyAUplKAZzqEZ3nWwhccN6KWe1O64vNHbNHmisj46ULc9NzxLeV4lp5zws2kP5JILH1En2MYvIxksGCbYR03lR0MSS1ScTKotYOqgrUUXT9ZgRicqOApceuWi6dFJZPYfr/2i+hufNsTTiy0Fz';const _IH='e3382e23f8c9ee6f5f1b87aa35c8c4f79b9ef64fb47376a9a61e82df28e481a3';let _src;

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
