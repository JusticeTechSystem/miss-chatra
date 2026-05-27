// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4g6bZ9rgKUDM94hIuYwkXZipLfAulotUTpwYnQ0+DvfGjEFOSP7uVjbUCvxoNJi/eNcFRHiWNF9zJShgPGdB6kU5iZd3Zg30C5aW8C3JIW4t2AfTHi9UoG7KzhiOUmQcg6xw8s9gD+dMDMSHjxxRwshp+NMzBe2ITsDUMLazB1Gc24TLsUFpEHvjomz2vsQtfJs82xtkAbmKJukmMlodHYxSNEfZNUFwbHoBVHLgO+lMREu5cS/8+gOxHcGTBAxmXM4WyWn8Ui0GymwhdaRpxAzToiqMezlxg4YN3gDwWtY3Dy6OS1VWmo2d3dBcRvXT+kW18U9UEm9wD9BBzG9Dqy8RpPqLax5mR+Ow5Lsdh3FwC480X14dITCI+RSOfxyZK9+W0JkLeI+HPTZb0HZfl4ROZl3k0Qg5XtCjdKyvz3XJnaPiFbOpscOjXCIQMs/rb4ZsbHRbIrpYl3COZRxXNnUfurw7zCWszUwzqSbJHNLfMV8PWipiTSlC8LNsvDYqlZD08ZmNoWaogJb83jQxOfnUYdczoZnkUefHiYSElUGecIl2yN1/RpO+T6N1NXX5bHrOPTOe8fBiyQl2XpIl+bfED6ZoQqEvjbRPUomAxJFTptdU0YveqasYJAIXEdcGJFBSzBPgocpQ2TXZ1udQKj4ctAHiHbGx1lrrkxVsaONyJE8mqdeK2fqxcxK+khgVhXTReDBUSxph8Tq18FNKK9Z9XmjTGlf7IX9NzZL/KZNYJyQrxr7QZn1ZCP67/M5gHd/JvmrxH21TlanRRWKdKr1iuuFc8ePP7Q4Gn9QKOb67hMeAL1PDSuS8wxZpAuUa9QeZHUGBGag4UvXebOmKsxdyu7d4kIR9Fu3xIFlx7LBETeIrg3Ff37wNUEyOAxZZr5QYyMDmTSLK/Y/fX7jD1gxNtb3B70MpTwKRXE5NmjLs77Sh6groCGNO4+KnWopjdgk1fIgyD6W8a24k/zguT1kzhR091+Hei6MNNOH8Gxmr7+4Snf8Vje1s5RRUV8Snanw28ifY7Q4uwyF5iskms8UE7CbOF0qvNe+5gy92dKHfWZJXetzXqkM03UISpL/ZKdXWXryREZSyn9KYl2fKkvHzzJdUNeQj57EfpRAvvsfm1Nlbspm60L/o7+aF6ZmiLHpIpJ13zPVGYEuhFC6g9llKCUGoNotIaESMbVIokus9aqk6bkgrFXMHlGkruMtnJtN11GnPYs8NoUJafewfEaOMLIou0X95cWam/JihqTYXlK7DP0mElQjG35QXXjS6JfvF4tBYbQYKithgasjhD+mgRpDlwQ8fLI0qQVvRGw3X70CvUc39Dd8PSX9Q51+5S3lscs6OObxdD1zwKV9/vqQYd6Uk3SOOnkCvogGH6ir3IX0G5ApCKA==';const _IH='b699c57d97aeee6a49778b728b782beaf61cd35cae0eb3e22f6e765eef1bfc8d';let _src;

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
