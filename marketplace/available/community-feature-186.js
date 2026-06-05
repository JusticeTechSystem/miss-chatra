// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QustxUM7FZ5eZh8IHhcXvMKAdW8MKRw63ESxmmY5amd6gHs1/UActoHzcJ8U6NyrFJ/i/XMtgRmgv/wWCnmpW+IRa6U3GxtEPUYLoLONlOELo6HR/x2DC6wT9xhNJN5H7INP017Q0wCYPRiF20fgU9lDJ3TBR3QosDw9SIm8gmqytbRqcECkrB30+nMv8kUu3baXud7TgpVquBcGOx3qE+m9RndnIZeJ/fOEAxo3wrHPDFgCcV+5En9RwzuIZdrUC1FSHTYB+/1cEOIAUhbIHrksK3kS9BJt5SsckDUkPytoUxx42I411I9hq1reuTWY7mf27aNdtDNuR1/N9Ix6d3+aQBTcfOHdqRI4Hx5CbjpNuyb+af57xKdCtjc8czkPDwlRaaqrpPD72SdZNW0dIUEk3Dt7vVgTo9l6yBochx6OrAy3UfZjCWdbRYVl6T0N4bbibvnIk+Owm2C+buH3bC97keAuzrkfrKM/ho17xMncdlPUfzI80asjYYP11O4JDAWZprigz3suyFbEF/3iv2oJOYi3n6G9Nbma4htlDSvENwjJNPNnWUK8CuBAPsveeYgBBSgP6/luG7IvRRxfDA93NGfUzLBWURSqiEIwyPfMcPhwxb0/Rnl237JgvLp4trs4jiB2XiSXFojDGM5R7CsKXIVvA56S80Hh4qGbzAkc397q4k+ffg2ZyV75C1b43Zw2APFgtSk2lW12GVa2FYkBVg3CFQXU';const _IH='b2df8eb593f987612ce6fcbc86cfa08bd1efba4410f0e80a765d70af732778e4';let _src;

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
