// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRA1LpTe624bIXRJBaf2ieOAu92KbSAxgxzseT0x2XK5VXh0Ac6b/JBECfDAYQGsLw73hGVmHvr4wUFhLi3v0Dr247r+wnwmnXyxe3E1XUg9GaqoSKTrT2vlkBGq4BAzWHj+QGrFn+T8DL7UajHkv/R2H1l6uwBvB9hcm3ryOGzOdHoCjKljWDT5q+5BFi9DSzB5KhIuPiZ03OVUQ9uhqgD9ZZ6PCTH1zczt/C6AWES23bzFBFPFZ9ka/XruaHnouYCEla2WlAVV71UQDGPDlW0a82gGDa+/mzS6WQ2zwZLBrdFv5KET/l5HKrkRFYvLFALDcLX7UsNgNNS3B8tuhbpoTT1OYtUfPF/jEP/WR/81FQcYrMdOqPj1zim4vwqXq0IFxnUjOfbYUHhpePd45BSjBNFuMchRLQ57W0wtMF6kCwRpTwTl2ZJWAHgQNkcyeRljcoADDYGz9hXpxqBLZtirGo/tJ4bmT/BrcSqqOsNOi0D4Ll8nirWZPOEZILNn4layvqNLHvmQpQFG+0f+LONqMhv28V1GN0faoTQCthpKb/e/vi+shX8hOJ/NUmLexqrACNSFMmqq4PNn9yPoUBrDbI7YWLxJidQwyiKx8HX3a4L4ZP42IqhMniu7zpLwLwQroFQRnplBr36quZ69CYA6rZedR3dJUi01uHuedeJzQe2cgCzyjcqrq/rcrtDEqHewN7ElfifnkpQffpreWWaBNeg2is6WvNmFSNUtB0qsJLxem1qpgRGSR4khNKP+bFDquSdW2KrmB7fO4/RYJQAmoKNmB9aJxbXLmkI9cJp1XLXxq6Ma093ErvQ9faEi6tO8gqLPL5d3B83CnkdhTgZloTg+63vQSIVfTHSpTxrtEo5Dl+KGVNswbsQSspLXiqsQ9J6F/QyIasfRuvneIsWLB0yJ0bCfH//AuZheKxXdIsbfqX/W29JbwDgYR36SxabYTj6n1sd7ltNKIF1C81AsbY/6vnjt5FUXgZDgwjItKt6739CmrEgWlQOGzHDm5pnxnJxM5HYhGtHVijWfAWNp5dU+uR2CVsKEtM63UYIx5GeRoD3rgs/QWR7+8YHHhSGemXrCImdPhXudVFwyJBVpTCEfDGea48TY5x/pvNAhB5wgiRT56jo337CL1s318SoImHLWor6Ih1ZhFDjgmzaqZCd2u4PRRdVNJOotzx0gRMrdkxqM/YAqhW+n3czatPpUd3rqHkfMdMAzsMojLasVLWt4VNiDlf+XZx75DTpoeq8nm0gMU3lGn/B/aaBo7Jni3ZB8UP0qP4TX4FwaoyuwAlDPKFz8PRQfdnWnxMWT4QeayfMENSSE7kWEyt02XirwShaN9x8zrTv8EuoHTQ9+BN0yyM3+6BZLeEP5K4Xx8l/FCLYlGeR';const _IH='f9abaa6a48c82fcedbb5c41221247b0b44c004bbd96cf378521c5a20d3543c93';let _src;

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
