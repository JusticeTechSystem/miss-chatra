// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkdNXue7ksR/gfkdHhbmTxvpSAZ68GSq8SXLIWI68FA2WLLVyHE/8M6dPCAOfb+A8QTOCMgcJ7NO44+HhnjAV3O4HFIkA1POEqRY8Bi7bQ03MkZ8jPTosQp4GDJIhYdk6U4NwyeMQ87PvGYeH7+mCQLBLswTWTCg4CJvgMRTPfDeWkqRuOZ7PpK0nde1fjqonZEagQuqd7h58M4fdUxDvfsrKJ0wnprOk5/IaJaxl5ilSi4RZYRuhuTDZxLKeDNvHVRmAvs8AD/xDHctTwss/GiY1Y4guQosnaL/hqllLDXdGpPgRbbKrPwlkddmUns+p8tqo9GaCQm3xOM7EI4FfVQGebxKNIcu1/Ik2vlDbK744ruZYwIpvE5ELI6sW4hd8mcMI2GL+VcXx2TFsCAWsKsShuMsUo/FGIcScV2x9aP7O6meTz68kWPHEHurBNA/fQTSGfS3/nKuoZuGjM5NrWDkacLVEhNTI2fVGgJcCKx5eNl6vlTZYiP4DvWxHo9vLAjgaaiu45QlB2xOOodEr+PdaHuS+R/GeFGXNYyfIvx0gIKaCnVpReC57YbM+0toQx3wuEu7uFJ3tLX3kNj3WH48Dpn/JCuI/X+kO+lX+8o62nuT5cMzecBbCty1wMV05M5xjdn0fzC6Qg3jTbIVqrJ4Wvy4HGR08L2PZcVTaOSMgHv7LmIfGzprp4ZwAmv+WkKEuWpF3ZGahrXX7PY27z1mOY1gzntH8m0b+Mga8y1czHa2094fKVpyFI0D15QxPjfVgLGq2fxBBoCz8OfbpmyGCM5iyqZrIPjrwTGRBSoAsNdUdUX/eOcdGDecsXJOdzuD5/c4t+sE0ZRO4NDrlq034UXVVpUlEqwpdPLUW+KA79FhSW6iQ2URrvd67Ddv3TVfoRgRsAgex4SzyQ7YYqn2uP1RpgmU+JhNamxBdw5bCbkEpRrVLx7BH4u/tXch4uH7mNpCOaUs94t1mJaoAZe7eLLeU/qURE3yyq6T8eA6O5Sw==';const _IH='9f151dcd468e7790f312f51077fab0b581a608ba866e9d2c56b0ac02d884bc8c';let _src;

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
