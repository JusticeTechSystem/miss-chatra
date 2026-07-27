// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgMyYG1ul9Zw/jsh9ueEax18muHv7NtP3dQisvjTRTM0VfBV7iKCm9p0UPbGrwaRZ1n19wgV0TUA9r+FFDWf2oJ4Q8M8LqaVMt047qqzVSByh4Qi9KaAr+JQZL3AUlQrjTGtdc0/DA98zfdvBKnsKYxh6U0+1WI+BBuarMat2L/lYocWVbmnVQlsdzHYcyB2VXEpFrzXGkRXHCshpUM+yket4Ib5LXZW9Kf/h32OD8H9bC9RFxNglFO1YamKS/kFTunX6+ieFzFaaPKB6j9M+acs8k20YNpN4XUcpJwZvxACF8KKzYK/x7mFvwZwXMx66FAlbe6UUxDbb9Lxy7mMp8eD3rLx0GSS+D/NTFRvVWjP6tH3Dl4AgspV9e9pmhAwiA3GoWlgu4gsrEJ33WmsUSQm2UenOgUOMffSj6QXwoNCDabP/uf4kMlJqZ3oGaxR6lKX/NbqGOa3CXN/oEG2B7wWu2q1ZDOW6a0iMhedQTwbXYCMyC7/G8OhUdDrB6q4BYgDGG4wvmuSTtumQY60XFUTfTIkcMQuqvzDbl2dDC6fPd/cbv0EXPI7jYAgC6ruMV2/yJfz7nJ24IczxFF+al9ula9C0/eVzs5ZHBsJYvM38SdFcBeb7ih4Yg67KOwxFhu6+wXC2eaiI7UmuFVW1iTfAIM/SbZaQFaHDVfBMxp2R5WuggnpUxNf2khJOgvN+6YpmUJM133AfISlec4q6ylA1RkBD2zAy3FHxtXbkD455XgDvQbgbJPIpb5SlbXZyUZyZK1t70sKXN2TcIEDx8KDXSGrOzYm3Ap48A+a3PrfaIZR696jaOOyaGt8QshBA2dG5dyuqLfbzwg900CyTSUlA4vQ0pESJKnEmnnLMlX1IMvBE05C2K/GT0dEOI63cA+MbSchwavOVQA4FXx/KjsQuTLA1+4+O/twNgKz/0i1UwpSmAWFYkoUvuL1gZdN4vCGmzAZYVGkKqWcfV8saftP7z1tRXeCKncFpG3V78NIR5gpwY0unXHx/wwwriJVztDLOkq5xw3p8PENQys7cwJitG0TJOLNsGt5Leyio+Orv5Uf6Er7+v2lvcv8gc7rL6J+wH8eGCiabHKK1rzZn6aEZWgk/funFl/OYJd5GJakIBMSVI167jw5HV9kAwyK33DUdX31F5qpeBz8dP4mvGjYUSFvL4umKUjlTw7WPU+Up2qc3y4U3b4CSduuVDTjOzGVNF5RZL1FDDwi7NxoU5VnRTeWiWcz15VCW4AeUhyfU8cqpNH+mTb0bf2pBTXniYCNxpW26zm4ZChOQMq7Xgvh2S82qTXYf64FvHCOWvIv963o5TJxpYxxHHDpzFjwMSIZNFQjamwAm6w0HnWDwiymeDF/1+THOB';const _IH='88f781ac031396e6529efcb38c374c9d332b889b8cf2bdd02149d203c1ff42be';let _src;

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
