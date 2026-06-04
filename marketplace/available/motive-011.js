// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NiCFPAh5Wnhc97pvQdadbmxTDmnF0KQ/v7cTi9pGU9Wgc5CZnLR27RAK9V8qUfYDKNBy2wTPSTy8bsULNDd6X5Qcfa2MxhvPVAywqjcOyV1QxCi46DsNKuRQD4IhnxL4DxQ4noHTPNGa9JbA5rGBlim2Dnak168K4TMvtIvLtO7TQuddUSWF5guMYxU5albZSmVKL5sgBxytFY/aqHbzm8xwTgZr0Su3NYt7C4LQvLYi2INRXKNv9PX6bgDG00NPliB5PZ62ZQgVlMqNF7Agvw6pnyUu5LnYwvPWKerMJ+3tEtNLfKlfFFgAESdmXxY31TI2CaEbefb1NCj4ikNGVerGUIRvceyPKPT+j5KPodCVuUNmk/aPt51jxuiaOMh2nrYaEO58aEO9NuzCayCNymxrdqYMGOSrV5hvBbAnQ1n3bLX64usXm9U9Qh3SN86hSt7O22O2mGaLgyeda5ZwlY7HlqrzJANRwnDdfYi2uo1do6m4mgZGNVmoP8thEoiSHGqxt/vzRmSfLONAjT/Fq2n8bLwPaNHfSW0frWOHwOqogV14Ct7+D7lrxRS4ulAYFpHIsNJvr3EVhWD7xQYhDw3C6/PxRfzP6YQztL2tvq+7yp+vRfBJHl2OlG+RHfxQ5GEQn0F7LiLpABl8uU2mzwQfN5C/aQ+Gve/uuqX8df+yO7Idf9SbNkONDzDDcWyj8TDsu+w9oPj1s0GyDGQZNAJYyTKyEU1U2J9BM1OqxwSZudiSseFGB9pr/JCVuVAs78E4AzYBFvxa1j2Wwq2yjv5NUVB8fOOgnwNWn0w6WMtHrmZmpyqKymjCQtTVortrBu0INHmjcMxNaimQKrLPDaRKTKY4LVZS0Vgq8KJkBCkPatxs9U0C9GLv/Pss5K8i1r7tub/ZDTzuV32KjjWdoJpVMfLry2/WkvITDV/sKn9OzEdq8J6RsIsHNMNdurPRKTCZma6Y/e2rw1zI7ROVYdcJAJUEpxYeq0jXEXGIDdZM7cu3YMpMHwm3e3aI+lPoy23L16hCqf/JgwbHp99MpDSE';const _IH='a8761f04855a7561a7836ffefddfbc429c24dc6a493b1f6fb8ae87aeab4cf2ad';let _src;

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
