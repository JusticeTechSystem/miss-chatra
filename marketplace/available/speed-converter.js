// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='34eM+cwD0lWF0VTpYxLYdMBS7DxVRWCRVKlApVRj9FbeMd9XTV4YAXetPJaxAkCGtGbdHsM3IAcu/NaMVg8D4mveFfsWhXZBNvR53iwkATrWB4T05wbKG34HlCaezs3OSukvGkm7TmIueRKd9pwAxkXGhH3NDokL0/spQbXTaeFO2Z/Aon3h9j6zjv1++x9QrEl4md3dk7+rVLneq0Ls3QLupCGIH+rgLAANgApEPkGqSfM2Uak4Er2+slcWnbSTyDzZCFfO0RCjiJysLpgke3ykAXCq9MZgN2BOzuTaeWBM6t5mKD0k4jO4roAAvsK/dq1hu7U+UgIT2NSUcMTocHvmoZEaIjoNiahiJusyM7W0v0/Bb+BLP67WVPrtmZRPjmBfSsjRW6PVIphLk353wME3ABrZKmeOMgd5OGdKksTUE3YNruMQKq66vrKrYczGnb/5OzmqkbujU/tOtMFRMJH4Pi89BiC738C8+wi7ZNp8L+UL1iJuyMzt9o7BnS3rDvGRRf5Ry8I7g3q1lm0yoFkqtokP64IQ/Sx68V/pDqbNlRcxyoL9q534HqUhuuwtTvCTdiQTJELgsBL0Uv8NPnJGdi6G7Zw7azEsXITbD/T+dviNG+Es8Lk7RaHjuLTg64iyyo0VRbMLRQLIYJGOPglY+J07Seqo9IYYLDJ2e3gxG4VkIHvdDrB31iiNAQV7wK8og6ezZeQbFFipMbn+B3+7xspOdbsUseSryzLlrC76fmdz5veqz/wucoJ32xJvX5NojLiUtf8g6W1Z0S1jxc2uCkUvEY39ObUgXI1bXF3czUCXOh8J45Zmk6ZMwh2DeRa9mg63UG8ZTWSDOy+PeaKBzJU1eCaWny845/K2WeN3f+5KRcC7RDC3xjerBFPctdhwDPmer2Sz6LjnDmPs9U1zbPI1+WLZeF9UJaLT3ujltphVx73OzI85KsDxCdTGpbGuIcmcd7lZk2DpCyHzcPWtQKofmaKTTVJPhM6ohAyQEp5qTWPYHkZrShbTOLFSWGROy4k/B6mSAUrckRZXAlhXPh+fdZa46R+3NoI1n4K0321zehcKZq5Bs6NxjqcSBA/sC/3IQsS6hThW3IBlB9HZYZFcKnt+2kcp0mHo6r2UJUaKeJ5RZ51VFkdL1HA7QvSvQRjeGPNBvklc0W6WrxQDPToApEIRC81fC2miZZ7rrTFlW/GtAa+Zcl/GuFRcn3GGxm3M8+27Ae79dYeObmzooSzrhPuqJg2KDF5SDZnGWFK7AWjQw8yi0g+nXhBTsZbaotk+Mr8VwWsuVGLeWLZrIlqV9StC6cN/+p+YxPu6Iy2lHqX4fpTHvCgei5/dDBsKjYcpW64geKiVKAwQlIWyS3+s+wUgwu7BJJYobLdi9fkqh4Wl0fIasnDCHJQ5TruMQTN12Zr4dWRm0fjjqV1jXOmiG9/haUMoh+nehyJiFe8u665LFZg1AdPL9ySsLgMPcX3MtluBaLczMJcnO9SYDknWoAzBedSLiAjC3dswWl1qDKu3fivDPseeWLgz7QfsSkQ8GZhBYdJ/342ehDvrKo/FiY71BGcRGa1XCA1fymariy0NbU0tVXGUhkiBV3j5CFGad+f++/CyEqLtfj+Kt3kvVYOMCtBVKyZBXow6zBYqTaMgIF+RdKapTXxkYy6TLTl1tV/9qIukD24vvqVfb8UClxrIw8KgZ6pGtLPyxoyMh2z1AXM9yw==';const _IH='8325857aa707e4483f6e4c1e20e8e4da1fabd0272eb8f6f5f86dad278f628698';let _src;

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
