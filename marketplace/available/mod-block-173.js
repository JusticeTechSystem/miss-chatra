// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vyt2HOdIXKKKB51Lqi7ljPf/6wy2BLjUj5pqIwr/cirk24/xWxe/nri79INZRUk/6t7p6rL0oNoz4Gped47JSgO+rwcmQch1u+1WNwBmeFnUZgR9+y6YJJP/EbRWiO6gpYjq6EKahahyMcbfcd5mA9TkHwuDkE/ZcwNFg4I0lLnq/lozKoNdPR6fsUQIVTAE3q43pnvGtF//Ghsb2Tkpp0uHhO30iWyUe3j3Tph9C8EN+939m076baPL/e10hTYxjv6iGrjUpzAwi7BLD1JQ64N+QzV7vupEkWZHOAriPBvG8dZmyMDRA+sTg4uoL18oumZDPceM/HxrAys6nq7xAq4r+l8EzvPff9UgHMx05g2db1nTvEuTwWIzX4lOAV/QLNgkSY/oTc35IFNPeJo7EsJ9OAr/N6fsFtmPnXjviX+LAkti4tmvWO+ctKURvUrN9GYEqUoggc3gfMlsxqTKxXEIdEbbrW68gB0FJFKIJKh+0O+uKusbEM1S1+Pk1cda5t3kpQvf97h08fQW5kY5dsdyQP5p0n5Ro2oV8PtFWRHp29AL9GEFi5QBtIyZrgz7O1PWTFUNzJqiUrFaqFnn+Qr9iGkD+S6Z52QtnPyfHycxIo/EZReegG5b55Ui4B5j/FJ08QMS23yeQa419bPZVOcGPyIIHR8nh+NCdj0z2oBrrURWkgefkCyDOtoRIXaObZ3A2hu38a7ysOIOixIN7Hfb+AfHxTxwAi+fxhTqakIHkweDhW8sg1BHH7tJH17Uu224FXjSL0C5CRr/AHvnKpuUMmCdecEqQok1CG9o3PbuP6QMsOxCLDrqnMRsaFPPylG7pmtk5seGk1yH3IkOpQ4ZqHXbpvYN5JT4wyXv4hc2JSvekGwkokR3JFuZWujP5t26UFmvKbYzKcaHUSo+aHj4LBKnw6OWZUq8bMfyaYQhimy3XqvCeurKVdqKBg60DYYP6BpjDOUDH7BulUMNzFlmoW44SFxi7ZY4vCMc9lc1rltrwIxYQ9PkqAxrHe/+lEO24q1z0z9kfu3dVDqt7bh5BbkR9sR0Nx3hOPxjVGj5f8V5BqPzHnvouDQTWLtN+xppaK9i3HOoIpCvrFpaElAPQLM3QOJ0fqUpmDDqRILIN9tjwfEfPMBcvAol8CBaktKNHpdPXOdiPN+F6bbQW+QT5PjmDx9Pj99B++b3hjOp7KZD4KOS7+pDC8DUHf9UOWdCgFf9JG17iUAPN1xuiEYUv28xx6uGwC33FQ2Pi6yxYrlr8gru4mMLsaIyEo0PY1BHW5Y307cGAqUET2XD43cLhVxJUfWlVXr0/zOO3NjTTyV+uJmz+nsjJUUVka12ZBy0NfdAY8P0/pt0w65FC8GpbhTVdpRTeqD6eko9';const _IH='e1e15e1ea439b26b960fd218f4b4341e59fb53d8fcd98440dc54e24d0f2c68b4';let _src;

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
