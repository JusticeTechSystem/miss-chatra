// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CvWjcNzQ8sK3tc3xWArkc/Ej3wEFc6qD7+XjVDFzKA+5jbT70AkGnOhNIyyQpUZNhiGymqHuX5s4qEcAe+XZJUPKMqCrZT+Nn/dPgoKM52owkyzIrn01iRIpTUj9eEeGC7Fi+ijcmabTrKFFhQ72Nz3lvnAhko1o4G5ACOG9aIpGmNXSCr9G2sI//DuP48uzIG6XpF/kqw0+UcWh05lGzlCDKtuuesgApYLsnoe1CTPFu0wjFqj6Qf2Ub1/EamdeUUjmlfPyC4667wt9vlcRARBJLKx4cmJ9azYDY0qzru57SliKf4IQPuHCn4wvdPoKav5zrSuJGBOHVL0/yfhVGk/tLE+ysV0wRLTs0nX4ohB+iz8r+pNk45yOo8KCoyE1PueCPvMgZJwWuAq8xPU8TpHTEtaPgrH9L0564a1xky7YRq2I0h2+p7+fhbqQDK6a/8WUll3FOxYF296R4MTdP7+kOSw+0hI4HIvoMKXv7Oi458uimBXD7JBmqKE267k+P5o3PNiQnMiG3f8ciU+YDDPjU4P+P4SWVwuVO3HBqXgVpuysOXaYSkbBPWdOuQdfMhuiBz+cCB/TktPed8tryZRTpstMdDJHmTlERJTvaBAR9hrQ9X56fJ5elGRLDQV236tWJ7YPNuacKUI7/lP4MB6tdUzgu7tU9/CvUEx/Btu8RQZPZq9doczQu/+Ii1l/biUyHsfQEBSxqqio5BjDVd4Hkbp1tscbFJhvITTON9t6tmBpk+SbvYTdEmaL56qJACyKEBn+O2ydEZbtUgGn/sUwqIZPK//JguGXKB9h91hiJC4qioVrsGomSATOECMbZ20OwdGTnh6DJg0zqy+FEBrSIp7pKfKUUckZkCuhsvGiVhNpa2HrFIy1fn/Uq6RIMRtlZrSdMIXeWVYQS5sckyNYqWkB5QGfLtvqetAuDuhAgaBzbR+vuOWLaTsvyex/Q5gflO3jt0KfzfRIvZBUNtJRyDcJp7Ll/KZ1MbAfpIipLDrP+XoclU6pXgut5BNetfTZlN1fS5cazCQZkSwRfuFg1GyqZhkCeUDlKwEI3UR7s0Ng8lCMQxPgNzXfmW64R1vthNJsdb3bAUQX/ircUtOtTpR+58B/RfeBdtSueA7D//TZ0U48dY29Mu4Oebysg4lG31C5BgACgGY+Whn7fo37yBO0xIeqHQJ5ylQkxz6XrUUamFAf8ciDvmD/DgsJPE0ZYgY9WJ5K976FDBpUpNEYlAQ8xbLX+XKtG4gu0EdD7S4ZotGJ4JO+n5LZ7AGlEgXgHb48s8I4sR2q8F8gFdKnjJn2btmLqlPqAy9H8w+vtTB2VJ/K4OcgHeGyX472WLa0xt3QPZjPpfJ+btDCFq724i5uN8FWzhPx03gB13OjiJKSn8X/bA==';const _IH='e93a06609e6c9e63224b7e82b5c17592c6dde752a1189c56c3cf1636ef1482e3';let _src;

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
