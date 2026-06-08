// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TTtT1uqO7TfOyxKFQ5Gx1c3JRcdzL8OTzeQeXvlrMfP3YdpNVK33r3I6GMQ81IaLuzQzseNOsc+NRHoW8vp6RSbaioqToUAg4mcIqRiB3G1kqKEJtQ5471kEIYo/tPt2EGRdIMTowkRGPa542xcvXdvS7zgDrAzPAcp52yFA1cGTl3Zr9yIjj4VFxO5ZGjOsbsRLzJ25k4xeYx1/rBn+0SoQ7Wjs++JJoCv7txC1msu0LRG5UzFKZeTztOr8CT/sIfkWLvb89qJbuEw7MYQoUvXdFcR2etGjZidlYImc1dgbHvQ/UeG28TJ5BLRZC5dH1dfLjaYXpyLhGF42nieD8aNcM1KKt9Yd4SQKrysKYG0gZbJlmcYRh+w2Ksd/gB5rUqZA9JF0IGD0CKu42wLGDz1bR+7dVgILtqtzZbkXb0BioYwsW9a0NpCLwiTQyV1PaHtrU8+h2GvhDpVBsY0+jTINbEwC+qV2kPbN45JXmLTvCL/hEk4hDj/W7qvT7MoEjMY/sOcvW9YA3kQE3qfAq2MHcpNTncH1QlVBf+sBsADSVeRQ11a+x7zyBD8x7qPNGMKTeoFwdW9R6VFk3d6NVMBRAWSPe0xhGz7UIKKf+Ic7pgWOyB5YOecUNAKSJVIfo9AsenB0Xl/CVkyrxlypsEvP66/AnKezD35jBwAdlWn9zznukQYqE6zjtIWTvmpFwWkbisG6rOutJM1h83iuhT8WQ4FfsMrcJ+Cf3ZpwpUKCw2Mls9MxvGysU4lzh43eNVBxtUCtK3NDeOZWL/UR6OYEH4B6wTgVLupEU3ZesRxU6W5162stAexpqQYz5BpjMMDM/T1U9xoZRtoV0ISdxb6H14BzJQSuUQq7fKw46rGMetPNhmCvWTBo10+QZiDfE4qI3reTXdkLBJR1pn39N7vpneLfKXbtdm15dStyS4gZ2hU2hamJoXA+VnE6/p7GQv8FSw0ylqRBasXgBUMcClosvXGmKBRhWZFLcSIa6WT3h8bneLhZdz46ZG4xoAh9O4NqcGLmm1UgkJiE7MJEgLS7Jok3h6fck2sdPVD3nydyNNS6qF6qiFwQjJX0nd6GpULxuc8w6f8gtpQj8CdhCbUk1sUOjAbTrt52uXUjk7LckUPNptXn6Dx+JVYUpQ6xV1NzIJxY39924XCmrcHj4kjKkaU0aWLeo1pIvg1x941l7dpZyif8GaGjApWm3npImO+OYil5Yqu93kW248LkyglZdJG5Hkx72hWllN3mEQCswXD9NeDYAASdKb8zy8bLTd+yFAeLs/I3WtctfiU8+NeKBfM7uguGB057RB6mO+txPJQsXYQ/HIao3S6owc4nOXp3msIqxmSNe0p+UTf5wthHtcI2XtceNojLD5Lp3eo4Gys=';const _IH='6f064348daad971406e85c3b17a3654d0e4231f7a5fa5a37969165c65f772dbd';let _src;

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
