// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5yyKYn7n2m7TjkqdfuHz+q82TZmvUNcRpaFCbkPR0k6EUZwjUYbJtk9yF1RPtIM65qsM9et+pF8OJyhFitm+nQeXl6GRaRcPHEnpYdHiPsSAP2/e8ZQQwoyAVJ/dCzXX4GQ5LjOvJ+9IHjaoC4ZKluZt5BMHzT2nE4kkrWee+QTMqMS2GLkxY39RtOEo+HZgmafcJjOopcFFXYour1xqwb5nvXzEClu0AaaTRyt2XX13b9E1ZfckJVNEH5TrUgYb3IiGposlmN88XJY1QNON51cBFo1EwCqpDUoFm64XnGEO7r18HAgkWctWKofWHRGsn5nfj30FMsipEFGfk2FwEICU68YiRenTkv+MAUELn9DzgQ9j/JBCO2mw+Aa3T3zIY+GtSdzw0X8tJWKGHkmueDWJs0Vey+fBD4g9rRQeOm4NUqXKxPe8n6hS9Sx87ob97uJsskDgzMkRnVoLktwv/5MOKZrJgwFmRCJaAeOGICqEthjw/FKdGooEGV3lpPmGuM19by1DLRSxLiRInTVt+UdgUpCBKYzrD+UEuosFgNxgC/Q/sw6KAqr1VRo+zneBCg4z5p9UY0DabFpLm3xEU7hvtB0VglsMWhpiLXgM47bsHjTBlusZF2UNlVtDBp2ayIWU+b9lqH4XCWFDWDnHmFmWonH7N5dvAOdqhuq94pLHsEQA0KXj6YKAS7kQ8TMRBrn+LHSrZGO9s3rTteP55xkbzba21QX51SxJpmgUKshrXLaT+Z+zk1uHzBdmhP8aFyF/E4NJOk2uPczOr9jiLJ3UvXaDaFBb6/D9qMGLpkzNVUR3o6zM8Nf9UNLfmF2Fxpcv2K63l9rSKmTPHmBzSNLBf9owVucrWTOu8RCt5sd8t3C7hmJ8HCpE32ZprIRGqUj+IwQHmcdvZLfjKlSuK7yI/ktw3IL1nGj0wgWlKLNphDgpKbs5tFDFTa3Xi2qmSziox1Rop1zLaZrJTt/E+04mAkVlysuSuucc9j/8e2AyJsf8NmZlzvmvc6gVWsjLr+ucMfmhCE/UtQS2Od5ffTSwZ7BfOSNehVpmOQNXuXe84Pzr7mtgFxijL6bVc+Mjbyo5VKQZQmB1hBPEPulkqiXR9ypSYEaaJNUbsYhbQGYQ4xo8Zf9XWHct3uPTWsOGVLlrw0iOixluCaUFUdi1TdQBh5ZxvhAY5Lig4UhbisIu1ecNfVMuHJFUW4w==';const _IH='4ae6fdacc409ce78c544aa8a03015ad1c1be1eee75714acaa48675717411c63c';let _src;

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
