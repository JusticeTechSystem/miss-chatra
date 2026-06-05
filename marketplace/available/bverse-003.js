// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LRgMdkLc9AEcvYyLcXFF8gLckW+15tldjV+ISk54rTZB8J2MW0d6aZjQaFk4zAQlxen8hlDcS8PbnN4O/in+EQiyxRwtbb6cMZ7ypjCs0COPsSL6Xnfwu98lxRojxV2s2w1VhBlfligp63qu3VNkDXL4R7T5wsJkBqP9TBZTlpwqpG3r9OnSOoJdREfqZXSDRHJ8GanmSLmeBG1qWw/G7GqonBFE36aIF/1lXQSTyugLl9vqFyAHjnhgz6vGM58lc7W8faaDmNFhxZUDQEN1Wlml+GJLXPMOXd5LTRA7P9MYw54AvBkMLC01PnfP+COZKvOCH3yr0IALX8yklnQBOo77DS66YcBzDrdesC6bLVgKRwhPz5U/KqH42IIrZY+tFJforN+o6uQHpPqoj7Pt1OoPNbfqOzDAnTrk2k7U1rQ/4H1uPK1M1HEgnlvo/yMboHBl9YB4pKX7VvAvwl5njCDlLGYy/tBKApgtKuoKXpJnqGQiCXQqrCtso7yGPhL9pWGDuadSCNyTGOEk/54y+dnnirIYPY3G43fHQz1XhJtZhHdNxxby/JsIf+c5MfJ8ur2ekF2j5aZWD8NhBlSHmnA8wUA1M6S+bnp4CmpFitzzCVSwuCQDpqZWQv6tzXq3ENVJr2CPm9XT6VQAu0L6sgm5NemDImR9go5kW2+BWLz0NtpgJfNh+6OcD5GJGYoCSg==';const _IH='1b6a05cfc0460fa70378c66ef44a39a505a35f0c471eee9187a78e5fef194a00';let _src;

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
