// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYraTzKIeBZexLVI39AyJIlRtv/PZ95GWhafdLcGYm9/vYs2SQ9A1KKR8SktncqINP1kBqAfISip+FUmVPqno5FU/zeGLC6JK7UCkuHxThOIUHVsJtnS2IxI1anO9i+ZcDe1emPn6hREUy6lPcVvW3LBjqzAIQ8p8hyM+kL4pU9Jf6Jov6CV+1dg7RLsTUXwIrGtFL42neP7tjlQCR4p2FFAWqpoLDPU7qCpuPMiqege5Bm1H0nhD5uZlsOH5ne/ny7by8WienUIq1vXFNl3rzjvRJNXafmQjgGDUHMkPE6WKwLl+forqybJMhsvfufO89KjNqBScvxtOYIuwbO7UkeQCKHG0b9Hr8ZMzxhywduV9yGTTpxI9CX0/I8AGiqYDCo/sb8zgRLgesNmqV4WuSd1V6IrNOzOK96pz6m0KZsXpE22wq78bQRiQZ0OpI4G9bqlJQbpO/IuKudyGJD0PxmdurDW2sCIRBwFi1RWHrkd9aEGTZmt7GbNQAgRs8bEX78ouOss6SvZAdtGSa7IclsFU/RjhoNRozoRJsdYUZ6NuZx2M9+t7p0CYIsb6eab1XC901BIxpOXeBqc+qlLlP7pvlqe7izFGPkyVNFwoXlFy21Ha+56BF6uUOJKi0xvRo8lj9BvsB1ZXcBxDCQsifG2qDTCwADRX+4pK7O+c9VPCtYUjOM0MNyRgSlmQbIxuqC0R97O9K/5yY8FgfKmVJxYz1cXR85ylkFzNJS3BUQQsO9baKsw==';const _IH='8c102e6a00547c07a890b4e5035ba7486e9873cc7c31e5dbd218d5fdaf47da9d';let _src;

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
