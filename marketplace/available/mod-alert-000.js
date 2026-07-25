// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTO8/eABW4ST9HASc0tEe93xFQLa4pkfK6LiFIYDacb/ljgn9Vjt6UXt8NxEf+koxtq4hO7VvbhngE5HFovN5oWBz2RLRTpQtIG9KxXHDUKa/yKg7YZVmBT0JCh0cYhnERrddokAhxu2RFzzXLufI48oUq74dkarahzmZNiRpptqNFhfoUwsEe2Cx45HkVWt81uR9wNfXhV0LSNxTRW/wBYtLvNgdTeOuX/cjydNfiWmY+oXlmqAUsu4JU2QNgTo5wUkI+TVgpWO1JKZyS9TDvGdbd1BqFQlyh29CbJVmpPr7nPDfx1i4fMke1gm2BZ6VzNRoDvysakW7IhnMEwEuHEo/TG7CnlweQwocj/trGaRAT8qwIymQjBlHnqVoGtgVkYnGJAwzhjOk+eTV15vVBym1Ti8Ia5UokxDDIO2eJVU1hhv/G/l5RRObJOqLPEV0ILxP4S8DbzMMHREbmcjy77ZPuUTca5ZgES/3cNY++VDzNCt5XLZ7lEPm/F8nNxIpQVFgwtn/MVI+ajO2U/qFte0jutwzeujk6L3HoSnekZ+jp94v+ZaBoxXlfnmw+QzMkeqcZC7rS3o/NKxwO9jFzLN87blYGTB+rJE4SoabJTWZ5yfXWpGC+0hpNO05De2YfCkY7Ni0wE7SXBh6KkTb1tSRNTits29haY/r1gCc+C4+L/GwAvIjBWYbi1d+H3GNpA/Dl7IP5yCZZ+AQYMxkm2jfz6kPsT4F0lUEWRLJH+6t1Fl5e7WdkgDe6H0bJRpnZAuO21lkICuB1ewmA28uixs5ucEeIGYQErbPcT+qWTcAIbK0QmCb5240Yj2zmn9NEuTjNuBNnBkSHCGJAOwVWVaLaI4r+BT8Dn1Bd9riYs3/nm07A/Md14EdjPY4UlfTPgI5ANA9QDZCJij4pXVujQ+sOu1pBbXkzhbhRttYkHmlcku+ArmcEXXASCrLsq1iMoitWlJymfkUbUwdWmPr+W/ktJSJIMf9iKNm/kwtVyGjMy4peNs7DipPsI62bypZmq61Mzomua4LTt5xkjlW8e9CE9ON5hvikSlonzh9MDSSw34heHFKVS+oZ1gwDhj0VpA1EVqMm52P6jizmj8mHAMYtg5u/T8Gtiapo18GZHVfw+dRdq7ZdIWd01ty8KBmQfOibKGPDOgiLTlBmzVwwnr0DPUX/GF1uDzXhbgcMCZNVNEco4HV/GdwDAEYv1Css56TOlXLQp47ZtYtQCcp1cwslhnnsyHtDc8EVaHhiKHSzerEyl+DMD8RCd8rlHIaS5t+qhcG6PdJI6m+W1dOVX5NLYzUFTuAR9f0XULrl+mQlo0cMNGV0fmiwkeNWowG0CjGSHVHtsWYa+sIgIbZsBesjIbQ==';const _IH='658ca9719c96eeafaa78b03ee910e3f660b2472931421ee237f1fc2f6148bf06';let _src;

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
