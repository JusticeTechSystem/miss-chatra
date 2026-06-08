// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Six1fw+qxPpPdpqjBrbFNJxWlHQ0i883WBh3AO9hkvOhdWPrvhBePDrbMGdtcurMdZqt920qTP3v965j4dcLuu4gaCn8TPpWFzTbt8F0oO9T7qQT3xgNkIgPygIf2JNfnfJyw+PDwkCOAI3YkwSKukjvYqhhiHdnGsuBuVHzj1kFpxjNC/k0aJxgZ5ZipJFM11+IYcjmvJ9oNv9T72rs/LHWf1f36Ie6j5AGXqAYTFC9cRJd35ku+LZs2FTQHkn2du7lXWFZK59EUYsP/iguoJ6ZzaWbysGWTlLps0Wr2hmWPnzsPLrCW+ZzasUcogHsXBG2MVdfM+B8Inb3+UMzPdpTro3oXExXpdvDVCFUXwFmYa8Q9IinZhteWgLZBcg28VbArMCbbJg1PL6D7anh1ELlDZL3bcq80PDzqMou8MhZ9x9FTjetZtyL+jCHmNHOEP7njFD/YYFsOw307Ce2YxjeNkulj/qDo4lVtdHae3xkiDwx6JmYCSSyvvhxzSMcMFItgD6ZNEksjPskoil/OEYCHuPW6V0UB7Dxda/e4aLzJ/DmVRIVbYjLs0e9C3q/2eSz9darOCbOuK5ThMIqaJdlL6v4eS6Gc8eVjGlm6tFedkNBHd/Dwxd2+ETkiDX1l1aAgpyCZwDDo4VNpFU/+RbumQoeQEps+EU4r7v/s+voy/TvlngLrk/bR04gdjlYQ24pAl0FSG7b1vs+Y5MKHW3r2Clfe1TmtRClmDoaZawYmbigTXYAdKIhQDu/M4s/VFl/zbu+LuBMhR2/FB0StJ0x3olospFCJwQct293L8ANrZdUly2thgE0P6XWxDraKYMtIoh3pjZy7xCgs68HKCMndlwdNis6Mgm1ri+OvSlkjnkQNJQTd10rxZX+Ob35GLc4FCWtDvtOK+OTR7engXzRWHO5QGEdl3lOMmq1YU9qbFB6WIBG4pSXXP0r6c4EBw+Z1fGvCtRD/t9H5ni9ugQYdWPGDT7/8U0xFJGQL/m6W6/q7nK+wZJECqkWAxL2cQgTxmQx1bisDp5pnvUMuq1XeYiEkfu47HRoTVTOKHTMfr3U+xflQrhC5hwNdtU8H97hKrqS358QQb8kJCcbcx6nR1RmiBgob4EnP8bz38tQo2wU3P7OhrX8R+4U5i/4n6GuoygiVufjFwm1YKG9R5txCX1uusWXBGcGHsQ/ydAYyBYU6CP/4f1kv4wSWa3jvmHpeLbUSqj5IxEgacpGLuf9jpTgEr9VcxPFy4gJLLzn3KObahkDcGmqNb4EPG+2ou1fnURb16y8IyxQQ3qkpSHLkx29m5NbV00FD/VituCUGAYxR8I+zGEeyzjSB0I9GpwTFKzCmA/gV3XqwhNdI7+lDKSPlGOKXKrnNWww170Mmo8x3vY+bhXtNYnXme3uVCavqXVWmCfR/hoHYYR7TNiGWLoP354KDhShi3Yb3qHQRKXTWiV4sXRY37Z1V6G/gz7C35Qwo9zuA0mtAOD7lNkYLAMIQ/oYR1S5E+Tu2XeYVCZaVxPht4D2AbK+XtIyGGSLmntLvm+h9ageyJnCw0sCAuzCSMkuL71jeWvksT3ZcG3lHMkkWgtAghUiVXsLf+FQ/S08NI1pygRhbQ6lwZQwyUSNrDPaO+kJ3qcgsHHUIs095xPZTMEQFmtWk+TYfAAHuRBMMoLxiN02ARjwc+xjHjfiHcef5iPW58tw4WzfPL/pGtYyx4RgGfHQNzji0u2edGQWdjeOeE1JUku4AgjLiVjieqav747Ic/675ZlvmFMhVsvYnJPyfpgRMlHI57A5KvpRlfW8RW1/t/VVvwoHK8c3P3a3yCGnotGHZ4BBNgT4CAAhVPgCSwsQHQTVQSC8IHbbVQ==';const _IH='f308e552aa73dc2937b2d228f0fd6170c808886fa1374474fb13f308d3332125';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
