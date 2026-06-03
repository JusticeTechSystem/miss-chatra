// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SMQcr9MZvbJ8muNORg4h1T7E4FpTjIHG2UfzYAenoKWpXDEzRWYashfydcotYfFrBR/jOmjH/7erKtOCb+PbhobTCFv7fM748Xk0rzGYQhcS4ZaI1xmPAhiezSLR8EP/SIjtRfSwM+HQ75biJPW18XtdKh+sWvqXgBWBmp+RYby23/RhZKI8Eb6M9ltAEk/WMRVbkdvbOpIawunWHI5tkxW8e/Z7FHjb40xFOXpWS8aCeKkOyzeK6FYwNkCvW1kAJ2AjxuFYEFHoF0h6wcPAlazhr5QjOIhtmnu958dqlPr8sRDbKZfpymgDafBFAfAU/822j0i4J2nowmplI1MMIKTwHGN/NNMqY+AJYCIQh5rDyNMr9CjTHMGVzYWr1fGIlcNf0jTU4h0EhW0rchSTCsFV0YC4/LwV4ube4tRIEKKQfyJF0gz2aNZN93hUoiJqsCWhIzLrd9phGNzC6rvN8zuTtdZxABwu+80sBohHBAMVhhJ4BrXTvpuT+k6xMAxpFN+vHnxgliCAAJNvUcJlhRwIquAsLdRDU3MCPKo6SgHdH4R2PbUZhZSmLawLLNux0I0L3cWSCWAAhKR1A/V46B1SUPa/EMeb0a8v6IVsWKGjcq1mKl0mvzWFjlxW2mvqFYEaygDNiW7F2x4OCO5DZeKdbnhVycY6n8vPpSXx+Un/I3YEnv0u8ArKmQTbfq/xo+Kxgpi1yq4MTORKyIES1YAh+LsoDOhnUwd0Yn/K5Ovb+ABRh1msxUW4dSGm3R8BPll5CvtbR2VIvGnWYwe6Cr9MWbUoHvSIF316RBmCuJSeMboOQJ9mRRIOPCDnKXPCqRj3iuSAN439PHEgytyklWnsyUM4Od1K0tBVuMdeffFxSYsbYWJhRY2J9DvpKvfUhGiuVblaVpR566jbL/sCGzzi7lUIdOzq1j8kvoyzjSCiC9Pt1NRnSl+H33fs1ow18eRYVpS/CPjN5JlNdw+/gvpQoRt8Kh8JrPz7OiOIRjeQr7KflbT3izGIAAk6Hmr8GNfEm+DmFtT7AoGGits7pmHTZH5pV+/NfLEtW+/ziHt8wqK89vtr+3DEP4+hmo9gqhCQVvlGIqKyMmkPmnXbpQHE8EmVTDfBhLUlzKklPvlXnBq1SbjEHUzkiK4BGmtvRC7BVSYYSng3fO9lA+v9zfScoSr9FVx7r/pnRD0yoiHLut9VHtMM8S5D00Z+wYiEHjqQxC33QNTQopLHj+w1NySXVhPT1xTRvACUAsEU/TFktC1fB6I73KCFSHddEeCUmmHIAKv3QpGXXleYNqoaIh5Kat9bYHsBzzR5Wexm/+LphQY=';const _IH='2a78e5efe25d8fc3b230fc78d6d84e3ce39c9a98201e97411f9cea147e8fa3f3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
