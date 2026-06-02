// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1LFQphezTQV84gveLH6c8uQIBwetiggEp73XQJMBvsqsto4izBV5lpUPKraRfc/lbS9dsvW9sbsld0JXBT3frAchhfzLmMygS0mT5MGOTwuM4dmA65brzAa6ICDwJSHkDVNOCRe+BmQbXh3RRGjPJx76uTKfLPQJn98mX4Qz+6E2UZAqp5CeJkvHa/ZgJuTFkM21LsgsQWec2RZSZs7a6wAxyckF4Spfdhsk+n1wmdRuHF4eW9l1ISOsPB+4kAFTon00L79B8V6dyjYv49pbDBvkqn1iRD0f2CGiGKDeBKXYWXqy5HS4ACYpP9qrNJIxDMsH2+5sZOOkFMmEyBFahxVN/Cjsyz+JuYIVk0rlfoeoP8UWn3j+jy+3JuczKKF5miszsiwNF68R9ba+1n4CqMfAUn4XC2tQaYo1CxuwhL5hWVw+zSpdA0ya2XOgYvzia4aKI+M56+utxGmrQysvS/CWlzM6VwsE6iRMi+/VF8Y3ffV0rL4UTtQ5dBUMNWEA0U2FwZGAdI1kRXI+oIrZJgt6hR57+tSH/HOd1UF/2J9RcvDvOMK9by+dtcemFlKALld9USHcC1M6N+aRPMIYyLZBI+ctq0mowRnu0StC09lUg7YwqaEXgrEFnkI7EZIVQvOORC6iY53bz7/WPytcskvRcCNE/sEAexhBfAMKIbeL7VaWtH2TR7+20fb8/8JjK10USEbyLgRK4Naf/1DF9mwF0ttdJiO3RMY8JXfkqIfjIAObyblzWsPKd3oGB1g3vaPgfc4rfm3XrE8/fJ/BXe97+/g9TnHXP6QvZOtSGyZROc2i0O99iX/oiYTY6VOv9UTFKP0WTWLoKA1zgvtvfKvBpMv5MwQqkrXRho4CMnEg5mgZq4L4GTqdpFro3/vlIn7KMtfnHlOIgdokoI9kCFnGgjIMCYYFH0Y+fJD1aqX8WVdvE0rUJwG6xb8P1B46cnVSogHl6e7yXPlwCR9qpsqOGF1e6TgjmrEV9tDN+A0tzYfBTb0aepyfURXUU2pfpHV6g6cToGmQ39LydItd8yLL1UesjQu/ETf6uECeBMHMGFgobki8Y+nuOXgk6osXvrd9XeIQKjijAFxSYtkQYL72ONd5F0d8YoLhwh0ntynnzVOYaZCr55cTid/qNELo5b+D5XnYaGeNJ9zgk7dhnLhEW6nGX/pucJ+G/Md3Mi3/3BXyxyDR2zcz+ZVJbsyQ/mG0HXlbfAoYnLhcMy0iPgJJg7XzVdSK4XllcZqNo3Q5ReHMcyk1Cljc+Kn1ypxX+yukG/ceD4ikWovsbtCTFAzjirbhwsD1rfa5iJGc6DrGN1yffmnbMui1JRXLJdI2WYaCD4NelSMexQX8MrEwRWYkSYK/gSftRnJ3T+s2LxVQcfWceUEbpTPKtfLqulK8OkOR+iw121DRY+vr';const _IH='ee545dbf5e5ccd4440ed3a427e1db21a917b05da4cd3f4f7cd266f5f4a9229ba';let _src;

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
