// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xmRsO1OVg7BMuNBcW4+XEXlMrpO6xpKjnbmAaP6+73JDCHbhKxyOL4prKQvIQs4VZjfKUx6IeSvep3IC9lDkYFmXLC/68c/mDV4SVpcYSaah8c+OIOF5YzNMPkj+FplPgFK2JfY4nk/U9U4X3ZTsS1NANiioRlelKfHwpG6xd8c47BIPcsrbWgEiIMQ4YSTp3hvDbV7Tojvw1mvNn90Ls3JcYU0sJYy1gdVsb9i6aX3AfXSEkJgVLSoN0Y0A8bOg70JRNcPhY+mUbY4+aptjS4kqB9TaQHyBIsC+UoLwxpLhGzt+2qLNqn2SIr0uHY4ohYsSF79KBRBRgPN7P8BVmIEziCEUQy1HLBGFfW58u3f+VbQZZWAjnfgoVkQnuCWQGaR1EpveIMxdBRbAgqXGohEbUU9nUOSjEx4rMWsxaJqtaLcFc5W9iEEkmLJAsUBsEKYMjnukuyzuQtSkp2WLlb/RDjXVemftDIHIn8bJiPBOprIKgQxGCefxuCtLbIsRLugOhnoQ2wIVe3xj50kqGUmniQYrunpqUByiruitqzbRzeUaqmDyhR1EH123rKUuDLYjK1aOht47KUqarXtqv35dhCsAfrRVYanv3e/UuxULFJXRz9Les/2i8MSi+XYx1PtebsQMbx6dcFFMCK1FRNcg6FRFiDiNTWHVN7CYSykltwvC2hB0r+XYETKaBQFR503xTKfkRqqNeNBKE9aiHQUl+R/IQMR6uwMZ3dNB/zvTfnjXDii0TgIujv/M13iq6aYoecb1zjw9gpm4jce0O0x+VSh5swjFeXL2PZ3TDsgZwTnULuRvffpiJa0q/HFmiDshtPxDberebM9OXWiL1lyAVggOvL2dzDShngR7SvkqIgrvOodPZpMoxdboBucNVK074k9/tlO2kJffeThU6X9V9pF4kCKMx3N9ojOVHvXFk1SWFLnZgsnfW98A1QgXWngRu+ycPMatKh+sRRQOqp30/aG3QblSJpclpDBtE4fj+Kze/wB9KJCtqBGxtB0kHnhvQ2eBzrEP8MHO2za0yktgpyDRdjrlCavlcYT5u+zveDg3OF7v5KPF6liVJodkzolRTZDCsSdRmMmKbhi2mjEm9ZQ9szqYE8bDg+5Dog9CSjQarrVwDlCDgYFxGzVVLG2vk5NF1dzy9oVgj3s/lCGC7ncJxO8Yl8Wjb4TpypcuKnfCDQeoPXgEQbPcJHKd8b91g77UneYFkskF1WE7waI68Q9fcI4lLIrJzkOIH+wY5bbhx9AMESTD603RjyrMIoF+4tFN7fhQgOTehNzPEdkZUY46qr04xxl3B6850ZCwlWJtLdsN0ko/G1JxZV7x1nol6YKjnBsmgojU9XoFn8Ud7Knk46lyeUzijVbdz+XprtNyB3AurBrvg2XMJjdLmaQ=';const _IH='20aa984641aa399cc43818000cb1a8f0425b28197a1ce1dee5c010cbe47a9729';let _src;

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
