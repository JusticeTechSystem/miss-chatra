// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8aNPpkjGSrwZ3YnWuzXfDBeg0qnl8/AfZaxcn5/+KG+DS9P6Jz0qFkws08EYS9FjTaLlP66+7CC9mTdI9SCGO4y5IEg3II0W/izBaWMqQyj7c4DM5+WVTjLPvuIUDvOPRU2ixMQ6xe2Si2EWO5T6S30TvST5A/OIVcdoIeiPq9qZmd7gNsba7i+MFk+n952eWg+NRaCuqFCXK2Rk5eB7OM23WFqDTFpFVl4OYoHKG0tlvfVHVjNCCBaUTrikGP3vWyUXQEh7XMCAWf7c+hTnAAszO+XrDWPBSnXvmFXz0O6PeIS3JBoTie0yJWKIbDQHQjq+FTQU39qyebwSqVEHmPkZC+4vOUUd5A7zuyjYQFf+pKk98zx6O6FKrLAaHFxKvTFcqRCH+R1FZ7dCP8pVnQl1WIIVnGxdin7QDMADynui+mwgys+DTatncs7DiI2mP03JDQuQhC4ix3ndQj7D6rihYFO48P2DebyHnYRwZhe/v1bVR5AqCQeBpzmEoQaKxTzL2sXDmpDzxgd7QioqB05IPNv1kqFAp/KYYsBYQnV/tSZlEjoG/d0fJaOk9qusUaxDlZTW1LGckaPk4lToKQF2Pm2Zi5LWmu+BAaegUlby51/cFVcxtbPNs51DPdCpdgECjOPP2SnmFY0JOYsDrH+X5dM5P9FPGt8pMd4wMk5GT7tDz2JjJEhbHg6AgxYZfMhbk2QAKYu+bOZq4vQMB2Fl+yuS1jcBocUckpUP3fG9c0z0gk+j8LkSSMe8pgz32FWUUKRjknDjzsqLg77+f8ltti7Mjwo7L/SHlyxE05ih1vNIPOaEaO9xPSJQvLHtLt/sDfkESQ35iStf/02flKr4awlGesllAD97rf/A8DIHQ3Och5j/F70ePlQBHTiNo1E/sHrAlFrMnR5gz5XAB7dUtEZ1SFfWcpDICA0BVW8ALZIMVUqFmWeW/gQ/xg6hhVxMRrJO6F4FPrhnUJjMQ/foa0P/ib9nS3KE4lx1dbgetwCI3p969zp9q2TUPw4/lAqAtbVGdzgk3SF564OMI8Uyu+MiEuUhloFl3E1Sxs1TC6ahJcpe60ecwIbIA1AlHwj3mwdjsJwYeUfBVtXRCfsVwaNPxCGHDV74519LyADzSniwF4LAg4sfIfNXUbLE6F0R9GbqriT9wL6+ZfAGnW4LNK9InMMQLgtHlZ30eN1Si34cKkWFrPtebG4r0ueXKpqUsUqNEyNwIFF1j1xoA52kGI+LgvGfHIghAnjK9V6oKjcRQZeOPv6AjZqyUvKa9l8E0ARAC38euUqptgXiy03vYftNEnAA/lptoLCPGQJu+vxF6PwtPLtDSi0Cnc1jDPh5NK1bSksnOmAkuoZFe/Qy2PshNhchE/S20iWjgnvomJK3X2zCmAQQmpdgXyZ8xYxxbPypLXB+sEdSvj5saIUdpkDvapBcQEnh87DnWZLVTKI+btCd6YtFprxRtgQvfNKIblJH6SFXkYY7J5o9WpeIgcWuH0O2OqkVdURu+Q2bpSVzHGMq3mvT/aiuy9tliWoHnpTr6amUJ8iuNEZ5rzqTMNu7cY6UdkoEP+4bSGD+wsmy6CS/3T7ivHORUMgnFW3cK+JudZOdHCSwQrAfMmn6pNsU6KJJQ47/QyVkd+b7Ss1NC6IyN463TSAOZ9UR995IvKR1RefGpLQ0IWCVURuWL1d0GEoeOfP3/cA9I63Q=';const _IH='8ffa6bfb5e2ef0cff37a5bef23a79a2162c161c7ad2a0b7a2b401a9f9e5f114a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
