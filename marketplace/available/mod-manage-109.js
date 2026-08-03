// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkLnpqqTeF23obRZrVr/EYKg7fb5bg9YpfdqsW/LkeUOgAUJdSpa4hYjYDMdBnz+9w47z9imE01nNz3OUmMGYD+Vz9h0Q7ViJjnoJBU4vTELNJ2nQmaIUfpKAQWEm03z90CZs3+XC9q4aIl8SDz0NzK2gGM09xot4Y9QxVkcOKQcN2HkbwsBQqGpfpuoUrpFEpGN6jdi3TAsnQy1lXo7xPfTkzbTwUDEyvYM7jbVBAt/46ap564BNAwRMdMpUbI0SdmN9PswpdORzJN8CvS6L/athYPbvyMUzQoJOjhWG22LMmJQ+WRs3f1no/0lTPZkSo7AkEd/cZA1L0s+0HjEQhblAZ+PMj7eG/cuUer9uMU/zN9IqjTmhlITFG2dQ0uNNHa7ARXSQZm9MUs88NW5gzF9SkhMyskvkrQvs779L/ixKMmBMrVh4t1o8aTyszdLlwC1m2g0Ik2eb8BEVCs89k29UHm9hoksJM04cDLwDAl1KNpx0BgyEpolM81OED9d5Fwe7xweLRFPoQnqb9P7IH5GitCJuf8AIYSPwwGP+uVTAqSPXQSfcEfhe2RmSC3bnYir4UCE4XhvrQaHQHgseF7jDavRd8ZOI3/m2p4foJx6aVTSV6BlEkmEbc4E6q14UaOzp8nTrXE3FKxk2vViJKOg8ncrgOYrHA/dDj/rdamVBi2YcY5qnG2mTRIAAweRoipB+vmcZyXPKs7Zs0YAm/pa3KRy7aw4Ya8PHjaDqinE2aIRadTFYRzP9D04lIcgBnWYOrYozuJsIu2rYTSfcUHcFTvMz0D/M83cmRLNx1EXTGaiHoSIt0m52SlScZAJl2lqh9f6vdIujFezDWRD8FYX7vnW/G4z+vJpvitkQ4QcQRNI3tdPW28huGUgs8OF/I911NYLIEsyqfTKPqz8lyQ8kAexK7f89kAVBl+dkpfJSZRb5L6sOArXSvmfiHbQFiROJ7pKzP7osWoDsrDzSK17Tqt5aMqb2ScA9LLAFBVDd383TMZ5BAakEapEbqeV7mRgkj0q+sxtxDlB1j+7jQcZaftunXNz5GbOzTMhbFpIf4UiNJMawIGiCTajiTfXdkL4SGjALZl4iN7NAhtN9wxQ6jC3Y4cU7mkgVyGAmBA9oRCVyGzxrcpnFxu71INY3cxFgtswB4RkFgKAbWsWSPY4JzyeCHUKx6Y0sLwEWYpGzYvcjAXjC5Peg3Dc1G2OsMNS0pK/1/tZDtBY6F/5Otcp9LxrlsInLil6nXnPUyvLdMqzWyh4q2YjJIKYf0AzocKAb3QyYVr7ynE3ZQ3I2cqRqP27rkqgCxDtgyaLT3gfGwxcIN8GcpsYk8yjm82/HCUIs/IkImkpLGfYEQpuAJBYVfKYEfK8Xg6csgB+szHP7cSi+b';const _IH='ccc42a97b66fa8fed517f80c0d92ac40063ef87c53356f27a388f4845e7f2ebf';let _src;

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
