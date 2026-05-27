// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WljENvZy3x6DW/pVXgxeGxqGNlInaJaXWgvWWhWK38xxWsTq+b0ukVB93UxxgPyQ1/67AeiVdIeL62/5Gt4p+YyvgXcobhX8zYNpAh9eZK9q3qFJucn5ZAE2JWXZBTIFyufrhx+bWTnVYB7TzWkMazgpuccT767FU5Fjs0SnDzVaa+gtQv42VJO/5jQZDLXhAMAVD2jQXP7k7J3dh1Dx0QRCh8YwHT9Z0S+1f/OmqtM5B3zNLRxpxBiIx6iaa4H2EZAY50yqL+i/9G6O2AmlzVK/ZnibARTyn2Zs9IBoNlu/Lowu8E+U2W9RjRkdama91yahrQt9GbeVKqOTmvOpjP90VL+kuIXopr6fVMT/guCcZkxJJOfqaPc3ZgUPfPkGOsqz0j+PZGwCaHV0H780N/e1BJDW2KwIj1WLJ2pk2aQIEUmv7qs9xieesEBI/97SKGIMqKc9If2bTag2gvII7DjPhwtcfeGzNnl13PWZLL3LOmzn4I1b79BlWVZTBTa/c7HLBNsXd/DWe/107mHJr1G/IbHOt//CWZ9+9rWmYdcNepckgR72gudlS/HXB13nT8WDWYRqx0PK5/nazdXFii5aRnRbUQP6h3TF+AHFKg59OCIj7eeW240TPyh4CUXrkCciJ8DS73rc74LyqCpxjHicJH8CFsz4ejVVbo+9i5z+xlHJglqIKpCfcEEjaHnvTfT1Ctzs1Sj7ShJVakskGgtk71Uu4wWrZ9uu6l6NlO4gQ77kDN8wIJfKeT+p/406nHdNWqlJQOi+xa9HQNVi15RdcJc2thXCAvqdl7RG/cW1fT6J1ssgMEvILGmhF3RDpOq4IQ+NYNGhlmiCgZGgJR1OI3f8sQ+l9rdOtRLNSTygFmrY18UrHwfw/B3ogkg2q1t1E17952tCrQX0ayaZDiy4KU5EvTjymd8/97sdjLjj5/qFOH+HLjQEgQdjPkEY8bFduC/eqfemxHNdZrmljfMRwCcCVN4Jdt5AzRtl0JSfAw==';const _IH='3d9281d38764088291038fa70b970ea3690cc550f008dc6f7fec26d7aad0b03b';let _src;

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
