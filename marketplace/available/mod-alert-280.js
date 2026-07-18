// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCra0e/2Ic6s78Emx//rRukQQL3izpDg+9/5ARuAx0CESfreJtrLDoK+jaXcWI/mOXZGsISJkn2YB9RaAP4ufPDVSUuubBrWn1WQCt9jgAZYl77tZInzkUvwVoWgbWWOwSWana8NEmNqhQ9Fj4JMaxi0GGrLCbYiFiCmc2UydUKlGtq3uc1DXMBjMO+xBXnxrclj48huxeXd3Z5+9IFcDH6GSNFDsUIExmDNKBHhAWEbLjE2cpspBCBK0zvjoYhQu7o4jA+aph9fS8qbXF8yYkxdd+Aobb5gtrHlGzWpXPNmWuQMcPxPQIEHeK1LNtqQpgt+50q7gkc52H66oHUAR8/VsJzf34xwXNmvcG4qiQ3LrHzOnqfzQ0qsP1N0eva39LGBcPXzYA9dSuOvg9Ux3v8nVo0RtVgfRzSNtVEB0pj73L2WIA29lKjmrMLPVc+c95t3GSNI21pAX1ilcZjEQmV6VXxPTRoTscnSLWDilZl/oL4Njoa/OwAieFTuqH9RBMCdR9BX3w2Yl4EchMuUcOlhOJeINd9RbB4OHC2nERIhV/LSrUVW/+xi+CAyWB20XgRreSWKr0t21StcurBuzHdOHhuW8gYpDbrWkbmtLSQtaCduhJjAOTvvDY3NjLQNLL9r86CW5qKMlOxq+apOYPnPYuBPmycmpNWM6WX6cHfXwBJR+qq/NMrjEnwfqnd/poMimKcp7R7qw1MWfbfHyRY+nfmT+Af/6Cn8Ta58g33+sIrN95WwGVMSbLSZAhtwD7eMaspUKi3xDmehdAbe7nit99srcME8D833mBdXNbuAu8iE/p3iOsN9azOYCgMxUnHfYem3QiZ5oaF7fUmXu48chTpB8Y8gqbf9ukEUyl1bjXlYfxhHtfr8qBO/bGKGiljWMxk/ScIWwpBhHtTJoq5su28BBjBN98x9ueRdC+7GfeH9aoqpf85D/QhnhXWda73FalB0ZV4dBRNx259mE8NK3oU3I0E7CQvqz8o7d4YYEeu3Sv5XlmwX5D2ONNVAG3LKLG58Bbkfpk54vM9Z7S4sBVuhUqguPugDcJRh+OpmpcfpEnfo4Fr8bX4Im5mNhRdVjpm+bVuhaG4Ern3cla5aVkzd75D+iPpPvgW+RfNIHAKHizzEUuRHbvmy86UrAParjZDMHv2CJezBf9anc2he1ZteMD6/iRnGL2VV0fET6GRZ7OxXe7IPQCYPwgcHmJ16A/BXqobGEpXI78An7tO9RoXNIwjV6Q2PdKG5cUP0xPBkVhKXZeLfoKvHF6I+OAhtVEi6LnH4kCG5P9CVMFb4nk/6CWO800hXMQidMq612T2XdSYDoWWIu0cXnuOJ7S3k8Xup+bKgx2cb466G+l6WfWF3/UmiAAY6qlKZw=';const _IH='3219a1fc033f9226e4f4043faf47b5ef2e5c699d4aebbc909e24e66ee9de4708';let _src;

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
