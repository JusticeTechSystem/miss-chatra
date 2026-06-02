// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='orHc2WJCyvJ7HaDLWR5kEYthELcsS7WOBhnfXBU70P1rF4vm2Nf8+7bwrB5YD53vDCAouW1+Xd67+jug3W3A1e18DNSDDgBL69JIcrQ56Li+kuU3KmQzBPlJXLvkwuYmCxhkl8FBzfGqqdjzYZfg2IGBnEtvppJBnr4lCTsxhWyjaiEUOZNlQID6gK9zNh5nwzDKEbQhxcK2G5ClzVSuZiWUI8Zcv6AKtIixRT+lbX9ziWwXwmU8k+zp3SOQzCYZgm2XZQ3ENKfIfZ/AZr5blbtOcBXxsX+SYdfXybJCF//y1hlGWesHthfKgOdrWDdh+G5Z7/x/oETl9qr/z2Pm2ygFzBA4tGAmS4p9B5qB7kI1j2q1pALgiR3GcF7J1OtqItm2iA2fDtNsqLcUBPhBm7GlDS4d87mVCy0hwTtAxIhq+cTbNjyTy5rOJZZG8sJOhuwccPAw6XGdBXDtKszF/4EZ8CCqt+69Or3dPipNnIw6QlI4EaqOn4uJn2i+2xuk4zvQflwXXGoAGBRtgTGf32wNsn7iFVsUyqfoftn6eltP3sgKnTaW79cvQxXRc1YwjU8y4BrKxf60p7SVqbaOnu2kdiPiXFnkL5Itqc3UxKT7iK9odUijvGz7ER+WatW5SEOeRsCmpRyLybiN5Qla8VNzvOzy7+NO35Nza+ROWLIzbqVLWoF5QKU1YJq525+ZF+VwTtV+yn+YZH4+JwsD8D2dtr5IVfZL';const _IH='b9f209b46277182cbf50d7892a2f7b42c77fa35f2cf53291885aea80c7702035';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
