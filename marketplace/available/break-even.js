// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQA1AvTN7EktukyXCmkDn5YOfs5gaFh46qzPAuf8EJWXP/ZvuudmAMpu8evjXd7kVkpErmxFNWdYBxCwrVMimiy3U6GnBnjU3qxzXnYEfXlo2HK5SghNx6H2S8w9lBTetJI7ew8r2dgihi/tf7Ecwaz+hsmdqMBm8yqVOYF4ltldJSuCCiS0iQGFNTWShUwnI2YMD2H9I1PF90TGD8pthgM2Ttkk3ew0Rw1p33mN5RWEnq+cOexJglUNFfNHd1AS7BWTpINXA/2kAdky5Q9enZoMPUpTMGrqyE0/AR51Ug/TIjOPYPj+AWTa7Za2P+hTRcp/A5UnDLkgbVdLPSjqp1fBPdCsCGcYvMiBTVeJAlM8iB2SufZz3gfd3fQobk50ttpnxEXyj70dmW7uKJarQ7+BY2Nzzh5hx3efdwE7NTf+PxrqatRWJmOlXLMewPQIVSxk07YZbJBpjzBSdpsEJ0L+md3UKNCK3FFA4QyPI/n1zMGCvEIPmzKl3jHTaZ1CpJ+b3U/zKeMI+EzMRsCXuoa5IdibGo8Da5ZAWX6gtmfm+3R2M30x1edO16xo3P91PJcieggzicnKP9f8R1MhiYW2uDRytp1T0Mvb+ZsViE0ImnoEoAQ8GwHp98JqlAOnbYLL6k2I1as/yGbwYycXkL8fGFsf/XCwz3reCQapJqg4ck8S+Rc/3BvMa6DK8Q5OHnIFRorH8L2+nSR9PcfdKSAfyb64sLPFuAbQWXNFDl/FYc4LLm+pf6PXnHeSFDo4UihkYjx5pOMaYDIN34tQiqm6TfNYwnV7W2wHEoI2scV4np3TVIZ2kiNXKySjjFDWgSGLZkElgEJXexJsC+RLUAEoqwVFDDsVfm0C1gCFaKevk2YAF6ZxWvfWBD53e7Ps0Yzlhli4lQNZWjl+7ePw6Jeb3X1OrpXrgJoAEfQAeS2SW6HWOK70Rkjq/gcT/wBnCplJw2BBiFHxQhwaAzj2+uPATHwx9+ZuST5DYZWTXtPm/aI565lUayv+OlfUz6zV/xrMmbuOXB0XLACFzM7Tb+lFbuF0GRxYUUJx/RPePyH2rhOK9+AERY099vylMWJ+5AF04mjFlc03IpDPCh0aoJuJm9ZawE/xU5oR+CrhwS6fhNcmT9nb3riOXKgrjJAKM+0FNeAdPATPkCWQk10q/BEwPJHm90ukpQmpZL8qUCUJzdTaQBqCgTnLjiVr4/H2MoZgAsHSucN2uGkWdDDheXyrBYHds5KKyGscNL6R9gnAjKl4MpmJ1dGpqGPEIX9QslcCSCrR38gFLs9aQ0uMVSDhEYB1vWfRJZOgs0eUQzjc8y9jnB8whjzWAbk5aqHxsUXoLRtMtFQ86ln2GAH8ALRFp8/N8pRS/ryIMgRlV2aDWjLTNSRf4C4VRHurgDkcoHnPnPCu/swlO13bAE+sls0WEIzUOl4+P6ZaIQvlMu4fmlS8soMCIIUeVRK6CkSU0Jlxwizq9Ws2IeSaLPFijT0vZfmHhyJiVzfJS8mJ6joAeVutxIIWu0pmvujV3YWgcIIFVHmYbbuonbHd1VmoF9qvnuxgMpTjh2MHtg=';const _IH='e4a47c7df3f214f3e245c69aa7c105f78ae78dec62da8cc1b513736e48e74cab';let _src;

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
