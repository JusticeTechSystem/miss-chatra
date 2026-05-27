// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FKiPXp1UAI/+I+U0nyJzr7/bB602NYtQFICSOvPVTpZ5vKljgyYgUmLeMHQQ5eGdcmHZF0U8/LGkpt1c1mE23Lp3ag7eQWu8sQapTEjztiy0UIIYzvExbvqBUdkiDdbcuq9nftvUDnDayWnEhDXkZAmOu+VDgz0Ol6N0hxRyIVfTAdJsEjNter249hfKqSjY5Ac1ZFVHrw7RDZ/3NZrPHdX5ZS26peaba93Eq4pUPl982KD3zyzeqPk5E8g5ROYAHbpdIm8rTo4g9kzxMTd6EwK3TzxAeDq+NQ12QQxReDrkYzrVYpseNvaxW2w8IWQ5oageqKT7kv2RTEL4RI/NcyrNC7+D2AlWnCmiOF2FHNcIDOPOIM8N0u3wKNtyUb5PRLVB9XGtsAh2f362jve9quYeGXQDg9HeP8FxTp3cjoYsXzU7+ZvCw6vaEHieUita1vODDFekotA0CciPoGf0eoWWc2iwiuLW/FmGcVVXBQGj5lHMmyWp9ixO2jY0dfsj6LMZjYX7Bq1hjMLDc6ZkB2nknQ8qxFa8On4ljqLKLI7F2AeznXPiinyTtleZvOD0HWEOJFNsRgWSrjg7FzxCpOdFfGvZQf9exzOFW1VrxU7aNBz4ICrEZnEOoA57pV+sseRAA+PUCtQGL7wFaHM+O/RVhcnX8W5cuIedrCN+bl/fJGB8VoAcY0YUPoiPM9QHU396mQF8yc2fh2TPzeGV06FqIL1dCHVoO/eqMWwVk9fPwb8MxCdCrgRrzq9J9VnARDDajHmi8tyUBiCqN6w+vibnRDdF08b+8wiq8xi3iGcbtTyQWI3AM8N1PUxuWytoi3L4/Eg+skkDzWLL97OESz+Al9n+z2q08IkHxXPKetXkyqs4njWVw5kUzQV30a+72BmDwoxBpwp+3gWBTlDW6Zv8Y7Hix8sAjI+PHDoo6kjzCbrRaksxuyj0gNfY6RdOMACqnsCNWXQZnU4rLde9ltFxMZ7Zbg9V8tW7vzGX9AU0VQWvvecI/5BgK4Q/pDKOIvWVkmZhx6XaBNbhs5o5a9cNneBM4vYfInnsRnseAX+8yV1AkUlRsK/My94RfNy+r+xDofJCCHGHx2lkRcMabS29QaL7/jA79Ue1TC9QjyYieEui9w/KN5/aivlU3p0xIpZ3u8eUVeWbofpNneB/GarZdjrlyaR8HfyF/7eL+PsUDs/LvP2xoo4SaUlEDATdz2Lr1jiQVGfhPvrQB/mTvu6qgHsamxX6pIFb1tbdbYb1fdQs1tZSDImXwlwhmxetxFB6V9MV6ftGrfVGSavS38t642Zv9xPsFNdmVURzzycL5mXFZgkkea7BLgZA+if9+pgjsTqL4Fq1TN8ZWhSMKo+7HkknNi8klESiw93zlBL3UpJWY8AG8iN85rKLWGm1Wjv30vfmsnmCvq+uMcKwd3mMAplF0Sx5abQVLnm3317CxELXYfMxZQ==';const _IH='8f850a1697c32bf9f170eeedb9e640e2d7a35746a6fd7824f520c3e8715861db';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
