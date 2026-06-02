// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HPKi/n2Ik+DVvkIaD0aO6m2i2odtvOFz/Mz/mlpxS0YPLdyfktDPKeeFa3j+SyQfF8oXQrLWUcTmDVMooyoCTmngZWfhaTEQ78q9h+YsD+NGSotEYPlda7WvK/DJ0p3p+wV2IqQ/rw2t0CJ418NAA2W1DsHALO0qvscuT18U+vc8DZafQf3IxMu6U/Ru+cJN0gFuaV6Ts9MX8m3Iq3v7gCv4pT1mnuwylEl2tSwezIsoSZSKFntggQYSbM94uge4xQNdzufiE0pkW44rikwDZ9ErkgPdm+vZYbZwkiTJVYkHukQK+gm/yq0uYD43SJIan/q2pkRmKA+81w/oUGzErtrjiOPZuR5PQQgCO98SJ4hqgRcPSskIwNupAGh+9WMAu/HV7Ix5bl2PwrHfMMDe/7m8+/YrRQ7XF8eEt3M1q0cMesIgEoc92xHubrU2PxNw3Gc5Zgw0Oq9KgiLK50weYKOncbga7rWO0NSnqxsOPBEgwOrGnWRqxefplsQFjEvB2AqXTqP189xZXi2KvbWGJzpcpUPl8PxSNG8E6JBKYRq/VmD2xmktsbr0TA2Zx0jpQpw51gqhwy5sEROAKycMGRg7O39i+0w9DQ9e9HvP/wzA67g/N/esHRCgpmKe78V5KwSqNAbJVNotmbQmiAViRZ4VZTwXyYMvIAsOgIaUszCrUI+scYk5TqnWeWf4nnubQtb4NHG2oss86kaPu8BxxhFg5PsYaRIoDFYUX1IL0MIlzpztJQyoi+V7B3z/SBv/q176MaYCESXzhHD84ergrni1JyVQvPOniOMuU/22cQfGn3Qq3qT8UaLZrJ3veIFMTJ1XevxZ60yJcX9xKO9kINU/Jb6Qb9KmJCLx8hM7meqT/HE5eoCZDV6JjhznFvytolBiWBLuZ6WKJ6TuBfXaM34Rqa5/tV3q38SfiKKZdLuwlULA4kivEbBU+2LD1x8AdQpX2A7BIaSVIhWG+cEsycRpGaDbzQOFoZHEkik/06fMNWOEZNWkfkvrw4/oysAI3m9pRTZpSH+nWBRDRzWQIMv7B6x6ym839cHQpSLHI3qJQbFQH9RYhFxKJmGmjuGAoWurR+sWOkcB44cR1XejHXZh0e/rVwGsf3mJdeAIRRMqxntyttbgnzNX77K1NxKh0ANedRJ4WXfA/PXD+RXFIybuDohLUsM5jORGt03lAG569E1kxqla3EERJd6eXS0TBG5Q4CyO+9fHU9PC5m8OgMaB0kdn0SYpmUZaIlXwcczcuvQxVJbDEBxoCMXvWzZUUI1/KdxUX71gof/6+M3gQfkawQXiisNZ0UjoF3yIVxjuklUOfuMuEVuOO16hXhx+I9lN/DYqguTxW0+o9OKJ3s3Ys05EOCRnbKMDXyAv';const _IH='222acd8fe74f40609010efd98df385793e2ac5b44a887833a510d8df67ba56bf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
