// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AZwB1yjYLUq8gYAY9woC3r7BrF/youP2kF4KsD58iHkq1yAvztq3Vo/XR1hxAbPqsG768pOG0X3wEmLpGmVFWX32wU7iSW8e0PMZhaY+m8HLfm4WRIYdBctM9w2XGNYcQXcaWjkhIxwiIMZL6M44hZ4X8wsYiUsxXQzc+m4IZ8KVYQrKYIdnw5126MsPytSpuw5SZX8epAVw0rA3ZvE+DPIS0fINIBaQ17Las/N4g4gua7V8/+7eEBqf5qygQpMPfmTv30kpsuUwTNg5s5oyuPS7iP/CFPYf+FS/2Aon/EnwM//sPTh1SlJ1SYdrhy5odlsrag+jBliROl3jcXTvFfmCqlE5l4SDTwaJEk9784tDHwaQefVEw9wRvpHfLzfv+UWVp9kkCsqX0z+BbCAfP8M/MPS6r9BtSrQA6ABokBNcWnAyji4Z2PQ3lqjvNTns5DdGzg6bRQ3TVXFUdZl49Suvehk0K4blP87q23jKF0pcXl37eVdoobW8Iu+CMiG0jYI7A4L2p/C6HQE67TTUBfdfci294DbaLZw8QsRA5KRQm0tZZXb9cPE6zVfOcZ0SjIao2x0DD4LVUX5crrp4G3SLGJMS8jNadZ2rVvM3G/i+JNC8ibgo3wLRKbMslWxd7T1lRtzEoE+KE3LxR1jEKadhSv2I/ShlUBu5zz9ZUvOsg3sYLVwyHdB5UKBTGtpWzijniTVtlUJyGj/pMUj1IMrBOQvcI+1/KmU8jZBqnSRBdlyDW2OiJWciWWfgf0IFeOzLXYaNBrf5jmmM/9Mp8Js1vtkKuTbhm3dfvWEmS1EFsLuMWvS60YWew3orJYM7ufrZXiSGZOXfM67Uz5nuA6gi6LJH/W9XzvoMduglvv5gB0IkTdgyvxfe4u74DPPWgcazpvlUUaKaa+OOp39xRerpVM47dVHnxCC8HQ6cqv9O8AZ1RgeoEMOQgFSgtal2LT5L/0VgOUx/BE8Z5kKLQ969I67oSLiyHXIA9j3PAD0NngDgQCEzN2sj2YTq1oPHqA==';const _IH='efb160cd8e6485bd782ac1fe866fa72409731203aba395f7c2602df8c38bcab5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
