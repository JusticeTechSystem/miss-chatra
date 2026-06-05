// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FwS72E6UIBxFRC8giK+e2f+pKK50AhIBoTVc7hERCxv/189JuIhMloLhfzqTEjx0AixElLU4g1vpKHCuibOJQLorG65XS4X5oIZN98mXoupbsOJrfxFuLJCBg3nffT078gMQeWNKhDVWgy+A7e3Zrs/x2vhK1vX08c8+hDJxsQQ6PeVCnyE/p1Qam/EhxnkNT9q7U4SG5xu/Q6gew0Ow987YxRvhhhoml0GJGS38X6xPHKg83MaKJX1GQuaJ2p0m/yLUU7J32qvcQ+Lb1UVI0wTtOxb6i4bLFlqPHBj5AJjKhRhZDm3qr4SwWRCUGAjkI0K3xosmqjSkhCHnRTSINsPcq6seDE1jNqacDnmZmBp4NjCijMA+ULD2aOfgUi7xCvuRs+EpOK7CRDCJpwJ1LkDGG9BpQFy3C2YLSAJU7SIBZreaNttaNQ99GhxuMyJuOlLn7QU3VnKl/RSu0pxBba9tL7piyoEOIeJDvxjCuVEMfPOwxAkXFvaY4aZcXqV67lGNxf3uQkBTdMVzyddeKwVLzwq2mqqJMAD5ing/NpAsU2p4AQyWVjGVKWAlzCfjV2ZgaKPMOcqqWY3dx/mu69ftloIjp8xsgt5qfeVVZHypS23T+Do/xyWZ7TyKCWWVbZ7rnglR4RX4d/WFI+n56VnO0TuiOO4ajnLBiG4kpewdLFImNo/s3VYXOCdS+LHoYXwMV0TLPkpWvdiEU0bRUG2dQXgL53cnOu87ovM1OEx/1N0Nlv2uOOHjyUeq56mwOARtqxbbQxuSgUuGVXhJTZzcvddr7cS4C58msUh/bmuTj8KiSFUg+xsXaEAhqaO4U8p2UPJ1nSA6aG0yx7kV+qHzP0Zp5XxaUvky+4tGqrwgM7tWj/PlkbUZPlmPLwutfbFoYHzUGgm2KX8jY3Jqf/OZZotwAodxZ1L1BL4kh+eH5yZlbULBa3oBYcSnmhjDw7WBtm0vWfqpjBhIk7CDi85/iCQ438ZB3hjmeCduc35+ZSaZ9hJ9H5FGOcO/H6tyhcQ/tc76wMbkPrY+rVzNzNVxcrNFyE3XvNxTRJIdvkHBB9kjGTjOVg2+Rxgg+AuwLXp/sGmAWO719XcMp9cDAqhzGIxeFn//NTPTdSxY2MuMAfSTd+W30ZZjLhTw70MXFrK0ecGDdA30FvySlozSWPSBaEHljBbWw1W6SSQyJgtbkkHLtcJilEl3pV3T2tK3qdDu+C2Fj0CIHEtqo+ZsK9S/mKHInLValo28DmFW/PCHOeHt6LYmmvGUGg3UQVzraG8UP/fx281TkaSLh7YggrYtmHt962Dv0VEXvZK5AJW3WXSbtnKMxniB635HKbShOWo6O0E3oGJmulaJc6FbtS0sootDvMIHWH9HFluMlm92Iivx/kSW3SgIfet78z0SbbbF5R9WqWCdsYFyO9Bhh2jemUzXWFtQFT1kgZTwXQE1inZzG8lQf5RcNv60V/7C38F3lOKqGBq5vCFQX5GQzd6vXe0WyNi2bmZKMp534g==';const _IH='930414adb01eb42432ab344808c881b6364801228510be850e16ce631970a89d';let _src;

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
