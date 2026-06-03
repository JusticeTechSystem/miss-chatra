// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xJIS4+P2Th+hAS1Hdx5slYYbYVj20bettf/v5aR152cb20PCWL/nSJWZrDMjG4YFqxe7tj19xyCWB6pEJ4ArKN+dd5E64FTaZeohadbNtsHgKr4hf6hFwzZavJyCswjAGLNjyTQxIwxfYWuKX5SoiM7nCs1UpHKsBYGt/DcQHypZWTGHSVv/L+RejQV9wf57TF33Nht/+OzSHbtRlNgVDwZNw2sRpZSUwftL9RwOGqRQ530AJcZASrwL2NFXCbuh4K0VVTzilJDXSmSziDpiEQlHMehSkycAH0ZuGQKWE5I37KU7AWAdo+2HKnREDifbnXvgFmkuBaETJkP2wFMJS3P+kDGoiPe63vqUGYrcRBSYiRLgTEZhOLoCUm4kcPolpgheJqcqvkQ6TA/N6OyXaIPHPukhtaZckZb9z+oSZ++bDVTvLBdOkulav898GzzLQl1+ymrt/4eQz5QBKqq8XftFo6P5rXP5EsoLOVwo4zT9q+Ejc82W9ee38e7uQrjwAOR8YHRtthu15Bj0UPQRuM4/CQOcjBTRnsNs2+ug1G8V9PV9gnEPS4OkN4yNyXIPMogHTok6cl4MV8+NF0PBlEc53vd9pYEylV5JMGkzYklGlxhOQQoanqpIo91urJWr/HYXB07MWvy/Wc+ZOfChGq78AD9rZMH+Sqs839dn3upkiRtInliHh6agQCrHiWNEuIzxW1aYByUQL1CaZ+4sweC5MrAQEB+3rHWIDbKR+Bwc5hg=';const _IH='14d38fe22d18f226af4a878af6d1418e69ab8a4bf1cda32a6caa3c8f23428439';let _src;

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
