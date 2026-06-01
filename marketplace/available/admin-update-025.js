// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5XGNOspPd99DQDavP8r+xAYiRQmWwj9nek3zsauGa0d0sOLjM1w8cXcLTKibQcDjan/WkuLkndEoMTXcspB6/aJt+slK2mnwI4MRnGXRpo2ccfvT7VODx/sYikM3TGmDwpfDtPTL9Tf4KnXlO/6wHlGoO5LtR0c7DYozrD7r57hRqJJfhxTNjyRVF48CQTLwPtk158y5MrcnffsXoyOQzK/51OpK08VTYmpTVzqADgprCfhKzfQubP22ako4aQGB/g6/M873f/yw/xfDul6Qq5A1B6qn6Z0T5VAW2jAqmstwfap2NzFhj/SHpGX5NtW0/4c8XuWVnkHSUpkIWMALGFP4QX3+NQabIRmSl5zEBe0emguh0D3l4i2zXyHAKvJk62Ing9tOXglNVUUiWaNFninodnhoCWRz2h/Cegkd4Zr8cwC7ELcARPMx+qf8GitpgKDwmI+OzoaA9IFi4WOvid/7zHpjfIXaTpkvybY5fEET/rwdoo/4TuR6At0TdRGACugoNo4CFbFu0NEHqd7FAXjvXwy4BS6SeavT3dm8ZyBgsW8IbluO3O7wiMPTktaZkm0nwZSJ73W9GwJYjaH7KCi+rolC0dQi8tBnDi90/OxwDaxFwx8R2is7jgOCrGnglT0UFgP/xQ7rLd9mMSSU7ZwNZRjw3+YThb3lIZ2M/QMRgKbTNK/7Aqb/TWCB4X+PP+OqP9fK1vVwUAfvsURHuwJlZVln/wS02jr03OUAGQZdYIyuF7bZlEpNSskMeiM9YxWq7xokTwGmz/RRCdyBEtPkXpmA/m+jDcApq/B3GN9FEgllJpk0ZUcZotTCfSLhziVHEsee7Mxh7FhHU80EKc3g7SD//fYcPIC2BtFdyc1q5YiZs1YtnDL5lkEC6fA/gd1xXoO7sKwGkL9zI5iM1rg6mYvhm6nFxG78tpZ2VrNG6r+lxFW52hFE8x55ZqJ/yfS9VaOnQwkTjlp9p+flPPUlkCHWOrgwQLYsgZ+Jthjtff3D1FvkBVmiGT7aA==';const _IH='5011e55d07c78dd648a4ce9a97d7062c92737246b3cf000d28a65189679941c2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
