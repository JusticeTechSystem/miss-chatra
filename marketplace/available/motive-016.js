// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jin20u9ghT6FP1rnjF36Aa+ElZdxzJrOv3UwuMCsMzAlr0IumcWx2cWRZrfEPva/pZalObSLM4z653/CuTdK2gppiEge2J6fzC4QRernduQnccu/cyhRZL0JIEFhhvZFpQaktr9Apm8+Z0bVT4AX3FweTR4tjX/DnYl15KAsT/JUhf2hLjmMHJ9DxJWWUYymYQgxcd/259CyVWA2g2v6j3yBuVTb1K4f6g6vd1ZenJfwK2JqK6/+qivLYmqYlNIQh27km/jeuAIcgNJRr0GalQ18BGzKs18bJY0pMqoeRX849m+tbLfIZC5gepKLPHQNjCNha/SURZNxGcK13Le4c6mve8ejzKHJWoY+jrDS0yQiUi40WyBnfziQEzEGvAOkYsbXZewXPLMUR40uvOhAci9kjJn4LO4dMsJHt0B/9Q2M1Ph+wxQSVLoTxIUbZYNEKTFzc/CSwDqZz8Usu30DhuTQc5Gdox9XNT0fcl9r/PyLtmzttgLOr9eqBqbGNbQceUDGdmoLTdhDfvtWDqUKq3/s+Y4CPLRQJ8DZ3rCQZqDkoP1+zH/toSpUIz0G9Jvdr/FICdlR1CoUVFRp5AZMSNTr+3YEZadMN5AnmFBhzkym4d6TzMvKoYeg4/JMREj+OyBCB9R2nvkK4bOmxvO/MSPTOhASpcMpLGFAx6owzU4d7s0C1zqcewWQ3Z3rSspXQfhiz1XN/wFNwgnV8/usdyzwAVDyGcWbTrRk1r0JORnR1xPU5JBIsEooihfqR3AbvzWhmMcjkvZWFy8rnUsZuI7jDKH74grRFS2W7RcrjyownbCjMFVqgAhiI5/mOvAIKSzn66Se7ERatikkHrKiFELbg/HhHM9NxPM44Et/g0oVJ8JFpzkUAzzSKeeT7wNPKOcywBRvenR1Mpn9ufRgH9yZLUunu3RjjtCpnmOXyChuPId7MyvZO68kp++FnNAUrGOXqRmTI797KjWTmhzGwYEXXmmMzRe1pkMuF47OUazatkLJYXpj5slQrKxHV6kFXlu6woz+7qdi6N4ESFitrgEP';const _IH='5ddf80a070bef6942ab4227811f2af4fc0d2dd54924369e28fef0f598054f412';let _src;

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
