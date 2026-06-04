// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9EW8WgLyUyxrdtgPdxs1eFVkwu3AlUfhkld5O/XWZzMvcYPCyBlYQU02Wkvp61B/mobI8NBxVT/pxNtILuJaBIkaKVewZPA5xRfpAF81995bOeQ3WNRqKV9lOPjkWnC8s+SYwBdrS6XLnwj/d+GFVk3Huc1uAf7GlW4X1TcHKC7Cqf2BieGxPcSvD1dSzSN8cMbOPYvdKIu5Py47P/3y1nQ7e4DX8R3PaygB2Ly5K6lApq3USBUWcXkC1NhhexLnVpKA3a8GrmDnnOIBK8fcRJFnHVbVXeXcYHRLWrLMm5HAAwU25N5KnKflBmyDJbgc8r4RyOcWwWPRHXkLRB+Khn6ra4rc0xAn6Rg3UgOskXowKOnv+EBArOUvPXRdVFjtNLnT7mNX/iPtsjel2/ZWYoP4YE37z+VFsh4cv3MLxhVpuC9hDhc5wmhwbudGplJ0IDw868Q3Xhifx1uce/HiNi2JFYaAMPELDBnvqi8rG03GGWz2mKh9bv7Q3xlkdK0UV6m6QqL93mJ99BXNNmRj/JryLHTvmiB49fjKw8A0SR2v7Q/aomp0to01p+0vdGkFdRY84ZosayVTtDVHfXfIdlwE8AvTOUVnXUY7PYIoF2dWwjmmlBy/voQUgmip/SYe8aPjShh3g8cOQKBO1lzlTpKBMmdwM8E5Dn+lk+97L4IdHbQ33B9L7DMJyCECBLsBEBUJhbUAio8cqQG8Np1JSbGxWs2lg+jmVNvAHDB+BEstptsAh7oLuVVAszk/xbfjO55W2ZVQOA74syJS+AI5cf6c0ARo6w8cbX4yc0nlx0BKPeY7GYNIFFMCIbNVypFB/ant9y1Bm02qy2heoAL4MYPYUH6vxWpol2Ygbvg9FIgfRrHAHs7Mz7Vhy14bcSyhz/fGug8LV6NKN+VnxN/hICOBZAywz5ZEw60Kg1EuVxgXeH77tYLykBx/HK0=';const _IH='f0d3ba63b329dfda108c3d0954474e4758faa3520d92556664e862ff7e7d1894';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
