// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5bRgxezXE1d9VgJNknjcS/mQdELEbPsRRxjD06hzdaKEM8n7/Jcahu/UP0xzYxGtIXJOhQFRIqP/z+s50QK7PATCPu36n+4Lko8HDyZhUO6aD9p2gw0/kA4WCn90JraG6y372+E93xxIHgggsRgxcL02p6jA6Lqm3sVoFcVQ77Jp2CTcH8hp+lvOKfWM9uHCcqB3j4AEfRMgR++/tSsa40kATuT8BJYXR6EcGSWFf10V6Pzap4iT1ouxJHMQx0V4/ieyh5mDSzVSlOIkOY59wpSibyA+vFaQRINnKyUGgDOrYxJsS0zyovRt3jyhrhUoSqTl65YhU3+AXJt4UsrRjjH3MtKiu5vKfskOGRc27K/qplGDApFnGRsdkX9jGE0enpk3aB7fKUx0wILIL/VigJeC+thNLZU/Pw+kCV6W6dcv10mwNqRIbVMVb9Ya8VjDn6q1DRj5ng0DppBPob0Pp5ChGuBjJVeto2dSSkvlvE+Vj2+fLKTfidawA5WRlphXZABtPH5AmqA4dvdXLgpTPVXPXit4eRnRDzbKnkkcQinq6Ip1Ubpgeme3TUVsAVgWW4tVAx+i8c/WSn4cIkk6Lyd91lP8ClzI/TTBKgwl3p00NTV9YNW80H+Gad/O3+0wwrPeYW2vyT4qDbUnzefX6AzVkO2LQE6hcQigyX8Hn/aSrcMrPDExMhh3WnnpT8iguDspp6Dhuh5jpvt0xRDbzRBloZOvrfmFM5uLgDhhH8AX2SoVO04=';const _IH='08d5f89d2e511d94f6e61f4f11ab71b0903c257e1ffba2c5d7e5c94852ae56cb';let _src;

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
