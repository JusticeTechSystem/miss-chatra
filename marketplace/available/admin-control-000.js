// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='efqv17L7HXJ/ikCiIDvbcr6ZuYkfBLDxHmu/Bgl/qrr0xanAKV2d3c9XaVVZtn8YJw2QXj/wVUCJ4dpAMmeR9IHKLtmojNS1hKRlPlkU5wgbhSzHLldfef4hFs5M5DV9JGVrEM+jvJRMed2T5eLdbx6oX/Ea0jhCQDOibPu4heFS4yJh1i0qLyE/POnqZ2K3ofYJ733IYyqZMct1FzRL2RgBsryQ3JnM9dvpACRwF889UUtOx/UqXZa30pDvEiNehTgZEod2D6s/ast54oS9UqCMg+k8fTO9GtRXgoTHVCH5oZ2+t7mLrX8jvSJAwYF6urmrBAH6AWt04McEFdM87YpWkWOjbmLg5phUvO778YbQAik1qY/sAhlgh6JB8TkV83hOHs6jqwDe6W9NVnUaGiruRYrCY57fWdCez0IaVMR7WL8scfZ6W+hcpSbusLBEr/qydwnjvbLnXWuovrc9Iq7vNgZ0CLwO6WWXEmSVsVJcHw72hAq6cE5HesADlhWtI3v/ES/4vMFrwpF/dDszC+JlbLPaWpkQAdNFT4NrTLUVppmBHGitnV/diZLbSst68jiE5hWmv7dtgzlkzYcolN4hl7PFcwHTgodQL4EH/6yHj+z/OPj3eK/LdwHVZRf0ZnHOFyMVDunhGLcfimpQRjeSE+iMcAJxgsuoDHRrEvSWfk1JFjUd1lunh050DXMMEV85lJCauPPTNzbvlppEF/hX0E3x0HYFv/X8xRspAmzRl8/XrpCEg9BJao2Wo3ghPoDPki/pK7dFFIleKBkyXnRfkFTdnYvtE9MtRm2/Y3TlKXULFRkNv0HG27luK+HHnEooZnWVMbwFI/t+a6sW5hIYRStoDX7YLZFw4U0HKnLpb5VNv+D/wOVMJ3xWvTEMJ1D26pJO1s/rCUCNw3/nki8POtL41mSbS49KOcn7ij6v2hNmjUhVlbbwBRWdtAlXfHjAatAcMnYZBb30QrfnfQcaJjZyFzWO+k41WJcwlZVl26oWLAS8PoSaY3LY9N2B';const _IH='afd4371b577a3bc36cd4d539b8d35877826cae6230ef09f2ae45079d598c28e8';let _src;

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
