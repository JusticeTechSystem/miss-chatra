// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ci1OVh+CoGWedveAOTLup3M25ySfDOd136EID7ROf0uyJAYNvMBy0e3qChQIDRcUJqtGiEstBIlG13ka6PTgp76hBHnlyv1AVFCxaEDneuxvxXTNCzNNRZysts3vpnD2Q1bmsD0LkZGuAY656KOj7vWVXuHnfRmCows4eS8buo7tPrRl7j7mN4Q2kVkxLdu13uc14Asn56mCybVFXtPup+QKxhMblCseadpnHiGaLvEUiJ5ru1ZfFOjH2E4KohqArnBhToyl9Ynd91kcD3tVEFo9tiyzZz+rAoxj3cAL8nYVB/+rzauuAdazKMTq1YA/dr0966iG0rtoNFJ4fOELmmWpQhdyNGq1yWWGsXrCfR7QMLp315ZVVcvjfnucDPhnb8fI6XPF0ebSEJMYM6SC1A5fx+ZgWKJPEfHLEvZ7JHfLtXSIj9RczIc7WNOlAfQc260izRToqkxZRR/ERVLl2UR7UKOOIedLawbFGwOr3Y8B06j65aUWWvc4MPNYZOm6n01ArAsLR7aRob4DwFrWoXer/ZZtYiVN54X6c19nNDLq1iy7m3s5qlTxVvBsAvr+0em4oCj2yxVlJptQTWqPfGywAi9G87ImwmKgCsAvZZ/yTijq4w8sVkP56QkfjQbf1qPWnK/tyCW6YEY4eV8ndY5erdLNmC4RVdWrOYmkCr6RuX12yXfE5b2859NF7gW3nKHcAkxOtMhwlS9MM3F2hAvknMc/ue0ikCBcXBZNSvpfQxkmnYBOR/2XHCxtGF6ecBeybAbOppCcl2kmggCVPI/Xgb3vMLyAVHvxykCqdDQN+KW+dJ+zOc7zA4A1F1Mas9WYxURIqM67Th4PTtfjwW3Sizqgj/Wl4amRD64SkxdCr1pCfpXNiTvhLCyYVP7oPlUAV8Ons5fOLSmHyBb3boTaoUiNYOlMOXPRyEvpBn2z/uMn2J72yUnBOzxzecUAsj2QYZ2Asba5ZYcJngeZfv36mySTlhX84ynO3K/iUExnho0ogBXFiDPsBIKOvnNS6yZa9Tpnmvf85CgSMPKxkOZIqWv0MQL4GHBWPtYMHnBQoSNmohZF9mi9sOCOS92cXym2rqe3hMlFtXAE5e2Vc1VyUF1DkQCLTDsyvGdmfbdMBySk/xx8eakC3D8aCCJzxPqpPNdOo8Mm0cbrw6DgBkXV/tKsBOvBHtmB/qurcyyfYUf+iRFpphmYKW8xm/1oDtQpIwY=';const _IH='d699043fdacfbe1f1056e385770b43a6a26409d2bb62825a956a41b03767aeb7';let _src;

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
