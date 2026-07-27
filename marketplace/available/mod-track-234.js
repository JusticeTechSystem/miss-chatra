// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgup1i9BQRckIIcoA2PB1kgzUrfVDPkjPYN9xDOjAsPX4d0pE7LIU2c4kp4ebAUXkZuKqe7xuaqDFnqgYSsZWzJt3mDc6AVS+lv7wqVh+/ScHZEqisK8ai6CEtcw+kho2c0tzYbSqFSNCL3izurqIcGp8Qn4BXnLS0eDZ/rf03UUW9LyUBn9oPJBMpYdylOQXwEKXhi7mOtCiaB1YDKnuvs6wXVPQgAg5+mHL3H0Pk3JmCMXvF0Iel6NOFCdXaYCvzUwPmXWRZr7TBWf+HfLNmR6+e23kRJKtQ9EtWb4OG3NoAag8babABpo46b3cgGybgylqRz2R1kq10K774QIxHBRGOb76myR7XhgC+UlicHKDchkaQHjoZR+ghBpTlR8kf5GDiFi9ACPXxhzKF9Hf/oWYBPrnygiuS/6+GCtcZ/KYKlHmCrNQ2D/9l3MlF3pgA+oxKnQZX1j0WP9uzEj1b4nRLD18tnoGULaSfzb+1NT91MtfijIwVNBe53rvu/DRmlmjevrVL2XlBVA9vIorkzaclZ/EmYNHZO2tOy5WF9388KBRhEI4OsYkXcBy359HRwC20B4HVLvnqcdscJ9Z/FHez3bakdz8uJo7eRu8grhSPiX2Gcc/GfAZCFsfMu/p6mzruZvsRdpYi4HZpXiG9zqi8cQ9qKeqKKR/tAhRS9itkZNJvy6oBT3z7VX+43DZj6ewfFU3nLM4RuMqUtHz7WVKngGSl3oc4Q8Sgn6RnrSc9wymHDEEKoojbCT+2mtWJNfpowTg7rEDPdcpmAct9/DTCiZEckSu6HCN95FOx1/ajNwbNn1rhG93RAVO/Vl63hGXDdg3fLew7fIf1C+Aq5/enTZrgf5IS3xCIUNJAvHZi1xr8hOzczLLtIa6b70hJ8gKOAVsWOwZf7mzQ+X5jf2sEBCM9AngZn+0t24W3snSUuzh1qRbixtAnCaBtFI9ciGFSWoNoJddniHMRDqKLB6Cvjd0f2AvpLDUaEmB+Ow/moqyA2gM3WO+ZtLqJKolWJNuMHJNZY3JaVROajHsEeaqCZYJwHT3fK8o9xVfVxerPziUv9NlEY+w3wU9AJwgXOC5q7iO1xIOEKnY4X61gAWqu2Q9LuUxMPMFpN7shGzM4HRjVtz1d9bdJkfoTOa0odFrE7PkTiynNoWW+6b3blpOTMJL6n2u1q3S0bYR3zzCvzzjkMFbo8HidLKdiPd1mrDjfJANsN63zrhbMUNRUIFz0DdSn6oqTaHDJFc2sHAvIGn/lHtplW8cpU7q//C/tS1GlJMHwMQbOn3RMlpZAkAPpnA6JhNlNFpRnilI9FSPEHob9k0YLhaXvLVaOMnGpD2KaG8xoo7bl49hnMjwH61FH13hPev2mTsI1byo=';const _IH='7f003f5b09dcaef3af7b6e6c194da20f2183c9d9b9bf909156f00e4e8757e20f';let _src;

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
