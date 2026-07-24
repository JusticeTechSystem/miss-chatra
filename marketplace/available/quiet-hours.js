// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPDxBJpZnT9TwDOWV5IM6dvGjpr0w3Kj9B4zx1feEbxCt+4uA1Zzb3JnckX4Rk0B9x46xaZbBc9TLdAfd4soSep2blsRyqdzFkLP52T199HlhdyRso21WfS8x/IOgxkPqrQijTn8hinNkkmBfFQi0n56Y9wgsKK+cGJcKIFc5AyqlzVTk5omN15erR+XtR88MrOrfc7gFOKEGIeZUSlRgOtSMZpNT2YveJTgXocYCV2s7fXo7MI+kHh350eWlqP2z5WLLcuMLD9Xk9dCRupQfixJhOZn3Aq5J3AeQ0sLv39RNvE18Pyr6T1UZSLdt6P5qyk3B78++XHzuvuwnwqAmOpy8lVKyxlxlQHJCi0BWbYeyUeHE5BaohcLwj9Co3J6fLfnfl1ow+QZBlV9ldzBUOs1jK1C0JqMFauigO3ykyk8urf+6pikvPQwdxy0lFQcs/6ifONYjgaM84jAHb+F1mwg73UfudsgHRpuDno/0KHJajo66pjfJoB0RmNK2EJPYKDMYiXtEOOAhelgYJfgSD6uvYoCBS8oH1XiiHb1bC4UWeiOHPNU5PtJ4csyqoxgBYjsNnNm0lAo1aw6Bc++DTIV3C9H+0B1dzWyNbkwCqui3Q/++TEDeegVRPF7K1o344+C81GpKLHflvUgKzL6PDLNuxG4xyYVsIr5lQve4NDC61oUOBWTTA0JZq7tsuOBXKmd0z9omUUf7wfle6drfX1vCxshhPaqIiKXlER/UnNURsRPH4pWW352YwxkJvArwgF3Ok5/XZOB8SpVPXy721YBtoQdddnIPYHjiRfwFGDYOG10aun+KwqRZB9/TgpoZz+1DoEexb66Y3ZUVoBSinPfGh35JnRiLfKeB0fK733f0mFiQdfjDmqH04gfodCwNXcWRfKBayhC7UMAjKVmtXAUDxAuN2VLurhxhYU+MkahIudwZFd5/LUbkv0I4mdJw6L/+CIdG/7d+BZKpBgvoaVJE64RP/FcoI/gpDx7ihzlPie89u+sy2h70MuzBL+MfWTRE1nPQdWBkQ6v0LAH3x64ZJnUcH1Mw30U725IW0VBMEKD8balktCxWp6RzIGC/WPNaSPdad2Tx+C+cAnYhRLZHpskhY5oWy13V+vYtwNvg4D9iBw1AxqZxJBE2URHepu9HJQR5auMY8KFEW5L7i3HEF5ZFr0ZSC3soNSJzVcghQzdTS3NXRpvVh9hsklnRCs+wr4iYp0Z6vSjGMbSczAeaIWHBq/+algVRLotNT6EYpaUA7vRpPdY0OD4Z3/Sxryg8Xyue2PYeUAQ49rNheVxNovfYzDJl3yGwAOly7BlvQP8uCrJ+WKeKnPPCDumzAYeCmbrfhs/1ww/BNqzWT4dRyJgrsuDsGFDe+XFLkQDfYli/9X5zxZ39nJiUiPuSBM0A0zHPc/CpRhbjGGM2eyr0Ww4f+OXB2SLQMSib+b3TGko3DT/0R4iTkbEv3lz1f9zjRxcK9AkJ0NhuZDngtRNFBA6yMoFDKEBzPBwBXbiVQpgBRm0f4f4kuLksG8LWhZ+CgaqDEZnTow41kiZZTcOiXwWcmMa3UlKFHevIWzLqJInnBp5wFDXaEI21r/TOMSFUCvioYlvCJ691xi1bxAdVk/S7DOiZRUkiJ+Gjm/Vu8iCl1Ca7e+KgYs2+CX+Lg4bPjkZwXWOGDi+iNqCG3Y3Du7f6k3h8q7okyLMqTvJE=';const _IH='8d2d695b649f0d34afe6f3d7620e861c1f412d2bb9ad7b135f111d5e844f82c9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
