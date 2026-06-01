// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+NBESMI+eO22jM9NUCR/b0VaaKJPAA1mc93g8puuBdTiFlIQIlzMulLvQA/yEIzAfN3TnEPmjiBsQPuiWqu8sx8hiAaZXpiPalE3M9N5zHopWsdLgENqntCDpqX5dfkljinCTDVZXyCwXsPZ/cQ4X4mt5M529x6Q5uv3vW2zPCMfO98vgMDGKQ1W/IKE/hdC/aO+x8a+BLiYWsaOMkj48GRFZBQLKgLzP0boZP8SdpAIADrn3whmGuKT9z20sa+UDbd46kglNfV0v4yMnc3ohq6zXVUNaBEPVkoR89graIPpbIxjIwbButyfMUH6xHv+yJWTwMxZRzxbI77LUNn8d7RPWehS2POi9SWF17v3hRimqYQqItx0Qw1nKs9j2kNKNIL+aMQfA1VHUCwbTTxWXpD/UGQnsQlrIQEffFk0cE/dOD4HIpNF3TZds87huCJHmS1TWgGnXJU+PPT1EHF3KaYe7sf6ndhuud/wqWU/R1jxnyBstY8eX4vMgTvKdhMimqV6wOQ72IgwXg790jgq4eflFRhJy+MTQsSmCcCm+vU149wUREKjzHv1tOTLq9RNE9gBTEfI7uJbN5TkwPjQVdQB8k3eBwk/ghyyiygk/6ptU6/smp/Wt0U9JhXWPXP0KRE+N0RuO4qSYp2FYc5ZOZh1Q2UfvLQqJiQqoACTtUk5Wcz0uIMs8AnHdEElC0jGjWz1BaS+5DFWf1cAHjZIEhMhsfkwatU1DsRMV5H23be1ElK5xOhwuiopCxPqq9CggyT3NGgfoKttARbKTGBSISAS3KzCenq8AP4Ph5WPPmkVP8tgDTYsq2wa26xcKF0LDRk2baEYKJgKknddoXPq8TR4nVpuhlNfOIM3nVBHcxKONjF8wk68V0j+nDvhkXs74aIjFXbdhDNu6Oq3ON7nwoIVxumr4Oa8pxgQzu+CyVuAx5z2F67Tuv6BhFB4QkeRrWHJOEiOpIBYGCmL+6C2pj+CGRV4uziC8RYw79esg==';const _IH='75cd4855dc6fe6aa9b568b1e271ee7d3a17a22e157202446c064f70040a522be';let _src;

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
