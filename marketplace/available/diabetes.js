// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQ1mawpT0mKR9znzdvVB/s6C+3SvDYNTTLCm4S6hLKF+aJ/Fm56/PKndDStHMo5XnorFiiQOo7v3Ner/qGxi1XCZ6/molHhJDj/0+ktNPRDY1YyUCJ+uNUqlaV3bqFojsriOg+EFHY7Fvf8ufJlA009Utm5JU4zbOOFtGARP1pBpTeoJKHfZ4h/MXT7yMtXZhM66CUweEhPRrDQITtBgI7VYtwx/a8jj7LEwv+vbj7kRZXjxDVwU8KZBHpGLYxE1ZYTgFumpD0hfRamdm2YTtBIBSwWmM6/KEavKVeUvzvaXPSP0+0oZLsaOO9RC5Y/fT6GSKcapTYsMpLx7E6cAs0CjmLvYNhjDomEHYWjgRATU+apedERaS2+mwGor/kjOGHBjAuqP88FOU0+H7DiEPh/fj4xsqBC4wyBCe7NwSd5rH1xGP2ZA4HMB7c/LfF2o9Mr9E3mlHL4+23NDZN7gBLr/JfL5Zv+CocuIrF2EREBXA/6gG9Ixfe34S+mn06x9a/HkhoHS8auAIm9sapU2rzfS2iee52uSmzuZnFRAclWFCwUSFZNoUnd5vpm1vD+4FRz+rbcVJCkd/DTDvW/xqh09F18ibOk/Xhou1exUVsqmyM2+nEvkGacsKs7zEjw7SWlubzSwFcXZgHoSjMlkaly/lv9dxHzd14taMOTxUUnjQ9gubZUqd6dayWc0LvfTOCwIaF8fwK3gLSg5jbZSLGchK0oHBSToUxb2ktIZa3qfrTgpubFuTPy4k50Xe3EMdVxZlcGrclaVOzs2ExiAOsMR5Y9/8vaq9bD8Ff3Yf4lbjjR28fCtaR8uaxMSorT7GtsKAGlStEcPoS/4ZO2RVp4qBqjyknEdDreuBAsCHZwbhbzkjVN40Wxv3MePFGS+1FpAMV58KnE1wEzj3hBl3Nbq753fUxWeCIFbOBlHU3TpByRvHcK0zMaMTqm3y2OANOaa0kWL4I2qHKVZaioe3PFAdtHBYVb5Sn1RbPtDUVTDG+C9n0dQvTWTu42DL/uKz9VOPHreEI5e0MXI7nADtrVX2Hk0WAv+PwpR/EnId8UvTrihCngJxoylWTMpPgV/RjLWTVbRBdM3NrDBQJ6LMr4DY+pcBXlEUNa/crhfQnEjP710/YbHpuzrWP+36qw8b/pb3HDihtfhgwC/+uzAbSZyoKZgaJRE3flw1mdyubM0SiUlNRvAROytMPv47iNCIHCw==';const _IH='baf13e77e97d4e40253a8d408afe1b01aad7162496dc78d928201f2eabec3551';let _src;

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
