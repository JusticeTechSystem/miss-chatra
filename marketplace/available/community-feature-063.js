// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cM/gyZzvWQ3l7f9KPyFwhQ+3Sq3h04EFEAylkc/ZQa4b+pyg3Car/XPaPLXZihpCn/xLNdzFic6qaaliOGq1N65bkiLDjEYYNWP8i9j5kUASRDQBb8KFspGvZ1FcC745V7qb3aUXDGir7FIW49hLtz/isuBn8Zx/YWOmfdz3CxAozQQcmo3A01X7Gps4SXN1VwvFHJkbs29xDHqNcfAH7RCD6UDmqkv9apEqLd93B9Fi72LfOU6Ru48Z+5zY26TeluFNZy6yeHI75FPMxQEUm/rv488fp45mT/41/y6jvMQzaNv+uMilp4SN/xvu9OR2rKVY4zm6Z/iDYYKx7qImhCPmyOL+DA1HsX+Z1XfRb0NFRoQWsfHChpbkxrt8LXX5rVn499ZEJ13z7Crb8RpRC5YCeZin5jigmN6pQCvah/9j33aO8gcsfh4G1b4o8yyYgeytM44HESpdmsE2AZuNSWchgu/O07/Gs1FCNz+fYtHfrLGawTmDtbEeyx4E6Qo4B6J9nmuX3EY077a9QED6SGgOz4fG/94JHvbmNUKxDJ/iURc0X+90rMW/3Y/iv2ujn2+pfgZBh+3we/b9ELtrjmmcmWiSKBfaWAknYHCvJ3aufDL8YFe5uyhZ2Fnd2/s/DSCdcbPWRPbeu+YCrqPuVRBryKH6m9od/SELawegkkBM9OsnFhCDs/JY7XbG7ZVzsCax5FX18Ys5f4joD6QDfyTgysNZnUiRIQ==';const _IH='12b5828e588f93cc9517c487327c97dbfe5fb46242d32b4904b67c35c7694a8e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
