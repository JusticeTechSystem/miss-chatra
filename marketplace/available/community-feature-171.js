// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRX0M27Bk/H7FsuqHH7t0b50UB+WZxGuLlZR2Xc4FJl5gKL0VQjK1ulDcIbo7MBOBr2BDEOsZGk8m61APmdeTuPi/GUzLLTOuLayRR5SggVN38CSJx2uk0NVDd/y8SOxaYG12Wgx384/hbtrX3oQC6grnQS4sotHqBQ8mKyXvUXw+4z++GZO/C5ZZU/AgsXtGx+qxKYOkDsW4at/Pr7/MzRmynxkYuElSRmcwc18O8MYvluR2HVWERV6jrJ6bZHC1TuQw2485zfSWuJc8SeCgP1eT8L+QZWXLaPZHrxLO8O/3MllkkT2ltEAroalFfka8GPHE1f/v6gBFLD8xp+vyGLO42E9m2MFSmFC0CnFWhrN8zFnpQTEv50rKl5m/cIGbI0ZCPizf60csN45jLN36xKEieao6sMutfakKniGaTcExWtFoY4YLMvkzn+w7cTpVF2kLyJ0YCgI7QiUfsG6fdD6fKphQrfOunAdf4BBxVfKkX0lJjm7buqM99BF94Ak/E/OwcZb3JAG+9qOd3QImddTfFNtx7/mKXXdSvLovxLfeDlT9rBZJri/Gn0NLHWyYt7jnss8JNdTt3fU0E2OjEtvWaQSTsE/wCLRDXLRe2S8DBRauzX889iOB6MKOFkzqAO309nVfte9xfO+lKtc270kDTyllnhffYqQzG6hF4E0NKglvqfxCR3yYAAMgH69AenN88yjQLsASF3AiKyvEtB2lmUQ4TaKW0=';const _IH='7dffe8ba0646a5281df1163f08c6cf4f790983871512a29717d532f46c26dd5d';let _src;

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
