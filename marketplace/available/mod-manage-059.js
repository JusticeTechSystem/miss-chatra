// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKC4EbwNXjZXYMD8640X4n60eBLrPL8tKoxscY/wyf57gY/j5JIgUl5JrEDAtPdpZN+TnygqSbBDn2jZQczeROZpo3RznwXnwBYA+aAm32fj3V2kBRljVpgrQa3MB4QNJPkPblN+9+Icswf4/Zwpgr2SDm5syWS7orxKW23KoL/qZdMoJyG3LfIYdjAVzbb0nB1agUsPdQ4AAPfBmPwzfNgtC+lXx+kqkT7+ZbMfbsDOSzOAyM5KhDyyEPRuQLMTvLG5S2cv9uqKGZuXslFlvvC+/7KXf88wTIqe75Xz9+Xb+vaB0hgH+iVldYdAt2wYbIdA3im/tl2orSymv4E1O6Pg3TBM1+Hait+lVwS6XRocmH9rsG6cTpu+nL5p37gEIFdUMxgj0bELKJ3CNWM4818aeqZSsAak1uguURl/63icKiq6mhaJhUgSPFIDx3X7RCvvv580rLiTbtV7uhVmUPhewIojOA+ppYkc0Zc2iMWZLkkFsfCC9ZrPDhw+PYmhsbQ0gxvZIrJuSSrNK5Xcc6+nMhD7YEezOlCHYX1jVSG6jwFG8hC5+7GD0+U7P6wAn2cWhKMJh6GBmNVE34Iu0Sfm9/SZ4mzcjNV/sJ668ypb8p5nuFNMbaAklCgoqGUJheJaqDddS2UqXX7UR/r5V5ClYGoNi+fVCO6GS4nkceJC41EN4IpOtCk2d7LmAsNzNt2yx30+7met7LqBG13yiRqnFSBfBGp9uwPmxUaxyyWFNkjzS2mcwzS6Y6FHQTcEW4gGP4woF0cAUhxPxjSj7RtyiJsk6xCMFgOEQ6H4ssPRe104JXGdgiqoal3S4MRQdBafpzoTluSm7j2a0Nt5tvWiMLBcNBV7n+J4IwxgNTvxjVblUGwCkc2sZG9Ra5tpGGFMFlg8MgCvYKAed92Cj+Qa/0eE7Mo1GY541yfXBsWUU77pzWGHKZ8lTZN9ov5BOp7MDm37hqlmwv686EZlNjVCA+hfLMfp26WfUYsRGzXv0Y1qsvWsvR3Ud9DtHbrfipBJQvPzjC1gtbjAGrgvEpfScGTDMcaL0C74g0tnr66RMAOhEshKWuiV1zDcPYet1TJ8F72tmntU5dZ9Wp8P3lC94CztXzAyzIRHgDf9Z0PwctSvWl/JZUmANF7SANyeptYsst4gqPm7bj18dK0rAZ2proTCydFYGE1SYwhnPqRmkvruSjgUffIz54MaHb27VXUP7xEKSYyomdp+r0yRwe859S6zbnRLOB6XCgbbFTZsKbufJKciHppJ2Jnzx0Mko4+zJcCSy/hIYStbdY25lkn/umnGr3XFjPFF7WgAACNIE9WxuxsFAoPdp2k8k94AIYs47ewY575DPURknyAMzg6/by+gpchJQOYkoZLJPo6lBcCQ==';const _IH='42ef935ebb62f30af31627a1ac1600b69d74c14fa572db4586e6d0c8a4971b01';let _src;

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
