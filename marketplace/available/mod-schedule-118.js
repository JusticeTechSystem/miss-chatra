// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGqFUWzZcuydpkICXGwVm1TEvpku/C+uOEs3rcYjojs18I+9byjfTqnBid9hUR1c+iKuEpL8VMNwXxAFYsBDxumjtYZWZUWpN2EzHRY7b68wyq0Kx0R+vvp673S8tSvErrfbJHmD4+gpjqkteqEn5A4FDtOCflnY0SHxfpJSEnBuIrqT7nBN5usUbsjvxLpTTOPHeNYO+m2jHEd7hCG+XnbGuxEVc0Ox+ur241l64qn/veq/GEPZzRSYORkR9EiBt2PbzsD7nvzSwUtIuHuDpbbD7CYc2oX8MpL4oqxzwaUAVNpBADatkli8UNuceVFBSmg8xn67gHBn5qh+JXwS7WUyW7NFM3Q9tFn9HBqe83V2BMd7BT+yUOCmDnRUVYpaWaFOnGnnZ+uomGuEBWrw3w2kENRQ7JfaKGL42RfvSE2lkYmzLQ6jVPcepV7q9f2Xg9OeOR8FiPYaC1tV1aC3pQtMldpbpwJhZcJr1tci96fyl8+YuH3GjH3HDIDvT67HvGf6dquyI777jsVMH3Wq7ypnpDHvDFXtQpsBD+jRSmilMHOy2l5nCpbBRV5YSPbhGJYgC7VctgCHpd/02dQ4/I/9E/DBiM1ND2d5Gbt57RpAbl9sK9X6EpME2naZCk4jd4+9Q+na/xPs47FiogPfVKj4mQx76tUMNFsfXrTJP68thCKm27j7/vETm4WHifZScvgb08ySWNx9fU4vu1JBntMwnULDNq19oI4WnRKfe1A9VOh/68PFuFrdARR3yP51gysWfu1M1pl0t+N3t9UnhCzyEWqcCTVq3AE4wt/6sLqknLlA8eblvy9KRLnyp3r9Nvds09IpeFluE9APmARPHI1HHRAdI4bzi+nEPwOBzJ0WBq2xjvXYW23HF3sgVy0bmBdV1zKM2qp03PqrmqgjU2MQz/GFqIbj0NLPd6NzhJmcsMISCxZtse1lhIU3zOo5NcOh3tt2CPAAzv7fWWjwfyQQG5ZWRRgUEtE+asAFWyqUqkvXily4n25H6ke5tqeSKa0+V+4COdAx64LjN2U+5Eq2ZYduEl4O0qzvryWB67bReuiJXjynWv773PacYsoGDlSyH8tIyWnXr9dtWNAm/VJ+BcQ/BF6w/CilZipw77Tk1SSWh61ZFOxy5ozGRmAPvEMPBe8ByP2cvm/acVGGo2R1NUYQOizCh1F50dymesspJczd09TZlmhX39eSeIIySMVpMpU02+VE3ADXuZJEeHkYwODsPIw0bBIMn2LH069Bi5NnL2fNuvsENBSoAJl8wHgXvagjMyFMS2rRgE4beJBsN37kK00ZRpr7tOiBRT6mE01F1UZV7SILzuejuKiDiTjDQXq5kEhGw/FINPHdAfXovTYmjT+mSvWMEFS5nVgWZYR13avZo7H0us61t5YVCHk7niWpZIIiA=';const _IH='190d6de44f6b990a4851924a4f683b9829ea76fce6b366d9a39c73c48b108ab4';let _src;

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
