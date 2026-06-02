// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3GlbZeQLYEHQiB5GWwxWiHbm4ULT9QOhZKpkN4pPpx1xUe1MGu1R1GK7nZYw3P6LPsKOPsqOFy1sHPbSdfBW00hQgsgDCrDRyP8+Evw5NJlGdwffMct86OhouzDQDMtY+eWXZrWXf/9m0cJRZvDq+X9U3MD2n+Vm2tOMpBLy+jawKzn1GMzMuL0tUdI3pm50M0ajJXcK4+LgjM4CgkqUtBTA2OVxzCHwkhCflj/OoSmwOMqaqaHs82oWN9dFgPONLRAllieIZDgwJAHzT0gPhh6r/D1FQkzLx/YGLuURYrnuygUrjM4OFufARoRsc3YD/IZ1mt2uPbY1j7F9N3FnuJjQstk1VLyU9kdMpXl7wfawq3w7zIMS8yjfMO0unzFjVdiDUEhkqO6MFLfg78GF7ZcIKYk7RQpPDqb3i7izIuKU0AynTIooUQncm12eed0AtFVP265VyUhVbF9pWekZRYKKfU8VRn0sLXwsoMSWBnd4il8ZSxwPb/8LWQ3HrIA/5VPTaO5piD+DKZc044xSs7Dw8rng1AdIyRjlpB0lRa4i+fEuNTLZBfVwDPhOv6IFsuFj37avRdxHGpNmWcAU34THgIo0+ZgN6Tqv8fJXNpirmYSeqyYZGZYjEsPYtEtbi1IyBxOywJAaEG8To/PXT3Q1nDvVpXoXKGknb25W942iA6ijYCEqeqXOE/j7qMLLP6DmhV56XBQNDYFO2UrEEG1tYX08jvZHewAxCDHYeoKe6WS4N+YhvL9CmBgFwiBGSl8fUeXvDJpyIkJnt2kDpe8UWnZYdaC/T91Chf8yXlhr/pLxlcvmuZ7/PnBU/dQjz7qtBTWTTOZGjaOyUX+wfrcV1L7F4Go1NdofSMUqk7yOlhiTnVTuKqeBY6kHimjnoeuRGgfuOrhZOW4wOxyiV/dxKTpwvAOnJsbOCHDBWSOdcfj83hGJSUbDWsaaWeDyKDc5kzT06tAIgMLHDyzZbttiqwH7PxWIRlc70TUVK3rgxG/WFt6N1JnaX1mvbcu5xe+KxpbPm+vUKGZ/TcUokC8ZE4cIFo5fnJmWiXfNqTUMviISpVSBHyJWbvCsWPAXxwfInZtV97MVkzuxyfZXyPOP5SDj/mygnLZBYG6vCPNNPv6NLgtFqcgvKzWNtc9yV2E/GCS/vyZJcNw5y5FCm5Wv/b+TkSsjCxvyEL83V+FJFIxPRkxquXxm8pYxRJaoYNrRR71uaRw=';const _IH='3c15ea7b97a1c9b90f142c413bdaf97c571cf79e6466c5ffe613c13073fc108e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
