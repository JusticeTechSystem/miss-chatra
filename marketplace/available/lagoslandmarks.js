// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/8lNN/WkRHa0chBILE+dD0w5GbaGsqNfCZRSJjhdt51YEhqhYiV2JpPNA7jBRnUny2p0JfAl5jvj9SLiolQJ7geUN1fhP0tNsGKDaI6YspzZh1vv/d9A1TW+p/KRESEo80EhSsqDFJExM2qK7fus2ld4MlfftpeHErXpBkH1GTq1vvzNJXadv0Z9PC7jnsreedgh4HJ1Gts0cWD8GIUm8XhyiRoTAt2HjZZR4vn+XjWMPa1ggR71UdWU+ZQBMiEVkq50hcj1PVWBnWGb30oKlV5VnMhq06zFqHdEsC9cPqVoDHT1R5zxxmSMOgsq//D37R+FaL+NAITGoRCsTAHZKfJK25mlz9AeoYfuAlPAnlq1zlGwYiHgj1ds2UVR3QkYXJTZ9169GtPJNPt0jFa2nG5jnXnW3ku4Ame2Z0iPC10mYv1MpHM70mtTXzi6Ekg81cZPwdoF/VHJe5RRTIBIY1r7hOWZKhmk7b+rE55WftrVGuRFv+MZWaZ8xSiXDURKjumWd6QOxgP0p3mKN0c9sJpULehXl3eTixZBw5HOQdQDnlM7GoVYo1zmthuZK1FhqM12urjJuqXakKhR/RsS2BZfw721VsIxgF523Jj6VMmRnIChXdv39IXz86Xrcm5vsmuJaQo0NfBOs0TDqRrS5NkV7kntkfT2PUc/1GgIT7/vw0SOnGzwV4Av2ugFFemD6oNO2IY65LGPeBpSXTv2UdRPqsKE3BrtnrOlRV2KXhh0Y5aKw6Z9QHsGeOg7mK2VV2D+l8CQPUWv/vAMUMimGI8n1RS++GjL/Zv0k+DKroRXe/2zPNfqr0yM0HYSCirFxZS5pCWMJh7C7t70xeG3HzzwftmfdogZ5AjTfvE2xjrTLKmZNR2UF7MRMEW+TOuIr3779x4c7LNCal2zULVr5ifAsvaB4qPr5pJSp5kIlXGU48yviWoBF1na7HTvCiw9ZqqCMDlDQyzFj3H+nBn0R19rhRbsdqsi1mjp4EABvvuOiahyr2esrwEN0+szsCTWSbSdzGrvgdM8XwaO8R+F2+pzn54bqkrfO/VxYIYWPGk8918iNFS3CBNBBQz2IvmmxRl55BuAOltagWXI7vRS4m8Hc3199HoY5tYLFwmcCBvkBDq8KfmdkrfDdAkJHOmf3LHgsjjkx+EyyOWzknG8SHAgRaiyYUUqsHxwrZ9onBGGtLHFHg366rk21A9JeuDYL3YqppFJrNeHc0aJVw==';const _IH='6defde3df082e579c5fbd448eea475594141465c5c8e3ffc820a1c8537b8c4b0';let _src;

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
