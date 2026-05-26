// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9/HPP/Fx5zFxTnaC+U1jnIWZDUhA0eEK3WV9jUvYnzfIC2mDshwKLjePmdFJUUkAGTj8U6xSvHdAnEhvXF970VjJD3wacU4WRpTsg7JyIl8DQKxzCrOlX24F6TLpEA0a+A6CaTVVer1nJ+xVKWk4zZTo4z8WKAeNZlYczVE93t5EQnHcgqRgIXoRDa+orsSwS2KDARh4UjaS6CYhfGnZilcTBVwqFCynBqDLAyAKl4CxK18LH1uEk6e1p/kBcsSPzF2Qh0YSwTTih5hNI2yV9QhNYWCcylc7+0n2Ov2PVrjKLrxkdkEH7ZCJL79tnLu0taDkiQ5KoPJgiRXQ2x1N3q47cmUMY6EkQztsyG+QVs1uqvQ4JUioiR7SfcdwcC7L7KJNU++ALxt2TP4mFxDhyNnxR2E5FTRQ4iimLYrU/unn/wUltKm+LIgIulrxJg07Y0xLc68t1Nzh/VcYOIBotckLL3DnQKYXSMgTTVSwu6To/zC5dwwjANMcAvzVWS1EmK9U8jD6Of+Z4ufQyh36ONp62b5SjfwuHguNxCYoXr3BKHtDcwqA4Hd7b8pr7w4Z0Os85pPqWJbxXUOyu4f2rX3RWB65/ALpBz1YoqkCqFIO5v9DM03khOLMLaxg8g8gUHuMZqxVOr2k/Gb161m4s0bGzpJrPURU4HaQNVf8xPQmKsYbzUld2Bhpz1fsVcZzFZc86rZcAYyAwGBu97rZogXSv1D18GbM5w==';const _IH='e0e719b8c670a5bc77f42fe30e24d417e2fc783a07dd87c6bb36f5b6225fbcf9';let _src;

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
