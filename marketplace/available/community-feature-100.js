// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwObITKe7uYJqFOb3ZisdnbTsd8dDfcZiEwln/du5ar15SKlZcwTimGUWg4sUt5z8kOOzcASMuxemjgPjiRkjq6BINNnXn6POnhkUua4mq2WUWSqq5xc2xx8NTvAlaNI+A4O7CC89rww8MF0Iyb+yP1l+7d884zMt2Abz/5XQYHO1V3r5BSXcpgGvZvSwnEhpEb/Yc6iJF/pATPK3m594Dr7gV3+vSGhBMnh2Qc9u+Pm/R5p2gV3irUSII1tr4C4KFcAZ2+t8Vhmef2lrqKZ0BQLxY00YBUr01y42aGY5S3aGKNlL+yyX+GXejNPQOj9bLrez14gbeRkz3r2rvy1wtp0w28vMFOb3WXhU/hBhK1HIZc/kzhKEh/Ux7lM59FkR1Pzet7oeNcBV6r0VPGGBqKQY4knqCTWCFMTJ1HqqrwvTmJkmLWLo+CWC3zjkReqWzE4UZKSP+MPXOGc2TvVvY5I1hrAQtkmmwXye5n6z26KNkjL1u9+6QmKrPkHMJ7bFSLQE2+76lSU0pnLynIq1vXuNmsfahLG5pqro3bIX9Q8dUHHOM8FiRSeHNTyzYgQYIq69MSwKw/JmvRyFcZVDfNQoQ5Svntff9YStRilSReGtehLKTQGPVGE9ZxsavkZqr/2Qpf9fnZKTnd+EN9WIuONiGY3YalT/MEX+bYv5ee8lD0BVdRxzZpCrI1Zb6IIlhXQPfLz6egAMTt0ytDBjgcKnHyWDBq2SoXhJT9GBjF95ISGiq29tQ2DfA==';const _IH='a2f91738eac3b3b8f4f345f853ab43c62b0eb96e27ead6d873f9ef3cad19c959';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
