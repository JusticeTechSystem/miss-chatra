// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/vwFcKEUoH2wWXXXvD3yWNGFIMFRWAIqEcpUD3PS1U92G6/gkbKc9JXKhUqoL6u6qj+croX7mYxV5Af+zmcY+X5Gv1CDqFlX7XD+FpggYD8fnFpz+rX5pnlNjTSHBWO8aHotX0LZa+2Yq+jEdtR0AVCe74v+aeuJICQlieJuuOC70bZ8kFsenUyKeTjb3lGWkjTuSU4dR4dLwsbekhDpI+Gu3ufcZ0E3TaVdhaY0JMlCFtJwApHFbrB1kyeCAeK/JxlQfE6zMEcU1rfqL6galLqX37YphkUsFoxkLX5otJR7rGuJCtQy7jlu6sNqAhMHCUwFeN2pxmAAQffQ6XX91qzfZ3LnwTs6/94QizKBEQSHgnH7fr9TpErN1mfGuD+t3ctIWtNZ2oWSPlh01PeLKH/+WEMbXcXHZ7dbtESoZA29ieHbRSRfh80CNjZ0Qt50zF4LqN2byG1BYwo+FVD4d5ox+sy6dXmqYI08N+37phtvarN/lg1WFHnA8FHP3C/FGQYMb9qBZhe12WkuzkDuJ2KSCQ7SvhuwUBFtXCaEqVH5IWWkIyRlAzroVP1teEGoDNK3rqm2JE/t9GTSxAEHlEiZD8cWtJb/JloKawrFSvkUN4i/AQGORVbTtaWDRjL0CZ03ZCHVsTb2fgIQnnrjYnSiryTdqxATXKSQ5F8gaJTEu/RfF25H8Csni9ervSSuqdF5dvVE+XsAQpbXAQrfQgpQyeSVuFC1TK0kG+n9fzxAXczFjCrBbu2gVrueQZA7HiJ13Ts1UML7SJHpUOWq/iz5lTvmtZYMc0YQk+O5K6AiHKtPGQvqYb0fh5/pwahd8ZZOTgbUVGwdEa2Cm3UKmsNuBO0MTIDKBmKoj6tDsBLb+UIsepyRZPfeFmRLEJL+I5tIr/Nb2zF5N6F5noTekEBXiZtqw7+bRunos5ByZMXgP1p/t5fzktwl2y3C9NUFWuNAvYQ56IwfinvIgrnRsP5YSzYmoWthoqkgBNnvpX8sRWrj43515yrWAKhJ75An7a0LM1TTzV4K0IE8Je/YY3NYmGDhSq5as22sWhk+XP4lCB+U2Cpw+/zRMQYuwUTV5yMg5pDKjgfrJW428qzNs3Ungg4dCXaED0MTqzKQacFnGsyCLklROOuzGwzVa3yd/K1Pn7RtX/5mYF8W7yQVjCPucEiEYGxLgFUK63WRNgKRd3dHPOK0AgJVTkH5TRxBcjcDHSU2JNuceCt+a0WhbfoQoHTlk2Ma81FsTuqe/GuvEw0oY2U4QGDCyL3WYeZE7XHg28aWNpK2bpHPKWILV3HLN/fr6FDtwyAmLYdRRm1ywKmxxTJSlFN/cCTAOP/AtY1hnaQe13MfU4=';const _IH='64921534b8524bcfd42e661e72a2ca03663a3ff5da7b9f1d06ee903686f6a152';let _src;

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
