// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8de89hvpTlviW8y/6NBLCVkiLCteQCr1b5ET1XBsHCZpDiFlp76oOuUbZGAtoq577cIabosVG4+sngUjNR0L4R8egiNKB9cvKWXSUV0TF7qEJknFZm4D64QRnq+r9++G9bevTGY9G/aTKNJzjmcgbfoo/nHnqSRE0yu38+tdzPOvtOyBMLSAiZ/n6PtleewfN6M7dMuGr0Jm1fqW5tuqIzxRIybMR+yB8jS79az4r+MFe2lBb1UMFnfx6fsnma/t63hweXl+/XnqLjvUefB6d9D7/bLEBvZqbDo6HUTsq5+lGRZzxs3j7ArM1MvCOdh7JcbV0WeSO4SUrOv0Q5mSoxrE2oQqM0MWoY9VYPsmteOjBH1uH0vzJetAqgvXSoJcg+RgKSWD6237PHzIT7vE7XbEXjzroChgakWj0Mz9PnmxG7wScX/+mEBcXV+BKIhQDqMLP1TB6mBumlJbVn5A8v4gZupXu1LHOW5IOoJhSTF5ztEzzffuz4VZ8xgfvHDxQmViReSb4tnUI1amUJ+JmwCUbm2Alk1zov42fwRgE2zmbphzyWpkMQshU54nfWH8ONjUN6vX7P2uKiAHPQHYJMcQ7lWQof5g5maIORSZ3aIFTIGM0d0vh/wkKOoGFktANUdAMNPdcpi8qjUdt5pV/eOSfRxHwMoySzZLsQiJKpokVnAnCqYwCRHmSmAHHwLKA1ZF4BzlApJ2exNfp6YX6aZzLTHeO8elnw24=';const _IH='0f763fec8f9d5dd2c15d55799c56fa3d1218019ccb522455a006588f24a8854d';let _src;

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
