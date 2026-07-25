// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSG9b2rGdVjkojBSsSjJBk2T4j7/BzAxRXl3Vt6dSHcmUoY2t75kjAqcikpe7TmTkk9ygol5071PeEaFCitfeJu5kvtbTthfePJP64o566NZtxO0xZ4wIgUfjyrzU9nkn5ESSX9FT1MqcOlx3QnYBM0YB5BQ6wiNKa8laL5Di/qjlorbeoTiM/hWh9VwpxeN7v3BD9j6UjMRiPkoyKPRBz1W2Cvrf3WuyKzBy0f5uI8CVxO0pxjBgDF2RGF+gPxyPSCjVu/jW8EYweyDcD+q4iff9p4V65z6ybUUgfZhAuF9Jz+pfqn2Ek3KfKyGmfIa6BzzBPDRq0zF1T2B+UtugyWCW8QzOtbn/PdBB5A3VCdfNp+O79WViPg94S8CdXRyZz1xebaHusEG4snFVot4qoydwQepuTyrka3J7CCCx6uQPXgvlXUKnOq70Tf9KcTi1msqV2d6w6mp82zKrzyg/t30OZ63AbNjQgpC7m2yw7dObhMxiylVJdjIe5Rz+Z7T3ROd+SMUCEapDKq48X2jS3mFBRoT6QmzPSwah2isduxerLxl9OA4iDlgnqLkgvhvwM+xwJSAfBWwcTCLNpULN/d3R4HMHCw2S3qi2fagdEdgGFLCfWvGdwGvdF8yrJwIN7klay5pVRspxvPUcBm6Q6SmT4Ney6knlBS+06ibCzeQE7woJiNHDmShJHymCHQf+FE7eo5IPCYRc6ibz06XRRCw3UkGb+9CL8=';const _IH='fc63c93b455ac9f82d9e6190b3a328a6bccf67f6ee751328055d9073440f3796';let _src;

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
