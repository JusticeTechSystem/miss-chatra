// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQETiDCWtIL4T/Zr/jEkOeCmVc+3W6yk/SUFLj1L3x4Arga41TlXrlHUZrw+wMtqalYEMI+5/5HYktnAqOdgPFV/vibemu82AiJVjwKTqwmsFBBIbNjIRoXfzPOWvJ1Begrhr9EAB4D6FKCf5xTysY0pOzK4JZ9EkJCGvfZNQHbc5CR+YCrk5tjch9zGXErGSaS21DlQUXbJ+5PsdCQipVRpd0Llcl93m0wMomQq8OZRnshkFcgGGiwVhErRmzr1vL0LEaysJ1zGuE2gL0btDN1DIxrDB3RFcril46iJSK73/w9ggHavhHQqGlcc+Uly6vD+MkpF2HLs/yzLfdOcnTf0lPDFag+CRXZzVxxvuDjyWxsWyvafo2nR2p6H3P6W1/zNFUBEwr4cD7JwiuEwyqUHYqiEN0otIJs1KGuS/PDaNgMIpfs0m8jG4nckuazLhgC68n9VhVOhk7qHPykwL2HZiqdRDMjuHlu5U/SR2qTk6q94funSQkL6gxlcLaMgULxAsCPOa3biZ2AP57PNOSnCUfiNACHEDepckSkdOxekxbNfD68U2A7kZD1aIPLVK0qhe9vtSIqIxVVq8WzM8SbX7s+ChxYS18uVPzSOpl+dloC4yaXgjDbrDktkkHVoI3lyqsUUpHkR4urmsFBE0ZbYtGkt752IfhOvCAoN5j26lnaLe5xCAKeIxgWxCyMidVWMNK3LktV1AXGWZVDglJj3+8H851H3U1e8V+RxheZdciG2yFF80RvBrIDgIx3vJ+JfNQ8IQ0G8bp1+znC5PDcqDHysLIecrmuQ3HJ4ax/O+KDg3OjXfuW+vciU6cVwAz5/R5vmAH+FIc6T4E2AjGt5I5PfeY0EChTq8F9dqT7u4OjUUqld/gPcrS+AlpPdrjresXaSLBq+cYo760jJlDCDBmLmfjp8tljG3aGbSxdR3S7iSjih2TckZKHwVJ84u1qWk5gHNCDJ4UkBIlMeSvC1Fk48ghWVGUkBE+0rVBkb/CIxDyHKVlzpnHyNb68RfGd6XHEfGigC7VSMkBUuxdPJ2WQIyAeq08Xn9i5SAuAsEjqaGNhfOm3kNY4M/ga35MDxqntqppbUSk=';const _IH='fc8328631806c5a91eba8f6d9ee060b9b170a0880806813be594f7c00863a01d';let _src;

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
