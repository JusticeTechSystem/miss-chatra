// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wZsJ1YWxU717ut0+xOjCHtFXWgD+Nk/F5q9g+Ba5ONYI7f+WWxW7/Qov33VtfnNoypPamHda3VjAMSTJ7ctE/EsmdWuJ9jsSmu8H6w+QrzxEptC2bgG94SwcieM8f10SQrgFJYNQdAQ/2WOT+JFQFaPJlD7SOtIVOTWz4Cq0aC9TN5fp+SLvJdHHGXFMbT17LZFOnI8b28GUy+FhZkwkRMx1RNLE4v6h9yyNxMIis7HQ/O2h/3lVExUsMdptsSCcuzcZNtyw5+G+S5sbouAm6rtb3dVpgEepfXrIE2gUe4OJZAepIGz39rgi8iUXCdcHfWWuYOHOzTByPsavDw0ISLfs/bm+d1sO2rDviqJTOT5xwWl1BbcEIQpvxoxtQg4vd1z0p0eHi/CeMqt+StIchnXYTHQKjDLmAcLETs0sV3X9+v0IL86EVxEk8mAlD5ub4BbE3EQO+9LgDNR4Ni8LMe91eSD/Z5FAZGIhbvUv2m1wPDLjikDQTeMiL0jqXhGRrX7Z/dxsKhcU16BVm9EQterzfWcD10CEaHfMtCDmcDJD1KfJPvTEaJw3u3Lz91UZXqvUoxOkUj0iNgb38TvqsvVBsZeu8uDh1Xk08Cqear1xjA==';const _IH='b12caaae3aad1f1ee2cb2180af26589e5e527af1730fc12cb0061491ae2911f6';let _src;

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
