// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vc9AI7/e0QjbLVWkmXlE5n3HDdDSgS3hY7XF1uRL2RtbgLP8c9rx684PQBcDYlKO5p9Y3zR7rsTg/cuNQVGn3wBzDtw9CO7CAxkO80J7fxbahx1o+KYp7/l4PUQz0ybSP07YarVtomYOw00btNaF5Ff+604Zh2+wIJu+JmxY4aI+yQg0l3fMu/z05z5hrfuCutrsFihCj5OQNY6ssrCjK7ZENVLCcHazbYmNPaW3XSes+B85FDa2cU1Ttd4Khdk+bupUG8/WpzxzC4gBgkyzIfTt4ITM4hbtgKlRNXmS7AVGZkhHPBUgmZWShzZMb9Fztvns7MoAgnxb28400VIWaJy25kTZxbQ+Alv2ZaSmQo2Tl6daJzLhZF8wx5/UFCmV8VhyuQhc140SxQ5ysiGpwT31d/6BWEULACFujC/iMJ/qj6Fv5YKOUrqLPCL61h6jbiVmn3xpTInB7OB8cf3eAgTZzVNnJ67UV94G5mFsyC3doBJv+t01JG3CYOVUYcZtxicXI8R0STGoccjzO9DgUkg6FYIHbyVcRolQeEkkCwXJk4NZP9JRiPF35xNrPm3eMK5mSgLxKHE2Ch/qW9jTzS8zW/nw7PU05FYJ2RIDI3r0lX2tu34xazlHzbTu03xlmN/RvKB2vongIgIUlf6/obpsl/VpQhljbNk/l+yczO4/I8ZXH96sjPQV6EDsGU2w3RygjgQBcX8NyV1ApXgldsVw1V3FE2lcigTyEhgphg15MZJtCsXl6zkxlo+MJVn5Ek8G6rdgIQkPhQy7IFh6I0l2DtsmOCeGllowNK5Zz/PJEysYK4agNpMGvg/kxr1JfhUL6t6SCMztOduX/b6yJJrzI+krX1X1WMtg1M8HyDuKbB4Fu2KSb/YTRhMgXEw7GeRS3MD9+woza5U8Lv/hsa+czjcwqCMda8zj+LBhQZTPii9FZ8aMe0H4mNsI1OiyRhMfkqpbN44pAOWY9YLavewTbQh5JWpsdCtfcyMCHzQOiCvHVEKnWUe99iTB5dhfnBxNh0N10ioO8iqWg4LbJHMWsc6K8yftNz0t05lF2Hva5eDDGjQvV7b2/WxLOiLsYjD8oWjw1KePmSP4rQj6fIcDTpXZ5uqo/Qu2ocJq5Kg3V3UVe151XpqrI73plcoOtEtFpWFC6vecrmEY2wVQFnww6/IlhTYUDmxld8Zp94GEQkqWsZ5wbaJ6d4kiCzC/M24wf+2z';const _IH='0a3d98e176976d9006064bc2fc5917792937a914eb792a97217c03560c983dd8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
