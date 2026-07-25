// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0sbnRM2XOqOjsCxNrgjve/05w6vFRMJKp4Bi1+oDXT0gupuXqMkdhhqZB6UT58uIN3Uwo9ZOyNrpxa1YXSQ9AaPVcarGfy6Y/tnaoFte92OqyuDgYsOzRtQGOwr8OOdEVZEiUjdfvqNuYsh6sp9zCntDsyyhHNuBn/xqOMwCBJ/1xxFm0vSp6OpqTh9Myd7s0XSzCKBm+fkZED7hx2FhUvMiTpWgbA1vtgLDKuLfcYmKPyjA7utFKXKn2eza83gK3KspgZJjA+hck3BusIebdu8QElLkJ65pMrq9wyCzjviz8AeE/Pl2ANfKXwzy3lAFdsMS3O2sXwqI9SeU4F79LxgFiB/xowiKuJtg7Y50e2dt8TRSRPrJyDav7jydwFuq0mTvH/ExhgwFOxXxOtHOFtaB8j/XJ6K4cpXsELn+L6iggNCUtW8g0Iq3+7MVutuFTwnzdSYWFy//2aWboC6dARC0xZmbtnYfRsPscUIRt8xHOW1pafi0q5EgdYT8/3LUalTESGCS/4OUxlbXh1s9qfYftdVCFccRGvwKUEE4pc1MJV+g0JjLCNoY9FTk8ccNz54kCD6fOjKdtUDiCeFJsdxHwhNysl48hWYq62AjpOzlSbp+RFoAPX6P3v/S2QExeG2mVHZK6ydGveO99sdgb5TtoIvE2y54RS9SgPZP3J1/FVQXXlWB9uS0QLT25U6jIdoQWGXlb7Yj0rNkJyWpMBUPu7VgPGUo5KxQCh7DR5ehWsdytHEWIfoZpMbxSdfDalRAk5592TsCQ+u7JDLNfaz1lBojzhszhkGsM+6BjyZ2MVkYeBsip3bAfEUpOiCxRWxt1GPqPBayyOomPFonG1Xuh4/yKSG4n7LAI+l5v6uyLeaMzgmvPbvvlTGEgaDkzhCzHsokQjS/TZcpUO77DJm2MX5K7ydy+FoOHp8Ddc8PRY1sk3XmjNiZno+avjivkV3i0oCvHIsFp+WPn4SKMi9abCezEhKGbyOtBdCMeg6B2QzeN+JsAHhplD8sb8uTzhhAsb7D/tetj6YQwGXIiSxFOa01IpjKAybTYeU+Pmp8v/ydEXwRUR9kP3tvFWLYEVpDy/9EySw6hYrp91UMMgKL7drGErt/cU+3zDuPfObcTNFXgJugvHDRGMgFUWYVDxW4VPLILl+EX+N+45nATo9QktmNgGCcZD8nYS0G5zYQEzVr1MXOmlXE1J0rh/4vEarrJvJMDqPUjiEWDtRXyMQbA6uWHKnwIxeZDATfMCyjGJjXhcsNfa2JlFmgWZzYDG+hSuqJ3KIxQ9lqRIBWeaoToa4muuWbtG/gbuX6bJtex6g/2jBAeAEt5WHyPThWhj1g0+EKRHTjNAcvoHPabadx6OltwDcb3sNUY7vthFeRcHejf2ryg';const _IH='86ec0e681e78169eccf8767dc4156eee2cb1245c132fbd6957a48d5d4e0fbc69';let _src;

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
