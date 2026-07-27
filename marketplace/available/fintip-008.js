// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkZZFwyCQhF9JazXrsLIHHWBc5Wl22u8wgNg3McpLT5yQLzyzowe86zEDJk0SqPIoKKaBDLGog4/8/1h1w0YdtmQHAx3nyVhlUZW3EoIVdMzn4QGWaii6OMRuJJcG7zgSO19YifhaeZZTTwvee2hPWYcfIekWr5ozL7tPUXZb7/2UI4qpx/De8sM9xqMEjcjwZlex9N1ujYEEqny5lGN5yfnrnbEERLCmMNTQ6mhbZXafZifs0Im6Q3iZkNBw1KqTr9SNNHfriB3MHN4Q2e3ztVopvobzfwJGgffsXpVw90Gd/0Z1VdfkJbYwXqKJmjiNH+srbjcA+N6vXca1dyPWVjfpr+0151Ql1wcW5xQxcQW9Rl9PI6QT//TuoZX02YK5Tivgkm6AnDNdCzDPmNv7vLlLjSWtC1WJr/4wsmeowFoMVPzt8c0Jl62wQGnofbRpuQvKBwXn4j76Hcym6M0IsAhshC7OCxkUrR/oLZP2t6lIEku+Ezqawiq9554p/CbMg4ESOPNGzCbGsxt8ze8gXvjleTm3Ms+IvjpZ4v7j88oGh0Vsiool28vxBnD5ETrwL8PYilkZMGxg/GVvzAuMgNGS3f/8z3EF11u04pFlAtajXjc9GLewVutHi3dHFZ+dZklD/tIxsSeM9MwyFVDhJbBt0dzTsqbFFINM7X+mXDpLpCEIgb+GSkFh/lH2U9A194VYYF3yt+U/XtXhWMsMb46wLBWafpBHFH8SdcYTuMLRihXP4ekxb+YvhukP6Gy1x/xuTvBvediwYlyR3uzuI9UYLQGZwDdEUhbkhwYWMC8r68461Y14dduw1JFT2qEIOVuXSHJkx1uUbtMs7qchzRQw9LDF59em/zMFX3DazhwZ+DmJgosuM8DpkUzJkoPfcaubAJCAOpauZNEtpMaXqNJBZ9O9M/Ksy5ixbFrnhwKlO93G09VV2xzZSYcrNTwQzeMxnlbSHFzQXKjyVmofS+AIWFNTH9OyCgjJi+oAcPD8LBZt4OKWDoCCOGnLDJPEIiuVGrDx/VV5ziN8uAkzNgO17JJthOAi7F9fBOks=';const _IH='b9b83254be981cb252776c0f5ac00af9064e252fe408e1d722c90bff97d3c05c';let _src;

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
