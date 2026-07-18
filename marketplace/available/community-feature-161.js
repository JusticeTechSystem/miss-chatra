// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQS2tE6RE53Vfgeeepdiob6bIRZq1RFVhyNQtuwfLC4yUByccMXRJU6Ajv//rpdikeBJus8Nu3QOmY57dR21XQjHcccr2psyHVQBKPveXQA2HYmMa3JK4p5orllpQTdSwHoeaAo8Bvg/dcHfluUzRiABJm2xwOI1tG0H71G6aCVhbvhdgac27Wp49bEEtbI+zBkdnfp9qDVZL8ro7DYmQ3oFjKKuWrY2osa1MCPP8nOX0KFbrTsHFkaCCohd59BAi6kWQqMw40spCcUTfrJDrLaWU61TyXAmhGdKnv6tghBEhUznyBJc0M2X7IPz7t9nILrBZpK3+7eItCIjzq0G1DqACEUMmH7T/wvlLQnbpKMKMQ19vMykRuZ3TEpsWGEaupYQGkKl4ondTOt+zQDXxl/y17ayhMizwKotHEm/aX0l1Bf0kmQFG/VHYqNz9VxGLZHW5K7v53QpcLKxoeQIXk4VcaT+KjenXWZNjsKHaID/l7qztTWN3deNPz+0Q8AnVWLRjHXVW+ioWaPsxgtGG+tAJ99M/lOPgtnVWznRK87E4M0LWCAD/Kd5Ekndyue278j5V28JS5mBPko002aFoVQaw3kamDsllDzPIrIYAESTvAfNsxhrtc24dy47Em4susCKgOEF9s7re/zDXqwFOYdQv2E1cNkQ+4FnDVsxaM70sEoflj8dn8TZN2kMbrigVfmO2Ff/SemYVZ62rgoivPqTSNDEyKSb/Y=';const _IH='7383cdcf339a3d1286d22c4ee8831ba067405e3f619d6625365158a69c9285b9';let _src;

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
