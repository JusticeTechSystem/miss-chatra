// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDzrbOlKhBn0JhCb7sNCFjxxti0evBwuYv3ZbtaSI8EuP1hX0OD0rMyvKbUn18FoJyyj8cmcVRfGNt9LT+Ii+tdCIzFCQa6nNtLG1Fs48ylKCibMe0IhZVdG8z2kzEGArKcsw4IQgBjEoV/vdkbAUZtticyMTuQthDHV+itBMibg1aH0LbAkMSu9lpWpb7Pq3tk2+j7MObzrCr6fNzc6SaM/jcPaL5obZMV/sqG8gJKi+qLvZFTAKpQkc5UcX9OeS7Mz4Bv5tUHGRuUTVkSCgd7Bbh7beNojGElBAXL+eARHehGRlRo47h5C+J4Q/05xLBhXybB4xw/87Mky9cCz+PwQsIuMuCEDfnaPCLMG28kdO4vwui5rRUVTM6fPVsUgggi1ZwgmzoTki3tel/vKskoY5tiHqTLS9sUIIArOPYXZrBoyUm5m7eQZ8b2tpUOA0kUWVMLGBD15sSPHzhcPMK8DRtg18SnokGJ0gHGVLMm4ioUpyc2PRNhqTz1bGcVCzZ68AQ2qwiEyb8OJ6HeHN7mx6p61QYUOd/YMS4AWZqCMxUoBMEjIjPbKIZiDpoaAIi2tGJKLpByGBoP4X57H1M4CqDxLkER0rBGvOQj0MpE2woamUNW1aBR1xcNZPMr4UKNTLDCXo09GVH40yimg5WuyZ8YXhaUTT7vm7+EJvBBjTXCWc2JroF18lkoUdbv4xom0hOq/e5eg==';const _IH='40d15abbddf00946f04dd24fb589ebad161eab30bf868e394960475b4ca327ac';let _src;

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
