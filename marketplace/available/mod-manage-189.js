// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7397EEFz6eV4/ECPiLk+oj01tiUhdV6TpX2gtKdOjjTv61zZtgAER6Wa1q69FdQo71KJDzyRlz+Ak+RIT4pP5QZJnUvCQltWhKI1NXpiLGswcVNYVx8mseFgD2bMcXpHFEnnCVH1fg19XFeQG9cdVm0nxEud1T+dbDulnc9J5U2nGI/HZ2wm+q//F19WuqLQ0gV7nvWep8g5zzT2rjKDjfYss7Tri2t83ibnYEUmEgZvzwnjkCUQo9mTKX4XVI8Z4u9GIPYj95aoTbqhrQyOoat+91GjPFTKyCcbGaDniIRaII332fN26t+Z8iJ1ARPajj0PhO/NTTOL+6hhhumy0F403a1YAci68fpd7qGk0Hm0j0X/jsdTfRHa1kk/zyQMVABxtJHLjsieZlaeCMRZf2zzyi0fj8wsfhtHwackgXFMHHkOiHi62xaEQBOp7w9T+ALTJ3aDa2DY+AdMutv6vZT2SRsbUXDQwLlEUvgRtqorXOQohceap+rkcpM6dEk3G6IW/IYuB5wulUiBFMUgaLqO+dYQE9B12+McbyKoyUpYLM5Gllo+E27Qw26BheSVNXMgJFtbCLWkAR0ax4DeiDQ+KhLpT2WipcBWZOCfJkQLxYrdB2h17z1gSzzeccNxq+uJiANIfi7jzum61VHCg8GreZbEG+7jy4HdcIJNHA32HDsEYHas639aNlYXSmo3h8QFCtqeDVNgiQc33g0IgdZEXKtwjKPkMwxjfSbBjEBN7g9dm4RBiAYKI84b6AOQvgD2mIUi74ULGjwwYP6VWXotV4tBG4ho6KWxazmvEwdYMKFPzkxeS3SVIw7IxRgWffjXPFluHYyIPhPO2qcF0jyCRBK+bEsLoUhEwXbv+iuqwkjpdyLR7lxgDbJsnUdeNYuD9GmZis1xdI4E6xGI6uiELNONhzL/yvuIGaRkEVbJhdkmOI1MXOr0Yv3Y+jtoLWyyjLLsg4D35Yk4G/3/kSFQZGYuUGLdAAWBVqp2FFSehWU64K4KwN1ImkB+y3QAoUEEBJI0ij2E87hAfXVTPf+emkbF56HpJrucKE/097+IU0cN7fhRwLKXrT4amXkZaZ/N9qHBT3sI7nFFWxqmpdBwFwuWQKtNu9u5/Z7INlh/emhJ+onpktrfnXyCoEV/ry8kagIXH04Z+zZSD491prWTZMd7IAeZiz7IhWUNgUsSupwczHyGUVplVwjtHwCMnFQdYeWv5Eyp2TiM7yPCfu79WV/okefPSvOzw99r6rnR6dPTO57JrNiVma1U64FGST9/7eprUym1D5znUuHLtv8nmg/n5TYU+TWoSD4jMBkooO9I6a2DrK69sEVY4LvnSpuFbp2ZkRgCn0L0vYQf+rkbwR6t0rtCOxTyTLPKEmTj6g56k/v5ag==';const _IH='67ad941bc636184ddc73e8e652a195583e0774e4e1fff82211b05e5a6511ef81';let _src;

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
