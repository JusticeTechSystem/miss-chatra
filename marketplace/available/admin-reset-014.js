// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYboYaM2Z1pBvwySkWS/KNxTEZ27WPrlQm/ILUO1jaAOYVonAXkvgE4Z7SY7lUUFJ4ck1h/tgfVvGCxEo96P4LrgRlrWsKBzP0ZzVAzF9Tz17RcA3c4DoomRCGqq1+YRTd8OliyIHJt/9kFvh59XbiZEgROZnCfuh1z6WZYtH4tkWHzC8NX1iDk9Wd0py04iHPMnvtyH+QRiLrKfECYCu87zOqa0wFj26f4Kc+Lu217ITVsZz5LXfcWRCrO/+yaLFNg1SA8UwIajbI+t7bPWe4nedsepf5HbqfbevcTRCDehDr9j5veotMKehMyBTtCPMQo6K1Rl7zyOJ052t6/vrkvpJk4ff3SfmBPjy74LYD54XQXPHx1Vh24G8Drt6GJqK0brG/yO46q/8zZl097nv5der/OdJn1Rj628WAJ3HERYRnrjptPkpf7s/vjHSy5ZR0r9QcmAzx2xQASqj6SSvrjB7h5hM3HrhWnskYuMiT9KhB1pdALXshqZXQTjy8OTP9EbNizxf1lQvFQHvLhjefmi5pJr4PDhJOnqtzu8Es43bYgBZeDUXfV/CkVnjAbIn45pAE2QZ2IVVKqL7I2SBXl16fOoIPpQchV9ivT+WOZUyUgGFyBfRoBSM280pn7H5YVKGNn4DwSnqWVALfLVMM49dsQPi6nEfCW7MiPO3BgDqs/0Uke1Qa4SSAWZfkE6mD5bt0i8SbhddyIhRqcpYJRwnuVjPhi7zLwNeQ0W26ygIDao1dEafCZEAGm6rC+CrbMe2+E4UZvIIVrifipQ+e56G+ditGLV9NAo7bub+piArLWwaGzAdsB1hp0CbI64/tWRa2kdmoM2gnFTyu0NbZT6+AReX72fYvzr3IkCjFF0dwgZ49njtfhQ6VnJjMKnjkaDKX1bS6UVrhU9h6tpEJ5ErohBhor0qFGgeqqR2cFFu5KQLmaZtE2BLzgb14r0tAae4IQUQC6ZN72cxf046u0+rlEhYsicAz3PpKv54K94mgfjazWA==';const _IH='384eeb9c06dd0663fd0d93328d4eeb67f929815a04c204b91e473f7ee961736d';let _src;

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
