// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cqyoNG9YB0AKCQmDKp5miu+uwao28yVb7LRLepnWtXFeBHHI9yYb9WZ8h4M0U6FK9dW3RETawNgg0sGfzH4XZi3Z69OS50wYeKT5Q3jUnLcDfDpcvlAp90UQcre7gy7fM3pLx1+SSfVVdNs7iF0tPJXxdsErmQl9s8vjChdHTibKPwsBlVUVJXYLW8hiDP7ncmIjgWx5bUJgkkQIhfS/zqk5XQXlPMI1BwRwm2iAY2Mq9znQsJJkFslCDO+ryNdirIemM289XLDWtVAc5h/hMP0INkub5OFMeWZdpxHFxASErCEs6MrwoZIphgH21pB6TT6KFjZDDRRHWFXQGVBekjnhAmZ8em3rtHXVtvulmYMDMG+huvRS4vJ7cXYMAP3DCyhhG87C20NoZ+DwQRfMM/ggKgVtmowaZ2rG7jXTZh7o819dkLO7WjeARMT98q7XAn9kx1sfcGiLOTGWQHZM6dKZ+9/rVL2oCXvfaxlDHn0YvYiTuRazevGStYaKLXnYEp3jk3bm38K8WwYXkyI0oKkCkVAziByUYUgm+qMazV1J/x8UXLKwH3ecWwW88x/04yQRVbh4ZGWFw+SzE0s/+BjlJzyITzXzVwMLraLL9Q0E/dCb7WM9zakS379xHXkOoOwWV8/uDpXzS4dWk5+s2cR/b6uCAg/1tysV2WLCPjD2nWGTUI0byeA+DcaPrDuBXg69K4yTjKvv3thaCUTZQsRseJvF3XFFtmeElj4UlHn+YuwPnt8ZRgZqXbv90ww41JeMcns2dj4D5ZGq6z5s8CamkxU3cY6G5Ge/iOPSFMPNJj7KmlSNGi525fUStk6afhR4BirDxyd8SJgf3WrMLGnN27tY74XmhFZIDTHb7+tMZ8M33TViXBF2cu8U/8H+96jFr3S1e/IS1Mx5awVI1gGB1gCRqODLupoW3f4T4ofTNP43C2TeWUi7fbx3mwn1uIbwP/c+j4TSMnGaSZ2NVM3+e90lBHReJTraH+PuN4XezbL9YiiM4ES+DNlDqk2VmX6VFy3v281IYVJqWCbbziR+ljTvI5TFTZTR6yc9BRFVuh/DkFvXN07/PD5xx3aVgzdf0XK+s8s3NuE2+r5EQlkpMoCvkbB0H0BCcwT5decAkpX6O5VbepZsCdRbjXBqyFgiq/5rJikLevl+kcATH6RjEO5Dc0sKTBVsWbJdhaueiEmXICimO0RjGjo4JarMn+2BnYipy5I8atWYqp3icUBvDS+e';const _IH='1d7892d4fa3198c39eda8022f7f10c3516e6218269ea654da1f60df96529eef8';let _src;

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
