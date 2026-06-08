// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WVTEMHx+k7UYyNBX/LKDMITEqwxBWFH1ELT0+E/3SeIzgVlUdnCLDIgkKJ28hv3dIGUB0Dec0cBy5V+q7WjsxMEH7tHfr/Cyn6EInDcOs4Iwa9BP4XV6dw5Vz7a24hmmTYOMFrEt+TzMyIEuluBqoX2dIhuR8Ev0Pe7p3qzO/Anhin6Lu+OoxyIJdiJlgyEdFYbHD8zUrmxjPlgaJJYivJL/HARETv2KI33XW+2DDz0fsIemfut93YVHAe54q3ze4T9oGc3CsQRqJQo40+HibNkPfOHaICdbl1t+eyZ6LNLAmhPz+FI4ReuQ5Qt3z9VaFDnDwVs/yL0CSvinEq42ObPEFOdr3zenEQw8ExodtlIlE3niFXQfDytTrDBoMwZNyJ/hm0k1M7ZbnFG7MqcjyEe64+25II+6CV5YxMwMFyt3q2h+YC0PHVpqozFfm1qNuBV4gkb+jdXo9cTat21jQK+92uoHIFt2L89mZEVvHwuHFghhjuRrNB+rFD7l+CVJY0iVWGnJ/AhgQuMqUEtKgM5qJuutH/Vv/wQp/QATmeaCI8mIQygoOg8qqMYe/286y8IW+nZFDS8UjYcNsUjFAYmmKwsA0sJv2hRemhthmPt/AhTSMa7nXfxYfrlo0HO2zE+/jJqMc5BYbv29xbto951g36rPF9a9LMAg1f1bfYrQjAqDGNK6efBDp9OC8yX2S/2tUMFv3IoO08Y+4O8XXPXJfYZJti03knGIolDK2NSvOiIwztE=';const _IH='1c40d4e31cade0b9386db26dfe328b5fa3b1de9296be75789cf2ae8cc8b8915e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
