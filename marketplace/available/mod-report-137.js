// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PmgUFwd8cMIoFBBLqUnmd0FV9Qpg/+Bp8q3i8mdlhIh/+LgqToxSO01Hpu9R0mBcZeGR7DKeDDiXML09COrm3SoK7Jy7zg1bHaqNqECNvj6GAB1hoKnBdTCDdli03ySVWSaSMpHWtEuAbzTgQjLpeYPjurazRVaVEfrEvHLJwg+5aTeQY5FPTE45E9KtytysEMa2x3L5JUh7+gk2vEiilWdeRKHygdE/mDFLm736LpWnjWv/+OqQcmN7xIJQcLkuKK0JhRgmEyQ7lYJsg6UoA6eCm9uxgqwbIesEIlXCNzz4FG4IHXgsGXeG1Gb8PszF2J7ukqNxLqpXHq4i3UEIYyDLmKwjMkgmW+Yl4b8HrUyRP/b1eUBL9erbmMT0qGEljV69dbGzwgFg1eGVzxd5C9HrtYFCqPaWH+T0Ui6Xu3nvmKQ61WoxseRSOorAYA9hZGPf8wAia9y6rFQJrEcpg/ZvTct1aL2nxCLgbsduZn7i9zWfslumtQAfntD2YD4LVcrQqi4KQkcaDjrlpz+C3RzIlh5Iwg6DBomU/5/uSB6fVBd021UWDOFoX3xgQLp0M/nkC7t+qs4Ywk8zv0huzxsfDqcQfFOOFh3gSXPyQUvi6LUWF2r64B0rB/5mM/+KhZIJrJ/lnfKIIztOT8t1En2kYBTiUVKS/pE1ESuXeVka/0tF/E80gDLZ6hGf4L5dg+S+drwcxw/rGVJeDxYpE2FvrRMdzLMrDQY1AaT2wRId+CRQZGJoY19mVF5Ir76nI5qBGrg60EapTUAHAWsT/9Uxv4CGULQdRyoHHw1y/xzUDs1QLlsYKK493gfVmdYIDsPDkuO4KTP5IXVo6mzb+Jcw3iZTsvT4JVCQBbqwAsbLGE3y+pD4V28Hnk6gQzoJgSbM4UZ52wlaIR7Sje08swISn9NvbCqLAhQBqbynoh4lh3mRB1cfs75CBAtszUXNFKAVLhm2tTmx26V+rPcBXAfrlOHM9cfXWqDQlWKDA4Hia6KSc0N0vo1Z0yCeLGXv2ufKV3xRG8UPRDjgIQeKTkyq//6XAbIzJBbee5e8SzEtdPxidd2cIiDbB42J1IEeFYxPrD6Cq6Y/upsWaY4JpN5PUoCB5+oUd4DbE5KfrtUs2TWflIouRHolBn+IsjMEHn0ALKfrjQ8nKQsUB2aXvx9n/hnWYFwlCXo2RzZXpjB1XaITYsBGbmh2G9yEmHvfJgPmTBAgo0GwFnjFAnF/WHQycXRsDv5YwETxYicWD1cRxYcY7wX336RmH3yCmIxt51zUASS2i7vjXwty8+LeTja18qwi1isxxLcChDvz2qmc9h9+S12e+DuotDJkUkectdre9dv7Z6EP+Ghd+SKMyCf5GZ6wEEFzp51hjzHDgmTPfYgPZpbImg==';const _IH='e33225ba15fbd106855a23af28eb3351ed17056f8ef4fb1a6376dadc74eef416';let _src;

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
