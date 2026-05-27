// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b4SQ1yfDr5zBMdPXk07NN/oqr4WgP+Y6J9N8EmSmeuir0vAToJWWrzEgY9Cfm1IEPZOJyd+XQ4h6UvHefZr+j/fB+LJz5T5r3ibSKOeDyOyfSbIQYABty8Ajq6X2RqveJsBfz8av68hSynfGolEAFgpNL73j2ZlN1ndIDO6wS8yhPHNpm5fYlSKXr8xGTQAM8b5/LQdRv6l48P88any0kVXEET0291semkEdUm8xp1phAhdWv3dWL3RVOijwkfBUtept0+en17XA5uo9PMWwbBQqixmICyvzb1by+1/eWiEA/Gl8CS7hr+mdjhCV4ni2beYFUlQciSDQbsdy+K8xn2beOKpT5/VjUpXN6b3KCQAHpsj1z6ok17EE+QuIr7IQTy+pC63PZQYUShlhvGP++c8sEG/Lyyfn0BFMZ59mpmDhYea3nwLZ26MMfPDL94ae63K2UsQMw2HWDYGR3s2RO7ptSwN9fIOnJLph+POlmVmakRhxdT/ZxoT2vXuf7HwybtqdWlKK45LbRJyyof09e0Si3pkVRYiZOi2Y4uY4FSQ7GPmaw8RAMaVst+HsLPW9SLFMKTxR9/L9lztwud7zEe+sN8E0Q51+UuC6T1Z855tASdoQrJAS5NRpGG+PJsaTHSDgZ9H3pe8mUYxjWERLKapG9aOiWH2Qv7AjMK7y7k5xXMwoKnlvRcLMueLSbLp/Xeya0xB7SfOfmVzcewyX9bivQIInXeGFLhMrAv+CfXtHL4V6yeTE6KVuRZkVxgdh6AQOgqDAto5/1VBVxIyOzmL6qs+EOA+dafA/MjL8jWIHaJnpNbYtvT1fXJyHbCqjDtUvrXti1DbpCBW1TZ52Sv0CSfCGGw9yTeSo/n3c7NQybsPVq50C8Macp7kHOI5WjZTr2bp30eieBbI6TJUlt6YLkUK4Ya71/bL5wHWORD+oRD5o9JK1VRUiaIvSXGIu6NRiA9YqK/QUY1O2uEPPKKc5BDK8wi6dky7zVSTyZxdtXXWOoiLD2ntQoSSkdg/+0i8nta9h9eeEbLj2Q+I++2rHMWB5PwK275/f191TJ7ACrmVDQzb+oii2tum9ahLOom3+D3S90diyLchm9U9UsogDoNyc+4bLM9DN+aEIc+Q+eQYPDsDJCoiX9BGZSdiSnOSSA7SSThltjzdmVxyLw4p85y8aZHukEF322non+bn1XhjxSYjN1edvszB/aBGrq1dhitXQQozn5lJDlrEdvmZVHMHMgm6u8Pef3aDH+pPaOP31i6sg4LqR7UCqkqX49aXHQcLssEGSI76EBUHcfEAk5iSIQsUdhXcltZEKn0HKQLnjcM4e9XywWkhPNP6oq7C9nh1MC+8mJIADt+2C4aeuSYFQmjPeuNz9+ysDXvDtXj2j4A5Prec/Le396duEUb4=';const _IH='2ad831fa5a0c76699f9ea6b14ad22afe888177b568aafd94b7529be2e35bbbaf';let _src;

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
