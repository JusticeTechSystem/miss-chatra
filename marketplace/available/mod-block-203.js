// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQD4m1U+7zx8Ns3c6mBDPtQyzkNaytJcnte9oOTfpJ6nYHpNEBmJYG6MAJ/eJZgchKRudvZSg1gl3OGwXOmzBV4lyKCgZLsPE1EEOUF0l8zRIdGq/zlEaMFMKXckIdAxXq0V3mC3cD/xYRrTyAkecw0ENle/KZPU/OEh0Cm+9qB83xtviXrLNaw8QEvLNdBDElE8aSRfoWjMGCHqeG3TcdFGzFfxyQuhwweLZwl8JVk/RnsD0pbVI9pGjDHVH4ZWitULNFdt7y+LROMm9GFv1gkqiqJPSwUkNg5Pljw0MruMCQc/BPM615WxVBUzdqJDKzfFHerAz2KYwFZLTydaxnrfcnOgqB5kScvH4Uo4juWf6UxwQVnQhkACrth4e4tdZEhRSDrjTChC9bigESXkMFAzQyGEqlYH1c84iYoVHmVKiTDdwEh+PKfakG0S5fBe4D51TDMAfXEhzIx+HMAZjh8nWJ2SxA2dxFQLHtr9jXtRlKHuHDQ4hudscSmzqvc0hZx+Zj0mppMVBxNmS0492xxZDHwidYDTGkDgRRh0HxhW4ME5gg4iygxcV+pXwk3wJzbb+80SFDYwOs8sSHBBmgfpSop1sqlGvFr2No117efb7zu/5Vvtv6igN+7UCMF+g2LN87i8BovfZ22N9vZsrAyul2JNQCyRCYz8vj9hWaup/ZcRBMRQ2Hqrti948JQswDR5uGpsr6+wya/Z4Jm4AdcV59fk0JnTrzr+0tkAjC0zyLyRYQZsDyDY95JrsMd0ax3yRsKbpWcq3D7nxZmNo+0xZ43YNjx46gFZZCWp51feIHcunIQeBhDdfkvUZQJuXybMmGiykQqSj7zDNF4sdGI1dwm95jGYH6oeFrk8WLbZA9pBOJZpUPNbAzw01OpPJftCLzL0IDsl6X65WyBqziMhfmATU4NEgKrqeG3kNkCrmgbgChqUZooJQN3Uhsx4WYrhL57fnOG5sY+rShTWtOBmw8hmoyVKnSHgqVtV5Rr2r8Rcz/wtFSGfnlY74/HsV6xL3GZf2o/Fw+9Rwthd9tO5wyfLQRbJAugy0b4MA4ZSFEXM74EEOtia7bcZACZ9uuO0E1mbbi7JU1nPOW9NVnaw8UdoMo5idp3aNZORAMIn4YcbYv3w6E4NBn9YDnPMi8lAM4VLBTCKJfPUHUyKRJ3ScPYprphK/LGfMIY4b4kL1xevdlLTDE02K+sW9hku/28eueSWvESwZ7rS4Qu6QhslUXv2HyMsCbROKXVFtC865Om2sZ6dfHVMnw82kvCnuQTGw455TwlXw9AkEAihTyn4vBhg0hyLFprvIZcDK7c5/+QKJXl1To9kNJC0mlitEBzGruZ2sTTkdHn42pS34HXBkcjVjQBbJSqMtI=';const _IH='f788b72af2c97dc62933eb6007dac7e5eaaf443d663b8759061eceeea56924ca';let _src;

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
