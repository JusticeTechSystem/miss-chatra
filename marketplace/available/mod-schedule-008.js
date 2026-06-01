// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwETv2wLZUumSvvv1nK4cWOlWYrF35hKAK0+xsQibWs9Nc/ZzaQAazPiUTHjZWHUD6o4srXOgprm5lhVbR4/O0P34Q87vi7oL8v+H35h1GgNFcTllVlMHEE/y8sOokrGZYVZH4earCPwN5vG6M75cag1mTUaJqOhLnB90y+KXlPSBFn48JgyXm9+EAHTMILBlkEwn0RNhmze8WJcCwUwTAuDUKvaHVn1GwaDE/iUcTfHi/dH7F0DdZ6mIG7aUjh51x+hGOar1recPjcn68w4MsNkM/2LDhSH/azFdtI7HNFGwYNKs9r9RDcRojJeHtnD30lvDaKkw0MaTXYX6X8x1nGupUu7CDfIM5TKW91tMxVckkTEj1Cu9BqdOweQApP7oe6chDN+ZohriXbt+TUqa22HyEocLp2bdCdW9CS3a5glI77pxwhatIMmHyS9Lh7QW7rUPFOfB6TydEulKB46PNBAg488BFaM+VDf0mJWzTp+wsblAXzXqv2TZnbjp1b4OnKhFp3BAufZNHvtUrUffMW2r5gfdEua4kdWdHM0CH4jLww+17IY4jvTMcMEtcerqdTk6yNO5SDc+shYQtEtaiqoGM9BVl8mE6H5li9AhZ0iuJOmDtPB2oUP4rVL3lpb8LbJ7Tw8ZFXQEkTB8vtASWdZsySfJpwA4gkxX420SZqHO7ROZVUixeF5GYKA+OiXhrVKkB0CY+xN/wpOneErRBVtdekYf8unx1px1t8eXiZGNKaaQ/h7Rv1GOlT00Gbc/KWwW7SOamhSrtPIjqvQQU3Fs4oRO5WqKXM6EzQR6KzxVs7rz13UUIUeQJSbA/TjLE1HVOCejoW2QXaVie3qJrhXoDRlNxhkcVctbqumZs0dfnsYrmKQg0S8Ux1ZAjBOjOCXBZxrOvKUv2JGk2auXxEEdGJ6/WeFLbRQ3MnwBL6RGIgsxbDC6PiJ5xV4W0BsmxUw9yKFhAQvvVYXPNZNSg8S7q//uBgb/R5UPgO8P20oiFrl2jf56l92jlKxNhdgHerf746oREw4tWwHEG+MWf3k+eVwnrdrBYvGfPBxb10KJJkIgWlAUH7IcilFZvqjxcYMO8yS/tc+efZD27xvMvmBbcBOo8Lcu7RiqJDfzY0OmsyuVCZRFh/rxm+VmjkDy3FK1J2NRgk/rZhjKErrNgv1xndQGLAJOBCllaMWyIeXBhOEekOqbx1K2lCRNH/+kAxkKVQ0MgIM5mBALIBD3VQq+HDS1D+mRAQIS9HGwy/W/HyjfBM2phjrDs3C0oGrXLxU2SItDY8KSQ8whv3UI59jtrwwEg1lp02gC7rH08MVT8tvHtv6nnDaJ+kFN1DIz/D41ivAfxt/rBJHOqag8qJYaQA0esZSJvZpPLRR9xeKzAAPlsAnxHm5SFmqlLtfjKvO';const _IH='a84beb64d445c4ace4da1ef71daa62a660875948799e149a4a12d7fe58022533';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
