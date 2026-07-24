// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMPMJmreJpXeeG+LHZ+WmTxPcrnaMEvcFrI6yYMKhL9DxtykNmAbVgSR+iejdSkXFHFMyUU9gx0/VFGf7DGOkOTScKGqnjMSqVqtYSJ4dwAGmyT7d4ERB4eFtH2yXO1TH7VhvJji4WnarPWCOTTufjZxiSDlHvnlAsD+BS+aAAHvZyNbGm8JoERH9r+eXW309mb7GOFfZvJw6Wl8YF8fi0lS9X8YVp8VCDMMEbTswHa3XyM9+F3Y/Yawkg/+r9yEoM9dhERoheTC2878czqSWdaevE+k9VrDz6eaL+N9Jv8Ua5wKLgcJ9UUwKorR1THTxdOBYym2yjmhq7KgTI0EojOjT77jiwur//iNz4jIpx/rKNtxfFUxNFUHn8+I9W3Kpn0ohPnKUY5WZZV0VuwNxhT9RMJutoMF/hn+elVUfnewEo1JnYC1M8vfggQTnHSv+qo4K9ssnWqEC4a8+dhW1MrbS05npXZDphiZamh11XOIhHnjZ1AkTvfctegF9V56vdY8WY/ERJ5lul/wFZWFMUf1YJLF7H4xf/HPuH9XnyPDvN4UZ3Re86Pj97Or2HM74H5sc3gft7oWJTdX3aagVmHJ+iz9Uh9A5xgHaGiZW1/SKC2BWrme2OoVTPl67lYvwCmRnG7L/0sZolwt7OzihfSRlYwQSSkFf62eAq+xnCVmB/+dL99PPwyi8FItJnm16ovlhQ/1MeDiAoCiDj4N9PuhZQZoRJ8aNEdS2QCeDEYQBYX4Crj/zrkfDrY/cqvCkcxBxJu5L2IoooB6YGKpKNlydoBMVs49CL1LzGY5tZSPN2SH5qPOD4m1P9FQ7FrCgFbe2YNMs06a+g1ZCqvyb7Slj75mOifrN+Y8Fl7H9F89LGlJEYAJRoG/vcX0OriPLZThxThLUuSNIGqGjWLjo2W9+gbjuiKnjhi1C9rxU47ZTbA3nUjkoYlHiyt75PR4sEfjeQAh11q6hhvSwORbCzRmdD6nlZ8YNMAjR9G3uKY1WMhKoybjVPivz8/+1xnGlAYg5wluGlAqkTT+EAifcSLtuRC1xp/KjNU7CMoIRg+if712QTa58Lr1yDncw2zA/u58rE6BGvYVqc1gu41NdROe6AepV/1KZbNb/wwzggfZUHf9GgQ9sMKrR2oyaJE5HInMaknCaL+WS7rdflsVK6E8LuZdrqOIu9ulsoCL6AO8mGLAyl7lZ3XsXeusJctxjdHd6JWMvRSgEZ4+Cd';const _IH='3efa5f4f8e655ffae5964041ef423d20535fc6a4f9494e0cbbe36da8b7b5c914';let _src;

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
