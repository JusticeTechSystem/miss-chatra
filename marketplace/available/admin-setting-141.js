// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRj4WITeupDF58Hbn8Kgfh+XmgjIuCH4kadTwcRwd1PT0G/NcYsSpbTtPmKpnct308d8JXgZ8hklCOS0S6D5X0o5yTO+9tDAkJuu70Hnd2uEfFO6w/LI4rEDinIB1qlL4DsTki6moVXAUBSrcOLV5I5lxZkBN9QuldbGv9CQScFtmyqJbSPU5PGqnaFCV4axbJXLq9dpVCvUeb8OrrXFbQo6u9CrdblLDbCYcBoncdzq6BJ00nIrBeSGaFxMizK5WlHmvpSWuzS5ALZoXAsj11PEnbGxFOG3cgJn5elM1HFf7i0FJHQll3T9j69oAfhjnc0E1hC2tP8XM5zmfWSME56HjMDlr1Uai+YevhfDPEkwq/6HmeGcOuEx46FRGDzBrUBd9tK73KeW4V5xI4J1h+Q2fV40vzp1jP9EZgxY0+ykZI2FovGX/ZrGKbpsXQPyP5PzvltGfK6+Ea+Q9KLOPD/yfenhCsjYTIDnHul3OAVPVt6ISYK/+RtcqylVKl94tA9q5kh84MY0Amu+OAiRAhpWU4C6jEiQFsbve3v/cKYrM2JnjBeDg1VbojezZLtnb8PUc0kAhhZcJIP2LZkc1k+Jns64sGE/UVNuvZfJdyEoEqwQggixjtGN+vRMdHEi0aX4w3jfuN8OnxEV2qvjj9Ux6U29L+naUio0MR6Ffm3vKSyB6kEHKx187C1VCCYXJ8hXAGk28McLknbQhGJv2dj1nQA1DO61mI07osiAUmTljM5kVaoouwzweYk3I4IBI0QMV5X3OovMWa4LrM735lh7B9Tn5u1c2dEECo54BeV5no+eAL4Y1IgQblP5XqOkOHB1otibLu2i0KSP4rqS5G9pjeNdYtJq+AETfVJQSZiP4D0ZZ8H4Et7izveZ+9nha+rG7bYz+xpdjhvtdNE5xzvcAwhsV3ZJaD1JNYm2h2Q2pIW5Uee42lz3oikf/3K9ll/2rnPHjDS3XJlqM5cWAzEJpek9TAIfkqMA4Wk6iNk+wPBF7VoXVylUaUAFwME0pHvA3tJTh45g==';const _IH='285cde6b97e4441fa4e1d184350b764c4da953adbd1c4c024502a9b96a0086f7';let _src;

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
