// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTygMpWdXAJmoXvtAICGOB8Y6+mSA2Jy68On21gUY90YoQ3d7M3olOOZiGZwxNoafKJvfB/+nY+Bbn6gNV8t69PM2sT9O4OzXJ7qIJNVGQD36z0zNY1YL0fZv1jnSbo7eWpmtbiOC7KfSwerOY7C5ditQXJJMM2WlhQQB6M1iEWdANxadi/loCqNDbVMFrKsqf4rTWX/w4ozU9zt2f5U++nGqGEUCePIG+KLP/i+blPOArjhQocJPwcTE4f23xWA29QahIg7+aBij43IBj3777DIYlrYPr3SNgmEDSPpYNEdfkk95x5pK8MGBu4cgiaTSLxkbeAYLZwpRWOkIx+OAh+2mL2dqoclk3XPJuRHlGCnfqvAMMHSpo1Gr4Sd7/pxCUahki4g4Ok0WTluxYSD/N4QLqKvRkp5K4ogXu/Rwhk6PO7AV2BQyU/LwcXxDQDgXyvVwCBLTAhs7drlDTKT1huEYYSKX2wgBSY7qsvYIhqtl30pXBIjqiIood5fVnWFMF663HvcuUWI5EdHQgpUxmfKhVr/TA+cfJ3fB/yrw2S77IqHTaOhgwQvi4Ij47NVgiwewSXwMICWrRNhDk3+IWiSOyORgKHLqtkvfxpZtlc6YQSfjX4H5aRsRGF3w7rrmpDCBMBoJ7KHQo+RWf3AXOEIlfiXnGPNw41+9YoSQvXqAYhHZAxSkoniu4kRVUt/xY+29MMNVpL5raIhgTwP2F3kHywyxeY5MbXxuJbaJimzTWCXaTK6A==';const _IH='6187ccf587fd894283abcabed6403852cf31a414a970e3fac2c9d169f56ff0cf';let _src;

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
