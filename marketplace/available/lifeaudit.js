// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/pLJCeGj4b80iW0L0oGCnF5k9iw5lMGQU/YGwJqBDKyAczz5VKaBwQgRpC38AB9XCVcvaPp1+fFUtUbdJ/QVcv6zeR8Vz6MCySu/5fqgjqGzsyloiINe0a8uM/af3lijYkPMvhgy5NTdhgEZIePc72IrM4BNp3Mtcby+fb4WNm3nZP/IWRHE9Lm+IpiXU1cIXhLa5ugS1QxqjdP6buodyBjSjsRKM+hyTWrm27MQfHJ7rOjVqlUUGylY1ntSAcYOaY8fAL9I8T63kNN+ye92EKaXC+zioYl446+LSukwbWVqevbn+c8diCyNOTxxdTvhKy8+fT7G+s82QPglgXLKc0B79ihs0emmHOKeZNyW2Blv0hsKJtqZLqmPUOuagl9Lk/alvF1QSfRzBQuSnXqz5b9wycUAez4B9EQogSxZeAWM44IFjM71uwV8SLlyyXTrjgGkii7md9y4/iCg/PAExiRLxq1t/C1SOUbGn5WyFuVxUBO1EnYlesQHGM3HUF5stklf42WS184lZOrJUT2JmjEnflJWsHuazkxCvRjmPGZpf9jq1hLxqPVwwwscHdKaZUNz4R8o9W//f16XWvMdFQm3rnL1pvtvx9TyQYnORuLjK3sih8+LVQo7cEPewFKkDbYHFdrxk8uM7NykScU+xoyGH1irZ/fDk8pgC8WFcg0/p0qeGsJmSVhrLuFGkHcMKK+jtUjIWYccLuMpGLcCU4XOospfNU7zl5WZPmxMT2CxKzsxvYutSdYm1ZOn0hhkAWswfv5KhYwcQ7ag5adPzU7qSvPKFdy28efFbdrpbc+vnbV8tVUJDLKXXjbNYyNb5qFxxoXIly6KaBG/ruXJZO5g7iGxAtwksOmfILzVW4lXVsDny6IsSVl2mSf9KFIqOP5KW7K1saicEnh34HDrWyafdOgfpI88vczqKBau5IwJ6Jvgp4tQZ2Ay2qptyjUvMtCRwMXSvgCJ32Nj9Jx0vzrXJQr7o5GNFtmg9I7T6sSkH0pGT+RzggJio/uJgFqN3e+RJR7IEiINYjmi8G021u5aRmxC+SlWE7DJ7pn78S/vfLgb9dZkQbH2MtDBBqkJByaZVImwk15zEeVgb3OmJ68svhzUHNUkCbCDl8A/5xwrjMrYf90aAl1tuWXdspOKvAdrUn9D/9/mG3awvfvngZxInzEuLUWVJV+OKCMDZVXH7C0hfZs6a/YRSQ/hy8MNyj8X';const _IH='96b5527608c162a87a1d0d30b13f6cb3590e97589b1b1a4477e6a87b7339fb0a';let _src;

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
