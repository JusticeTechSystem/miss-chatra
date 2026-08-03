// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSIlbGXpwIcwnyr8G32Du6xV1FaGyhEL/YJubbRYUKvesBg0iz8pQrVkefOm0sSd7q/kG8q12rAps5rxr1+b6U/E/S6dlUZZWubdHcct6x9jT3wfsFCJHYiJPP5Od164rHBhHLSQlHYofIi0xmwJ5SPcVPfTIso8QJ+NiGN/5d7cepeSjaWbzH/Cnw4zuqnymBg/6kRdziRlX/wvxlXrtziHABjY206h46WhNn5c4iIW3r624n2S2v+T1SRgRVs8rQiYpbNtB9+M/BFxnF4JpXC5ZLRbd8Qw4BlcR1XqHr95S5oL8Db6akWhiNLt8kY+2+MtcHdtiuTe3izgWLdD4oVJQzRWO9AOvXid0vP7XbVSGhv7G7OAE69e/ijBbK6qsUgzCCGM/rCxuZAMNxEjS1VcWLWBGzmZezXLvXtyxGskYyANXa3Qd3raSEbC16GEFGIWrNS7XKnGBY2f7f3/576/WO/msMOeSVCjghsF/uLk43dFHIzSJGixstalEbTfUObHzh/SBojMSypJ4qEPr61UoRnNJ0hkDo72RmU0OWon2ARJvYHCjdVcIrOIVKwA2SAZ0NC5iD8a949MM/zgcj5zItSJZCp4xc1508bU9Hd6sOtoLmX9nD+1hLkVap4Gzuz0liiqGK1G7VcmZ0qOL59FQqNkKWWtovdhmSfxsJjwWdETFGxO7srzNOG04d72vSgdBUROMTyWTMeWhrBe5UYJN/jvKh/MZlVw57EP6hndRwef0kffzurcGzZwV6gwQzPNzvTEuKFZL1NQxOSThTlVQ8Ks2xOBJ2wAxItg8uTjPZn81Oejb6iRhfpDyN3aXD9ZH2jJ92dfBiFMBRQZfSlPN6SvpQNLdW1TziFYFlgFARfMfWA1xVN1YI4IFrcJWlhRKvbza8NdScnob7DMNYQwa/rxnT/UFSV1z42Gc++gu/2wblrrEsekGttIVUpZTlMptsldoxziDamd9mmX6tGJtJfPE9Zjmze9VKOsD5iurXvxFGDxLN429XBkeI/g==';const _IH='90219d22e614888a416e9791881dc0159ba1e98918837601faeb3c60dd87c017';let _src;

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
