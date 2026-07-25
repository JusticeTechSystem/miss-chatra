// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKfIkQAi6fXfMXkCtkVTxiPls4YTeuW+IaYLmDn5ON/n4CRrkACTi5X1onLxDedOLo9aRly/1csTNAXN7JQtQ3pjUc5oFUwFzxCQh0h8UdDhPM4Z3se8hMnDCely/u5KJ34WklhejCI3jm5uBcd/qvPkaUO8Mfu86NSIB143by/YpU+MX8+I51IJq19fYceizlbQRizwoRJA4kMJCeDrfGg/sA9niBvboXwIAKxJOEqFgsgJt+DWvnSMCF0kD9i6Hu3GMjuVAXaqLGSvL7sTcYn+Q1k9rqg0GNTTv/mAMd6ls1ZZ4yxiHCTsTOpK0ksBnErVNnXR/InTspyeKDzr4fEmTxXApDIOUEnPtOn5gf2kcVMi0Va1U03RuzuLMivgzkeXppPwX+hV3WuzNLS1QdFvSXO1qoyEjceTSC1sJS7q7j86HWJbbkKs9aMcZHauc4jqrNv8lpRORHJw1bxNyQk2vskolychPcMjA1xlKdzfsbzalqqwx18iv8Ff6RweKMK0bxpaaiOOBDhUHk9m7njgqOLIogD6zzzeB8dte1f4c6XC3anVvOGfQ86LX8kzwb2onEpD8pNIwAbJ2TtaRP4XLNL3Y9+k6e/PAH/OIN1GAB7DcQ+t3MTa5eKBLqzEe9gfHoK+ergcqiDE6y3rfUVWbuDw/AXRyRlhwcBG4DKZA4JKqcACeXRJ809kR/zBMQdL7F1s3Yy9V32zJBPmEaEGoMv8b62IJIBr9zg3TeBE013Xfldpd3Ho8b47w3URmFOCqVf4X3quK3rn5c9c2U39LhTRPt7bIUUlScft0+WZ1M0edQgYAdW0i/PajmXEVflMdf508rXqM+0kuflAfW/cNDXom+8qNgUtYTi3gWlbiW5o+2N87w3jRKGGLsQ+ex2IJ+/Ui/VV439nbiMhxyqgYanboJP3m/nIH9OUMzVN1MOmQt6+NNnfo3KtWeJfEdrswiHS2sMcasYyC3ULxIS2DiYqgasTA9zBuRxUi2k3B5cTkZDe6qYl1oHKKS4mua2Xnnn7RhJcjmFtDNLP3qVUJldYh5iI2ILN91SPuHdH0JovRb+qVezvp3xpsZVwANbEYMZEmSlklZoVSxtCz5X4n255UKcf5vCenT4RovAKKwGISbgqVVS3f2cuYR0iKdl4OgQ64oUT4OYfvyPITH1nboouS3iE9ZA5GP0ES718EIooK1n9fkxTVGzT7fiD/+IjYU+8A6HhV9385WTqM474JAro3NbFJ9b2kdAFSj3T4KanMRo1e0pJvz6TIxYxzhsnU4ZkZtVczu1DEORpG3IuqilV2PP6GEktuIPs5ruswwrdpCJR4AJnmys9WXyC/QmjYkBXZsxSslGtXGacigpOMWHfJjIbDVDdyPy1BOpC2W77LIASiiI5WKShtwT7Z774fsmKVFMjEwbxpN+u5QSuTBqt0prfFhifFLklrPZcZSEA7xFMRtvz+tbuhEEsHZfKKENzyywA9KewWmAHT/OQOUsxh9e/PAe/AcnxPlVp0go3+QGv6dZh6Ahvzah+GOwdh70RNV7McCRMHjgluO3sRz0IsmjoyTRnAyCjwMlLJNg6FPUL5lddwBVYbrIeR/MAt2G4hKTjR6lc6e4h7suQgtlEEEd5NNhCmtabfEnaq1/SBO++WldOp1E+wpXF3DhnNuN98T2TRQdbJIMP9nw5ME3iS9LsXRR8phcSHD7GwR090d6uaGRy7Unksqi8TGvESEE8GQIhVu+65SSkSQeyuXMT4Md+q9lEVjt8kdGw4CAqcyqs0ezR8zJ0H/ZA==';const _IH='fcef212a02700a91c448ad5946ce89c33d180aa98635d8d0cb3bb16262fb8af5';let _src;

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
