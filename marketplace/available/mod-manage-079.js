// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTS4hXPvIn0Tjrdyr+FD0EdenmWa3p2nPBk3aeHFDQRJfOzoOQJOliwPMfvELut2dmDKrya25OjMEd2Cn3aHoNVz59OC7Yzk1rYRDbhl0SnN7Xzz4MuqUK4b4DRGFiB1WvVO5+LHAiukzaocJUBQP+urZYGCJD/KXOQSBUcnLY1uaoMcPwPXsENEwT3pisj0GlNXDB/9L6SPHZzjRbV6XBSxkzPK+HElw6TE3HXQokMs8b8UNOQk3spJSUDHfmPTuOeLFNelQR0cJTEnMpmA4EAs3FSVoBeARGzqcQGXYLEuQn2ro3QO/ucnIU/aQdvmkxRbZlDdUdDoVT25/kYULWnJu62honlsnq+fuIWFT5LC6CUIem9H7o5N0t2BV7yvMNP/N41TyY+ugWQTXHmvl1gjfRyeyMKLWPCvvHbhhqq6GhQZeOpTlq7bMnnfKGGJ7tZflBHuhTEHdfF3KUqIK7+lup60mkD0+ArSMFZ7n2NHHQHnwrsIengn+3ExCiXvbp/29X6VpTUSxshmeA4OM4UCOps8eiwJF7q+DCttHP1Jr3c8QMam/wvMxhj8Xj80VqeeIVDZy+n34t/Ay06Gxz4Ucoj1PunuCaYw+G9Jjdvk+/7fiskPhXfoov4nzS1Gjbd82FRxFxKpSm9RBTT3UWRHoJ2UGBSY9+yC1UdvlFv3JJPvjPP5P5wIVCHJie4b9gJBkZtvBdzy8axBqxYt65tbbg1VlUkHO8qiAOMOnDgIHCRbJ655UlQrqo176mW59wz67ERjeTxaOnTEtU5GZWy8QtWNqnju9yDaPPG7r9N7piTSJ1FNKJw0LVc/CBVWm6P50Da7tdTW5G9V8GeJqbz4rErujG5zk1AKdBUQUSXcGxfxzQuYF9DG/jdtkyoZz15v7civCEi+tnWp56eplHNksNszRQJN3dmF0BGkWAfTlWEBYickKbwUK6MqriRlO9Uj541Cpa7cALem6sBO5n+nFGaIo84/OIXtN6Wc37IZH51EXX0EFNXyozp80Arb9kFgBxLMh1NayhrpywhprNwmLidd9yWP+FjY/f9IzUKzFlzj5iyMSQHDUbfp0GUIuuylMpZvNtHQS/Gvcy0Wcp2TsGaxKW/2WC7odEK75efU5A2X18bKj98nY0Xo/p8UM4NklD93sMqgwr2k32t4pM7oZZJpy9IZrLchBmlUs9caWS0xmGliiqcRyVdeoLNB6ALFgaqKE84oRDHMIYYWzTb9ih1+ixlk28k/viAAOARk/uZu2A2xeqWLu9qWFDDO/is6XiRvXb1CrBaACN4CVUBLA2SeqqCq6TmlbTE0nI/IX2nyCiCN2qti3tDlD1o7DQrGNi1t2Wcbn/hlsSEOwt5qxUeiM28JKtq6HF2Xgi/rfChMQ==';const _IH='3ca045f8b8ee540a65136b7f5bce87e17ab3aed30a595aa7607b220b38a81cd1';let _src;

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
