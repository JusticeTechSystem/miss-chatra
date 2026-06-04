// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/jMuBUy3DprCRjqwsmeUOeJkpuK3MNS0Y9DKY5TOSYVlZ8SqeVRVmUwOOYlG3lKnn7yPyoNGZygM0xfD1jmfg3qAxWuv454tSKUVRo30FlCYKLaaJcCeKjhdqIx/qWh/buzI6xmZ6U3zf2gpO7AKmz4A1ZC5cVVSKR8sSa0Wl1Wssz6AfloNEf0s+OIaEodKnzvk9dswOmtiMbuRPlfWaZPjoiUSk8Z/YDqSO50npRbCAMMa3zjKbNJgD2yxT6HfNVMh4XGfUEPvxF8EcZz0+peQKYuqZx3HwqfYD3n2muJBX29CqiJrZ2J5DOVBondYWBwNt6iIHIoUxa6XtW0yFwKVLF32zksTqPQO5gspqnF28hf49KZ5hs7rH3vkXmh5NykGVp/V+/dEIFrSV/tSrSbxsQTtm2bMQwJP6m4gjafM/IB09Qu0xv0hlE097WwapSeXfoo6T5/jPFzUn3E4e73yDRBw6gQ2JusgphxiMXnN4VtW+LIj9nvXzrZw/aw20AAAe9Y/99fxES42GZnGPtDK7GwhehOddneVl8NCWSfA8qArKLo8JtAKoeoOa1Wk64MFY6ogI5ZLqkUIRJpdqmVZ3AcCh5wDowjQMSitxkI5HSw21Rm+fxaCkEUa4Uv/ZlbC6x7RurvscR/RJlI4+jvOngdX5U7k6bA2C3VzUVIcynm08WiPW2yfSoJiAhIlD+TjmW1FxFrsKVodw6b5kBcBIAbFjq/4EEbVpdQdE09vAw==';const _IH='711d83822d0d4abe4ba7625724899cb2464b0af59585bf9c09722975a0a5e88e';let _src;

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
