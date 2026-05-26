// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E8UwclU4jjOwOZE4esD5qq6aRVCEFDBlMwngCr1VQykfMdk/pj2nVkWphoCwfezE70xltk+tOqqc66cn2Jz7KzHPOZ1ikgTmu+UEOPbjoDYQxVe05bGgbMH0EtGZSajqnYo4r/Iaw0RRQgoT/17gJNCu1w84swNH7LXEc+Pe0s2vghl3zuRSkKUoi/gjvnc1PNo9hLyP3mQMA2C13fQCBx/dFyDRug6P8f1UlVNDTx/X6p7WVMFzCQ/gYb6bn0PO3pFRuYrYxPUkye2/xBgyMkYzzJ9+7ucifVKrRDmgRPqfacSvxjCsM7S48K8PBQRnLzNviibMLb3JbBXa+OGvjOqznrd3TtD/fTbm0JaSGVvl34B00NKAR24+zRoCuKgNtJ0jrLHhQq3c49Md4+ewUjWcfXGqO6/52HV7SLAF45RLOFOcT9VeKQ0nQ5hwuLm1B62jQjW1xB/2jea6X5GNKFNibm4EBEvjjzNqtpagFUY8c6XJaB+DOx9WgeN6XVpsfT6Y/mJhfVtpwB05IssOd2lDLtTnWBpAYGow9lAjZg5pgqUblnz/zdiZ10QdxeKZ3YC9y7VkUbUmBirZ1Ly3VsdrIMHv67Yd6I7e4AXZNArU1qusB1KJriRMcypz6IRWErsKP4cr1Joc+eanBobjwF19Wu4cGaZRnM0y2Rs9gEEpShUMgV+40+9aJNX1E3cyNxx3fNI+ctWUA5YolOY/J1X2SHX7GTm0QPWldzptc0dYrCZlKtx++fcxwfBbXLk+gcb0ALvCc/cJb6nOhS3qv+rhLd8VteMwe4mCWU3GqVn8UeFyVNaedmh2z3csvnauB3PEnAoi0yGHM38CINhNmfEIVLkxD4Xk8sZrulqJgR4eJcbu22876NCPon8o/rIS15C/dBIs+QKIMgkaV8q6iQ/33uD0+75gvmSDfKHgtNurwWL44M+vscmXshMENMy/IObfK8b18RTUun0ZiQ7lelRQrlkl6drGUM7UrouBFNH+YHDyw75DbyxSmK0jYss/IFcUDo7Km3AeuELwDtqDWVZYJkBIRdqB6LOkft/QPbxW5bzYT+kVzYAsx+n+Ya4gLM4AQfRf+sb971yioNW9lAlYfJOyZTWc3wliwGnAyBEfcnbNF37jMkcxZMSSewT5yr8I3lDhwRjNQzZXdwbuXX+Nx/5ZS4XWbhgjuLsH8oPWjXM7BG61XVnzwmQMc3nL1MQqszOKp/q2P4O3xyLcvTjdcoQglwz8WHLQEhkEetPZ5KJDB2hb9vKm6JwVKC8zX1HjsNy1i3GzpG2ms5vE';const _IH='b4c2951730a9ba3263d94f23d5ef378a48426c61026a781035f2a5ae8ed6cde3';let _src;

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
