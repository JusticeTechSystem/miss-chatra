// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvM56WV/FPlMrg1upTOPPTH8cBOxX6K664Fa2o6ElcjRWYdCg4jJ9+kUZkU54iCZn6Ze9BpeUVFDOacOKH/j9Fk1Xcalt0dB0EDEX98GaXW5TYmJDwulK41977xMzgobXr8ntr8n7XV6o0V1uFLZ9/4FIgq1uDloJqF6raeEBW3cwnp81OOtaqjRxy0a6TnDX8e33Zj2c1JVp9r+kci68lCeN9LpbBazL/C95F3RhV/L81A5Bch3v48Ako2TZXPsGAVStjbkiyILJm7EbzT3bbFtf/6cqXkvNg8O/GXwE3uBrguPKUv+IFzIf1C7SmxvgM2XCjxfD6CEBBwCjdUE3HIPqxqT1fwdtIn3F8XpDXdHxVtOwGnGnm6ICqq02fGHjbdp6gMKwXAWVVNnVUqwjSqd0tR38DoOXRcT2kjyFEexfGTxH7qw2Q/zhizyAhF3NqcOHFg09PvH/6NucQf9va9I9sCZhNKUsdShcFR4OYZOVLC/NPp5ln9q/u1Zcm3gqEN8tg5cYIdG7IiZhPZIiRPqMU7bIUPp1k7PcKsiebQrpVmQ5pmH05YZYSM5e8Uc+PiqMgSn9/rQuZlByf9S5S+USYUZ3Hr+mUVk7Ljka4I2JuJq7mHRa6J74rxxa+vDnKjzZfghKTg90VTq/2U1L2k7MPPz1ImJRZjubK5hbk1nCRuxekmoWZEJKqpQ+ddFudmafsNx6GWf+DKjRyxxdTjD+8Il99mWw9BJMY1sxDIsTA2JaONK1KC+BwfJYM1pOzQ/VT5PVtsit6ozoKw1LxHCKQr/YxhGy82yOfU9FybQclboqs7lEsdrDlWw04ZLBmCCHNMWmPdLH9BMETEDlxgzjoloj328cQQnh/36leBTKtcDuDIZ2VW3krwHgSqXCD9i0uKy5gTK70VvRX0FfB4pPTDowJTdrSJvmcJkR1PrCeE0ikbqqC2lW6yKf17KQ755gNnyoxNGijxqsXK35wiHZ14GAYD56LdlK3oB/mQiHCrqEc884rTh/ed5V8mhiPllcwZSIsx4RhlEu3tfKWk4FWg1Yspt+gKLYaMHJsWXGDQ5TWXlqWXDwCiJN6q+nlmE0YBHiZHwBd2QBZnzWJGvs2af7M/aA23JOcB4HIvnp5VldXdXWje37GWEC7I7iIyVmlkNU98A1iAp5h7Z2WDj+pgvkSWNL5CbW7lg/cxgIrx90+hEqV8/QrfZ6GgW/B3gBnFtrZ/jmP8/J9y+27e4G4hjqPVZ6QMRYCK8+TY6nsWjYuLwLouewy5WAWGEdMDGk9PbSB15Qo0bTVs4UmjX6mmuRUV1Fv9Vq3AA3KN9cJwBjQ0dot9p4b4L3lhmJ1QN7a2Hc0NNbeyD/s7/X9Fklzs9NZrUqbNDWgdPrZBdmXgA==';const _IH='4bfb507ff435794c7981413a5c813d3cd382ec7a9c00ecddbee754039914059d';let _src;

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
