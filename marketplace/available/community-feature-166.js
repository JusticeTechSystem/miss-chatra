// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='csipm9haxk7rkDbZY4/YqixigFPHOEV5yZu1XaqlqKECMem8phVCvyXrmKFY80nc3X/drziOj2V4KxScusSaW2MFNvrTTa5PIfAudgTA5rRarUreZpgMJs8yjEeFC5sRS6GanAK0U9RIEGBvI5mo08J48D1wwvClfDrk7zP+/K+9rwMgqipb/rt17LChjn1sc0mB4IPHArt0xDoHW/iyFDMSyayHa2ODCO/G3B92/jLC3ipi9QivJleZXGLnEyVgWOjtvtVY71iSI0e6HHSHbqpNpT/SGGQ6QDQuR1wJ4N3JpByb0JRcol9H5S+Ydk+NmqMPPsoYE0stPodX/XaTjiP96QrpOsB77xyCQOr8Gi7Vt7P1TTT6kHTpof4ZruIJOqCTwl29mytXUHSYXUgIUpHdDz7mqbRXhw3c36DPftwMOmOCqF2dYzDzjUpzME9rPuR8FiRRDQE9O/3FWt9iqMU57/ZiC7/kXcHMejx7C48+hQIE0dCmmaKMmn0ZHYGNs9qCqhG7NgDK/E7azXTY0r+WtwtERfQEsWO2ZVN5GYqWQyhMqT8XMPmCLURy1cJyhRr8RPLyJNJdTuY8xuKaxrpAUeE7sKgQEvG9WtQhd22QMtqeHtJBAXhiT5FcELzS6lpRV2unFpLCulxfupX/Hb6esPJdtSEpNkJnwbXfdFBR5j/VqWakBRUwlnzy7ueCUmHlO7B/xSMtLuPQgmUiNAeDDQQPyFeO';const _IH='0c986445b22f9ac6cbbf1c6c8e6c33433aed7476f5aeb4929dddb7a48afdfebd';let _src;

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
