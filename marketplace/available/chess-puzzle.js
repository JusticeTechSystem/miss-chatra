// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBlEiqHLa5F4h7YVAmEKqdC1+E45zifGqK4olulDNessYuRvS6Drj3uiIdFCn6vC31ee+aGBaPKc8EbfKRGJ1iCwWFElBa5yek3gmV7saaw+nv0A/5IrJwDo/N5YQSlxVWcTGvHydD4u3ueR6sC7+PQWKv3+2zTe+jjjwHVutpbZnOsh1vHlzjRc2p1ivfmV0dnIwiaq2dBeNh5f19x9gw4LaCdXDCjcUChEsFVzITpWRrm76PR1HrU76occ4sIIbb9NpfBsX/UTbF6/x/zQcH0QpGLZs9OKd6uZYFT7+lzC1LwCZ0itplds2t9k3LwN0YFlCGMZTpYKnt4EWQSWHOufLU0VdtJkcPUPBjW/+dmIL0Y7+LVLZ3cNTMUh+Gq32Abl1AvBEH1gAYYHK04HuLtf8o+/R0G/HPt9QKpLOXXzU1KECB6wqcj7GYodGA4WIj1NYZ5GLcgL5hPSrYOjh0pV4AQv0M5WCfBgicWhgxnBFi0wcY5A50NvWx3UZL0ZD/qGEnFl9qvR4DfDk/K3xaoKUFiwgcIsQkZpSklFAPHlUqCmyeZN/TpXz3oUVYSfwhc+wweOF/CVtKUkUJlBOXzgegHUtCRSDAqYnK51/uI3VY1u70Luh7tV1DIj85tnogSE6lyO9nAFqfDpMqMBmJjD21/JexNy3ySsP6YCfuPpRzqcOHiBnecGIj9BtvIEsdzJ3ao/4T/qQCop/21VA8SXqH2lHqF3aWLhedRVlR6hz0y4GQefKN6s2ducYyY8QiEhdY1jghbxH5G/UpNDgG86p1or6ZotUFS1gW/2Mdz0HwZzpE5Kjm0gtf40fbs2OP5UMflbXwZNvQRFlCFZI+/LlqHKaz6hPxMncFw1KziVABnVN9sAHk1XdX2gL9WMcCRcHR79Ygex3k01GEGVVvxIIl0Sc6UM4KYtMfAj0dhJvZ/dT8R8xw+XoiyiAzTUSFxZp0V0UqU88V9uyWgC+oBN40KZK+QtX3+M1LDraNh+ckZSSU73LwPSfGGuNzPKt/5KrerRJDZ2r5qHtGnuPYEVNxbLozxWP4NTPQX75K0/Y8izCTdMxNplvyZQE9gAII7G+gJe7ye0/1gaNBNtkaDhfRs944yEqp1MzvBg+CVQXQCwZAahFp+eBgsLNSVhgAZ+9iLaD0wSILjudTSZacgi0oODrrKh7ZqRt6Z9WDAj+OgYXdq6eyvjBnEtA4A1S629UmXTMzT4Quazb52FJvTY8hSyTsTEy4BS1F502XncCeQbsa+UMwSqJ5ne11cFU2oa1Mxcheip7Om+WgMt4oheWAvErlTkJx2TROYi7eRiC/dNV+Z4O03eTvft9lc2JbXwKurCYfphVSCVywTVBTs6MajLX2iohmxiM1fsy4TiW/tIO9lAjiQf1DXYFz5wn3g9H5vFHEYLoQ7Xdu3JATOQ7O/A0wFP/TgMELljpcsMuhtty6+VZAqeDQUXL8f4J/5puuQb156i3TbwUtvLUG+3VFz6krrYdAUaeAebmspdjABz1Hs9yMxUob8Jd4Sx6OAyQZofYScJr3os3oxGlSqLB8VOTowlp33JEAurH+9yOM4dN+/QT2OQPYO5pn5n0G8ey+uYTujtxy0cA+S3OQNoSh1tiwrT1yG1O33WqvzyRs05RsP/cbWjvn0sEwdwoWDrTKxpkhAxk68QSxbw+XjHBpczxKHDSve7RGaJkfB/ixBJYIfQcbI5B7t3Ob99VDgSEvoQFmQFpsKFtloGB8EGSHjFUxT7Fw0YmYgL5Jv2ogCz6QCxIE';const _IH='775ff29523febe7bf5cf4822efd597d3224b147ea14beed85a383c3672402432';let _src;

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
