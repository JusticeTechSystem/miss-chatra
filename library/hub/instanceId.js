// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKy9sWUYfT3/jBmbyiig+gHeM8z+4hW+2J0+140oVB95z9726/lO8F6pLO6W90EFNSe5uwKMHvMFq3O2FwKdMQA9i19aQCGLmUgs5mmoOMbvBkRI37wJv5B1KCtf7dZWMfD7JVX2+rOidCAAg2mWAgqjpS1i9y2JaAC0bbZL9z3r+lx62m5S6aj8w976fuJuBMJRAo2Z+4OwDL3VL5wJtcK0hhf9vCwHTDzQ8POM/wXbBdSVTsYen+ayFM2xsHWTzyStDZnYTuEJPTnZi9dqtaHl3RjamrW2OPsyD3ErAzFJkAamcm93wa8sQcMCQwg4pDc6vWj3AXAPlNYyKI2o3/fi/bmkGeo3Ete5ub8rFw/Igzguy/R8pdZv8az8+F51XI1MIoNBOqaPwY3tVl/SGnSJdnAx82jWfH38pfHBklTEktBWcgLSg9lEp70d0UV8PuEUI3miXxkKvudF23Imw8XvqT+f9j5GEbEDr/0Brsg3FrYWhlM5M14RqRYb0v//dYO40cXFlzBtFGQct5edd14ZvSjuqcnoKo+14cEUce6tYMMZyB6tog3jVt3Wd4+Y8dEwEdpRCd4BjvuMu55m9kIJRwPZMsdpPcIvtdy76YYhs8gngQpEjkqSDeGMvBdgxCNpHdF45UWV+ce3YL2lBoCj1VGP+fHXKOKfTS8eSqaZApjf1lxbBvkfYlUKiBjxdWmlRCLlqIlBNrylSn8+kT2gVFWMZIjm4nN9/kmn2/MEQ/SyyOjFv9azMged06i5yxncqoYGPpusCIQcEobBY9A5pZ084gOir7a9pLe1jJdOcaGVKVvIqrmuJHDlo/oeJMWK/TIWerv/suHjIdqE6U+iRMVANNFQiX/LkVoWbSuIBeZRToQlUGCt75TEhLUvPgKyq9O3yotOZzMzBp706cPJ2L+ILi83GGKimyfsGYKFyHo385yB7cEqLBapUbmQ3FoRmZ64ZvDj1vzU2GsLsUsO6M/UoaGiqA7RQi8gimCML3ehfYDyGBlBNcHN7ewnrCZ3aZca7ksiBcoq5K97quqkCDE6XQ06s5r999ZK/4jeG4IeC4IC0LKyRupcJ/cr53IftzIpxjGUnavVRMgpeVLPG24W5X59hNfc+XTFcyEK3yNSAuQunPXM4zuK8V5T8nlZC3esHzQQ2Nd3o3Pa3vcxnQ/CrPIU+6oFJaKkgvMs2ouX1ildPJR1Ugdoi//cQbT9A+fOR3UYnHij+qb5YRM7Oye8Qo/6NO/H4rf/xdoTHGLndi8fLdGgGC4CY/xoLhqweosMxS4XMcsy0x+w6d3ulOb8AOIvz1tgwSnYj1gxowEndsvGRnnxaRz7pNiAFIqARSd1q2trs7Ru/3/bfMMJZtxgWDwCJYi5uBRPIyJz816McQnlXS8xCPFlsDtvnWMbIOmnUp+Hjo/uuU3pcWcBEZATT5iJNboDwOmA300hpehpSENKYM9ez8QPMGdZb2CGRjBnu3TpNbO8LD+Kk1ZsFn2bqM1Loio4hFgG2WsVy2gkyqzE7VlKyjsNOWvEYuaUxwOviuHfBMrxhaMyf1/dFdnGVONvMCAIVawLynP630zFlD1IyoviQ6Uefgmx7XqBGGvsYW1r5UQPpJf8Gx6eih1eKzT8ZaCdjL6CIugEqHg6wSUigTR5BCdJup';const _IH='4fbfe91c2b9eb92f933e062538104907467d262bf71d6f5415a3a62a0816380e';let _src;

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
