// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N9QFwBtxAe0y8WzXYOJaO8rFHU/NsTil0jC/foZ/jaOg01YvpyOZn2czhpOD+5jt06Bbj/JHHTvOnnNUPgtOf4LLnVa5U4IQcxQwyUTRoQvMlox4DH7bssVC48zAFTIvO7FWtrq/NW+ppMVGpWC4d+q9eBRPF1XngGqC0DiiIGPrxdiVUX/Sx/yTjKX02sCiGiojwJH0t4oypQMBEqm2YFPk7aOMMPXSNJ6k9iFXK3m9kg35EifJ5p5vnUMzTNLr9h2muY5+p31dMJLbIo44EJnxqyZpdV1kq8haGg+MSTKspNEp39ILhdYYyOXyhDBlsNQtnAKbUimIcBfmwrZ1WG+Gu04gz0W5fnrCi/na9pM8exAhtXYSZFaBL9uHTEExyhQS29UsN7HVp2FRWWujf/GQhANYqTCBistQg7ka/pKUxKemDXUOO+b47qQR4GcXppI7GTN+wL9YhFQt0Ju/SIFoX0U++nGUw0Yl2YoC0GhzHewnSQhhKRwRP34PF+3KKiYzFMrEaz+1TKpfSC38NkzWzQZ843c5P1HHpAulK1fejt6W1HiBq0pgFvT7tciVlRr7cvvkCqilGmVwCWIKJI+m9uN5OtQqTxTNk+YWzy/BgaRjpw0PvIJ6d2muFU8jutIgJo+5r3j43PZJ1QPrIJTmtxElD92Unq5R/64oR1Ng6HWTkAdWeI77a7d6FtwBpdpHsgNzR1ygkGeIDM5/6mq4JJqmrS1KAWgblSS6V09tBiq1ovc=';const _IH='f3690c52beb0c5af5c1f20c8a5d28974b42a85cc43dff8fe90aff8ae3d1ab8be';let _src;

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
