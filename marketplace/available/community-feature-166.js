// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwUZaCP67k4g7hGS5bswdBPzPlEMnlHchOgT0NzdBKF3Q9voOkPWr46BzpE9L6/9iXy/tvaVfE+brGZuaqmN4wc0z4Wzb+MqB7XMAEnevKpiP5FJs8PiXIxoue154TykHFxPG5cIUAcR8obwP3cixmUwVC3SQ0uDsGv8tr9ayJ3J29z8kPlzeeK+zz/6gNk/QHvTGy94W61hMGZxeTHvrHr4wusdsFRlV5DAEdoNxyWc+tfRoLTjcz4La+5SXthG1wfJy8mGHzAkb2D2Dy84MxaK9D/lT0P3azjqnfmtZTR60CvwgATbYoOyrlJK/jZ+wqNGnNdFd4OjCe8aFDccfKl8xpGuqomqctm3q9GF8JxubJ+ZTXSTGWYKaYfafZwFGgk5r7nTT6s6d7N9GszRgdYxNN3VdeTfrchxtIgs18YCOVUdhd0n6x0LcbVaAWwSagbvj73Y7djVxeO8b+xb6DkASs29pdnmG3aAxYWIqqfVbXr9Tf+RGQWNMRLPLK+EQqUKtz7m08f/3aM5S2cNLPuHV2yYswog3bxRu+jAgBvpTBlQbwPjTkorF3pTAHBr7pFKlwS03XBzArj6c/hJp1H1t8SJd9pzJx1vz7/iEDqF6VWShejKbW+hRswR73/VX5Q18LHPkzj6Muv4olpSh0j2o9YU6IJkjMeHAUqZx8yMoUEEAwWnmBd2vlR0M8cj/OxtSfET2PLTKNVjMkmIh2sN6dzQ==';const _IH='213cc6c59971855d8bb39d8eac1b5793cbaeccad408c899cc9ac0e4b58f0af68';let _src;

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
