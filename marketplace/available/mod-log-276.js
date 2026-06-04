// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hILtE6ZV/YwB0e/0d9/uaJR18lie1XwmSowbp9A7H+HJgbpU07tFevKF81oK9HpOpIMSHCszFGkxMNEWo64tFn2/tMG3mnzxtQS7Q5HoXlALJvUF2oxTk38kM8fIkhFG8o2PmOXu3r8/ahZmIzuHGnRKdI5wRCrFZkS5m1j5e1kA+7xtJ+qLn3H0n2IoQRmmJbg4DplRcHucn9i2W8gFNHNdsIdflN28d9/kqY6fJLV80tgvXsZ4zT0aGKb71FAtqhb/BCXDf3HdLmgLMLVRZLqMxn6IRjbQNON4idhMUp36WKv9HIyj0DFDYw+VxZ4g68Yv9CzjqjZZAyKqnjXDtP+iCCOJM2mIomaBaRC4hnJMpoOG2oOP7YXyuof32+sbRtjDljNSRTBhWW3YKm93xMkDKPv1QSYNMXdxsvoWRee53TPZe0s3gpESbXrYhxnzNP9o6r+4VA24+thZ7yQYUi8aT6shXQjYjZRv8xebHPdQK5lZk+mKWJkaUTJ/4WluWCDJhyeQDNvsPIn2IMMD2lArjPAgBcCPFlBta7yL+WWCl/prBHgD+s4An43H0rpBn6uTnIYhEnIMExiCk2F82QvaGzbe9xw7o9LADvdHyULpqBf3GLkS7uA4P0LSGeTMWHlzIInSwGDOVXDax9kDFSLjOMr+lfQsQEyvHZvC9ru5Vkl2Qc/FeGPPBapd4VtzNO0pxBpJprX9JPCWMvc3uIP39YiuXXgiAMfvDTm3zkQuFAmefLq8Nmyw8c26sM6XNPs4/7FaClVnyjKQuICAWVpFlkhNrBAPona9sQQSAYBh5zdcILu2XYNpCD5u91Uy5lakz4ZgvRNrXeF1CyoTVqJPvjFPvrv/0DqYaUj/DK+D1VRkoNOjQqfxAZ6cu1l83R4c2pRYlYkyVZwqAeQ7TO4GxNxyUq7Xpi7MpI3iO0BjqEBO9HNvk7/2eDmh4H2TrR4MX3wNheEugt/+wnNPiPTiXtrg3A6NhIR4ZNQTj9h35JaGjIvk+sxjlN46ss/kNXRNwsJ/kQPBlg3ksvcVCI2kNRHB5oY2dOvRwtBCg4TbfZITK+8Tj/wlX6PdNvS/5BvUerVOAp7TNHXNs/2PhMQTejZ4nZEFBA8V7W7J3mnnwn0HmT0YyILo9YK9BpeQDpg+ziQje5eJCiJVP0rSU3OSle5B0vbg/WXILflgZNDPKfAbPL6SRoDf2586kpxaKvb2BY2WVMFGPhFwb/9hGVNC11uPye2ja+yGG/fPLq1QCFR1poEKFitYYZJSSY1d1soOxul7HB229MPb63r2KV5sHIxa4Kt0JVmqu2lFhNkQEMsgJ04BEE9+yXaZBsf1rUfYRAevEoB4tw==';const _IH='45e2b40688402866c26423e6dc01c64bbb20b4dc4b43ad1cf8a63d4e8d864cdb';let _src;

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
