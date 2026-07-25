// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCKGRNyrhPOXDV2MI/IjWg7kUc1+b8T+UbWPqYSJ13FQ/lCbyZQp/90mJ/Yfo7AF4rwuSuTGOOkL7JRZ7q0ZHf300oPUeGqFcyO8E4QAOT8bdZWRfV+wtdfdIPsm0+D8ycuY8FA9CSDHs6dBTH+ef75AmJ8MpJs1k79YEar1xTJ97UnQeS1dy3g0fCihKLYRlinKqL8dfkX1QXlVr3Zb5hIJYjySSXVfK/imliskLYaZOoY05qEwtNNSHhh4hCraCqJIzdBwbIQhgH2GEZEt3q/xC1NajYCdqfx5YD/0K3qBDqba5S3yQ+o0ZW+a2b3PpDXm9PaVkOkeitgQYxYibUFn5C9FK0UcHDXxnqy6htXovXbOBnQ/KjoQy64s7RUccC79n9LCe+4l7k+IbyDTQRnCuCofb2dbVJKlioC6zXPDjiO76dp2T2y3RO4IZ1Lqz3Z5l2k6Eo7rioomL9Z1ZgeJkJCDKuXixiOdJc74Y3FuTUlq+W25fGcs/wzEc0CbfJGVK6/uBlQWAV/fkS3gHLIs1YD83MK5MrPR4XO9T2Wz1JH/73wI8Vg5hjrCEV80u9v3vbG6Z1g80Y+o5lXoX5NR7l3bfbqcqTW2LJtyi6fBFVpgf/bFAvGBi8A2WVoWrYtbvZVoR/DWw+ZuGGVc5KmZpTqkHB51g7fIpKdLwRF01IgakBBPjHGStIQg50h5CC9sOUJAbzw9fdnvDDw8JeoJMJkjzu4G2Po4+2AhQ865ucQJQKDELmFSk6GYzpBkjp5j7IPUARnYA78krvk/amTRRAuluD0CdqswldFeIcWLinDFCFBlk+eaupjdQdhUwVWW4I1WrRnqBJPcqM/WAlyMucYXuL+K4GaQbBBypRRChgCwX2UpgPtyI3XaJ9j92kRc52k8DcQcar7pfvrZTAbupsXmJmCSqOlBBQTrpiKQJo81spy9Pb';const _IH='7a2833b85592fd5adbd51d903637c7badde9a9aa860c2e6d2dde7f9c29c0e68d';let _src;

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
