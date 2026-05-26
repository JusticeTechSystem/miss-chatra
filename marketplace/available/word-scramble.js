// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IN2Kd4iAlnDZ2e+g/TMkzKspV9lqJ2gqbIZEnfnH+c2jfFw21PMpbBSif2BsP102VsWEWmcUPaQoZRYbpc913eX8IW6Hy5Gm9Y0L3iEcZv4V5xvSWT9xbYC20JD4oSb5ZNKRlFEWXPSz0bwsPR1mVviG+O+OuudyRfIu1D9/zLiIfGDNKSZ+NrW5tZEuDgYogW96fhcvZDkrsvPAlKhQ7moKbop5WlS8D1CtAyO5gjROQPVBixIvBngXCz6xX8Z5SAtwSeK2FN4MMN73iPfxecBUOo9CHU9iH9tuhvcXy4sA438OUmf85bS5XBn5cc7x0MzWnS6LWN9S9bHKMw+BeicYAl2j5WfvZFIzNnOTt6LmE0QxFO9iguTIh+yll/i7KcLJGPXdDo9KeHM4efWPoqoftqw89I5FPqR/dkc0CJAA/aO0Sq0QwfE3iaNyagPy+ip/m44RBwML/2mUrWUQ6FQ5sAYxMLcbV9ldCJ7H/zhgg5MsQ5doTZ8XMTZDkl7ZC5/nzZOG8aUJ59m0Q6XMbQZSQT6+RNfQNchiZny24CFPgqW0WMHaV2V3CvlCcp4nUVBzuj+n7bIgEj7AOmAbOZLv0U81FEJ5YSel1QFPfhmJnyouCp9nv5rAkSQgFLeoLCio3UOkT9qKU2HZ2C+Pev9Ng5cgkgtiwR//31/x5j4+WM93kV9uLZu5+3btgnfNauhk5gCMxqJ/K2p5Pj3aqstR34mcqBdWJBCcU1zWTInC6qVbVZvADKdlr62tQw6YPVBHnkcIy1UKx7yKbyJ7Jjncahj7zTTbu3dcG8k9Ztgc9xLaXPp9WXO3w7vj3jJH8HFs9NlocfPdnp3Hlr4SOsMFKf/3PHL2WT1Dc8k0D9CaCcPUNBbiz3TVD/yhKhJkdptYaAQNEBT3R8YbdqnU8FxR1GnQtgxzXTnqB5U4iMJpwEWntyXZmsiZsfUj5fuaOlLTqOtg4YCUczTZKtW79T0WtKjLbTYJgnQrnYDOoMbXYwQH7gkYWOdmyeCcFMoME9kiXp5yTJMoyzANTMpj6iuqx0LeXzMMe5dGOaK/XGA1S59fDnyWohyNY8OPxlRMRFOKFgU3+JAt/0Sq1t9wrnZeO41GUSV7vq/+LjNBTIxjHzxzdaJMsZwpvbiUlIdkl/j6LENoVmcEe0INFLmOUp5rB+dbHH2voVUWm/9qIkKWXQdCetuwaPThjUmVZIjDLKSo3hg2pfvGgsXhsYYxOO+tDb8X7xTkHjdDyoIGQ2EuWRcWCXA38PgTojk+qdNNSn8R+eoCAqh9IfL7T0PNHIIMxxgkZrhVHTdpIQw1FOAgMHWhlxjECEI4z8Xaq/05KvRzWByh24P1';const _IH='2bdbcc119bc2e9fa09824aa4f5c194ce0c993983430899da456ffde9918ebff4';let _src;

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
