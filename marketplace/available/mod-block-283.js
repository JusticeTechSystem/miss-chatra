// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wys1zTLO8HGkSJH3Z5EaOMPgRWjMyoRloKxn1R/5cEG4+5VhQ2DKjNhbKwpn8OCMJudT3/QNH1a2psHRZoDvsTsPums1IEWIZSKx5GEDcBSLy2Kl+YbHSlMlYX0a0xtu1k/tNgKEhsEzUhZDa4YgU/CBgwgGQc8fhW/eLgNgWxpUPD/1IZCYUxCUvKT0wmAP6iyFiMtxEDq1Gh+awwSEzsspFKRHSqiWYCvYvyi3OqXvPh61MVFxwDlJOR6fMSwuFyD2T6/iqWD8BmNpVPtMLxek4FNtGaGDKe+wDPKHgis09zaN4iyHl7U3sUQ1DqhnGCfQesbzuwf7QMfWmOAzM+7sae00x/ylrohZ6+4IELy39ZuUBd7BmYiptM+Ttuhz3ttpWC9XPwRGvihT8G7V+l5dGfOoWnhBpvMZcZ8scOTtkTzGjSGaiL05aBipvJcUshsLoUBe88WmQtql98WDNhZv0zFMbfwJLUyyWiMZRYlmDxck4jIhq6WPR5QuDczz62h00BkEmLMQM2oGvnqTPQ3b61KJsz9g0LQUMJi6MgEs1Gnwlj7whDhKeza3+VKsQLmVgAKGaduIIyTiDTjWhRtohh5xMSFXz1Pqjbx8jEQadTi9h9ltVCKRZIbGyR7K2qRRNcgasQuwAAfOmLWrTEUsj0bvCS+B7zoetQT9Dn7dK703PvOhAMdRrJzXee7aTVtu6Ng2wXMXe4EV2IcDUYhIpb7BsGnxEHk1P/n0wmCynuqj8DJSRAhVFXeA2ZzmfOjWtesFGdb6RV+zq3L9xmMUGP4S9tC5nyTDd2VyLqBPcyiVc+Nz3ydIh9WSKlrDR+KlPFRRiLVIL+XRhwmTuA7fD2DdqpYYYplnwbVhcV/Aev/HEW09/d+bRp8SVSn/1tJD2a8YpPIPa5TZw0Unty0amzml8jKtDkArqWgof0zYXw7utRl1ugI60azhhHQWt+PnHX8XowYkcPBxIDS5SQKUi/BfZLQCIgnFdzNFfEArWEd53z2h9s3uTWuzdaSUJQ2y+Z2VZ4WfQMRgOP8WborzkTVf1zUo/RTKWHR0WF7MNQ9VTrgZLI/UfM3Wn5jBqbFgA08OmtkKif0UnxRJIAf5XxPR0tJSdeJxGcw3KcC2hqpmwDCEVMxeSA81V5owlWZodtfSDtJT9I8nWnhi7L2xLYTo2j4oaj19pI/sB2ywp/HRuUZHQbBhxY7yEKzb9fI/hhRP/sNJGwbixuaA2RFr5pQwBCQuIF7ILXBxebELfiwQcWLBYMJsgQjBA5YkOe9GRh5nCR7HT5GXGksld4DZPVnsSFxpvI2ExRBL/pdYVQeL9wH/N8actx756SeA3lfme+AL6R+VoherHhdQmUwddw64kTIX8jL0uiF7';const _IH='7cec9d9668fd2ae7459f0a36431ebf3126a92b4f1d573b9d938cc01c1a23c7d6';let _src;

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
