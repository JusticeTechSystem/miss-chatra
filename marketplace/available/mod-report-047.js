// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSN4EaLfPW1vCH7HSRKn4kE5xTUBHJNWtFxlpkErzZx2UcowxozHIVOiqEukUmJ3rB651tV01FO/z60BveGzBFMN327GAZOFbBtkO58kTccsym+kZ5slZn3d/JUMRC+yUFZO+bXBriu5Ppc3MGgjIJmmVulszx0LlJNoJWXO9AjCI3oI95XPcuzHS8enmvNcL5tyQk7dL4gHxoVltA3vEYhtHqo5glGAMnqSSr0gu20ZK1v0485tD4rc5WqSJ65yYf5XmRdhB8fo549bKSVUJ9EZHbVKJ50ZQpZKQMcfblHaE7w6GroDEVJMOFckxfEqP6cjn/m/rL/HPjRsxME9ZgJf+ErC5OcPS0bn6NCIyKv1pwBF5IGivS+hvNHXOlXXuYgwYO15TNxQZ4gXOvaBnwFCIjDV21+rUm+axJR+rcGX/S/KTimSHU4MpGkZX/f5G6w68jrT1RXZVtf3RlLOMyXtpF1tyBYkQKT+69b11r7A3ePPSiT73vK/jMihT7prhex81Nc3xytAfzc6pOXj/DpJ5NKLJQ5p5z8JRB2NyLx2ptEEIoSjt/j5XmE7PL8gfbuSAR35TGX1Wa+fyQJJ+4MUeYTdTEp3qKlrLpFsKIhh2E1FXNR7WLouxBL9gurYa4+XMwnFq7bvtFn7JScYnzOmxaixoEo8h0CbF3wgUTCQxOg1YmZBh+ycDdNLC0glPppskPiw7Qj84zWUs1mYTG3dpm4D1tlrudY/sys7kVu1roWS+FeDRWmrZ49/415XtjRnKszBwP8WIqa+oywLOWKauOToUs3xASzbwed9SvWI7cSo7Pkx+Bw+Js369rPZEgsBlYz0NocoITGdHXimkgp2RnHdzJqxRf5OgW31mNE4wLqAKslufCcwmQSX8icIOQ0qlEC8PVJdFYoHoHJfPal2v5qXBJwW+vKdYtLNKiixJYg7JfVJa03N+Qbn50pMsG1MyJvdiH7rZJnPYgf5ipHpn0PcvtKt6F572LKNU4oko/r1w/CtfCOv64Na7QNrmeOMdmpbuXNUh1EpXXA9OhPcm5wi3UwUZ0s1Sd5Wnv3MA+R5vxBMuUDD6ZH7Ie0IrY1GjG7M0N+qEqby3NYrg5JnCRUwnRTK4O1o9DFWSGlCiBgAssTelfhzszgYKL3OnqvuNtO9Fml3A51950J2dDPwUrfCGrYidG1UsbpCtehmXAqzTkFep+XPhTim3SN6VpS63T+h/pScJdKG3+CojCbc9eSCU3CZOu1t1MeI4OzB3mcTmgOd1+XefjxmR46KTf8timsARclLm8ucDSFx/H7rEGtIsP56e6dPPRClYegDs8iWmoQphPGHiW28C/R4ckmSVRi5nFBENtqqihUseom670+KvrI75RFDGbH3MLm5A==';const _IH='553693ec02f8144e09a0ca6f1215af23acbe2ce69f88db8253be03a34de4b600';let _src;

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
