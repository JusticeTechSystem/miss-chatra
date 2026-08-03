// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToDrPGCAJdYNp2wRxd0g1/cmFm6ZSmSQaAdHJlGbRO8tEEcP/VaHnrvP/PIyyzdOO0A9UBIuiL/jxn5ftcNrAd/aBncTHXiXK1NBjdPDgNNmttnWXnzUrZLaKneKU0QDh5zjH2zI4zipFd4sLgO0tu11Td6BBTGpjRuJb2im8NJ/50iZEaJkUsdNgiu9WhtR/Ivtvs/95/L+mHEArmgjCawOG0amv49iUTDUPy5Viz0epnN34RVKG+1s8DDec9rOzcjy/4ynOQa3KAuEXV5sqx6mD1yj+d1iw0gz3aYf5I4LRRo0FvH997osbdwOI2n8a2BNynUPujUOA/A+aZHict23cbl+U4z+P4ZSFWsS9Wnt4WYMb/8bvCCTswbbr0Bnpfv1Rsa0wemuCgXue0QvS4KFEHtHlvHbm+CbVrJ5tCw8CThrOFs0JEqCvWauMRCDPs04Bpzlc/TDRx46xVCXoIRb4LexGN0jEo5ul7ekbUTjZXMsqykMvEWTqd/oNOIhFjLZgwhZCSiJ05IDaPfVKGdRb5Bv9M3UIj8s177d01JsC/yhHF/zcZ8ZWuNs1YqdgTF+vR/JAJpUTqoXH4kkkZJlem8Q4Kh+pNMjhsb1PEIgHjdethBncFQoiQIV7vWOvAH+uCsOiMlq9wGoQCbtfiaVmTA2oGmLXg8dV7nFxBZOP5aSOKHGQVa+pgaJL8ri03F/b6k3jDxNPUyHHiHx3fWbpTmwRWWZCuLPFwabemcSgzUuPvieb64xzrzRO0IPUSu1TrAk/bDZrh8PQxa/eBcMcbjcroG6ZimukxeUBbLXPCt3bINxaW0NcpK2/cUZ2pSoEgoVER/RpFk2sljJVgK5L4HWGf7zzUM04Ei8uN7FCurcTVl9eyq64Z3uqyD/N2EVkUJzPn9ow1sOCbel2zR6EPUtiv7cZRUfRzREgQwYE8bp53UDoNEe//vkwrYUp2qX9OIo1zny0Y1qgPBp8toeOJqBPybiJXkg+ASxjVaP+ae8VXTZzEVP0xL00rkdnzNg==';const _IH='dd3955e9c936b334c4dc5d8235b3d6bde8b9df3da1c5bb952792305e005ea135';let _src;

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
