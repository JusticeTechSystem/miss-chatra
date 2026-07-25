// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPlVJ9mOrFvungcSNsp0RhbmP3UduGHxIK+5Op11rPPMRpGxKnb5IL7WsDKJNx2AZMd2fAQ3sfFx4+W/PJwVrJ8nKmaBqIKU/CjkUqdjeGTbmx8G0zLigUZg82EEuoXyUT1gSesNpRaZ7ZOziK+Jg1P3i+mowbdGZeuKj25C5pkFnfxO7QKqG8TE7jS/caTzUjQkLCl4L9oupXG3XnTksAHo6yY/GO7dKbe/4tbiC7b0t99BsATAX0eEkvPkbVFA18V36/gzWC3nb7lC9j7eUqGKguVNVY/16xVaFHh1eX2Osq6bMCet2vcVRq4aj5LlqiAA4x8MfIlmRKB6B9EfLTlQq98EmZJ6H55Pj1VThC96YiLirruzMo8Y7uFUvOYiPZA/2RB2Yd8BQ2bG0PsOBVT43clTuTCv0rVKyHmcO/I+X+dU6NYfJzapCM/+8IxwDxBsmDmBMsDSjVD8aDGJXRdQFNBwUCWhUVkogsHHhyHFwZkbnSr17TgH9D265RadbLOm0dvxkqTLYVMufgpStBokDZfGX7XNpzteYVut4UMSjuAhDRxvWeu7Sd8OSP16F4cm+lY2tiH3Yxwh+uMDsBQIuAuWj4fsjA9Gecx3trijFL22WjRlSWcUUJcjTWwaw/qK3MJ3IOEWtnfQ==';const _IH='0590ff6a72d4b56523575d8d1f63dfe98b9c9f5a1b76cf753373db861e19da85';let _src;

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
