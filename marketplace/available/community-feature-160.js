// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPetmjrn0/qMX2dFu0q5ZRBl05neorIEhXIuAMMYMYwJs8hMTJSSebvxkPCxyGkrEM73d8NACUMtTDD9we3/IixtMwDNRXpZ0MR8kbcKZSwUC9VL6EotEiEzABNH9UIxCW0oH8UR0Qj9oVvg478Bw8MbD5301R73QY8ACBl+NN0IU5B2ooRDsF56FHEcCLYSCXiArORy6W6Xao5UG5I9aBBIZvxXOQPlFd/2S4ixRfuHlMlAmE7Yx4vVgz4+Kdpi//qNeeKIR4WitPzJSTif3V+9Y2CTFF9TDxcf6m82rEReW8jwI22hb5NeDCp0+qsiCdLq5OJXFQfziMjpTjn4Z3YZV7+j1DsVzk3IWjNDihsdOXGqesK/6F/DYQdtBlRMlJt1g3OphiYOfx1bShcH7yj6Hm5Q5t7WsAl7cVAP2a9TkPnZVXVMWEbCQf5F3k+IJNJWHEPOZT7ZScutCUhVCVubZG7KPew/kZA+qJtgL44CRlgbUAVFiUKLZ68XuaFmF+/D+KEbqLai94Qdu1p+D7uvr5NbqV03oRDuQ8tYdCBK5dnToc/s+V9+QbCDGeyhCODtATpeg4eMLmMJd3bWHasmVkeDVt2Iop6dizDZuaEGpgBj+d67eTRm1l9LE9kN0mnGR7zKX4R6BjxZcUpLOYkXb2ZjrC0kVaG1nyQ20vbsY5jY7DVkefEv/AOk475H04+OueHuZak49J3hrqdYCOiRxaS8Xm2J7JprSu9zbZ1Ytn70ni35rOcvY=';const _IH='46c3a9c372427724cc5a7c137bd637dcaba5558b88b8707162f8a0635dd1c44f';let _src;

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
