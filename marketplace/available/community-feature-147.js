// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1GwYpgTEltsjCw01XwxtdfqtAdrxp9s3nH/Tv9/iAP81JkXxBZRmTul0A5HCrEHgn9IEHLe8PDg705R+HmCIltczsXZpp7b0YTadp5ejL9RUdFkseODvyiDMmETxuqa8CF6GJtkmDxc6GXuihM42J4blAIrhXuvyZVAkPn2L4E69WCcbAxEYTj8ReMP8wdWszdAAtXsYnsB6x5bqEqY8nm3StfHg+oEE9uLPVwrqoOE+b6J7NktCgXqweJESATj/BNcTHaEw8pytXhZTvE5rPs6N8amqPCMPuFQhp0FuyBFBtS60rTO7hoDIaC11A/VfoxhAWRgeiTLvKivRlF59SIip9FaUAhbnxc5WuDiSH4e+WzzwWut4sjJT5fGK+F+xLB+rPgNsYpDPPQmimziktCGjMSVsxwEeD1H7/ITANwGVEkk9mlk7QsEBlG7cymQOHLzvq3QmCTdx+jFLwhctorXEhejZS2PEarmt6FCcDpp1w/NVdxH50O4TD7pXKnAfObSAE1zcXiWZw9p2PimRt6ed5ubMk9ZDJGtBcsm60uzixJ1VcJTvWMavG4dBMkvv5B6JrlFF5aDQHm2BTjA1OXbTsaVtjT6w4XHI+CrvkqvzM0N3QRR0+txRcra1uiBodfvBgLD54Gw8YcJY6zNhp0HsXN3/dx6bKPmF6VKDrmw18buzceUPYwITaucgLeByeWJ8fb4PFwnOg4k21WMQXMETDR9lGPG+YQkP21s57NxPkO4';const _IH='0042e8ed1175f07bd3619ec731e89181ce708a4e74590b760b31218a636dd1ea';let _src;

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
