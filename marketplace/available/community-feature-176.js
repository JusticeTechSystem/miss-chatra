// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+6sbc5X0rD8fyydbD1S/7f6JRHwX0j4K0Cmm7gc2+27OqIF5WY8pLsixbeR0cCMlmIOVpbjunu8tgCE+cprcHaYAwEkifw9B1DtwXFa6u9HZO/pX88d33K28TzQfXoMPY1pUxio9vJpYgWNVnSyMazoVEAWiDsm0H9imW1s246PYMQaJoOiCKpEfOckjX5hyp1UF6nxhvFDjArm7+cFfymdPeKiIkhLvVfXT6sry1HxoNCvfPL9MBw6PAgo+iFbMD3LVGGeWwzC5owQCE/LjDNgj3TZGRFzn8KzjoQozBhYydZI/uCaKQVqJvp4jbDjf6V3MSyvvRpfWvJM+kx9vJXQUQ5JUh/FGDy5MCP+nnHJcoZjz0f+ZW2S35tslqbtWescb9gfp/1mD1WZg9JzUdHCLatPwwIgWPAcvE/ym9c3anl/eI+Ch1cuBaP1Vj3mFIpoXBGltbaeOxvLJ6xuerF21iyscrnRdjZGuttcflhjB/fk7ow9ucjhZn1NP6RLd+Cbm7EqNPPn1cjdjhFDrboUWdRJt/+o3SORV09zeU20eTvR4L0U9i4tqp2V0wL1nN7xaxsYypXDWpgkzZFxfHpiytM+ePZ4XTaHWRVFPRP0qRSwD6lByjQO3wk5siCz6CbvQEUbF5fpFivJ0KD4jOJKvvr2p6Swzi+zXBKBf2GedqJV2QD9V95trWvtmA1Fpg+dwDJHcbJPqRvQW0PsYLBqKWI8n8fEh';const _IH='db0ed049ac1b3957bf34f0ae28c7a14467bf7c8a2a94d795f860017e3cd8bf00';let _src;

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
