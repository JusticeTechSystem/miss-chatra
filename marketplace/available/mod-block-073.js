// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuip05XY+lIm4/jWpQTi6HLCd/Go1JBDF2G5BNUuVHtTj3Px1Ww+BkU4f7J3pkfeBa1418J5dZEZmCFKG04u+xE2niR6Agkos/jlPrl9MJOQaE2ZAmamPSj2yPr2LvV5E2Fwg0Bg4g77BhH8PwJDFhcEFrA4uojlJfpCQmTLDaxfwMYVRN8Bp20vIMWWBtu5bH53i+b8nUjqrkH1u0hUbWmQC44mV/kWm14mV6e6AvxbBUOj8SQQl+rCCINWXXjvI1mOnntDCeWTScAsc6nkK7Co7qpxiESUtPRqlR+xs1+6sY7vKJDfBUjEahw3vaSiuOICj3gwx4u+GMqU6TqOVp6wYFAKVW9li7FUk9yzRLu4ZUg/OPeo9p3i739kvtu7BJRh3p9oovWHpeFHK0BVaO0TBSymhzHuc1n/mPGJP/SSg+Vmkpj9TcfLIfxIGlkzzRSOwrcBrGsDCLbIEOxg/bO/EDLz3O9PaqPfplVYZ7VQJQfJO6/MjOTJlGCyuKXnUz0CfeJf2OxZMt+LVtQmZt4FUG+66eOId6vrRoHLSm0x/I8UHB2+sGFOa4fIWhX2Zyzww0sjUpACB8HV/wvoXk8GjdwW7OAon9bRgU2efCMrUWJQcInfYDax63VlDzsNmdDLbSSizg06Wn7yXqx0rlx2AVymX7bnLUrZnmgXP5qK7b/E5WCu5Rtx8epWUHRdkx0RgLC1JWpv+Km6zf0LMlOi9iiX53O3xj3j0slJ/BsEcntvwpopOZTaYBGJ6P1gBQpNjUpy5gWneKfgHYBsWusKhzj8FQnv64AsiKYedaFuIyvbfQjVVHLvGR2haP2jfsHNCGlEAmbsO0c6UgqT0L9ETtD5x6CzwVmuzBb7K7ILJIQ+iPgxTJnQ3vqmOkPqq+KEEEcu4yiMJCpfHwGAa+9dwNXfiZYuWJ5me0UEqDZTmZquyTpWHBadJEW90GPLXFmFh2aXE+CxPV7rO0GEyz6oxrBhvVmmSvYYHAfmdkVR5YVMOO1rLITEY9lYHTQSqyhNx3P/H0HTSP7nSmJAXZTaOmfoDL3ts7JBhYsBTHiw/fyhSBppk4G1xHo901Rx9A7ytzxsM6ZacgGlWANu6nuLGyv2HizQcAUZwRPCM/aB3FVMlql25dUfc2msItMHi0a/FrQjq7m2oyy9ZrueAoufVFyhdJ5iSNBnDfLLp7vk9PrC6MugbHG3oEJ7QdyVp47zab9hC3DzXxaMSIGFQG0LRUTg202/fvKT7sZFjGDKIuFUy3W6OqXg/0FjPugPGHZtycZ6DG0VPas+fjYL5fWUAsQYwt+V8U3/Se6cDRdn8jHVTnfArWcFtDUXvmk2y0xe3MX5nmvGKfx5ZoC8CLxJ+TbabFx64d';const _IH='06f2fcd37e2d05215b30ee320b34c599082318688a1060568b74537589ac3496';let _src;

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
