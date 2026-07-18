// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSR0fD5hJl8rQwG5g77/6XTsFXILwzIK8hB5NcPzPi0+/tfxnQ5uowrS5d6XvzIgy810IjBYwSm05MiI1K4Z7CXoprQPCbwxQRIct+NrTND5gXouC0Bb2b1bzOV82N13CUsl2l38rqRQlDOm2DcOI/sXDT+T3XQF+UEViEjxAzTQ+Bu/1hyS1MJCSz54xo4QKCpfHU6koL2rdnFPWeP2O8Yn1QMYnEk9QNURSnUJ1k/eZjBEgV6fF5UP/vKvOkK6mK9MFd+Mh22WLiLyv5ALrlARpFEbu30x1NKt3fisKws85vfRh3dHSyLBlZx98gO1wYVQgFT0CALdUHLLKGCPVpRQKB7DNTfgevPm1gMUT4LJsskmvMJ04+/Cu1+dHUm8jPKByBwGLzcPtqiGm9w1yVVQnNkq9lk7H2YOu10UBbbu8wFiNGVXTBXhFy7TfqL6ciRqpZ678pYbVPUPTRlpUfxS7XaB5VXmwd0tX64PvkHh54AWzWoZe5LZ7dQ0T+yi/61KlKxNyPDNzyO5TQGlPgNNbixNODhZxVGUKzDnnHM+ntR9R7DvlOfp2Dy0G2iQ+O8vaXfjE4r5wosgwSS9iE2RCLNd4DLfGz+whHB7z9V2EarMsxDkC1zOFAVgqV7ItdbpLgPs7AA077dLTXAOeSIO3JJVz8dHwqIUB0nklIqpTeg/3iGPSpu95q21tjbMFWz6RLCM2JgEp4EPTubvFEF82S1NpvSyf9Pm09o+AzGxKMDgdTHVQ==';const _IH='a4408b47a688aedb235455333e78aca957919b642b13f019922e65ea72bcafb3';let _src;

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
