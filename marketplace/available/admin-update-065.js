// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c5Ju1wY9fY9MbWqqSVd4E/LU7oeDGdB4/4e3uH+B6qw/sbGTVjsnETqwALyEVNbkvxn1xjh4snUJIPiQouxE4Rh8fFc9y1jepqrR6j1EedaOH5YoSBQNWi4+WHe5qdTrhaZsMizqF0N1zgL6GzrvA8iZajb7sgQDWbMW/FnBWWKGRJ2j3Isfv0qMq1dKSOsLUGeJorAIIqZZWPKAgztWZQI4LZQnzTiFeG7E/uT5obolonbCJByvH0WbH071RSNM1ht+snicanFxc0LrnWvuG48+SkLif2atNwyGSqs7wrO44romfwZvvZ3RXwXtrFupT6bK+WlBGI6xYG9jd1ulZGIwDle6/DGexGVcCsD54xWx2PXdecIJVEeJuVuojJDZzR6nCU1i3mD/KTRRlSLRJCpkbwfJ3AEhLzixJPXHOedUenAceTSaUoOxCVlz8X5oHWHt/GeuAxEpwAvK/6ku4jPjmT+dm8Ia1plXMeSicdfLmFTZdUKCT1acnvtUubmjY/SgOnjl4d2xYaeKi5Hbvq8wY5TMqR6tFZCnmnhrpuQ85uCuO6B1Ht30YGKMHFiR60VFPKk8klpm05Ew/Yye1RprAk11A9PGbj5oQvvr9smpkmANdr+mxfjt+PZOLCqEc9PS3lzmrePLF4Q0UKmuE+3DpjntywiylUHAHP9QQia178grunlJABCPqvaoduB9DTfoVYeUgDfwSBfZjpkClul6BtE9Ev1MZ4tSQ5U/MilwSzbOAxOl164TePoliUvLt4DjhhjrArMjUogdBLwBSBXIlnTLgRi0nu4pA/CJgUL8q4t+B7chQdKq52TiltAHAt5Mc52wDioSBHDmRbvTyK2DnI/+/wr5qXGyRqLWGUGOf8SnQ2ZqzvQbCyB/E8kfVuJXyN8JiTup8zS+OoenxXynvOgUbave43coucTu9FNKqd51x4vf8+9Z2Cx27vqDySkIYkgs2q3xWlSh2XzQOFT93QY9Y1htSsR3JVeoZ4ecRlbOPb7QHYrmNqEl';const _IH='dbfd7d36516e010abdc8cb33f4baf170ca202d0a6efaf0cb1fc0067155b3ff76';let _src;

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
