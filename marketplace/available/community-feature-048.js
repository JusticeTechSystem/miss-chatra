// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FsziobyZx3WQVrvojPetbvNsvQSc7sXbm2o4VWNiaUBWeaQgAsqfOBN5rgAwnoD6au066pt6gpaUOV/va7aG6EPIZ4epcUgC0z7OGntW/GmZt7fQ4pQSYfkaR6cGFEZje4tUg1nq+K7vl4yOBGG86wn9EvfKjm2bgDOtbJWPXPV3wkx2Q5MhnDGXYmKPehI8OZsUSlJuFx57bxPwUQ/RbaZliQGPxuqvsLqYqqiIDS6p76POZ14zxstwTOt7MllxQCNMtZimXn4uUtOXgi442brxaJ3ndihdClYb61v72eug5NhOyBeORdjJSp6v6dLPibl76gH8ZaF9mb1G0jfDJat6oWkr0n4++J8YnZNzj2UWDZpUZYp3/aWtUx+x56SwMH5K0064ANdkuccq+HU1lFlr1VzwvNsFMu0Ng+QdD8g8WW5q6RavLlEFTyOYRe4rxmodpYnFBiTbQn0RZgKl75ocYFE6g2hL9vJj0WN9oyEQ1gb+RPgTC0nc3hRldEZ1aogZVq9OqIfJggB7fDImYUvEXiq8rXRBBHcHaOmP5DxMW0XKEzrM79lfA/Fw5AUwVioEShOYE2HgCdoS6cUf0wqDhyLn6xpBkCL7+8N9R02T9KN6BCbHB+ih5JI3fizba018b/Q8eZfE1/hgkH/wlMP1pvKUyzaoe1W2pEC72GMMSM04IJ2Jh4lhjFAA54XjW+Ofj2VtTYymyzO9sTgnVPRuj5pXH+8+OQ==';const _IH='8d4b911d30049b755363c93d32bd9eeb369e2e2841ecca18dfdf5467d497c002';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
