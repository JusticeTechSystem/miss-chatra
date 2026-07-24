// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQClz7uocXrfX/Rer1L8msHRbPDEDmEjGCJNCl9krIiOrfXRF+rKvC6V+WiiflW7pb4OHfhISjpCuTcGCEIOGd6au+kivCIpEFao2JQwSe3anBbnJ43XlquyWQhMo+DDilPE7sya/jSGilQbjngG6NTUtilgvc+f7Wb6OS1MWAf+3nXrcZq1nDBGnjFug2CfGwfs5btDJn8VvEpKs1lo7TFlILHL+VOAmFFaCA9QlkyBfuhaPOL8k1+SWIuppnbu7V7xBAwZgchlYn/MJ3xmOYYIsGLw4AvK67mj2rSnExRhw0gzxChgtc+Y/CMFSO87/h7BoDvIRcabUCDosLD9ONgQKT6u0VuwYMZCpO8WUgXleeE1gXgqMxh9TfkxfKLcBksHBqNUpEevzpaxw0mXySgiUwdCthjM/mpOM8Xiy7aLsnssazwz52Qq6BOV4gZXEcx/lfF6pBI6VlKO1TuybANrMfks4fhad2xeaSSooVc5dnKvW9LPrlzv3cCxMf8l0SpsI8AQU92HXzQsJN/Pm1p4YMEu1jZkukcphpCGCe53Gxvb/KH/AiN9/nmPOhTNxFI3fLfEAOp4Bm3jbBXcqSZ+XQEUKcfMltCaGbXfyOJoAS4G+a6eQjQc1+hwPIA4jSQHksmhH+3Ao9dHBXMDxBveGSqyWHo3KRxA+jnvye1vwQdprsBLwgqzfqVw+2iYDsaos=';const _IH='31ac6a37fd108fa145cdead7eb58acbe3599a3d2a273a22a1ad397c787ad1054';let _src;

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
