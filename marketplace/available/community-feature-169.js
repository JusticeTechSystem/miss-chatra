// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4+ZSOD5fPmoD5m9CEpbIqtPBP8zlmLUlF+6Mz1u/8Ybpb9/uXl3U1lILKf4JnCAQiTeX0pt5tK66MOpuTHHgBuzW1iZfTradgF/qlLZZIcGAGQAfL/hX43QCfb2Ybf9mwxBKb8JMLRtYu2OeSbtdnXsjmNsoiQ5ctD+OJPkwtraQD/PTCfkWpP6hq4jP23KYiNI0y4zbQvZlPmr2btePO4UXd2vOmfkxxwwTvj7BsBqMaSKHs9/s0aX2gggTKOMMnFlXUDWTPWKZUt/sVS6KJmgiV76nF8VYWp4m7qfVz2KBsyCDUnpW5Irl22gp6e5hbyz62OioZnQDhcBE2sh5JUz7OQGPqrAe7OGR9yZqPDmBiwj68Qe3XtgTEBzoltpU75MfC+4oHzBtBMQnXi70A26Ov909+CJfXcMPtfw0ZvYj5NRhAy8ArFUNnzBxQZrnTWaxE75OckKgVX4wf2eLSQRsZ3ArMbs97Hbs0KSq78zuycxyjkXf5jot0W/OljaiZcTUBieo8bgYX4Kvqg6IzLO43eUK5/XvuNqrXjs3Wz8JPHVRNPUTdedOS2dNMNj7rirccWI2J2ADFMY0sde0zh00bQ3s6eerGCtruDjOHE+rl6QqhoVvl+tzN7ENiq9PHJE3e0UFjlvBRzyfJe2USIFNQ/c1/4QlR+Ss7Fh1Q1wY0L2JAGYnjzTfuDYZxHx3pPQNzZdk+nIY1aDkuvdOri0ziBksQgqlv8HrqM+2yVJh/GtWzc4=';const _IH='957149022eb27b9267a3e43c8dbbf0465c8f877eef03a542e210e24fa74955c6';let _src;

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
