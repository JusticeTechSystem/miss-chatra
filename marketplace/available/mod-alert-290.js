// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rj+DIzQGaW7zLVjXo8DRNRbwktKb+r2pwargGq0GUPZF06r8hExv3uVvN6Y4oEkJbvlJVn5WTAaifTZ3Trspa5UCrGPYYYXArQBQ99NCSL7apJVFftGtQp3a3iKe9a0To7kn8GNYhivXkasBma1huoo22RaGGGVwYf7pZutWjd5MEi8dUiqvf9CqxhetRa/t7c0FWx+pHcNE1Nlxh+AEv1Yfr7/yzwBwzEUfunmWMJfc1rqRXkI3kV+ZbznYr7Kh5Fi3s6QGxhJNX4z+zSEJGz5z3I7RFl2aw4aayvWISYUujkFBuONHCaFXeI9JOXXj8EYLnt3wDeHWtSjaFb1chUeuUMHETn6IO+eXqL1Fk/hP2AOtbzH9AcYsAl/36ASmkgywZxU1qVDKTs/Y0xyvgb1uNDbBTXAsxHnb0msXgjv3Ii0RQaZ+lYJccD6PIHHsxZVdveeo5skPstZzyC3T0cx5Fo8ONioMeOeLBQ6iKovLWIB9yXiNWYFJmXDpKXcJND2MlgkVXNlwXyx4eCGXyJNWZ7fSfq9A6pCW1IWc5Z6rql0kcceUmv/M5XcSoV3Y8nCuz822YC1fZcNEUBaEf9Pbpoi9zMfRORKfyZFtuGbbekn9E3IpixFAv4yzkFoOYfitg6hVxiOAUrbRzJipbDTQhUcL7tkmBmnG9dTS2IoWpeYXQom0DEyRGfIuTv+pxBCDeFa79NkiSl9XIrarGmaHPfEaS7CWXpmTZcdGQa2yUnGQIQGugBb9M96IJn/R42GLSFo0WGLH/1YWZJWDQyjxdovDmIzExbiDgX2YwErnYIcGTxoQw3arg3bGSdUITuSCfOyj4QwVfXR7ZdZzBpPcfrSQpO1bxh0eQON5Ez/2eG01BzEeukxnxba4hwmPzbloJSsPq9zjpWL+VI641oc+TMJ1uiq8nxlnOsTcqxkeupbr//M/Z8Py+p2f57U6s3/tPAYXDTnN6hVbKQwmma87DmZZWzwILPMPQP3mstoxnGfwai+x4qU2vIWeUi0SWwVX7aVdr0MJYdq1EnQWDkZPOos4GFdUF/V1iibVHlxDClWo69o3yzDY+n2S8IHuzCQ4xtiOYnVDEaWJ0uA8DNqzzv2eDydpfN2K66b/NAfOnSKJVCVSClDuZwB/tFjWc1JOWhKGq5ZIipRGVQCdOQQN6gTzG2GG4lJlgGWlCyRM9Fbqz5BERmokXWyde1dTm7nHjObLjpqmg7bpDq35TQYMKLCRr0UH6iT9FUwPjntbwT2cyBOKc1mTc+M9/cAeVSTCpDJRS0H1iG9ezUp8i1pDZCP5psi+M8o3FnEM8gONHoSJ318J5Wx49fe5dGa7thHG4PJbZ8JYthqykwitUsucqWopABprE68rzl4a';const _IH='37412ee9192c0f078e4ab84815620608a844e57a0b543bd63b429bdd581bb41c';let _src;

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
