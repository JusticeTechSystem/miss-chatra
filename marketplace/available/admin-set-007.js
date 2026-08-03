// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTRvnvl5kNIbZX62DPv3Y9ieUsMCl0Ek/eoWjtvnVny3zhtosxhbj1e/YYjMWwMh4GJaeeEpo3HhSuToldVFNOBE7CGfTTOcoCdKKGQR9sErgpvhGyFZTTKVQ7TfXD7sc7XnSKQnyPgxsNRvsoWaVPA1dhY53SDPHuj1PkiM/JU9Y+atcFbSIgFooTHsBxQQUUl6bjeNfy/qYL14tMOJpymmbV8/Us9/yfuNCa6c5buLCejldjUXm9CX5XBof7/u8RFzXfu2xt7jusvvw1tcl+GuwSaftgH6Rq3+fDQB4D9hUv49ulFZ/BFZ5NmLe99I9K+w7hu3f8bfrXK1aJer/Moa05LUm+I22gKkl2ASPMN0wCXzoLJIWE9XfayQ26lPneWXzskpT7dQ/RZlMCdBllFq9DAKbFXO2BArS3HFIHDcRjxXqE3mEjVc0qwFfnQ2UCo+QW8BXQWYxvjuuvKZ7qC078PctGN3XUghbfFZTzzVZhxl8AYxDw44KXcenRS8nYEifPQpIv5xRpgQiKCNQy3fOJz/MlmYdUiOCLJ0a1Zzd8ZuzeZ8j9gVmSCv4s2M4SoQS4sthDBj1ft3VMwDfmK9+zeA8ubiE4qgWXoDi9HEfg21E6P43gKFblBYwPjUYx5PrfFJX+IohIze3AozVog6n2okZcp0z9wR21dpgdeLgiz/zmttGe2PJdptrWnvQNSMqhIhs2WHd8q35x9TGu5C1hZf/+umm8pVzEkemQw/a9+EDdUGnVs8X0ltq3b3o+gx5U3v6EWLLm2+0p88u6bRL7S2A21tHqdxiHKShneuf4nwtAnqrq8WMwOi6dYtB1HDRW8U2cLkYVktpgm0rw2xdCzGkFC1E3IPsVmbc4ePIW6iyj7v0NPkS4ys4JTq+Rh5fog9CMnwjouovvukR8AqpM6EeJr5FwxyxS8CwM0OhXo5Rm3eu5cBKjgJuqhdF0U4AVF1JcWEqcu1s298o3TpI=';const _IH='94e2344351d2ce792023816495381793014fba9fab45550707f483f2cfe5d7b3';let _src;

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
