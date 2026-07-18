// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmOypfwOajvcdp5dRs2J5ri579tR/anRreq/zDmMq6tCPxu6u00rcPr8pVOtco10t6i37zs8h2uRtXTT9TKl7loO38YiTIE/SJzRQUazzjg7wIkP/HZFL4MCXh5X0uIWHpvR+cQwpa1I2r/wJOsI7QEo0vrfgjNiVLCrddhTU4wI2+6JvhllZHXqg+ce0WQYfiGIRZtas7nT82xd3L5rKcDF3KVTx3grVmtByTo0xpnXuylJQrgQSHQbqzkqI6YiwIUgjWN9a4Oe52qzyx3U/lDnQZ/UZXs+SGEDLhBkogdtziRJ5R0OpWeqGhIvnpjCyVIELeAIhWMtYYILpQd5ctPDG3gCBUW528eBZNJgLW06uUxP8OF3G9zgtEAv3WUP4P604GkvXZlIavKSQ/3s6j3XrtfMwFCFL6MO4kKw2TdVWBrNvCa05OHN59ItEyQS1xgDHwkayy7mRdWahplk99JrxsqNWcfJZ0XukOyH8V+skgn+CDC4Mp30/SeaMDOMUGmH91LHwp+1UUetPagQTO46Y/aM/e2kCJ+aqeE9z+U94pO2nuzw43OTgFcFkB5XO/AIY8VZZatdi5WePCHHbHf9X+4rM43AxNT3XI4lSTEXDe/dK4VQI7nsTZoBcBOUlTHIq4nw==';const _IH='5fc88b901ef96d0d2896d5506521b598cfc74aa84dad714871b3acedf11e621b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
