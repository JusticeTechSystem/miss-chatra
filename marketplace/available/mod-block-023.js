// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbp1zEgmfag+awrpZvX5UR80CoAiD3GrQfjfGFPL/HXHVavk3nKcn0VrLSHQqkS0gItbXrnoHnpoZx6Elxu+mw1/iMblUIrJoet4tMBANCyhE4eiTi1j1XFYAgnbJbVn/dnd6W1v9crEuOTcSeWP9AY92eWJBylDAuix+u49GIUzXVRCtXDn5dkjWX7+RSMs8IDM/1FGfL2ksWdJ+ZvrQFe1MUaWShSvPx2yi3Z2QZnnsEhcc3LGz7WwpO7Lp8asSx9XQ0gsnbeP+3zR0/xtDlgFE8qZoZRLldMTBjxeNwbbRAV46wfVhnbyeCWfORYBCne/94m1jtQ0L4ndrVm6Wz2UmsO2ylcI7ZG4Er+V79uQ+H5AhxM6jIa3DxN0o/C+oPOaWBXgTQ4/VNRbYfL+lHOlDbtgSztxJLflmpLVq1FVmKltJNxRZ5xRX6cgfSZc3llT6RQhXy010Zh1OROEIURjJEoJ5PzEofOywh+46BAPwr/0oW75NRikME1g3dZLjGtRZq59Xi/DZAEp+5mPNtnmsHOJBEkyzLlig8wPYywTLBwzUMf5OlpDKXBkFzU6csocY4IuIoAK2toAhgS/YK0+F38c/tpV/aX5+hqmSuEThkkSFv96BqCArKQlVgixWMvXKnSCYRLUAjTf/x85u56gv9ejU62qHXaWrRVnlVUjYA5YEi/VY+Liv1v/EfqkALhIcUvWtYtoP3qpzffUZJEFP2CTKlVLPcAw408IOrJGG0F9dF1wNsc8+XAzKNH8vQGiF9ScLf0tl3eApG6xBCq28elXxWqwegdBIIozd5O36YJN2M1HMknATPzKm+w4JIXHo7LWlENosq9MidYFwIF1Yaq8YqYG2K6TTlnHZ5AVzR7tXlyz226KirIlW2q00R2d5RtITNyk6V7VBVnkRg5PDIipUvTWo7cmOBqwWfhnMzUv2Spdp5yG7p1N7eWm3iuFDRpro2Hv+2KcRds6BL6w2QlXolPHj6tAfUEVa2HCXtdhtdaWW0sdt5v916vdl6JIvj23RDNIibNX2c4TrXBynhBk/29fW8NlK5XWyjQVxnyGoxPoqcvwdv2kxuSpsXfdDfV1WpH4gJ/7zwN/cOiQmSUryTtfnaCokOzqDCeFHVgH5RLADzGmILPG2wDqzkfH3Hxf7AHY/Aq4F57zhcq+2ORre9dn0hHbeKZ/HzBr9cND0NgARDN2DDENLtRcZXbYGOISG4fHEBmgLvapE9vSdXE2W+TAyaKP+4dUSV+b2/agYhpHQliCFVUNBXeYjzn+T5crG8jRsNvwRBsFP2A2USEj7xjEG0fg7vN86GxinaUeBSx/O4eEz9f9CQYJfd0PqP1SkRr7pmQk5kvtsWKuAjY2xP8BT8';const _IH='4ec21c53894999224f66e9464e69a6ff593c69e74f7bf71711cd28746789efd2';let _src;

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
