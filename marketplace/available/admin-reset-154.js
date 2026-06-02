// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u9Rh0xpBJn4No9FZDHkU22rieSg9coSfbf19BGBxQuoeR6zMhIUnN1t7/Om7EWx0/obiXzbiorv4NAg0qIHofFUlHnDvAIxzk8Zgsc5DOhUVMny8VHZ73E1ZvGVt52pimTymjMk+HWiFGP1Uy7PGn2hlSPCeEHU07blapd2gMSP9UvrMX+EldR7nHE+0N1YD5VkfDgYpj/EOS5Asb3FcfagRrUBlYlxe9geZnvQv3bgwpC3o1Wl38xnmaHmpTqz7tzfbWUk5Z1hp0mc+oncinsJwAdSOem4s8k2cNU2LuEcMadIezBYkqKq7b+h1yzECBYZU0wP0S8fFkdK/RMax1tO6oiKqEgu3/i+bKAmIud0y5Kvgz9+AqvlnqPRPflvwQabNdRVR2H/PXVyjzJvo+96RyefDfQOvhasuzdcCdEtmDEEL3vPSc3+yw5/Dm9qsKQmxQjX91W8uxYPZnRFNdD2dYqXQfjW51hhEaKOv9akXbX8LtqdY6NOIgWfHEmr7hLj717RfdgvbwI70OqqWUm2eIeQDDm3ap+zwDRW5NbwEr0GcFrXlMH/8K08C4jl6++HIMId4E1Fk5MqHQteOeeG0WkBWG1u+P5aOu+qvq/tZobKGDpCtXxCFIQZVnzP9SgKSkEm3TEdz6i9xpHpF2DrEHaQu1sp+FNpbOZrMfy5FdqqNsI8XUANifb/BtdpvQtRSsKLSn1BNF1bZSU5jZNuTfXrQBwjSV/2w5wEZQYvJEr5hc58BLX4+3kCaZ5r9fClbEX7y/fhjDfIrGhGhoUJU+CO/6OiFlsTf8R85Gl3+SFzvTJ2h6ENMcLjAmbsGJGES3MPxN++vEDNOuUnafAvxA/psU0qgn/XT0rl0yo/+A3NiUfe28qhuDoev94JXtm1hsC4hAyMpOhMqQADGGtruUbugaXjM9unZ3WG5ZOLPbeAW3jSYoxFDJ+cp8KSFzjdRRz7yGxi86I0IYptA7m1cuqXnIVFVLI+I6ZMjLNMlZPTOcclw4BWZ';const _IH='be5865f96f5cbbd9461a7a4b0837754a054c3a41fd96b34e98220c6323fcad15';let _src;

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
