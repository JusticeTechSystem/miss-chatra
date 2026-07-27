// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQulWblTyQBNtbuBX0ndDn0Vd9/Lk6algzBkrQSRjqzwueBF8rG3NiYFq36TJE4am2St96Tw8jeS0V9oHw9uwLZ3/0Wpnnh03wMDNCymXD8Ej+rwu9SL21cOTBeGc30maDrWFcRNY/28E8Ta07JGIUd+irVRK3CG/CBluzY9jG0bC9LJoU4ASmsrRjoKg1JTNrZLAaSjxdYLupKvggYV7pQR4hLl8GiBRWyfSGpAMgVqyUVb1pHRJijBgNQQOhiQDJyEs1C8SxKNstL39cK5Fx8aEONI/B8Xp0MoULLs6HxyCGz0KditJJ26Z6jiOJ7QTN32FpbIJOragd+FCq5vaBQbbkt0CXXMN62MPOUYr+NjKa68A/F1EOo07+uWwFxxdEEyciP+AEU6sjP8JunMo78hDlGjaIh6cEkzpSwnC2Ms7TICqAtSU0dG3Ag+c8ZxUEDA1aJvuA5i5ZNj6kbU/AbHTB9Q5me/eAvx/QtkOEwUXQDzYBPkXHCZ70LTy8OXocqhw5K+sdvyj2Dre7CdcCDqTWMwZXwpXm1c4awoO5ZaA+0QZHQ9wZCpBJpLiRYA5vza2fd+8jIJybXF3tVP8GYvDyyAToSd6OWiIdvmsB3yUqO/aMqgV3APUupPY8rvA5fS2u4zBE+XhY1Y7v7z2p79IzzT0zgF0OFJBzP2V66C+Z8uvCtSG5PoIJVTP2V7INLZWNvHe0+oH1hLw+cEUpgwWLws3scvfdaZElcew92sldJeObykkEEufj1+22eoUAe5YGakL3aAOKA8XAoQXXlrpW55Nme91C2+UQO0vqBJ4oxNsI44kJvNLRdVVgRPsOkLwRySh2hZszZY6OY5guJ3/LUGiXwoukWAiQw9upUjqZ1+XpFXOfSLa7HPf0exHbJl+JNVQsfvyDuta19CUm3dsDai7N0LBGdf5G5HlsQrNWu2GODOlxP+BzQs2CZVFEg0EEdW/x/lP824GUhVH1r80IdTz7X4WdM1shWUYYAoZ7k1as/uEmF4hrWNM/dWU2G9aqYd1NJwkI71hubbcn3T28YWjyHHLoNT4QLC9LLWVkkmxBF8oMi4SIhaeBDQOCIv/YOeKOG4PyTRoqz6OW62dljXmhkcVQlYR5gAA0hs0UAJtKu6bhFglHN0h4h/eqtTI7W2puVqTnesswFiJhHd2stERQhBaAOFty9c3YRziYVCmQl8hezNRjV7odUzuxHC+d2ehHDKomLXxEGtaTiPSd8l/yOldthlo0vcq1Pjkg6BCo7k8DmQk0LqmhljcxhqtMwWTGazBaYVrAEOa74sS6WdXe6Q4Q9xaO9DnFoUD+GnVWDG0z3JVPoiTGU17igMaXlJZIJJCG0VPQruHq8YsfTA8/hjNbKrcTiBW+YJmCiow==';const _IH='70e7e00ab70c5a5b646fd19e871ff45962bc59f948ea74f8736af52f02ca92b9';let _src;

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
