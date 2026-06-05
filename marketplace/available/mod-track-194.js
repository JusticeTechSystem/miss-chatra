// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='It48fzlLdWgN+azdkvM9EpTG6C6iSEIa0y6cIEcFJ0jrAsJfK0buXj/B72PdwfuHWO4Iv/F/7/tINa34Hs79mWxSsIhYRXdkgY6wdRZYp4cXY1+ynQPn+jaEd/jpX7JLIArMaapMB7knwK+Xi+6Z3Pt7pFqRFs8eWDJQNMHZxHuq567t4V6mlbwRyjubtq/WQq1mWbHFFYVclvLdKHWCgb0N6GDP9jRMF9zEhdwjdMLbZ66KILfXztH2kIB8AfKvUVi7RcsH5KGkpm7N8x/bCJoblwKRnp/0A5NobjpMT1U+OaWsMeE9sBlxslOKQmq05sj+gHf9S8xiJILW/RILTbFJ+TO9HRDQXUliZ42OthlkLgRdI6JLC+FVS5cOTrEHyWmwxzPqfkkdTmElcH0yf/k5dTAviNjhpD2C6H4In+YevU2t4PtDyzGwA27eL7LGlzsBq4VujMmzezqvbSESt4aPlTPBLMDvPKE/gHpqn593ftCJ8cnQuRWf6DE/BTeY4Q11QTQ7+/xvqIEvzaNv1zdFOgvFj7RBPiBN6YkUee703G1pkK3G9B0qTrAEyei6DGgq1KEICXBK03c14axuz+Jcumk5/HDFwNyse4URQXCBO16eKu8IFNN3rM4nVckaWyTk+AL5tsp14AQlD4yJfMmCxxP+iZyth62FJH8gXTbWukp2SIoKtRbwWnk3cd/o+Z+qbL0v2S434b/ixkMYZg/+0J6Az9rumMyB1bjSIi/ZmsEqCu4aYAAmSvDWTs8LmsghX1p3BgOhfdAzA50h0K37m7egqyKyoaAg/y/8DuUQvY7cFA0UiRcf41UJP/vwxf4fDus98MESPEdNcaduvKEIFlJ/UV7CAhFtzP+CJGZ1cMKiINMEo/GpS+udraGQQ/pvtUL+jlqJdSUX5V/Z/5iTPKC1Ye5T2p1Oz9wWtTvKUyFLmRFA5/vhMGSUCWHdGRDwnGYLSUUE/V8lxOiOGSKWN07jjEBo19rhOFkd+8ZwzC2bDs5Ipq3X20p0iyzy+GWhu5aVXM6QHi6txd6obItkbT3ehmCc7E3fpnCK7fNvZIemepONkJX2CVGsWWEdg1o37c/eDL9fPlp1VTCOVmypd7hfmFehK0IjonQuOVhgbGpg5yZNJOG5iLbWHg9CEePGSPlbgY9Huzo1FjnihlBAy/YlR0knbNDLuheTlaoLGCxRyxymqBcTT99yUwEU808w7BWFX9MrqYqQ169ku17RWjY3r1kd4MRPV4MA9prMrrBicJ0t++tU7v94o9GzHDyI/y+omgfhK6nIn1uL9ikJxccgDQGPaRVTkO06efAgSdHG/Hq1BIFoBGsi09vIySg4g9J77y8KJP1NQnV4kV/KwY84QBCONO7N3FGk';const _IH='96fd05acbdfb9d648634cfaa0ea24aebf0682f644a7542692cd6a6e6e47b278f';let _src;

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
