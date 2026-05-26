// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RX0URyAGhTsv1XIpUU5mcHgkxCXreD3abnMzDI6q7fDWOgcPCM32yba3gja/OPgsCGfB5FNQA9ifqpGp4MolAdo+Bw6j+eKVSK06gd8F5V1ED1tEYYXg4efkp5K8eM8wj64bw5h6t1hj+huYffUbyZtab6gMe23W593+xI22/meMQi+59b288YVcDbsjUsEVjMfJDcQxdtyKbYFQm3YWR3qQKpv76h/TtdfgpE2sP7ZqcXJ3kFXFcRm2/A93ciLALhXYvLBKRgRyJ47XPlXcjV/PXKbFPfQ/0rPujJUgvTgdvu9GlP78fDPjmfAVYbo+tKLW8AxgXCmHWU99X58HJ4V8nTmzKVBuMnVcENXcxGmB02sAubg4Anm32g3pMdmvdZEvFvpfkkmb71vQsiTAptliBvYHPaOJmfvRwv1a2KXxqt+Tw/McNIWkKRkboQcOgcRTeUgO7D15V2KguHZRMeFv+R90dtIv+jODWnZqNt7quFgwQnNRzZo37iwmi0G5ZXZfOGfjalWg5pIIwMufEEAEO10asRqexpwo6YsKvHnvPLLKa+rjcBf5YNxziGeBEEIGQ+vX/SuFx+3FXjvpaNtwDd9jexVMpEQP261YnzAdJw85KvUokJ0kPf6plzQaBlrnS7GR/bZ4bSBelo1X5LZoIbgsnac8go3eIbylAxW63oFtRjhtbX/W0WZuOMIT1beFHAfy+hw6tHOP6MSM/HS3wZR96aa+H3F5GnPIvCfeNdQDxohn5s6Kq4b4fBtzH9c5SGBM/2IVfDeYg5Vc0J3lcnykXPHm2ttP6jwfJUQAJNqJMWqEMznCyfzSFEmofTfwyJJpMSIrgB+qLNiGPo4OBcia3swkjxNVOFh4Dmk0iB/pEZ5wPfDuJLqyDeKtBWJ7uwQm0XKXQyD6+586FFDaU3nlxTBqXyYpjqKNDKNkYJq570J4qA==';const _IH='13a5d24acf04fa27ad26f87aa4c1c75e42ef8d305b664ec5413498a331728f09';let _src;

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
