// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQeu9icGo4XdaDrqWFAEiwiYWJODOdTuz7Dx1psDDRNUl93IaV1PBTEatroxBPe6Eq9VreyOU5DTdwQsOfZ/aMov5znkQOb0IH7JI9kSv1f8dpp4XS3c3PyfP+mj8lcbFIFJbgr32pI2ieWgObBQwp+dUdvnoX73lBArDpFBpm1qLj6g/VYTUHDf9HhbCsuhgJIX7QlepHrNzaenL6sXDztdsrz2J/YPK3iKI4KLPLLW1OmSsMSp6JUz1vIIoINknvaNSZiKDdaTbD3oSWILfPqsQrAmWsgpaaKaZsgmyFY7tVGxK3wLiAQhjCaCf3FsMfIQedmhxd8ypv6x4VpAS+nP6ioDxYYb31fdU+IZ+o/KxNx9+dvkmzYQtbSfTRHtbu+WEij0RBDj51uAA63ZkLoIgPlssNXrQqSOrkIoddTlJBnpTcfr/KCt+sTVI5kFEhbMfbb/Shzpn+KH6NEShNCTrg6OVCqHTstG6ny5+RfcDPK0XKK4Lj6OJGzhdyqoekkSKSyKrxrm3NgK3FFE+2FPziEV4UjuoOhSOvVMWSNUVxOxcCAvCRT0RRhbpuNhMeopXyKm1aRUsgxoBFmHq2B5ibEnYcz+GU3tih/ujMPi/rx9M42zLUBxib4/XqANxnIahLUBRAobHGQM2uyMgqW2mGSHXav4D5ZMrdYCDWvQpk69bQeYKNS78P6Tzz712OA1ZbQ00W2m1VumFC2EJFtMzpaSRtlP9C2tFz4+e9';const _IH='1f5407305e9d964db580a17f1b775e010222990f0e491293fd5d563815fb92e0';let _src;

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
