// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwQL5pvdxaY/HdINUAts9JcvD/SqsiTnyieymynETLeLbmUXMt7MkpJNDDrQaYeQOYtue+LFUMJfUStj7Epz8hhOLHfAHKxqXunw9HQue/2k0zGwDDioK/yY9WEfpAiRhI8iahnp77fPFVMEA/saTehLE1N2VglgpDlTf9EfRHG3mMYLmhXEzt5PUC0460E8BvD+pMGDaB6P/Z42IA3NSMtjzqNbDMd/wAxIbEUHf1uqxhSzd2b36+R8Nxmb35ndTJn65603CxWAvOf6nHHLjKnhMTEzBLgjSrU3wkIoiB8NFWeHN3MAD8Onj2nk+riSX5bWAh3HUoBbjpHbgopdmnJqID0NpqA+taKX50PmPAu9JCP0WknGeREIj+jqE6VWYz2/ubB5KxU7DENCWBA3u4in57NSA7Egue1MgxVaeLWe4jV7Oh8QzEifyeGnVJ1YhQgCsmGJmkuAVmsQE3Bl3czHeXJ7k/W4LWvAV3F1FaSE+Ok6j95PdYCZJV7u0R/RlkSQJzBnmLdTv2BLmtFjZWderZekiRSmCDzEHx9WALIBsstCGVFcvN+TF4adXOJPqhmbh0pIFtmABSo4E3ounqejdQfzEX5ytbL+KEZt1pGmbICz243pOPGShnHKGgLCZBQ8rah933x9WJ66iVL35LzCVAFRRsKMDJi4KZuvlem0tFJxKAyocdM4AYn9ZQ63lVabVID/+b2HCcS7Oi0u6Off7nd2tiTi5LoQ5pEkPHF5/H7N';const _IH='1733965df358c1513f73373926e18154fdf0706273c5935c54d36b0af5f04188';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
