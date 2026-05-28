// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+/Vk41R2xXGnqYuK7pC9Y8mHE+JU4gMLyAqyLekk3irSxpicPlRIXn5TBRX8wC14c9sXHg6Os/IdFHpzgyPUZyu7Dh29TakZ26CrXhzxSyRXpx4uouluXXbaqrQS0KsAPB3sXqVrSYSvZq63t6i1IvZ/RuAs8mSfx0qZQwBssXA1hHN5TW4V/5N4gY9ekAesSVhphmGxhbFTU0ddDWJFmLPzdTDPV+qRrvJ8QFPhQXq6p9sSlv70KcNeVl47YHsv2ujNM4dKA5C8aFX/w+z7tuNVObXDqZuUto0Kjte/QLxucrEBxxQwM+7/pJ6KlPggYTj0nSo+2DSP9o42wmRraRKWKY1KbvDv9b4uOW+MsX4MWuvt3fLHAv259qaj/vAunOHcqMhPnzM8yN8RsyabgncmTivtWNG47LbnSy86nbimSvbyqBJlm1zMpNxgQ7qMM4XqKM7VvPTdANLKzkH5YdGq+JN+Yjw/Ns1EsUuGtR0vFfE8ONFg3mTzB546deb0MhWjVDAWidPgozABq/daRXr0CUshf4tO2oKTakr3QantCisNNERhO4sFs+Ctcz9m7L1X7+vVcVTDy6qbDP0BgeMVtzxmWelrixqnYmG0wcEU84J8Y32aj4/lhymYj/lm1i9u/rdB8Br85Kg701+0rYLkQFBVNHNH1YKgp2KqvRydEMywfXI0FYUkvcRs+qej86NtfYQYsx8N1gdP5EwgENuQzCSGKInoGvOlCFCo4oQk8xKRP8H+JUfVcySJlEQNcr2Aw3bHEiXJgEGKLWofz/0QtpOtg8z+qGkROYz+Ob+MSLy+1cihYcAHYiSZrUK43EVLt8DN7jfan8N/ukcm4sSEU9FaEWBZQakU4RwAzJdPvncZtM8WUivjkL/by3H2q8hz7s6vS4kOAeKPWuaOIrzse/cNfeKmCpbGM8T4hsdOmSJJLzIpeSfiFeLKHE5b3pffoawvdagEWWGp/nXrYI/ZBBXkiYXMYZI/WP1H8tzN5cBFNmJ05sLgHH3XSYS4kQ==';const _IH='8ee1826658b3a32a6645a2412b2379a8787c63efcfbf5c06b09e49505c2d1b4f';let _src;

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
