// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D0JRLbmVupHYE/nycwfg6Q1KJXnv1Xml/2cpgH0mLdpeW2Hv8qOZ806Blvq69wuYgJRgAU7dv+S3bfiDI/v79RAPjjKLijegTbO8dfmuhOPIKXBc3Us1AbJ7ce4qe2SFjNm2zkyjlLdwTU3+Pzc0qGstT83zAx8ZgFCWFI+t8mPSBcQIPaOlKizHhS+LUYI465dy12Pj3V0TykHpx7B3oHkp/neSFPOmWYJkUVdH/LEvwTe7OyM4jEfHqDBkhRxt8pZwQ9H2LAlVyKBuVvdrCPjYUiKoup9NCrec+ppgybIuxdGk8+VGJzaSZKNIie5drM1NtQSVInOgE93BiQ4RE7DHEC4y+m6LpthVNTLDcgDSmyE+z2PU9CYS1BgWML//sd11cU7x0vlEtEEZhQMjJsBbpk367RjJbxRuF4hjnM5bnI2zentbyakkK/NfBEKwYYmOwaw+ESlLw4pNH40M/t/25l9MobnfsWZkOhUeR+Ur3IZCk1lPi80qeR0kyxXgRbcIyBl6R+GOFqIlosPjzq5drpI2rG63bchac7Li0ykDuUDehSPuyrgP8xYXc/qvHPcEdhTUjgHirb2/upIWjZxnSEHS59h/y7JchzkUQjN1WjEJjQKSOOQftNeFwZ0VjZG8bXSmBIa8Pi1GntBnqdJ+nuQJ+n30xhnG/4Fijl2jSI8QyHdNBFwnQvgvfOe2n8n9ZoRpT/8r7mt9d26MDhIMxKym1Ryp';const _IH='66f213a25a2c7b39fe6142542534913d52e8e31e8be81c4a41c6ffa46600ce78';let _src;

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
