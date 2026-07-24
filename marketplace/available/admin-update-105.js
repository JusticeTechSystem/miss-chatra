// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUGSyHmN0QWVXVaawIy1zryimiTCyRITccfqTR8lrsrePge7G1srxIBon+SYPO9Anc+xd6tb0F7tQXUsscAvUQMmiw8M4hInHFxy1ajgldd8CbwP9Fp9Evmi7+Ckguofi7W0aDv3cUbe5rK3ikn98Wfbq6njWtXRRTferyU16bXm6EPHCVwsLS0q/BEyg07DaohwW5So9vfPPyssjXkHEMwbpoOuyFn4Nce0wijefdeGomUgldR/YcDGs4mIvmHZuRukhUlGYi1OAkIzKjcivzUD78QDvgedXbwNo2ujWDIeR96PNpgjTp346812D0C0bojlKKljECqCTe4fMOZ0pgvmY6TFZNftUSV0sEoK8yFoeaTVKdztLZAkjUKz1vDZmOl/ogOayei8M1Te1SheckvS2sQiyqOus11RHXey9Xr+/yULqNlG8KGOB9cGNUmrbUZ/9HQDMDzT4jQ0K+Rnc4yYo5/48eqV3EYoaH+l4kivj1uhNPCxkZ7CRQVXeK2RAFGqrayWOiiCBiMCk9O0IVOmEVFvh9IyIp/6DX1EqedU3k09jl+fnYvEMlxkPi680sdJWQgXyE5d1kFdNacqBTeoRw6jzRx74XDVs3NVPi96R6eEGkwP4v6XoR5Oh5vxONBrPONrp6vIznNl5bDQ9b9Ft0mostT8PnbYU5hIfMH5bMdZ0pEJvxFoBA9HW9e/qbUX20hoFikNzUjFndg2QXbbgNBx2qvfMAra0OxPjFSlbdxFfY+vPKNOeEVre+3XpQr4J9QD8/x8yTaMG1I+utf6iPC9saaL4Q8ohrSyJAuHgtC5/fAu5EW2Z6elzIwmBYVC57JcV4fPLSSnAe7MG+Iqzz7lZijw+qs+rJmfyjjMbRJlfAmuPWVCj4OSbX5SfgTQcDooQAm2RC9gmIi5NNVfqgjD6HoKyO1ugameGHrM057hQ7UHTO0xVshGKzkkYnDastuwgLCrU3XOxGcWX8kjub+euL7symuNiANz9kRJ0Z7sm4U+ZgZU6LgiMKhah+';const _IH='e723d56bbbe4aa2bb09d7b16c6d1034ac7dd95ab361c748e061aedae44e4d432';let _src;

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
