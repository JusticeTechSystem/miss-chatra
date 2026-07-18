// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+e4NN0JJJSfc2WNDbgHzO5ZpANUQ0y840Se25b5Dgr9F5F1DAWBmkIGg8dtBuIkLg5iJTCZwCzVLzX8Jjugwoh1IEW0A4UszQTOpVQpF3+GkP8NCcApBUQ9S/dLzfUhBAqMK3ORHIbtFHp+dYW2WMTFPpKhTsa6GonGxgQGzuPZAPb4ulti8HMrvuldq3AHAy9E0RzZbIJnoHtQg/tZgD2a88kra6/z1yENXN6/u0bvXKPlvEGIRPWtEcU4s3jvOpOh8bAAQ65agNlhx0kbkzs3SSlSilDYWHWqBccicAcv1e0s4PthXMtKlxq+JwCbAy2PS+ME1hkdyPbR/IpCzc5B+iz9VuxkxWZsdH90ZKo7MxtoQYw6sDfVG/b5DnJou65N3Yi5SC3nR+XvZCi2Yg3viMAT34kzMlimtvEI2x35u1KknaIrGSMZX5WnLiRNk8UgaYMY0OB8zHvl2Cg86X51kcSTk4rGgm/RwoZTCe73Z9BBK0fNtA8fKh8HU1Mhgnj1kxVAjKyynNFGEHdmWZzvNliijjJXEMf/KNwbtlgfdQytKyh7JwWWEPEJTj+/9uhH56vwv8jJoFtMe2av0sA77GXTAkFCJjfIDFyWQ1CB4dSAnjusCUXDa6mF0LFKy0jRQNAkpQcD3iciRbpbLEQvmXA7xXsOS+p7E+h5OMQkhkOAmRkpZb5J2n8e8Vb5nooqZwnDuvyf/bbvpZvRMKMi7HMoqe3m40OvUmTzhb0nclpXjIARbW493YzNQ4N9lm4kewylkSoTPYO1j0Edh1dB7TIKMCSQ4GrP0tZGskQT/fVbOt/p4WwsmzALdPrY7FzT36Ug95jMFFMOqiZAUd6T+Q9D0qLIVLu3X05vXdXvMwlGwmH0A/WRcX/nSnlKbHaKLp8JCY97okQ/FUXYXvKKuxidETywkvnN1wMeycwBlV7tGmQd84WmRDxiLVyjs3Peqtpa1jRW8OO696s030eAawHV2q+RC9XtaJMWM0ZNJ0Ezr4q//sh3WO+xkC9Mhz';const _IH='2c15efa529b7a1bdb0ef4af0379c347d89eac2b444b1692162bb33e5b599dab7';let _src;

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
