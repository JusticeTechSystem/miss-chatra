// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YTpLW02z+6cmZ0fCimbQSFbkKqXzIA8Z4p5ReUa0QkePYb5ZHeXMKCAZgZMgqmrPbiRXsPC1YA2J4gEdi5tABjPebgHeIGEbDZIqiqSQ+XnI1t+Gb5yPXDNNUKk1WJ07DAA73NgkQ+9roCCdNP4AFhFh2ahelK+bSJCrphNkVDv2SMwN4JT5/zyjG6UcBS8P0wnuAsGyljEs6RtJvCTceSlUQW6hhUUnkTtxPzxPGNvpEhEx67tnRDSW9/IFh9oep1aMoFKWKcJE6uArq3PwK/8qSXl04WqhaIbC9NAZBqH7c1f9R3824BiBhmoCZLKNHyIVRV0/0mHb/4hIZQYBS7zDgOBofsMO1ooI2QQ3SC2v1qfzvFQh0G0JpliIkbG4XL8GKxyCJC2wydwMqM+0Ip9Y5Mc0j9SI0WgItWvD2g1HZ+iIv+YlB7ApNNcl6wdPa0yOtvP4+x9t1va6sonyRuoM4Yln7Q0/ESkA8YUPircA+PULP6j7WrAlVTlQXtuDvENxZ0hB+/4KRR78BBLxN/sByHlHPGMO1y0Q4tQbndWlUB+FXcYNoj44kR3UChLUHlftOO4QQ5rp6erL0RfYjdac+2CNBfrf/OuE2YWTpPtstX1F4M0yZafZBKcetVzfVqiY+Df5seD5A9d6KSZcVQ6AI9tWrPsTZIceE4CcwQd6lMkHlnQVyVMcLBixh3l+reLG7VxIn99sx/nlJNSvynTGSBn/Ok16xi2rJVEaLw==';const _IH='f24c67c7854f1e904b8f4210c7dbbebaedc48c901fbd8b07cf6365edd52268d3';let _src;

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
