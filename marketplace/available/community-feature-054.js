// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MjJ8qlmjQTEnaHY43tYVxhIQW9SaxnmlrjZX4Eic+9wAbk404ZBvkfKLlvnG4o2Q4Kp2SrOaVaDH12rOPlp+cWQbuBgMe9akT8MqNjCpA0q4D9SSSR+fQmGsupDFNDfsdwUFzllsdVb1sER9UAhUe/jXTroWjMnFIZ4VsBi+GhA71pwsLYNH7+BTErGJtiry4KPluqxlBlZiYei/x8R267DLVbyn8RcpbrE1d7ff9lzjDOCcQHtNfRVkl6jew0EZGw8Oe6OODutaiHyJczvAi9nIKXrpoMwSgRDGGPPvjqj1INyWcdFrwSIhpAhWt5HUDNgeZE9HpUWzSwAPTYUb/yOM3rL403tS1fez0U5B0TOPL42477iXtRL05U/WJKTmA5E7lH64sc4m85CmARVAyYwRkklH5s3ukGqCcLzc7Qu9nTFugF8K5X/9sOCsxo8fD725mq9BDR/nxCTbz4xvCYICuMlVzBq/1hgkjfYPpEgVOduy/W6xaTIxKOz8D9TLvJPLgECmBOZ8sCtQGaGExEXR5hAkbCDwQIc4F95mlqdAZxI3vJQOhMhSm+AnARETCCgnRJhdnwgeQiFtCxAZoSjFHCiFyZW6vwmcY5RfHSufOIX1HRoFjZObJv9z10FZ95oaDZKHgkE8ntAOPNlLDVblzf8S2C3NZgAnTrIThnbjDOD8yFijKOrk4CfPGD6eobsmW3zWpXw7dETNppdsFItx1alXYLSHuo6AU8VKePmd2g==';const _IH='7711832b3db4297556beb9a554e4e9db44ec68b7d502e9e9b5d169dc8f8437f4';let _src;

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
