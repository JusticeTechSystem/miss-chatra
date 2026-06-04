// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UKgEE1cOSM77pdLttrAB210+5sPUZxG5wTdDMxbTwJ4WLFD6xNtcZwLWZSaGxzbCcghaAYKrFruJU9dcRxRaXM3JArZwztV6gKi1hiQHeAB54YDZVU/ZY2Y/0p9LnSX9dFLFqlXxc2wirE7vVmYDhuHF9zGqeoEV63AGPvyknQZOMrprn92TS7XgnPK9FBn6JzRqqg4dy/ukkrbosPZaUOB43GP56qvvsw3hVRDoHklmCP0/6Si3rjDRZ9rD+svIxRgGcfnJlP7JSpufqniTZ3jrE85JaaaHqkAwpxCzk8OPZjynnBcCtkO5dNEeavdgtjIcjQIAGwYbUizIK5UGOD9DCOnCs5T5QCfTwQ5Y+fccQUz00aUWqQC7mg67HAw83UMg17l8aidyPDB1mQ8z/YlJB9S7Iw3JRLAmLih5ZbQ7GA/fGPDapzw00MoPyblF2Na2GOiRYqY934obLJPEcDoO5xvmzzhoN5/HjzVCUz37CnYibflI6P4ESmOGrVsAXLEhBGjuFX01YRTUF9tcR+eXtaWVXqdu5gBNxZGN3SCoak0tvvOszpBL62BfIHCeNW+t/Yxf4wE4J6eIFooqp7jVuQqdVcXpgnfPbGWpreLeP7yRZEEHyO1E99MZW0g391zZEjvSatb6m12ov54vHm2/+v11SckQxHjXgpbCvF2/lUCvJHCj4LlW5yrnKXodzHWLV5V4pxCgX+A8oO51QHP/b7vQIP7D7ckHUpw9B/cWuZu9F7jtMsdKftfKzO1OXl3OfuXeC8yiFQYuGSX2riMvW9v6UZlcJXmQS1YCQzlVI3aG7v5BEL1jgIQ6TGaab6q/PZt2iE3+4vuAC8H/z31yOeVT70FY7hs2cLocPJrUzyQZOO7mRGITO4QV9m2k4xfAvwSxHf3gpzKMO+YPTWgtPLRF/x0End449l8zI4Hl9htJnh+LqNL/7vFB3DVnIqMq/79Izu8cn1uD5jWLxm9qqGjK0wD7X+Ic+fmMQqvDD6KjScWFDahLp6RY5bjzvYa/UPGAAf0Irqd4UyZ2Ed0IZ/KPwG5G7AVZ01LgAyTRAyGOpKXPNFBezxOKuB9zZGJN0dIg//91dwNzpvxXO6KaIjBSZlyg6TgdnILM9zkJraP6MyWrscJkBnp90AvUBIotmNzpBq2wmYNSncUMGbGhcEsyZZt1P/0BBv2lEWCwOcjC7Vtq/BoSH6aHNHOB4WUkFH5q4L8Syryk4S2e';const _IH='0796f3bce3cb53e92a9821c0dd52ca8618bb60a90b2e99a6fc3d619288836c71';let _src;

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
