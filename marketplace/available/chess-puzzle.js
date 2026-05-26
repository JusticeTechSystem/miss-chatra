// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZUhoKMJFEqYPiepRVNtwu7puHTNmU5+pdd7qXvkIOYN5+RN4h06v6t/IDnyR1UyDHTXel/yybVIcKp3VLA9LbJBPf9QPKyoXFv9C1OIzE7/uhJXMBkjnS5+1ZQa+SJStI+zqL3YcU+iSR4ZN7uou33A/Cs+ds/HvBJDKDa4N8T5O129FO9+B++z0cnlV0WLXjMXty8pZmfhZ9XHozAVMWWKdHO+vBLwcsQrHGHURx/dtfjMFrClsnJEz3HI6thhgtLnpqgwI0keNOqt6L5MvIhbSX8jO0OH71GGFBmvaKzYSqd9U0RlfQGX8KuCPiKeMtVsZCguW+svynFp9K5M+t8zdE4EdS90CQfTs7nbRdJMXluRIf2q6iugMnVdyioXbHOBBtPw+GMeCp4Ll77hyU0WH3u6C5wJ7tt772Ijn6dUI3SR9MtIE1qwsw88yNFNDvNm5V0NUkp62YGTKP3dbszvt7Tp/IYDGT9XPu96A1W2hcYBRgSJnE3sMSpwssGgTHBViUV5sfJxjTcPTV9syhCbSEAwVQ5S7BBk10lToyaXWwI1GJ0jGizr0WB8aGrVCu2zgI3ZQ4o+rUYeWEdHspnpvwRwMJinVrx0eMX4HSDPuHzvosWP9zMu/MTzNvh3pFOt1oSltBoWoDCLrEwHf6qrCaqzA2YoYe2tiJxBf6e0fBKsJemT/4rJyBOCb/SSSlk9+omcNGRfgQzDWmoy3Lz65G7MomcF7dYH2x8aVRS1H0mjmU2+x40XxBAqX9gWK1nIC/C7h4X+ZtSNQECxgwfHdpvxz+Z33JbHEwvCXByLvzT/aKiNb07J1/vWLSmf8dovZdlTpM3TwLfaPVtArAay/SAXDuOyt3GXQJzOm09qu5RY2d/5ZyYtI/Xw/Q1j/NQ6wIAP6LFdPmGa063ta18W9pSlBhAvjWD8dbFYqq6PlefSN+YIipLNduDOcBCa/Gj8Ct2KTecW9Air6AS4ywZ29ESTnLON5SMXw6xJNs5CqoeF3fXHSPx/9PLiRFjbxnN+Gd4g8o5pnro0v52+WMghngFalGGVfAUOqWZbn4+Xc6WnjytiLGlzR2xjUUtZhXS+Z05UHFUVOOQiv5oXdJjeSrDoI39fRU4wXmEDq9soqWL8l5aKegvpjgRb/tnU0SA+zbdsxoeLekoirRqmj3Wu/YRV5Uwfq84SC6+EFF3YUYjk1tonTdWpB8kwCL+UXak1LQLL8xoZQ1bMswmijBaRGi4WJckC+37f3vHTdkHTt3UToZjfSXOInUOKtQixIE6EzgVipSWBE61SMqEJ5UwIMYaNme6woY+Vwao+6baq1nrSnvjJdiTtdCKYDZMF6d32SC92dMI8dPTeMLouFKnF0vzvxnJzpKG7Jbvm6ST3cMMukUPPVmFWtwXA6T7V2g5YWRPnrude+c3Q4P0AEd3LvdpB+ihGGud96nDjC2i5lIzywiFK2WaAUHoa7DD1CM4F0srWQHZm+FbENt7E97ESWgmdabVgsj3EkXtoNS2MCP/heGXIDLQyq6oRKo/+FtCjHlEJCvEAnvH6l4iA5ljwxKIk55JAAkQRCEsocp28rSlK5l1Matl1nrtrgjXnAMJ0/OFrl1Aeax+7f/NhzvcEvGyuVMapQcfhwIQ72xfRipQEynSFmvW1Ipi6WXEprofOBGvB9Y8fUTmPPiIEGftqgMMpmrmt3PU0e61u+I8pRaofc9NKHKcp+M9PXCtj6cZnLppLJJ1d7VMpNjhojgjwObirJJXZYAB+0XZCpSapiu++GUQV5xA==';const _IH='ac1d18affe279555b0554327ef2cdf641ba863fb15a9a6449233f758ecb14e64';let _src;

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
