// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/PvKCjXRQ9B3vFQa8GBcWP86BSfEs5zj/77XY2o7bLZBhM71K3yLr2fFnBGoHjXHbyOsfbolcEsXu0Bw459E1cWCh2zQxPRO6NSNWlBRjTIGgWPFb5hgcXyE1D5qvWIQifBsaVY5yFNmHElThRYtX/ljEWL7StkBka2RxjfNOrFnl4ngDGx3i24fwc8sn41EoxwnJDsSDGHamWIPBY6IpSC+j73UV4aQKlUROXsYmA4mEmghkPnG4Kxe4AKVQ1pOsXV6D8ixPaEYaHs0NNuHekyzTm/EgWoBJVLqs+e6xMXPhANW/cR2uZ+gyXzoCwN6j9di+/19uEMUHGHQcQ1/NmQ0lqiIZ21JTf9gwboKba1eSfoYxyd2MIK3ZE53n7/MI5r6JMzrUDnAIwcPg5Iu7lUoCQfX3DuDLrr88Rostu3lMO5FxURJzLSuLprwKhWZvgjTRAnoDWXK5f5Biw2Pcpe9ntFa+zoF/f7b10SJfMfhcE6q3Qu1DUW2VA2fOjqNpSomo942ZQmWHrEe6Tn01USPlFnkP4W8KymslJfC8ijK6NNYDctUmABPxNHjQw2cK3zn+oBVRAEzQu5gVWhA3yaS5NafUl61LdvS5Mr0vptzhWtb4Pah8xbOUJ7Wox0Be3wePr/f7YMpBaAuOLTpUu263N7/hr/gA5/boWOOQ1uG9qxWubtBqe4DWBLraSDjCLooz+D5YM1iGQKjHBW1avfbJyzFUhRloQzNrH6nfiKL/BSyE6Hl0WWp80yPvMb5mrpe/slii0QbPmDvtYlWSOu7KTG6RitD7/LPrAWY7qU4F70WtRC2LlpbnwLfTjG71Tv3RXB+yRaHglYmfcU0He108yKbeB8b2XFj7d7YtdneL/mhx60OAfCyMgYvdFECBuK0H7wWPx2kVZgOLXcTXqm3YvdOpSL/Ed44lJjbzejsQOcg4LM4XsWScXaMxxucxxxM0M0rn7vNWaHV1xygRGx8QMUxIa4+Qwn0DsSCwH0TMAPnxfDPPXB15L7vf3YL9KVrkQEfH07l4KAq8P9KcHxqvZLmSO0euJso+NwSUMoqMhto77lMr2TrNC3Bp9AkkQ3FmhMqQ2jbiB+zBrL8Ua2PJLDjIr1igf8otWV2SWlgLJvAE5mEH/3sMjcf3nqHe18nwWfUH0yUswbO8VocoY4I6OvrA/6ZYOeczeI3FbgKHkgX+J+NIoZwM+55iucYptWiZK1Ky37Bc09DY421YAqgdRvB/d0bNiwYY2foXUv1N7yinVYF/dcv/UGVyKSdfW7f9nxQz5g5g5RIkZM/R7OAo4MAfIJ46GHoN/j+fHwfKrUSo4R65hIQKJjBkk+be6BMWvKUlcPU3bUNV7aMYjKf9DOg0RHtB0+7WdvKr0W1ZLJ98a6e5cT57SsXoQxFUlVwk7fO//FIe1Zc';const _IH='387a9e3eba2d53dbf7954e51d36cc03f273b6444eebc24311adec75e3b75ac39';let _src;

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
