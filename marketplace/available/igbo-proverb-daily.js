// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PIX9LO6WLSWwfpQX32rt8PbfHIJ/DKdRh82+lupUur/a4HsuL0V84sPJFVHqB/9fEPRh7qsg+e0vP+0uC3itDyx0lAZzyo3E9ap5FdEqjctfiFLOI/MFQkwAmYMst0YoBOyb+lwiLXEKU0DXJIBad0OMiagND8R4Niowj3/Note1z3NcxqGGztZZeVugwcOwg8MDDLY1pTyq9+6nzdeXVXsMUZqBvazbOLe9SXjl5MERvx5In0Q71YAZy6pbXkCOGX2rPy7TmcqdbxZCs4/r3Ru6U1Nqw3XK3V4ndWX6szSkbfDjE3TZZel0wLECdjvtlN6oUQdUb2anX4IePZr5kov77GzjHSVEKBsWI3CIpuOoAzoQnlZOkwsr/nXibYsfjzUxnuVTvGedmFy4T7DRZRtXs2H1/kL+mUMrt9pzKVC3K70QpQI3NFwqRzzDL0DMCNLXJTAoEPIQGwuJsSAoFNeqj4YstQYmPMrwc2zPIwtyjqPDg5P2ZsmHMbczdljJvQ827/I0KnUJeoC7CXuJac+iDZ8JvfbsQCmNr5jzE9udhEPUOuf7i/9m2Z9ifznvbI+6er6MJGXHMu1U5d5mEpZ4eub1zRbMRv/8P0i6VczZajcziL74u29w83rElXGd1oUIoevB9tXDm1TZKxxZMBPsYVHxSpOC742xPb1WpRKuSWK5wYcEn1/aMEyX/Ya0bmw55pbel5VCxOLAjJ/jZwPfWaLulQYJ9Ezx+5VQX9lYEd/6aBaB0pjx+vGa8Qlj5OU3llubxNkot4IWgFgTdj8B+240dyf9M4yE9Nd/47stUiJJNTNTxSnNZIsJHAta2dNOz42kojLNgRPKZX3HQia/w1uUeiNcQxLcCmneOEoU6rWan0yVRR7qSysyloBe7xWzssuvGp2UajxFcc7kYMaTK6omKNLlydHmh3nHMPmW66TP5D16mc5pYXYsBf62dRSdWXQQHuSS/oUO0//k3SwJorjDC4micMqpLJ5+S0RzbLUPh9EVoCOb5XslFMDm2ulaShOuDllTyBl/mA4EJ9o49mOU/IVBgmXMZh78CBixPqqF14xs9QpzLD1Xji0BKpI/OfoghM53XZv9HEUjM4V0OwJfdydBNnt6u8ULU/sokNs1raapo4aoQCERcWyuE+xMbhK4lLIdzBEyoF844D8+2T4AOZQ8OE3GME4CyDXyhACNPikf8LJiY+umwCwSOTlQTPiEFWYBi6ej/4Q7Yx2//nkwZWm8/KqVISZWspRyENbrn8N5oLFJbtjziv6AsewXKvyugtapo0JfD1LQMVD50BSPO5prpFA1+nSsWAvam5pnD8rxKBT09YccY0GgRVb3CdvXURc1ZdkHy3yu4Y+SHJjcnCjeXRKKT7BfqJ44UJ17oV/kCAibIl6TQL3v+FIsJNtUbfTnvuU5H+i5mcFLM9VRpxCThWZRD1uPbWn/69N8/F+PlG30BUSbgXx/u8GdNcdsNxod0LbVRY0gYHR/J0s33GGd3XAs0N3S26/OVAI2opRfoYMBCFUCN22uOjqu4JxuLE4tm8AorN8c/UBd4OsYg1RTK79BrCU+z04Vu16Gcva1AsKp6hecZp+u+u8qypzhDejw8gRyGl+D975DR86xXGLrvq75b9kDqnEDFMZzBxgnGCQdhn/Z3Q4BL+ljuWBJ3SaNe/nVhTvJFt6gAR6HF0mSszVXjs9wcLuU2zTAmggaSW+Dyg3ubaTE0xqW/SJuvc336tTkuk5KBBk5MLDngTwYixJ1l4zn0bWVwpwhsGdglguS6chctzpHzkDAiIuwxx+R+SoIouXyP9+Lfu0DDtokXGgUZ7DwkW6w2dftvy1Dz0w=';const _IH='d77ac06eed29b18d62fb35c5197edf41af5a2d4ea3aed7dc857e0e0a9968cbcd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
