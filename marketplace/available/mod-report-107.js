// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwz453lLEB8bEgnGAcSJ+9iFMt32RrO08Y119qIwcJiKr5rEdpXn8l3Oc+R0ReOcKHJn8iuNP0A3Gmq8YNRu2VmmNdL9fAe7dOVIdx8Lhm8W+2fIh/sXiUPGNwJ0D+NTh1im5uGYWaNvfWesqITa9ugmI/HGTwsQyEUYrsWncGJf7s2SDlgdQe5lLT9jAEo6jB1MKHlgbtNm9BnnpeDgb4FX4zmVp2QFPdT66ZjWghgj/RHJypkdVJaUBHHgT67K6yvQm9pKjn4pm6xj6xDPsVhesSK3SOHVLdrZMocVRIEp5csh9WLsHrS1ffQfMZzlb0nQ0vXmZQ/CjEaDS/p1GxZ386c4N+GL9qD9/+0v2gb73lZe8IhXQphGGnh+aIHGqKnKD6s2aiKTngv8xpLamjPdHLftJXC2VHTUC9bZdqgZy0fBwkQvFDvB4Bo3T76Rr+SYkCwHutHqFNDlbnDtXmKqvEVNqeOqPda4sYxUnkJPF4Ja1ITOgiI/c1esnTkJbosEsCO8JX3ANXelzgH4OOVIk4rkLkTi9gc1PMX86wgymIgvbku1xckZb5vO+AcHzh1I1oQzGnVxx+F2Z99cqMUJ3amslDSzhznkJADJmuUZZNmw3vtBI4+ZhBaS5wtujcpj/5N97Lzp+j7zBOvOTk2Na5Ycm2dfGll/TSBUqkY5rPoVYOqWQ7ADaRZVA+TK6naKoPLZw9kEv9S08huud6zzJGzOv6L+9qC/6Nd+wpbLlmUdZP5WdrZWBReG6QdZ2hlo3JwtrPmCJ0DDtUkhJK8o411baXgVAnoVclHq6h/qKTGZVENKFCwPHJ8PKllWhHsbrpbTpZnJY5pojjBKCjmBokbNvuflFqVCRDQU+uHirrLsSve2zQH/Xzhdq7fXDxqKAtl2D8bH+wQWQJidJNH0zOxC5swcxseDCqRTWVrusxJ8RxOKlY17IIXvtqtDLZLE/onbkAP27bIEYIL/V3dpUscMj8LwXrpqLrpkgeHqhHYate1TSJ7kMappuXkEXN1ShzsYdSRMfgd7HPjnVnZ57S/sveqMhaGCsGZCJyQVRwV2YFc5+v6gFIJD9XMZMm7W/n5RK/9U0a8aowFahxjQO4YcuVQvgeat0SSTrTjTz8FbsDay7u9egW5uFMgSn9vEJbyM2nyNoJ6EnKDY8OF2yFgnDcAwEsVct854Hf6kp02szSCGlITYXQfyh7JEl7ahYLM50bFZ6bteWvRp3p4W92wCpFsxp1WjjLSIOAdDAc2Cf3thR8beAEtwaM3vw9OFLMq92J4tokA9aTw/L06dVTRCfCV3k/iD/F7UDUi6wdJB/VxVibt9f8tMSHiH/84IWILaSYTf2ScWAnhbZnptkUdjZl7fL1eCjUCzSFmCjUaVuqzHoB';const _IH='f1ab9ae3cf13982cb7f49aad495490dc3124a1b47a43408968f72ae724441760';let _src;

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
