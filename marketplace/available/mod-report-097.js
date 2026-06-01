// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz/NuTiGexqb2oWRJvQkhYOqegY/T0RL+fSghnPK1WZEEX1PviANelIf5NUj+2vQIin4MfDX/txXXluzAmtddN7p6L3UZG3DjQFpObd11+1AGzxF93MlzsJr5ymQ8upmmYBBQVWbH4AwXGUeBpDvGe/LrQJstouejb+wb+28S4GZes1ZDiZIDyNcytScpfzbUqGiw00G1hqH+NaO0ZjLiJXi9sQaixOmkG91R5rtc1cjusi11HRMrRL7zoUb3L1kmHa5Vzo/5Qb8avuiWs+Zv2GY0n3J2Bn2ykHjykwORhj3aG9vwW2LFysGjaSVl7xKMIwV1I05fjvqXiJDS1TunMIFkKFhu30ThEcWMWCxtEX1Vg/QZoaHeXH4Eq5RYrySXx0+w6et8NkVG4o3DAU9ffhSZvDEK2od3lVZR9tys4zkLWBpQaFih0gNO1gLgBjeRJNjhgdrsY5A7A2/Evx1kn/nrTMThxVOot+nJNn8xk7ZBCsf2YHNFShwRASNEfAVTD9Cg7g5EUexs6NHWBiQ/IlHDOva2Fa/GQ18sqXm06qnWFOk1zgVlAWkXi8wqv8Q2RwXFheBOl7E865IcSSSbpJlBLmLr97yM98Qym6gTUuao4QmYESIjIBH3puhnmWtEJlrZYlT9ztb4i0wDjHSIKC5wTc0I4wyxfHsQMXhTLXp5ukmcQfTN0hm0lWfvRUxKMeDqbj74p+rLhCebFu0EOLDzCM4chk0eMdciLIq8rT6cIVL9nq+uuJLrFn4+uiHkhVDmfE9AWYxcI1RKmrmDLqTNrmHauRie/wsQ2yvtoIGOIrzkP0VPsojHPXMHoJNrCNja7CF3jMTc4vULySSFeapHwoKryZOOItTHc7oDIwqGgGgt5604mdRdioXn4LkUttjYKaHCLo2h/xwpLMjpnbxo1Dg+jA9JJktMwf9SzUCC5i95w1+XxRXP2Wtzroeik43cSX+Uoz5xE/005wWCMs1Q3ZVvJUerebt5AcoExCHlhCSH9U8bbn5VgepQRyWvK1mySnEHrknNzOdpKlQeAiOZr6lYzozDGp2GpfEKtPoGJo8JBRWNEHV2eSxQa0lQndc06aipSwB1AvKAuJl48WRKYvZy4NG6HSHODq/klgcaBisLMKX79yD/L7b+3vILSGPuOustxPtVb6CA0PjWG/p9OtDA3yw6pVARXw8Det07Q27hNEqIlltbWUdbEIT0vDeCMRmDAN0Y4Ac0dw0/Gsn/I2k9LMxGdAvJc5uo1ZCECZHDG5TjjP0dbr6uvEExiUS2Y9W34JFV9d9J0BI/PJoDGI/VF9yWoNcE/stxGnPZMCtoH+yfxVDdV0yRVkyOaCX2NBd+7miOOspZ2c+Q5btlVLpDQzqDnBL92sDdf5D2zNT';const _IH='ad4997a78bef070019b644deb5335afb1e4615b1debd2aaaeae2705a413476cf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
