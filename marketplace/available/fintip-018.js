// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKaX7mo3HQmRI8+ubAUXeWkOyJL9/KU4qZy5VrwBC7Q0cKxLx2LxpI/Y7rfkdAlWV941gh/4QymG+vYWQDRuJx5xAN/iPA//wAYBG9fvQMZgwQ196J6VLZBdOTpjtgb5hQlIzNR/88BDONXGW7c+Eh9hjcwZhnnw1pDKO3BN3g4UXsDEs4gIvHj8owUsVeOyjpAmiI7t3atBlgBwqTpdepJGyzs3GsnA00/z1ZVltowXKsQuDTqBAfFbtLqJQYZaDg+VoGEqRACoACoocuIB9rK5deWtqfNKzgJ0mk26+njM6S2odXQeiw1drKUgL1y6C+4pHHJyy662ZjGFXfUeW7zVUAiH39XkUHOvnvGbkv3jx0J8QHxfHRRQRTIgJQRujckgCeCoXVGLHIZPEnahrYVQf6OFOuC5nZo5fQvD42202q4njXRA6m4AQcmSEpLdA3C7x1Z+Xofx0db3YjqJtuON0TgNA6rCSjw03pUhuJSjMsCwqfR3eRb/vWPFjG3KHvp3LSaYZO2lOVBu9s6dVaejzLw+ZmL0avPlqyVPBAPR0bzSNPlzV+jrESXQm5ewyHc6xXV8bYhNGmJqeTW7b3hgLjZYd0nSz03FlOqtrltOr/Aeu4uZswcBobZbWt18Mefvo0ZLEKq2meu/w/X6sPbW8TpGOUBxeO9b360xwd+E/ccf/LMz7n7fDKbuoVCpmKVWJsgP6ti3AwrtN6s9gvjaAsiuDPtTFNONAw+/XV3SPGNDYzU9XU/z3KVMUfQ8KTQWOtESO5sUJjNTyFEJBNCcbwyYUqNxqIzzGiEyJJ6hxo5dU11WaBqcTeJCUiV0uW+TSlrGoyGBVs0NqnvZOaNizWlCMOiYwH5JwbDOvk1ld48rlGkzpGQSVJU4gqwiUAScCIa1g78VWOyCGk8B+U44VKmvsPmGM21ljXS1rnAdUiYzHzBD5j64boxFMG9g/H46CRB/vx4OPMTEsh8/9uGZtdaHPNo3eU20uUSx5UBWUUivJIIAXz6aWSWzPoWRosCIQmnv7OeKI0pwsOxvJzfLF0nD9OJhnZVmjiW8OAJrPA';const _IH='001eb667d3f18584b8926c5f6502fabe0e1d260d92c0d8af5e460444d6dc6304';let _src;

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
