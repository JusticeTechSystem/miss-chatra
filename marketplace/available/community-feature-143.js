// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9uH0LB6d1tgPRHCHps5vj5lgrUrPqRjH2iv64serGu6GpXSa9NhZABzdMV/35RjvpiEWQYD7DhImca8eDikpz1/wF3D1tBViM1vu5FFK9K87Po081+zAf66Z5z6ZhCgnGvJXHuXuiHprvNshOBDRp+oNcxU38jbbbeT4ZZX9V7SKr3lpoOiwLEa1jCXnsRukZNQTVnLrfMSIMBBvdyHd04y4rtlH4+THbP+BbvN4qGXsm70onysi9+T62SaVvudKSMarx43z9esByAaOuTZTBa0477qrg9zchtA9IWtpnQzxX/N3v/2Xk33KVP7SgZ6P6XCeof2A/PJl/RfqilTM1mAMpkY+7iAF0fAsXxxIOKJGjA8BxxRNwT++QyY+vMtYE9wItwtDEMTgUxu0PLPhdUeHbA/VfXME4AukviKiahlKjFJEMll99nzcMR4YqPyVtIW6r/qvCm8QhGjEbWd0EyP+TRwXaycklLZQzCmALcWYm3U25OPa3Um4aeDFyxhGwmRcCSvygCtDo2CrATQzk1czclzZky2CfSMJMaamd3DQhqkqZWd6V/fWvEwniploB5CiDTnBkXy7n7KPH6cdUdf/jIRzBKjSSu/x+Z+i77L0qkA6EKX8KCeXLT+4G/Ed603mYMf29YL+1IQxh2tcQ7VC8RedXIGYYSLSS3e5z11URJgZg0uuYruMiFL09Jdyke028KPdOso27so41TdBp1xjvEuP7SJ+/67YK8A==';const _IH='4e073138866d6a7df663c7f8141f47d408a9c85cc574331ab790fb06a34e4171';let _src;

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
