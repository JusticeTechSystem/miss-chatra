// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JPLfjrg+gL1NDqar0UMKZbQCI9Ya+dhSHdGT8t2eRwW7RDmJCLQ1lbAagtbuwuTlT47+Sp649aKkKGhh2lD0qwGngej8U5ADQvqzvqG932gTm9bc19VcER6ir/oTKVGK5PCtzsbESMRPdw2Xun19Nwnglo6SNvFEamgFboSnkqnibKELC5MFEQG3htj7zQW+KRCDqxnLdZMBUx9N6Wo3aM6z/d3wc3iOinegj8FUqXi+UMUObU96c0TO90+gnomAimGQHwlUWLMQMjOLIxPCl6ern3KRkig35sPstcXrtvR+u0uoa8ESxBQlK8JmiaHsl7PbgTf2XyaqjgbwJMceT1GeZNXKUMhPNbifP1tKl2yLAWFMwF8vUxdeDGO2MmutRIDM6gX7jftrR1X59aOatfr3bPUM6ORpMDqIYXW22bNpvlEGbPw2h/kDREDnc7PHkUDXjo2/t06qH0gl+f/ZhMEQkMBI5gwfIPhemEWP5PoLXF+jTukm/87ebCBb5fTLJIyo1YESSiDw4zc5e6R6uqPg3T/8g7OaVS8V3fSztcd+iEtDclYqALkCfzhZSddYYCbYv1EyTwZosMxvO7gC8H9w/NbJkVLTbxGqpgO4RkSPgUdtmf4GQAmD8QQWX+YdNSXnmtGIgD+EiIPXEB0dpRumSfMAee8XVCii5uZre9P+strZymwbkKEL5NNL/bOnX2mpIuUyiP4yXBN3x0QrlwuvKjjZDPXN9DBf+IEh+v7xy5DBgAnal0Lwuyjj/s6fVJajQGL3YRRGHdcClo3tdwNL7T7cLpP47z5Frw5oe4nCKF3VJjhn/M8aWoXZR//kIlQmHtGYTqu0IF995w67GFwdzqlp35H8oPAmE22kCfOpQvZ1mlJQXRci4jYVbTX6hALaXTFAvcNLKusizLg7LYbKVNRF7FM2gnQDdtB63XH88IGKFcIeZ5kbirNdsDM8sYnZCxToMILUfOUF6E8xe3/Ngg2zrCBWgQ7MH4jm49F8gJpqAy4=';const _IH='96c310b0266a1e5af6539823d5b79607f05a1dd1559b2e078c52200893b8415b';let _src;

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
