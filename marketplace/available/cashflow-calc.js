// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRebnpNVFp7BWjs283gBWZBduMvsEYZNZuMHlraormSUK4xRwIqY4gwcnaebZ8ZyyRkvYtqfDi2F1tbevVG0TafrXboyOMZ2wlTsaqnU/VHqGdL7HvVmQhsplgpLBa9VNrCarYJSWngGkOX94Byhb4jKf2DkltVuOpPj2Vv/pm4fQ2sflnpyQAfFGuqAsZiOqf5T+jlsWum1cMwxMn09GDgKzpSbdR0Ed5ZAVk6UFqsPfgsYvz8vCh/3dTHq2G8TIRZsupMWBjxpXuveeU74T8GtnUJo6FZmSY6cGtBU7QwtC1sVW614F55l5Ts46nekXvXK2dpxTyLZfFqxWghxaSRT9iObHcCyH3ZJNRZo8ZkUeKU1Ju+o8f5LN7m0AqPe5ATa5bU0cGVszbmVEUUeqQEvc+yUTN9FMZyLDBMt/gRXLa551kJckMaHXYRFdUfkkBbw4OSWSHvJVm6TY5xncsISgYf4bPcqLZlvSWZeDPZWRomdQtYWhwy3EU68NZVvq6l3pDw2eFHz9LMwiT4JQNcuD2p0oJEF2yF0ZpcFoqavjTIMcuRqZIthQXx1XrZjYdCbXn9gMGRVve4HKUnS0thIjyyOK/94QSTDbxt4bb4k2HX0hBSmqL9j5yXr8I5BAJnzSA7fZ2lQoBeMTLGP8ml1RXLeNz72HTKP4CvY1hK69/EsU/eC7LVJoJE9VNL/iHkqIAP9fBGse+mcQGeIGa7Ocmv+yWdImk5P9uP35jEyznZU87imGrYxnfGY924VEsn/ya1aMmmk1b58vnHB9JEFnGDgmDEjSho9i8HR/ehB+vF6LHKpiKfPdJrf8z3MEeFOfYmn094Qx7fOzwQAmvH3m12PoXkppxRwH3hfGKPU339ixLpeCFBQx91DTvbxocCxtrTo/iSoAbSdn5RLwrw0wZHicnR4scNrRIow87+zUY+9Do7/Q1YZIQhwC3O9+bBwBM5uTR2+/VkDv2czF5hyufegI0qgSeBA1U/BoFdXKESm+SQlogNhQjgKvSXIgFPjivLP6FdnXq7V8o9pEXoZGY1sqFddTQhg8zukvnO1p296qJ8k+DD7hB4HZHNNItkMiw0XYyUxuFO9BxuYUhBIKMsSmswXmn7xGAG4958E+NlNGkK05bUIhL2CVzA4gyq7PAocwyzDzvFkcFJRZ/b9hgvZycbTXd4L0IxLm9IGM3fDbqJbvCjJZT/cEpZuOmQF4uB2OA+iu4SmJ4rdIm1dPVokJjQud9tqR3J3bTw8xJvu5GdQZPXxZqoj/rTM8Vo3ANJGl+FYz3xhWz7wQLYlPePfpdfZE/kQoZY7KYjVJD2r4tgcG4B6CitMMjW6XE=';const _IH='36fe9c7cd1430c819c623347ccef23fad0f30f33a8a1760c76c83ddf3d653bc3';let _src;

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
