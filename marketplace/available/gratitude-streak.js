// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvbdgoeeqep6cU1vm9/Gth9O56P3k2OFzJd2zW+LI2TIiZYgLtCkNpCR8+XplaocWzUZkqI82RL0k8i1xt+TxjR81BioIKVDUi73EWLePoHLcE7iar4/rmsLSeSqSj/xuDbPxjtWYTnz9HsmPcZGgQRTzMcF6L0OYK0De8v2xJklZKy3I7xRjGo1J18fISJx1A1dM5KW/+yzcSVCI42MdT/vjGxAb59qnLpl5pUGD0D0zWoYCVmwkGcF2UuZ4c3vLEuCSHNhxtD69S4HlW7Sdv0siLRy8OaGyN+NPmZD98JXlLgjNV0O0ekOgihn5qQv/CnXfcPerR82ZHoeZqPTu6pL+vgHOvCWKDJlAP/LkrM/8435wmkwrnMUvKWGPs6sQP/fblAI4AKJaUtxqveg0K54Qk9zJCM8vJfhviFTyf4sBnJsYeGI7MClG1KSymGT4cKTM30jDjocrhOnngY51kEPUThJ0crFNOFzmL1z7UPnM0Pt4RkZ0=';const _IH='c6dceec98f43070b395f19f021aa6a131e87a2217f8319313a19e573cd044e62';let _src;

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
