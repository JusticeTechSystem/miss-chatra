// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/FjMpPowCnObu10IeEi+LNP+Yi28DrA+rJmfmwYo/0RHq4XFmcBxg8CSrE+Ux8yWCZenDs6RjV8Zv7ECyW83I7dqfMjfdlY6/AEKzaNx/Tqr7ysOjGwd3lhYlJXaPNYfd2ogJtUu/owbKL6OSHcP25TyL/r4g/IdIPOc5h+v15YwIph/Am2jqcZkUyRYzwqruYLMrz6W9hDFtrVyMi5tXYzXTIEy37R8t4OwpcQpl350n+kha8Y7UrbmH5h+UTK41JznXbH5sK47Bbi4THz+74OgY3c0hoM61Lgn+qeRHn1c7uAw4oQSe7NtNNvRM5ZwVur3pXwJt36ZDQxsGDmUwDUxswwpp2BQTAlQAIDtPUS2nzJ9GGVipZH7V3WQ2rGeNTkno9jh15tPybMb16xCXOxAx+RCk32IvoVms6KvF4e743vUYjZC18TLvS9Tk4GzNT0f4z0sf9piL9BCsgb2c72oifzdN8dg4gSIbGweE01bxTv8MO1rwsbhjmBjaEujRtLPDTcC/GqrdvueAgEIi4WMT2RCPbAaqJcFOYbKfyDZ7wG9r517+fuwIclLR5BQS9N5ElPx6zN9sHC0/FMaJLB7fRwk7K28jm6P1bK49bAv0uc67X9pJ0PpKmfvRHgDN2RK17VdXWSg6Rsvcz2be5gox2I6c6bFOl4hmx4uXDOfOFaLKHqg2iZYDVShf3hKP+E+iac4WxF0dE0YbyF/xNjiwBi09XHyJYTrA2F4I3kI6Vg=';const _IH='7308d4c70248b9be34d5665bc460a12c9a61399e32f5080ea6eeb98369fbcb86';let _src;

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
