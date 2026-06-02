// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tAq6kEnOQ8q9fxSw6mTp0aSGgKPNWLidqFRBwW5EsNfTQA9oXZAZQUzraQd5io4kvQzIJIXkYIBOKXIbVRaL9Ku7EfHZddkk9lYbCKHbLhVxFsdhKrds4vUUa/D6foclCE5TAefSaFzeaZLUZa7dGtVTKHsMr6d8T6i75AnmFUEJUNjhxG4zxOgVdzS9ztBuTpgCtwfiBk6Ylxb7NXa/zB853bLVQcoA2sHd+uQ20Xisx1+Ci4jfn/63diY/Db6egIDXgZ8fbW/+MKJdANrfNVEUd6gTH1e21HZVchykCNsrZcVA1OPifALbu8nYSZW32MT2zhUk2a/TqLbtaqYFC5bvcIIe8waSVTkvy/d4Y3iRxS4X9I8gVGJZGpU8BeAKwPJ2rGvzfpKBHTcfnR/DAGDiRtebTGQH+aASMXMNjd2sPk87++K9og0ITNEakSL660mu8XAJ20Ohyn9zIXAcX/SXRvpDLoypN71tm9hrz1B15gn8ssZMkpLW7WneJWsGkmLAWMgyrpoBZAF4zsQd66J8QujnAr667wMaLIasbe0flpOuCF5xYEvZSMcLurnDV1AdEdL16/W8NhRrXrk7zVHc3A1htg6iGYzV+4vg4N6UoW7V6IqFsPNxbEJqfV8ZY6mq7WB2B6d3vwPurKj6c6TkjErZuX96gu88x00r1JHnxCddYXR1jmbpQvXSfnbxBJ3FQPPotbjgH29UslqkW1EJSMXiCcTGEGK530owhguZzx8LdTKr4dc+ib4SU9K+C6C/qBHyOcRuO3J/F8JJnqOr1P3Boc734CGoONeSZdM5LEcjyTF4bPwHj11fXw7VoiC2spIsWjZisB5x+sLO30XRFWZ3ihsPk5W2RnnGxFTuJdfAg8IiVek8GFHNNwwPW7ZjR7MjJU4w9RxhoLnUJRHtDNz1P/CX7ihSZ+Yp7dBFdL/zyxkis4LqQeKAicPBTwBEwydDiSbE9M3yBGiAeIKccs/AqRd4OYWvDBB7RUpFyV03UkZ55AEQLEt3Xcu6AXBqsIBCqsacfukIFohQTqmV4m8b/pCi4X8393WeQSiyucfSsgkyRMB1PUHwt0/JKakNJpsvB96b8G0gpbuJ2VAvEJAfjyGHmR5AJr/4o9p4B6K69kRnVQRmmErMpcPCmF0+KnOndSpweG/CPYyKKjRdPwxJV5C4NDQ8f5QkLm5Q+EVoDBejd+MbHq3JI+d+LQmhxVNv/pgG1Y8YiVAzzlF7gSiHFKK04T8d3RnZMaLPDDn1R+M8SkBNWtYKZhqj139vIV6ob4J9nOpvJtckemzjV6Ij2ASsXQnSWIpMc78IBrXlemSVwSOYXghmrJoAIwj7lG+BxGx1O2g+HMNYaK5to6fawBeEwIMj7IvP2Sm1zJo=';const _IH='6a6be9b0c81ae54e3b6b530294fcb09f87195970f1991100d2d84038fd3e6251';let _src;

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
