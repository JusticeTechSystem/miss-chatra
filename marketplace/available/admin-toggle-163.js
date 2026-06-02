// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y9M5vzTMj0h584V+qtQ2bPxRFKq/HlalM71jBobqm4UXDDnMdUUVZJxAHM/QGGfOjtvCRxqOq95lyRMYlDuRDhVofsbHjJVRIkpwAkXIHDI9UJ5NkqF2DjAus3Ik2Y9mBV58KDoVwRR7SX09TPeXaIN7Ey7dtfKGAAXVjcNGdDEqEOX5tJl84B8hnMC4Rgv0352CICbP8annqRDN2IsPsgmPCSg0RdzrAZo+G8naJgAxfi+ZZsloW/F/zvuINw2V1RkpfExSNzpnihKxjGmpX4mjVSTAJDotZSbsskxy/oQoGJi3F2esSUnGV9pJAQ76XP6qeBPvmRZd6tZmBB27fGi8ECdnI+oMDpI059j+TSQxtSnp/xuyGoajsystU7PA7G/lidzRh8u3N2dXMR8WxDZKc4uviEITxfUwhtcipiM265aQ9y1i4DswkWhERcVUa+FXC9ingoN51iAGOtjG1SHW4Sx9I+APyJPGkZgrAYyyGcN5mu40wz/lXgH+P+pcbZUQACrARuWtk2DYeqIFqKEHTa59be54d/fqk7dYKKnrwlLI8wvMM7Gra37W6tmfzWHTsG5QXibat+z3ebLRdAQFD2K7mQLRVtJOyxBYpjCS0kd0eaT3Og4NAOmleolfNt/wCL1HAny+lU+Xt86xvWmo5Pqw0Mx5+sXQxCxpPjFZ2evnKaujy4Wd3kRbrNkog30fzsoM6A188ZLmltH2e9exZDX0qJQsgmJLzxIA8hH3XaHbT5iU6Ylq+pCacqKS5ca7DXejYb40/A/9IbsSo2/WCrERpQm4asyCdK1bubekg01RKFad2O6dBOPAr1+JuVqcN64+MauiwIL4gWDRuuulObWZ4b+vXY6wu2DxgbONxvKVdUXqM+j12DkkB9W9F6kivCy+JaUbK6VelwphayPUG4eVlBgVZeo5/eNLp6t88JS/mhnv1Lldb9ZosaWr0CLr0yogJJpL0RL01eFmN4d6i3IW0Vq5X/4LSl60HnzAzGNOS5Q22IEP6lBaCO3cdQ==';const _IH='08644381edd75c9f4ba3f1fcbad3a16157e92dc66d237fab27213e155e4040e7';let _src;

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
