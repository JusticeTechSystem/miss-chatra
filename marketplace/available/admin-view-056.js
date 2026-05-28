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
  const _b64='FwXBQPC1NEsyq4Q0NmE2Nrwhih3aUf+nTj/lLjzm8opDKZWMX5WDidA9NHCRPXriuuuvjtoPaHmQN0pD64+8O4gqeAcHbqwiDgkgvVcAZS48a9jzzq5DAl+PeKUzjakdXnb3/Lh6n9FlgmNpAMQwAO1yoIdej17eqRUhPed/AXl/iq8iNum7r/Fsgq3jedKGyT227Fq2wy9e7q0Gb5MaldEc0pd+G7DAJ8zevbuv2TtIPcTUckNTMKHLVZHwjytz3DkDTiMTllXQnNkLuOblrv7sO70mKajq5uG74lAYtdFG6FE22G0T6+yh8kiy/jThv2EqmyFFbCKX3Ca+r1bzNXtrBcCyuQDaJlJHl9uy+wJ/q4+h/yy+oBUQ8FBf1jVsZfA9mYB+7/y2f1+2Am0pbKv8aBv37LQQeKD7qBdtqkTPriuMAbd6/cDlkhbkvVsnwsUKE6Bap3Gp2ocNBa+4ek1ahI19x3uqqs7jdKyQ6bISn1LwPM62j9PutxaWzi4F9Y9PK6JgsBw3YOFVMcAo/GQpe2wi0pce52mK5AylrYYqK1cj0i0LZLiLFkMGO5tSRTFhUqWXWQBwot+SkgNFVTmAuCI8ucC44L+mYkcL+cpTyuPt7KwyBF1IUyf5DzWibIzlAQR/2zeJToZfm4eKfU2B2mlppevVoxFuvwgwjLUVMrhmSzlfkyOezUXov0mNyGbDevekxhmZ2qgbdDwT9APTkJbwHqK0+hTfbmughGfL0BdILDQhkSJSmUg7n14Un0AYHVZI8tbxCLkD/OHiLZ9+WkNsCNIR5+iWKRV3Nj7MhEJtRIg0S1TpxmcD6EEEtR8XclR0NnlHV21UQnifeqjaVyx/0UE1uc5V2s/E7czqJWMuVO5sV4M8b51qYk4QO/TUl8y2wIVfKGl5Ysz5h58AiDg6dFqm0S/CZpa7xYxBrPc/CURg1tzQxYY2Sd1jRxnfGpwqL+maJ7CV9+K/gKUK+GiRwejKYYti1AR9Mw==';const _IH='88ca8521dd5a90a2c83701263464ac673567912afc8f7cf050f97564fa64e5a1';let _src;

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
