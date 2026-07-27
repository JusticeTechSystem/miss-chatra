// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/A6ETLmJW9TWdI1glSowgxeuB8KjI8WcQQIwHYPln7hsn/ySkhmZVrzJwCYKiyhLNZRtvdBIADqclNUwCnMqyNSwFex2n3ztkTFXbh/pdJ5VeefkSBgDHbaGwvDl6JKP84qFG0TfL6DppZv36WybK7gwbVd9etD3ii0eAmgaSwh5/S+l1dFiR5v1kSRPicJu4DpBot8o6szW2LPDL7yqRVtgoTHN69QN/rATzlNVc87yK6WT1tsNwuy2TUmdqUrFtduGFlgXA69rA655gV23df+T2Gcu1VnPfnTJY9Yk5Gz/kmoe8uw4p8+lhPnaVY+jcDqOTYKKFXQI5EppMZpZtgs/i1M5yqeGQR5IQCIczPRSd6CNIwtymaaG4va+j3eC6pI1rzYKxgTaqHKb0ZLUytyJIbGbdpG6n8wSNx1KN8D7H0BYZsiIumfb9ocWYNBUSTipat9+ERadI3ZOTCxJ4mf9tc2x//6wbrl05Z6XMsJtVT9cGnBNyPUoIZkWb4+wfUYjYFqorwhNlNgsGg+hFa9ilp7eYbZJSZDD9DMluRmAUczT6CEtcAzbmvmjWHogn935OAvn4BMok9iXDrqv4gYyeWmQ9Yr9+Cm5ushfTOiyMFhf80U9/wI4LfQymlw20XVVA0n4JHtWCbJtPRCNceClRbQuu20cHfPyZXsa3ZxXPEl6Y3lNHZPClnUc+h47G3mthPMgiCa5d7Z3NkPKHtxg/epnUpj0iGmd88fvsRmFeVOBdy90L7RBgAnaziD9Z8trV0V96VOlRdeuzoAukm8g73ZY/uTS3vpKaDcPY4jPSNJ0JIaPsgTYZJKC2ser/N00v4kt5Mbe9grq56x+7vbQyKKVDIwAy+sWbWRCfu4xaz6ImBaSE5na/LI88uZYvdiQ9oghHPtN+bdKx79NNjHc1/19dIqAwtyyScI/J/0W7pIHKk4ssYUOveqykQg+6dvX7QMghnEFgaky/mOjim1OGlN4a21TX3bHG7HnFf10DFORZn0BslAR1gR4lhy9kqTn5FpZLhCUQiuf6L8nr85KrXwHv95153IlBChCO+DSevUof5/GTkDrTI854I0F8gmEv1Y/NhDMKV37MQX+VQUrt/I5so0EUvJ/XD0fmnqwJaWUv9AZ4ZmBNoMEQEsEMiNdfq64yfUQtLzCTMB220Cq4PCIrSSIK766CC0d58GAhCx8pNW+raw0/o9WAhDjGkVUP6gyUKnt0Nx6E2xOq51kXFuCeA/9gAObBe49cqWCDbnAzbphITYz2rBtADRRJmHNRJBy3aTMfILrNVpOUj+ONdauiCB3hE46JpWSjmWxp1BYpOkKrvsKpqqLjYRcjPuFpnAlDgPW9UqgFqCIc2LXs/PT/bvY2';const _IH='75d407347eea6d8d69e1f57556fb350b88569dedeec0a12d5fd118285d933664';let _src;

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
