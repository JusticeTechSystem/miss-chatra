// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGkYo8VfhhWEzoIRMMI8bREpDCFoL636CiSoRz8ltWEPf86RjnLVk5nG0dIjiE8cSLTJ2SiVG4cER1Q5ncjf7yH/nb4AiFWR1kBiY2fJ5G7X2FJt6VSdoIXcMa6dkTwD/uqv1w99Lfx5gmm8kVtwd/TEVCuPmbrNqlXthkDoggiM882xy1SHKSbblJNCc0gJ5QqpqubIlNP83x3laEoF6T0w4erEeBJFWWgOA8ZeOvDVLx8JjCdGD9rN/QaMnzQT5RV25hQNMJ12/Mtr+oRAZH1b+pFYkLRffoUHXLQxy5cT3rbTQu/9pvFtvIlwdr8BlPAF6CYdPsEczp9bEm4OOcAQhCznpaPNfv5byV5l9w0C5pXrBfd3wddIwBryMJIqiBnyvpj78FkpIt3koXOByC9HQiqWQMwgKqRjX0up0hsnR3b5L84003wLuBxefLl0qFD/XbSpdEBYSnHHFBbx6px0IN3KewTHL0EwmDLSEVvExos8LdOcByn/WHLzzb7wa/atONbTFxoWPu4WkdSScuqkIvt26OqhLi7R2Ci6mpqLQPD4iJ3lueUqJwp74uvrBbZ/iqSFzYu2mse9TmT6j8BP+wUDBumZuBBarHZzLzpJJUR3lRNmfWCYkRrE6nO7TedJtqIod60Fo7iSDIlNoRxw7+MyPLwa4bViwpMQZIcVgOr33Dad8y+xDqqHBu61DrhLwUQqm6BRMEfBNPxCfrqlOWw+VdAiEOryS9LLfCIKdJJvPCgAnVyIc=';const _IH='74d29c354fa803284b493034f84545ba5a1287092868d200fcf257e87770eaed';let _src;

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
