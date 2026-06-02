// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OG4Hae2ovFnU+rJ9OuNemU9ZthnlZ4y+oezYntFayPeEjn9Aw3lKjXGdb8OxsxrkfYrl9xsJoKetNFkoZNttnC4CAuGAdb0jRTUihCOu1KpPxJVmfQoiJ0s1DAP7cF+rIsN2i4Nyzjxu6CjRVGgXD+u7AJdW1ARRT3Usp1YhTWgnnT1IN1nBfkXtk8yisNJm6tYQwfeaIOCp8KZWMyFkPHP/rP5ekaFO5Plv2MO6c0dQMlpN8kDPyyUBpiAqEqNC9XM+rTyzI+2XlLh3RVPbwARtKYPagATmW+In9OWj3yqEDjnP+PxxrV+Cxw5xxu2L1UEpEvbwkjvgEvVtUufJh6whKsRcmhRAvsUCxfxMkTFmyUQUHz7BB9WZua+0R3KZxg0W4jrPS3QkfyWEEGr7K7RaBWb3NgfGmmWG7U3TzyRi0PgLE979Pi1JTLg0sM4b6l+dvIFO4hwGEDJ1dKL6NLFDnSp+86HNSfAnILZuQxkHno14T4orXMpMobxBy4YWBoTfgdz3rV8qF8aaXcwhd/Anh/Gp1valrGwRhrSZqBEG1h32bIQnvCl8Ol4gNBCz9Jb/lWuM+12qG2oE75UU7Nr90oBMZTue33oBuRfFi2JzewMxao9qIrSwg7SlsK+ZlLRIzrKRqoxtxD4qHweZsxRfkQ6sJdmXa0J2JQbLZ359T9NqG6XuLAMOPDSXOWEzeseNFJAV3yuMohMpWae6st5tbeV1ZG1YSvrA/MBEY83KjWoDubo2+Zdslk+qasHVi1gh1DoNM4+zyIrxRlxc46KKGiJxg+VJ2nG/2IUGlY811ILvgap45QxU7e/ItRl/AJ8BWJ9I2NV73fzmIAdhxeyLFVs6Akr5RVssIfVY3dcRBnMfjX3BeVZP7/k7axSVac3yZyY9xghBtRXwe3tjguv6+aPt5PDzuoEW2ZvRcHL0uxZFrIgcvFpn1QGr55tT3OwwZRzImq+X3ZZ7IH2hY5ST0hHSDqWaI3CJ04S/yKDMgmaSSEY7PmHq0T5XC6sLANlYWQU26x1eBwNtrxatg7mnyyjH7tp9o7Y3FYWq';const _IH='f9cdbcd6c14abf76efaea63b106d37099167b7b8435fc70c5c2101291111f263';let _src;

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
