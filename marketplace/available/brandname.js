// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2mLAcxoH4GkpXUfC4bxQOqIQXtNSbmPepaRDbQ5kFZyahVuayiqKL0xSTlCo+S+SacYIvd0o3nnYspqUHH++0cCF29M7w/CI4+xA47C7Tudy2PBsTx0sb5voiHI7OKW35Y+WwbUhGdHuxwLNd7H26Dwd1B6paPr2LW+McDNiXnZDgN07dTFctPtgWTaJRI3B8j7gGmkektUkzkqhbP+yF2WqYuFPkO6i3X7vJcxceoai174OtL0L/oCIF65RmgDyJ4j7JtCsTUCNDMGkRur+9LUGPNsUiMRo61PfPnFhg4mphteN6TTTUurQECBtnYqeMuwYfBgv6tpy/lWvSGN5CLIBmSW+aPdV7vwNa08UdJZlCo7QC2/cY9CogH1If7/2SDKpVf6srzRsFUMiC65hyRKkowGGIZkSzNul4qVo4PLy8GGR4wZcuz09a2yItss8KU5I3j8EllPs0BLxU38gWyOWTOnYvfUhJWbL/QDQIpqOt4u/dlkX31Iksmuzxu406Bev3n6pR71XwNZhyUcg94+lyJGIts2BgCUU9VpPx20KLVW1UDyZgo5+5m91SauoGcbCyLCB2hEdRgS+JOGiMb9q09Nzf0qakjePLCjAGhLhD600x2LW/phN0osoU0RFBg/bILHsuZ5sWhlOAtvIsQK7I+Xx+HnyPAY36P/eBK/jBnQPWPQXVGS5chSiMupGHUghdyh6Qfiw8sRNOPYFGUKIwlic4M+9/LoFte7OnzyYwFf0hQInnhWqPjAVTf8C1gucrd1L/2dBqu4w36O/deGGPqm7ZQRaJ++aPute8lRw8CLXpCCbZpjr1r9zns75z1jduV4DV95s7aNfPIyS3A26kahsnSHZEWovCQU+tJSfRsHp7hWt76InTHle1139EBbfPbs/0TAUOn3tQEXqPOFrFj9Rt5vD+PEhd7P9KgNqHDzEV7GZXMpW5yv9atzdw1BIFWu3gfHRIA55OVnE3GO41ZHfesaUti7ORyINeWAUCS7d/NWEAKeVTD82ZnTgGsF8IdpBBw1tljfjZ3euuR7OyUSGPZPVJNcVYuuOcGxYe9dlxuKJ3JEuT+tVxdc8R+ktynIyd/JZHHZVoTDKPErENoz91LkIwlBLGv7bl7cHRhPijPiEgzQxnu2dMTEdqwOYiT23fvlgDrVDBZKM6QSZI8geHn2sAdaahCL8vigbfkiy+SfEH31ajpDsYdfAuJ2uZISZ';const _IH='90d889c33539545f28f65d2d6833665c805327b9e449a3b282caf93779432488';let _src;

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
