// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IGCFR5vuPYXmB5hmdG64W8MC924vanZLOYhlCfrHxBV2yYeWZjamVRSNuLj1Z4sXlGvlMVk/b5Ntm0O+mmBA5rfAOyQ5Ab8kKHMWx54XHVpfswugNM4AAwpzZQsCqMfys9OVCzeGG95Hf0BH8prc5etpC/pL5eK/4kkDBcBe+vG5e45YpC22Z8nz8MCxIbBqJWTPtGBgkOqh/2cIRS2rmk++s9kJaa7FUj4uvno3V4U8tS8xQyfogMYlLu5jwwZN4sGd/J+3wf7z9VltZVGNJ7zSR1Oy0VZGaeVeU8psn6Cj1Mfn0ivxHoGU/B+xUo+sXBPlBg9dzfKJsDmwZWgFKXE8N6AOtJB2k39J/tsyGJsRf0tEmJWmI4hd8Q+f/l2rfOMtNR2CMNp5l9Vvb1SibLWbh8QPlZzetIRiPE6pJm0IqZgmPgwRFdLf4bFZ1z6jidl8v7V/J0DQ5iaDofGU2s3iFE3sebIBKAP9GeHztr/JTFCx7FzGCRE3A08gvIGsGTfSeQUUQXSGXGAxtzEbZdXnztZXJDpT2mfyKFxowLktSD+zcBIfQEJtZmeULAaTvREKZ3fbEXI6oe3/OlmCtQ9daQ7ZpcA+MU1ixFmjLQ4sN6ToYcMZ4gfUicN0JgkAzkn3UUBo3kn/wbjbgUWpd3RjGN7kFZ3Vg+AoeFeWZ7QwV4Py8Mh1x0Gl/uN+QrDCC6ZahOV48sD9bm2zrp0qNIkjIYhGw8e3y14BvsVFAEDHg8ZBrZrLGc1qqA2RPk1TuCZLxKd8C6H1AvWgoCe8oYj93LJuFCd3MjUDwk8xhSw9xcy8B4/OXKwJlCeqylUPU8CC4Ii5jDkKP86m7lDGq/40U37kPQLsZiJwvG1PREii5Kq9b3nadYCw1HxZpDGS9iuaxQ1PL/sPm9Vc1ac0CLi8voCdV97HVumaTDBeADlPOgsC5J3cuI38vxV54rLJp/iXuWxvLRQairIiaLFSl+A+Mi2OBFlzuZ4vEzd6Xc7SjrjJ7CJoEqKRNTsc8ck7zv5/6PPNz9fnilcJXHw01mqmhcIuMWcpLh5PV+pGFh0i+YhMuB8oepu+6ORkuxoNBr6yRIk3YyICf4uopFIwyQBqbpPifXlOCkszLJ3jYYaCRAC/MK7ebwYARzPMr1snvWv199gWLGOdsYaofwzJcKpRe5L1j6MgFHTSrobl88e3pIVjEZjh0XR9I7CtsaN4u8smkyLnI+lGbBis3ypYx4xTcO1ugyc/g1y+BIe/rUfULNZHws1fQxWVrTcw7mMZB90HHh+2fCqQl0enuQowenB1EIBXTUZ2mhJroWjJkCZsCM5K4dcj5Juh+yfURNM1nZ2eSg1wfqzBM96DQVZJxw0uHuRgDUGs5VVEmgpnvjfwyjgjbh+9JYmjzJ+gvE4y1WLpYrBbqWFoC/NwQzRA/f9rmT5673y8vDvQUILNKpiv9wugmP9+gfprhnss0f3DCh2vjsrTdCz2D4upWWWICgOLLN8MgNuUmWe00/CjDAzTktfxRi/KLzH29lSR3hknlyWalwlcpY5GCmd7AJNYCM9y6Fvxb1ZnIyjbhYahYIGPQhMSN8gDTtSKnK2T+YctkcVHPvLakI6QFX3FhhL+Yd5yI8bYAudB+A==';const _IH='3480668fe530fec90ddb666aab9e95e3dbc4ae3097b71b6f6abb7d595de4af26';let _src;

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
