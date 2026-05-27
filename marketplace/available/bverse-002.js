// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hV8YbFPieeYsGJGmvmggTc1qNo0En+tCpCJl8YfR5ef0q5GFmcQODu0Ivsl2Hmq49rPBIaqz7WU4XwPc+q5LzsCkx4SGPTChtWsV6lpnUlMMFl6sST1Qu5bRk4y3GiSIi4vhVHqLafRkYxIHCtw+Dm0EeZWqgVvrMZhExieS4XY64/BDOUZvZY1pt8QQ9SLbMsZPrJjRlPdJ0zDIRfjQFCOR9BqtBGbJGlesi/w38c7kyLEwhQVHOLddgDVZwCh/VdpdSdlUKeHyI7Ewghiw+OF45qSkiZ3zSD95Vvj+PqHmtaDFz6kJkL6Ue86FSlyZxxD06mLPeyiRtyQ8nAXUg8u1iwb8kDaQPf0hv2yhvazN4BLKMX1d3Nmymp3Zz4TtD7YWWDrJZ91ri4rrNtEgEtZoPggOhORYZKnlT4AS1S+sEEZ3FDDLFPD5RGzpIvNt5QnFR4ZDcdcpVh5MnhJ8l960nZ13SMoVGqSWfcKH2k8IZgzVcoj2MPAXWsxLVYdJl9+CGtVE17vEMpZYRP2Noy9KEEimJVXTFS6UE23WNMr1J96KtPH69K8a1KKWGmCB5j4tHk29yE+n+AlwpxyE9GFHVX87xCnJhcYyHvmme1PNqQUshbp088O4tnwc5/73UnUC22JWBUbQWI6GmGWO';const _IH='93a9084872ebd35e32375a28755fa236300bb1cce42a935f2a26deec6cd4fafa';let _src;

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
