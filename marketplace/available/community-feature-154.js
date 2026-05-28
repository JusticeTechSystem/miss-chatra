// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='No/W6LuAvbQo6lzRavMDnblF40XY594wliEuyy/UDIS3xiP9NniKk3K4RNqgLvdHTlWMhG+GY+lI4lwk6SHrYqwzAoSeyTGhm/zSBYqvfTnfq642zda8FSo+FAUsY+NADO6BYuD7oKXrdDJZCo5VRn6Ex1N25ktrfD/Hr0QqsHk19ADE5+TYQDnCuoRS9sbudAd5rFjVBlfcJKW1eZAr+fXx3B/27qeoASIkjcW1XPCuZu9nWlF1J1kfCd9L4py+blkqcnYvJ95mG6MZY1bnIFN+9ddgvlAoE57uDdJwzVtqZV48g1MPwYFB5PlwfkQvTq48mLYaPYbcB5cOuq2MFEcUQ5hVyRCHZKRFK/TjnlumSEUXj82wcQd2RROm3HwBRS2tb9gGvsZG89GK3eQqAXKOizmgVo1j0Y1dQ7VTsU7dfnMPHLPB7Xl9dAUdSbmEmgDeEf2GGKua2Drq2Z/dlC2/h8i/dDtmMGWu6E+NPEaSIQpYdzzxfOWRJJaWnIHIZdJk1eHPHvvo2PWyLYU3MsqV3eG4cbEgxpsf25MwB0B9Zxdc2tsyhBZ518Lp/YS3q5JqJVcJu++/brFhBIPYCEzemQVpZ99cy7su++Rr2WEMo5r20Ixp+je1jSFoFpKq6PdDQ/FgkKro15E8bmVcFaUqXOWfamxgGbMZbwF62Qu0cyLASlDKtquqFv/iZS83XCyA67VdY4jVZ1YF/wHVvbkFMFdjHx5XID6DmNJ6aJTTjUry3pA=';const _IH='e6f7c883d5cd30ca4570fcf1407e46b6d4eb3c9585340c4e08684daffdccc8d8';let _src;

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
