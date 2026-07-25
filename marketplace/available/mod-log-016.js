// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5X80NjXToJ/VeQ541g0q1c1DpST3Gv5JrLRoKb5bS35cL2lPzddWaXhpykZU34rm3c0WIlkWN36tFmmVFUgkBijH3Fpdmjvdk+5TTj5oTUa+TfkhQC8Penh6ELqx0fKAUIy0ysUuuF7/jhBsCLVLaeuyDbh5yHFoUSDKrMqrdMgZjSsLfhS81qcDrjYd4Qt1Ukb6naUA4JYJm9Kx1yvpiI9A13NE/FfJZMM12gmy44i4pBlgyUT5kK5QuvmAZeP7Ml8SHiKxkgxZaUS3L7T7ydt9ugjFBo2zw6fN+OpBU0cfa5W9E716r6oNWm4SHhWYnJm8h4+8xxsIUn9nOzxFLSfem2syJoRDn33uzoBzj2rHwwrbz9RNw5WqA4EWiewU6o8LgzL/u7NvZ9BwAJiqlOtZx3renIsz5Zzh7OMo/TtX8Sc7zosWbTaDXt9D2e3CFEZyXWjq9yIGgo0Mndr+Jz2K1Is5M9muJnp/9vbE0XdB6sITpcH3INKBuB8gKIUyda3ad4CT0z4T9m1aZFjsFnUFr2a2t4mN6KWcBbR0IDmRTbv+2eoJdbK5eajZkcoAqgKnWTYORtLpf34ziLdHxipN5vFMGYFAWwM9WObOGhCEpKu9A7+cJjvDRDrbxOnCpJyt9TnVkVHHc2dXbS2q3WojKnFsZBnUXcEO8hiNgDWBg9d/qHV3Hnle6/Hr4LEV/6VRtVSakJVxxXJ2EjUG+swO8QPo6wspvk0JVRg8LrzE8iO64DHDLwHFCC2D9OIHLMBEYZWfWfrhsQ05DKRPKxwt/5zwiS2+9dxQo8umomfYGeo88mJdCax7VvPej7w7x/YyMoOtLt1yLevp8ZO/nXYj3RbbSUSVUONjnTremtPMfybaOsLOcXHcuSMRqgss334sJEb0FNH+Q7xApgdeuLgTDcgYUWezquW1jijknjTF0zKb3on9Qmdd3UKyVLGfFrno1yfGS6tMibi5o0iHUg4ta7C4xJflTspzfh4iRyWy3CoL4VHl/ypqB0LnLvz63hs+1kLUuMe4uSLWoRjKtzSb2avz619E596hE3CKQ3nPlpp2SZV2RdpBsR9kHREhdsez+QQGKEZ5LQSYhd1ik0uIq/I7gTJcVYkAcxRtK6aTf+34MHdAgJt9jWn5XkP5cYltDkGZueFnPGmkDRFbV98jbm2hEEknf5vHLkdfypaLwDPfCfEkfpOwjBmmuYvYEpLyxbYg3gShhrpIDOvXxrZiiA2RukcXXxTiyJvVIkTekGLOxo5YEh/Yy8X49G+6sLgpPmnSasUQC3XTREIiSoJ8NmJ4g4p15A1Bmbc9esKEecYS7Hodm25xmzMNyg39njQe8hw==';const _IH='433de05b911aacd1f2f1e9609fbd76ef8153101dff985c05ca4549e3357456c7';let _src;

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
