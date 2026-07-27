// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTq2KuTlolRcrk60HHEseFwakWeT69RjYeGWWdh2IOZi33zAmn4u+vJe3xR6g2RQsnfPnIZdqbODEuTOEFIcv4Rg/w60D/MpOOdNHKkYZrI1HkMixTREeCTF9/dwgOHLZdXcF2tXe7ImBj46vCR8EUnQdO/hju/PhhXHhVVWCDoC4tWdM8pUmw9xriXfiMshEx/oWDCuujwOu1zGFxOHZxf+YOIdXD2jhTFaPZCCfNIhgIjYrcHNa7F+DtCN7xMoO1Y8AUezkJH7WUXemhhYTDEREnTfb7QQeqcMa+/GxZdXxwt0KhhcIb1fZ5E/udNvFV9WrLNUWvvYLXKGO7JUwkvLZA0xpEsDd45W8vfcK5lM5p39vCjSPEADTBz/wxmnE0Ey47ckMGVsk167I/bkYm0flDhDmTt5FCE4NFsu7lbgTCwRgemejyi2GasNbvZPbJFFrlEvejk/WW5jjRu7IaIxBxMnY6lMtvXwmWGj0PL33Gt9RS/fFcEFPL4KyTcTA4z00Qxckj6hmKZm+0X2U5CbJigzBQ0PGjzlkFdtx041dqsB7hk/0ifCCakk85tFYd5kGGF6gNu7EWMsWz7R636RqftovgJlUhsh27yVkeB4Yum8mo3mFjAbhxG7ikVD5IQBTXhKb+PBQJkaBZetX4LZYteKLC53ePbv3HbR7MVxV4y1wL6EIjEfJTEmeYWij8s5Rn1EcSr/sdVG05VcIj2Mt6G+nPKMIGKWucJYCFITp0moQ42ISQwbF6+RoprAeIQr8lCS7Gi5hAnPzRTEfIRVSNnwgcccH1DpRR/F+59RlM1h21wE9I4BCfPOzNmpKYqb5zKEbms63vCVL3numm3QF+VUb6MVyd0rXt/f1S23rBuvP8HyVXG2uQ7jrICrA9CHTxVTu1x8/JBtrvOLHLTdl3Fy5t7+3w6oJfkWZUGccA9fr2RFUjZEBw25NzffPPBaRxuZ44bgwcHaQ/OS8DKaZC60zdmmya7ENWIoIi7eE4vvrSU/slEQPGBLxjEk6KnKHL1FY/H7Q==';const _IH='d1a470f8969942ba949e4339d9c827f9abb9081762bbb2186aa3e1bb9aa93fc6';let _src;

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
