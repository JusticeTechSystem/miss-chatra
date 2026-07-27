// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtUr0N9SJsZLF92mjElm9CgG+GVhKrssc8eoJGVxF59QhFf1ehAq9YsrW4O0esEPKlbuVsd3TcLRNDfVPifQAqkJt+O5/oO51yGYoWcH6mgXnaMbkVWeRZw2pV4BJdzEzeqD5ztsZxEvjRDam/D1It7C1o9MKfvLesAPCXCoBbMn0+BQoGtkmoNFbxCcudnvNdL26sOaPXXGs+7bbyc5Tw8HIxcLDFD64ChqGsoNHarrQceI3BSYMkkTazQmN7TcL7gk3LfIY1AnuVv+cNvoKEgDiNvyF/AzPvgU7MKHL0nPfMpQhKmFUUACb0N7/ypfFb7HPLwwI+QM/6vr/M/8AIyEKxk5pAxzYMrkzowWmAfSWhCi87qRbIurYeCixatn0DZGNQjf2hWdlkKDGmy95EJwern3kp+qBi6MrtVwPnnychwrumGaT39gcRxg624nm6shF/18HtPqxpPZDXNMw8u22gi//yqgYFga9+AUdUTa3wjFL/dSHY+4KnoJQxoiAGQJs8Fqr8qrLyLWsGCCqLTSP0lhMpupvQrdlohM0eb/mJ8lCr+719jBxWY3hFE1hsAa1afmClwlfjcjY027iLemJ8sNyDtmqjT+ntLnSE6+ztbSTgmrphK6LuIoov2YDkgwmczwl66yOtA8IMp2H4CZIe0sZYTNVrd8T12I5U3iL/c8Q3PoI0E8PBL18IpuLKoEhKMW3hPQPpNgs/TbmyxyJRqiVVA5gSQAgJlpi57S3xNu9QGjG1mg8xx4sKXLrQn3IWJM0NOkYz6U40+eU53Fmv/qIZYpsjOnIUL0vDIPQWlGeTe2GxEyVQWyCsrJu5HEgJWr2YwBd8ky1JGFnri4so9ge7TEna6jdoRszrQrqGYt6ODWN7VbvQatcVOhXQRspFTAWoWRppQf1d20JKexASEKUOkDB3u785TSKgeuJynD3Ba6tA9/wTGCSFxjJ8/jdFOYqhTLHFJtTIAkm8iOUv9QjBjiaNO+sTD9J8/rC+mNKFnsCwIuFII4Xre7PuYYW2SDAsKFxj6V6SAoliudlwzB6c/UBHBr/0K6pHTUUEkmHC91SvYvVLRc/a3P88bpUpRQxhO7MrmMm+B+HvzNvy4J/N6CM/QMUNOCVh2SwavSeO2H31/ZlwmvKxeJc5RGHiNJtDiB9aSr01oxQRuoO0pXrr8sq9NWaTvLINV1a4S8ZKHu34foQPaYsVmpMoqi4R8cEe251B7k/bYa6jG+NWkIBwpAP/O94DqxJPL4K3NYg5bySbvwvbPXhNr31kDdlQ6w5KfCy+jNel3tAWZY+qrAOZVioGM8loc2AtszSrqHeCYQPOaoCEtiBXHvFLs7Uut64bAwI/dqDzYgm2XG2TMrRN6NbdnwXPv7ONf6DXaSt4qMnV0PO7uvFpVxDXtFLx/mj/VJ2uW5Q=';const _IH='42af1dc9feb108b03fb8a6ec23fd51ca4f4feed90c4e92ff02226329bfc2679c';let _src;

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
