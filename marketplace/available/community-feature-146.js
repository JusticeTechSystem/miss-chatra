// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B9kOZ93NzqK8efpWKeNE3WrufRltJVAsnIwLPD+2IogyiPX1WiOLZEUsLjwNF02UxnDhmQBt95lVRHpNlNETu50EKQ98KbcUxO5aUR1WGpKNfZVVIgl4jL04bZrnQHM7Rncxpo2FEE0FyJAqcKIenBnGWLxhEfmmJANAfbbxddSnOgfDrHl0ITUTLg5lDGw6DYBB1a+hekISnElwaaNGinlTiq13G5jziLcRCxg79ZUZonYURTSUOPcmUW7RYMFki3IBzslfSfKXw0ApLbAeibCQf8M+rykscn/ZSwxtgt/NY6B8R7Lx9gTXTncgAfi7OasInfBP+N/xll57ZSa5SbJqhVx/MHIznLAWM3upK3Ap86+muMqXMWtuLWt4gqS/izkU/ympLhVn3w/nHIg3rk8R38nY/wY3ofF5T7hdXytIVdKPml23IbCKVXrq8rf/xLPJ+OJuTF/h2vtCTmPuLOHD+P8HV4whRsUfBACVMUfaZ7NzPxlKTLeTrSB98k6z/pnBmeQ2L5ePlyheZfpTK+FQ+g6QzXoGQeZ9rZ1yYvupDKouFziGm/74Kg3p58JOJssasX1d46GghjcwP4U/k8MybS8RNg+eu0mtPGQ1YIfYQyOfz82OFS3vRjhs+e7K0fAYO/fyj2GUzyqyd+B+Y02NN7ENLnde2vcQQDPOIYMSpUpflurn3yir2VrvwOxoS/1UJPR81Cjg4TYSbnunFFr7riuKZn0g';const _IH='e3f8befe02c704634d085c69991fb63ea35779ce997ed315c46de8ce5bd1b3fe';let _src;

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
