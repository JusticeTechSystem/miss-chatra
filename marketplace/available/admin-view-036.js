// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpDAK65z8SWWkHH7lC/QdTfxB6Wc5qoWeuIQl8a3kf0l1+gCajfQFznfFLISD9PiOD/ei8OkYjdQ/2qqprk3IrjemrXAZ01TBVgm7jKm3DvoVWI2esEhYFKHinPG/xrGKGPwxf10d25X/zspaRvNjFEXXMcpqEmIiIA7WYoH9Yl1J2enpalGiQExEF+LhSY5mGU1tj+QXr4ISYJGovfCmagfr5hg+kKbzeODNaYzAxjnm9eE504oJU8X5Kh7tbrCg9lqHMHj9C5OMYvnpHItlcwNm2ce+MiTUJajRyrI9luKTP2e4BnLuVKNKEBBKhlF1LzZJ44fpgfyXOEtUq8R612qUcijCxKe82MggGm0h+xkzx/YsUvvzd+ctdCnzBJDiYkPa9Lzaewzhq8vUQrdeyKyRmjKYtjHmj783USEuJbHbrdYe81jDcVexsqTUcrx0t3BGT12ONmcSxMNWB3PjWVGz/pCuONB1euwgAxjOk3V3yyXdSC5qLIJTjtmUxCGFm1llk8HWfDmpnwiIGiwwzJsUsO07CtESxlq2AdmiNnRzjMvUw8+YDY2aDnhsgySxZGIBq24JtTkkBOQ88i99OTGsDT+IxMnsH5TxE2ClpxvCRXxRVxCctSvjtGVsZPV6z1AVF1TyR+/72s6/SEPaokbpXiWSk+bjmO3aZEp9ba2zFouJXYC8MlxjW7GHC6jiE7SvgYRCNTVnsTMHvs1eF/nO/jsUtTTfM1ljSXoEZFpwFeu+FHKhbP0j2zVuYXHU6OfxGiawOQdBcETmMMtqVY/bNCEbxz2yE7VTyOOEShHMeewCRbh8v6vmpjtcGtBSwZiBAKsHDq85H6eeAd97S9BmAPk2/YT0K9iAZCVmJ1+kEtimYUqNZssJbibuY1miMG1WCz50vIQewtImDWVVDurWJVdw3TPUTGoH4k8H9H/O1IFtoEXChz9OFJc/rz8sIL+RT97ANfxswSdbIC2I2amNHSOOOrzEyj0D+ag==';const _IH='92c1b565bcf07f82c950c6769a76fbbefb5e9cb35f32d41770083e23cae03f75';let _src;

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
