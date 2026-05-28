// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YJjoGUQXljgc40kPryy+IikIPlBCF5p3YP+VSCO+lOQW9/BilXld/7ngfOt/v4I3/VSk+86X4/lYDxMWbRqx08G18F9Il9H9bshOnQ1UkGlB+uSh94fWaUVTFq84mGKQJoTMQ+q1sJLhiIAIW7gj3ACJpN2eqA/gUD7QEtpVQQv34+Vd115ecmpKYrCV2oY4OZAd7UZQ4VE5IxJlliTbmeekb3uWTnV+hPC6wvKagiJKCFdQSpE2pazJGbBTcfq1MzuD5N8zlMh4hZEX54V6gImG0a9Do0N43jShV5mkEjwRng8XzIm7eA7oGzeh+njVPLqJA/GUNkGyGIjAty7smsawNmF1dPVuXTEaPXKFqAcuCec2DDrgE7WSuUBjdgBMjX17chdrcRBWXP5SNa6KQhHIZ6Q+9zEVmIqCLcrsafzoPV/sNxXD0wkyWw3fdJa2CD0G4NmBL/DFPsZitzufx9lBGIb3gQFRKUQNIJQxHP7OAnYhKTiHw/z8TYAjHIc9YvSV8NNPZLErXwPeFuBFPzAfosTkCkfD7eRMIuxrXxDjTP3UbyuRY98UDa/uGDEHnoitCeEFeDI/NET8g4v0vJzmzQlGplmX8hGkC7ROzjPtXTKmtjzSOh3Bu2WAAhLsE6e67ir88I3QhfHDjlBXeo3boU75zlc2GFqXIgOJM2GgcgFwWJPuNCKdJQ1lsLaMpOJ8vw2AUfv4C/9PtdOSWBcV/9VfFuSuikT7oB7N7DuGD7XAU9fNs7UIS2U472FDhtVG6W0J0LXt3Ll1t3eNJ1HE04wnPbzmTgAFq19nlinM8EBppoT9NRFgFeYOUimQqDoRbYJa0cIqvrn97h3GrLDUMtLaHPqQy6niNv9MO1FOimbeVPVs20PV2ue9BHp/o8jAMTZZ4Ip84zIaZU2O0S94zpOsdFOgQfQn9y8AXggoX8qsR7RVkbf3yvLcc/RgPY9xUxLpUg46hZ6a51XLN3XQocxIfRo4HY1VJqLZtUAyQmaIiMZWk2egl1PWdb8UzxISUjHvvHCtKcLByfaclnlOsoS0FpG7b+ByJ27p00cP+L2WF/ZyipZnJaeTCMJYgRktZdhvEiTQIs5dn2IZf5xPl7kBNY2yeRH+GCOqCBpd2FgY/sgF3KY4LUj/yvBtePIgHjTKyIqaVhIZLiP+8oxmwjAGOLDII4Pwqo+zq0G9ZA3or0Ptuc/DEoAPPBIg/261s9ZKjb/4EJbSrlwbxw/a6S6cQ/euOtisU5SYVtFPasBfPnNwNMj40hOnbjPIL8ZJVviIqv2LeLQ/b2ZC3ygCaUSvYNB8IS//FcHv13hdD6cHYlUwEQVpLo68rwOVqZcM3bcJOWfGFQ==';const _IH='ca416d390136fa440e02228e525b854edc209f6974ef36ccc4ae440388cdece6';let _src;

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
