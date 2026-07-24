// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuwFr5PjPmxbjMWlSCqoZX5srKfm3zKqpR3UAqef1qUUHg4O7GxGtXkL9wChCe3shek+rT6bJSYPyM43/tTsSEt91XRwnJ5b8Kh1obOj70XjQ6sCCY+RN0KIWvwKi4KQKQWktsrVArm52J9t/WT/Jwm0NaewFuiMfh6342z1QoVMarbMsUUZfP2tjK9NWJ4IuEGp7+NISaA+s94HSGltKsec3Hkub/l92g0yceimFBisMSFuo9D1srdmmP8GUrErpRfTGBR7c+I8bNRsoo0CzHCD9yzoSiLHHtTTQUuQD/fT3IU42ekK/69jFgpzpgbMLqJwYmnrtMADx2MKEtVr87PcdKFiYR1Aombb046N7OuRXn3LEpfBohmESAInN1dMkkYOMBpKiaPraRrknn1oeCAUvOFoHTeClOAonyZfEqL6DxHTNRYneYvkyZgNUHzWUPRuFfp8CfJyhC6LEEyZHUbisqzvwQ4F6xuoSmIExkXJn9F7Vz+MYXHLMNjKCk5AiuA/t4GK7f6WimCLC1ewc/LIQ8ZvfRgnu9w9iLHcCrnQIq87XW7Y1AhNf6Rtca03whGhf6cKkx8iBuo4EBgGszDAO32Vvn3bJGWOVrL7ygm9hv8EsEi0rrCdzeprBzN3/AYKiDpQ7YKHma6DMusYxSMgCpoJ+gf/3XxH0E2gOtgLhCl7PnAIvlh8JVnVKGyhtLWhMjIDtVmX0++IOxqCna2/X/86ks+Oz7BtkBH1Nk';const _IH='7320d783a3dcea0b913ccafaaaa4e9025898ea7bac85cc86ff8efce747b5eb6a';let _src;

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
