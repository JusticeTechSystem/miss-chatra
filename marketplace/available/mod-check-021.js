// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='26h2mEWIasm6+aOpidd7WFcXzE7FeKsAkhm8DGuqWiiYKS9911Iy0CPgxE97ce/0LYnVC52EwGF+nz01zerb8B3FcQR7XiNXJ5HVimyCsi/E3yOMgUTfztOZFFlcm9FdGUU5diPLkMSKcdm2GkprBnBBAlVn5SSKXGYpEsbI2fCkE9X2F9tlo/4VcCGoODdeMotDTvsm7eEq1wHSkUIDiGQUc3RpYybrFiu35KeMUnF14sGUaOdDwnMORIpezVWE5OlOEupmJRDa3y8ULUF2JgUH11jqiCXeXqLKE0jeFCQNuzhB5mDe8NumhUgshgbLrU46iGDKltw3dRPJMFDBffS4KEHhTR/D8h7swBcR5miVAmPo82EnpQspJjtWaTPhTPt1tpYp0qnqAlUq0OdUHYqmrzF5lHPVyQyKtwXYtAxzKXTP64leJhgmUqD77mhOX3YgqLaRtuelKCyNVuTYXIaOA/xDEyKzQM48s8m1XJmFlu/nMoJroS+xEluI6AbbJH9YFk3jyjyOAJxDjqjlflifudUOX+jzg3daBURpeuZYLFO3+gW3C17n/b3IlMNvy+qZzpv27fs2A1jBOVjXy51zvy3tSj5NsHe+lzL9GvZnPKxvkn9qmAz+c3LzC8aDPn5ea2Eny/Qg0//ih2VuyaLsHACvdQs9t5iEG/sCPs8TpHvb83BDWzJf3+DRIiOJ80c2yAYRs8q6U71BNhpHcBmt9+F4ufCvGwiG2A7XpIdOW96LahJNppOUtUr7qyFJiCCi6l3+Ew8vtunng/spKr2HImYDge0195NmsZERUStfr/Hvyuas+NmOzdFTTZ4QKXILAUEC1ekPs5PuK/yufxGzsOrJpNH8Q9TeYJMseAhZrjuTV5CxQIkSjgXzC3OONo8NysCQhC2wOFVpGm+QGqM5P5aaWheYzs9zoQZD7uAUEQ3LVsc1cRWUHBLshGk5YhD4GgQWok5YYVqjhsNib3Cdv2/JKdXYBspmOA5yFw4cEheBEL8iC8OJsRZOC2uZnbeUdwioirbRJXGQb/HbQEOQJdpc6HA/RoGkE9e4oogHGn9u1evTudTfuXpdkoCcgbXlHtujaSlUhHit1JvZU4aOEj+D/yJ0LheTYAnGyEmin4QG5/axc47RfxmLvn1n0w22fbWwkDAH2EXZR9RFVbJaNxXrnILMJA11wvkALPJ85JisrG0IsO2KR2fPVnG5kUiHsRkXTUgp6De8e0XFBLjMo3v4Z23K+3FaLRJcBKg48K63MmeOK54ZnD3v5H7h5Qs92UVTuaPwiJq9VdV+EjO5aA3uMe2gTO1WKn9eOD3andWKNZfyuH6nJciApvjw1BqK3Ip4EKfAQiARSe8hzBX+bd2U0chlIQ==';const _IH='8a1be5ae924f96d542e6416e25db723230699b9de0cee08881d06dea3e884471';let _src;

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
