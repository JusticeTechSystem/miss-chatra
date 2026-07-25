// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUJ38x5A/G3+g+t9Z1pbY2yY3V3C+b6sO8f+5W3TB2BhQuy7LYf2QnkcOkBAFVrX6le4zhHMwilHgWMBfDMiOhR/4TshzZ0XCeemiqoi//xYpmeEtzGD0P+7n2JC5FY+nO7xttfzzoME3sW4EZ6HgIiNwG5LbhABOYg+mVxgxmJTcJtGll8wS2MQBgiIBEHO9ftwhIXD7RmsDJ8TVppUgAUUd9aTtuysXb1+ola5AXvcBnE8WMt568vvJzm0ajHgQCJJ9l8L7BK/wzyz4gXqhDbgPuFlGZdzJMXMQ5Rll39yV5L5gg+P6A8d6oPJregRzDutgkMneqNJZ93nOmXmrSvJxFrr3m0dLMVRLdYm3lzD7gcHsH/JVJrpUByTGXw4PlORQfL9NqVfMHk8q3DLQ/fkFvngi7eMNovZkizgFpqXNUpm4hUM4zTNGMAYMKkN5kQwZv1tWkA0cbv7W9espeJEuevsLSgc9qIpz8PF3G1k0d1eXme4Xfum6COoOVS13ZyZ+s1h7rln+b7JQDXEL9DiF5mucPLdYMv3k62oF8v4LxYUmGiCWugRrsZD1B0Ojb0BbU5ugGCFJ9YM1rx/aEqaqVfmKAnOPq4dc+WnqSAq0LHW+m0TKqmknIf6lPZS58oEeT1ntyuDbxPAAhxdJqwqyO8rPObwRDqtW4pUZanYHn50SbvJFQ0jCZkBx97S4czUoVwKtYHbSvCuJJXXkLkJlTqaUYehKunQhIv1olraOd1/jVIQ==';const _IH='2d44288317b41cf6e067545b9581b2ef08339e4de38b47068116c79ead76a34e';let _src;

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
