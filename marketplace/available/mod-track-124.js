// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kMTLnhbuV0APdKwx63BGjb8j6NBK8yeYXLMW965gRCvZUNJToO22xsvGMKb0zf6aT6nA8eFkKHyVr0Bcjg/s2M3WI2ojHe7DrbuDuRp85ck0Evq4VbGMNbFVJnK5JkngKmm/O8HLusIApt2H9zFYxSu8ohcGh6k6KWEoANSgqDuoiOpXqe1pfl269cx/290rPUWFS+cx+mZE28JWdy38OzyWUZ7IQ3qPnm6UoYfNNnaRHddY2KLDhc1F1vYx8Q3L1NtUjVtwuVo9B5t9vVhkZTi04Qojl/vVOG0bzRfiVnZyWnu9/Ir4RYmQjzpte+AFmLwQIgGtDJQbP4HcErhJOaOfwtfvKWao6mj3p/6Mr6FKzU9cpBANUc+o2YhAU7u20V011w10iCOs/2xZQfDaPZlJTApelRnKOzI3VomV32Rgq4jttmrD5SzwJQDbxJKgHl6l0tS0sK0WjAk/29BFcnagTtIFRF4sSv9gc9RoFrY5FQCBAnSx7G6yP5LL6YNOWHuQOH97PjGjAGIQQc1Ex2iYeXtEpDFfsyX1qxCxdOALtukhmhSK/wStAzaJYwPFYuyu+HYBdUVgtaAlaCgfE5H/pW8NYtS5noHghie92imQGPJTywa7x94VFbEfHs/g0YWfWf6uBwikrGfVjtR5VqkBFLrPbDHJf0wyfOQNg+krqJnw2i3ShTAM1YiFr4+BaYkD9ICP40ksaKtPQ9lOPRFq7cQ+JqxrT8rACR6OLWPIH4COAyqiwfzmAzmZGk5TCqcSnF5WPCHxPHxri1hOoEjDVjnIujpHf/vQ8A8Mo4NQfhRxpJ1GBCVen4dQHHrns048lzo/uDCx78/ypjQytSVLi3waAy1LRIrHcrM2Fz59XwxdEH2KgvtIyuMKbkRUPO955afFvtc+lyK5LfkpV3HH0y0DovggzN+SaB7NGK8gObkH0CNgqo8RdEGzFfRq4FRZTyDQGJwdXPYpgIkzGrkZfNmMqxiVh3aerdYavufdZNvJ7Aq9K5ub9JfY/QQ2LjHpJ3zxZbgZ5blPEV/tZ7o7OZGZuFtEV6k8Y4ABRVyiMxUaZ/bM2dn1KjejeOGwYarqJAh0pphCvKCoHLc55284uoIn5x7aAo9oRfEECfyDPSlRqWhyu9MlSogPCJMTX7vmRG5PFU70IZNFVyHMa5zJV9ZLL/rAs5I2b09mm0OGu033wySnq4q53wEJGjNmS74NA9SsyaYkL/vGzg2+QNXTnMp2dMq+f/qyXF3lWHy5ApT4F3lk1LXIlD6SYaGnSfXvF88Zxzo8TM2/SoC7I9/iFqaBi3lccRmE3wjFgKKtEJJG2cAfqkpkswVPIIPza2u1yGbaod5gccNmx15bw2y3ZrngjqpzZ9BL2y1g';const _IH='466c4ce6cc275e5fde3b71f2c681ec469afb07d9fc734a027151a0a9e306cf7b';let _src;

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
