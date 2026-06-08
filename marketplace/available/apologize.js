// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z9F9BOCSPgB07W5rl5JoVgeerWNFFoErf2AXf04+QcczPXIl6Ik4N/2cOfRYFu5GfCrYNjz0ruEX2g/o+uU373eyTt7n9CqcxeT31hnIdc1cnKcONA0+5dnt+ydUKyrGriKLBEg6JYRz4J2XoZcjrp3KSQkos0cziiKWrRll/pqy3ljB9LTZnXsrpBmOPIFY5Qd3ls9CmWs/7tj5ChYwDJXJHnzw/KMBUxzdgWYbmnpsr6sYg5pQYv7uHo4jc+WinaEq6OgU74bUyyPvIkx9JVLUmuHajRUmRzD1VmIxN1qH/X6xNHUS2LG8E+Y6p4ihJdxLg8gy9zXdOz8Qs1ZKPPKtDqMX5xG+5aXUn4oRHuVDGeHdhqOnyNq6LPTMtgL0sBftM21xVd/cU6Wo85g2mA2PftC182g5c1EqRfgiVOubHMc4KSyFb85qh0jdpzhP+/1etUA+PzO4CztZyHwM4nfVQmkQ9zl0ViH7njXHPh7O/GRhW4CJBr/H8y5rx5bvf9XXaXi9yiS48orFJwR8cPU/+GkAOE1uFuV7UF/2VONDih58s138LWVS+sqbpX9M90V9uJYS/wrzNQkcs5JPyQay+JC+uBkXevlYDa+FzXvN81YNxeoHMmFKOL4GXgCWaB+01aDhT2NilMW80htr7bCEBhqVQeaby+4HM7LWeD397U75Ux19aBI9eCaUN/xaODVloC5yKf2+PwXVwvhl+UcW2fYROFoAcM40QrMSyYDPwS3h3K/EHjN/dNZPRRx+rriLvpAYcPXrSRlt5PQCYVfQthb5ZuJv7C/3ceiAuP77PYBVEVSA+66qRTP7zZCDfF/sT8wSbmx/jSGMU3vwlrVszu5aPGPoBodktZdV95DSmIeL5hxRSVGZ0uxgA+Aio7nuQOdJo4VvIPOGiYghYWjzKBZYo/em3uytJGmu9HAIWvQgiiKp0KKTJi7n1hAgT99yVtbET0m2GwBYNDdxy2430i3R1MQjWAFArl6uYfMs4SZT/rbcJGgh+fGtsZCoW8q5Kb+BnHwqmLDM48GkvJIufRDfkG+CVcU+a4XLgYzY8qOsptCc9PnlNWEt7yoW2FASGR6Wu2HJNWjc/2DRsOzTjrby+gdOEpCKiobj9AWnwzl37AowCprDwJIQsEDkq7xkHpcmP6ZEaEfatLSaCsWE6n81GDBMo7Ssp/QZ2z0sPd8wBA+z8iiPiZ+wz/PLcqsg8g==';const _IH='245207b79682c93b240f7bfe8b478cdc8fba89576b9bca7406dcf669ed8df0f6';let _src;

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
