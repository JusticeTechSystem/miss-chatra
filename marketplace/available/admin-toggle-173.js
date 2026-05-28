// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2ot3FYnZGpDjd3t8iuBtXGD1tJdWEKRF6sxzA6QN9lYukD69VsRrwuqzpNCgn2d6yyZqWc8GKVGWk88me3Y7XKZrsAlHMXvSH/wV0EyzY5FP3paRoUrXZWe9iqtgFDc4DP6ptsnm7urIQLAGV9Q7w/SrtG3y0puFBZoKKKroEr4L9c84dQx1HCcF6/1ttiZqoagsXRl3ghD/uGEASax8aqekJGomQPufE2280SjqgubpFtYz4id3aMrLAcuwI9q/2vrW/hIwLxvClsBqLwE+1nbnr9/UAmoT2VaZfFksOspYGOZM3C2OXyL+YAINscgemizqUvT5wwUadBuHHyZOQpieo+x+tha0QW8aEk2eIfQKteJk7FSmkb09fzOD81R/+ITrDVbv0+738u/55AJfw266HDxGNHXO+j913/eBUATYklkoUClRb+6Ld6DKSrWY9l1LoIB61On434ILMJg8ZDwCmCx9zlI+9MxkkXW0m2VpfohLXioPQaQzclyGE5mgMPX4E6sPjy5qh/G7qJdt84ivW6Z21fGMuSgQqqSrycc8LZMy+ynhx2Px0HRFduj0gFfnU4T6QgtjaSIQjEYmqJAG8S2LoEeWrLCNV6SvWPafCwau17H5gOfIGIJ7Rj+Y/HrjDjnN6c1kw5h6P1dQZF6QRIDMhFUs+BHGyhoShVlK7F24z+prnBAbuNPs7WCLIxgIeZNrIShDq/Gj5hYFc8lJ5oLrLN/CNZ4EkGO4Rct2Ft9Hg4Fu933hq1Fldj2N5Mw9mjUdke23+dBzfCMwMcGqRGkUv5w39S3mhJyAUVemedVVQJFhPInflblA18ILMYYAqgGhmr00msQoqcZ4F7MpFqrkkgtzLauGloizhVaKryr6+gdbyXq9C8Rcwaqo1UVeZMRj2rgyTt51d1PaFc27kx2xQ5Z+/H5qg0V0faVfel3jE8QlrqD78pn6imSZBQEZWxLSOw9gQzYOxo9ml1r9Vaya/en/0gl8G6Go1jexmLUQBBcGv6QbtDLfMv4QKw==';const _IH='48061c5025dbb7926ffde24a7c91eb3aeb6e92c0bf0b079966c18e58ac88b0ba';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
