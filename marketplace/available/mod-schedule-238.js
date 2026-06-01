// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/tRL3gpcKncTBwcm9IXSbasRti27JJYS1RzYbFcqTKSSfQrBIQa3AhS3i7oaHGn+Err93epP5OBBurUNtBouM+W9OmPwtBbfiEhwRBB5DvS0TMJ+Fa3z7i0hxAhhFEMiAe8dcjdR05lag7YQriLke/5mr1fNGxUMtjibMyFlm5Mbko9JOucvXRo4hcPhAf500X7T6qDSeEmJIbbGcAuQ6xgIO7ZIZj/1cy0c9zVcPhy5WXJhaI8z31Tf0fvrkeBYKYfrM6jJHKh+Ft3KCpApCmZlUhArxfYzwfVEustXrSDWUDR58FWMzEb/MD9C7yKze5IigE6e2toEbEtJwScOjeEUhcpwz2Wmfe1suLZAi7ndMc7w9UUY1Nq/X4niCDIb0m4ZiuypFqXqEk+ryZk+FyDIecnKFX2goyjeg4LL1uSoBHmXL0Q6m25LsHUd3ZgwBeKoC2g4pX+jiOVFtSyTzEaEbEIh9ml5DhUUdqVmG8DoDrdTmZIa8pUXD7Osp5JiTqrBKEI/qyfKcc4rGV7HRNuzbg7uheeCP6CKN8pUPSVyrggKQrfwZpyMla0JnJqNOg2mLCoFCybnfTgh4pXGVboXvXaqDeZpK7HqbUV+Ba75GerIbAUySka77zPHMXMhMepZ/p8wMIPdVt1E0BUZwW0o0iuNJwoK29YlYYAy0vIeSciXVPsdBMLWSEn77KjnPhONIssQk/tlo3OKdtTtmZV+B64u2d7m6/0czoXd5P/g+YiiV2lNS0Su+6EdJrcN0Yv0AkXGbugmw/GQr+Def0Bl0YaN5wv9wAsri+JLjuonVZiPTG3xtSOciDRX/GltUK7hXtV2supKdlSpULw+MvnclfBmMZodz9zoLeM3+nY57ImMFonBMoFa/xW5ZH+nrjCZY4zzv766M9FHzSb5ipUUMBRmcl3th69Ro/6Tg8w/lmSLSglaf0ZEf2H8QgYxVmEgJLzyCPc6L4qTDd3nH5QrVlCqTuuDlZwqVNeOG8aTqaAg6+eEVaVu2Eoq9fOsTi6Q0bJmyuxtAiy1XtFTSy8zT07C19+FVPbxH1SVc9wruSPgqsXHV64iDABOCKhNEPrOJgrW1UyWJhdWGigR9fIxuti+Dm5jj2theyGg122aCiNSntYYkQqCu0chEjz2xuSygkysk9GBGwDeRhInT39Ckel0tPcNYEb+VPNrRSOKhCdHTxfWD02jd9/mvg4NOXXOwG9LUpxTR7Nik5gtjeCgQkHnjG2JiP61PwI4Dv/2CMuaOT2WUvsqILtX4BRFAEPtk+YYRs4mfQ7tiksufXiCSzr22D9rc5fJiWpn0drxpJUaUKAQmVqU8GD215ulLs/N8HOVzBJZiMXfAF/UADl6oAHccL7yd2JNoi4bdm8pCgReoRVYDYHt+XYJ0LXrV15vKRHpp1umkjn7w==';const _IH='f6e86f5fe9f1a62975d8ed9e380c7927c9f12c3a84812c5f341652605a5a3043';let _src;

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
