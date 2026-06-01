// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6X+M7N/6Vf2lr2mHv/hy3tHWVRr/ALRzpDuyxoRa2LuCZubzD9DyDUOfGHv7kLarNbox7095cPRZS23sFr1jyr8lgfAeosvatCL9ld+LeaXQs1UlL8mZkjBblKAa7yQYr6etCfdWX+arO1JgPQvm2jlB3LC25Tbi7RQs4pjWKZYHgowONuq6vLQ8eslH8NQfCYKncv787eeOt9FIg80to6kM+yxMLEKx1jYe2vUErVeJtvJVZltC86bp0LOufqS77ySSijREisK7adrp/ld/cwVZ+nJz7kkOSZ4XxBxt7hlzcdZ9rocDt1j3utcDRmiP0nl03rEywC2mtiLLb5SzO9ShnJI30IuVNU6dHloTHnvrFr2SsfrWdIbSOzm8yT4W+Hsy2hCqhlihaMyM10Fq7xZ9u4lkVhN1M7sSAZUm1GkM9fE+UVBxXdjcfoyQJyCkefyZ3GqurZ6k6l1NcpXHHJW3xcMzkO0/bmGpoDdGMw6ViW8qOpkZ1n3JkeI7VyPnwMMcz3mKPlJ6vwHoX5KaSvaiXNLr5tC6y9C8yc/NrZpI+tJXHQZcTzfjAfkeqNWQ/t7a9w7LFAFI2gk488ZPsGpHbR7pRu2bGILR5+76ROVHVuU28YIOAzDnccHd4BI+b07Q1kjys0wW61KDSYrisoKNVCQ1R2k0jq2Vr4l3tO7ia5gUz7G4zdTap2iY6oY9IfKSmepD1gK3U8QY7O7yITkbXTYh75wFhd8ZpVjzZ3w7A8yLe1YqkkIMIjyuwarJDHkXBUwF1Xj+pxCXtk7eCIp+c1XHQmEl8i+f6oUDcvetz0sn2o5MnZ58MR3gyLpsQ5Mtovw2YJsjlNZfJS8F2ibIgs6xGngsbn+LhR69YEe2df4LNYI329Boxz+ujUO+faEYvGhbKJrLeXkgd1MBYyO+D0d1aky3vjl2XrRqdEkynhX4p+huBXlBgISSNIHmUmlnSNgaLYqAXxEGfiBx+EK0nGVUwWmtayoJt5hydjT/a3PZ8h6JDJvCxS8stiv3b4IVNNKn2pwLxafedicLdMvH8+u4ZKWYCzVJsseopbVEHB7QvqH4aXEvjKtLovngDA2H7rU6qhlct/haBAMbiXCugo72/sPvKzmen2f9vqtn1xcUROsOlr9IoykrZLANorybjwHtPscKm5Mvvxm3gTog8qsZJ9LSs1UHUVTPqPv2WNEm8BGTqNpdzNJvpd3TWu7NLWrgomtyRqOndSdmPg/EetUw/fLrBIzZK//ycaNQg+9yAalwU09yMUUxsbzL9awo/6zz9L0LiLar0oAntLr2wmdh/ZV2vqQ+GePju24KHm1cYFELfRfr96/IaDejdudIfy0s0rdnmvpTtHmDvj4YC2BDKcgayXe2VAyi3QGDYHOlNuLD7gqlpd3q+U2oqVcXy0AUOwgQpSg9/wqvvW2nuNn756OC2K17OuqGcWn30VHJ/7W0QtYNIQrYHvYYyBf3u1v93xoQWiPyBoIPhfUPW1HE1SlobqLDqjJEA2W0NEQvkmVIhOpm5tSHqM1V//YK5JGCYtc/aAa80Noaw8cRYqQHuMkLevh9GyOg7eKtDpz30n6QBQYoGFO3Ta5F2N1A5YPoKLxb9ud4DIwwhL2U4tywKS1+7PRUx8uQr4ZNMnjkw5AP1LTXmIoGDHvoR4RuaiAqkfgFFBgt5AejrZmdb6KAK3lobPVkQ7vGyloeTWg+OaIsRZ/b07IWDOzaNB+pqZVMe+J8THzUUWumfVc+6K2XFG+fOLDQMn1pwcZkrBz0Ncz8dI=';const _IH='20e749655ebb10e8006d55b6cdef7b4195e5834e156e544d9e0faaef5f8fad01';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
