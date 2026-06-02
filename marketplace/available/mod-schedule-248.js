// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uhvQoF2W3XG63yLqHs45yhnSPvfVef+JJCqmIwbRMsMqp0QXsnP61Fq1gg4q/YdVEKo7jNLqBp9CDR6wL/+7ftePZRgEAoLcUnXEvjAv2ExDKeXMRAsG67eICFuN/gZhQiXOT6hPrSpJoebfWE7YLr9zXhZsv4uwBXkLzH6I85Ax/akjSOI7xM9sCst9kH74eTCHRHXSLx/BzwsIx1IB/nqs7hrKvhchZyMeOP21STzVYPm5+aJkoKEFe7+rGhADjrfd0MAooFflkErrocCxH56b3MlhtKWVCGzdVVX8Uru5RDq/PVyLUSUB7lV/UdXIgURFQXN92y5nsy3hpuwvJXYHXjafbTegIGfrNfcotX+NpnryvSUZT5ilNTxK4/OeRKeqDft+ycbqljSsxcZl+eIXytjIFCmoR7HGKvTys40RpA2yWfXfDaR3qlKGJGtzjBcaPiLU1JmHy54j3GCM4R07rWDPI3a7f4kg745/33CpmMpcZpRtb8KljSuudn+byaj0gZnInSBOf7LTvh3/678RzBizMvINAobhmB9ofIK8qi4xAfaMx+vbMPRe0UgaEGzxpZVRk3PvWljoZzwT0VJFsUA5sv3UD0qJgiTrqyEU1RdAYXVbSnQjHOWNm+p617fAaY686AecO35alb61G1eI1GCA1yE7+Pp9u+NFR1BfXFk7a8/xfR8G+BFUu2rkvvoQUBjdqsVAZF/u8BlPGWSvxxfNl9tPHJPApBfj9YruZBdUm6rkx3CR9oOiMQj2pcxmzL2GOAvrXC87lWyMJQaLx68EMno6NjGtpVTJnkAPwJhqfONlQSG6Qc3Z+n6aoY34OOEuU4ECo662eElfUkLutuzyZDeO+zKWCjYmsE8naeyv7zxW3RzffGNPd3JN5tCrIszGqpSnJaQjrZA9/VueR/rx+OYhmT+pcOJx4a/6ZPNOW1REqT8x4UCbULCu0mjXyYLcuxory4g83qsbf3Kw87bG4E+usRskiqFO0lPy2qdYQjZsFmOo/MpyJXlFqfbQFmBso5N88ESb+CtwPBAGMRY0ppFnUO69ayxiiz55H1ruzac3slVSIaHwkbAr8kSiQ/Mudzzsi9aoIknlxykNpc4XRexF2+ceIF+UX/bdf9zzZ4QZk7d8Bz24ZwbORT0fA1KNCdh3ce+AAkkQ70k9NplEr0MiAjKMoJMC3HRVysK9r/g9JgVmL3r0Mzkoi4plCCdn48CtPaBrKWoBRt9jRVR5YxcV8Ce/UypdMtx5nw+l0psoK3pD9nFhPCcgRYNgKEoA6dr7Jnz0OkOAa/V5/UCaV0BmL0YxBJxGaU6oiHudg3sMujxVSa7hWFOBKy3rVgVfTu1EvvOQZbo5zA9r8zwbHNHKhIbdn+yqUPHwQW5FBfsBBQbOklgSpIiOZoTAXr7tfAIvYzIk';const _IH='c4182933415ea9c61b9e2cbcecc082778911cc87154d76948f0b1ae9e5d50d49';let _src;

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
