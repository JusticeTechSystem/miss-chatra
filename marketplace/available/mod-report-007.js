// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7zfzWfh5vjV7/3dPihsnwxdTNs1Qo+jMjb/jy5T7uA42GtSTQF3pEXDK3IrvTYTN9iUjwr4rWAUQGZdI02rIIAywFr9HgoAoS4V6ZVFruv9UJ8bWX3tCudw+XaCm0cGqRyvRisRSZaQ4wCFGXFW8D9DJUEQvQ5UbioQiJsxz9DgBbLiPICOhWYiqG6xKm1M/n0AHwNSOodmn2XFN4kdm+F5eggE+FhDTGYT1sqp15W8frAShHlm3uTiyeEpZWEZJ/9bAPh/zBchzOtaw71wIwBGS5h0lfGg44Od1ULihsrlJzqpApQjO2camY/dywzSLa+Xwq8Ej0nNwXiH78vl0OT3dt+5ZRkODvQnSx8S7ddf0Rk7WoECkW2oVlx7mn25fPkxhKZkzW7L+lp7BlGxD4t8k3kfqkk/XVsJ1zpEflubrphe0xRZxnJmw/gjdtT43w++Xwo0Qi7AaOU4s722b1CnDzOlFsV/sA4472OGNOxCWxUMOltwZCfZ3dawjDqgwc0A6UYkzXC2vEFO6JNdTdJIkeNjwWRUGqwhkM2+SrLtsNCDGcAP4i6P7uQF49hgw/kBajxzKbJJGcAW00EkiQ0ZpIEmZRA8inMHPUXfR/d69Q1MUUGjeXpWXeAOVFqaQMzsz+VMW59+tvKIb0cJEzLR2VUVDcOsduoHtnf8ZJcO7WSbuILNmHl97RUA9adR8QFHnu7ziE4V21ikqEon1CuUdIoKzuvQjj9ddF59Kzc5yyqIR8I0UXWpNyDkoOEnZxzelY9u9UNGekJLMIL62PURtav+QOVYyZYxHhF0sxfs51ai9hat7ph/m5Z+lLvN+zOmN1FuAoOPNNBK6FfiDyKwFs4BGyBHUHuIVi8aRJgkPs79JncgJ4c0JaUT0urzUHPs5ksjz7WcEN/rN6pxuF7WLsp0+CG9TLfYjl3gxNga64NzIscakkygH5AVqSsJYNQMKCKOb/4NUybvcr+gWm8rPV6lFvYbwKQd4x4tZzzEH3g5YFf88C/8fZM02mA4sTdnYSiTiZXN3jtF0gwSsjTa9S7FsKZReFtYbxL4lsnnsTRFeL1Cal32LAK6aCNrj2uaS6EM52QDN7Zqp0oivPt7Suq+vf2bWAao8FQkQlvprBa2YzcW18xYVQraOGKXM0oSW6mhlmu3m3Zu3SzwpS1V88QhSvYu3d3QLWM0mRYYhRP7+Bza1le4r1IfvMCQGOA0JubhhpcXLc4JE+jvrLj8xyu5lY46jgC3A/WOXiZP2w78AJz6ZRSN2YgHZeCelHjb5cFfnxNSKl3Tsb/oQwCojKXNTh+CITQKkfW/s9zaQ1lR6BDtwsmE2/FLKbL011h1wWueQR2tzNBt9yUKHPyhQsSvdwDSTSMHfOKsD';const _IH='d6b7330c537de92c99dab3c9c55fe108f338953eff64b7ef9a221238723790bc';let _src;

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
