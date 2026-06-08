// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d1ENF3VEjSaYLYQaDrfsy9gk6nFiFFcLfVRW1NNeBZ6gVJRGAGIAGtsuvWqdQQEGBe99wlOPxylw4CJnYVGYL69XSfh5XMzJauF1R2Ek4LIbVs3fcsYe4RpKd7r26m7/sYaucKN6lapS7n7RVSPnix5yQrIEU22PPQ7Gn9JiVAfuRPaO1/D8UE91ddHrWDSMqANseeWu1CpidTWHkmFMHqHAv1EfWbm44PDVXtZJVvbF9W12XpgaOkmkpCheur6ae1Z1ZoGtXLSm0hElK9sZ8v21iyERIFXNn/lIWT8wY3zkwUM1SNBkZTzjRkrS85XavuUXl67CJAxalB5/kXjUkj3Xp+K7Zla2uMABazyh+lbutsBOjJHkRxYJHDTFnIEq6Z37DkGHbsungjt0esznN2Grql2/nwPzeCKWMYywaQUwqSCfoGTxot9tjsoQTiZLhjI6xNH5vocHcI66dt3L1UbPvKWoE+4gRMgfLOwH0xZ9VrHRVrdLEJeEEjcD/M9qzfqdD7gQZ1waon8XUD5cD3sfxuiSroM4rFoDSqzEW6QYEAXkLDpfO0EFJ8WRdFqEd0NyFOXts+ZZcJskR+FBQCRCIAixzgRwpXzgSyQf+DP8dvZi5YLX++Sc5jktXuOM+6tMUagienhgOIvPBoqgOWpTaVPOKzrkgdHpd8G8JF2ot1X7xJn0i+ppd+8ioqoevblOorjnTyvieugRLJHsFnzQDSBdp4YA+YZPB5+hY+3BTV1xgeiBU6tnFgG5z+1rpzRqoedVXZdhqsKDH9moDLBGvPdm+1N1CYwFypIZ577FACZnWqyCDhDs88vwk5nSYu1+Tat6rfiYumhquqoUquzO4PYNvwO7nsMsYGvDLldc2GeTeCdrZ+VJ2FLJ08pg//rVwz7wQot2qMngluakkEH7YRObcKgln/xMYAT0tXJ2NZWlrdcuz6trYuukARqsUIXRJVbdX/pvLEZhfZ4hDzIkdX0jacF70murXK34i/0mPSweklNKjMjEMuiOLB1jbnckLSkQDqfhekOaArrqDaRbEBh83R4u+R+sKcfA4U67vD41Hmc3KPewinEE/Y4+f4q0UlOxArkm12eZcncGKZ/KU1nXMSTC4z2xkfpXvvbrROv5DdPA+D+lzPaQgyt5XSOSLm59URZ5DiG6HDXHwqi1fThKRqQSUthl0v50Qgem4zQkGaAwWASFKE6L/Zjrxw3lJDTnhKVPXXMsxh7KXxUcB2CjprkmyFYcZ2BOgOq5OXhUVPZbT2Nr3dsUgG0kTPctxttFwGSkcPioTd9g+aivgukkdt+alyN/V0HtLhlnhLuBmeamaOyN0bruJYZFcS6PM9hwJP/71coz/cjisvDvnc77a4J1nSQlC+f7';const _IH='eebb45a5a9f8bdd6168d055883c7c5f994492d3970de8531468f93fd5e1a21fb';let _src;

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
