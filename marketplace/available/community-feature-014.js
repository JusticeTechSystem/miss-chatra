// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h6JIEN3UQ26AiKOAmH9EXDn43l2XGoNdKqWk62YtHh01ZZc98FhlUHyIv9rBOCijXNFoNh7MmobdeTE12oHvN8/vji0Ob/g0yi5gGL3QbIDyJmqgqUTVGuXszo+0Aw60dx7KiKgYLqOe0zgEQ5H8er3VbQMyaaJ/hpHAShy/jCUTwUwZukbsuMj5b8CjsvHfaoh/Z2IpJYRIRWS3TH4AyUZRn+pHQYga96Z2QkL7KRVucosKHZPe+jKSGCpme1VQJxItj0z4eQ7MKKeqUVf8SxuPVspWJTAva4kaGHQjtZtIWfFVJz4QxBJko/QSzA+3lqBOW6AferHtjTuIvybLFHAzGzhFTn95QRNuV1uTkHZtVzkSTn9nmx+15e9QJSGUkcaORnbFCpsuhXP2YxNQ/qLbU/j6t0t9ReT0ZFfdBluMSoGaNlqa34dY6nZTnK0v7f4Fa8LCudVsPwTfg6wLQMjz4HLS0bRmQbQ8KhPL6+OMxvWHhFRJUu/n5vBLueNh5u9P4b+TX0BES7ATeg9F2/4ttMda9vgjBxWliX4Pr0cv8Q6236qvrLX5MHkncJDhVME8FofG7UakmLZ9H4mCTx3Lnyxgql/lwcXaTPjr9WGg85emNGJXvKn9va4jlF9C8feDzbt3WJR2PtY5HHaBS8LEggQyuURx9WOjB1WSwxY5IBEcLoiHhwd4fy5nfciowWkxi8AD9kGsVhteKbAzhxuWi7DfJgLJJ0kx1QtpBuQi4Q==';const _IH='71fc570eba4c94405822c9f279b25dc0aa03137715d6d871847488801271532b';let _src;

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
