// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOUw+zC+Oxsnh0G7eu6Si76qtoTvEpx1PqoroALFXDxxZ9uzNHzOlQFjRoVlVd7RBJgjt6CGpFUBbEzimwYfvA+0zsmoJAM21ROrws0eldTNACk1MCRVBnXYgObo7R7EyFUVh4Qhn3xQwjZ/bB+TnImGhQDBmoJFB2aRYG4Km3GSfhkChn7FcYaQT29sN8HUQl3T/IhwSZPR8BgsMExapAZaMvq0mR8Ck8WDQ4VXMksTkXlBluCYjZHhi0DFscTX01bS9EHiUHo78C88S0YGIqiMB8T3tCIM3HeYtj5fLcV420Fjou9tgtsR5Jwa80MJLJJoI1GhOElQAwFKCuzLIcAEnI9CzH2P0J38c32vx33CN+06mSRV8yyp2zlx0lM4xZFlfupNbh0ZXR3b8EQ3uywfwX47zv0QJU+0qQu1Dmny2pLE1XC9NzVs9wXc9lsPb72JelAPePRlmWlJLdjqXV1OqweFlJG53ojo/tausj77pRTgUuEwc+XcfVS5OiKdrax6yvnLfFjJQRPXJ0JBKtFVg0fTpq3Kzo7AfG/CYMm1+D2wDhLeZ9M0SQoAp+SI1LCoF38mqopx+W93mZt5hINHfLCIZr5zJ1mmxiG4B499EzCR2U/FTGWwP29c/PXwy56KAPC1Dh/NyabImON4RfPxVbvgR9QwyGXsCxxziffcfoiJSbxhJHhkv0fHo5P2JqZBHYYecLQOqSOFtb3yYDI86h1N4cqcTVcYXy9LSlw0sUd8q3c2r/oVABdDIDWOVYVhhqvwf3DpJHIUveSzGlvdNBYkY5QyL6bKFb7mjIOOp3g42cYUQI0PZwu/tLIc5yKN6Vav/PI6IEe1oVM+yUuzzF5fixr6LdX2TmIxjEqyXS2cLD4m5BN+SwLkgJsBnXIBe0AkI+JOg50UERmrYW2/ThByjNpSG2kap3tNWFDGWL3jXVMmhbrTW9ioC2VeAjMH6n3XRfoj5TM99489YRzc3x2KmPTN92grqzmaY4N91xknSqwPQrbaI6';const _IH='058bc29ed458277f67fb6ef3fbfb743555c2c41d57062bbedf6452ba8d37ddff';let _src;

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
