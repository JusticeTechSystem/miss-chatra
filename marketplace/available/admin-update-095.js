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
  const _b64='J2/A7xJ39hGI8ppLtZY2yyNzo31kcBsaeY0nwtOLNwW+k7JPFnw+ZQcjFxUCmbONAIRTXrGfKW1Hr7yDq1XnU1oDAydzLhK04nc62JZJv1w7xGepOHV/fejUzK0rqyr4BjYb+LSRKh5PON4RLZhJUhCW5KdsoRCiTA++OZtD6PKERFPe7IvZDspg+KR8Y5N/3xTWXj5v3p3CYjD2B9QmCWy7OEe4Z0ZgumZFCIZqRuxOoYotdmN477HWISwLOBoBopH99wM5bJX4ngpK56djy8HVdTQe5g/Nnea2KYQycyOPb9icr1S8kSqZQ1vVIN7hdHtooG97x15JJnHcho+ithpHGbCJgrmMI68PyPBR/qHYnVpeR1i13qajBCymJaOglPlZ3vbaB6+x2vlTQUZ1TKkie1Jdygnn/CJq6CQ936O4frJKOzvYTEXmQrjheRvni8tdXlJAFmMCFMYcUOkcoW4MRnAlXE0o+9samSYJHqQhDnzAuGNVbgX+fQ2nRQr9SQvPF96R83jrh0Szpm5gKAvgKWpvZX7/HYYRYTmEfrc3Wpg7Y0c+JGVhXN+0Z0ZyGKvoSxcaD66TiNlW+87ykRhj3gLlJqmVYtkuDfL/9uaHCTztmGoJ2kCEkTAlQdQzDQ5cDAufuSEHKjqiN43qJ1OixewwfwLlt9D5wWh0U54lRcD34HYFTuDQtNENfuKJv2LrJydc1e3dN9E+h2/zg1ErR4Bh4BJCS94SCfL3UwaPBLI7jRCrBMQSAg/yo5HnVFTKTWhnaHjE4obv03fydmGYpWwhR74cfOCvGRpv29u3GRp86AEVMwQ45bLguq4dxOgQy/nUV8EI96gv0BVG+SNtBhhNpMDBV7T++ue/bChPPhq1y1vuQY7JnkBWbG9d5gTgxPF+VcJyOFsHXzwOgJ1h9CP8TMEOP03liZoBJ+0t+o330YfNTQiqI8ZuMvH4Omr2G8lt6FoXJw/GbgF+DSj+1bmjib1c+ERcUxHWNIQOrQzyhRwMMLTVnA9y';const _IH='a4eb78ae5c5db01eaa379306141970feca420e4062d393413852fada453ea87c';let _src;

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
