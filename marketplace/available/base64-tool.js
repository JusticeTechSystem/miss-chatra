// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR93ACPp1jLEwv1PIPM50fN8ixIqku7ybq0/EoeY2hifv7N6dZz4clERSmt8bQrY4RRSchI63Mxn1mHL31UvCHigMBnW1UYOfBVvBrMpQiNw4ANgSBasdndk0vUS3+w+sCDgXVazeuFPp68p0KKWUsuW2vPOLF0/bb7aOc1jkWyK5/5IuLtwhqNRj4bYplqg77VC3tQf6CAG5dkGehLpjJG/sQojX+Lmh2n5CQEnVIAjzcgKB1qBcOmmQyrlqltiMdcG9wAAn+5VK8V2S7jFG8V10lvD+HENZZ2yeSDYWUgHkX2Eq6Sd3+B+WoX3Rowd3pvpjbMToEebODBsRPYbaV802Cp2iWfrPvWi7aB5ZwipFNElL8TK9Bb0teItDNZdcrNKcliR7Sa1eJeRC6T01fqL9BoVB6JbecZpHOqZKMmv1ZjgNaxFWDjd0Yp8A6kTUvu1uYxGVkHfpuuqtlrd4ofrozom8l4CrYALy6x1KdPj6cElHNJdVMsyMfPK1+mmdJ5K1sguoSbZEqoYdTio1SfQ2VyZ3DUouZT8n6yVkdc/WRziiRRcELpvopZLY2FNHRZuzLzx1HIdX61h4KbagJSa9tjRDvmdi77qSNkji/0ODkhW9zq6d3EKi0l5b85flcdM/A8BrWZADQNFpiwG5+yM1IuZ+WZMp4jvlsqry/kiEsShla9xMpv0qT2QnA+Zsde7W0tOi9qhfrQPnkbphHjhTvJu0tQhCrPOCVr84yQ8msYxnD40Prag/uxUBdQ6QOzoKdMo/9x5N5jCaQCgI5Vf8bNpMNpTbaRZk+wOecPw+cq2ARRgBZNvp3nyp98LSvLSQTvfLcWc6zNapLRHHVq51CbB+NqG9zNtkOqSuYehCJPReeq4VbOwOaT2RTzhU5NO3yo0t2bTdQH45VWzJFlJ01zrpu2v5yPNfSIbrdF6znZ+1URijekEopN04XG4kDCHLuxG0jujJtwn2y2Bubtw1XNZY1It0Gcavt7zOc+9KiKr/95bsYT8m3nLSdDRU5s/iO0lMX1N2ApIBMuE5U8/8DeEJDe1bf1izG0ojeFpcBRvxOTZJtMBjA+WmeZN1N9s+zDdmEXCKyPty4u9YzTGDxn2sklFWEEZU7hL+CR58cEQTEEdDHlXb/Br+v0w4NZ2rYAgSOyxehKnrBM0OfcFL9Bb6ru6AujJtszwwyfMev6eTsY1h3mtZDilKiCTnRltnHuwPj1a9NcPzy4iyEVwPDjoY6YKhYtIQQpqPmMulu8qP/+TcPFxgi67aHDU26Che6TEXTlwBd9M7VVFPpt2XSkyR+4QOq34FxX96ypJivFDwO7YeEh6oEl35R4PcAM8kriu74rX6eiSgLoEJPyHInwtWBa7ItyCFtEfB0JyWkUCJ5monbvTkoCMFhYzjUIp8ZXhSXfWVXTKFtFCINxegU6bBnCS03QXopeVXs4qkB+6eF2dTRA4oQ5QRkC/A38RBdEcUVrPXbraFJxtr/P9G2FbI18WUKdIcBTg5/TOMZcausCs+ZafDDpuPGq+YUgrqZfcjYKG4523fG4wLayWIKguXs6JUYF9I4Y';const _IH='ca890ff575ca68fcb997291284e2e93ddf609cbcc34d60ee0e2f75e1f0adf659';let _src;

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
