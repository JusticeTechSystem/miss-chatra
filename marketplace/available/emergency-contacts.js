// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b/WtBidIxlNljG/g4tbduCMwC4VvFF08LivByE74zQppsb1kjR5msNajSykAgG5ZxnUH7L8t1QzKwUQIlmS8J/ynvdCHVB+M2mqi75+Glarc+Gq8NzahtZMxmJNZ2T7n4utEfup/wZCohOQORbWYmaL7bDWlqfB2Lg6BKBtUeWcm9b5n3WNTZwiqR1Ti5Dz/Qy1vY3dsnwsUc6GH2v/7BVSd33/C75CMeCvNOYSJHiMN3NxqkXsncp4bmMeV8jEEkqc+gTRLJVPBgUxD0us2/g4QvzNkNENKJLUgukSHf1fpC4pJbGrXPAf5I5CwZDBepyDzLHNmq95xZ60SpEBp4y5wj0zxOW/mjbhN62IhF5a0dIRFlCjhr0PSZYF9Cz5A7GUjWEXy1wyfZ+usFsUAvB3aGfzzouq5k79kTlO/X/dbL7G0bea9zKQaStoWU9vSI1SYJJlIAq6TamlCJNioMCfayJJrtkjZUMN/WEsO+1k9WENIegyoVWcxeN3oXZkutZMs6LVda5ShyqDa2lV/IFzq0JatzJja5eWLlMgjBBBotNP+LM+eF16XcQpPr/yUQbdgSVKlDkTXME250lYC4l5PEmJEiDjmzpqcbOLypx6K';const _IH='1f9ca13878bf5fe487bb5a1f9d1b236bbb53a0c728441c70ba97060125b03dc1';let _src;

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
