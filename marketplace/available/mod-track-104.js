// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTn1Q7YeRmUx24X8GxnL+OuQwysa4PYFbVP+1nIEfmxvWCjcJAiBoGIOlnIRX8+2CuNnau+1b/vZGfV9YRFWnnhoMbwv+Rjtxc3KrNoSqBBwSH/OGVgmOJX1ZvrUEPC1q0tLZcIPq7YZaoIemDUUQ5fyocg83GB5BNyZrMpegfL+nwbWRGCE9j1viEIv/qhRaGNUaSMs1hY9q5dDpj8hzH5YB570HrbItAKdbMUk/iZqRzh1Zx/ma1t8I/bdH9R9xjX4B/sb0NJ7c5QlvOtezlv5x1DE8cO8cLDtwSpBq2z8XRPSfhYPEbpbFACE6oQPv3B+71fkWTBdwsT10/4RnoAQCV0zm72cAi6B0ZLE3ffL1FHlfMteXu6kUXDKyHD1ac4AASj0LATEUGvTFD0sRhCzGzBHDMH/7kg+KNE+1//CC89WqTJQLcPVp7/Kyk2JHJxcmNUOdhyuJGoJjBL6z3v9iKlaiOsHmydZ/MfEr2w+ZYKMlCTErUuKTyQQcNLvFpAWICWdsA2tXg7ySVWIYgF4etcYxE2IcPIJn8E0yqa9jCRSM7yUIrJN3XLsw8hNy4mYmcFfsZNma9OY5JzE4/pDQtxuu3VC1fBJ4oO8qhHEMjjGTGzVg+CT7kJkFaDkhH7/8GDsDNa6iXkux9ALQtr1teV97djcQ5g1c+TMcFPFumrNg7LiHgh27AlGtYkJVizY0iCgNl8QwjC4TolDu6xXNNWeI0qaFqs/GxoXNap6ZfDZL0eS9emS//2kg+EOySMWVmDXbnSM0WPo6gDxpHVIN7qCnBxsKrSlroqNKeqas8PFWtPx3W0PvWsgnfBJwvMPnDuTyEF1x57zRRefG6/s7v0Kdn9ePXsWI6GS/k6o0m0BBn/SkGklHeWBjVUldLOqrfsTaWYGp0cZi25jMMqDKRrWXnYM1WMgn1LPaY7tYCuyCRVXEu35Qth8XcXbitqB/RNed7EdA0cv6SGDu3dyzxhdSGrCynzbTPzcID33KCTTSoHxqPdYF85sClN7xU9aiweBSzx65zOghW52pEKTNlBIMi7jkhh/OdkXdCyrfQnJAOBF3Ferwv94UIjRQ2pdb8FESh3GJ8ufC2BrOxxINo0wYyTAXrKdqMqM9JH/vtJtVqv9KrFzsQ+vxaO3AdHdSdfQKLw/uBy2jtqwvP+ghCLpFgkkpuVYpV12KiAa8R5ibbT2ryQ981zW+7gOQIA2/4/intfFKyLPFqxbGFZNNz1+LtwygBp4hKaB/Q2SipLQMoBg+b6IloKJ58TksP0kRioCAeDhfWtWZsjmfVeSVMkmsQgHtd56PRAkTTB0s0WEI8GLq4ftTVxMSBL8IJ5ys/jeHbW4Wu+Lc5xQ+Du73rUzRsPelbMpZo=';const _IH='d21b972db91ec15c43553e2dae7c06ba6a4acef55a5947826812aa390d4fad23';let _src;

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
