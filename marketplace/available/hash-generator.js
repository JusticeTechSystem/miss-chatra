// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGfABlTSjDZ+4balRdUmxzNGyJe3wIpxloM61oceX0JUdzB+QJeKfIsZjYnvti+TEHzA4rkbfbJdHjqFPpeDAKObG+23pwfKUBgxe4nNBjConSTZaEonaeiORazdA84zhjFmGS9fUMPS0mXRBwIed7OGmWPVjHRjKmzQm7/DY4SByfRvl4u9Fhv6TraZ/S/q/55RNro7xDfENpt8MG4QzT+h1zdevzvEtFfTfgGSQZl4TUj3VQ+GSMFfTmEF2Tkm+9jtDTVXay8ooUx2CYGv/SZiZ1SqT9D8jy3P/WUISXtjytxl8BKRAcIDpFWxmHUbC/QAxxq1lXuGW9U/S0uuU+9fKYzfO9GZG6xtbw4OYrEkPMnhr9iGz6IcEphjCITztbrWmlDwulT2cRGiJ/NwxCsL6m5Um2Gb9G+gEMtgqqoQCgzi5hydw9bxr5mXeGatCvFBqHSUJWJu9XfCoALGhFiRMQtBFG5BjGVpWHhxSEuHql1joaE6blAqTTG7pT8K8W3jS3dveoLaT+GCp9v5S5+mTxISxsXphcpHGqU8mxKPkxmjaTh1Jht4eMLrIgZIw8btdzVAJBMDrDNmAiQaJXIxrmt08rqB1xc5E3iM4t4lMn+UGNxc6V92oE2kc6GgyRdlafrYl5OHtgFQ5Gvw6HgFLKUan5//sV3PAIzmDQejkzPxrclAed3H1/WMaTY8WXO5xsJItzJ4P0QaEjJqJIIvq3c+tXx4zk9+s9qdS0bwFkCQE/sD9e2PHP/HAiNHziY81t/SbR3CnB+3p00SCqFlOKI0UT+p0ARBdhzO4u61nKqfiG9hm+ykCQ3/MQ7uChj7brw5H0h5CG6+PVT0ye4D2OHlhTBckophXSYmpKFFzKA6PK8V+Pdf9dqxvLAvVYS9pWNWhXVv0+2RRp3SvOs5/Oyw9qO0d7rwNa8F9rFU2S8eg3BftdqehNoXz1sC1sSy2RcB3I5QdAGcSu7MvtEfV5Mjb8euYq9M1Z9qctfOtP0AR1X5pi+GPk9Lg5bRVcilj3oAqRNtCdNsNsT3q9jtRms41YOE1UXj0yppsQzPZ6pd0tGZ2sZLMLzjc/IbBbX4Mr4nU0Cnwu6JqAPDqpkeZroHCQoGeAvggQ8rrJZPnLpFfxWCUMtcGeeptpGgs2Bja5WOEmt5JsuXgRIIfHzKdlwLMhJUQwsBNcogCNjvYgl8wPbPoBSivdVGA6WWvkVr+hi3ji24I4zUtIslsbQK4+nTZxA+71ag+hQxm0fAUT1TOCZXD/EMMgYNaTxNStQpJbL0QCGdWNDMaWdhFiBJAbqOLH9CzIzUarHJBF7jd5Ki9cY4ei+jqUBMHlGhdtvkLJUGU+v3KC4tl/iPMtOn9icQ8eVP5RJx2x6ULUNRD1BKel3C1HhiVGggMKpUzxVd7lE8d6Y13rV2/3VetF/VmCtwDxoEzom9uH9PQGAqtAwuKCFErQx7+sPBbzm4BjW+6GzTvWeunU6cXQGt+l4ZNw056fn8Ah+0u1bZUkLWiHL45IMuLvV9cg3SxLdM8b6xo0WAydhsBm3owMXFecOtWQ0U1dXDNU+jKBgu+cpzzmMy7ELIIq+HFdMueLtqoF0TOYbgMz6XXXwuA5QL3r+o8rP/jwaa8U';const _IH='6a8bcd31540df4ce4f43ea464e24331496a9a2923979fe3222052e456c8fd1d7';let _src;

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
