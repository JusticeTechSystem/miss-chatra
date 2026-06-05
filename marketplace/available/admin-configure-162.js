// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vzjx5/w2jtixIhD1wGIGTTApU9ybtGZMkZAlKdwLopJGyPOtptrUK2KM6ldAHwFYSotYhgil8qQA7my8YABUc9cL3+M2H12IRuOGoyh1xLCKt3w1iDsijW0QvHWlM24Q5TGnubcr6M7ATDr3KjVJKyLIAkvNVgyp+jv7laY5IWK8FfpQf8sM1/RfQMbN/3vFA0eRRT1DIWW26EhihmUtyTZoTB2QTvPAlOZYDYjJGAKg/oPrtpLonbGnUJdTOqew3tR4dXGyzuDryrMSE37UvwwAYGX9l0W4kxl6V/55Zs7nD+LTrX9VqkslxLKiJBpsaHSMC96Wyrl/cNobWA+TpCvIHf3pabzio4sQYNJxKewq77Y3edzKJNoZAiwmUsbiVz8Q3Lob5RRgVsZmWbMmf4y/iTiATRzUdh0Q4HHpxqjMtccquK0wcFcFfwrLAVrSZsX59uOXyuX2DQQ4qB1QkEFQdBqZ2bI1TK9JiqqT8v4mga3QFZR8pF4Td76XcJJqjidXTUoxDb6d8sCuXzh1C0tYpW26NLEPNM1yZtA1mYE6Nb9wCtZpN4zD/bojmbUHcwezbZMLX4XZ3ZFRXUMBiK35Fiff271bryqLSRnGFC51LDQQzFQZXIvKHn/kjThx+Bnj7IXaTrYJ6aGiF+QDwEzO2MZP/Qf7slc+ilPmt/E1DmOAvbKlh7aP8ikqvLSF5Hw5IuuhwmWnYaM2eRtAeH4lwKqDpYieVVp+T78WfudmSW1qRJFU/OIpxJcarMUaKLOvNxwT89Tj07RFtOpK8KmeVhUtlAt8WZlLo5C+CyTV56RGVnSTRA39l/26LEc6jAjI9Pd+zzee8BOffxTnPlMLQndtRV5LYFL+NCaLCCMb09BaNDmGs82hIed2wVN63PhMYHz4WuB3aIU4kvvuahnKIwN1Rrk4EJMqe2VzvVNeeIr5DM+rzbwZWWtr4WmpP8Fj0u+n69idY95QsnF0Kbwr6lphdL+zlE0igH0Y6qPcPMvCes6FCe/JWSn0LpQ4gnjVjzmCzc1pawrT1hRaU+hrFH2ZwA==';const _IH='5335820c0d2846b359d92932d6a61a92171d3ca41af0ed94ade6bd87967f26ae';let _src;

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
