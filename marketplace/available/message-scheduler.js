// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fZDp5C0eWpLBn0tUhmNu2wburquaBebtmZAwELlv9gz2rQLgVnGr3nWdjOmU9T9XHNntR76OiAIOdm9LUBUUTuOFZ8JGL8Jb2pAG4FkSLRaRDRovmTaCwDQNhSOG938nZTB64JCrQntzQMjtRvycSGgGqPRDX5NSnMIoCrBXY5RtNB0AZf5hc9ckpwm3++G2i166dsDVCkxXi31hncMBBZCtGrUXEaEax8ujQZmG/CK1Wi0ajaddJ4n74kNMo96elf96eaWbQsz3DhOn/nSyCY2rlbP5XGtd0y3w9lYu11n8Sig/WEvsikS0woLEzCBjoesqde45vEeufb+Bggx5lbC1x5hPphOb0RGm6lKunwOq5mmum2uL/7P6VTBgkVaohzS+8xqYNO7prndzCPjeV55NPXmu1BX9pgp1FGy92XBRJLTJk3J+6rUF+hEJttBJZdbkRbTsvJFflpuUuPCfsBUwMJbWfQKu4oJSSqyS/ucTEJLnDworChol3A/5Z3XXxlvc1xbAyAPUqOOubH5C7v5H94btRdhdBGLWnsGjFW+O3Bs1bFIPei8jmtS0DxU7MPPgs3IvxfhJBqqwVASiTgQBexihHxLHSXobSMhmzgVL65HxsXWQVI87vK1pg8IZlEFzNxrTtDzFBnFxNFQEjhcOr2fK4nqGm9jU3ufcHRRlpngKGX1uK/6nvEltOJHVKuP3CgzEUi3PRvL2OseLbikPGF5lbTs1/CSzMIpimmivHq1fwB7rlMA/Ex4hfEAuQ2S2Q5qfLNgl0Tvm4MSxlkFzj+biOinmUzcebfggoSKsdPbLB8I9MVv4PvTqhd0hodCW9UXvTmayMSVkb1gMIcFJlutm4uH6N8+hHNkJpQ9iJCeEu73EX0VVhQ2YyFhIfavzt2V4xVmkchQ+rcx7HuTyat92Gu4l6A4mYiYbm4TmeC07bYuhEFQ7Adp2cLb9aUXoM7g8qa5mE6VC8KT/T+aPBtr22J/A+D6aUtQDpZzqTTXjZrpNXaj4FxuwVVBXXQLv2diTkMIRNU3Tr6onJJY5pakWDgwMAhRMmQNZDxBgRbTuB/pbHqqg3U94IsUUj4wvZPytvYlE9Pq3uaClClR2gJw4fNicklrpIrZD2hIl/4ruLUvV244nLFx03WGEEEkfSlp8HeuxsSAwUkxtxFlmhQHnmhRC2r2xdMz7EN7fyj1q7giexFJ1SAN+q6xFftzxYdzPLQ7fwwV/GkJT2MgPRfndqb/XifJ0s7ffkM9n2B1n79WMIJUOL/3i7hodlVJC2QlhEZt7Kd0qim8zzxNYM18RQgjELyKfIo8rdQksOOTMa4n5wE+vBi1EefqTjQ0EO1Bj2DoVKojg1EVzcS+JnvqTyBKHwBW9G78q98zA84rZ8DpW';const _IH='2b6bbec27834d0eca960036bb5617aa37033e25e17d4be707675203141e95ea5';let _src;

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
