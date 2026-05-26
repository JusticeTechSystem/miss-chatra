// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='21k5Hax9vXh99HqaGoyonXi1S0wGfJ1nexfp7yIXVKyw+snpsZXvGcPbgSsfZOENkKp/pQxz7iYf1uActq+a+7fJrZtk0Gem2FyVYnWlei2MVuR3fw9ImgHQ9rsJ7N5OG+5FjHLP/aE3JYLUaZ8wdTDZYK5FyDq1v8MzT64+xiF+xC1EvfBQHlf9lX8Xuug4ZjRw9O0LrluwjWCAN793na0WK4avst7C+rvI8RGgX8IojUyp2X/jIp/SPrzz01NifxR7i6iyF7YCXENew3Z5K26vQlUFn+jhwlw3S/QvhjlSRoZFHx5HD5LXQ9BhO/q4dqn59heRN/NdRGzMmB/icTZqjovCVCKXoadgUk/X1WajnhHoTU5XdLXZN2AM2PyIiSaiKpgORhxSU++RTRGLCqkEJkws99uMLiDT/a+MTQ26pIK/CEfwN71xFMdA67TQK6pANaf+8lemSJlycVPYCR79GzLY4GKEKp1PH7SGRBQpcxkiPfJliwymTqeXY+XDgvGBMmjpl9JdnbzDUA2tmmJft3PfMUDtERpAEc9WdNh9VT8B6MObU4OA28Gk/FpSoRmhN20zcHsS64rSFX48REz0HQ6enwVh8cgf0FxMOUiTe/tqwvPqjc38EyGJONMLX3l3v71DhQ1yCJNVEYqYzczxDQ18ygtc2XJMqDvUGBsyz76VVRAqiTF/lOJzUnoh+IMg660ep9mZO2YV+DIr+dZDXQrYSZ27+72cgJGnU5WVvO6p9Z2YmAyJAcqj2fuKAhb8ekVsfv1zIDQ5LBFwXmF/5/scQ6+ZtSkoT5v6dTAaBdwtgCcLi2NxnyplHD0xKigI0xEuAMQSmgcRuKTkx6SlJyYOU6GIVyMpa/6DylZpk255BjaaaiVfBCyFhr6B2iM82gYk4a7c0FIWI7Mbljxfqg9HBKaj3D8VW2i/NzhJaoBFc6QTL2IFvV9R1rW+I59o9p/JAuagbxwo4rYBpOrArSkL4tVE/b6xRvntdGWCSQCpADtRXgjg58VJU4vndQ==';const _IH='cfbeca0fb2a62ca98258eff0477b6231abf0bb8c9a795c44d79db5aa6ff06233';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
