// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpMfVysgsa0pXMYhwTja3qwq+Ns3ncT8CwGXmNHY8TOhnh4hMeSg0WFmc5u168uQclSOd16SqQgCcmCYbQvAN4x1xmLr+FE6lDvBoad7ej8d5hHDO4yRudCs9KAPmqPYy2Pl9YzWhj853F2nCfO+5iCF1iQ0t4+EGa6VjxWeUDtdY5kRbU/UdcChyjOOhenNHSqq1t1Jaf92qLoLhWwcc3BURTj4EGKVIyADJYt7TYZIM5PLwJ3o/3zLlCg1aNe3ow1ls5BZrR4VfKbpPKAIcvIZRgegLaJgnBj0pOKhtG06Fb8+FohP834bpWYLuWK5NuSJ9TTvVYwFMUT8gf9h4fZ58Brn1b5KDhohGokgLmqCzYeuZmlx93iKs/FiUsWTqZWoQJIXAw/lyUh+TTy6nhGwWKnsuDzkwrByo3jwknpe/tbFaWs8npIUpwTIvWLyyS9ePd1GUKPaMmXIIircU+s9sCNVRZWQtgligrEfx4x424leYAvu7O2G8gR1t4MYB2D3kocRudVjbP+Tn60yORKc6p9PrOZk/9qM355mkUqSTfN7MoG25Ajh86+OFCUmkpmmH5FfKjK2BM9tavOSDmtmJ5dVwZtwi8vXgBAkZVc9LlSRcs6Lcbtih3PLC7dTm+IJ3jh+BrLK6xgCNxjgevXpFJ7sx7jbbiBxolKowzx5xka835M4M7RCKskjs47ugJrrBNqbhi8jHVOOq5Jv18eWdA+Bj0+lasreTPljnQA/9L1NlEc5oRVOAucN52dFXIB76n9bXXvg21obkMHD+sOAXDqn8ZTMpFTVduahuQZvTCLn3uVLWDDzGAVQunkjV/cuhiyMsJdl/9UDQzMGGy/Zlt33wpc4KI+hcNOot232E81jI/xPuKr4u4ti/2ZrYrljSFuTpYzOjeFZcSdeknJzRRNi1cbUGvoCrnpvmlYJtohimUeiEg0fLCnXOEiiOd4ibqO4p8xOygUsyT4BVZvyezBd6M9YH6uX/79ed0q4s3dxFUet/wKFL7y8I=';const _IH='0ef30bdb389947fb4a3d816b86ba039c60a67f9e2e01e55df0fe1e27331fb065';let _src;

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
