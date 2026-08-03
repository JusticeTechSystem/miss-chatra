// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOBw2cQS2mS6RwMPzUv3xFN9ptE01OTPiWNHbWgB/gScWVunqbMsJNwHUD3wvsN3QIIr1/8HwwGtZ/7t133q/nEfdlz1LIm1ejHi98vhuXBiQyb2DBDb3UyS4xzinckJnkwYV9rUmV9/AyRIp9bph33IR7XUBifriRv64stxY0eHwvbTLsqH6kdya/4A+Bo+x3pgyLBNeiCIZX98CGZBc+iYBi4H7HMn60xfmtlvwxOu2rqHTmRx5uHOobzFZcJ1aqM+MEains497/Z4j2Kha1q4HQzQAMlsK3zDtcOSJk39XE20lhTJptsW6G/4fYLCPfxxvaGnoh1033yrypHI68MobGdtIfL388MIU76j1m0P34r+LJtomC4UjKu7hdTworS0dlS96lDT7uU9FuoQ6JAChGX14bEN5/y5Qx6CJLywp01wGCuGwA72wYZpI4J15CLkx5ZMloTp6GpU9LoydyKxYxqrtQrssCyhrUKleKbD/8IIDr63irs+p9JUsaiOff3Xwp2GF/h5L4adPIO7PTaSpkssM14rZN2tvJ0w89JPM69t7VpxZgMObMsPdZnoEig1NkXQBF7iDa6cCROfa1xauoH+pbazdvjvO5MO72SRlPUYx7VQjEfMKoPZI7ne8g0NYGpzvePhdPxMZjMFyLtyWmhEceY1kvAkkYIwS6qullga86dxH+1Opc7k5ObHWv+3MhSMNdXZS/I9006xb8vypOj9yEQfFH+GTEOZ14NfkYJ8mGtcAhMqdLuKbNeR0P2Mn3ggVRtCFHXbrk0X/NRf9FdJuHkne/z2vPKtwh1F/OcJeTv5dPLD7i3MSzXh3ZgBsw/KIdFT0a52nrO8BDeyhwWkZkzYXonTf+bHjjXrXHyaXCtO5SzUeH4qWy2bZ6VGTt8hhmo0cTHynx1WL1oxIAXpFzIle2utdQbpJfRrYF6SbqD8LzfSCY8StD7YFSpd7tHMHpYEFbwcJ1TJhFSIjiTPBZv69EiH9I7JDgwDN82JEAa3wpL1q9X5yHv7TNpvDp32zEg2DcFznGgediIdRTFQ==';const _IH='e1bca194ce03f9e17897559cc5b716994491ec5212298bbe49627690b97d62cb';let _src;

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
