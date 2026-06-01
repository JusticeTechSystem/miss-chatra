// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ75RBeyeY9McDP85ZNWNo9lkiI06sa4ZcqS3Qx2Udkf3qFP8APUTa9aKzUwna4h+afdjKJBRkye+HFmucK3UB8Pr4EO2Xg5tjDBNsMM+MDIBdsoeNDBKHKpKwMxUgoPg32o/G2RXmNvbHz1ivavgr4+s2R70tFi0M4pBI5cuPwNLCTFDT4JqJXF6TgDEVipGYAgEaThlEZ0W9GHi5BqGusv0d+50cbfRYzyS/nxSG6l1YA3tVhlJLfqRRiyPs0zYo8ZIE608uvRLqJE5FBBDKrOHOnZW7AeECFnVVnYr3CTns36vypAQgU+SQFVBORLYsWGtBjQhfaXRnb1CQqN2PczyetlPB4VlnTFXwoypiEWEKHEL5qcatTzDdYhhEivZ1yH4QRVsN/gtO15Q1Hz35PcGsccyI+wYcyic9iIgyREfzGjbXohKV+El7ZAqUCdRVqxZWWvpl7dcRKbV0II9bzivuDYX3fw5OA70BujhwvlTICvPvkdAtUcTWttBzcDuMO+P/wLvrX7jqhhqMrgauNObS+kGozV5Ku++fIPu93wJ0AKTVd9wQ00Hw8TJ3A7DS0+jsRH2F6dgVFOz53jPpfjADie6TM0gOL1h9fz7zbDxS++R8771mEWZvF2Q21EALlxVZ4YU7rG8g9sUH1vWdIZjj2xbrUj0/ahuutjRd6YUzUiJ61m9FcaiCN/d3O6Wno8TcYCiLgE8ryCoHk5p6VCQwHdX';const _IH='78df1372d5b66a07505d721f9dea4d593a9f4855316e944bc7a648d3354c075e';let _src;

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
