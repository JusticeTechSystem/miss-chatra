// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eKAc3fcDqZesisp6E4pJH0ETEy2l8YNBo4Fk7LQtcWG1LoEJPDAAakNQ2nCX9fwOPSBNAYqbHibZrkYaThy5wS53hIhYSsjd7u4zuOj82Hl0JnpfsgYkGcdunZcF9D8DA5ulozsB12aDQbL7O4khzlr48Cs8p+CgRuBWZPzFd/rwa0OcdGcXE1MmUiqjU7krhD3Z1Iu8FY90fc/01brZ4O2r/u4MxmdXWe6GjEfAfsLNIKen6FiVLOkpYY1GCV6x15p+7zJjQKhQNRV1UvqbGyxD341bQn5LbZq6MlYtIQotmt8kJ1WlQqZTVg7jOefG+NMiefssqFNrYDVt42EVORV0hl8XVO+vkWE+k1cDLrIGwjD4U9PEdY6Pm2EBsdWJrqwPqyyXzuJWtlyW+dv8otOxGawi46Z/j8BUZqlHZzjyltJH5IS9NUsNGkS1u0Q8Du+x/4wbA/6NRWAVbE6iba3l8GKRgXpZU7INeOx2Td1X4++pEOQl2ZT/hfPb/sS8+aGLymBX2pAix8u/EK/Kyqc/KfoysX4x/nm4QPCOHqSP9KdNi1ksv5KoRaBEcWLvD+PFTeMxrxHGOzEXw4zJqOuDMqbTXmqZrIdziQkUt1JptJ8NQztmZ/khESd7Y5GKIOetP2hiYLP8OFnLtDErXq1CCWFTgRhL5tKEAjRc6rO97gpIOkCSTSDAZurwVagQgtxmyu1Tmz+c6gHobqMEwCLHIU51FnLv';const _IH='b55286f3e44b2d15e5620215e9fdc0c6a757791628e186834e1333e598e22b30';let _src;

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
