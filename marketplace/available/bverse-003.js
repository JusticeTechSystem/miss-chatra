// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4sO5239nPPL6XdwTIOr5f+oN+OqlzZGhHxMAR56RdYqXculGAC6TCc3wcGFaGDXDcbtuy3SouFw/5NTV2VFBcg/JM7U9e/q1LqJBZu1HPW9YlOp7nHRIES/nc7Fc7sQtMV3CDp1p46+05gppev6kXKLTUP+sEor9gQL4EOwd3tDn2kK9nHx12Ya/G7rJ/9gfQSCoF+aUuWsxAGT5Y7RXk3xd3R3sLsN62BalLbVMNVgahQppuJUoBXBuQWet6bSLx3zDry3gYU+zsHLnAbT8e85TwYbpTDuoIrwVZRCn4ynqYMfVmwX2AGrNPd0Qa4/Js6Afl68Au1G04p4kqfniG4DliwuIYiw467Y1GDvXGfv5V29INlVV4207E0hEtWn8vEUhb8VsckhaXUcITLtWfAedMpIb2dUoWNEktNcb8MEVTRFMiO5kcZ7kruiKWIde9sK0R6zB9oCyt9sKc/fL8uLGhkFbL6jhRsptaampUcdhEjmHUEDO9E5wtCTveu/MEj690QxfLPzMkkaSK1E577jQUFbP1aVDKE5WC6r3dvPcgcIpX+wg5EHHmwlT+Jf670gj+BpPgi1jVp07WESjSlehWtwYRRviSn42kxyYSxYaf4APpDbdjeRxwiWcEjJUg0j5lHCEW3ZM+b2hrt84Ltavl0Mc8ENAGXIGLmGA4pLj9PY3Lyj3Bom6XxwVvyyV/A==';const _IH='4d9db6b47d4f8e75588af6afabf35b56033bdc9a031a8c45ae143a4652ee7004';let _src;

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
