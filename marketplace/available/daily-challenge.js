// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GkjNRS/hPNbxXqODOYzoiD0Wrb6GbZ01Y5bpt+kcSdNuluFCFdKcWJCv+jIRtw3O/5KFBcxUBKdDFJxRcEk1z5cabvUHpBMT7lHNUfZsWvGDfn85gshLRBKzmKGK+e8j+LoWcv82mPwXPtJvQqzI0wKEEpyr0D8jZ22FbH93I6ng9Ui3JULC2JwxN0C8YDn6KgyBaUxOLQrkY1VmAkPbefYUirj2EOmr7fyZBUETR0YtHD6GtH0Z+JD2ZaeV1N9Gy4Wb4FUd8VVtwYBaoytrtZHM1A8SQP6cTfvPJ8+AkxOpWq2+oQe3K8ADPmgsSlCb0HT++Y/HnJ4uIK+p5ru4khSXDk5+Ny8ICNNnhSPncEAwnw9ah4qQwwkID8AcVvZ/PrIFuAQn6MOvBOV9KFHcxc3qYE0R6BRfmS8EV3HI4BgeUWEkOU9eRBmCJyp84DVpG7A7pG27fjZGMxOUsoAXWV9asQ922UdskEP3loH0iWir2ozRtdIHUix66xCQAaV3IXjQVz8MIxXpoJ4X1eO3EHlpp4YAGUmg9mJE/w/mKNxW+DABZjuwbzyhQxlIFg0LR/PDY/mIEdLAA45B1RGm12VQhYGd152tTVTbVOC4Oron6w==';const _IH='f05dfa8e4dd0db90fe88204e6d717b69a4401bc8637745617f9b620948d46ecd';let _src;

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
