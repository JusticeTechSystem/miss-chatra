// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='41W3BJ/rg/8BtGIKURKjTXBbYlKNVhvEo93uk1tamLR1Vf4xf1HeJ5/wEDfw7zo5H93XPDmICVhDhoG03aozTU82RjcdM7VNtE3zE2ze4XCEcZGPE82ZMRnXTf4/ZgYZiLJSatbb3v92Sb1cNIDYGrCBG5w36c04jEPbTes0TKMf6y5LiwN6tVGwRHKca5Jl6u5PLYicB+izGvxKPir3qeCQsFNd2KWWhj2XOKqennmwfXr5UW7+yPB+Mt1Aw4xxzymrIUob2NE68pHiyLYxGG3GFwI7+vvkGECn0E0UnuH254vpReDNfCuxalx2JnWz5b/uvVuNjtjuVmyXn+dWUtK5zOsLehZdiGqauxD5DpowXz9L/tHio6eN++SQGBnc40XYa32QGwMRsVP2pI9EOgTAJ+MoH+TEjTRJdozyk3GRSbIoWlqlQEdAmyM401oCrV56uhtzImjfmg1EfMx17lRVa+atCmxyR/QEKGP5gARFAPxB+Fpgc+7JstgQiEM/6Z+TOGZEqEqCzcXRO4UguCZrk84CoSmRFZZkyWG1YNVYf9HSZPwbyUi6je3Wz3KmhxVBsuF9L2xec8bt8xYCmQi3RM0V4Hm2Ab74HWGMrDeQhVJPz9t9nN/APElz5FHoNVt5JxUCxzEcofAPauq6pnSpwvZFkUBeuUeMoLPiKNAF+0lL4OkefO9m6JWv+4u5DLrk+RjzAO3l40a+YUrLHHu2w2Cdc/LHHXcl8nrZmpyUaUKHVUDsaRCcPv0DbGJbCHCW+COnb94FCE87LLBK4ab8Nsou2dOBTAowC8mfT9MT9Cxwj2u1NwNffWhoJjCbe1LFrcsyy52rnFrUXMZ3CA5KH8izT5LpiUqrqYqIhJ36fzV3sP91zvqDMr7zny7xZnoKgwimx4xQRRQgpQAwzbfeMkm1+h/Mpkk0vH8Xv7SjVbGNnQe9WKWJ8rZS9OYf8dUlCA8uPJAfmPhovsNvBQ3Jyf3LKjl8SxjQqpEZcCHUNCNP33pP5GjRU0MTNvh54J53WIJ+jlGh/C8CXAHgI/9r2Ugfp2i+o60n4OiE7P4/50f3ucRon1ub33Fc/xJILkZ5xQsvXV0DjISZ9akorUvWrXPre/VL1FuEz0sV1Zchgmvqde6gZjwboQDcOYH9GZRXGXGYmCntbw//INmoGEQQmgsvu2MkzBAadfM0ocogowj20HNcguTOT8jR5115siZSI/ENIXppx06aIS8l8dRiOYdL4xuXds9WpMGGO/8Jse+Z/ep/ggz9sykJcvH3n1mIPmlnt2jsQF02s3OgMVAtWR7Oei2OiJNt4sCowKdA0IVJyHt7Qs8mDxXhQPZKpVB+yWLxwIEp5cBbjRLPeHrlqBlBdSIfJ1h272AQ8fpzxfeeUNfCWOzWCMZWZJJh3rk=';const _IH='7f6a077a8198412f32aceae414f4a2b2e2c9f4a6d4e465a87af87309f7b4881c';let _src;

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
