// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FVlw/gSyxFIPQZzEEoirsqN6J27xsazL/FhODPSfYD7aTV70myBRebLdZnKx083fgqm5FX5XfvO8vKofWPOQSXdIdB3eYGTuocGoVr/rPkIG64/CkPFwc8gSuZBYh/FLa2vqaTs6pG8/1jkRa2eBobdHOp8oetw6+JaOr0cTpfxX/zVYrBhM24A8JyjQKTmqwyCNFtxUU4zIUhEaAgBsv4X+2g3dlYEmMjb9efYt2QrT3rhTIWOa99vOPIWeTb9SVxN3vNa4zMYcP+t4dVl1+LohhWuqkxPk0VqOn8/RVtzT7U7vR16oR4jN/GVD9J+IGi6CgB9mgxCakXqD5l6sNR5vMPixRat/ubXlOVupbKKDVuTig7Sqdgr6mrOxgnP3H8qJprm3fK7aREUl3sNpz3L3Ax3wxa1evHrLywooo+Gm0U0Maq2HfPZr+tyTyiAFjuoxJ5HK0mVxV+LiFSRTfly2HlAapQKhzrvBGywJ28swojYhGvUFOhu2etZCGFxEY1VAxMhIFaJXWqyYHUTYOW4Orrjip0XLr40jOK8yqsiYgXhCvyI61auMdb5fFjcbwmYOCMiE9/f/vvMzEkXQqKPGGQqP6jCiM48JKzH8xlgtXwFO85yh9bHGDQ4xLe2PdTjjnhNUSwbfCo3tWdkAOBf6WYlKpuTftNbwQ/T1yNpCi2zX5Xza9RCW23yZoetRO4Cu6BmnfdWZwj09ctkT+s8NmSWIt5hO+2brU9ySJSAS6fIIdPQ=';const _IH='f03c9e2fe793bcb6e6d2e324d1cbf63aeb9290545bc0277d665ad2053394181c';let _src;

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
