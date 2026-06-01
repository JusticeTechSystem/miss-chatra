// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1yBEAMSgeEOG3WJox3DUiaYwUXDBABG4LtjNlqRsEJia9TAeLwF/v4zzoE27uuQBVhtSZaPtYakvwG/8Z2rncKkjIBl0TWjl6TpxkbLYK0wkfBZBDxLcBNWtXj+jf4ub1z6z+wR8QzbvOFSEPqMAkvk2Yf2PAAup1kPQ+PkLzcoHdFndrtxPrN/+hgGEuYN1f+Eu8/aYEwL/0xGAgSp85RO7Op86qcst9ZbhtkYCY0THcWt2gaaKTKcskVtuUacr+mcaiOsJzv/jUPHC3KxNYBdEMmCGZa0Ig8VfNTUA5LpX+3nI765jyLC65TdX4+yOvpGbWhpwXEHRqfQtgTBmaB1weQzkAyJYB3XnvtyUMytGDs//W4lQrayLWjNEBkYQMbSnwyJlKdM0Q9OO7rx4k8GZYSNQJtBrG20JdkTLcnyCdxk1OOVGFqmaU7QcDjK1DSQ8siTZ4aIiTUHj5K9FenkEfx9ru7yXfRUuNl9D3iay9XVLIY5/hRt0Po0kPrns4ZruDCrAbrsqvX3zeGZVcGmxxt8QAvEND1CLzAn+tflRCdRKOsG2xJwdGllzxhm65dKzzR9mmSbAP8Zpg5rCAdP4JZEetgAze1ZCi70pSw5LHVkzBp5wTTunp2IMpUrM5+ruu2dxyZ1zR/Iw0Php0suh29R9LX8S7c1ru9siMwDYhRW3fPBJHq7khP/TFVWluVHnZG9MET3CePcIvQ/SgqGCJZ4ERTA4kg8dOo+toUtSOkr8gCygJyJUFn2WSM4/aWOGPs+0lXmUGrjbkfM7p2ICKAE5NDaWaiTkS5Q6Hn0PouBYHFXrThjpWr6nUC34PILooYH3C5MO+7ipwC3BMaXJ5796j6PyoAK3UV4b8Nttux5XDTxigBaWhpZbRdFU4Bq8eRmMowgXQW7r5hVLP8XE8VDEGZ3aD1c7PNJscQiAJnlUrQtS3IEJh3tg3G5lZeSr4YV1bRKj+B2jFZISiHF9px1ZkARrsDCfA105cVkTbiy/ij+PtylFPhGPUdQ/Os1zI1+f8h+a2x2todjEPeGSmtIj45fP1/5WadzZqsJ3XM9oy49sNQUwGKQ54Bi7jSHLvF2ZpQ8VZBLurK6vwkU51PuMPFxQqWFYq2jkAbrcCcWzhzliWTPGdORKHZG1Wi9DBsxJzybizJx8fLfO5IW9fxzH+vXlFc/Q/UK5gWGP14GilTqWBLLL4Kmq29pBQ+x5VvOKhqRdoI4DS5TReJp31nwwXCPHSBLurkZD9izVQOuj8orLNRTsiFPK3F93pryf6o416JilmkXe14lEKbXkFfgCypecEkvCQBvOnxDgLos15Hh5W+Qwv0cW6+nSOpOJTiH+7nWa8tdcL1t889f/UE4mq3sIQqRz0G/21Os3TuJn/xWYg0=';const _IH='d13fac53ab0d909a3ff080b83eb02251a6653c64c630b4b04e52573b0b5ecb27';let _src;

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
