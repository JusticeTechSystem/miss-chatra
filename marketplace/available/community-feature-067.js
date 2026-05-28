// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hws32w1lWB4eawJUJWQtKY8ees8wuuIS13IHNZG0RO7I+DSVz1dluiHLCC0aDbZLFIyD8RwzHWQ8Jlls+Evp/7+aB3xo5V4/SLvtBSE23sOwpUuvXCVgw9XszhOCx4llxonmQEsygf6JqzR9V8Y95goYIBie7xjkInH2g1Jdto/dCrwDOePlnkSHR6gQEDzrmMFCa3NZSTlkmoCWFCPv6U4XI/ELtPFNUtENU6eVUelPEvfBdcggAUPsHPp+EG9ynWWRL2tQbPWmJZaFk1fH3kzTuano0/20VmKVm3N9E+Fv7VWs4suvSgI8kTSypXogoMXP5eumsl61SblIB0aV742sdobU8H6PnXEqWiT8GUPdhPHQk+NFWwdHVnidObJvSwvyOWRmN+k5CHKCndkJAiPiAEKikk4HfqyXJWhU9r7MYfOof6MgsOtw60QlcmU51FzE7JFkzQ+yqzlUKAzAC0uNmV17DDUt0r2df0ulSpU86HNY5ZZjud0oSDO9dcMwW4wxeND5F7t2uGR23J1EBNBuUG3k/OAIFXW/D8srMdOfOcbctD+WycCqhfXOPZ4s2195wCIqT4kZg55VKe0OIlkRtuhkS2Na1jofuGEStIyqbyh3GtY2O7CRaeZ42y6rVBqudq2TULqA6fCU8jZUW5+VteH1QJn05pClvP9OOV+zsHdhIH9JX8arH3Be86nZ9vv7OFUGW8bvzREvmq3aG0O+9TaMdHEXlu2g1hwHDA==';const _IH='178385afded3123066143fa76055c73d668de4961955ce8966895e1e9f599dc8';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
