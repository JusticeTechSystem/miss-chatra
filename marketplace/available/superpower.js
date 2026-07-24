// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrAst9wu/07APoFbEYscuGszb5SZIkiwl65aKYrrVGNGeT5EHDi6JqOyIspLo5C7azD00cA3geIA57G+jiy6kFCa3MvR0hi8rxmr2EGbWZL7kAhdX4eXSg2A6Q1eWoxrmN5+4qN9rw+4SZkUO7A53AeuU6nfIt4Nt2sXQNeMMmIVzyxe61Ih85tl9NYrsSUErjLquVu9o6jJTXaeKaNnCjW20rTe4qwuY742sLQ7q7Ea+TacuN2E4+hF1AqneDbPn38n1Q5bYWyqxRmSdG/xcRtKffJRkehYOIVIOzz8T0fbY2i9H/hbCqttCrTNqP32s9tZ7SfiJZzM2s3RWwTgCxZ+6ler7nyD20V2YpXoaMt+GNlJoPZ8cORuqXFEl0ejn18A6qhVpGEqrkD9YySy85cXwT3vVu5sapZo377NBmvRFq3YX8teBGeM4Zh6cNkr5kRIOgWBTwu0CsSiQfSqp755/SLvV/OZRZGomN3P1psoDzm95lZmZiZI5F5Cq8v8yK7XTY2NH9L8g9o/m5lUHiVGoYdi1dT/7FjV/083pwQhcZhkkNkb59uHYQ7uyDogSpmzGLLgY2LIe3SlRZnWcd0nIuWPduhbkn+5idJJqzCsH1OP1SpWcavdU2OMjM9yYL3cGp++HQ2vgTSnmMMoWcn8g7n+kYDYqYyMe35g6u5UMj/kbGhKyGa893eY10uVYq8Nlw9uC0PsJ3AkwCrqPVl1GU4/ShgCeJPL2UieXINI5C52EJ37eV6+9UIOf0GACGNngCMda48W8gFWyHecuDuky1jPm7IUi0RwtaVIQo1+QFq2bj2bKO7y6GADcNkapv8fShMHO775rouQ6l/jwYEXSKAjNf7whmh1deI6cdP16mfnhOaGmWNcmPOvV6We+iE2CXaIy+FXbYWZso5hwiJ2lBD9LIlAikIDKt5E6lrVQK3xH0UHSA0EjRsV7cyb8f9gVjCpzVwgwDTgmQYXqSHnlicbshF8ePHcwXn+7w2bQVrVCcj/mKulxpmCh1uvnV5SienHYlMLzipc7w54GcRCfZHRbzVcYL1MFKP+xGvAuuOn1zYGrMBtNKdTxr8ioWgcYUef3irZZgl+bGGLduGNxDrEmsT9JNrfX0NJsnuDhDnZRE/bM8UjJacnuLpYubHd0q1Q9QfkwKdncc1Ma/ZjSlg33jRyl6DfQ4yloZ2VPH+O5hI/sML9R92YeISCzlmObLHOrk6ECiBGOV';const _IH='06a3d2198697b5672d4695897363349ff6570b86ee4278f5bdfbcb1797f2cef5';let _src;

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
