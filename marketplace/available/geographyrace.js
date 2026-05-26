// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QJh9+j4gfhL6MQDY4+Tzl7SiyH6Qmc451XJQajKH7BWU6l/Al9UqFsMkqtUT3GUx/zYaZRptiZqjp74Jv7L9E2h9PFeUC4FfVnzuapoTpOA7T8Py5Rr76JQiwO0UthfHgvAKhrbJuaH3yPf5yVU6TpS0LaHh5l2L+CN9UBR8J+urdOsnZWX/DJHdboLb2d80Tew3FRYdWP7VNI/K3+mElTiuTLU5jCyR5vpgZQq0q/d+m1+WWMZiXHeYEOq2pVNvdFGmaUH+CKZ2+ge7vbSggLrkUt/bu8wBJP70ZKOKMD+VbQ+hNl64Xzk7dFL48g7Uk8nMOA21DnqYjF4JW4n2sNjrkbhUXW8F7/kkkMYWFzNqjs8YHFR4Zeqj6UFRqKu9DORtNjL6w/JeIEpQdjGn7wDIW2Lz52fXed+bsB+zn6edC0fEshLTuQDAQ8PHJNIlP3VLLICDgaSsZEAkQWJVTlCPvoE3n/PPiZ8v9qN5t2gdImvSEFXmH8VObTUPp+5pJfwAlmkF5F46Era6ok4X/XL1xQESA2q/eMsAu/RYKk6m6pDipebzoTqgWNFqjx6tJ0BbhM0I4CqkIAwk5dCdR9oWouHe9zhiPB4qRDKQzPnFN3TE2pKTAp33gTksXrLyg11BZX91Ggx/KeptouVW+a28qI6vOrvCWVYM5Gw5+608Co1yuvyhj/Z+ghUvGjGTwXkW5zM1AKTMO/9g+t8puvYT5Q7rYohMbQDWIPHYT2jTZJw8j2gbnfO8cIgLaJ9iwNx6HRs/tVwZkkCQjgZL+vN8NbRli0FX6axvg96e11mQHDxaJczD2gui4C779Q8TMcO0W458JnKbdIL9IuEfxoeuk8RD1G+y2KhTRRtWcOOJSp6dXpMd0ubsK700CUCzzQFlcEGe3TcK2F3qEXwLcNvux5QVyg0mZ4Z8NItlUXAIrvCyPzuN+JhPjvzMjSSn5q79eI/68X8NlzzzPoZ7Fs7QMOK/WBIU0+EUFuwSfl0JKE+KkW/s7FTxRKrRCaP/r46DDRhpFuqxoVoUa4AD00D/w5t7Iv5G63zJyXPDVJLNeVOwoyA6LI74eTHgC96MBttGIVRgKS96WQnqbQAFm3Ls1t8yCfEXmgybsnS1lQj0qkn6voSUun2KvFrZeIiLzunvVEGEhOcQeVNNiRsZP/we5qZfRuBTgNNAAaWWZHq8Td7SZ76Cog4ZcP8gJEGIJhb+uOOeg5ik4/Hkulw=';const _IH='c43753bcc6e7a302e67eebab9e78b2e512b83d6d45301ac9afa67fb7d4e78ec3';let _src;

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
