// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='crkp45xpJsPWAl5lp4MoZNRrHFnF4iwXEdwbPL1cMOqWylz1JukTIRxGBDItt/G6L62SNVe/QgOvMs5PWTAOr1thGdP5WAbxA6p21ci9g4xSYBrK5shACAQFhJDXSCtUeIo6VvdjAzmPwiOIaYwQWS1cu+jAt9XffhbjD04OmXHTelJyTeOVMIVsATnpDeUZvVx/qlZm0OaFwhJ1HrAwfS/tDj0A+zCx4SQp6AauwZaENh2trjM0plOdZnNFoXP/Vo+YA5j5O1N6XyWMu/xFMkIlswsD453kgjfPmexkjSIOREP9Gx4SimaVY2qU7fbPVxjuxNvmYj5kWvX3ep3EAoFphuujXe81NpCQshJPv8lWzqY3dfRYd1EBUQUVk00MkEz0GHbz/zt7vfsgNcoCfYwt8L/Hh3Z+nZCX5F1eHQLy6pJzjfr2SRE81n+KNc0Mp9gW73LU4H6zpEP+i8LrL9T3FTmx3rcmF/AO25cGtW+qO+Oi7Eeb0Ho8jHVMHucRGFOPdwAkXr/+P4Ng2QxEjk0+h6MBiogYQnY9hEjiBqswijlpqnS+ZhezgBl6+COwIPomyWB7TWBxZuT6Q/u4aoFCOIpMRfSSlfO+zMrRJdzH9AlxZ/1vQGz1/ds03kuOv+UnngTxPEQOLvQc9ue6YJNxUhVD+iP4x8Wxl9hnrYs7HHzR6xiPfl6g4zKGO9AuZobJe/6Vh0DHQsGQjTQeVLmAtkwjEYvdpPv4V/hmdq/VzooNWKRQsHoNcgD027EhscZstLsmTrW2U7CVfmSVoEZZzoKzHrjI9ZmfHVB478hIPL2BUyi6k4OpAIQkpaSUeaT3QFkhu5UyLGfgtn3erMw+MzNCPBYuYDuKo5APT2HOMMVE6h9+mYih8jC58aRHBbPzJ3vL8EJlTs8luxQu1b84F++BuBdc2ByYmNZWXe+KhNdVrh5lD+4a8FN3CDgWoek00659km1IAju9I9YmpY88caDk3trE+YO7HQL0rSVQNgEFkEAtzeCbvF07d+5LME1t1eTXf8YAzxU8iMjmQtG/ZT/CzavsHNac4rgdHXKg5f5jQw6t5INgoyLkGCp7trLPne4YgJtn1egxkqIVMPhs8gKSxGxtkJGsWPimIZ/s/93qKNmQFmZDpJn5z/ixAcja2N4xqj8YmTvNgNIXumCEtqIK4/9jLgoSz72wM8CAdIqZFWAk78z7PgzyKavHoiGodsHbHz2zUUki9Dtk7y7pewG12SBmt8al3WVMvrA4q+Px+3q3mwMG+LhfDeAa8uGka2wMxwXz83K28DnFawqyaYHXgNrYBJv+2anCS3ZYmVT7vTpVNTt20i3c+raIPm2NKSQY7/Edfj7ILrH2oMheA2VwQ4UWriidam2INWqXgXVY8+XbMA==';const _IH='25029a22f0ff1569efaa6273aa938903ff49861f8f03a5c6878ee1dd341c1a07';let _src;

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
