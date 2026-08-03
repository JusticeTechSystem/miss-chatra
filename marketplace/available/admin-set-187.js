// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRog7eCeKCeZaRHmts8tqahM0Iy88rX5yzi2VeacukqYEpuFPQjKfTr05EMx5rqij/I2/rwqLc9d605OGB6Nck4bpPij9NNAswsDiHX5lL6JfuJfe0ZWif9ScnNyqpjo0Xov9tffJarviJMxraXM75bCQv1TNMF5XEgR1YxR1nwcnrjFcUC4k+NfAvQWWKspQGL6iUrBlw4pRz+8XOcT6wNKf8Q6dQgEtucff8TGeOFSPT1ElE3IF34jx8IrJ1ZbBw7agwEn9me6ybYugKtNtMakM/K0Eyt8tWU2494PMW22KE+a70Y1gMU8ve6vrNXTHmSTXUiufp2KcwOqESP3cPZ5EzVYPNbzJPsfVf/mhNUYEL68nMObLKgbm1wfn5ze3HtqiW5lwWecncC9i4wT4ornCyVU70Xm2NL3qHv4AI0WJgiBpW+zOCfnQizoXGNFbAn9WNBAjn/1ZFmaTKHXAixXi0ISJ2O4VggjGoyEqFwBcTt3bJEQC5c50ywLbdJlcyDaGwO86oHWm8hHqd6AR28pvBFbwR2J1S2Edxo7ioUS5kvVe5KQcWvlJo3XeLnuur5cS3NN64ea4D4JrqR+jAgBetMH+4E4OY58Zd0A+dT/Q9wVOHuv9H2YKaZN2HxoYnQC8O3Bu9cg8A4sAjbggIPKFlJkQMouyDbEq4MnENBWEWk6+A8khvqJf3wMTbeih0MbvpUaM3JpSce4lVmdKKhMw/BfpE+3jj+LUje1DzLy2mKGDkMWej2WvnvZ6wNyamoFODdT3xGztJokirC+Srv8gsVPEfnGQWYOb5bNWYTdNBhRygvA/KqNdY6TCg1QQx1maZnDbLby1VZ6VEAiNvU15R9FbbBWPJhTi1VFvjnd8Y7gotXQYK2GstrhLK2d3+f37BbIY0QDv8KSLndMBLlIHsiAxWcL+Ks8xWke0pdKh7uj06D59ZVFR7tdxTOlIKaqDCYFslHqJZuo9O9lfUoHHLju2Qb+1zM8w==';const _IH='54a2267059104e757a22fc4418e62aeda45ffdb186eef964830234dd05499550';let _src;

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
