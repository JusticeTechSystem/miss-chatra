// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnRODcSGKCWqe5fgm9cBqd1RR+/IDozTm0BYro5nbP3g1cb67xaE7CC6yd+RJBo9onYog1ff2niC3YQ/l8PNEtX3dSb4ApxveSwcIJsPkc/EewnlXgjNiofa8JgKBxhJl+ESVPeh40p0orziXOfoGzU2YjdmZ43XnHlYggJ+RHY4egpdoDBnPUo9O2JJA1KLfnprzjrO4zi9+RrMXcmZIGMCwUH7L0J3ntG+bxkaoyCeTpzvhc52h8aMxyXDdXUe7UhFTWJnnJrJRRsDWeOva/HZpgl96H+/FNpAgyRnOgNCgkpPiqK+H37mVnXBk9jsLv7VNgavuw5miOeZWJw89Y6nB1XPggVe18Csa/AMti7rI9Xk5YyzB6XM07oUu2kHeBSwT3aVgOOcw32oBWMNsOUGvQhMKydIgsqy6BReWvbae+Nmw7lj0sl8iNXeFLeInzUSLnbxgSwsy/oAy5bw0yUl9KfjjsyeA2VhWm32FMKZTfw2diPLsjcRnr5dA0bq0RpVYCTUHMvz61kTRgQyOEigJ9auXuubnGkFqi+dde3iE1JNdu/0reXvcgAufc7A1tKkb6Cz0gYbuX0Li2sCF+ohRHKOFFygwtg+i5JM3wae5WEyse17hMQVgywUF3SnBvq2952/0FL3pjIbIU7WXADF745Y4opDLQ0zMasPQLexnqAEbf2gGNnASeTLxVLhJFfKfUZYULzUlq7FzzfwN5wZwe2w==';const _IH='2637a9618e996c400083e8b76303531658c8a64794f56c569e1d925a8f1f496f';let _src;

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
