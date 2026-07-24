// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTC6RL3wi5ZxQOlQrooXfBJTVGt76zk0M7GLY0Vm18wyI41qXcmF8+Lvj6TqZJwpMRFd1BcTBHfXHMCUIn+3QlBuNyFWNwfuGc68IMvrzTN9qDBc5l75ryv6fB1L2gfzvcDneSI4CDsKnDmcBbDVM2iW1wtGBMjjqbpILMKZ6sw54DJddf53XRgpxnCMjuACrDVhXwXyIU2I7MyrG4trp6kFH+AHfZf7z6e+wNcan7/SfVRbq/pIgpjOBxjsHUYhapQlOb+NBoT3n5xVJzulYnMXsdu82KF3gY/5H2MU1tv1usiVqzXVChqcpieW5OKrHK3bhLKADQ0aSoCqiNA13ffqMllJCQKhxStpLB73VMe0f+LH1GpLNJCitlZpYXZRPnO5sUwtefvsdmujBQAfeROfilXt2J91oluvsMejNOy/LHA3+aZE+B9VdadXX9CQm4iFM2F4ADhRgCIy1LTAEZ7Fojiah/IpymqmmvBciJ1B0R5Ov4MBzGNwtb5PWn/LNMXaLOxmUXjDnjl8Pb4KD8XJQ8uzVWzsaRD1eh9SHUJ5CO40/AJKwnXSo4LMJ1+aDeUCdXKEKCfwZcM4CFBPtGUHmEiQEzE21zmMOA3e1OLjll3+QhkM9LGX7RWSAMJbDmPzs3hg7KbSLCCCGlEErZDdWR1t48SUMnUJT14VWjz4T8A0b1tf16XgzPvqVZSL6kbtfdS8gMdWPPIdJVXXM58mSqrRFO1fPJTcFKEc8kLzBom';const _IH='2b3d2ad6572b4500165c5c16b4fabb2faa5205a6c5baaca400ce763383692059';let _src;

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
