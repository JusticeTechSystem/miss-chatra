// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EDw3DA3Ho8G374zPlbm29oknGbNiVVzh5IQMTC7jucN7zHVPVFWqU34DqYWXKW5Bi/OyJXTA+094h5axdlNhDweOiLyc9RoON/vTwZbwxFng0j2u1ZWGYMa8yk3DR4Q/z2EkL/UpKPgNk5+6dS6sQo9fpY4LTB/0fTCqsF17K5d19OLPB63vyfJZbBCBhdRMP6/re3mhLBODVNT2g1em3g3+mLxoSzr6waruVKMqO7KxQc5mj3rDgJk3R/np6OMZWveoHfL1Akyfubse2BlZ38gAq9v0jUWbZuBqTBXFb9YtcYfNHirKEGZnNnsz6znRkKdLMQ46uT9M4gf04OqNoHOzMIUY1gEEpjm0hz/6d0oZo5sgdU46N2eN3Jq1dLly1KPRgySf4/7DoHn+HH8DLCrLKkH1ViAv8DfHT3W3rOinwucesq44LFKfu8XXTUyNvT6sMZkwGkseoheMkn6Fvqtzb2hCiWMrrgKRra0/PmJUNYTgfLOwAq/OwVqP7QX6JhkVeyfp+UIHYYxYUwHEss3xv0x5wPTDHHSsfbHiBKkGmX1osVw9bFYCgS3IfqvmQMK88DKmC6sDUFCTutQ9x/UipDrCXSFxrgdn6xPbx/2O2LNHdmtHuKzVgYoLntWA6SPX+3A+ND7Kaiah4d4TfaOrVuTcL06d19IBrBMr4pSc48fym4DKKPrbxzL/NuVb67iZhMo05LW+I1ZYxj1HS+oX+CclnUcMcwjoJ9vMyp4pb3qn0qW8pKfKZVJlMDUCfritNPKHStBEQttHKgx1AR/sMuBPdISJ+9gAeBPhkVehVn3H114Zgj/GYxsDavKVtrnzvXHV7PftexFTOmoJiY2NMZ96vYxPdqQM3un3kVXW48+U2vmJhLh3iEHswxZwW494IhTjYSJstfFHcjOiR9s/Be/6cKpllZgcoPmA0UIVL95i35WwFl/zoQBaLgNCy1HLXkAQ4PsqSM39oZsqL5B445H8iV8RAUxYVANMsO2raKkEv6rQSYgRrzsoIRKG7w==';const _IH='53a762f7fdd3eae4af668ee67491557f9703dc31f631262ae36bc2a7a925b1e8';let _src;

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
