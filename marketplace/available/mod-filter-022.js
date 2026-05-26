// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dEe2EhD3LDY5rTOCw4iJX9MPg9oN/voWeZ0mn4NiqAfxEjuOUPk9A23DGoIthbXj7oRh7jYhGCqzjJDxMtAWMM8D/9wF4dRvL5QcO/OE8nlwwWn5yASp/ZAd2nv4/bCHrdjgny6yEQwcAezbjzHxtkk7aGxJur+T7krgc+BP37vk4u2D+KHBApADR9VElQ4XzvW2q8kdWwf6iA97RdklZVusgO+quvSUtOcS/l36BiY6AGrOq740PyjC3/+l0Scg+7qkn70u1HK8tw4V6udoY9H/4MtG1GPHI132ibZk4azpfe5y5Unoo8BaIJKIF50cAUoLtdRKBLAZSg9xyLW37N8bm3QYw39F04mYA+BO/ts66YiTvQ1K5mQX820KhzYZnfKSzs7g0ifaI5rqJQdNxIetu6Ni8U3sYCJogE6v1Yj0DWaO6iHa72OdD5J9XoFmNM21Sf6tAR9YhILBCv0e5eoM27owCGAdiwpe/YVgqk4nTvRYHY/qQ3n0maOtbkA98QURDhmIcEXqznrQIRxo9Lr3YX58BPSLsm+qTCBbBkDhjBYZoMYB/HF5ppBmqBG/fj/+kzb5oGj+qRXcEhbJMyiZec22U2ixDGc4LiwPG6Y7gWn/eAjg2Ky/ScJRmaTB4iQeDfpIXuYYoqOOYByaSWnYh63dpshQwauhzhvAUetzeFcy7I80YZG34svxF4G8nmgPki6mNep2CECDLWDCuJHjA1fNYDzfSbdqBRkf/7gRvqeTnpVDnR6/IZ05d0f95W7uZ8KJ9eKcAaM5sA8ea0RK4smYFT6RGlxau3zOclkxZXcLwfFSShd7jIUDqgLWyJ8ECWftr3EbU1WawwMUT2FfBwDdEOGEQh0ldqRlnkZ+d+raC6YLkenIETVzJ4eB30XUTYw3Dh2K6Nzg0O+XOYGQDY/tHJRBb6v4+ZhVmgiABJl4hNGABuLQ0sYS0i0HSBqgh07RSOeVuOYYXM1BnwgVJGqWZk679KX267EWWNkwVYsmbMtN+mU2NEt4CO+C1KrvGuRNS+rjdgkxl0xmVe7JE4NyigzYD9TWrup5gK/PPv5N1o9dMPVx9mnkRcXlkIlCFWTrsV9zU6nrSHVrpIXiZFTZG+qdvHdWg6WM9uiJ2FMl/O238/tWOlWqNvjG+IDAAmf0sg1BovyiQXT0z5i/5FltRnx3Ui98o4SNj3o5dgrA6q6VMIqNbTEnlGQgeK5X3CSpDdDU6ZpmVnUZpHyVyKov1o76JZAWiWeb41rS7Q/N8S3jOEpXoHAenMjvzDQMpUF6/BpNyuWuYpMlOUqpoib4tsVEn0HiEVdFnvwQc75Xv0pT9oqSIxjtl0SNNJknmEv7Ne+IwoweBvlNFokhVFMs0Svxxtc+MSkOFseg1BQ=';const _IH='bd4627c81ea7af9e2ab60960079a1a50199b0233a5a3e20e1db26aac39934718';let _src;

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
