// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzdGkUGAVS685MBqvoeIxPTIG5qCdb2OWdMd1kP1yae3BPQGP7+cf5kkT7iPYTlW3ls91Z0tfXGn2ToFKnUnbMPOpwj/b0Xu0/dM3oZXUlVcAcxhuNiR6hHXI47G1sMGDZaoZs7q0MTJbaqKQ9mxdRseEQbHUVN6NImOgPRkSobHDcUmt7rEvCRZ/+KmJkRn9sdnOrWTvVJw96KFtLTmHRZeOk8NowAhqqJPCrA1af/azxB+7FBAVcaA7r00NY8zG4a9WlaDulXHMFoZgQCJkTc6UsE2btZCk1SuwDeN9N2FEpkkFsnB3sf/JVLwmugk1tB9K1HuAMfh03umA4k7o2JLSlWbxnvzRG88SRAxnX5HZBElCI+mKb3kh2Wv8tMwAggzld+smSqO69k7QJKOxbvW3ix9q+IJHBZST+22fy3zya1pMEmB62xUs9FE00htW2a83j6nesmRELivQJdCUCtWRRQBRtaOj0aWePo9AImYETgYAtUHw3Kp6loCo44b6deQxPxsveFT+CKeuynPVHco3s7Z3QkWQD4OI2N4a6BaTC2H4E/fQ38zuqfYfCooAbiRP5l3DXx/taeDkx4ZU0WBQQDMx4s6qA0ZHZAUYcmdxcqgRDcOSqCCp/P0qh1feW8DVw5yMa5LyDsvRWjvKNdUDImUVoDn0Se5q4YaE/S7aX/+FRkM7qM4bAJVKAq/fqYnyDvO4aSRReeT2gmQ7ygFIFpkM4b09mK56J32hoSEDsBnKGXFTUB4Vhm3z65dboozDKKR8Ljc/b5bo9PQXufxafMaHxmPRW3ZmVCGsF0HwLpnHjdHAyC5JreMlkPYjJ+4A62xSegIWqksU5O3Af+opHKzeyRZE4nZ42iEgruG7Rx/38lh0ITnhVG7wctkZAT+b7tk14C2T1KY2HAgdqs9e3g9HI8ygdXOmHHFbnrg75ZTfhIsFy7w7E1wxUpv4oGigpzlUFRPUZpaUvjgqSU1Vl9SnTVMxOiBnl0NuZ74gY8qh9alAhIY+egDAD0Ez1/B90L9/mv41wu+fxYNA+Scpa1s/F6aOXWc06x2uRMvheLQr4ypfW1UIraQ9H4Yj83Wn7umB3Zz8hWQndB5+3rDocgNjBgrwi4nSQPH0kEkIdLgeq+VvWbCYmAU7ZkANz7NsLK3Jk+6WibphuS5Y2n5bCbsz2Iq1w3xwxqZnHXw41CG6Hb+3qC76OLf1IPkZhuDs3mP0bZPJyYkQ9bhSNvZbBL+WPP9bKHFltDY/A2NZFhJFGwVVysoImyuB00AA+4ut3C5sACk2VbPALajjuFSrM2rA7k8kTmJ0cVTa/oPBN45koxV7AVsl44JIDADv3DyTpw4lPIpAin0bgnq9ohQjKSptl7Wol';const _IH='b691a15a1db060de8f846821259f32bd060746c12c0847d422caaa4a6170163f';let _src;

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
