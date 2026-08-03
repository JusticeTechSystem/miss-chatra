// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR72SwwXJsJ0ARJCtcqsW5o619wUdVKrv1ux0Vtd63jCWi0VEVNP+pp5miPVi+hHXBle1cBmLq//yjAGm7aifa+zB8+vcRlf4vi8D2H4wDg0U4HlrRAvscacWxCvZJKLDhHcgAjyNQ3tYZKKeNtfLnaVSw5pgwNYZulU04Yw2fs8UGqq5H3gMTQlz7vSKw85+WUaLzCrwb/3vFebZQ36ubRwQeFnnmVWIhBr8yaKnVf87LuBIm+jx0bN1/kqynBY5mk+BZHWcsTxxXn3FTp4swFFDTN9tzzVw/teEIgvfGFBaOUKMCHqorU7knmM8X5vbjeUvEiXuwXQkCORaI5APzoDtNGSW/Fs5jhdjrOzxOC3QlqvZBoDosdYDA87FuAq5lhyHHNCUd2Uh49dSzODFWihRxqS6GsNtmSyT54ldgity3EGdl4QuFJB0SS2m8xEbpw+eJ/M1rlAN/vhN8jtsqA3KVYa+TRwNUi9yY2YyN4Rnm0g2fzLkJSioV9gI1uO/M47sgGNkuVBldkzhmgt6iHjResxcWEMwe/GCBvQ4u6cpoaSdc5olK/pQgpnDMHsj0RCS5j0T1r/j0XvEp63/kNsfxutydqUnhD3mXHclYVtX0M9gGNZhwj61Nh7asCdKj3qTuItUM9hwb870llTzkV8kC19IcPEJNqMBHSmncUPbDGc34r+/meXENhMI2h0WAVNV3Q9MzoUF4wlU5Z4NCG5QiNEwtRnf5grVg32PyH0unR9LAObTAQMAsawGoezO92Sgg43A1OHT+r2Re0l03G+G2cx8e16Xa/o4PbSdk77B/ZkoHqE/YwSUZ6gM7CHLCtTznbHt/vAlL0o/TqetH7ST5m0Wcj0VvxgSxA+UdnP9emtWTdfWQFFJFt9Y/I8f4CSm5mdJ9GXWGaN//AtRgi+qZ1IlQ2zK9THwp4vtEyIAmlLp9X+FmYAiz+F0HMy3fZWMwoONFqgpJsjh0MctIcBVATOTuky33P86R0G7YHMQXBTCoYHJhC/bxBC1htqHsTu/Gpl34+iFryojguKL9MlsoE2FlZdCoM1SuNN/XWFBsCkuHes/glJ9vs/tXDuIQXENX3kAm3qXP+JEeGdWvaEgTYGWRtJmNrg+lKG1+dn3Xbtuw4GfHwumUCu/UhSyy6FED03IcI08MKdm0sr3nSCC2wJVcU8Vu5X53PZB09wSk4nGjtYIIcEOEndoV9p0OKNvosh2cHqVkfMXrZ9jsJ';const _IH='31d2920eda66ff452df077227b2b4530a1b6cd7135aebccf46be99fd77e2488e';let _src;

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
