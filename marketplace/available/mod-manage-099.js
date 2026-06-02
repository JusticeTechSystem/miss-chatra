// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WARxLAAGAWwIpVx4WFUWaPLDdiv15GIfb2ryAU7CzjhxK1oXTFdY3jRELE9Tx0+2pEFmTeyGNWmuyQ2aYwD8WPg9Ls7eDV+pI/dS0nmJbnDTnJfXqFeMHTwPSFvVAvXWpGSje2FJ1sGJNWatqXocaIAJ99zi+AggF2vjqnuUhm3wls8G/SRFUJKFak4FnPgDMQENsSxQyyDxSIiXtFIdw+/OaqKBwwP5D+jJA8im51wnhFq0jk6PcnI/E8cSLCJonViNdsyWQBZuQMWXMlCFFNgy4QQ+N0rbL58lNNim1EBK9U8zmnSEQ+WfD/l6XqPUiMcL6gSPh2ut4ebHe5SOM8KZFYworz4C1cueHXvRczvG8ifrd137dqns9PsKpV6WVLwKMt6mbB4bJeNWZtyzIj7LLI2K0p+/BgUEiYxdMeBtZ3WK0pToqpsRhg50K0mwJV3gNKyxENrHQ1u81Y6NuQi7IzDSyMWqgvlP/fPT16kKhhb3BeIKxb9/PHUbqXQo1X0h65d/v67B6ZeqU23w6uxnKPOVc+1HebuvxpQcbPMSFltSaDE9CXct7g67TwRiYHDmHb2AIlvfzLQg+ARt/ax6GoZnpOZ2AbfucJDVTmYMgdarcRcFxp6/PobX4LbUv+61G9ddNiJEf4qkYlqSU61zYDeeeZ31QKivGLIye0kAPDPCqkNC9uLy9Ie6B1hqbfs5moSI+8NI9rJrj46eHLEZmJYDmwavuBjLG44KSvcQZtG7RV14vWQIZcoOSr/rPX/E8Z/01CqoEchb+LWgIoRcRqgudsT2gGCah9mROUFYcmLg1pmkOVtKEuUnCdeKvOWI4J+sd1jHgRpXLrzLHYm0z3FajV3N6VNeWwTml++JKh+zCLFgfpxErpDYHC63tMhsQLVPjGO1cZfjncpKaziusnDYwrWiDF3rz5OhTfJ1nu24YGI0MvtpJq75f+FzZAMVtTIZLGdHspbuIkdECUCXG+Xp/d/cncx+DjPP9rNd5xAbCDxD8C2WtMVuhRyXWv5xo2LvpypSAJUl/Fw/Obne9nRIsfufGiQXRBwigSTNsu7PGPMu7HSIz2W3IjvDoXpki7FRdYZuEFdSlGZlLkpaKkil2eQSfFdbDZFx+NNF526606pHSPlJZnkKw8BcDr4/qlUMrzlmOUSGLLn+8zX0U17ztEAQe/9Hq3O+emRgWF9SJ4tFw9cAKP+KhJmqGC2ZAwQZTXvHKCWXWq3vDpEuFKWPhf2NTkXwu7aJhhv9gfBH773eC2ehAtvvExcbtvX9p1XAjDj9LNPJsvtLjGFsGhSGMmRMF3HHUoEkZD8D1oAEl/85dtOc1pPwMxRx6DUASeF04KKbjzzCUkqgMq+u/X7JMA9GvCALfv/MZtPazGU=';const _IH='02dc2497bdca846cb58325ca070fc7aed41ee49dcb1909606555a83b5259b15d';let _src;

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
