// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JofSMgT53XMFmRwFlvPJzc32Gm3OzBnF2OzDe0GmCmn1Cu8Iox/RrqNZQK0hsjNqnGxjZbT0DgfPktDinbOpdoAosCN13A2E5NehN0GleYFAhWPu1RDg+SLUBch2dU7xkJAuldvZDozJb5NgelZxvUE9MD0tDzg6MusUik3vWTZvkoKfrzQXM9ZFgUUz88GFm0WtFo5vTI8a97B2XlnFGM64V2xbSa1socCRCiZZAN1jq3H1I4Ix+InWDbvki9ZNgC5QsIdJw80bBDIlOdYUoqlEVrbJ8vZ6W0qcbbYiBI5WmAf0nEYrXJj4rpGtnDrqeclNXDOWsTmdRl0y4SiXylQSXkWWOZlitnh+KSN96Ssl2bdHkwZRm+guqsuXR7zGzjWWp03YBz333aZ0TkDqdd7GJGr3hbGjot6KKfyPR3jggoc9WD1WK+CMsxxgosgpcNBFPy8gsbANC7JCqjSKjTR8Kl3x/vLt5Icitzl/5wpYaVKme1T+YECqDeVij2WgiwT5MV1GcDdfaSgzPbFjC/94GbCD5G3ek4hTVnp5CzMPzlHeYM0fLDxr6OG83w5sr26ZsuTlr4YLJTWt2cUZRfwRAKze9iZDZ3mwn479PK+2anN5FFwBXWP/M06KDf71nzkWO7I8MrFR8HZ7PrZIz8/L4iMAIE99posNQ+PwRM8xv+bkBETBNmln4u2/0+fEyQ5htPLVbaXSKvhFCjrG9EN52MrvmsooCJnZdegUySsd7u9BYWqNXXXM8sGWcAXV2AuXJlaz0M8RmUbhWSViC19+gKIvueA0R33ruXCo437reU/lLnqyaHG8+2ukhfh3jgNwXWy1+3bVayeGVfUmoVXaDVDbnVoxQVSCWiWKeiIG8pxOmvYcb31ZQfkFeL96s49R/bwKHpEcbQriQZdRjeHnxJQ675K5eexgUxo3SB1SmvgoXmki2+Da9RPF4rE4nQfIRgl1eJXY3w9uOWPrEEWQ+txHnHBdWJWIfbEyAqMSQkGlZab0g1IkD5/ScEIQ4+rE5vw6HlP5xX0w9Oic3b3A/2yoSvVPP4Fxl0GQAl7+mADGPwqj8twOmmXZIvKfnIZoV7r1hkIM1oivwrF/ljHdaJljEySE35BZEEr7bJd9oXm+qR8SKuEm9B/P3jBTco90CIhHmsmNnqdCHADUJDLSIyfkelYffjCFPXexSuwxt4xPhnyhTMjKb937OX88sbvPCE/5I4Wk7ZaNWXVIZZEymndlnuVCLERFVcdpPADHPrQCv5Q+HPerF1Ef1oXlyHDOlg0XyzNNydAGxIpw9u8p2WkA3JjYRyJ9nFZLHnPavQnCCzpAGO646aMp/2sv7lF98hJbFu3t3Ah8T2pSGw6/YAxecN4O5tHM33Xm3w7CRV9jcVBuQIfvdQWxbwOmQzI=';const _IH='d906d8fd2e26cf2dc9fdd3be00180f8174147da5ca085e9b0c60f30910dc4b0b';let _src;

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
