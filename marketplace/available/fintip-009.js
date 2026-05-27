// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7CfG00a49mi1S49hWY+P6MgwlspGMU8ZT4J/NaxasrcasrSjEw6Vv8NanItbOoxrMmFNdCruZ8y6+zN1TiKNSze8F3da2V1dCoNNd1CNVHWaiibvQWrGNDZDkS16buwpzuUPaif3IlRdsw+GVMyXwUZCjIP8xP3HH42PDn8eSfpf4o4NhL5yudNTSHfAFU8ZMY0gCda9I5tm/r0Frnktxv0LUWxwuwUzLN2GTbsssA/u9kttfrcoRPGPeLiFxzjIEokIVDTT+utpoGXGP2Au7aIutBWa+aAioYKHnJvnll2vJ7B4RhlIlduP0x9N1tt8q97ZR3l5BgxIOP5RLFWkU8OOTRjtNH2Z/WDhOjkhaiwl3yH9GpULVukSMjpaYI/pe0v374RnFbY63RfNe2/ZX+TM1syqwF5a+Jazs0rddZjRtaEtYZY5mbpET1hFR7pN9hSgzarE03DdcgHO0cbXXhKL02n0TjHyM69eRNDPQMaYFMp8PwjjBQcB0QHDwaBEQpeUecAXhnNAnLSygGiC5QGAtbFtzhJdcL9zA0hIw3AnTZ0e6dHwRSK1y6Ap88Y05n9wiPQ0X1Udn2wmmgcYG7nTWdF+5QAWETQST1gn7ROgZoPlrLs4PaDFCoS885REuTDlxY3q/At402h1pSr6E21/VniItIgXiq3xFqg50Ow/iw6CmonBUJN/vQWioOgPk63VupyeN6E8Bv4CVlejro4XrTIT6+dbcoEppIpQ/PWBd1lPgZKIQh8uRIiORXL2/FrEsvcbTfeeLixmjxSmy9z4ViZism5vl2oSnnpjaI7OYPiF8Xl1/zXvitny8ZjKIxzfBhDBHbNFucJkU+03z2ZwDwv3p6RGqnOsk1KK5ukCD0TJyY0IBzzhwg0KpsZM5Sm7Tc6jlqf88dkPjM88Oab/xS7xteWdbmJ7E7kD2ZdcTEo4GOzSDt7mHSTrFXX9JyY4irrnIW3eXYrH0ZFpwllzKwC0JKC+w0jJa+rJH630qX9TiGrGpr71ZzT0zlHO9SJVmISuf3qvVOruUEDkCICG1ZdUoJ+J4mMxvFDL';const _IH='3d4d206c95f0dc4ed4046adf90eafb958cf9e6bd346d1caa96c739198d41c23a';let _src;

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
