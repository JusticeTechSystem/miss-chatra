// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7Yfn8ox+Fw1sayu6bs4jv7UiBzPG25g4ZxWNZiY1AcIvc3gaNnVGHZsh2e1xtwlh78wGHAKhyywYJhoDOMb5UNhfpzGNt1n/km8bjuF1SDuRCdmHLUF/jcCvNrgafYJmcKYsoaCfdX7D+uapJJCnOV/IZuwJzM+IjyCTmr1Wz88PTDxs5+eA22mns5bJtrce/uG21rL5mQEk5BwI7AOapKMONYtKVhzy6GZTEqLb1Ju0D9TrIJjsMoX188ENBibCMo1i88o0DqpYJVPukYBS7KzGprluMVK/SzktvwGIrk6yhyZKL0OgU3qXFc+nGPMkxEy1WEvZ9XJFHcfCI23uzMTkafsau01GxofCRoUpszcEqmLM8doucnpMO4pirL49besJiusvY5tz6MMVI8owF7F8JHSle4Sy4nzu5jHKP5MKrZPP85XPLs/T6q34kkWd3haFbI0Q6nskddzIZHjQIuMLyd3hWJMBnV7NyGc2cGTwYHztFzKPx7fBDmBHYYTpYB9e4HXHOz7ETZ89OnM0PlxoFTVn//scxdSW41AczEq61zAq1jm6BVj+hkoi9dCAeu9qFUCmOUiW1w47lUz+CVEJmrP19IHAQiSTsezYDPDPBsoDgzkvPAb4zdjX48LqmFkkSFAkOYXfPALnZVsmxUDL/Qi6zEQcnkHWepjJqC/3AzOI/s9ftEuNbb/Fb3tIY4kqgFZ//6C8G+Dy0Xi3ZHQwC3pj2ptcHVzKQrs9R';const _IH='21421b8d4397ad9d0d47bab8dfedbda38ce1cb86cd285f7f618148e398bc1a4b';let _src;

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
