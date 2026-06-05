// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qx49TUpO0qizjA5mggoNQgzUcMEqzDlRUTIgtYwWhnuQwBdJnCr5GPyUXyuuGKb1KBSTNivgIKR3kMrJAWctVfWC1X37V1IKjIu8uxyybcFLd8kaoegA4dgBjyV033vTKK0tzUOWG2YSNPxAvIK26n49uEnRrBfYjkogopcWpoKKLlSb0/o1hUc0Vl0GX56UmfL0HG8n86GwpQg7TbEkny9rbzmWPtCdOIA/ybyYqtztOst0J4554GmFj6ZkrdD8uNXlC7qV5lN84Re8KFRKiQW7AimrA/53HZb2z9b5DcCBAah9xABe1/4y6z4CX/6BnvaB5RY161Ast0Nd/6UB69S/i1KuX5rYSHi5CFJEw2qmKn6IV/XAqE9oxzm74q/HaGiZ722HYxMP/9vt5WLz6HvBKJgSaZbjmPl8WTPrRPSbvDJlmDAYq6NbozhzPW02vQzaObe459VXh9d0SOID7vBFO6hBQyB6z7vFlq/9DdoLHdoNk61Vk1+//r0ymTr3mbuFWmn6YybTBYzR7u4+OToQMuRMTm550bovSw8uvkcQuwNTm2NglH9QVMFVU/5ve8MknnrLqYYERmKP8nRvp8CNR8X3V2D5FV+VlGhmH5mVzgidnrpCg7ifzgIyllb7m1YhTQDVwSMbLVipf30UjC2TpJedUviz55UagkJ3tLxmUa4tsLEN8CN6zuDcaGM3JtYD6CrOex0JaLSlxcbzngqjqNqCIeE+bD58G+WhRKOtPsS7tJ+JsKJtT5RSZR3+5LhO77eTlctB2tr0Hn7vsUO/75YEJt53YwknkMVni/a0YynTPZXxz4EekRNchztGC7zh7BLd4jHvR18+P/6m6x+tyf+xAIAMqo36k/yO6S6S5Sso8zWCedMU/fTGY4eBUegziaADfIENnZKpBVgZDbH0Ki54mgUZv62KNbaq9Zg4EUTtXcUHj5auTG4aNi0sAdmN5kN9nZBAjqLkgXMtoYnz7gtmJ0fXA8IDzW7T0xwnRZCcdF5B6G3p0Y92NxCG227agCVbfhxKd1qbzdDSYZcurN1xt74p1orFqDHkfhwnE1TmPmLExap2aN8AeBOf4VS7VDprjl4f7TH3lsZgE68eHiDZl4g6RLdkZzPpPnfbqS7Q8cm0mg26+tPYNoU5BOIgFkk1Zsmnh1uI9BOZr9rereXLrv/YVqrvKhkhJg12Tbiho7VDMNCxV7If6Z24TyuQshBsTSBwSlH5VN6r+U5EEfzrrfV9avk03tXnLwK0aD1JH4xNydNf1yL9j6JbdeGdz4tjc8gakinn8TqTYXg92qLs+sATyek2Bm46lL9Uz97s1OTRq6dAFnZXfbXSHW5gKIACKP9l4VCha3Et+gIqkDX9uvvqqaiSW9Pq2AaGNwe4uZS7ww==';const _IH='6e9346561a745ab3b3c62f841ebfc207e0e2fe90743d0dc9f7a4bd3e41ba5a83';let _src;

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
