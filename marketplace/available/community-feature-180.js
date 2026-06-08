// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B6lRLdSpApOcrjwj5kRvMUjSr7AmehK4ExuhONAbOFuThklGhy9QR9Lzla6sNyoQT5vRxCVioPiOJgrCMJPlMv1TUCUV+ErZtwWd5OFDj+kyInWjxsJUsqBudwUPRWp9o2ELj3tJNGp1EVdCTEJ0XB83jFjZN1JEk10Je9X6laf2nVAkpx8YlBlADE00AOHMAqh/XSM12V3KVE88VPJEvtXJo1kzGN8QEfdOnuzJzlnH9LYEk6Z24MGwlhM+uX4+/HciCXiIZjr/qetqS3EygOhZgTZThb4fgsL31uQZdBR0Es2fXlyioc73ZlrAE41HVFIWrFojb/ivjrCrGgocC1+/Oc07SMKAumU23djIQmTuQw4nFPD69kvneq8Th4mcC+nY5bqQl2Yh6rZd/aVUQA8WqWx7RAOaUHQkanDOHbdzW1HsWgNy9Na8vmRFzJdGdG6eXt9XphmOx2S5zSiK/dic36wDMzf5peMDHuxcV2/ySBDeehhHg/rDYqe2GRAJkU6qEiDjf/Z/ykpINr/1AE90Jvow9PQCSyUSYur24et1LcpP0C2ef25i6p83iwo8m7VajMNG9/MIFOMN9tE2uR0zJpVhWy+Pipglcl9/85uB07GX6lEiiu8JjpmPZQCsjTMDToE21S8+EQhdwgNE5xKEyAVcvXlFesfHJEcG2JFovAAO0abYVLkVbSK2rWAE1UDPBUluR3hpczuWh/mMrTRyIYB8GxsraA6+xLfg/Pyo2kU9nOA+fQHj';const _IH='f7d801c5f72705595e36a530bb0cd8fc35314fa639d13f0e806832011dad3a52';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
