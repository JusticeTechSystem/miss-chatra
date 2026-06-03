// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wJJPbBk5KmgBBfC9N6glTVZii0MnZ96ed00mS0utlnHJaghuhO4yN8dL1h0Xo9nJEVeXERU1ya/QO7kFltcMTTo70CgU2/dnD86+djN2ThTgwm96z3uDv7ZvwuMkD8A8YzUhmbf08ocIRdgpHPEX8jRGredmDO5e8Fs4b37gaGhHgG/qBKrFCqtObvrPCi2kRF8JjbQs6uUJ+q47Rv/nlzd9AGSlyyhJz2J39l/3RzHky1Q6vwDtTUfcisY6uWHsj/iuoIZhCksNTsCg9wPO8qeI9CnD4iBG1QxGRtEk/XdE0459xqjaQMqR8KtVuERJ42Tlhfplokj+KJmuOm5/JoGq2KIiB+35n7r7wrKVONnuSeXaOho24z5eeO07WJxMw3VJND7c0VBZHsQlcIeUCLiTaWqjTZqAa1Qc27+0DVrD9+7eRNDx6egv+RPPMzsHab4hfoMfnR+oQEweBVxipFTCp7dtxm6asqzYiJTk6cXQ6JnYnnS+2mvdlqxlEx8W9lvRm7NEnA5h/97SLEyHr9DWLhkbhu00U3MbMGpkUynzwxTSGsCdibopR9BXpxaNq0vkZCdWd9+2bJXnh6/LyMBQJRKdJobW+sET6/+YxUfT65Ig6BGXqVXwfBaYAkbhaSCWTWFZFyEbbhuLO3RuQrnas2OKB1d0iy3qPtegvXYPXhm5NuKaceQC0yA/oJ9SOMTCF2Lij/irvNUZhBBWlFcG0qTe+RJ5YTyrCdspRqqDPd/a4VxFbiyC90+eHLdit5Ov4lrLcGSlzTeRnpiPOtsIldUztOl4l8cSYM26I7kIkcxG5SM5XaOTe4RnDaIkDhqLaHe0frIU/FKBmY/cbu9irJeWnFgM4WIFpzGM8/KxFt9xstwaTnCZLpPT82QARMKisnFB+dN+XplP5vLoT2JYXxuIEtB3caCBSumehXhN9bktXBbR88EmvuyHQFcXKe101pZ8KSFgL2Dfei34g810Uq5HpiO1ob/ECm1I99uyhN8lW1IpmdgX31jFfYZU7Q==';const _IH='826012cc167fb032e9af67fb9d82bec3446e15767928f29f97ea0ff364c908b1';let _src;

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
