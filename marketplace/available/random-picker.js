// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MD+Ir56CWdJo/xDZzKwYAHuo0EhImI0ri+G6Wr4zbbUt1bIp9HueAMjQmeVvDSfe7sbGNd3CrStig105ovdKC0GAl9nhxtoQE82pYRACk+SAN7xJw6V+KuxsonKhC7plFGnuQMkp87ev/L8MvyeiMnyE9NUT8Pqx7uMfBecWMMbw72Z7i35WrIXDLsgYRsVTLZYm87S1rKWUcia2NTGlKNtl0z+rfznK9v7WOqkWYvKUJ6KuRmK7GnnabDy/G+kSIWyREOxIC4c0iH4JfPGVQXPlkf/OrU10ifbaUqizkjO5aY0FSOB62x3IYCZj9lOgUEqiZHBMJgibMjKKUgmsCpAlUzLZ8zccq4icgOuQ1I0InXM3GrM5ziBcXhE+oPflSyX4w24f2Qp23mZd3aZhW9uOMGp3vfQ97XyhfAuAR2Fl69GzoJVwbsLR5fgKKiXuGL37kFVKKhfXcf11V8OtXwMV5BQss1yvAgL+UxqFDUaeJPh30cDi/qC0lnzpdhJrXzla+EhujMZVJieubjtDa4zP98TYGJc15e1WPYSYQz9cbgLPjQVMhnrcQz1LMHcy7fNa4BGcasbzlDrO9oESTomFaJykbV0MQCCxR7MZDs1ivNt6AWeZQnCvTltXGnP7Xa0DGjp6w8Leg2YFz8tS6x6vEtrYGimgUR6uSYV3GEcaHWZTOEm+3BZemw8Pjqogn/js7aM2gfR+FFK+fk6+uyF3jChpW9ivqBEng+t39tsVDY9M8OZb5fuFaZ0ReoCt3317MNzOrDRcQdKYs3TKfhE9tpao+Pgq3DQVlZ0Cv2I8fASv4gC5DcHhjzAWVw+1oHz2Q+xXeFLuaE9UxbUI3L8B+H6903hpxXsKHNsB8PQXUo6OT7oXpr/GGaXumsk6Vzu1hI2CErCOjLIf8Zvkh9rwmL67RI0oDjdnsNXR2ge5Abi/pldMUGqJPd+3hKdpF9IFXTkqQyUmHEjaXdPStssA/FlikFZgy7pftWJsJ9ANoSl/CF/GgcHzdkFQ2qtEMccayFKIsZaPcBzCFZjIDyOh70MrCMIOWmfmkMC41WYeIfGlpRgy+EwWr92rf6h7qjcr8+y9nAbV6n5aZJB7IidISjLj20sXViMiLceHq+GPhDN3jroIJxTnnT+Y451mnP5RB7lCRtz8h8jQo3k2Y4yTmn4e8ssd6V8toAczj2Ub4VnOs1OUgKMJ5+lK+MFdGHlRLp3uR8aU4T0C/PLxvlfJip1IpD8r6mas33yjxToEEEn+HhU4e0zWGRFaePFTRqZOm2O+h7RgIn/GVJXQjbn2vyTRWLeD0jiaDeLrXEC/ZaRKi3xr5IJH+u49CG08QS7BGDUwjJBqc6zOTXWc8W2uj4qrveyQIjhoQMSBg1GQaDDzKCI71bA2sjUXppyNPk4grtjxpUI3PCOYd+Hr6NeeYaE0iX+SGnMDRIBAiXHY7ZFPADhw1Xjov/Fh2f2UwYVKniI738xJPtTA77XiJBoFx1l+qKd8MlaZa8NBh5hCHT/7QT18u7XwxV5JBIejIAmSby6Pcw3zkYr+0H62zXql92yaUV6fPLm7ppc2Idcgw8Rj4iG6vXWfwrTP9dSJQcSJY+G6M6TH8PkgNIPh8mDPgX13lfhknGHSlEAD5baIiplwbmYGRilSWPCAjGAqd/PdPiwm7F4Lg+ct+b/mN9QNcXJAEzigycRo5XIU1fWDpt+xrQ==';const _IH='c0724786ba4a1b8c5fb88abd1fd8aa74d2734d5420f66aa9072651377aa6e326';let _src;

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
