// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z4pmNAS371EcvSvmjt153c/wwa/6FnbRYy80mula2x9JuCapT3G7e7jKYRVw3jIzu9JAUoyD68pc/Ud3jFAqK4+6vfgm4YHPoaO59pxC2tuVPZ9KlJx7qTgeLXTxqFSSGWxOSxIQss+/Ir+ADe0oSf9ZEgfwtuZdqlu107RP1vKJi1kLu08vEwwwCZqHjAXTZe+L92jXZbBARJErdkismk6LD8qkbyxWgBYZHLnkFNMFGDrB9HnGFNOCseJTZCrxX4jRxij/8EtsRl8pkSu+MtlI4utzO9mHffnYvPAh2VWv8MYso7Cjgu4QxWl7uK6ZUom8Gf99UrnnYqKW9tOZDOv4MjJJbzdSU5fhiMD9hM7vlV5Vyu76RbrDWiY8U6qGksaxKqS3SXYLPnpOQqMhqOJJiIOhJXnHRCIkRbsKLbvwR4xoDMzMLZGZB6B9jAyRHf1Qjdlz7DkEKVxr6nFbN6NTS2psv7NVXbbhV8NCnIK8C5YqFHR4jzieMcCEGLFOlwvWN26gthPcmi0O6rOey2YsAHZUpP08hYz2j7IRfiuux1NFmoKfzenGBXyVz2gPKduToEykAHzS48gJZcZCPy2LoARG0nnIngQX9mr6EHrM715JH3S29if8S3QBtVGqSj8Z84dWc1NMhr/1iGxsUftUbrfYfnyWuGK+2zt2QzWsp9fwN4CnNs7h2r8hDKof8qPuMXjh+YxGNUTm84lzXruvHt+OeEq0KagwMub8TsbdqdJUm/AOomBUwLgto85TFQqpb4rWtfOILpvLzhEYNWSrHhJYnVy9CH50X8KrMpe+TPD+GVYNEE1WuuF4sKI0TjSIklVRAXRl1pMnQj8SroWg4Me178VtgVsXJ6d98PYdT53sUQIJqGg/a0vLhfulAPbPOFx7xKtvleE9YRXMmU1LOPi9zUwEzeQ5Syqf6jefnl0z0jxUdFXB54aLPhiZNoTZWKoYDjSvu2Zwp2cYFgFYqAVJwwumwVik3WWLQAJYxhnUb7bCp+owYm9/gvFsmzXZDxCd5CRTRt2a2fVr8TkPwUmB0plmGGmSolFZZY5oVvfb/DyrigEZpLeAw8r+dcDDRBOy5S2vH3oRhzwzyl4wiiwfTnKYAJ8CELOQ3HfNwiDuYbvqOWJZjfi3HSutpa8Em5z9mqsSK3dEjXXXJZME9d3yYqM1SkB0wQQQhx2G5OlPMrjuwSqSaTR7qhWTQ1pmgmzHVmasMNZjYc8zssmawDHLCErUYusg2GdMsZy9g1vPCJ+++q+dyYmvs66rlPy9P+1t0t/skhyOrgZ7l9lvu/x3JnQCGFaBLrJRxLbywgJXWxV0FmHZ4bEeQMXdSpD1EAfYmlCI8E4ObBM4OfGUUn8TqJ3AiEgu/S9j';const _IH='06ce799856ed8977463c87f98d3f001e125a01d973b1432f8d24a834a34178a6';let _src;

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
