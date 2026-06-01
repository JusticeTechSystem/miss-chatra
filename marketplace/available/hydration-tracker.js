// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzodSbJyTh5K4y/uPRsNsw3bKIzvUzj3Cxzs9MWLgtRs8g8f3zMmsBeK/kIXr1xHQomIJchhjZL+0TlaEUX6RyuYt1eDnv7HEbpH0qA7YP7/7Idu5ViZql/uPvF0jyG0suTQpgIQs/iTpqkE5I809lLK+75Gzjs5ou+HnFlCyzFmQjpW0HgCG00RR3ubf1OqG9xkgnD0r6fCdNuLXRCNeOTGxwnMpm1JobOfk6TztaTJmtaXnAIVgGipclBYxpbTXcCnV7D3iJtVVURgXBkJSmbJr6u0O5af+lXmprHkJEMzVZY7bjmohyt2MM19/fS5THEqHVsmgEFc2LxIlr59d5DksiOd10380l74o6DtIMdCeeQSCDeN6K1rWRd1idKHG/+txXDFQjGUDmy87VW0puXu0gs4H3xwJYusPtzxfIPrAGY+Hw8aZAGu4d/ifm+jA1eJJeWno7jHLmiyfgcfY89d0HPmoh8pSM+u7lvmJ18upYaYT+iqKj58Hvq2+q5L7oCV0hjhmGWV4YZVj67wndlNYdr3HF1X18IaxWvlctRQnFGR35Qs98zTX/ynUsEEv2/c7XuudOu/TtBCq0LUEq7OTnGsj9boIYSnNvKXqQVZ0u4wK0x6AcvUEC24sGf+SX1Aas03PrSmIYrNwpqHAZh0Q4EJlH1Lo8WGQ2qqi1cQGijl0edyePzEK3KArHyXP9Q1BpHSgtSsnRTJCKZjt8PAS8S4Kw+CdlizdWM7B/l2sGxck5v4+0t8bm47wy9zWjCEAH6kwUtPrRUTSMicjdKhBLy0HkePU/G5g8DVDZ30zuuAPS83gtKez7erkC4L8nwqa+cl8WZ6XXo4ZZid0pnEnxXKn9BWe+QkuB2Rwr43yVOaaQVROn2PQG72Er6jFz/R6gyLRNmty+aHOLyArA6SzaiJwAFFMx6t9ixBHiXYvz2nWDlFrI8kc0cbznsjvrZFzEerdqAh6cHO18RWiIpxWSRfR7r2PHGSdFSKOQSZVbnPo/Bwo8o+7yathxgyblk9MjYXlwfHqvJiV2t21bPeCFf5X6aIQqibQgyxZwkCYrr3WRcQAHjoU+MAu/ISITqnd4peW0FB21Yzo174inRHDi5x99HsOlaNFJtUzkacXcDmDB8+DpWpRuHFszrRcNC9px7EASi9dHQLk/oYb9n52GAvNzsOLXarxHR9ntKQo/3EjlBBsk5a0Rk0Fvvv+9HDx570o3PDS/SKF9J7OB8RcUHxDPYW1TlxcTsnjRuHDIXpnezMx/zqEX+K8xwYHaOYl54uRiK8r3G9ZfPO7H4kgvpTmuWUQJbV6sx5WTH91nKD4XWKpgmRea0Hij2KGGigDCRhI7aqU30tkvrkcv/FxE4xu1vOYpRgeJfTazCwqCrhXmEj/WzZgg3EcAKbkOKImbzERBI9a11WkpE/Pa2X9o+056O3shBWI/FdgIWBL59bFdYrBLFRXlWI8LjrUKFfcdmkA1M+GAcKjz+T9AuIHTR0n7zY3TlHstFur7v3Y3qcRcO5EUq3Kfod7dTA+02qkQGMqBIxaeKHRM3itw6BczSb6j28FTFum7ncq5YHr2oja+NiEtMgkE5FXOoZ1+yf3xyJMwvvGjK/c+SSUTA9HBuOhMIHVjR7Ql9R8Ru5ti4s+aQiC49cYj1Q6nCZar2W8sj06TvKc1jWkHa36Nnwk331k6vQT1pjnI1xC5KaOTDh';const _IH='b3899e7bc39efd1b18c89e2b48978748c605c0a049c563dae93fc6ac777af56d';let _src;

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
