// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wKYKfFAqhXF3rzWgiKhxKNR2zI+xBq4EwqiuSq+xvR71A67EZdCPnzYbl06CE93qidPDbCjRHKj8GBFYRETg4OMwlIRLDrJje6dP7n4vVYJWX1OuU9Xe3OD8/kDPbSqwQZLgkfbQaQ4r2KjAZbd95IBmqK8TNFLv2xzCuNRdUcc1P7XIO37HY477H30mzwi7KGV5fOcoLv3n6g2AQI/Q90/jZwET5pva2hPhiUOLYkWhAoa2MNvPN1aYcIc2fQt4IaaV3HzswkWUeH8v1x/T27Ew4DZetpaUIHYfFtKujbSP8Zq9YfP3AfmNM+b/UoRvBEGtkKu/9smZK0kEkiqadyjadMPpB8Kf0qAfDtI02KgWoSJvRhV/ELa/X4XbGFLo0dPToytREh0HzZ1BRtyVr9IAhEQKm/Y+QiAuxzqEjlGQ4k+T9hsRtsG8K5VX596blvmxslKiYiFSTkH0rxlOpb1U3FrVlrDO+vDy4GlDy8pibuBlgAUn32mj11GC72FAlcX1bodfIaylunnBglqE07X6VPLaCQVCX0yKYgki6LpXxFX10LpkMyyAbqTshREgAsQ+itUy1ez4up7OXcnwgIEzt1uFDXLNfLn+rRLol5ZRu25IQrsmomzkCpG3BiUJCirPp1z3+QwQ2KHbT4pL4E7WKivxPCsQwkPwW6r1D0+TYkLOHOqbtOQWjII++FJR+0YCNmJAC0uEiavVhm2N9Mwfi13Tgt6NyQ==';const _IH='8fd76bece6194d0fff5959ca706efde3917689b702f40672ec1be62e38cb014a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
