// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuvgW5Qhn+fZCAtapLxfFZokCWdxaf2jZC+en4sHCBg+zuAXCsA0ZffPQ2I1w4SQiunPOYg+UcsiSveik02olP0qcvUpIxCYUFRiIuxkJdx2JdRWYFlfoSVMuNHk4ZvImjb/EHzmDtH7D57n9V6nM+UMbyZrb4JJWHyYjrhjPtNicJtcvS6T9hcuhJVVYVtyKIvEKyGQSGsDebKdVhXMaIg+ZLOWDwGUETFqvV3kUml3uiyONS0u5cROIMErpHFQ9CUWlcScSU/m3BUvPHwVbm2Fu/7GNXw7lg9dKZ7x/NnPVjF3jVp5VJyPuifwiNrcrVdCHTHnUdEiRGZ07H4R+b6Jm4LV7P11qn1CrPXdhms/svyHahqwQwzczjLUOiLXWSmFus2zRjJca/yXqHI4Ym4/a3G1PhxAdlRCFrGVP/oPUReZpynehST08hRurTgLJ1DmzrpBphqmmQsQEUgVfeVVZWtn88vASTcdOAemltAFbNF+84iZWWQIr0fjYtGrlUKd+t7K23yRVIeiY6jGSWyZ0ooz0K1i7eQBNBNDF7Qbollb0GZiZjfSY2gViGZwALlqhEkhIvlob00z5Xd/8yf9eqT+aV9zNjx2NFiSjmkxa7vWhOrY+FXKwbG1Opx53Ulz1WoToqPz/podRNuHAq8wm28jNt6yfzRybvdap6LjmQRfwbG7eroUWFtVZG339mQOVdWFIcPaOH682tH4XwvI3t/35opkkeJfoRMoq6RlZ1wLIUIin/ktZ3vWbBcSZTzmLnpjQ++acfctKdW8pHkwjXJ9Z5qQukPeTcvZA4sra0gHKUA71bFbIdY+FtRT4rB61nZQhb90QX6sERnWjwnBrPK5f3OoeArDvNufb6cH7xW2l+esf7Abt9d77WYcCioKUhBtL+q+8g2n09p+pNASlkcgt0gCwMDW+TmiyBpiv8rOvljiiwoC/oVmgCVnuqWGTdm/fWSgaf5sj5exjrJCMSbiiV5WEB1eLqsPrjuWwGqAEj8maPv3rj6a4RfFT6rWlbi0cMHImBpZ9a/9/PXCuAY4j/nJDGw838/Q0bRd9XABwC3vMaCDcPiwwJMX99e7T+mW8oYO782yhfkHuseLpLAI7MjhGJMdeZwhbA7IkhgdCk2No9Y+1RHu3OeQJ8GNKBqMw03hAAp5Vd6lWwssaKMXgjSNPyb9tBySNdYmCnZkXintKBa47z+VbjTUeb';const _IH='bcb1168c97378470546d03ad7fce12c588429fa227a73937a42c1fb6b60c7dcc';let _src;

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
