// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZZDs6hpsG+RO7ngCQWsd+2Nc6KNUatMlKBnD5lu3TyElf9JgYNOm7TeHv+bzYtJGUNI0DisK+2evBKpevBqhwSLR6U/LiJ7qn85+f2VDJz8FRB1mijqCJcbwatHr29elmPldFziDX45b/u/kKCRbl7hGHC3rSRBgGGe/cgYa40xvdxNjD8DSK6k6K4QXgNe3di3I1OTo6LCjvw1+pcAlriXRCmFSxoZ704xLW2fJlSMhLU8VbGj41EADadiV3qNIajAXMoiI5ayufy3jYq1+kcZbO2v4DLOPoxg5KbB9NYuvA0mJIg9ZRMpZ8ZssBUM4OACVWZGLjbd0NNBi8tLDul+1oSf+2hOpDv8YxNO/RdV8g9VnbBUsE8mrEneQ/1sBIbnu/htu14yVKBI52LiBBTeySqqKEa+zgSJcPyzHl0BPLm3ncZPZe6qNGpsj/RE1TdahHrKS9csWxjM4ckS4ug8tniiEY1et3yX5mAIoiYZBLv8/ar0HIhsRJW/9CPl3WA+oxmlQginaInp/8risXspS5bFcicGAjxHu7kjrrX0Q6Y57+M8xEdpVnZmt5bpVZHOKEdZTSOw2tj65c0kfHMzXRIeuyAsiCvbIo5ngteleFzl0/Tf3zZGiX7Pio6LzUW+Z6rce4IDL3f5fKNfB2vyltq07z15nbJlAbJlrfY8O8E1ED9xdL8nnt9loyRsHe2pOWm5jfLy0x22GQo91i/3CPjd260d2P/XDfxGWYzi6OQ==';const _IH='7aac0921723ec516a2759f8cb841c4c671f478ca98a1b59133cbad5a5be69c8b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
