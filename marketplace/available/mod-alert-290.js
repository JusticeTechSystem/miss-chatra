// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlDN4/oM/TMW2yLtxDa1wUM5YraHUvp5I3j3B3TCZFDfM2O7H0vRHyUvQQ7ocjH0eUBnJAkOqvrb95OF562Q0fKKoJrQmOsTDvhQ3P75T9xgnTsm0uCwfCfBUkRUcIT8TGBRMO/wyS63cko6S0v+t8rsAw9TacTNs1PrMtspic8pWfjxRYLDGnPALEsdsHwONC91QenEkZ+OO7HxcdFlJwpIixBvpysSVoZytQm3yZQAhIl/hgMxgj3t49AxtPu5bEHn+C9wg+oirqzBT4ONK6l/+CD+uFMv7Xk0XVM9h/lucAEiwgg6Qqedjw0q68uMlY0L/xZAmmx02HAX0jOECFav59OMyG89tnr/6yWcULdiRALna20ABgvOaH/PRnzr63YYNqk0T9O6LGfFLtxWOI18u6pZ3wQlDo/IMi7fzf3jMc46ciFs57KYGN24QJRh/uAZjRDAKo419gTmYyCW3bJGIw43tXkPV1IVVMPLh3QLceNcGXQSAJIjVmTzMu5IzsP+BzvFJkP5EGaMtRfm1oePhwS3LpwgG2iH1/PSTFMmFM4SDNkRIuUQqzMd71807ZTOSfUyiFraClXvkFbj8awkTBEeGOUwyQtetysNAeLQF85/eg+k0dRS/iR48un5EcF6f4vniDiN/Q7wkFwO0fRsModyi9GDGvOd9fN+Izi33OOvJiMD2EuumOGVRtjPnn2TS484jufupWao/MKnL6Re6jGm6PnfVEtzK4WDAeS0/aYK/rm8L+wQsD2QDyPqbLq7rpKZqh8/0D67R7i8cmkW0vmLLFfs/PvrX4IAZ0V9tVzcIoW+704h6OEU5DcSlIxwh75JljJKl7uGXKVQiVJeSZcFSrnYvZRGWH9au5TAnV18JhTgdIQ03UqbZYX2Hj2vMTxzewYmQdavzWwVv55gz/JpuC8LkE2B90ENvp93TKOnHEB7utPGBMTJulQ2VEqk0wYq3LK0TXq+lP3+7SCXgEGnM3PuxU85XeBX4+iwsYJE/hklM9n0GO7/fw/SO3JzRiQFD1F7Ei0m/+iza5WzbzPNHoRsAZZjkS4DRrtpL+CBXzmTDE8ik8mPMrMwX+dRxCVUzFldleuCQ3c8K6P6OX4NLX7VBRe4xxc6yQjnHnS9E2scuT2Gm+0JGQIFNAJSd4MEoeIo1Fj6bWuogNOv++KVqmPh0OcTq65RcgWrPL75jg4Shy3DhJkqg3KGfic7MA+iS3nAOamSw1p1OwtpSrNWh2QWs+/sUc46RDtg8AervcegzFYgyjFSjA+bPPhxE23nw94coSqnm8WbB4SGm9d/8pVK4s0H/t48yDxb0zpy/9ebVO0lQOHv+YUw9zZZPM5GFbp7Q5WJe4cm2wvQ3Vs1Sy8IwHFJMz4C8=';const _IH='9e012f3df4f9c2831d54a86eddc360d496f888e3f044bc47b2b8c59149693e21';let _src;

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
