// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYuUo5kbl80APDBFg/CF1VT7a6VLDJF4w0Edsyb4GWbZW5SalchbPbhhuLeKTWiHQwccuu2g9ObjYuk07VccDB5D4pOIBkSct8TCqsBHzoeH4ITzCeNJPoT6uRthFPYLYj7F+Hkw1CvC2WepDm6/RaCJcRtnrm92kzhNZv6bCcepndluiIH6TvA/ePCkJCag1dkI4DJlIcmIjWzdJL863S7GXmUKHw1D1J+L0Chg/d6I5dhw6DTWmfAgVzvPkgwN3fa4Z/WK9UlZVv2bsBFTsy64Sfs2dZXpt/lXUgXNi5mdZRm+zeFS6WyIaKsXees8s2eEyXcV6Y8j04ONaBnGvT4gEuQIEJeDZ8fu16vWf/hZOCB934In9xQfFZEBKoiSmTPLu9ftgv+3LTzzxMehD22ArC8/vFCliPwVozf7nLdxW+j+A4mujSgjaIU7Y1/4iwnwc708dAASDKdPIenwPGIpSGCSTNEoJcGjQj/+Sx7wBxBiTiNz8scOa5qjhU93BKoOuKeyjM0jDB7QNsAyTHQFO6QvBAZnfdJpMD0TG2rIpz12T+WhwDO/4MJ/WqxdJu6JoteZfw4xcNdH+nZofjaAiNHGem7+z0gi7xAK6muXIqBhDefua80b/I/24Qf3x+c6LcO+BoAJX9x8ANoMNTUmSl5FnADT1Yr/dBmCQ21noMWQZ2Q6RI8WIM1OPy+fyi/2otUizVOp9pb1dgQYtzN5OWcp5aflr1sO0CkqwMkaWDXOGa/5kHjXypiS5tG4zTiGuCMLu/RT+4hoZMzfi8W8KOx43KLNHPT7PrT5Nq8gjDSkp367WqjgoTGSa3i3W0b2pGYNKwCHqxpa0bPd3sat0G0i3HraD4uf7rfuZE4WsVMyzNB7BEX2Z7lTJGqsk9ffz6zNnix8BgnP/yCtSHVFOPU9jzC4ompj0JKlMueTkZlCkiknm+aBUYmT78OYmALTDgrr3BzoPrBluEla3s75aIxaYQU7xQhmJ7E2SvlB8ztYVhrNhMDusYWK0/gkOqHneuwHnJPvsKTO2jNOe4N70nrpze31YxnJ5JLVigcjrNMYynaDakNuTtP6a14JKkO40Gb5oaWj5O5CKZjRPTt8d2faKk0ZElMoKoq5F4JD7vI4qp/KxRwfRbAZRtJBZOZWHu8XCThmHIbWEi8xMwKsUMK3dznreFGr3ZpKeW3QWT1PkfQiRXRkVa36c/Cjib9ySU+sxIawnsvXWn7o/rAwj828zEI3KjDg3TLQsFRP8eFwIxDXCyxP0MeCrU348RJ5PnDtr4LsF/iJXiCiHS1VGetWCMGY3bbzTEMpTYqSG+RVGN7uWI9AJxgVPE2+QMhui4kRlLCX/X+ukdrEIzeivQ9pPgluQ+CLtWBRs=';const _IH='815977d8318ac2c9bfde57e9647e7d4478932f7286bfbeba56edda4456d78427';let _src;

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
