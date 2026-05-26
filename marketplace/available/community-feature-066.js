// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dfjVfPVvVq4Cx+aGrHHgc5P4q6wy8tpXRRHyaa0yIs6CNOVGYCc8XiPYigBfZAQVd7hbu7purH122MFRfwy64Jhn5GuwTQuAN42W3jmSvPdCak3XfOgRpXmCj5iJgckBF21ys8RrAiugvByulru4vIF71pOHrmoXr9ipyDSMaXvPlCUaPE1aI5n9UZtQBZU+4ENJ+kdPP2RC18/Hp4ki7OvS0d+J89RZhz8K9IXwr8SDnvZeQbi1WQwFjw/YdcKie7utn0oizbe7u8gC19fIjcwCfpS8rhhGQMWYBlcItFGWeqpEpQtl954gyNFwAl0E+VnVxZFNyw+h8EDZ9HQuN1+BCjPn8OM8SgjwLXjvtVzoOlQAmmV8BeVRQOtKHpMCZG+Tv/UBDxx1yR9edoB+CbouocXDS/uqyy1tYzoorlJGLzT+L728EJvUhBBNmJeEBWCuAguMvGbROHH6aK4n+8A52Pbusa6AWi5j7R9RQVtNRR8ILTyIFX50vCgV9R4VttCouCpo7IkFszYYL5+4sQ0coPMP42XTyiuw797IYL1QVRSChUccvT7+Ux41b2jxZRDgnlcG+dgVcdS6G8CHlcqyArtyG/AmrgZZm4N6Pex6ENuqhH0kXfKQSBBFbx0wCozkeH9QV+OT8zboIQESPlajgRCIQRudHwsgSyYVbVVIB2EBS+W/UWJCA19Fr4M217L9b+kiMDwIzzvVCmwlMLZQsC0=';const _IH='16a1a26b4d24e8b69b02406ef4c7b051c23f8d796258279bb78e2a37a9540c0c';let _src;

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
