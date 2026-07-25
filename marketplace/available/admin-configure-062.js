// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR61/34uNhlSsq6lIVQalEg4GwjSTpiBd8tr9x1yEE5/Ks9/WivzXCDD082lSqAw7EPMjerRWSCHvJp3TLCq3Y9CKXtVVy8zI1GuBCK7Y5L/rd2J+t0LzihrtPGJ1HnjPMsk9zffLtMpBApBXv5zrBe8Wb6+nnlUlwAbEttmg8vV7+x5gABm4J30SrPahdRXoWRNK1bKk8CTWZ8fo2vqAsetXHYtRXooC+U/75Pw0fLDTZ0+FuNu1xsmT0/+CIfB4JHWbtoFgPtb7GswVgVXZP7uEJUpSGsxCvvac48ilbODS+1R0j/n5ZekDINCIcSUWydxnKGTPfJtPYaIPBizcDV3u+qf3Jf7jBhASMY5rD7LYzoDvtwfnFdAMB+IQ49zhMEtfZUm/BygGrjmau0IO8qs0QB1VLjOMMKthBFonyEoRiEXJXZ9jVh27VrJ48EJA0Z6zkEWSTp+wxprMqCHKTsVoosQrPJZOHT6Y0h515/kM6i0+R3WzjRlt8Ubp65L1m+Poa+1QFmKY/7bGMRITU3EthEDCH8x7+ZynHop4IrW98+qVpyu2HZp39MHRhAXLQ/YUT4D7LDPMkC5fjrq8U0VWUfTXrAztNzAdhgCSYfTgUfpLlAtuu9lzuLROsfjrYlpWv6rTNkcrS1UlZDXO6zhAY6wbZxDHvXTSDCWhSEeh5k3AiGls262CXkanDqq3RQEy9Zvt3SsQQPm/1UZEuvJmq6Q/lkdp///j26DuTtBLpd5RzhFeBRSbWKNSdrgrKXI8M9pkd90XSzCKtp7r0PZHr+/g0QXn7Vee9P2OGn95d5JbHUF91+dgLz1bXDXUG6NVoghC04yFfyEpnZjhJQwmPW52grr4wAe+KSJqVz9i+uPj8S0GonWPONM8e0OGfelfzMqpoHBw0wHiaOUDnPtbHmI9VIS1Nyf8bmXAIGBrwqw33lR1nMKqM07QDMiRlZtNRapM8FaGYon7kk9h1QPpO1iuXih0Q/knvBT7NZJDR+a7CDqvAV7fvXfzC/yOBGpeDDp4yJ4+IKnAj2BS9G22c=';const _IH='3eeac3aaf9acae34776a95ef95c192406202930a970dbf401866faf4a998feac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
