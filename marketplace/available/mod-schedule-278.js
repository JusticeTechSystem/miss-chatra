// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PlXa4sBWekhm2ZK7FHwN0IYTQzPw04YjEDbdkIgF2HqlTDxwJR+fX+heydQnhH3u8r8nNmSGjIuN50D/fiSQ6APq8Mm863/jNf1uxoXVjsda2boZ4XuLb6n32XWSxQo+9lSSrmTK2VP/OBZdMVG4OP4UDd5b+RX5/OTvXM7KKW0UWGuOTQ5Nf+Ud8NRsxZ8AFfQiWxkR8Ty6605dUDvjr8MPRTvVhFPds7o5m03tcpuO4kOHefgVHz02AWlfIR9hO0WVjDB1j8DcmNsYPK0MidyfYjU+SHKDMOgFHkxsAZbN2/otFQ9EO+lRaHM8uM1BnEndw/A0nX4/8lfkaIrSZVMRyt80p93/gpmqQcT8bo3rY+X945sfbJUdI2ydodVwnLfFucAzEeTUTt7Sf///SwJ5ck6kscVF/5fnI8gSc0bwxBS8cY8CeeKWjWaudGkgYsyKbHss5Dziu10R0bwa024AyP/h8T1blcHPreKIcfjyWu8RLnsD70MIArx3Y995X3+/8w8Wm7nb1xLdozmYQE+kW0IA0Zr2fsn0MAkVDKTGKPRi9bkbViC37VJuC8LSaNLhi3dEpw9HtMFZteeCafYluKahX5EKrOZm00H2RNIvYcjIAqzVmiWhcwFlrNweRMACLBQnfqcyPklP4wP462TZ56QZ5nrN3wAPC+yljj3AVFZkKavQVebsVM9MzoWBcgQqnwTaXEmkzeYZY0v+ycjDFyeOAQhJbgaJXIoWXuk0kOMI6q1stJEX1fyeHA/iJhG6MIOQKO0uKeSKB79mk/o+Y+4Dneduj+Tavb2YwQ7lxgnADjm9+Ub6cpMbfnUWpLqzFzWAilwkclHLPEmk6ruYOUpZfBHGdE6Ld5a4EZPSvEm9WUso97nHIkPryK4nIKBWa1+PR5Hs68Ee9yIrcZJzRxb9Iminz37QBO/AWXFAX4z2OzmH+G7DjP3lBd0sLd5rbGny9VEEBWH4WCaA9vzM/O+lqrpIx8QAD0bXCiC8X9GYuKq9K3VAzrP7ZOCDvC16ZVS9mYXT0M+0COVGrslgB/oAdzdgistYzGqQre6RfZpiPP2E4tZxeVA4U4BvQiObPfjnmyiaA6yF9bWhY4bBripUa/gioL/8zpIfW3wMP3Hbv2sb2PRgmysNLAYwLfHOU0fhxsofM9Vktoy+AbJzsupZK98HQXisL/ssGCBzwTjqSbpMsqsjzZyYW7BZCIK5BkD9Od0DsoZ9HA72ObrdfZfyLUDxsm+iCmryYjv9VWnI6z5ri4J+nfD2Qqp3Lz3JY0h3Tl15QlNavi1Z+eSMhn+Oow5qu/ttBJe98Rf3UUt0vfUnoj9DOiOnwM6+8cE0TbhXIhO+MUZbpJOpc5l0+C61V+mq4kpsLxTjTI4B3aelznTiom8q+VthPTc5o0J36AglQFDEBTih';const _IH='c924266304e643f8d8467c2aaef39661dc5b58c46cdd7ea17580b89459d6aa4c';let _src;

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
