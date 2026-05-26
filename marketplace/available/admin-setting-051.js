// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RKLkmNZRpOfem0IK0/Rp77XuatRSnq5e7ItgDnoCL1eNeac9Un/TfFQXF8zvrociG1OcpVcg7IrW717UxPyGdlit80jFxACV7I03oRtfzukW20bOp9MLsnLxnA6q1tx4+gD8q+SkH94t4i8aCN2maCxrH58fFMsDkVi2rWSR5CUo9jh6t1lBslDvkVK/Ywom/gVVRB/2Xu3q9HsifKu+2LflP0G4mWfQYQ6k2Y4mQPXvzTEBTLbPfjAAucLnvd4L45LrFZM8pIZRDXWncq8HW3qchMiyyQ3I11+ZMbI8/QDn/fj8SjumveKGeNhtBZ7bq63w++n6JMD6p4l0CXATcPy7LydHzhfsyzEDMkTuytRvoEOALQrEamCjhQC5BZRYNta+Bm84A/I949/R/j8Tg3K4XXpivxqaPds5ZimIO0B7l2YSqE1gOOtZ7kvW3H216HUQHSYDLSOs289BxURn2ikbiWAPEXU6+D+WTGAPxrFLUKJYjofJRjrMct2mVVZPqc8BF8cYMkK+gnY7gfiurRQcEFmT8kOzcZdrPWiYQDx87vXJvF16TY0VvcJ+M8N17sOwYQqBGns5PWBucHSQM7vz/6RoFjQzGbQ+H8aCwGTmHZm9cu5NUzg0Gn9/yBBDpeXoS0N62h+z+btDLZEgI6yMLvdLnb4F/I2ecBzmZv6/xG9Gk+rUcE4ApfmL3ZLZHA0suhVxzft2EPcYF3l6Y5f9qNYZaE5PA/SZXBXMW9Mfe3oAGiXhUaGeHzXSu1StIreNtOhwRqVeuZWgCVPXqyTpfC+4+DRbFGDqSTdqnXH8R4xeQulDwxpVrRda+H3xNA5gND2zInMLC2u4p5Ub+fYTOBduD5f7eM427tcVOHuW+3KlCoGQcWnl0dO7r1kHFw82w1z0GBNsQOfEbdLOsLGZMdgGscEBEQxd/7OFxxrhaJeNLziolTs+Dpfj1ncKwZWWukDmCBNaQmdFzmwZ4y9YIAcb7/atzLnp9RZAZBavmW8AKfU9LPeJfGIfzHofmIObkw==';const _IH='36459c0d4d2a47db45b2d72f6d8259678fdd95100f2cb4525f654b5679d7a84c';let _src;

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
