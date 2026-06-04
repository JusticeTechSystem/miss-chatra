// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BwbUIYP6hUfzhLSKzjEDP1IADvFfVwyzWC/JQo5KpXTcxZ6gBIFC5FYJ9UixrT8xK5bUn1UmhK7ogiQxAFAy/btYN6TTQDjWakJJbH6A9rf9yH6M6FHZvYHGSvFXEgNh7cBcGHZPhalJ8E+4rJw1ZXcrpND/xRCgIwirXgvWTfreljHNkuVUz0zbyyKUfnTBUS2h9Wqkl/T249dwdphxWEbsV3C51eBYnqKyHLIKgtFoidp5C7az17bVFSdxSDJ/O023ZM3kpSIXMjFRpm2V8me/1Y4frNsTpNj1r/H41UZzsz77OdF1QmfYU+Eiz+OckvCpnamBHRlftUvcY4xDSwroeeRJg6+fAnCiixxhjREnML+7iE6OorPVDymu1sHLiDHSBWBdS43gAUHPQj2U66EFVOUtP7JOinGuY8ELGwZt6/jQSdVEwiBqeqjx87YyNPQd/BiyU7zTREocUwPHmUe3cmHz1YoLWyEid9p41zPIfA15GPyBy7qV8T16sp6ui3XemxHZl3gNrkhlKRYZE2Ned5ykbtja0vqMkjfXs6ZwJ6Ab3P3TUpyhVuh7Nb4TgB9UfuqPdAehIB2qPLZXeE1rcQnAvzfFPrFZbdu6Sc6QqEj9iXwUUdgf4vJkNP+e+nMHH7/+9xHl9/J+jR6ssb1qhtd9J2B8tinML7Ex2uj7K5I9sTGjMCFPHHsDCwu1xsEdEgVlLfs8Qw4VKbwjQrzuFacZ6Va9niH6ReQ6p7NE7rKOLut1A0E5csz5KxtXq/j4RlxEnDwB8iPgCK3aUUKkAxqobMmvcT3hGAp2cffNIH8gOtRshek5uzafV+RjnhNj0T8SVXYmG55gNuOe0HVLM9L7N2/4DCnMfCpz2HEeGVvklg2dRVoZ0lTyS82wTO4U524sctu2Q3wvtqcSo4uf0Vg6j7xHu3K4Ep3Bu/igy2f1WbTFPV2qE6IRJX/gaYmFiCNgyyiHoaX8qvgd2+sA5DeKM7QpX2TaejkWdNYxCW/fOjvsjeAn0Lax';const _IH='79a8412d197b84d9f35758895df3a9e39503ae3360168dcf089de442333ffac2';let _src;

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
