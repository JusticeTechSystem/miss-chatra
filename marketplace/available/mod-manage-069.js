// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQx7kS/0tmqzanOTfB9fAln2X3UF//A99Ny4k+FFlr13c96N/4aDiKfuFLYaxhrfHmRTAJchnH9yX635xSa8C4lKsb/q0g9FI47qg3fOmpk4z0LkCAhRrKqewJEhc1neNJSgZXdEBkCIKstxmCAPcXLv9b6eH9Z8h3Fv45C8AE35OjQ9F0vQDSpaSPnyA0tb/VEgaThriZC0I8w2WQYoMEclHANPvk1XEvg5O0YRVGQmSTsI309+sQmuse6+7bbwkpZivzRf9mIE72dY9C328icB1DbLsD9Zg/IqO62O6Aj+uMwdjYjaRPFYe6faWGazTE+LS08CTDNjNHI+sFyTGiiAzBLHwR7PQfbycv9ta3ir5r4ORagUIbPOGGgIcG7lJ43PFFR5HS4MurK25lIZWpW3tIbOApatboyqTM1abvR77qA7IPibne10ayNmE3fEu2Sw+gjAu4cmRyG98JvVDcD4mIfnhAcJXuGHs3pTvTC15M/1ta+kSiT17ToHh4um/EDthN2Kbs8fGB6ii7h7iqCJuiOAAKO6I8AUN8O2ebXalWnheR74GLCXitjOIGxsK0T0UypWdK7/pjdtbzII0zTAeeJa79VZtskyuLs+QCnQEf0XHx/385cQ8kVzu7vorIylpkZ4DBvEa6UZInaLZ4uixiLovfY2ntn8DFgcVPBZX3SUaDguJF1fsub7aFYPjEToLOw7oNHQsmRsdFp5v/eBu1SotV9mV+kKguqYRM44g/ET+sE4L7V6G56lD2XTMnEv1usgGPS8IdAqdTcDORGvQvBX0jXeD4WApm/lbKPrOaRNtOyRPYl3JFz0VVhKcdbuhYESOhviOKrG2B1OTuABTAmgfXDfkveJIDSuIOEyCXKsQgAANOsvs99rMGpAvfQVTUnEkWSx/e0T4cbGicXOJ/5hR8nR2lAMjdacWaxf4uHP3HgmeSZ09jnaLVUkzhb40jgvu6THoj9dntvqdqHkY0EorfSYAHUPi+a1UaqV8FEfS0bUjx0/XWJOrJNiemxrOt82pefpXp3WelcTJGlu6UtDDBu1hm0NCn8b3IQVRiNK0zhtPmLesvGcu4Kcuxm5I8Cp5eOkpfPLqTF08TFh943OYwf17HE7r4lixtjBnZZcEcH6c7RuHK5VoUHAyf885vJO8GnZYUH0ehOm6Ffw8eGEY64DO4wBoPxn+A36rXjasaAG2zLkuwe6tbdrPOh5gv6hrRSHvCLFeQX5kn1/Z+/H43MIbHllYm71ExzzVa/GwcF5g69Cx2k4U8we3Itv7QZdsJJl+4AhIneGLg4sUtCcbAMUQ1CsfUzfX93hDk68vTSHM6wjo5a0Yk1VZeGTYa3/EKTyh01cXD9IpRPwjMSjUQb2FE85U0rIQUlJZnBBg==';const _IH='2d80fe1d7eae229dc874b83a628e92cd80f3cc063e8e84b3addc27fe6c8ff482';let _src;

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
