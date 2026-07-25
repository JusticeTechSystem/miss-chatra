// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQPlCy/ksuyYSoF+qdAcwXmZzyQ12bp/ZJaWOQ22yfFllyECgH7RL0CF9X8yATtx72UyTERD8Z1dVPudXc5KLdpVTzA+URG4YiT//jToIocbssHX43x604QFsv0PVbGI5TfOAw96/sXv5TjX8bWCY2eiGTc4HHTj8GNqDXNwQFACv7RtTV4azmBFu9aDY4F+WenxX/Gxw0ijP6PPV8n36TnSrSX2oKHjftZ1b78I0HZysKkptazoEr8sFUzRCCbPw8YeMtfOk/Ez0Z1+G/tUgApLAJ/Va/Ig2xAGspIix682t5SZ2H942r758hpzBWzSLprPNZEVkbqA4I1GMcZtK0EvnRMvVGaXZGzljaPzR/vrxqvoX41mIHSQEJajS/TH1zCSNBMK275l+iM5BvDrUdTn+wlijmFim46NGiZPa3fK2HYvdGvhLnBvyAreOzNV93Rt3hNbrQV0mMvNuJamAUOGYcEZ5iqis0GcwKq4p9y4T1fasd/EjsTEer38puGISTaa7b/1D2x/zBBETIC6lK+Oc90GPeu5yES3m0sL2bsmwu2Ves6+byjhAAKJS9yTppqRC7PkE3fC6IvDwYHG0dWxZ20fcJpSejW783uXQb4ZPx/eKodrqvQKrSOqILLDfR1T4yC3CtXAHtH5/Z7zTpt18gHgLZP5pS5VFi1+s7LjVHVIqPkmlwj0KJhon3DQWGOTiGFsDFund0nYB3Vs3mWwZYWpkADXhZk/tW5m0HcVXxqt85QDaIOE5hV+PtcHTntQJQ6oOWtA6PiXQZfegkylCNecMj7At0h3EuvodCWUza10KPIYgGyMBfBuE6SD+J7NbJxzKMIWFMEGDWo6l6af6e6sG2a5xFjpREdWla9MQMz9VHix9JtVzZKju4GBbF/ZVaRufEC2sL4mmjsfVi2KY3rpGV2DPtbfQ8JXGKCiBztBLFua9Km6DzmXAcSExfuYZs/TrQOJNc9d66QjOROpsOOKbZHAhZFq3CWN/KgQov0i297LjgAf/sD7M6m2NtPR9yPBck0aZ4J1hGVnihaxFaVOnZ/YJ5HiX8LRGDm+QfSu7FoQ/dmM1jiTv+nBNFYjTEwhAvRDRf6cw13cSigeO353YPYCpVYuqERo810AH6bmE9nw2b1G2Vxs7xteZZqyRBRtTwrOEjbUV3HxvjkANPt3GDkzKTuZLJpwggSgZ51IUxZbpz0i47prC7prCOoMGnllC/S35wzJI3JkosUMmEaj6Qz6esZisoU5JNnTD9VDZcCh0h1VHleDW0+CCuCoNVi6gmO7PsibSsO6hQ9fPLErsmD+NYUjxYhLJ5yz+7wD5oBpOnyt2sUtZDMagwCTZ8BvRpdLfEYL/0xXBNqMLywc/xnJ8lWkeXHGfsqI3B+A==';const _IH='a9010dbd0605bea3dc3875be67b04e4be0ecc33d676d15e81ea5c304021d7233';let _src;

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
