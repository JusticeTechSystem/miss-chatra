// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR99hZUjUpKxYYGBm5a7GyqJRjeFw/k7Xim73AwHgmiBKliTqn8GzTkThx9iP2QHO6o6VFBJ8/WNmr4wei8nL55VE8Mh8nNHjkP1lNP106mns/Xchr3y9maz/FGN4EMGkVHFCUJGM9ZVnJWL3Ha6AIBb15navwqXMbizNOTO6urVSSmDjvjHOBiOYBCFZmVqK+FXlfL0zUIPV5NjJBMehZXgYQjyfs692gBFu+kRosqTuqhg1sc1o1R5fWWAnoNDxSlpejM3Y11cGiGRQ+eyrBe6j3ltYX8EFaZs4I7TRLgrHG2Ofh4q2twM4eWHszDUtte7b0+E0DDcJT1H5eS84Ca7G6IvcYK3/0hdM7pg19HjdFlzQV2N7VTQbJh7KsKIrylD6t3p6FbF5Dh0G7D+PROkKlrI1s8vX3h8PbR6mZUmhL0tKt/azFvOnI4VKo4PbdlkM+zOWbNSoI9g2JKFKjxfx2OagCfoXK4rmPjCuylW43xOe7SCiQWcfwZe9qQCc1dgQcCJAJDIaefZF6us37Y9FIG24bLPULlWj66myywqkWPHIF5vm6g6tf3nLAuWEfHbkejrVbwtR9LQO9PE0bTOqdOJTFYvkwROPUcMdYo9sdq1ZkI155kFIO/0qQlYHhPqN6fWPmpSevmbQ==';const _IH='b82c8830bb7b109736f327b2a43e19bc6abfe72caea2b94f29f971a067cbcc04';let _src;

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
