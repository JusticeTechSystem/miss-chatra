// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lsvE5sVMc7f6v62bb1QRklgbPGfrE8vxtK4wZb9B4p2UPROg6Q9DpC7uCsJU8/Fb7+JK5339BeyTSqHZ165ZR9dss5VSUSUckRuSl3jZzkBBaGYtZm602W6TpATkVC2oqyvtf8FWo5d/pHTBv2/zvHUIj41iZCI6n13UKYP1HrzgLqs/SasFb18mIVdnlmAEp6V2ieK48cMxawqfr+qG+/RlPyh7ZxJDi/co8HkeLIcPFWoeDqHGmdP+h3D9uRYtvrDD6xZxiohJ2/SmWtHN/sjGbET2Yf/fJNa/pe5D3ocCfLpleuirjoJtqH7Xf4girTJkjCMvSmkgRrebff3+CrPVVIB2moNkwGhzK8sSAIjbYLw/ThvQYjnOcTi8MCtrEKENovbrlsYU+35vdEb8isUa7cn26BT0bvQeQFfWUAVEJlv6k47HcaWP3lAsAvwwpKUs+nYztieDZHzccXy/OXNhm5ZuUg6ea0G5yiZ0yh9qOrGzn3k8xR+leqRG5sy1WCpXi85gEoUu96ipRc37xJcDGh/KzgGycUdYRBEf1QkUG0zRUQTS3GrCMRbqTVu3VeNRlouJNhCdybOQNuunKvhs6UqrCNCCv2c3aJPdDE29m8IwsbYpC2iSeGl4hBgTd/EKwhhM0tR1zKupb67vlPT4nch8HLXaam2s18mJB2Piw74jpKV1LaYeUMg9Tll+eZRbJN7DpJbZNYeNamfPZCs53o5bvOL4CKRlOKn4Kje+9Lh2r7UEaVv5HhvaDTvgklp48l87XC8Ze/umuKxeOJ/Uuj6HEy8xu/OYHgv13v894vbVlDK904p4Q9IMGVaPxM/Dd7EVbo29agr1Vond+MAmI7iemqrCAlLpTBHbZ8VCuWOk4/IuiG/xPqCQc9TKUwKq7yOF1rv49ep4HivpHrIq6XM4dAOCuGi2QyayvLCTpPO14j2xASEhD4qikGBM8abPz6SzuNoCB1bZNvET0rP1k7xOJCO5e8lAEi7yemt9fveJlFvG7X5mRKo1R4gu+zz6EY3yqJTFh8uS/oTQX2bwDNLGQWnuos1C9Jr33ovZGYljKLrH44oiLqokjuYKAh3q5GQlnz5Saq8oD/6bohjeN8hwv2dGT6kY7oWn6dkw86BoN2lapKNiS/kN9UoT/JOpNzM2u9xA2kOyQ9jSqipZqyh2gv2CYy6ma2kf3862e3k3e2jjJTQIPVmL7mDVv46p8YTssw==';const _IH='ce339ef2deae93d8657c2d6fc82dfff86a242d246e4f2340e472afc978bc5096';let _src;

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
