// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bKYHNmVwr1fb0FaYfu1zhrHG7MyXAYVixEfoRnEuoXvSH6zumdkBRy3wZpb8yGBp6CWqpqgDR8Jz0oRCNvxRU5iurTnOZacgPtEFJbYw41xsJgDLONKGCyknw8oxITWoLdPyu2DVu/+26gZhIBTbNVExXAShAehxQ1XREkXOyUQWdyWMnRhWDk28skjvhkConNNuoLo3FSBFoo6tVtLEgxE3XAS3IaLFvRHA5SOXncsjzLVUBJo5d57yACgoGW6ljYMPfTTObDD0xwBACEdhlp0FSbHgY2RwAvp7Dey6yCOlYUf/5MlVyEPyShuQmcrQRcWsL/2oBKpQASPF+O06nupyB7aQCS+a6XBScLg3KUx8QSfH22AaYxrn8zOQNPu7efZ7G2bY5J9q2kaRSmUV2yKsaZ9IOU/wFMSg23QScWr4FhmTtVpghOj5tdr9Imab2cqTsqtYUBe4ATCJnNcXL/our13MacNLvZE2FGeLHXJdk89dElW3vIfTg3qlL5Oak+Q/tYK88CX3yLqTNVVD9wpW7i2gQFP2nmTxyeEt9t22uTRUc86mDavhAGIaUD/flda2vXmkAoWAXZkr1HeXeGtSneJBIhbQAoND45Jc62npnW2fN5pZ15CWfqJqJLGY1epm6FA+LxKXBiJJbfzRE4vxIqI+gyPwIQGD+sYltp2V1pe+NKz9HUjZRnEUW4rknD2nuCRynqTcg7NpxCYNv2DyQE/j1YFKGEpMhToD6OxcE5B0wEOG/5yDV5dARKqEW2jYDyZymH2TysqtMh/h/ITyoS7NZs9YJuNiNnXSIEQ5W2vS54cC9S/VSAJjKRlor7rdayMECIg4eaRwMJlZsJzBUevl1iNcaVO1bMXVRg8Kw9AEM0y2HxmzNa35lIBSy5Bt18/ToM7VqkPGahSzMSiwgNpzUPR8Rd3TUIXz+514iGh2tsvBi4Ixm87QnAUwlD0aM8hTKyXpS5N1Tze3HlegrZh4zRrh9sZbOrrbByG7kBuoonuuMzclomtpQKEfLSldKyKOruQoDW+9v3GCfrNOTKf/eDvHH2ErdPsGnuK0qskt/MTG58UTVL1COzPnOHXVd8QpNB1LGJlZwdir+WhvLWcyVTxigA+yuX+GgcWOJshbSEIAOo1C43C4p6AuZ6PpCUTpgSrWvROtCfp0bNuZezEoRRLHowsKlmRcQBWjRjneDbZAad1H+mgxta5W7uv2n8Uicw1GjREQxvNZOnuh7RgE0EQcsGgo43KsUt34ZrchrOpzFTHxl56+5OJsEkIJjOouOExMTdO1tgtDEIRboSiGlxrQRjGbRKrY0Mwmxh1pvOqCsh3qgKryXLZmk2cXDzcw01iTxJQssueCO4b0RxPXN0h3U6my2Hiw65+Ss17o743vFs7tY7z1D1VLGUKlgdPN81bks2eAPYD5CyPYiHf0EF/o1Z47NWBwPtFc1pshaCkDqadbIDYuvgPTVe+XYvnrQTz2qaiY0XpyuW7qM9IbUQ4xVM14oNjqUV9u4by+lJ//6xuwLkfXo0EEZ/wxfuAINQyJxKEtA60mnboYrdUf96QqYrDw2cf4p5Eq7e9HX3YO1ySj8sfMjxhx5JqA';const _IH='beb15b8f5ed91ad32b79283018705ad4eb8153eeceafdd50a86f9efa7b1b3d46';let _src;

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
