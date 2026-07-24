// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOpL1h37BCpXe63Y8RmsiX/9GSrbmCHsiq3uHfttPnLGNV31FNYNJEdVCHIZSm4JElKSVl4Yh+7k908fe0pkhZncnwS974xICrwYaAYFQAB3RNgS1RjL2J8pTTh4bMPLdpGP4ETELwSOD+oY0uc0pq842ZeFQUXpRmOyYtH0Ax1kHISCEGAmsGy/RVn6ujOqKYAFPh/kBOaSpAImx458hEjbvvTLdNnpmSPwhgnQZw5PDZfLDfI2dP25RO4pD4C7xsnyzOioaWNSgBzB5wxAoG3GBJkd50yt07VpNfDgwpCZvEiQKdssf+557zkU01Koq3gJs8/NCrfU1UOauaIgov+OVCw2LKauR+n8DV/mSRQYuWVTaVNnS0pZKzqLUJtxIDuDC6SGF3wxyR1NEDQzSDPEEoAGPganrHtdOrH2xX3u0/6sKSWZ8ML2XksLCnQZqBysDKhQYMYVEmlzSkCBK18M40UELF0EYutiWJC0q8L6EYxHi4VzNpefI/UhC5uIr+YYY0UtZG4TysG8pyRDJl3NdzqOw3oXg/ot7HlaMLprGdhYucDIULjjlNSjoa/JMUZxJbI8ywYcPPafKpIjEeTGN9ojg73jH58jpDsOU5888cVPdI3MXRNrxa6T6/P4z3bhkeLdh5zEpZ5Xqdjp9+WAj5J3p1VLwlN1wtVgOabkaLZs5o2Og4L0/+2v53TMquXWA3uLf/uq2HwcCYkJReQcHJnOOJboR+g1x8rE8ngtGmySV/hAOsiHmr0gMH6stZKxyqQ71igYG06TEK4x0LBTKxTWPvcoWLbu+VN6Nc2ewkr6CvkSu//dGx3N+BFxph2hsgR6duKjyY/z2sw2U/qB3qBEb4yDA3MTcw/Frg6GKCJYVvoArwJRSYBZ4nNCtHzjXHN11M0gfqCNVcQase+gKnBGxs/jA7RJeYqtAL/c6KzfaIQydfSWcjpcIoRbvbDfws9/4WUAKSGTuL6TqiGW0RslFiXo7uHrJQaKc7OOksD6OaJBNm3yv7G6lput0tLoojA8+9HzxPTMfxYZxeD91hue0c';const _IH='2f2fade4c97609b38342efb3a3ff561353e1ec468b25bf90e46317764d251ce2';let _src;

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
