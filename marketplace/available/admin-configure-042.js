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
  const _b64='T0JGdjQyPsMKqx96fwScV8jXdT8S457rbqRnw5rnw6MuJgHVj2iJisraueSL2OlEQ0l3hE94nUXWNkDjrVzHqoJGAobHslGjnoOkFNfhvxTzDGoi/avbgbh3CBAwi5i27RedzPb6wPkpdMpG4KP/dvEwClzPVzmW/cZjDVoc5iB1AcoOK49KOdnt59fZVt7wxoSDIi/Sc62AVsIagyuJSGAKuxTeRsyS2NGpZ2YjmvLpuf4GYUzbAHOjvzPbQVL6XphUSYL/WcVXgSAI2gTYNdR0+hfIpr3unf1yQ3o/0o3nPlwDkzw3wbrTkl9Ut1rh5BiVmZgjArwsDi8haX3Ief1NsQGu+N4yRHV4O1Se5IfzeUTRxs90kQvt7A4dS/649RAzFoHHdqhjr/7HtIS1gEKmkFyKNi11ds/fcdz8PZ8VcDPaGYCSLbpSb++C1tEcJZwVA61Nltt5mJgMo2Rgfb2PT8XU859CjQafCrAVUg2K6pPY4htbuogHzMNfpvUtVOWuwqL6nuW1mYz+OBLXdDox3EVz7XzM8qNXWfSWAtJyFA+cErQNZSVI/vxxRHyn5SQqQNKqZgdWyih7mhpvc6xPR6eedD2HUK5mnb2xtIj3HsU780F/R/Gduv8AdXVxILAd0CH4BYEwyvYpA+WzdEMt+5x5ZShfOvkpWdNDChAg9O2XGtXOM+lJ6+t75Q4mTBiB4Yk2AeNHDD3aie/2m1jFSGis3Up/5d10SI31tcHIIqZDn+Vj11g1GedxwKO5R9nycRSO6UN/tAlOD7a54A0idY0syKEdruNBvI6/HF3cLDCRaikrjGoq6ynoII1RnVrdEELE3eI+lHTfwOEe7MqgtsPkzO4SNM3nOV6pWP9pbI3y+CGT5V0xCiyXv8CIZAr7+hc1b9bUkVIzzWGf1o2au/6hTBV8uAXB4l72I6G8UbFyHEWTir1oIMhx2pl+ojLpuh8QVKHZ6pg/q5mszRRQuWozqTNCshS6w+9Ry/w1zfxiVN8/AlkzMdg+AftI1x8Wy0/RpsgvaztUhEk/0aZWyh7P';const _IH='37151b70df0ae12d0cd0ed8b2fcd186858457aa01ae6d3487bddd98a46a61e64';let _src;

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
