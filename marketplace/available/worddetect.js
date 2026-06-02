// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='njg+u/XbaeWGBbSzXHIMeJ7NrMhuOiajSN3hmfzbPG7uXPjJrILK9tp9LbDNiYmlGH2QqCbEb4KByW9cv1IZGWlUyuPvIPWgqjoy55NmCYXqFbhs5IUv5DYbzsfrMi5QFRa4gd4yolR9zBXS1xeEEXl9avDm5GykH7dzjKmjhT36Ml1/8zSRNiK2OnW3lBlddrBpx6wCXppLMErE6JtPuslLMHdaCzTdWhDuRpRshGh0OHVi36+UuJq9CioiVHG4AzEYaio9vZzMLbN3436F7LhsLMHpEaEByZIHDVaiD/ld7z4BaQPALvsHM+NPiV3kQrmCiJBS74g5Qt4yUeFpOjV7DdEI5DtPP1mm5vN2R4veesN9uwCHcypH6dYC/evoApHY7E/3mjnvXLOKBHvaS0T5zsh7K8mKBXC3e2YCcL5u39BDypL5wddpeEx7VdSMWiSEihTJ2cvRDxaBIq5S7i/4s3+O9hO0/u2pSeBWchHIVke55vbazrlrDFIWq74dj0bCVuE3qVhAH8Jwk+zKqcPnRb79QAc/3XoIAKtRtnuXOYTe0mLoVqqgFXFCCMz1kp9yTSP89V/HsvDG2aCqq4BXfM/almyX/XDK5NGDBz44F1bae53DDDNrWOD6Wj1V3up+wdHmcDHdfsKGHKa8B2/06Skypvs9FuXeiwlb2r8zIZ6/YTEzgQsN5v9EHmJrVkqymkdYlnX0pinLQCHgm3k80CiEwPvrUo9DJK+r5DkkiP0REory/PTEia/FW9igu/NVF6x7SgE/gLzgBQ5myu+5S0re52GN2/aknKIWMhTaJ/qfAD6FFGdUvm0sK6XQ8pxyBSouMH2K3iGRQZrsMyq3TVdh2RM7gb0nxCv25X6Z4VR6xfqQ2I3RpIeyw96EMQJBDVwkTTApZNQJUMFCcj5sVEjxk62jYKulh5SjqllAzPeH127v1DAolb29Pj7nrhtZ+dggOtcXZhVp6ABj0c3rjwF8nc20GQdb5zFa4DhAJahTldjwYHLl0xFd6t2rwG/qoZOhDeBATB4yivQp+BfLfnFvP2/Pvdm8buCrcgQMe5fqyTtp7d1Y9EB2rdhA8iMDtSU5K/oWtjH+WA8uEDxrl1z0+M5imGtXuiIrc+JWTkUnt7nu+xmn9TzvY6yu3w8/5Jnvwv8aYmSmYepX0FjADFG51AczUUM0Y5xPT/y9mT+AeSNy6OO9SQ2OLFed';const _IH='00131b5873142ba8147fa012e8d11e1583154a2cb64e74959ebdcec527eb6af7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
