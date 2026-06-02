// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EAEw1S4sGHK5zUekj0bfKo0Gm5QkdZkUJuA3T+ww+Mos8CXi1RVjnfDp5+KHmrHHj+zBTWcSCp+m5jorwmFWYXHMHPFCYH/1LnBBcPrgYOuu/0QBvfh0HLM1t7Wj1Cti9ghqPxugZG75jkBr8Iwk0GliW8ll+K6W/wDM/aFJWdLr8cnLAMKNuwMbgzabutlPMmQ25K7L21KeC0EPt+4tRfExBuQwrK0BNWmjleBtanemEo5Vdg7zxfkhmroHUMeS67zj7/hYoigmEg0JRK6iDw7yon5T8FDgVP3QLG1PDPGSRrRI2p2IOTVO/OA/FYHZ4CMOGRwQFNGxqgsktOVLuLa3pa2neSzjqBaoateVE5k5b5UVJe1npjTbxto1KuGacGl3tc3FZONVDdTc59ev/YEVb8GwCNEH3ZeO9L3MWOGG2mvP+htZMI9l+uJhAwgpFg+rZY0A0zllk8AhEXUOj4LEsVQad9VNNV21gONgnSXzkzYBJRdfrG8WtS2cVafuPhhesJX3fBj2e5JQYor7uObKoJ4lLU++XvgkijUeeZouj58CA02gA2yn3Ep/fhkec4zRQaVgvg9UzLHpIvX4zLcU/TNP3m+sOtcH4OwnbaYLIRW4i6PLF/oBRh0TA+JotoVAYAW4a8e1dIb6p/1AaUux6tmmsADyaGQCzZjx6ZQ7lEBU6LCfl/LXXPoXcHewjdJsQBKTXGM7VsDu4abK1hwL5V+ovARhdH8KwmtJdlsCRaZYkMGG4RUOOu7pfJf7mXxFOd/Dqyo9kLtspZmRYBEvkD+/gGgs+guovcSnSDjTdagSmk9Kc/5t9dtNbUxmxx/4nOGfRWpw4xAEZGQzTs9v4vPL4poI1iK8gj+lj2ElJBdy/RoA0eQJFUpnuZmAjbXrkwrIKzmqr6oQOtC6CCzr2bc+CBJWY2pL/hp18BxmQbYxxmTLKvVmYh1aO/lL41A7yJQYi0BR5MfIFrfL4OF7JBQC3SGke7pN2A==';const _IH='6da55485e57428490218d6858781918298db4f09980b7830e582868556e265cc';let _src;

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
