// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OpwVDwFDPW2abg69XKb8Vp3E6p2sqNGKabIpjUCBY4K15o4v52vYpqnlc7NpCscLLeQZvS2E2XbtKrPRSNtvy7i+HnYGMlYxR8skqQ9oLDp+uyLnmY/r5jkSfr5ZuqXF/xOgDY254pQBUDjlQ4AFfEhVZA/RVQ7PSgwwCT3gokQo6HyUoxIZZ0+liAe3EqZJeG6BR9XYFjgjG1Y05rY6QvTJ/Hr5rlmUSj85mqzifL/U/0LPc44iuGBM9fTvOJBWlJBBBap/FFm7K6yDFO9yqOsguH1ng5cOChJe6KWKi+gHvPOBc18p49jEHgRrL8DVcZdshxgIJWNZLHAwyODevQ1C0AJuDIuCwGuGw3PpRcqtUteZuczWwU8ixXTS2fYLv4Q80Wz9mAgSlYiaYX92oPtv47gqX3q8Jq3Bgl/mO383ipBOgPh2KQ3aa+RRMaQ8stxc7A/sGMnQ+I05utle31G38Mc5ktXWcEjqj8DQ+YbruXcj8VVcKhHVHhLC3w+aPNwMCa2+UmvhQYOidYl3kk0Wrfnee3Cm0AA9v/5NMYmsVx9XQgOCmx6Q05xoP12bjwgKRNxKyLS6u4UegDLgTSu+l0AvRy4GmqM/rfC6cOAOf8TjLiYOCnIlXigKmPZjKuOZpFHPkXB70/8XE022XTzb61Ok4EgsgQwnY4Ti206D9DOJw9zsPXxP3flhDnZ710ODYe8l4QsfsqAgPfYxG2h+dakmQ2DEX9zXa4BLmOBqx2i4qDAPEp4W4+gr2Awj0Ui53HqYhiERpKyzdk0E1SaSbuuIBAT4+fq+eWT8wB1otg/v1bWK1fLScrrFQQQk8nRhaeJa2jOapmbVDEmaA1s5wic7nwrmHlnIOWAx5mNo7iLIRqooRHD3m3492MAq+PFMUOXislv/eImzaAEyBIIa9Eetl7zVrGmPzSHQV97Zf3+3z7hqHoz01Yl4J3CpSZGmHfKI4O9H9teo7lbmBdOpbRghh42LW2xANK6AwkMhuak2X/gfpCaOfj2S2FNEaw==';const _IH='5fd86d336b59bff3d00bcbba911c28e5b2cff61d3014d05cf90bcd6ae39bae19';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
