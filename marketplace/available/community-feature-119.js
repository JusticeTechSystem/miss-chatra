// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oN+OFkUjnLN++ZusPg5Q31M8ku8nR/a/Hu2JQDm20ZkNoxeQikb+uOeONqTXvSjfwHfKXQAYi/BTEhyooo7AA96CmnF8riDj9yQbbuEHoRQ/+7oOP+juHRL6SOEM69wil2jLvcklzBZRf0/Lv69WwFlViLgj7vTSixK4ICSasDvjPNPOXhDrudQdcCMk1IfoOpJR1kwzks7jpQwJEiegKR6l/V/vGnCi5bW3zsP5meXdupl1x3H2aBDNcZvvw996Sj+r+ln6jjnF/uo+Olrwp/LEWOPIbEDN1RVHcbmhoQ75eEIiqgb/dQOSOzxDpMPxV+JWRQa4bkefjWsrAARyfZhSGwfz/DolKkMIiFBw5Y9TVK2ZgyZ3O0YLZdeGye5/YA2I+wgLtLcxK/xiFMHZugIFTo+sgsGsCAmoWB16Rcd4RpqvrCeOLBf86ew49qm2wUHAMn7YSn4h7hYJk+rTeZ9wgEJzjC1oOOnibz+Hotdu+6BeEJ6SZnDHrJnbKeaBt0P0h2ORmMBQ+lbhNomu/lt6YFRrPDieB5IQct+oHcc6xe/KDRzK7Dc9mmHGqNAdd8kUItuUtNaHXZ9vE1xPHRoOFvZ8TYKnQnNksjYEVGJ69WN/E2C1Rw5eztKJZk32wDTyAP8zlmKDktfvszS+wmTMDkvRBifdw0ZKnA+8R7a3bbNUzpUmL0eJpyvFtstw0XZgIiG0qbaNxNST0Balq8Sdl9SM7/6bAz9DfVZIy7XMFc6KRmI=';const _IH='04805ec5c64250f2908565c1bb21e97920c20cea4fcb588dcbf637ecba5a494f';let _src;

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
