// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8tCeHWLcEDmjDYT07KI2BsW1lXYFmmDynYTiLZWEHbwKbaWbGslyv8RHz1IggF88niSjLLV6gWJLhmlVrgA/xB2ma3FEozwyIgL7YF/ILyKy07rW2Yt4TbXzoi1/cD/gw8IuBbBsJJndqTkYGe0FTajCU9yQdQcwAM/eU8Z1tTGhOedYejKXHKOFDqhx3CTXmcjhfb9MA+oSkZmntBkG2TRtSA/mp/T/xi7FD/UwnenCeu5IQO0U2kt+gOB9+Pr9gBMqfR1OjSBVEJKaUD6u7qVp8SEFl+2xklIpnQi++3d8vfOoNrlHU4F2Xhld2JTyxbz77bHvGjnpaYie9E1XbSlRdmZDqq7ukuI1YrBm4yZQ/YaVRvBvMZA6TPqoRHz7EgYMua7IyH8+wI09Enk6cEJypXp/RPXUwRvDR3OisWhqbMZdfaywXj4VcDvpbc95i89IrnK5GH/eHBVNgsKobNoNixwzSoPnC4eHliN+cfIx+53HfQWy3M+07DlMK4p1FDaZnn/uqSVAyDhjzu3urATe2s4hh087yorg4xFWq2Zu3ugkRSfLkh+uIXCGbS2xmi5diaX12BLWanGYxRV5TExdqSEHiHH4+hiOnxNBs/+w4ykzKz0xLSg1OzQ1GGsQ50pZtMkCQ934JF5Ev2UQWb3Ry8++rbskmy4MyCXzimEhr8RNtsGuhKc9Y+9HvMbPJxDvtyAIx53rY//l03vPNtXLiB6RxSuCM09LCKvzdVT+q4yRmmy+8/FD+ctUTX5s98+WLYv6jV79JXiXyaB8kZhuLm9x5/DtPI34x5fOzLdx268+vpquQ/2CutDFZesgvwoQCLyRJL+HQDZb3v/NAcFA2qLoBtdSR26wJdSSDWjOlvH+WHnphBvLna0WAViVJXNAeWWZWvGpEPIxmSdnxVu1fMGzHIxVqz0+WPjg7rznlADwaKQsxRv9x7Szh6xkpUJyOhrshVroqHK752UTmfu4qKAF8/SR';const _IH='2bfc691877a9af182b730583ec244ec4bf3c690d9a2391fc1e6f4a9dace5e2e8';let _src;

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
