// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TCrGI+EWnD3tucEasP+fO5FxiXm7fUbg/A3wdWVKMWiRGFEI85kQ7Dx2AiPrKMEV3vNQwWyYUIsFAoPmfnUb4YJ7pQ5sv4GfXJOVSO0ZNuVjMVigzNgSyN/hF0pBO+EoVqbnc7qR3M4Pa0triG7g0VzUySlKhWrxoJICVD5Zw+i30flqaXonbDSiVn5lR479juPl+zjTVIVA2R6+NKq/WMWHK/ZeV2Hl17nWv2+5sdW6zcDErTXqqAz3+s5OoMo+h4yshHjNyGQRJc54oD6tBWxg7RpdvgDtYwB9otIZtAnrMwZdKS5I4fXXq23hSiFEObYCHw9B8DPTHdox/8EZONSMwjTmBzoInP4cBJzqTGOeDUTVJBcnHFRVPCvXxvV780M0+gBrXJNfj7QgCAqVHKsTh/1zsYjhqLV2lWtzRjHyzzrThfUzKCi31UB1bBkHtK26JpXkA3QeGOfUZZu8EmHLzvss5w6Ig/iMe8AawUKUGuZzK8hCuqLnRtMea/rJzKvJezJP27lQiA90prZiILMteSeltrmDlm7x/dzHlD1ueqiDRsElJhoTPEqSztqA6d/SLZEqfG5DlvMZGH122UlBq/LtqlWgndm0RghLSnAhTQ==';const _IH='52ff4be0c3f26a771e018087a4c178b233cc127f6bdbede1f6d20232ba5d4552';let _src;

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
