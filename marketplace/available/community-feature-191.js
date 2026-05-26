// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4PB78r60K5VNLHGh1/KZaaevJTNtMqdeMEXSqdUaBO4Hg4AjX1ZKLB62DZwUImcYm2g1QP2r9gzAWr2E9eCWPBZE8+zOSUmL2/OYgOH5Jl6wJVOp1/W2jhDKWTwRvakvClr982t4hgWratUhFVdkXXrRji9BpGD1mnkUca4t+JdHGHcj/21WwRVVaq4tZ0X2850lo8YxQCRjb7+TNvCoQi5ciG0j+OovHxrPMUtDC9t29EVEXt7rBMtbWsO0W6o0+1N3OfXASNFjZgw7/o1kwgQ0MIs4HHLA8eDpbj1PQv1nBNh2bwMBIedbXM8SdDzaVd35KtykyA3FaxTbsaVmZ8mwkibj7JPNZpWGpF7Pm8S6VZa/LUpoRWodD7qvWcFVhA25Kcq6oe6mE527NVIdAwwd0lpVPmf7BODZy10WgP2w9/QfuXbn1Y3c2wBVoioXQmWL7KCdIgqoYEhUvt7Lf2+0T2Xck8E8o4AMlg89VSSE8rVevSKlWG29YFes8uHWVqEs2t7zu3Bllp6aXQbfiXQJiKn9OnSAZYXKYsurvOfz2aYjGW9eGnvjcZ+o8nnjhf4H43YPoohl8CJ8BLB+kdq3Fi1tCPCoNWkj8VKeFA1pZH2SzrzXgoGJVHC53iJcjJZeev6dSNUmEcSsQQXGHf4N54a2Ic3pgnomwTfq+r6+RF+IwFKF77fHQinoCSAKlRkQkKwy6vH07yExR4DXBQMU/2jrMGnK';const _IH='22775645a4ef2d7d86dfcedc07c0bc4823e27202e14f221126eb8dd894e210a0';let _src;

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
