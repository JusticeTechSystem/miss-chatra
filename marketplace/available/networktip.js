// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BsL3CE54hMN7g7AiLVkwVxKQDjZQ5Q7T7q2eSAJNwwZfAnXajjK2guyVI5FPtUgIFgEvrAiYarTTt1NAxlivbr0MtFwd3PZoRchFzdETvFTAKkItpc76RbOXODhUpKGSIbarahbikLbtDipUtkJ5Ok7ZTrWOwHBBa9DnACWaSuRVtV6H9CE5Dz+k+72wHvxCU2bOgx0rHvLWNF4xuF1DCZ2xgYZ7STTzedrdrtUerXSjAixDjUumkzIyhdeNJ5nxGXMwbK1YnLmsYHUYUYK6WoO9dBrl+S0uYXEfjz/TZfpsl4kIFQC9iYXA4RFoha/TSKCjInZKOaP1CUKOBUs/iai502qOnMydumeNwv5hJEHSUx4nuTz5NHnqq8/Yl/QT8kc+k2csSQ/y/zI64UvYxwqYXyqoe0AnsHXCB+/q0PqaQhfgsizHzC9u9eaOJIBz0I1/mdfTnk2hudxsD6BfwhbTSt4oNggFMHPteRgb8u+oyOkD7CXmakKgP11RrzlhPn7oZTeu11zffH/iPAEi98TSFhBz52wlBvk0XsUamDGD2B7bsQzb9pkhANeQvng0p3suBbw1Di2ZrTVtksaSiQ1+NPkEQns+lyGd49G5BdFImQbOthsvfsPJ0BXMH4HTlh1B3oBbKCV4L/Rn/L1/TJzO5kHMhWhvr4VN+wRTEG2jwedMEaWn8podYsmSx0eOJO3t0+22Lb0ASWf2JdwNrqwXGFbNd3EyrW9ASFR65mvyQNXjpuDerMnt/EVasmSCDr3R/evEPTnG3k5jlBNJANT+sD+uvHjT1zpoRjxILYSC0BSj7uOTEk15z/nBspIbDFkbvp1ZFy+UNJ9OWslduSt+tRYyXhL22xuq/2r58roWAhVCb6nbsXyzH9/YuLk/8HzWPgAgco1ZZWkTyWW7QvKmw1O6fUzbL7JQ6kk+2DU3Wgp0LbE9Q3H8VN4YvcXFitHvXk4kqXSN82lcph7Gt8IyMvFzn/k01/dilhy8jLN4QyV/DhNxMQ86h683+z3b9MhCkI0fSbTjn8uKIa9EDzRNPnD65j40DId/nlW7OPl6DfujUUcQAtCX3rga+fnMZFYL2J6qP6ItuMTX+QnAUC79EhpWnXL2dwOTEmgDrFFCTB6ZCJQ9iYea4QSGE0yS/t//hcz9+pz37eGmHHTOe6iaiwhDtjuFBr9jp2UpbaZoBHOctYQXqEhq5ChQMYrdk0Km33fD+w==';const _IH='160e0110ed4226e254ef0fb64fb10c0d9f35c2283e8541f5ca9d0f9b98f23c10';let _src;

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
