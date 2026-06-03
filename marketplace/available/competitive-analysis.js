// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IINpAUvsLgyUsAYFcvKH8JWN29VHgbzi0RGmqA6OPvItCvQYmkpGy5a0Eq6hDpOzW3mePPB8Ro953ntdVSRVzsCwqGwfaeu2ivpE8r68umTiKjfNX+IAXi1j8LOQtB+nbZU4647YPhVYv4UsBScWSsxYrfTnQ6koh4MCdn9DnddFFBDxUY4pWD3wsNm0B/vXtcvW1VnvBf1HFlUdnILn6OYrS8aQendZFkOJ5VUj0WbwPFOsA3krUbkhAJWPaKiX0uvT4No9Od7y7yYletVnaix4clrrF2pAl1ZQBwvE/2YAJrAqVhVpUS2HCH5D7EUR4YozIVba6LNhXE1cuF9C59damJWHlsZFjGTWZAj25Y6Njezq03WuhV/hbuYNn3OPjEN/LrzhSbEhRUjBXBbU1xi0OXvnZfpq3Bw2DvHr55AcnItuIpROG2Cc68sZx9GwxhN589ZlO9niscMXlPtjuEd0mSOP5wIgZzo8yiqVctHrFnFn2Liym56By2F9yTB7fDVqR5uf3TO8CSDUiE5xH9wf73ld7rB9cGKU+9oPRzT+dsEfCf7ePef3rPEu6OrlZpuKtKHATrjuD7xt6CcNOYKtgXuDP2yDIMw/SABbRFQ7awbi/eIsk7Ad3F382PkvDeccgCi60remTVE0KrGBsvkKQhumB3/m7nxWpKpx38SuISlg+lxzwOtSvHpnBvweyBAYcwHOxYiAtQd38YF7XzXs1hM2x6wRAQn5EgZfdu6DtYPalEI1TsTU6GapIjMwPQ5ah6YTZTY3FgULdhT+RlK7CplMdVERLGcD+2JC9UGDMiKNPQ+6x6oOHkcOwyFKMCRLUxQ9/JclxnerVTmR61ORqjR0uLs6xffTCh3dHBHwfvwfQ+f6u1zm4iD3Pvi/cPqS1a0xYheH70I8h/bzFM48AiVaZi0d9RBswfa5tm3TS/5ZI3Erepd8LU7/gCiKjxi2AlqH90p7nxAvNInBCbBRScZd5wqW2Sqs2vxRCrrCt2WPee1TgqtXec84FdQJw/T/VzhnORXH6JGwAvWmhVcxsdwg9NoF23xzBSBaErfIBu11J0ddKf1vb2j7fc7qZjcP/iPmVlmh+bxuLw7SeWSPIqQfKvqqBNTcRTDsFphkRcGE8izTTepe3z/5uq1dRzpo3TBRDXkI8VD+72y8d0qwnXqt122w6MHJV3T20909uSwDsMLJ7EiNE0dtH/255qMMZq/V8hww3Q/1wD7cxDEEhv9L8hM7pOFcn81iQKl+9LUj3iwycugcM72kEyfIloqWRVATUuINUCWHyKFzF++aoIZm+2fXMTvJawmiAWZgT8lo+EqFFGLcE1HZ3E1WYSpy005sap6EWsms4fKmVtZWmfIDz+ZdpAWBCLVtn6sLfaCBRqNl7qj8Tofh7+Lnprs7Yl3+NU5WbeE83tOLPi7nOyjTuisIyE2ltr/ffK/MQ2t2/D1G1UHkw2dZKakeIi2+CMOKSvIh8f9hFw/aUFBEm4WHpEkWXvhYc8rsnsE+Nf29vM1QIaeM6tBdR6Sj++A94jjK2YfTGIVVUjw5EVEwDBGkHcRc6IZdQy9/AzmgnsmyLQjTs6LpEtGaps88FcazyKlVOSq4xty8nr5N+mqaJJPvVDhjgRHisNEejEL1bcsPhVUhUJFWc+UbktS3Nn4UHDTSEJSORkHIfj3vZLEYEzWxH0A075Ru8F98VxfSXGAlnCuAm5IlgIeblePWW//VeWrXNe/VYOVdc8wn1jgy1UyTUPo94CdeFS7hM283yN3guVIjIw==';const _IH='8271e8a542ff4d0077dec97d500d44efd3facc0c10f7ba0d4ed0d746ea5e0cf3';let _src;

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
