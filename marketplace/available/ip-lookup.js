// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXompCF0kQx+22409SYHMOrt6NFkzOEgbWSiIhVgQpi8/xOyRQU4yCuU+zzecEz08D6+78u8IseYEcBz5Som+WGUqy7Utg5lczzfVw2lsc/gZ1z3MGS2fFH1lMiXPckiyUHS9P17LCZz2YoMJg3y8ApL4Px6Bv1mm2FXIpUtDNfM342+DdQArjNSLCQRD/f/VMvwfwizxHyPoKh9H3gXEjR0fEDNLVpXDFI4LSI+QS1tKuu2ygbbhXbVb+DtAANo2Wm+ijXG7CZ7Pdb9hMYhujBqLyHglMzns78s+6n4osl5h9T25AvOb98W2Qia0VQkmBHkZnGfh0/LYqIzsbCxFAt+8GpZE34sKzgSUTRvZvNshOTKq99NbM9Tm5pGegsqCsz+Ijen4LqSfgkgm5WxVVv3VfX6blcBiW///L0gYV2jGPkx878C+KPlnirW0WIRQqgzbADF98zedAZ5yE90yx4Q/g4It6Wva2Wy6w8Buwt/0UlcDwXdoJ2WBEmvhhqCUHcn9Vn/6fLfcClBIPKjKirssFgBbc+L/t/qk4y5fU/rwcwqeKb2IDIv90Moym1KdbBS6PuXD+pf6MCItVFA7zziPK5I35TE480kbGnf1L+WmxUx1tUMXf+JRPrGJj4sE1wMx76CNX76hLSMS5WrINk2DDjI/95NhTTLiZzMSGsEH4UxGDVLNbsWJDyhXEwn5TUZXCCfrY144FxufslZUrjR0tJ+fEwLG+ExdekiZXIS6ZQa3wEUIBpA9WX75XN6UdaTcM0TwLJr+y+D3aFA4HMRbMFsOSs66fkOrBBIbxk4w4yi7MRu0kLA7XKdenmVdVV8GLSrMcC6ONfiERV04P9pKi9Z/atwREj04Yh/9CZI6HAsYoCPmsUo5MiIW+m1AYFC/lLzYHogN6+5C1HI19T8fnaz+xsg2ImgzH76hUClANiSwTyvOe06ErdciSAdl2oYwpUiVY3iS+4wAr6xJ6czYDcUt0xtzCCN+a8NcRTM9fnUGoTTkxDIK/0S6sH0kYYObhwKi1MKRnLcsbMPzvctFoP7/jlEeA4b0TQW05DjsicZyfspiB3TCTjZf+r13+Cnr0dwLMsBL+qNW4U8lmIbIXarxGiPBzzOpckBKk5GBzkRroRX0XWfLyxhG8fZlwms3mAvIY2pjiO+vogAEmjuB+ZA32uQZsW199lHZ/puraCZrsuNzA3Up4EvfyVk0QRziyJxZ1Dhg8FLWKqb+ZCp2mbjldMVurpUukbHEEGOlCrT8hU7oNucNv9xR7NRWv';const _IH='20d773ede4621608d76c62ac9d73239bffd215a3fc99bb85a695c4d86899d5cf';let _src;

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
