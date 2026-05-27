// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ImHi5rznMqxpk9JZjU6PVNblzHp/QTUsS3z8ddHbf4s/mXwiUKF4WAwNOlSAVquMD3ne2r93zJaNQRkAMhrwVNZ7XHHEVoaLpwgEklJtz1p+SZkXkbF9n/wslV27gKECyxaCMKSciC57o557IWDkQJCC+hSgojdT0kSWm2Mb6zbTbaWkzSKqeM0piDxdHemVdSjE3p8VtQEHNo2c2NGKF80aYjizvmrf5ZZj/LMZeKRlJB/V5l9tULz0LPsI+kGqMOtEnWYnwJ9UFUfP5wYqQIFSKfLScJ51UgFkh8y8eyopp+klUtFmkncTWxsJxRsdK+BAh9iKjpOA38ayk3I+2Atat97uORS6QfWqRSm7OqUxPnbh1qme3VqOrQ6zk2czMivqVkm79lhVcrp5n2Sdvmlyhf1jIP9LS9VCJLKIjFFp7prF/vH9StOribGCEuGApm4f6Mu8yqNPM7qLtV9ne3ugJZO92l9HEOtT+ASmEEAEXL/R0tJyL1+oDQRMSL0RIEAdgbPIPR7DskTAEJ7ZXRxrbSUtUhYW4YiYkqz6Rx5TxpOl28irSTt28SoBshMt2T93NU2WM6Wb67k/6yZw2+fEKI26g2RHI2KjI/jQG58gglCZbckTpp5H+qa8QuCc++2vJ9r1B+T+KVEnYg7pFVQa6vW3ns5NMKHQqQxWCNz1ZzmJKPvI2/fQuQx/Nq0c9t/pW2cOUCUmURC5ywpAUil+RKP2k4XIBzsptMX4q5hB9raU5d7aouFSRQCEb6B38GB3dzLCNrrZAuGg+iD8SpB5Xn6jmSaR3PQ2txoQfh9SYYNLhz4yBvy6JuMep5ddLVIWcDhPRL1SsmAQ3WEeO38ZE8nAKyBnyRfOLAcl7CnwALRChAL6LEVCtAc4DMUYN1j8Ll8x4t1hSKElZuBC2bP5ktZ2MEYOY5RfGKw=';const _IH='c3d10331b45048b513b12d47ed61a23aa6c330ad67ef4ad479f8a94c07956c1c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
